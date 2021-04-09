const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} =
require('discord.js');
const bot = new Discord.Client();

const chalk = require('chalk');

const fs = require('fs')

const PREFIX = '^';

bot.on('ready', () =>{
    console.log(chalk.magenta.bold('Sheesh machine online'));
    bot.user.setActivity('In development | $', {
        type: "PLAYING"
    }).catch(console.log);

    setInterval(() => {
        const statuses = [
            `Lop!`,
            `Lmao`,
            `Lamp moment`
        ]

        const status = statuses[Math.floor(Math.random() * 3)]
        bot.user.setActivity(status, {
            type: "PLAYING"
        });
    }, 5000)
})

//Command Handler
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        console.log("Successfully loaded " + file)
        let commandName = file.split(".")[0];
        bot.commands.set(commandName, props);
    });
});

bot.login(process.env.token)