# Sultan Shehed Honey Storefront

A responsive React storefront for Sultan Shehed, a honey brand based in Mardan, Khyber Pakhtunkhwa, Pakistan. The site is built with React, Vite, Framer Motion, and modern CSS. It includes Pulosah and Bera honey in 250 ml, 500 ml, and 1 L jar sizes.

## Run locally

Install a current Node.js release, then run:

```sh
npm ci
npm run dev
```

Vite prints the local address. Create and preview a production build with:

```sh
npm run build
npm run preview
```

## Publish with GitHub Pages

The included workflow in `.github/workflows/pages.yml` builds the site and publishes the `dist` folder whenever you push to the `main` branch.

1. Create an empty GitHub repository.
2. In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the deployment source.
3. From this folder, initialize Git and push the project. Replace the remote URL with your repository address:

   ```sh
   git init
   git add .
   git commit -m "Add Sultan Shehed honey storefront"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
   git push -u origin main
   ```

4. After the workflow finishes, open the Pages address shown in the repository settings. Later pushes to `main` publish an updated build.

`vite.config.js` uses a relative asset base so product photos and other files work both at a domain root and in a GitHub repository subpath. `.gitignore` keeps generated build files, dependencies, local environment files, and mobile preview captures out of the repository.

## Storefront features

- Product details, jar size selection, product search, and category filters.
- Cart quantities, order summary, delivery details, WhatsApp order requests, and a printable order label.
- Pakistan region stories, image credits, customer review carousel, FAQs, and mobile navigation.
- Price and delivery settings stored in the browser's local storage.

## Before taking live orders

This is a front-end storefront. Prices can be entered in **Business settings**, but they are saved only in that browser. Checkout prepares an order request; it does not take payment or send an order to a server. Customer accounts and newsletter sign-ups are also stored locally. Connect a secure backend, payment provider, and mailing service before using those features across devices. WhatsApp order buttons open a prefilled message for the Sultan Shehed business number configured in `src/App.jsx`.

The site uses local product photography in `public/images`; other landscape photography and web fonts load from their credited or hosted external sources.
