# UNDO website — closer visual rebuild

This is a new front-end recreation based on the public layout and menu content of https://undo-preview.vercel.app/. It is not the original private source code and cannot guarantee pixel-perfect equivalence. It uses the original preview's publicly served product-image URLs where available.

## Files
- `index.html` — page structure and content
- `style.css` — responsive layout, colours, typography, animation
- `script.js` — menu filtering and WhatsApp ordering

## Publish
This is a static site. Upload the files to your existing GitHub repository, replacing the previous versions, then let Vercel redeploy. Use Framework Preset `Other`, no build command, output directory `.`.

## Verify before publishing
- Product prices and availability can change; confirm them with UNDO.
- Check all product image URLs. If an image doesn't load, replace its URL with the correct image asset.
- WhatsApp number and Instagram links are configured for UNDO.
