Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const prefix = '-';

module.exports = {
	name: 'redes',
	alias: [''],

	execute(client, message, args) {
		message.channel.send({
			embed: {
				color: 3447003,
				author: {
					name: client.user.username,
					icon_url: client.user.avatarURL
				},
				title: 'Mis Redes',
				url: 'https://linktr.ee/KikeRex',
				description: 'estas son mis redes :3',
				fields: [
					{
						name: 'a',
						value:
							'**_Me puedes seguir en esas redes, me apoyarias demasiado_** .'
					}
				],
				timestamp: new Date(),
				footer: {
					icon_url: client.user.avatarURL,
					text: 'https://linktr.ee/KikeRex'
				}
			}
		});
	}
};
