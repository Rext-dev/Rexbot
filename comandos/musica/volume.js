Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const prefix = '-';

module.exports = {
	name: 'volume',
	alias: ['volumen'],

	execute(client, message, args) {
		const serverqueue = client.distube.getQueue(message);

		if (!message.member.voice.channel)
			return message.channel.send('Debes estar en un canal de voz');
		if (
			message.guild.me.voice.channel &&
			message.member.voice.channel.id !== message.guild.me.voice.channel.id
		)
			return message.channel.send(
				'Debes estar en el mismo canal de voz que yo'
			);

		if (!serverqueue)
			return message.channel.send('No hay canciones reproduciéndose');

		const volume = args[0];

		if (!volume)
			return message.channel.send('**_ERROR_** debes poner un valor');

		if (isNaN(volume))
			return message.channel.send(
				'Debes poner un numero sin caracteres o letras.'
			);

		if (volume < 1 || volume > 100)
			return message.channel.send('Debe ser entre el 1 al 100 ');

		client.distube.setVolume(message, volume);
		message.channel.send(`El volumen fue establecido a **${volume}%** :v`);
	}
};
