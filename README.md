# Next 13 Fetch Data turbo

# Installation

```bash
npm i next13-fetch-data-turbo
```

## Next 13 Fetch Data turbo allows the user to fetch data from an API and display it on the page.

### How to use

1. Create a new Next.js app
2. Install the Next 13 Fetch Data turbo

```bash
npm install @vercel/turboreact
```

3. Add the turbo to your Next.js app

```js
// pages/_app.js
import { TurboReact } from "@vercel/turboreact";

export default function App({ Component, pageProps }) {
  return (
    <TurboReact>
      <Component {...pageProps} />
    </TurboReact>
  );
}
```

4. Create a page that uses the turbo

```js
// pages/index.js
import { useFetch } from "@vercel/turboreact";

export default function Home() {
  const { data, error } = useFetch(
    "https://api.github.com/repos/vercel/turboreact"
  );

  if (error) {
    return <div>failed to load</div>;
  }

  if (!data) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
}
```

5. Start the development server

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
7. Edit the page and save it to reload the page.
8. Add `?turbo` to the URL to see the turbo in action.

# Sources

Learn more about Next.js on the [Next.js documentation](https://nextjs.org/docs).
Next.js 13 is a release of Next.js that includes a new feature called Turbo Mode. Turbo Mode is a new way to build and deploy Next.

Learn more about Turbo on the [Turbo documentation](https://turbo.hotwired.dev).
Turbo by Vercel is a Next.js turbo that allows you to fetch data from an API and display it on the page.
Turbo allows you to empower your Next.js application with the power of Turbo. Tyrbo is a faster and more efficient than ever before. Turbo is enabled by default in Next.js 13 and can be disabled by setting `turboMode: false` in `next.config.js`.

Learn more about React on the [React documentation](https://reactjs.org/docs/getting-started.html).
React is a JavaScript library for building user interfaces.

Learn more about Vercel on the [Vercel documentation](https://vercel.com/docs).
Vercel is a cloud platform for static sites and Serverless Functions.

## License

[Pylar AI creative ML](https://huggingface.co/spaces/superdatas/LICENSE)

Copyright &copy; 2022 Miguel Gargallo, Pencil Works LLC, ITAMAESAN ORG, SUPERDATAS, Pylar Team.

## Section I: Preamble

This license is a legal agreement between you and the Pylar AI creative ML for the use of Pylar AI creative ML. By obtaining the Pylar AI creative ML you agree to be bound by the terms and conditions of this license. If you do not agree to the terms and conditions of this license, you are not authorized to obtain the Pylar AI creative ML.
