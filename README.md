# vercel-api-languages
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This repository showcases introducing multiple languages such as Python, Rust and Go into a Next.js application.

## Getting Started
To start the Next.js application, run the development server:

```bash
npm run dev
# or
yarn dev
```

⚠️ The above will start the next app, which comes with all the `api` routes in the `pages/api` directory. Unfortunately, it does not also start up the serverless functions in the top level `api` directory, which contains our functions written in different languages.

To start both the `Next.js` app alongside the Functions, run

```bash
npx vercel dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# API Routes and Server Functions

Four different API routes, or server functions have been added within the application:
- `pages/api/typescript.ts`
- `api/python.py`
- `api/go.go`
-  `api/rust.rs`

The Typescript function, is placed normally inside the `pages/api` directory of the Next.js application, while the others are placed in the top level `api` folder.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
