Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const prefix = '-';

module.exports = {
	name: 'botstats',
	alias: ['stats'],

	execute(client, message, args) {
		//${client.guilds.cache.size}
		message.channel.send('La version del bot es: **1.1.1 OFICIAL**');
		message.channel.send(
			`El bot esta en ${client.guilds.cache.size} servidores actualmente :0.`
		);
	}
};