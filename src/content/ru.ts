import type { Content } from "@/content/types";

export const ru: Content = {
  meta: {
    title: "Maxim Dudnik — Business Operations & AI Automation",
    description:
      "Business Operations & AI Automation Specialist: системы, процессы и внедрение AI.",
    siteUrl: ""
  },
  header: {
    brand: "Maxim Dudnik",
  },
  nav: {
    about: "Обо мне",
    cases: "Кейсы",
    experience: "Опыт",
    contact: "Контакты",
  },
  hero: {
    kicker: "Business Operations & AI Automation Specialist",
    title: "Maxim Dudnik",
    subtitle:
      "Превращаю операционный хаос в масштабируемые системы, ясные процессы и AI‑поддержанное исполнение. Помогаю стартапам строить операционную основу через улучшение процессов, внедрение AI и автоматизацию внутренних workflow.",
    highlights: [
      "Операционная база",
      "Внедрение AI",
      "Автоматизация",
      "Системный подход",
      "Execution"
    ],
    primaryCta: { label: "Смотреть проекты", href: "#cases" },
    secondaryCta: { label: "Связаться", href: "#contact" },
    tertiaryCta: { label: "Скачать резюме", href: "#" },
  },
  about: {
    title: "Обо мне",
    subtitle: "Работаю на стыке операций, систем и внедрения AI.",
    blockTitle: "Что я делаю",
    bullets: [
      "Business Operations — улучшаю процессы и создаю структуру там, где всё фрагментировано.",
      "AI Implementation — внедряю AI в внутренние системы так, чтобы это экономило время и помогало исполнению.",
      "Workflow Automation — строю автоматизации на API, webhooks, AI и no‑code.",
      "Systems & Process Design — заменяю неэффективные схемы и создаю масштабируемую основу.",
    ],
  },
  impact: {
    title: "Impact Snapshot",
    items: [
      { value: "3.5+ лет", label: "Опыт в startup operations" },
      { value: "51 user", label: "Внедрён AI knowledge bot" },
      { value: "480 / нед", label: "Сообщений обработано" },
      { value: "22 часа", label: "Сэкономлено за 3 дня" },
      { value: "6+ дней", label: "Сэкономлено в неделю" },
      { value: "28 → 15", label: "Jira boards сокращено" },
    ],
  },
  workingStyle: {
    title: "Как я работаю",
    subtitle: "Максимально эффективен там, где нужно быстро навести порядок и масштабироваться.",
    bullets: [
      "Команды двигаются быстро и меняются",
      "Документация хаотична или устаревает",
      "Процессы слишком завязаны на людей",
      "Операциям нужна структура и масштабируемость",
      "Не просто PM — я строю и внедряю системы",
    ],
  },
  tools: {
    title: "Инструменты",
    items: [
      "n8n",
      "RunBear",
      "OpenAI",
      "Claude",
      "Gemini",
      "Rovo",
      "Supabase",
      "Firecrawl",
      "Slack",
      "HubSpot",
      "Jira",
      "Confluence",
      "APIs",
      "Webhooks",
      "Google Sheets",
      "ATS systems",
      "HRIS systems",
      "Dashboards",
      "Reddit API",
    ],
  },
  skills: {
    title: "Навыки / инструменты",
    items: [
      "Business Operations",
      "AI Automation",
      "Process Design",
      "Systems Thinking",
      "Stakeholder Alignment",
      "Knowledge Management",
      "Cross-functional Execution",
    ],
  },
  cases: {
    title: "Выбранные кейсы",
    subtitle: "Проекты на стыке AI, автоматизации и операционной инфраструктуры.",
    hint: "Открой кейс — подробности внутри →",
    items: [
      {
        slug: "ai-knowledge-infrastructure",
        title: "AI Knowledge Infrastructure for Internal Operations",
        summary:
          "Создал структурированную базу знаний и запустил AI‑бота в Slack, подключенного к ключевым системам.",
        impact: "51 users, 480 weekly messages, 6+ workdays saved per week",
        role: "AI Operations / Systems Builder",
        stack: "RunBear, Slack, HubSpot, Jira, Confluence, Zoom, Google Calendar, Aloware MCP",
        timeline: "2024 — 2025",
        tags: ["Knowledge infrastructure", "AI bot", "Operations"],
        body: [
          {
            title: "Контекст",
            paragraphs: [
              "Документация была разбросана по разным инструментам без единой структуры.",
              "Чтобы получить ответ, людям приходилось писать коллегам и разбираться вручную.",
            ],
          },
          {
            title: "Что сделал",
            paragraphs: ["Сначала выстроил документационную основу, затем превратил её в AI‑систему."],
            bullets: [
              "Реорганизовал Confluence и навёл структуру",
              "Улучшил стандарты документирования",
              "Построил Slack‑бота с доступом к HubSpot, Jira, Confluence, Zoom, Google Calendar и Aloware MCP",
            ],
          },
          {
            title: "Результат",
            paragraphs: ["Ответы стали доступны за секунды, а зависимость от «носителей знаний» снизилась."],
            bullets: [
              "22 часа сэкономлено за первые 3 дня (13 users)",
              "Масштабировано до 51 users и 480 сообщений в неделю",
              "6+ рабочих дней экономии в неделю",
            ],
          },
        ],
      },
      {
        slug: "reddit-intelligence-workflow",
        title: "Reddit Intelligence Workflow for Market Insight",
        summary:
          "Построил систему, которая превращает обсуждения на Reddit в структурированные инсайты о рынке.",
        impact: "Открыл новое направление; создана отдельная роль",
        role: "Ops / Automation Lead",
        stack: "n8n, Supabase, Google Sheets, OpenAI, Reddit API, Slack",
        timeline: "2024",
        tags: ["Market intelligence", "Automation", "AI search"],
        body: [
          {
            title: "Контекст",
            paragraphs: [
              "AI‑поиск начал активно использовать Reddit как источник ответов.",
              "Reddit стал стратегическим каналом для понимания боли клиентов и рынка.",
            ],
          },
          {
            title: "Что сделал",
            paragraphs: ["Предложил Reddit как канал intelligence и построил workflow."],
            bullets: [
              "Сбор обсуждений по ключевым словам и конкурентам",
              "Структурирование инсайтов для контент‑ и продуктовых решений",
              "Регулярный поток сигналов для команды",
            ],
          },
          {
            title: "Результат",
            paragraphs: ["Проект открыл новое стратегическое направление."],
          },
        ],
      },
      {
        slug: "knowledge-base-restructuring",
        title: "Centralized Documentation System for Operational Clarity",
        summary:
          "Перестроил документацию в единую систему, поддерживающую масштабирование.",
        role: "Ops / Knowledge Management",
        stack: "Confluence, Jira, internal documentation processes",
        timeline: "2023 — 2024",
        tags: ["Knowledge management", "Process design"],
        body: [
          {
            title: "Контекст",
            paragraphs: [
              "Документация была фрагментирована и плохо поддерживалась.",
              "Сотрудники не знали, где искать информацию.",
            ],
          },
          {
            title: "Что сделал",
            paragraphs: ["Инициировал переход к централизованной документации."],
            bullets: [
              "Выстроил структуру и навигацию",
              "Сократил фрагментацию и задал стандарты",
              "Сделал примеры и референсы проще для поиска",
            ],
          },
          {
            title: "Результат",
            paragraphs: ["Создал базу, которая затем позволила внедрить AI‑поиск."],
          },
        ],
      },
      {
        slug: "jira-process-simplification",
        title: "Workflow Simplification Across Jira Operations",
        summary:
          "Сократил спrawl Jira‑бордов и улучшил взаимодействие команд.",
        impact: "28 boards → 15 boards",
        role: "Ops / Process Improvement",
        stack: "Jira, Confluence, workflow design",
        timeline: "2023",
        tags: ["Process simplification", "Jira"],
        body: [
          {
            title: "Контекст",
            paragraphs: [
              "Процессы были разбросаны по множеству Jira‑бордов.",
            ],
          },
          {
            title: "Что сделал",
            paragraphs: ["Поддержал упрощение структуры и консолидацию."],
            bullets: [
              "Сократил количество бордов",
              "Повысил согласованность процессов",
            ],
          },
          {
            title: "Результат",
            paragraphs: ["Упростил систему и повысил прозрачность работы."],
          },
        ],
      },
      {
        slug: "ai-enabled-recruiting-ops",
        title: "AI‑Enabled Recruiting Operations",
        summary:
          "Улучшил рекрутинговые workflow через оптимизацию ATS и AI‑поддержку.",
        role: "Ops / Recruiting Systems",
        stack: "ATS tools, internal systems, AI support workflows",
        timeline: "2022 — 2023",
        tags: ["Recruiting ops", "Automation"],
        body: [
          {
            title: "Контекст",
            paragraphs: [
              "Рекрутинг зависел от ручных шагов и разрозненных инструментов.",
            ],
          },
          {
            title: "Что сделал",
            paragraphs: ["Переосмыслил workflow и улучшил системы."],
            bullets: [
              "Оптимизировал ATS‑процессы",
              "Поддержал AI‑скрининг",
              "Улучшил onboarding/offboarding",
            ],
          },
          {
            title: "Результат",
            paragraphs: ["Более структурированная операционная база для найма."],
          },
        ],
      },
    ],
  },
  case: {
    back: "Назад к кейсам",
    impact: "Эффект",
    role: "Роль",
    stack: "Инструменты",
    timeline: "Сроки",
  },
  experience: {
    title: "Опыт",
    subtitle: "Раздел в работе — добавлю после твоих правок.",
    items: [],
  },
  contact: {
    title: "Контакты",
    subtitle: "Интересны operations, AI‑автоматизация, внутренние системы или процессный дизайн?",
    items: [
      { label: "Email", value: "dudnyk.maksym@gmail.com", href: "mailto:dudnyk.maksym@gmail.com" },
      { label: "Telegram", value: "@maxximilyan", href: "https://t.me/maxximilyan" },
      { label: "LinkedIn", value: "linkedin.com/in/maxim-dudnik", href: "https://www.linkedin.com/in/maxim-dudnik/" }
    ],
  },
  notFound: {
    title: "Страница не найдена",
    subtitle: "Кажется, такой страницы нет.",
    cta: "На главную",
  },
  footer: {
    note: "© Maxim Dudnik",
    built: "Next.js + Tailwind",
  },
};
