// Path: apps/web/pages/api/index.ts
// this page will print data fetch request from https://e.hnsfans.com/api/... while "..." is the path of the request

import { NextApiRequest, NextApiResponse } from "next";
import { get } from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { path } = req.query;

  if (path) {
    const { data } = await get(`https://e.hnsfans.com/api/${path}`);
    res.json(data);
    } else {
    res.json({ error: "no path" });
    }
};
