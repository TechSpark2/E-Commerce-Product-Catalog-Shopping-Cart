# Home Improvement Store

A responsive product catalog and shopping cart for a home improvement store. Browse tools, electrical supplies, and plumbing products, then add items to the cart and adjust quantities.

**Live site:** [https://techspark2.github.io/E-Commerce-Product-Catalog-Shopping-Cart/](https://techspark2.github.io/E-Commerce-Product-Catalog-Shopping-Cart/)

## Features

- Browse products across Tools, Electrical, and Plumbing categories
- Filter the catalog by category
- Add products to the cart, change quantities, or remove items
- View the subtotal, 10% tax, and order total
- Try the demo checkout flow

Checkout is a front-end demo. It does not process payments or save orders.

## Run locally

You’ll need Node.js and npm installed.

```bash
cd home-improvement-store
npm install
npm run dev
```

Vite prints a local URL in the terminal. Open it in your browser to use the app.

## Build for production

```bash
cd home-improvement-store
npm run build
```

The production build is generated in `home-improvement-store/dist`.

## Tech stack

- React
- Vite
- CSS

## Deployment

GitHub Actions builds the Vite app and deploys it to GitHub Pages whenever changes are pushed to `main`. The workflow is in `.github/workflows/deploy-pages.yml`.
