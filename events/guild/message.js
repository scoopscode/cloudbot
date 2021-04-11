module.exports = (Discord, bot, message) => {
    const prefix = '^';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const cpmmand = bot.commands.get(cmd);

    if(command) command.execute(bot, message, args, Discord);
}