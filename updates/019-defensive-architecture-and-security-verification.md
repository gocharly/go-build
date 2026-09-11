# Обновление стандарта GO-BUILD: v1.17.0 — Defensive Architecture & Security Verification

**Дата**: 2026-09-11  
**Версия**: v1.17.0  
**Приоритет**: CRITICAL  
**Статус**: Активен  

---

## 1. Причина обновления

Анализ ведущей библиотеки практической кибербезопасности для ИИ-агентов (`anthropic-cybersecurity-skills`, 818 скиллов, фреймворки MITRE ATT&CK v19.1, NIST CSF 2.0, ATLAS, D3FEND, NIST AI RMF, MITRE F3) выявил критическую необходимость стандартизации верификации безопасности в продуктах GO-BUILD.

Ранее стандарт обладал мощной визуальной дисциплиной (Anti-AI-Slop, Border Last) и модульной архитектурой, однако проверки безопасности носили общий характер («OWASP Top 10», «валидировать данные») без конкретных операционных гейтов и приемочных критериев.

---

## 2. Основные нововведения стандарта

### 1. Справочник защищенной архитектуры (`references/defensive-architecture-and-security.md`)
Внедрен компактный нормативный документ по ключевым векторам защищенного кода:
- **Zero-Trust Input Validation**: закрытые схемы без непредусмотренных полей (`strict()` в Zod, `extra='forbid'` в Pydantic, `DisallowUnknownFields()` в Go);
- **Data Layer Binding (BOLA / IDOR Prevention)**: обязательная привязка каждого запроса чтения/мутации к `user_id` и `tenant_id` из контекста сессии;
- **Injection & XSS Defense**: исключительно параметризованные запросы к БД, контекстное экранирование, запрет небезопасного рендеринга;
- **Auth Hardening**: запрет JWT алгоритма `none`, флаги cookie `HttpOnly`, `Secure`, `SameSite`;
- **Supply Chain Gate**: защита от Typosquatting (сверка с реестром) и сканирование пакетов на CVE (`CRITICAL/HIGH`);
- **Agent & Tool Safety**: строгие схемы аргументов тулов (`additionalProperties: false`), санитизация метаданных от prompt injection, принцип Fail-Closed при вызовах.

### 2. Security & Defensive Verification Check в Разделе 16 (SKILL.md)
Чеклист сдачи проекта дополнен 9-м блоком проверки защищенности:
- [ ] Input Zero-Trust
- [ ] Access Control & BOLA/IDOR
- [ ] Injection Prevention
- [ ] XSS & Output Safety
- [ ] Auth & Session Hardening
- [ ] Supply Chain & Typosquatting

### 3. Модернизация Блока 9 предпроектного анализа (FULL_PROJECT)
Блок 9 шаблона ТЗ преобразован в **«Слабые места, риски и Threat Model»**:
- Определение поверхности атаки (Attack Surface);
- Оценка критичности и классификация обрабатываемых данных;
- Проектирование изоляции субъектов и защиты от IDOR до начала кодирования.

### 4. Усиление аудита библиотек (Supply Chain)
Чеклист Раздела 5 и `references/resources.md` дополнены обязательной проверкой пакетов на Typosquatting и известные уязвимости.

---

## 3. Измененные файлы

1. `references/defensive-architecture-and-security.md`:
   - Создан нормативный справочник защищенной архитектуры и верификации безопасности.
2. `SKILL.md`:
   - Раздел 5 дополнен аудитом Supply Chain & Typosquatting.
   - Раздел 16 дополнен блоком 9 («Security & Defensive Verification Check»).
   - Раздел 19/20: версия стандарта повышена до `v1.17.0`.
   - Блок 9 предпроектного анализа расширен моделированием угроз (Threat Model).
3. `templates/analysis-template.md`:
   - Структура блока 9 дополнена пунктами Attack Surface, Data Sensitivity и IDOR risks.
4. `references/resources.md`:
   - Дополнен пункт проверки Supply Chain & Typosquatting.
5. `README.md`:
   - Обновлена версия стандарта до v1.17.0 и перечень архитектурных столпов.
6. `CHANGELOG.md`:
   - Зафиксирован релиз v1.17.0.

---

## 4. Study / Review
**Priority**: CRITICAL
- [x] Создать нормативный справочник `references/defensive-architecture-and-security.md`
- [x] Интегрировать проверки в `SKILL.md` (Разделы 5, 16, предпроектный анализ)
- [x] Обновить `templates/analysis-template.md` и `references/resources.md`
- [ ] Всегда использовать закрытые схемы валидации ввода (`strict` / `extra='forbid'` / `DisallowUnknownFields`)
- [ ] Проверять Data Layer Binding (`tenant_id`, `user_id`) на всех операциях с БД
- [ ] Сверять написание внешних пакетов перед установкой (Anti-Typosquatting)
- [ ] Проходить блок Security & Defensive Verification Check перед сдачей кода
