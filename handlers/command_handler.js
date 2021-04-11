const fs = require('fs');

module.exports = (bot, Discord) => {
    const command_files = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    for(const file of command_files){
        const command = require(`../commands/${file}`);
        if(command.name){
            bot.commands.set(command.name, command);
        } else {
            continue;
        }
    }
}