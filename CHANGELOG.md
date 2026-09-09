# GO-BUILD Changelog

Все значимые изменения стандарта GO-BUILD фиксируются в этом документе и детализируются отдельными update-файлами в папке `updates/`.

---

## v1.13.0 — Karpathy Guidelines Integration: Surgical Precision & Engineering Simplicity
**Дата**: 2026-09-09  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/013-karpathy-guidelines-engineering-discipline.md`](./updates/013-karpathy-guidelines-engineering-discipline.md)

### Добавлено:
* **Правило «17. Инженерная простота, проверка шагов и конструктивное возражение (Karpathy Discipline)» (Раздел 7 в SKILL.md)**:
  * **Конструктивное возражение (Push back when warranted)**: открыто предлагать более простой путь при оверинжиниринге; показывать компромиссы (tradeoffs); задавать вопросы при неоднозначности вместо скрытых догадок.
  * **Тест старшего инженера (Senior Engineer Simplicity Test)**: запрет спекулятивной гибкости и одноразовых абстракций; правило «200 строк в 50».
  * **Пошаговая верификация (Step → Verify)**: привязка явного критерия проверки к каждому шагу плана.
* **Блок валидации Karpathy Discipline**: чек-лист Раздела 16 дополнен проверками Anti-Style-Drift, Senior Engineer Test, защитой legacy-кода и Step → Verify.
* **Глобальная синхронизация**: правило 17 добавлено в `GEMINI.md`, `~/.gemini/GEMINI.md` и `.agents/AGENTS.md`.

### Изменено:
* `SKILL.md`:
  * Обновлено правило 11 («Очистка кода»): закреплен принцип «Clean up only your own mess» — запрещено самовольно удалять чужой legacy-код.
  * Обновлено правило 13 («Принцип минимального изменения»): внедрен строгий запрет попутного рефакторинга и смены стиля (Anti-Style-Drift); тест diff (каждая строка прямо следует из запроса).
  * Внедрено правило 17; версия повышена до `v1.13.0`.
* `DESIGN_MEMORY.md`: в Avoid Rules добавлены правила `Avoid: Drive-by Refactoring & Style Drift` и `Avoid: Deleting Unrelated Legacy Code`.
* `templates/subagent-team-blueprint.md`: в фундаментальные стандарты и роли `System Architect`, `Frontend Engineer`, `Backend Engineer`, `Code Reviewer` интегрированы требования Karpathy Discipline.
* `README.md`: актуализирована версия v1.13.0 и список правил.

### Study / Review:
**Priority**: CRITICAL
- [x] Интегрировать правила 11, 13, 17 в `SKILL.md`, `GEMINI.md`, `AGENTS.md`
- [x] Обновить `DESIGN_MEMORY.md`, `subagent-team-blueprint.md` и `README.md`
- [ ] Контролировать diff перед коммитом на прямое соответствие запросу (без Style Drift)
- [ ] Проверять наличие условий `verify` во всех пошаговых планах

---

## v1.12.0 — Concise and Clear Communication Discipline
**Дата**: 2026-09-09  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/012-concise-and-clear-communication.md`](./updates/012-concise-and-clear-communication.md)

### Добавлено:
* **Правило «16. Краткая и понятная коммуникация» (Раздел 7 в SKILL.md)**:
  * Запрет засорения чата лишним текстом, раздутыми объяснениями и повторением очевидного контекста.
  * Запрет пошагового протоколирования каждого автономного технического действия и сброса промежуточных логов/проверок.
  * Вывод только важного результата, проблемы или требуемого действия.
  * Простой понятный язык без лишнего технического жаргона; исключение ритуальных приветствий, формальностей и пустых заключений.
  * Фундаментальный принцип: *«Меньше текста — больше полезной информации.»*
* **Подраздел 18.3 в SKILL.md**: регламентирована дисциплина сообщений.
* **Блок валидации коммуникации**: в чек-лист `Agent Behavioral & Scope Check` включена проверка краткости и ясности ответа без «воды».
* **Глобальная синхронизация**: правило 16 добавлено в `GEMINI.md` и `.agents/AGENTS.md`.

