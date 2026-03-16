import type { Content } from "@/content/types";

export const ru: Content = {
  meta: {
    title: "Maxim Dudnik — AI Operations / Program Manager (AI initiatives)",
    description:
      "Резюме‑лендинг на RU/EN + кейсы: AI operations, delivery, координация и внедрения.",
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
    kicker: "AI Operations • Координация • Исполнение",
    title: "AI Operations / Program Manager (AI initiatives)",
    subtitle:
      "Бэкграунд: IT‑рекрутинг и проектная координация. Сейчас в стартапе как AI Operations: превращаю хаос в план, синхронизирую CEO/COS, собираю автоматизации и довожу инициативы до результата.",
    highlights: ["Правая рука CEO/COS", "Внедрение ИИ", "Автоматизации", "Операционка", "Delivery"],
    primaryCta: { label: "Написать на email", href: "mailto:dudnyk.maksym@gmail.com" },
    secondaryCta: { label: "Telegram", href: "https://t.me/maxximilyan" },
  },
  about: {
    title: "Обо мне",
    subtitle:
      "AI Operations с фокусом на исполнение: перевожу цели в delivery, синхронизирую стейкхолдеров и довожу AI‑инициативы до результата.",
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
    subtitle: "Раздел в работе — добавлю после твоих правок.",
    items: [],
  },
  contact: {
    title: "Контакты",
    subtitle: "",
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
