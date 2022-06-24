const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const fs = require("fs");



module.exports = {
  name: 'help',
  alias: ['ayuda'],

  execute(client, message, args) {

    var server = message.guild;
    const embed = new Discord.MessageEmbed()
      .setThumbnail(server.iconURL())
      .setAuthor(server.name, server.iconURL())
      .addField('-serverinfo', ' muestra información del servidor', true)
      //.addField('-embed', 'Muestra el nuevo Embed prototipo', true)
      .addField('-avatar', 'Muestra tu avatar o el de otro usuario')
      //.addField('Hola', 'hola mundo', true)
      .addField('-userinfo', 'puedes ver tu informacion')
      .addField(`-idcanal`, 'muestra la ID del canal en que se envio(prototipo)')
      .addField(`-purge`, `borra mensajes (solo mods)`)
      .addField(`-musichelp`, `Te enseña los nuevos comandos de reproducción de música`)
      .setColor(0x66b3ff);

    message.channel.send({ embed });
  }
};