### Изменено:
* `SKILL.md`: внедрено правило 16 в Раздел 7; обновлен чек-лист Раздела 16; добавлен подраздел 18.3; версия стандарта повышена до `v1.12.0`.
* `templates/subagent-team-blueprint.md`: фундаментальные стандарты и инструкция `Code Reviewer` дополнены требованием краткой и понятной коммуникации.

### Study / Review:
**Priority**: CRITICAL
- [x] Интегрировать правило 16 в `SKILL.md`, `GEMINI.md` и `AGENTS.md`
- [x] Обновить регламент работы команды в `subagent-team-blueprint.md`
- [ ] Контролировать лаконичность ответов перед каждой отправкой сообщения

---

## v1.11.0 — Search Before Create Discipline & Reuse First
**Дата**: 2026-09-09  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/011-search-before-create-discipline.md`](./updates/011-search-before-create-discipline.md)

### Добавлено:
* **Правило «15. Сначала искать, потом создавать» (Раздел 7 в SKILL.md)**:
  * Обязательная проверка наличия подходящей реализации перед созданием новой функции, компонента, модуля, пакета или файла.
  * Приоритет переиспользования и адаптации над созданием нового решения.
  * Проверка уже установленных зависимостей перед добавлением новых библиотек.
  * Запрет создания теневых дубликатов из-за косметических различий или создания обходных путей вместо исправления существующего кода.
  * Фундаментальный принцип: *«Сначала найти существующее решение. Затем переиспользовать. Затем изменить. И только если ни один из вариантов не подходит — создать новое.»*
* **Блок валидации отсутствия дубликатов**: в чек-лист `Agent Behavioral & Scope Check` включена проверка соблюдения принципа «Сначала искать, потом создавать».
* **Глобальная синхронизация**: правило 15 интегрировано в `GEMINI.md` и `.agents/AGENTS.md`.

### Изменено:
* `SKILL.md`: раздел 7 дополнен подразделом `### 15. Сначала искать, потом создавать`; чек-лист раздела 16 обновлен; версия стандарта повышена до `v1.11.0`.
* `DESIGN_MEMORY.md`: в Avoid Rules добавлено правило `Avoid: Redundant Code & Duplicate Creation (Сначала искать, потом создавать)`.
* `templates/subagent-team-blueprint.md`: обновлены фундаментальные стандарты и инструкции ролей `System Architect`, `Frontend Engineer`, `Backend Engineer` и `Code Reviewer`.

### Study / Review:
**Priority**: CRITICAL
- [x] Интегрировать правило 15 в `SKILL.md` сразу в Раздел 7 и чек-лист Раздела 16
- [x] Синхронизировать глобальные правила `GEMINI.md` и `AGENTS.md`
- [x] Обновить `DESIGN_MEMORY.md` и `templates/subagent-team-blueprint.md`
- [ ] Выполнять обязательный аудит имеющегося кода перед предложением новых сущностей

---

