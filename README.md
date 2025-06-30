# NY Times Most Viewed Articles

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It fetches and displays the most viewed articles from the New York Times, allowing users to filter by 1, 7, or 30-day periods. Users can view article summaries and click to view full details in a modal.

---

## 📦 Project Info

- **App Version:** 0.1.0
- **React Version:** 19.1.0
- **Tailwind CSS:** 3.4.17
- **Prettier:** 3.6.2
- **ESLint:** uses `react-app` preset
- **Test Framework:** Jest + React Testing Library

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

---

### `npm test`

Launches the test runner in interactive watch mode.  
Unit tests are written using **Jest** and **React Testing Library**.

---

### `npm test -- --coverage`

Generates a test coverage report.  
To view the HTML report:

```bash
open coverage/lcov-report/index.html
```

---

### `npm run cy:open`

Launches Cypress UI test runner.

### `npm run cy:run`

Runs Cypress tests headlessly.

---

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for best performance.

---

### `npm run lint`

Runs ESLint for static code analysis (if configured).

---

### `npm run format`

Formats all project files using **Prettier** for consistent code style.

---

## API Setup

This app uses the [New York Times Most Popular API](https://developer.nytimes.com/docs/most-popular-product/1/overview).

To configure the API:

1. Sign up for an API key at:  
   https://developer.nytimes.com/get-started

2. Create a `.env` file in the root of the project:

```
REACT_APP_API_KEY=your-nyt-api-key
REACT_APP_API_BASE_URL=https://api.nytimes.com/svc/mostpopular/v2
```

---

## Testing Overview

- Tests are written using **Jest** and **React Testing Library**
- Test coverage exceeds **90%**

![Coverage](https://img.shields.io/badge/coverage-90%25-brightgreen)

---

## Notes

- The repository uses only generic naming — no company names are present
- `.env` is ignored by Git and must not be committed
- App is mobile responsive and styled with Tailwind CSS

---

## License

MIT