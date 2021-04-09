# Serverless GraphQL Server on Netlify Functions, 3 Ways

Sample repo for my post on DEV.to, https://dev.to/ekafyi/serverless-graphql-server-deploying-to-netlify-functions-3-ways-jfb

Does what it says on the tin...
- `no-build` — graphql server function without build step
- `with-build` — graphql server function with netlify-lambda build
- `with-ts` — graphql server function with netlify-lambda build + TypeScript

## Quick Start

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ekafyi/hello-graphql-server)

If deploying from this repo, make sure you *set the base directory* to the directory you want to use (eg. `no-build`). See: https://docs.netlify.com/configure-builds/get-started/#definitions

## Else

Or you can clone this repo and start a Git repo manually/locally from the directory you want to use.

```bash
git clone https://github.com/ekafyi/hello-graphql-server.git

cd hello-graphql-server/no-build

npm install

git init
```
