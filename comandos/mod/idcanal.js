const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const prefix = '-';

module.exports = {
  name: 'idcanal',
  alias: [],

  execute(client, message, args) {
    let perms = message.member.hasPermission('MANAGE_CHANNELS');

    if (!perms)
      return message.channel.send(
        '`Error` `|` No tienes Permisos para usar este comando.'
      );

    message.reply('El ID del canal es: ' + message.channel.id);
  }
};
