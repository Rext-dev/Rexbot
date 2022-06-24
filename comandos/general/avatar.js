Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const prefix = "-";

module.exports = {

  name: "avatar",
  alias: [],

  execute(client, message, args) {
    let usuario = message.mentions.members.first() || message.member;
    let embed = new Discord.MessageEmbed()
    embed.setColor("RANDOM")
    embed.setDescription(`Avatar del usuario ${usuario.user.username}`)
    embed.setImage(usuario.user.displayAvatarURL())
    return message.channel.send(embed)

    /*.setThumbnail(server.iconURL)
    .setAuthor(server.name, server.iconURL)
    .addField(`El avatar del usuario es ${usuario.user.username}` , true)
    .addField(usuario.user.displayAvatarURL, true)
    .setColor(RANDOM) 
    message.channel.send({ embed });
    */


  }
}