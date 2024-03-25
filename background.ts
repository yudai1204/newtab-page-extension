import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log(req)
  const url = `https://corsproxy.io/?https%3A%2F%2Fwww.google.com%2Fcomplete%2Fsearch%3Fhl%3Dja%26q%3D${req.name}%26output%3Dtoolbar`
  const result = await fetch(url)
  const xml = await result.text()

  res.send({
    xml
  })
}

export default handler
