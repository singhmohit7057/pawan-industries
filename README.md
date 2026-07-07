# Pawan Industries

Corporate website for **Pawan Industries** — an industrial engineering and fabrication company based in Kalol, Gujarat, India with 35+ years of experience.

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- React Router
- Lucide React (icons)
- Web3Forms (contact form)

## Getting Started

```bash
npm install
npm run dev
```

Dev server runs on `http://localhost:5177`.

## Build

```bash
npm run build
```

The `prebuild` script automatically converts client logos in `public/client/` to optimized WebP format in `public/clients/`.

## Environment Variables

Create a `.env` file:

```
VITE_WEB3FORMS_KEY=your_web3forms_access_key
```

## Deployment

Configured for Vercel with SPA rewrites (`vercel.json`).

## Pages

- Home
- About
- Services
- Industries
- Infrastructure
- Projects
- Clients
- Contact
