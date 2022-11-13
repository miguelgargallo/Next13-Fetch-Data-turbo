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
