 Discord = require("discord.js");
const  client = new Discord.Client();
const {Client, MessageEmbed} = require("discord.js");
const prefix = "-";

module.exports = {
  
  name: "queue",
  alias: ["playlist"],
  
  execute (client, message, args){
    const queue = client.distube.getQueue(message)
    
    if(!queue) return message.channel.send("No hay lista de reproducción.")
    
    const embed =  new Discord.MessageEmbed()
    .setTitle("Play List (Lista de reproducción)")
    .setDescription('\n'+ queue.songs.map((songs,id) => `**${id + 1}**. ${songs.name}-\`${songs.formattedDuration}\``).slice(0, 10).join("\n"))
    .setFooter("PlayList del servidor")
    .setColor('BLUE')
    //.setThumbnai('URL')
    message.channel.send(embed)
    
    
    
    
  }
}