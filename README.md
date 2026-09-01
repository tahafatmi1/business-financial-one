# Business Financial One Website

A production-oriented React/Vite website for Business Financial One (BFO), built as a responsive lead-generation experience for real estate and business financing.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (normally `http://localhost:5173`).

## Build

```bash
npm run build
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
```

## Logo and images

The supplied brief did not include the original logo file. The header therefore displays a clean text fallback. To use the official logo, add it at:

`public/assets/bfo-logo.png`

Then set `logoUrl` to `'/assets/bfo-logo.png'` in `src/data/business.js`. Do not alter the logo artwork.

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

The application page hands applicants off to the client-provided hosted application portal. Its URL is stored as `applicationUrl` in `src/data/business.js` so it can be updated in one place.

The contact form remains a frontend demonstration and does not transmit data. Its future integration point is `src/pages/Contact.jsx`, inside the `submit` function.

Use a secure HTTPS endpoint, server-side validation, appropriate privacy disclosures and access controls before accepting real customer information. Do not collect Social Security numbers through the current form.

## Legal review

The Privacy Policy and Terms & Conditions pages are clearly labeled placeholders. Have qualified counsel review and replace them before publishing the site.
