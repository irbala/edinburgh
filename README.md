# Edinburgh Travel Guide

**Live site:** https://irbala.github.io/edinburgh/

A bilingual (English and Arabic) one-page guide to Edinburgh. Every place links to Google Maps so you can see photos and directions.

## Sections

- **Coffee & Sweets · كوفي وحلى**
- **Food · الاكل**
- **Activities & Shopping · تسوق وفعاليات**
- **Nature · طبيعة وتمشية**

A fixed menu at the top jumps to each section.

## How it's built

- Plain HTML and CSS, with no frameworks, build step or JavaScript
- `style.css` holds all the styles, with each section's colour set as a variable at the top
- Fonts: Plus Jakarta Sans for English and Noto Sans Arabic for Arabic
- The page is English left-to-right, and each piece of Arabic text is marked with `lang="ar"` so browsers and screen readers handle it correctly

## Run it locally

Download or clone the repo and open `index.html` in a browser.
