# Juhi Desai — Portfolio

A static site: plain HTML, CSS, and JS. No build step, no Node, no npm — open it or deploy it as-is.

## View it locally
Just double-click `index.html` (or any file in `case-studies/`) to open it in your browser. Everything works via relative paths, no server required.

## File structure
```
index.html                 → About (the homepage)
experiences.html            → Experiences — expandable timeline (click a role to open it)
projects.html                → Projects — 6 entries, each with its own visual treatment
case-studies/                 → one deep-dive page per project, linked from projects.html
css/style.css                  → the whole design system (colors, type, components)
js/main.js                     → nav toggle, scroll reveal, sticky nav, experience accordion
```

Three-page structure: ABOUT · EXPERIENCES · PROJECTS, in the persistent top nav alongside a Contact link. The Experiences page uses a size hierarchy (`.exp-item.size-lg/md/sm`) — PwC is `size-lg` and opens by default; edit `data-open-default="true"` on any `.exp-item` to change which one starts open.

## Things to replace before this goes live
1. **Email & LinkedIn** — search every HTML file for `your.email@example.com` and `linkedin.com/in/your-handle`, replace with your real ones. They appear in the nav Contact link and every page's footer.
2. **Photos / screenshots** — look for boxes with a dashed border and grey "Add ___" text (`class="media-placeholder"`). Replace the whole `<div class="media-placeholder">...</div>` with an `<img src="assets/your-image.jpg" alt="...">`. Put image files in `assets/`. Priority spots: the About page profile photo and the four Beyond the Product rows (sailing, travel, cooking, curiosity), and the Indiana Daily Student feature image on the Projects page.
3. **Travel page** (`case-studies/travel.html`) — intentionally an empty scaffold since no trips/photos were provided. Duplicate one of the placeholder cards and fill in a real trip when you're ready.

## Deploying
This folder can be dragged straight into Netlify or Vercel, or pushed to a repo and served with GitHub Pages — no build command needed, just point it at the folder.
