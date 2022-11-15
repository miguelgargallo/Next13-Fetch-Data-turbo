# Next 13 Fetch Data turbo

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
import { TurboReact } from '@vercel/turboreact'

export default function App({ Component, pageProps }) {
  return (
    <TurboReact>
      <Component {...pageProps} />
    </TurboReact>
  )
}
```
4. Create a page that uses the turbo
```js
// pages/index.js
import { useFetch } from '@vercel/turboreact'

export default function Home() {
  const { data, error } = useFetch('https://api.github.com/repos/vercel/turboreact')

  if (error) {
    return <div>failed to load</div>
  }

  if (!data) {
    return <div>loading...</div>
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  )
}
```
5. Start the development server
```bash
npm run dev
```
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
7. Edit the page and save it to reload the page.
8. Add `?turbo` to the URL to see the turbo in action.
9. Learn more about Next.js on the [Next.js documentation](https://nextjs.org/docs).
10. Learn more about Turbo on the [Turbo documentation](https://turbo.hotwired.dev).
11. Learn more about React on the [React documentation](https://reactjs.org/docs/getting-started.html).
12. Learn more about Vercel on the [Vercel documentation](https://vercel.com/docs).

## License

[MIT](LICENSE.md)

## Author

[Next.js](https://nextjs.org)

## Contributors

[Next.js](https://nextjs.org)

## Related

- [Next.js](https://nextjs.org) - The React Framework
- [Turbo](https://turbo.hotwired.dev) - A fast, full-featured framework for HTML-driven applications
- [React](https://reactjs.org) - A JavaScript library for building user interfaces
- [Vercel](https://vercel.com) - The best frontend developer experience and the most performant and secure cloud platform for static sites and Jamstack serverless functions.
- [Vercel CLI](https://vercel.com/download) - The command-line interface for Vercel.
- [Vercel for GitLab](https://vercel.com/integrations/gitlab) - Deploy and collaborate on projects from GitLab.


