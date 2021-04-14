const Discord = require('discord.js');
const bot = new Discord.Client();
const chalk = require('chalk');
const fs = require('fs');

module.exports = () =>{
    console.log(chalk.magenta.bold('Sheesh machine online'));
    bot.user.setActivity('Hello', {
        type: "PLAYING"
    }).catch(console.log);

    setInterval(() => {
        const statuses = [
            `sup`,
            `k`,
            `yo mama`,
            `lmao`,
            `^`,
            `lop`,
        ]

        const status = statuses[Math.floor(Math.random() * 3)]
        bot.user.setActivity(status, {
            type: "PLAYING"
        });
    }, 10000)
})
}
