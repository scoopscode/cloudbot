module.exports = {
	name: 'hello',
	description: 'Just say Hello',
	async execute(bot, message, args) {
		message.channel.send('Hello!');
	}
}