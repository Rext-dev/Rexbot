Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const prefix = '-';

module.exports = {
  name: 'embed',
  alias: [],

  execute(client, message, args) {
    message.channel.send({
      embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: 'Enlace Embed',
        url: 'https://github.com/CraterMaik',
        description: 'Mesaje de prueba para la descripcion del embed.',
        fields: [
          {
            name: 'Campo1',
            value: 'Pueden tener diferentes campos con pequeñas descripciones.'
          },
          {
            name: 'Campo2',
            value:
              'Puedes poner [Enlaces web](https://github.com/CraterMaik) dentro del embed.'
          },
          {
            name: 'Campo3',
            value:
              'Puedes poner todos los Markdown *cursiva* **__Marcado__** dentro de un embed.'
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: 'github.com/CraterMaik'
        }
      }
    });
  }
};
