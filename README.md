# vercel-api-languages
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This repository showcases introducing multiple languages such as Python, Rust and Go into a Next.js application.

# Getting Started

## Using Vercel CLI
```bash
npx vercel dev
```
This starts both the Next.js application as well and gives you the ability to serve requests using the serverless functions in the top-level `api` directory.

Once started, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> Caveat: In development, this approach does not seem to enable to the API handlers defined in `pages/api` in development. See the "Accessing both `api` Directories in Development" section for a workaround.

## Using Next.js
```bash
npm run dev
```
or 
```bash
yarn dev
```

This starts the Next.js application only.

Similarly once started, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> Caveat: This approach does not give you access to the top-level `api` directory. See the "Accessing both `api` Directories in Development" section for a workaround.



## Accessing both `api` Directories in Development
This is a workaround I have added to be able to access both `api` directories in development. It adds a fallback rewrite to a separately running instance of the application to `next.config.js`.

The rewrite will take effect once you start two different of the application one running on port `3000` and started with the Next.js approach above, and the other on `3001` started with the Vercel CLI approach above.
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
This is just one approach, and there may be better (recommended) ones that I have not found yet! Happy to find out what those are and apply them to this example.

# API Routes and Server Functions (Typescript, Rust, Python Go)

Four different API routes, or server functions have been added within the application:
|Route|API Directory|
|:---|:---|
|`api/typescript`|`pages/api`|
|`api/python`|Top-level `api`
|`api/go`|Top-level `api`|
|`api/rust`|Top-level `api`|

The Typescript api handler, is placed normally inside the `pages/api` directory of the Next.js application, while the others are placed in the top level `api` folder.

Both `api` directories are mapped to the `/api/*` route. Files in these directories are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

For more information on Vercel Serverless Functions see [Serverless Functions documentation](https://vercel.com/docs/concepts/functions/serverless-functions). And for more information on supported runtimes, see [Serverless Function Runtimes](https://vercel.com/docs/concepts/functions/serverless-functions/runtimes).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
