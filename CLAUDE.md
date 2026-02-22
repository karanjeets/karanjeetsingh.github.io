# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal academic-style portfolio website for Karanjeet Singh. Static site (HTML/CSS/JS) with no build tools or frameworks.

## Structure

```
index.html              — Main portfolio page
css/styles.css          — All styles (CSS custom properties, responsive breakpoints at 700px/480px)
js/main.js              — Mobile nav toggle, smooth scroll, fade-in animations (IntersectionObserver)
assets/icons/           — Local SVG icons (scholar, github, linkedin, apache)
assets/img/             — Profile photo (profile.jpg)
pages/citation-map.html — Leaflet.js interactive author citation map (embedded via iframe)
```

## Design Conventions

- Academic/minimal style: white background, clean typography, horizontal rules between sections
- Fonts: Source Sans 3 (sans), Source Serif 4 (serif) via Google Fonts
- Icons are grayscale by default, colored on hover (CSS filter)
- Profile photo has JS fallback to initials circle if image fails to load
- Bio written in 1st person narrative style

## Development

Open `index.html` directly in a browser — no server or build step needed. All assets are local except Google Fonts.
