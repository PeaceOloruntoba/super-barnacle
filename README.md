## Joy Aderinwale — Portfolio (React + Vite + Tailwind)

Single-page, mobile‑first portfolio for a Social Media Manager and Copywriter. Light/Dark theme toggle, responsive sections, animated gallery, and contact form that emails via Brevo SMTP.

### Tech
- React 19 + Vite 7 + TypeScript
- Tailwind CSS 4
- react-icons, sonner (toasts)
- Express + Nodemailer (Brevo SMTP) for local/dev API
- Optional: Vercel Serverless Function for production `/api/contact`

---

## Setup
1. Copy `.env.example` to `.env` and set:
   - PORT=5175
   - BREVO_SMTP_HOST=smtp-relay.brevo.com
   - BREVO_SMTP_PORT=2525 (or 587)
   - BREVO_SMTP_USER, BREVO_SMTP_PASS
   - FROM_EMAIL, CONTACT_TO_EMAIL
2. Install deps
   - `npm install`

## Run locally (with Express server)
- Terminal A: `npm run server` (starts API on http://localhost:5175)
- Terminal B: `npm run dev` (starts Vite on http://localhost:5173)
- The frontend calls `/api/contact` which proxies to the Express server.

## Use Vercel serverless for production
This repo includes an API route at `api/contact.ts` compatible with Vercel.
- Push to GitHub and import into Vercel.
- Set Environment Variables in Vercel Project Settings:
  - BREVO_SMTP_HOST, BREVO_SMTP_PORT, BREVO_SMTP_USER, BREVO_SMTP_PASS
  - FROM_EMAIL, CONTACT_TO_EMAIL
- Build command: `vite build` (auto)
- Output: `dist` (auto)
- In Vercel production, `/api/contact` is handled by the function.

## Customize content
- Edit `src/App.tsx` to update name, socials, contact info and portfolio items.

## Notes
- Do not commit `.env` (add it to .gitignore).
- For local-only dev without serverless, you can ignore `api/`.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
