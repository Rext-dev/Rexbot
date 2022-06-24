Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const prefix = '-';

module.exports = {
	name: 'ping',
	alias: ['pong'],

	execute(client, message, args) {
		const ping = `${Date.now() - message.createdTimestamp}`;
		message.channel.send(
			`🏓Tu latencia es: ${ping}ms. Mi latencia es: ${Math.round(
				client.ws.ping
			)}ms`
		);
	}
};
