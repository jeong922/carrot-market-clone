import { NextApiRequest, NextApiResponse } from "next";

export default function withHandler(
  method: "GET" | "POST" | "DELETE",
  fn: (req: NextApiRequest, res: NextApiResponse) => void
) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== method) {
      return res.status(405).end();
      // 405 Method Not Allowed: 요청한 메서드는 서버에서 알고 있지만, 제거되었고 사용할 수 없음
      // (허용되지 않은 메서드 사용)
    }
    try {
      await fn(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
      //500 Internal Server Error: 서버가 처리 방법을 모르는 상황이 발생. 서버는 아직 처리 방법을 알 수 없음.
    }
  };
}
