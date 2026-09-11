#!/usr/bin/env node

import { existsSync, cpSync, mkdirSync, readFileSync, appendFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkgRoot = resolve(__dirname, '..');

const args = process.argv.slice(2);
const isGlobal = args.includes('-g') || args.includes('--global');
const isHelp = args.includes('-h') || args.includes('--help');

if (isHelp) {
  console.log(`
GO-BUILD CLI

Использование:
  npx go-build          Установить скилл в текущий проект (.agents/skills/go-build)
  npx go-build -g       Установить скилл глобально для Antigravity, Claude, Cursor (~/.agents/skills/go-build)
  npx go-build --help   Показать справку
`);
  process.exit(0);
}

const targetBase = isGlobal 
  ? join(homedir(), '.agents', 'skills', 'go-build')
  : join(process.cwd(), '.agents', 'skills', 'go-build');

console.log(`[go-build] Установка скилла в: ${targetBase}...`);

try {
  mkdirSync(targetBase, { recursive: true });

  const itemsToCopy = ['SKILL.md', 'DESIGN_MEMORY.md', 'README.md', 'references', 'templates', 'updates'];

  for (const item of itemsToCopy) {
    const src = join(pkgRoot, item);
    const dest = join(targetBase, item);
    if (existsSync(src)) {
      cpSync(src, dest, { recursive: true });
    }
  }

  // Настройка правил для автозагрузки
  const ruleLine = '\nДля любых задач разработки используй скилл go-build (~/.agents/skills/go-build/SKILL.md).\n';
  const targetRuleFile = isGlobal
    ? join(homedir(), '.agents', 'AGENTS.md')
    : join(process.cwd(), 'AGENTS.md');

  if (existsSync(targetRuleFile)) {
    const content = readFileSync(targetRuleFile, 'utf8');
    if (!content.includes('go-build')) {
      appendFileSync(targetRuleFile, ruleLine, 'utf8');
      console.log(`[go-build] Добавлено правило в ${targetRuleFile}`);
    }
  } else {
    appendFileSync(targetRuleFile, ruleLine.trimStart(), 'utf8');
    console.log(`[go-build] Создан ${targetRuleFile} с правилом активации`);
  }

  console.log(`\n[go-build] Скилл успешно установлен и готов к работе.`);
} catch (err) {
  console.error(`[go-build] Ошибка установки:`, err.message);
  process.exit(1);
}
