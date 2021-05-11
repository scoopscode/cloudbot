const fs = require('fs');

module.exports = (bot, Discord) => {
    const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    for(const file of command_files){
        const command = require(`../commands/fun/${file}`);
        if(command.name){
            bot.commands.set(command.name, command);
        } else {
            continue;
        }
    }
    for(const file of command_files){
        const command = require(`../commands/information/${file}`);
        if(command.name){
            bot.commands.set(command.name, command);
        } else {
            continue;
        }
    }
    for(const file of command_files){
        const command = require(`../commands/misc/${file}`);
        if(command.name){
            bot.commands.set(command.name, command);
        } else {
            continue;
        }
    }
    for(const file of command_files){
        const command = require(`../commands/moderation/${file}`);
        if(command.name){
            bot.commands.set(command.name, command);
        } else {
            continue;
        }
    }
    for(const file of command_files){
        const command = require(`../commands/music/${file}`);
        if(command.name){
            bot.commands.set(command.name, command);
        } else {
            continue;
        }
    }
}