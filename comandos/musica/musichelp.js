const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

const prefix = '-';

module.exports = {
	name: 'musichelp',
	alias: ['music'],

	execute(client, message, args) {
		var server = message.guild;

		const embed = new Discord.MessageEmbed()
			.setTitle('Estos son los comandos disponibles por ahora.')
			.setThumbnail(server.iconURL())
			.setAuthor(server.name, server.iconURL())
			.addField('`-play`', 'escribe el nombre de una canción o su url')
			.addField('-stop', 'detiene la música en reproducción')
			.addField('-volume', 'ajusta el volumen')
			.addField('-pause', 'Pausa la musica en reproducción')
			.addField('-continue', 'Continua la reproducir')
			.addField('-skip', 'Salta la canción actual.')
			.addField(`-playlist`, 'Te muestra la playlist actual')
			.addField(
				'-loop',
				'Repite la música actual: \n0 = desactivar loop \n1 = repetir canción\n2= Repetir playlist.'
			)
			.addField('-aleatorio', 'Pone la lista de reproducción en aleatorio')
			.setColor('GREEN');

		message.channel.send({ embed });
	}
};