## v1.10.0 — Agent Behavioral Discipline & Strict Scope Adherence
**Дата**: 2026-09-09  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/010-strict-scope-and-behavioral-discipline.md`](./updates/010-strict-scope-and-behavioral-discipline.md)

### Добавлено:
* **Жёсткие правила поведения агента (Раздел 7 в SKILL.md)**:
  * **9. Строгое соответствие запросу**: Агент реализует только то, что явно запросил пользователь. Запрещено самостоятельно добавлять не запрашивавшиеся тексты, кнопки, поля, блоки, страницы, уведомления, статусы или другую функциональность «для удобства», «для красоты», «на будущее» или «по стандарту».
  * **10. Модульность**: Повторно используемую логику выносить в модуль с одной понятной ответственностью и публичным API через `import`, без копирования и формализма.
  * **11. Очистка кода**: Удалять неиспользуемый код, импорты, зависимости, мёртвые функции, отладочные логи и временные решения.
  * **12. Минимум проверок**: Добавлять только проверки, необходимые для корректной работы; исключить проверки «на всякий случай» и обработку гипотетических ошибок.
  * **13. Принцип минимального изменения**: Менять только необходимые файлы и код. Не рефакторить несвязанные части проекта и не менять поведение за пределами задачи.
  * **14. Запрет самовольного расширения**: Категорический запрет придумывать дополнительные функции, UI-элементы, тексты, настройки, проверки, состояния, страницы, API, зависимости, абстракции и сценарии.
* **Блок валидации `Agent Behavioral & Scope Check`**: включен 6-м обязательным чек-листом в финальный аудит перед сдачей проекта.
* **Глобальная синхронизация**: правила 9-14 интегрированы в `GEMINI.md` и `.agents/AGENTS.md`.

### Изменено:
* `SKILL.md`: внедрен Раздел 7 сразу после 6 базовых столпов; разделы 8-18 сквозным образом перенумерованы; операционные правила дополнены пунктом 3 (Strict Scope); версия стандарта повышена до `v1.10.0`.
* `DESIGN_MEMORY.md`: в Avoid Rules добавлено правило `Avoid: Scope Creep & Unauthorized Expansion`.
* `templates/subagent-team-blueprint.md`: обновлены инструкции Frontend Engineer, Backend Engineer, Code Reviewer и регламент Фазы 5 на 6 обязательных чек-листов.

### Study / Review:
**Priority**: CRITICAL
- [x] Интегрировать правила 9-14 в `SKILL.md` сразу после 6 столпов
- [x] Синхронизировать глобальные правила `GEMINI.md` и `AGENTS.md`
- [x] Проверить все роли субагентов на наличие запрета самовольного расширения
- [ ] Разработать процедуру сверки diff перед каждым ответом на предмет отсутствия лишних правок вне скоупа

---

## v1.9.0 — Ban on Cringe Buzzwords, Fake Presets & Pseudo-Hacker Slop
**Дата**: 2026-09-08  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/009-ban-on-cringe-buzzwords-and-fake-presets.md`](./updates/009-ban-on-cringe-buzzwords-and-fake-presets.md)

### Добавлено:
* Категорический запрет **PSEUDO-HACKER SLOP**:
  * Запрещены термины `Bypass Ready`, `Fast Injection`, `Kernel Inject`, `Stealth Inject`, `Memory Bypass`, `Hook Ready`, `Payload Active`, `Anti-Detection Ready`. Применяются строгие инженерные названия (`Готов к работе`, `Подключение`, `Загрузка модуля`).
* Категорический запрет **CHEESY 2-OPTION PRESETS**:
  * Запрещены шаблонные пары опций из чит-меню (`Ghost & Blatant`, `Legit vs Rage`, `Stealth vs Aggressive`, `Silent vs Loud`). Запрещено искусственно навязывать «2 options» ради видимости функционала; разрешены только реальные параметры (`TCP / UDP`, `Стандартный / Расширенный`).
* Категорический запрет **HYPERBOLIC PERFORMANCE SLOP**:
  * Запрещены пустые хвалебные слова в названиях опций и бейджей (`Top Performance`, `Ultra Performance`, `Maximum Speed`, `Turbo Boost`, `Hyper Speed`, `Extreme Power`, `Fast Mode`). Оптимизация формулируется через конкретный технический эффект (`Энергосбережение`, `Аппаратное ускорение`).
* Категорический запрет **UMBRELLA MARKETING CLICHÉS**:
  * Запрещены клише `All-in-One`, `Ultimate Suite`, `Complete Solution`, `Full Pack`. Опции называют вещи своими именами (`Базовый комплект`, `Полная установка`).

### Изменено:
* `SKILL.md`: раздел 7 дополнен подразделом 21, раздел 12 синхронизирован, чеклист Anti-AI-Slop в разделе 15 расширен до 25 пунктов, версия стандарта повышена до `v1.9.0`.
* `references/design-guardrails.md`: добавлен раздел 20, чеклист в разделе 23 расширен до 25 пунктов.
* `DESIGN_MEMORY.md`: в Avoid Rules внесены 3 новых запрета долговременной памяти.
* `templates/subagent-team-blueprint.md`: промпты Frontend Engineer, UX Reviewer и Code Reviewer дополнены проверками на отсутствие псевдохакерского жаргона и фальшивых пресетов; чеклист синхронизирован до 25 пунктов.

