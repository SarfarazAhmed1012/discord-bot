import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message) => {
    if (message.author.bot) return
    if (message.content.startsWith("create")) {
        const url = message.content.split(" ")[1]
        return message.reply({
            content: `Generating the short id for ${url}...`,
        })
    }
    message.reply({
        content: "Ping Pong"
    })
    console.log(message.content)
})

client.on("interactionCreate", (interaction) => {
    console.log(interaction)
    interaction.reply({
        content: "Ping Pong"
    })
})

client.login(process.env.DISCORD_TOKEN)