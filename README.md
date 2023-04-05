# vercel-api-languages
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This repository showcases introducing multiple languages such as Python, Rust and Go into a Next.js application.

# Getting Started

## Using @vercel/cli
```bash
npx vercel dev
```
This starts both the Next.js application as well and gives you the ability to serve requests using the serverless functions in the top-level `api` directory.

> Caveat: when serving the application this way locally, the API routes in `pages/api` seem not to be accessible. I have not identified a solution for this. To have them be accessible, in development, you have to fallback to the default way of starting Next.js applications in development below.
> See workaround section for solution to this.

## Using @next
Use this to start the Next.js application in the normal way you would.

```bash
npm run dev
```
or 
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# API Routes and Server Functions (Typescript, Rust, Python Go)

Four different API routes, or server functions have been added within the application:
- `pages/api/typescript.ts`
- `api/python.py`
- `api/go.go`
- `api/rust.rs`

The Typescript function, is placed normally inside the `pages/api` directory of the Next.js application, while the others are placed in the top level `api` folder.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/typescript](http://localhost:3000/api/typescript). This endpoint can be edited in `pages/api/typescript.ts`.

The `pages/api` and `api` directory is mapped to `/api/*` route. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
