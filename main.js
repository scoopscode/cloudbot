const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = '^';
const chalk = require('chalk');
const fs = require('fs');


//Command Handler
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(bot, Discord);
})

bot.login(process.env.token)