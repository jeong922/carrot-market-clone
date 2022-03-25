import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  return res.status(200).end();
}

export default withHandler("POST", handler);

// withHandler가 호출되면 또 다른 함수가 리턴 되는 구조
// 고차함수(Higher Order Function(HOF))
// 하나 이상의 함수를 인자로 받고, 결과로 함수를 리턴
// 함수가 또 하나의 함수를 다루는 함수로 HOF를 이용해서 자바스크립트에서 함수형 프로그래밍을 있음.
