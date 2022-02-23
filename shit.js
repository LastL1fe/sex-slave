const {Client, Intents} = require("discord.js");
const {token} = require('./config.json');

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const prefix = "!crack"
const channelId = "724675479017226312"

const commands = ["ccd", "why"]

client.once('ready', () => {
    console.log("sex slave");
});

client.on('messageCreate', message => {
    if (message.content.startsWith(prefix + " ccd")) {
        message.channel.send('test for count down');
    }
});

client.on('messageCreate', message => {
    if (message.content.startsWith(prefix + " why")) {
        message.channel.send('fuck off');
    }
});

client.login(token);