# Research 001: Anthropic Cybersecurity Skills & Security Verification

## Topic
Анализ репозитория `anthropic-cybersecurity-skills` (818 скиллов, 34 домена, 6 фреймворков безопасности) и внедрение стандартов защищенной архитектуры, Zero-Trust валидации и рельсового конвейера в GO-BUILD.

## Date
2026-09-11

## Sources
* Репозиторий `mukul975/anthropic-cybersecurity-skills` (MITRE ATT&CK, NIST CSF 2.0, ATLAS, D3FEND, AI RMF, F3)
* Аналитические отчеты 3 специализированных субагентов (Security Architecture Analyst, Security Verification Analyst, GO-BUILD Integration Strategist)

## Findings
1. **Таксономия и гранулярность проверок**:
   - Безопасность наиболее эффективна не как общий свод пожеланий, а как конкретные бинарные Pass/Fail проверки (секторы Web Security, API Security, DevSecOps, Supply Chain).
2. **Критические уязвимости кодогенерации AI**:
   - BOLA / IDOR: отсутствие привязки к `user_id` / `tenant_id` при выборке или мутации данных по ID.
   - Mass Assignment: прием невалидированных полей в DTO.
   - Supply Chain: слепая установка пакетов (риск Typosquatting и известных CVE).
   - SQLi / XSS: конкатенация строк в запросах к БД и сырой рендеринг HTML.
3. **Рельсовый конвейер и система вознаграждения**:
   - Перевод разработки на 6-фазный State Machine с четкими границами («DO & ENCOURAGED» vs «DON'T & FORBIDDEN»).
   - Введение оцифрованного Engineering Reward Score для стимулирования дисциплины AI-агента.

## What changed in GO-BUILD
1. Создан нормативный справочник `references/defensive-architecture-and-security.md`.
2. Создан справочник `references/architecture-naming-and-workflow.md`.
3. Создан справочник `references/pipeline-and-reward-engine.md`.
4. В `SKILL.md` внедрены:
   - 6-фазный рельсовый конвейер;
   - Чек-лист Security & Defensive Verification Check (Раздел 16.10);
   - Чек-лист Architecture & Naming Audit (Раздел 16.7);
   - Прогрессная плашка Engineering Reward Score (Раздел 18.4).
5. Созданы update-файлы `019`, `020`, `021` и обновлен `CHANGELOG.md`.

## Implemented
- [x] Анализ репозитория через 3 субагента
- [x] Интеграция нормативных справочников в `references/`
- [x] Обновление спецификации `SKILL.md`
- [x] Фиксация в `CHANGELOG.md`

## Still to study
- [ ] Автоматизация сканирования зависимостей через локальные CLI-утилиты при их наличии в проекте
