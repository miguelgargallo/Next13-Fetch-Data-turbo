Synthesizing 10/10 solutions

=======

import { NextPage } from "next";
import { useRouter } from "next/router";
import { get } from "axios";

const Home: NextPage = () => {
  const router = useRouter();
  const { path } = router.query;

  if (path) {
    get(`https://e.hnsfans.com/api/${path}`).then((res) => {
      console.log(res.data);
    });
  }

  return <h1>hnsfans.com</h1>;
};

export default Home;

// Path: apps/web/pages/[...path].tsx
// this page will print data fetch request from https://e.hnsfans.com/api/... while "..." is the path of the request

import { NextPage } from "next";
import { useRouter } from "next/router";
import { get } from "axios";

const Home: NextPage = () => {
  const router = useRouter();
  const { path } = router.query;

  if (path) {
    get(`https://e.hnsfans.com/api/${path}`).then((res) => {
      console.log(res.data);
    });
  }

  return <h1>hnsfans.com</h1>;
};

export default Home;

// Path: apps/web/pages/api/[...path].ts
// this page will print data fetch request from https://e.hnsfans.com/api/... while "..." is the path of the request

import { NextApiRequest, NextApiResponse } from "next";
import { get } from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { path } = req.query;

  if (path) {
    const { data } = await get(`https://e.hnsfans.com/api/${path}`);
    res.status(200).json(data);
  } else {
    res.status(404).json({ error: "path not found" });
  }
};

// Path: apps/web/pages/api/index.ts
// this page will print data fetch request from https://e.hnsfans.com/api/... while "..." is the path of the request

