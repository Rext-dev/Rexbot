Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const prefix = '-';

module.exports = {
	name: 'skip',
	alias: ['saltar'],

	execute(client, message, args) {
		const queue = client.distube.getQueue(message);
		if (!message.member.voice.channel)
			return message.channel.send('Debes estar en un canal de voz');
		if (
			message.guild.me.voice.channel &&
			message.member.voice.channel.id !== message.guild.me.voice.channel.id
		)
			return message.channel.send(
				'Debes estar en el mismo canal de voz que yo'
			);
		if (!queue) return message.channel.send('No hay música en reproducción');
		client.distube.skip(message);
		message.channel.send('**_La cancion fue saltada correctamente_**');
	}
};
