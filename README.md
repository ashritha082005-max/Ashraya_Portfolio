# ASHRAYA — Animated Portfolio

A futuristic, responsive React portfolio for Ashritha Achary.

## Features

- Animated hero section
- Image-link placeholder
- Responsive mobile navigation
- Smooth scrolling
- Scroll reveal animations
- Animated orbit/ring effects
- Interactive skill filters
- Featured project cards
- Experience and achievement section
- Resume, GitHub, LinkedIn and email placeholders
- No extra UI library required

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Add your image

Open:

`src/main.jsx`

Find:

```js
const PROFILE_IMAGE = "YOUR_IMAGE_LINK_HERE";
```

Replace it with your image URL:

```js
const PROFILE_IMAGE = "https://your-image-url.com/your-photo.jpg";
```

You can also replace the other placeholders near the top of `main.jsx`:

```js
const RESUME_LINK = "YOUR_RESUME_LINK_HERE";
const GITHUB_LINK = "YOUR_GITHUB_LINK_HERE";
const LINKEDIN_LINK = "YOUR_LINKEDIN_LINK_HERE";
const EMAIL = "YOUR_EMAIL@example.com";
```

## Build

```bash
npm run build
```

The production files will be created in `dist/`.