### Study / Review:
**Priority**: CRITICAL
- [x] Провести аудит всех интерфейсов на отсутствие псевдохакерского жаргона (`Bypass Ready`, `Fast Injection`)
- [x] Исключить надуманные бинарные опции (`Ghost & Blatant`) в пользу реальных инженерных параметров
- [x] Устранить пустые маркетинговые ярлыки (`Top Performance`, `All-in-One`)
- [ ] Разработать автоматическое правило линтинга для выявления запрещенных ключевых слов в UI-строках

---

## v1.8.0 — Radical Header Minimalism & Ban on Header Badges / Corner Dots
**Дата**: 2026-09-07  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/008-ban-on-header-badges-dots-and-overload.md`](./updates/008-ban-on-header-badges-dots-and-overload.md)

### Добавлено:
* Категорический пожизненный запрет **CORNER STATUS DOTS**:
  * Запрещены любые зелёные, жёлтые, белые, серые точки/индикаторы в углах окна, рядом с названием продукта или в шапке. Статус выражается текстом в функциональной зоне, а не декоративными точками.
* Категорический пожизненный запрет **HEADER BADGES & PILL CLUTTER**:
  * Запрещено размещать в шапке утилиты бейджи тарифов (`Pro`, `Premium`, `Free`), статусы аккаунта и бейджи протоколов (`WireGuard`, `OpenVPN`, `TCP/UDP`).
* Запрет **OVERLOADED TOP BLOCK**:
  * Верхний блок содержит только чистое название продукта или остаётся невидимым. Никаких рядов бейджей, иконок и украшений.
* Запрет **NO ELEMENTS JUST FOR BEAUTY**:
  * Полный запрет на добавление элементов интерфейса ради украшения или заполнения пустоты. Только прямое функциональное назначение.
* Формула максимальной чистоты **PURITY FORMULA**:
  * Интерфейс утилиты строится строго по канону: **[Имя Продукта] + [Основная кнопка] + [Статус] + [Скорость / ключевая метрика] + [Селектор]**.

### Изменено:
* `SKILL.md`: раздел 7 дополнен запретами на точки и плашки в шапке; раздел 10 переработан под стандарт Radical Header Minimalism; чеклист раздела 15 дополнен контролем чистоты шапки; версия повышена до `v1.8.0`.
* `DESIGN_MEMORY.md`: в Avoid Rules внесены 4 новых правила и каноническая формула чистоты.

### Study / Review:
**Priority**: CRITICAL
- [x] Очистить шапку `compact-vpn` от зеленой точки, бейджей `Pro` и `WireGuard`
- [ ] Разработать автоматический линтер для запрета декоративных индикаторов в Header
- [ ] Внедрить Purity Formula во все шаблоны утилит и виджетов

---

## v1.7.0 — No Fake Product Context & User Request > AI Atmosphere
**Дата**: 2026-09-07  
**Приоритет**: CRITICAL  
**Update Log**: [`updates/007-no-fake-product-context.md`](./updates/007-no-fake-product-context.md)


### Добавлено:
* Категорический запрет **NO FAKE PRODUCT CONTEXT**:
  * Запрещено самостоятельно выдумывать и добавлять версии (`PRODUCT // V1.0`), билды (`BUILD 2026.09`), релизы, имена внутренних систем (`SYSTEM V2.4`), технические статусы, режимы работы (`IDLE SCAN`), ярлыки сканеров, названия движков (`NEURAL ENGINE`) и бессмысленные ID.
  * Если пользователь не попросил явно и информация не нужна для работы продукта — она не создаётся.
* Правило **VERSION INFORMATION IS NOT DECORATION**:
  * Запрещено автоматически писать `// V1.0` или `VERSION 1.0` рядом с названием продукта. Версия допустима только если она функционально необходима (About, DevTool, поддержка) или напрямую запрошена. Версия — не украшение хедера.
