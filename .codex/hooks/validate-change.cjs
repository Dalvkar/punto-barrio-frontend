const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');

const input = JSON.parse(fs.readFileSync(0, 'utf8') || '{}');
const patch = String(input.tool_input?.command || '');
const root = path.resolve(__dirname, '..', '..');
const changed = [...patch.matchAll(/^\*\*\* (?:Add|Update|Delete) File: (.+)$/gm)]
  .map((match) => match[1].trim().replaceAll('\\', '/'))
  .filter((file) => !file.startsWith('.codex/'));

if (!changed.some((file) => /\.(ts|tsx|js|jsx|json|css)$/.test(file))) process.exit(0);

const result = spawnSync('npm', ['test'], {
  cwd: root,
  encoding: 'utf8',
  shell: process.platform === 'win32',
});

if (result.status !== 0) {
  process.stderr.write(`Pruebas posteriores fallidas para ${changed.join(', ')}.\n${result.stdout || ''}${result.stderr || ''}`);
  process.exit(2);
}
