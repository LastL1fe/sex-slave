const fs = require("fs");
const {Client, Intents} = require("discord.js");
const {token} = require('./config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const prefix = "!crack"
const channelId = "724675479017226312"

const commands = ["ccd", "why"]

let onGoingCountDowns = []

client.once('ready', () => {
    console.log("sex slave");
});

client.on('messageCreate', message => {
    if (message.author.id != 875180300395757568){
        if (message.content.startsWith(prefix + " cct")) {
            let parsedCode = message.content.split(message.content.indexOf("t" + 1))
            let countDownDay = new Date(parsedCode);
            let currentDay = Date()

            message.channel.send(countDownDay.toDateString());
        }
    }
});

client.on('messageCreate', message => {
    if (message.content.startsWith(prefix + " why")) {
        message.channel.send('fuck off');
    }
});

client.on('messageCreate', message => {
    if (message.content.startsWith(prefix)){
        message.channel.send("crack these nuts");
    }
});

client.login(token);