* Правило **NO FAKE TECHNICAL AESTHETIC**:
  * Запрещено создавать видимость технологичности случайным системным текстом (`IDLE SCAN`, `SYSTEM READY`, `CORE ACTIVE`). Технический текст не является дизайном.
* Принцип **STATUS MUST HAVE CONSEQUENCES**:
  * Любой статус обязан отвечать на вопрос: *«Что изменится для пользователя, если этот статус изменится?»*. Если ничего — статус не должен существовать.
* Стандарт **GREEN DOT ≠ GOOD DESIGN**:
  * Зелёная точка запрещена как визуальный аксессуар (`● ONLINE`, `● IDLE`). Индикатор разрешён строго по 4 критериям (реальный, динамический, значимый, необходимый).
* Стандарт **PRODUCT NAME ONLY**:
  * В Header по умолчанию находится только реальное название продукта. Вопрос: *«Нужна ли эта информация прямо сейчас?»*. Если нет — удалить.
* Запрет **NO FAKE BUILD IDENTITY**:
  * Запрещено придумывать кодовые имена, билды, режимы, протоколы и названия движков (`APP NAME // V1.0`, `NEURAL ENGINE`, `AI POWERED TERMINAL`).
* Чек-лист **INFORMATION MUST EARN ITS PLACE**:
  * 5 вопросов проверки каждого фрагмента текста (если при удалении ничего не меняется — удалить).
* Запрет **NO INVENTED UI STORYTELLING**:
  * Запрещено выдумывать лор, киберпанк-нарратив и сценарии вокруг обычной функции (пример: псевдосканеры в ASCII-просмотрщике).
* Фильтр **THE "WHY WOULD USER CARE?" TEST**:
  * Почему пользователю должно быть не всё равно? Нет ответа — информация удаляется.
* Фундаментальный принцип **USER REQUEST > AI ATMOSPHERE**:
  * Никогда не придумывать продукту личность, систему или процессы, которых в задаче не существует.
* Расширение **Anti-AI-Slop Final Check** до 20 пунктов (полная валидация чистоты контекста).

### Изменено:
* `SKILL.md`: дополнены frontmatter, раздел 7 (правила 3, 9, 11-15), раздел 10 (Header), раздел 12/15 (20 пунктов чеклиста), раздел 20 (версия v1.7.0).
* `references/design-guardrails.md`: расширены разделы 3, 9, 14, добавлены разделы 15-19, обновлен чеклист раздела 22 (20 пунктов).
* `DESIGN_MEMORY.md`: в раздел Avoid внесены 6 новых запретов на выдуманный контекст, фальшивые статусы и навязанный нарратив.
* `templates/subagent-team-blueprint.md`: дополнены регламенты для Frontend Engineer, UX Reviewer и Code Reviewer.

### Study / Review:
**Priority**: HIGH
- [ ] Исследовать UX-паттерны контекстной подачи версий и метаданных в специализированных DevTools/CLI без загрязнения основного рабочего пространства
- [ ] Оценить автоматизированные линтеры UI-текстов на предмет наличия служебных слов-паразитов (`ONLINE`, `READY`, `SECURE`, `IDLE`)
- [ ] Разработать бенчмарк чистоты первого экрана (First-Screen Cognitive Hygiene Benchmark)

---

## v1.6.0 — Cross-Platform Application UI & Window Adaptivity
**Дата**: 2026-09-05  
**Приоритет**: HIGH  
**Update Log**: [`updates/006-cross-platform-window-adaptivity.md`](./updates/006-cross-platform-window-adaptivity.md)

