Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const prefix = '-';

module.exports = {
	name: 'serverinfo',
	alias: [''],

	execute(client, message, args) {
		var server = message.guild;

		const embed = new Discord.MessageEmbed()

			.setThumbnail(server.iconURL)
			.setAuthor(server.name, server.iconURL)
			.addField('usa esta información con sabiduria :3', true)
			.addField('ID', server.id, true)
			.addField('Region', server.region, true)
			.addField('Creado el', server.joinedAt.toDateString(), true)
			.addField(
				'Dueño del Servidor',
				server.owner.user.username +
					'#' +
					server.owner.user.discriminator +
					' (' +
					server.owner.user.id +
					')',
				true
			)
			.addField('Miembros', server.memberCount, true)
			.addField('Roles', server.roles.cache.size)
			.addField('ID de este canal', message.channel.id, true)
			.setColor('RANDOM');

		message.channel.send({ embed });
	}
};
