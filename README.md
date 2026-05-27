# Online Library

An online library system built with React, Vite, React Router, and Redux Toolkit.

## Features

- Home page with categories and popular book cards
- Browse books page with category filtering and search by title or author
- Dynamic category routes such as `/books/History`
- Dynamic book details pages
- Add book form managed with Redux state
- 404 page for invalid routes
- Dark theme by default with a light mode toggle

## Tech Stack

- React
- Vite
- React Router DOM
- Redux Toolkit
- React Redux
- CSS

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Notes

The app uses dummy book data from `src/data/books.js`. Books added through the form are stored in Redux state for the current browser session.
