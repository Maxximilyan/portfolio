import type { Content } from "@/content/types";

export const ru: Content = {
  meta: {
    title: "Ваше имя — AI Operations / Program Manager (AI initiatives)",
    description:
      "Резюме‑лендинг на RU/EN + кейсы: AI operations, delivery, координация и внедрения.",
    siteUrl: ""
  },
  header: {
    brand: "Ваше имя",
  },
  nav: {
    about: "Обо мне",
    cases: "Кейсы",
    experience: "Опыт",
    contact: "Контакты",
  },
  hero: {
    kicker: "AI Operations • Координация • Исполнение",
    title: "AI Operations / Program Manager (AI initiatives)",
    subtitle:
      "Бэкграунд: IT‑рекрутинг и проектная координация. Сейчас в стартапе как AI Operations: превращаю хаос в план, синхронизирую CEO/COS, собираю автоматизации и довожу инициативы до результата.",
    highlights: ["Правая рука CEO/COS", "Внедрение ИИ", "Автоматизации", "Операционка", "Delivery"],
    primaryCta: { label: "Написать на email", href: "mailto:you@example.com" },
    secondaryCta: { label: "Telegram", href: "https://t.me/yourhandle" },
  },
  about: {
    title: "Обо мне",
    subtitle: "Коротко и по делу (правится в src/content/ru.ts).",
    blockTitle: "Что я делаю",
    bullets: [
      "Перевожу цели в план: сроки, ответственные, weekly‑прогресс и контроль исполнения.",
      "Внедряю ИИ в реальные процессы: discovery → пилот → rollout → итерации, с метриками и надежностью.",
      "Сшиваю стейкхолдеров: CEO, COS, инженеры, ops, подрядчики.",
      "Собираю автоматизации (no/low‑code + скрипты) и описываю процессы (SOP).",
      "Закрываю цикл: метрики, фидбек, улучшения, качество.",
    ],
  },
  skills: {
    title: "Навыки / инструменты",
    items: [
      "AI Ops",
      "Project coordination",
      "Project management (опыт)",
      "Коммуникация со стейкхолдерами",
      "Процессы и SOP",
      "Автоматизация",
      "Документация",
      "IT recruiting",
    ],
  },
  cases: {
    title: "Выбранные кейсы",
    subtitle: "Лучше 2–5 сильных кейсов с результатом в цифрах.",
    hint: "Открой кейс — там структура →",
    items: [
      {
        slug: "ai-ops-right-hand",
        title: "AI Ops как «правая рука»: от идеи до rollout",
        summary:
          "Спроектировал и провел внедрение ИИ в внутренние workflows: выявление проблем → пилот → запуск → обучение → итерации, с фокусом на согласование и надежность.",
        impact: "Impact: замени на метрики (время, деньги, adoption, скорость циклов).",
        role: "AI Operations / Project Coordinator",
        stack: "LLM, промпты, внутренние инструменты, автоматизации (уточнить).",
        timeline: "2025 — н.в. (уточнить).",
        tags: ["Внедрение ИИ", "Операционка", "Delivery", "Стейкхолдеры"],
        body: [
          {
            title: "Контекст",
            paragraphs: [
              "3–5 предложений: что происходило и почему это было важно.",
              "Конкретика: кто страдал, что ломалось, какие риски/стоимость.",
            ],
          },
          {
            title: "Что сделал",
            paragraphs: ["Опиши действия как последовательность шагов."],
            bullets: [
              "Интервью со стейкхолдерами и формулировка проблемы",
              "Скоуп пилота + метрики успеха",
              "Реализация + rollout + обучение",
              "Мониторинг / фидбек / итерации",
            ],
          },
          {
            title: "Результат",
            paragraphs: ["Добавь измеримые outcomes. Даже приблизительно — уже ок."],
            bullets: ["Пример: сократил время на X%", "Пример: улучшил качество/консистентность"],
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
    subtitle: "Лучше достижения, а не обязанности.",
    items: [
      {
        company: "Стартап (уточнить)",
        role: "AI Operations / Правая рука CEO",
        period: "2025 — н.в.",
        bullets: [
          "Веду внедрения ИИ и операционное исполнение инициатив.",
          "Перевожу приоритеты CEO/COS в план и довожу до результата.",
        ],
      },
      {
        company: "Компания (уточнить)",
        role: "Project Coordinator / опыт PM",
        period: "2023 — 2025 (уточнить)",
        bullets: ["Координация, трекинг, документация, поддержка delivery."],
      },
      {
        company: "Компания (уточнить)",
        role: "IT‑рекрутер",
        period: "2021 — 2023 (уточнить)",
        bullets: ["Подбор, коммуникация со стейкхолдерами, улучшение процесса найма."],
      },
    ],
  },
  contact: {
    title: "Контакты",
    subtitle: "Замени плейсхолдеры на реальные ссылки.",
    items: [
      { label: "Email", value: "you@example.com", href: "mailto:you@example.com" },
      { label: "Telegram", value: "@yourhandle", href: "https://t.me/yourhandle" },
      { label: "GitHub", value: "github.com/your", href: "https://github.com/your" },
      { label: "LinkedIn", value: "linkedin.com/in/your", href: "https://linkedin.com/in/your" },
    ],
  },
  notFound: {
    title: "Страница не найдена",
    subtitle: "Кажется, такой страницы нет.",
    cta: "На главную",
  },
  footer: {
    note: "© Ваше имя",
    built: "Next.js + Tailwind",
  },
};