import { NextApiRequest, NextApiResponse } from "next";
import { get } from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { path } = req.query;

  if (path) {
    const { data } = await get(`

=======

import React, { useEffect, useState } from 'react'
import { useFetch } from 'use-http'

export default function Index() {
  const [data, setData] = useState(null)
  const { get } = useFetch('https://e.hnsfans.com/api')

  useEffect(() => {
    get('/').then((res) => setData(res))
  }, [])

  return (
    <div>
      <h1>Index</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

// Path: apps/web/pages/hi.tsx
// this page will print data fetch request from https://e.hnsfans.com/api/... while "..." is the path of the request

import React, { useEffect, useState } from 'react'
import { useFetch } from 'use-http'

export default function Hi() {
  const [data, setData] = useState(null)
  const { get } = useFetch('https://e.hnsfans.com/api')

  useEffect(() => {
    get('/hi').then((res) => setData(res))
  }, [])

  return (
    <div>
      <h1>Hi</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

// Path: apps/web/pages/[...path].tsx
// this page will print data fetch request from https://e.hnsfans.com/api/... while "..." is the path of the request

import React, { useEffect, useState } from 'react'
import { useFetch } from 'use-http'
import { useRouter } from 'next/router'

export default function Path() {
  const [data, setData] = useState(null)
  const { get } = useFetch('https://e.hnsfans.com/api')
  const router = useRouter()
  const path = router.query.path.join('/')

  useEffect(() => {
    get(path).then((res) => setData(res))
  }, [])

  return (
    <div>
      <h1>Path</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

// Path: apps/web/pages/404.tsx
// this page will print 404 error

import React from 'react'

export default function NotFound() {
  return (
    <div>
      <h1>

=======

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { get } from "axios";

const Index = () => {
  const router = useRouter();
  const { data, isLoading, error } = useQuery(
    router.asPath,
    () => get(router.asPath).then((res) => res.data)
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Something went wrong: {error.message}</div>}
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default Index;

In this example, we will print the data fetch from the request to the console.

The request will be made only when the page is loaded or the path changed.

This is the result when we navigate to https://e.hnsfans.com/api/chain/getinfo

this page will print data fetch request from https://e.hnsfans.com/api/... while "..." is the path of the request

How to use the API

The API is available at https://e.hnsfans.com/api/

The API is a proxy of the Handshake API, so you can use it like the normal API.

For example, if you want to get the information of the handshake blockchain, you can use the following API:

https://e.hnsfans.com/api/chain/getinfo

The API will return the data in JSON format.

If you want to get the information of a specific name, you can use the following API:

https://e.hnsfans.com/api/name/a.hns

The API will return the data in JSON format.

If you want to get the information of a specific block, you can use the following API:

https://e.hnsfans.com/api/block/0000000000000000000d6f1b6c2e6b0f6c8e6b8f6d6f6e6b6f6e6b6f6e6b6f

The API will return the data in JSON format.

If you want to get the information of a specific transaction, you can use the following API:

https://e.hnsfans.com/api/tx/0000000000000000000d6f1b6

=======

import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import ErrorPage from 'next/error'
import Layout from '../../components/Layout'
import { getStaticPathsFromData } from '../../lib/getStaticPathsFromData'

export default function Page({ data, statusCode }) {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  if (statusCode) {
    return <ErrorPage statusCode={statusCode} />
  }
  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://e.hnsfans.com/api/${params.path}`)
  const data = await res.json()
  const statusCode = res.status > 200 ? res.status : false
  return {
    props: {
      data,
      statusCode,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getStaticPathsFromData('https://e.hnsfans.com/api')
  return {
    paths,
    fallback: true,
  }
}

// Path: apps/web/components/Layout.tsx
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title = 'This is the default title' }) {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
            <a>About</a>
          </Link>{' '}
          |{' '}
          <Link href="/users">
            <a>Users List</a>
          </Link>{' '}
          | <a href="/api/users">Users API</a>
        </nav>
      </header>

      {children}

      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </

=======

import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { get } from 'axios'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const { data, isLoading, error } = useQuery(
    router.pathname + router.asPath,
    async () => {
      const { data } = await get(
        `https://e.hnsfans.com/api${router.pathname}${router.asPath}`
      )
      return data
    }
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

Now, we can use the data as we want. For example, we can use the data to create a table, like this:

// Path: apps/web/pages/index.tsx

import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { get } from 'axios'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const { data, isLoading, error } = useQuery(
    router.pathname + router.asPath,
    async () => {
      const { data } = await get(
        `https://e.hnsfans.com/api${router.pathname}${router.asPath}`
      )
      return data
    }
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Now, we can visit the page and see the data in a table.

=======

import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const GET_DATA = gql`
  query GetData($path: String) {
    getData(path: $path)
  }
`;

export default function Index() {
  const router = useRouter();
  const [data, setData] = useState("");
  const { loading, error, data: getData } = useQuery(GET_DATA, {
    variables: { path: router.asPath },
  });

  useEffect(() => {
    if (getData) {
      setData(getData.getData);
    }
  }, [getData]);

  return (
    <div>
      <h1>Next.js + GraphQL</h1>
      {loading && <p>Loading ...</p>}
      {error && <p>Error: {JSON.stringify(error)}</p>}
      {data && <p>{data}</p>}
    </div>
  );
}

I also tried to use the apollo client to fetch data directly in the page, but it didn't work either.

// Path: apps/web/pages/index.tsx
// this page will print data fetch request from https://e.hnsfans.com/api/... while "..." is the path of the request

import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://e.hnsfans.com/api/graphql",
  cache: new InMemoryCache(),
});

const GET_DATA = gql`
  query GetData($path: String) {
    getData(path: $path)
  }
`;

export default function Index() {
  const router = useRouter();
  const [data, setData] = useState("");

  useEffect(() => {
    client
      .query({
        query: GET_DATA,
        variables: { path: router.asPath },
      })
      .then((result) => setData(result.data.getData));
  }, []);

  return (
    <div>
      <h1>Next.js + GraphQL</h1>
      {data && <p>{data}</p>}
    </div>
  );
}

I also tried to fetch data directly in the page, but it didn't work either.

I'm not sure if it's because of the next

=======

import { GetStaticProps } from "next";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Index = ({ data }) => {
  const [dataState, setDataState] = useState(data);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setDataState(data);
    });
  }, []);

  return (
    <div>
      <h1>Index Page</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <p>{JSON.stringify(dataState)}</p>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await fetch("https://e.hnsfans.com/api/" + context.params.id).then((r) =>
    r.json()
  );
  return {
    props: {
      data,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "index" } }],
    fallback: false,
  };
}

