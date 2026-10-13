# Sarah Persons — The Midnight Writer

A cinematic, responsive React + Vite portfolio concept for a fiction writer.

## Run locally

1. Install Node.js (LTS) if it is not already installed.
2. Unzip this project and open the project folder in your terminal.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Customize before publishing

- Replace sample story titles and descriptions in `src/App.jsx` with Sarah's actual work.
- Update the biography in the `About` component.
- Replace `hello@sarahpersons.com` in the `Contact` component with Sarah's real contact email.
- The contact form currently uses a `mailto:` link. It does not store messages or send them through a backend.
- The artwork is created with CSS placeholders; replace it with approved photos or original artwork if desired.
- Google Fonts are loaded from Google Fonts, so an internet connection is needed for those fonts. System serif fallbacks are included.

## Stack

- React 18
- Vite
- Lucide React icons
- Custom responsive CSS
