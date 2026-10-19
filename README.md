# UNDO — Recreated Website

A responsive, static front-end recreation for the UNDO dessert brand. This is a **newly reconstructed codebase**, not the original source repository for `undo-preview.vercel.app`.

## Stack
- HTML5
- CSS3 (responsive layouts, animation, reduced-motion support)
- Vanilla JavaScript
- Google Fonts (DM Sans + Manrope)
- Hosted food photography from Unsplash
- WhatsApp order/availability links

## Run locally
No build step is required.

1. Extract this folder.
2. Open `index.html` in a browser, or run a local static server:
   ```bash
   npx serve .
   ```
3. The website loads remote Google Fonts and Unsplash images, so internet access is needed for those assets.

## Deploy to Vercel
1. Create a new GitHub repository, for example `undo-website`.
2. Upload `index.html`, `style.css`, `script.js`, and this README.
3. In Vercel, choose **Add New → Project**, import the repository.
4. Framework preset: **Other**. Build command: leave empty. Output directory: `.`.
5. Deploy.

## Update before publishing
- Confirm the product names, sizes, prices, and availability in `script.js`.
- Confirm the delivery zones and delivery times in `index.html`.
- WhatsApp number is currently set to `+91 74484 34744` in the links and script.
- Instagram is set to `@cafe.undo`.
- Replace the Unsplash sample photos with approved UNDO product photography for a brand-accurate launch.
- Test every WhatsApp link on mobile and desktop.

## Project structure
```text
undo-website-recreated/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
```

## Important
This project is a visual/functionality starting point. It does not include an order database, payment gateway, customer login, inventory system, or the original site's private source code.
