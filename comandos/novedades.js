const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const prefix = '-';
const botversion = "2.0.0"

module.exports = {
	name: 'novedades',
	alias: ['news'],

	execute(client, message, args) {
		let usuario = message.member;
		const id = `${usuario.id}`;

		//message.channel.send(`${id}`)
		if (id === '612786159306670112') {
			let canal = client.channels.cache.get('838193881253937212');
			var server = message.guild;

			const embed = new Discord.MessageEmbed()
				.setThumbnail(server.iconURL())
				.setAuthor(server.name, server.iconURL())
				.addField(
					`Nueva actulizacion _**${botversion}**`,
					'Prueba usar el comando -help para ver mis comandos :3'
				)
				.addField(
					`NEWS`,
					`**Se implemento una Base de datos, el cual alojara varios datos importantes para el bot, esta funcion es experimental, por lo que el bot podria fallar en cualquier momento al encontrarse con un error**`
				)
			//	.addField(`Bugs`, `Se corregio el bug con el comando -volume`
				//  )

				.setColor('GREEN');

			canal.send({ embed });
			canal.send('@everyone');
		}
	}
};
