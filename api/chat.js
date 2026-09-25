export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      message: "审小助后台 API 已正常运行！"
    });
  }

  if (req.method === "POST") {
    const { message = "" } = req.body || {};

    return res.status(200).json({
      reply: `审小助收到你的问题：${message}`
    });
  }

  return res.status(405).json({
    error: "只支持 GET 和 POST"
  });
}