### Добавлено:
* Официальный эталонный справочник [`references/cross-platform-window-adaptivity.md`](./references/cross-platform-window-adaptivity.md):
  * Парадигма **Window-First Adaptivity** для Web, Desktop (macOS, Windows, Linux), GUI и IMGUI;
  * Запрет жестких абсолютных координат ($X/Y$) и фиксированной ширины в изменяемых окнах;
  * Стратегии адаптации для Большого, Среднего и Маленького окна;
  * Фиксация Minimum Window Size;
  * Шкала приоритета контента при сжатии (PRIMARY / SECONDARY / OPTIONAL);
  * Дисциплина GUI Layout (`Parent Container → Layout System → Children`) и IMGUI (`GetContentRegionAvail`, дочерние окна, предотвращение наложений);
  * Протокол миграции Web → Desktop (разведение Web Layout и Desktop Layout, сохранение смысла без слепого копирования);
  * Барьер No Broken Overflow (запрет паразитного скролла всего окна приложения);
  * Протокол многоразмерного тестирования Multi-Size Testing (Minimum → Small → Default → Large → Maximized);
  * 12 пунктов Standard Interaction Check и 10 пунктов Web-to-Desktop Migration Check;
  * 9 обязательных контрольных вопросов перед реализацией layout.
* Блок проверки 5 (`Cross-Platform & Window Adaptivity Check`) в финальном аудите раздела 15 `SKILL.md`.
* Добавление этапа `WINDOW & CROSS-PLATFORM ADAPTIVITY` в производственный конвейер раздела 16 `SKILL.md`.

### Изменено:
* `SKILL.md`: добавлен раздел 6.2, актуализированы разделы 15, 16, 20 и frontmatter (версия v1.6.0).
* `templates/subagent-team-blueprint.md`: дополнены инструкции для System Architect, Frontend Engineer, QA, UX Reviewer и Code Reviewer.
* `templates/analysis-template.md`: блоки 1, 12 и 15 дополнены параметрами платформы и адаптивности окон.
* `DESIGN_MEMORY.md`: дополнен раздел 3.5 (Window Adaptivity) и Avoid-список (Avoid: Hardcoded Window Coordinates, Avoid: Blind Web-to-Desktop Embedding, Avoid: Broken Window Resize).

### Study / Review:
**Priority**: HIGH
- [ ] Исследовать паттерны адаптивных сеток в Desktop/Tauri/Electron приложениях с сохранением высокой плотности информации
- [ ] Оценить применение CSS Subgrid и Container Queries для изолированных оконных панелей
- [ ] Протестировать поведение сложных таблиц данных при экстремальном сжатии окна

---

## v1.5.0 — Communication, Design Memory & Skill Versioning
**Дата**: 2026-09-04  
**Приоритет**: HIGH  
**Update Log**: [`updates/005-communication-design-memory.md`](./updates/005-communication-design-memory.md)

### Добавлено:
* Стандарты коммуникации: русский язык как основной, обязательное краткое комментирование действий («что делается и зачем»).
* Долговременная база памяти [`DESIGN_MEMORY.md`](./DESIGN_MEMORY.md):
  * Фиксация положительной обратной связи (триггеры «красавчик», «топ», «идеально») с декомпозицией по 10 аспектам;
  * Фиксация отрицательной обратной связи в Avoid-список;
  * Накопление User Design DNA (Style, Colors, Typography, Components, Layout, Visual Patterns);
  * Принцип анти-зацикливания и регламент реакции на похвалу.
* Система обязательного версионирования и история изменений (`updates/`, `research/`, `CHANGELOG.md`).
* Правило сохранения истории: старые правила не удаляются, а помечаются как `Deprecated`.

### Изменено:
* `SKILL.md`: интегрированы разделы коммуникации, памяти и версионирования.
* `templates/subagent-team-blueprint.md`: встроена проверка `DESIGN_MEMORY.md` субагентами.

### Study / Review:
**Priority**: HIGH
- [ ] Исследовать автоматическую экстракцию дизайн-токенов из удачных версток
- [ ] Оценить влияние Design DNA на скорость согласования интерфейсов
- [ ] Проверить паттерны взаимодействия в режиме реального времени

---

## v1.3.0 — Design & Development Resources
**Дата**: 2026-09-04  
**Приоритет**: MEDIUM  
**Update Log**: [`updates/004-resources.md`](./updates/004-resources.md)

