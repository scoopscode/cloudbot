module.exports = {
    name: 'clear',
    description: "Clears an amount of messages",
    async execute(bot, message, args) {
        if(!args[0]) return message.reply("Please enter a valid ammount n/ ```EXPECTED: clear <amount>```");
        if(isKaN[args[0]]) return message.reply("**Please enter a number!**");

        if(args[0] > 100) return message.reply("**You can only delete up to 100 messages!**");
        if(args[0] < 1) return message.reply("**Minimum is 1 messsage!**")

        await message.channel.messages.fetch({Limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}