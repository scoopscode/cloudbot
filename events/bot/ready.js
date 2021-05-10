const Discord = require('discord.js');
const bot = new Discord.Client();
const chalk = require('chalk');
const fs = require('fs');

module.exports = () =>{
    console.log(chalk.magenta.bold('Sheesh machine online'));
    bot.user.setActivity('Made by Scoops', {
        type: "PLAYING"
    }).catch(console.log);
}