### Добавлено:
* Официальный реестр ресурсов [`references/resources.md`](./references/resources.md):
  * UI-библиотеки: shadcn/ui, Lucide, Hugeicons;
  * Аудит библиотек и зависимостей через Libraries.dev;
  * Доверенные платформы для дизайн-исследований (styles.repro.design, designmd.me, open-design.ai, aura.build и др.).
* Протокол работы с референсами: `REFERENCE → ANALYSIS → ADAPTATION`.
* 5 контрольных вопросов перед использованием любого внешнего решения.
* Запрет слепого копирования чужих стилей и декоративных элементов.

### Study / Review:
**Priority**: MEDIUM
- [ ] Протестировать мониторинг уязвимостей и активности пакетов через Libraries.dev API
- [ ] Собрать подборку эталонных bento-сеток без лишних обводок

---

## v1.2.0 — Design Justification & Layout & Markup Discipline
**Дата**: 2026-09-04  
**Приоритет**: HIGH  
**Update Log**: [`updates/003-design-justification-layout.md`](./updates/003-design-justification-layout.md)

### Добавлено:
* Стандарт [`references/design-justification.md`](./references/design-justification.md):
  * **Visual Purpose Gate**: 5 категорий допустимых элементов (Действие, Навигация, Информация, Иерархия, Обратная связь);
  * Принцип **Default to Less** и **Removal Test** (*«Что произойдет, если удалить?»*);
  * Запрет на заполнение свободного пространства («Filling Empty Space»).
* Стандарт [`references/layout-discipline.md`](./references/layout-discipline.md):
  * 20 правил семантической вёрстки: Semantic First, No DIV for no reason, Flex vs Grid, Gap before margin, системный Spacing (4–64 px), No positioning as layout, DOM Depth Check;
  * Цепочка: `СМЫСЛ → СТРУКТУРА → SEMANTIC HTML → LAYOUT → RESPONSIVE → STYLING → FINAL SIMPLIFICATION`.
* Финальные чек-листы: Design Justification (14 пунктов) и Layout Final Check (20 пунктов).

### Study / Review:
**Priority**: HIGH
- [ ] Проверить CSS Subgrid для сложных карточных раскладок
- [ ] Протестировать контейнерные запросы (`@container`) взамен классических медиа-выражений

---

## v1.1.0 — Strict Visual Guardrails & Anti-AI-Slop
**Дата**: 2026-09-04  
**Приоритет**: HIGH  
**Update Log**: [`updates/002-anti-ai-slop.md`](./updates/002-anti-ai-slop.md)

### Добавлено:
* Полный манифест интерфейсной гигиены [`references/design-guardrails.md`](./references/design-guardrails.md):
  * **Zero-Emoji Policy**: абсолютный запрет эмодзи в любых узлах UI;
  * Запрет на Dot Labels (`● ONLINE`, `● SECURITY`);
  * Запрет на декоративный security и маркетинговый буллшит (`BUILT FOR THE FUTURE`);
  * Ликвидация Card-Hell и внедрение **Border Last Principle**;
  * Запрет на fake status и fake metrics (`99.9%`, `10K+`);
  * Фильтр элементов по 5 вопросам и чек-лист **Anti-AI-Slop Final Check** (14 пунктов).

### Study / Review:
**Priority**: MEDIUM
- [ ] Оценить применение SVG-микроанимаций вместо статических иконок без создания визуального шума

---

## v1.0.0 — Initial GO-BUILD Standard
**Дата**: 2026-09-04  
**Приоритет**: HIGH  
**Update Log**: [`updates/001-foundation.md`](./updates/001-foundation.md)

### Добавлено:
* Базовый стандарт комплексной разработки цифровых продуктов.
* Принцип сохранения первоначального смысла продукта.
* 16-блочный обязательный формат предпроектного анализа ([`templates/analysis-template.md`](./templates/analysis-template.md)).
* Командная оркестрация 4–10 субагентов ([`templates/subagent-team-blueprint.md`](./templates/subagent-team-blueprint.md)).
* Правило трёх действий (Зашел → Выбрал → Получил результат).
* Запрет бейджей над заголовками и псевдологотипов в header.
