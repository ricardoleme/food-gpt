import { create } from "venom-bot"

create({
  session: "food-gpt",
  disableWelcome: true,
})
  .then(async (client) => await start(client))
  .catch((err) => {
    console.log(err)
  })

async function start(client) {
  client.onMessage(async (message) => {
    if (!message.body || message.isGroupMsg) return

    const response = `Olá!`

    await client.sendText(message.from, response)
  })
}