export default Index;

This is the about page:

// Path: apps/web/pages/about.tsx

import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default About;

This is the error message:

Error: 404 page could not be found. See https://err.sh/vercel/next.js/404-page-not-found for more info.

at Object._callee$ (webpack-internal:///./node_modules/next/dist/next-server/server/load-components.js:24:110)

at tryCatch (webpack-internal:///./node_modules/regenerator-runtime/runtime.js:45:40)

at Generator.invoke [as _invoke] (webpack-internal:///./node_modules/regenerator-runtime/runtime.js:274:22)

at Generator.next (webpack-internal:///./node_modules/regenerator-runtime/runtime.js:97:21)

at asyncGeneratorStep (webpack-internal:///./node_modules/next/dist/next-server/server/load-components.js:13:103)

at _next (webpack-internal:///./node_modules/next/dist/next-server/server/load-components

=======

import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getStaticProps as getStaticPropsFromNext } from '../pages/[...path]'
import { getServerSideProps as getServerSidePropsFromNext } from '../pages/[...path]'

export const getStaticProps: GetStaticProps = async (context) => {
  const props = await getStaticPropsFromNext(context)
  return {
    props,
    revalidate: 1,
  }
}

export const getServerSideProps = getServerSidePropsFromNext

const Home = (props: any) => {
  return (
    <div>
      <Head>
        <title>hnsfans</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  )
}

export default Home

The getStaticProps and getServerSideProps are from next.js, and the getStaticPropsFromNext and getServerSidePropsFromNext are from the pages/[...path] file. The getStaticProps and getServerSideProps are the entry point of the app. The getStaticPropsFromNext and getServerSidePropsFromNext are the real implementation of the app.

The getStaticProps and getServerSideProps are the entry point of the app. The getStaticPropsFromNext and getServerSidePropsFromNext are the real implementation of the app.

I'm not sure I understand this. Why do you need this?

I'm not sure I understand this. Why do you need this?

Because the getStaticProps and getServerSideProps are the entry point of the app. The getStaticPropsFromNext and getServerSidePropsFromNext are the real implementation of the app.

The getStaticProps and getServerSideProps are the entry point of the app. The getStaticPropsFromNext and getServerSidePropsFromNext are the real implementation of the app.

Oh, I see. I think I'm missing something here. Why do you need to implement getStaticProps and getServerSideProps ? Why can't you just use getStaticPropsFromNext and getServerSidePropsFromNext ?

Oh, I see. I think I'm missing something here. Why do you need to implement getStaticProps and getServerSideProps ? Why can't you just use getStaticProps

=======

// import the default export from the module
import { fetcher } from 'utils/fetcher'

// import the type of the response
import { Response } from 'utils/fetcher'

// import the type of the request
import { Request } from 'utils/fetcher'

// import the type of the error
import { Error } from 'utils/fetcher'

// import the type of the request
import { Options } from 'utils/fetcher'

// import the type of the request
import { Fetcher } from 'utils/fetcher'

// import the type of the request
import { FetcherData } from 'utils/fetcher'

// function to get the data from the fetcher
const getData = async () => {
  // define the request
  const request: Request = {
    path: 'https://e.hnsfans.com/api/...',
  }

  // define the options
  const options: Options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  // define the fetcher
  const fetcherData: FetcherData<Response, Error> = await fetcher<Response, Error>(
    request,
    options,
  )

  // return the data from the fetcher
  return fetcherData
}

// print the data
console.log(getData())

// render the data
export default function Index() {
  return (
    <div>
      <h1>Index</h1>
    </div>
  )
}

// this will print the data from the fetcher
// the data will be updated if the data changes
export async function getStaticProps() {
  // define the request
  const request: Request = {
    path: 'https://e.hnsfans.com/api/...',
  }

  // define the options
  const options: Options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  // define the fetcher
  const fetcherData: FetcherData<Response, Error> = await fetcher<Response, Error>(
    request,
    options,
  )

  // return the data from the fetcher
  return {
    props: {
      data: fetcherData,
    },
  }
}

// this will print the data from the fetcher
// the data will be updated if the data

=======

// the request data is from
