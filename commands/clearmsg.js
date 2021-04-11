module.exports = {
    name: 'clear',
    description: "Clears an amount of messages",
    async execute(bot, message, args) {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
                .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("**An error has occured. Try again!")})                        
            }
        }
    
};