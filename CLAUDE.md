# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Build**: `npm run build` - Bundles React JSX from `src/` to `public/bundle.js` using esbuild
- **Start server**: `npm start` - Runs Express server on http://localhost:3000

## Architecture

Simple React 18 application displaying user search results as cards.

- `server.js` - Express static file server (port 3000)
- `src/index.js` - React entry point, mounts App to `#root`
- `src/App.jsx` - Main component with hardcoded user data array, renders grid of UserCards
- `src/UserCard.jsx` - Displays individual user info (avatar, name, job, team, location, JIRA tickets)
- `public/` - Static assets served by Express (index.html, styles.css, bundle.js)

## Build Notes

- esbuild uses `--loader:.js=jsx` to handle JSX in `.js` files
- After editing any `src/` files, run `npm run build` to regenerate the bundle
