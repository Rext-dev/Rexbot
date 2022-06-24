Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const prefix = '-';

module.exports = {
	name: 'userinfo',
	alias: [''],

	execute(client, message, args) {
		let estados = {
			online: 'conectado',
			offline: 'desconectado',
			idle: 'ocupado',
			dnd: 'ausente'
		};
		let usuario = message.mentions.members.first() || message.member;
		let embed = new Discord.MessageEmbed();
		embed.setColor('RANDOM');
		embed.setDescription(`La informacion del usuario ${usuario.user.username}`);
		embed.setThumbnail(usuario.user.displayAvatarURL);
		embed.addField(`Nombre completo`, ` ${usuario.user.tag}`);
		embed.addField(`ID`, `${usuario.id}`);
		embed.addField(`Estado`, `${estados[usuario.presence.status]}`);
		//sss
		//embed.addField(`Sus roles`, `${this.state.map.join (" **|**")}`)
		embed.addField(`Nickname`, `${usuario.displayName}`);
		return message.channel.send(embed);
	}
};
