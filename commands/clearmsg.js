module.exports = {
    name: 'clear',
    aliases: [`purge`],
    description: "Clears an amount of messages",
    async execute(bot, message, args) {
        if(!args[0]) return message.reply("**please enter a valid amount!**```EXPECTED: clear <amount>```");
        if(isNaN[args[0]]) return message.reply("**please enter a number!**");

        if(args[0] > 100) return message.reply("**you can only delete up to 100 messages!**");
        if(args[0] < 1) return message.reply("**minimum is 1 messsage!**")

        await message.channel.messages.fetch({Limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}