# Business Financial One Website

A production-oriented React/Vite website for Business Financial One (BFO), built as a responsive lead-generation experience for real estate and business financing.

Live site: `https://tahafatmi1.github.io/business-financial-one/`

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (normally `http://localhost:5173`).

## Build

```bash
npm run build
npm run build:pages
npm run preview
```

## Project structure

```text
public/
  assets/
    images/             Replaceable local website imagery
src/
  components/
    common/             SEO, accordion, CTA and reveal components
    layout/             Header, navigation, footer and layout
    loan-programs/      Reusable financing program cards
  data/                 Company and loan-program content
  pages/                Route-level pages
  styles/               Global design system and responsive styles
  App.jsx               Route configuration
  main.jsx              Application entry point
.github/workflows/
  deploy-pages.yml      Automatic Pages deployment
```

## Logo and images

The official logo is stored at `public/assets/bfo-logo.jpeg` and is used in the header, footer, and browser icon. Do not alter the logo artwork.

Remote image URLs are centralized in `src/data/loanPrograms.js`. To self-host them, add image files under `public/assets/images/` and replace those URLs with paths such as `/assets/images/hero-real-estate.jpg`.

Suggested filenames:

- `hero-real-estate.jpg`
- `fix-flip.jpg`
- `construction.jpg`
- `rental.jpg`
- `multifamily.jpg`
- `commercial.jpg`
- `business-funding.jpg`
- `about-bfo.jpg`

## Edit business and loan details

- Company name, phone, email, address and social links: `src/data/business.js`
- Program descriptions, images, amounts, leverage and terms: `src/data/loanPrograms.js`

## Application and contact forms

The application page routes Business Funding and Commercial applicants to the built-in borrower form. Fix & Flip, Construction, Rental/DSCR, Multifamily, and Bridge/Cash-Out applicants continue to the client-provided My1003App portal. The hosted URL and internal borrower-form routes are centralized in `src/data/business.js`.

The contact form and the built-in Business Funding and Commercial borrower forms submit through Web3Forms and notify `ed@busfinancialone.com`. The public Web3Forms endpoint and access key are centralized in `src/data/business.js`; submission handling is shared in `src/utils/submitWeb3Form.js`.

The borrower form intentionally does not collect Social Security numbers, tax IDs, banking credentials or account numbers. Applicants should use the client-provided My1003App portal or another approved secure channel when sensitive documentation is required.

## Legal review

The Privacy Policy and Terms & Conditions pages are clearly labeled placeholders. Have qualified counsel review and replace them before publishing the site.
