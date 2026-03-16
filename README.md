# Portfolio resume (EN)

Одностраничное резюме‑лендинг + отдельные страницы кейсов. Готово для деплоя на Vercel и хранения в GitHub.

## Стек

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Контент в `src/content` (удобно править через Codex)

## Быстрый старт

Требования: Node.js 20+

```bash
npm install
npm run dev
```

Открой `http://localhost:3000`.

## Где править контент

- `src/content/en.ts`

## Деплой на Vercel

1. Создай репозиторий на GitHub и запушь этот проект.
2. В Vercel: **Add New → Project → Import Git Repository**.
3. Framework: Next.js (авто), Build/Output defaults.

## Роуты

- `/` — лендинг
- `/cases/<slug>` — кейсы
