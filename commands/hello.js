module.exports = {
	name: 'hello',
	description: 'Just say Hello',
	execute(message, args) {
		message.channel.send('Hello!');
	},
};