# Currency Converter

A simple currency converter built with React.

## Features
- Enter an amount to convert
- Choose source and target currencies
- Supports USD, EUR, INR, KWD, GBP and JPY
- Displays the converted amount to two decimal places
- Uses `useMemo` to memoize the base amount calculation
- Responsive layout

## Exchange rates
The rates are sample values for demonstration only. They are not live financial rates.

## Run locally
Install Node.js, open this folder in a terminal, and run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually http://localhost:5173).

## Build
```bash
npm run build
```
Vite creates production files in `dist`.

## Deploy on Netlify
Connect this GitHub repository to Netlify.
- Build command: `npm run build`
- Publish directory: `dist`

These settings are also included in `netlify.toml`.

## Project structure
- `index.html` — browser page and React mount point
- `src/main.jsx` — starts React
- `src/App.jsx` — app entry component
- `src/CurrencyConverter.jsx` — converter state, calculation and UI
- `src/index.css` — global styles
- `src/App.css` — converter styling
- `package.json` — dependencies and scripts
- `vite.config.js` — Vite setup
