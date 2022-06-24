Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const prefix = '-';

module.exports = {
	name: 'aleatorio',
	alias: ['shuffle'],

	execute(client, message, args) {
		const queue = client.distube.getQueue(message);
		if (!message.member.voice.channel)
			return message.channel.send('debes estar en un canal de voz');
		if (
			message.guild.me.voice.channel &&
			message.member.voice.channel.id !== message.guild.me.voice.channel.id
		)
			return message.channel.send(
				'Debes estar en el mismo canal de voz que yo'
			);
		if (!queue) return message.channel.send('No hay música en reproducción');
		client.distube.shuffle(message);
		message.channel.send("la lista se puso aleatorio")
	}
};