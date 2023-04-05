# vercel-api-languages
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This repository showcases introducing multiple languages such as Python, Rust and Go into a Next.js application.

# Getting Started

## Using Vercel CLI
```bash
npx vercel dev
```
This starts both the Next.js application as well and gives you the ability to serve requests using the serverless functions in the top-level `api` directory.

> In development, this approach does not seem to enable to the API handlers defined in `pages/api` in development. See the Workaround section for a solution.

## Using Next.js
The following starts only the Next.js application only. 

> In development this approach, does not give you access to the top-level `api` directory. See Workaround section for having access to both `api` directories.
```bash
npm run dev
```
or 
```bash
yarn dev
```

## Workaround: Accessing both API Directories 💡
To access both `api` directories in development, I have added the following fallback rewrite to a separately running instance of the application to `next.config.js`.

The rewrite will take effect once you start two instances of the application with both methods above (with one running on port `3000`, and the other on `3001`.
```js
{
  async rewrites() {
    return {
      fallback: [
        {
          source: "/api/:path*",
          destination: `http://localhost:3001/api/:path*`
        }
      ]
    };
  }
}
```

To use this workaround, from one terminal run the command in "Using Next.js" section, then in another, run the command from "Using Vercel CLI" section.

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
