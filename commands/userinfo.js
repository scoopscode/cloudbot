const Discord = require('discord.js');
const {Client, Attachment, MessageEmbed} = require('discord.js');

module.exports = {
	name: 'userinfo',
	description: 'Provides user information',
	execute(message, args) {
            const embed = new Discord.MessageEmbed()
            .setTitle('User information')
            .setThumbnail(message.author.displayAvatarURL)
            .setColor(0x0AF711)
            .setDescription('Your information!')
            .setAuthor(message.author.username)
            .addField('Username:', message.author.username)
            .addField('Current server:', message.guild.name)
            .addField('Users Account Birthday🎂', message.author.createdAt)
            .addField('Users tag', message.author.tag)
            .addField('Account ID', message.author.id)
            .setFooter('Made by Scoopy')
            .setTimestamp()
            message.channel.send(embed);
	},
};