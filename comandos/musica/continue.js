Discord = require("discord.js");
const  client = new Discord.Client();
const {Client, MessageEmbed} = require("discord.js");
const prefix = "-";


module.exports = {
  
  name: "continue",
  alias: ["resume"],
  
  execute (client, message, args){
    const serverQueue = client.distube.getQueue(message)
    
    
   if(!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz.")
    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send ("Tienes que estar en el mismo canal de voz que yo.")
    
    if(!serverQueue) return message.channel.send("No hay música en reproducción.")
    
    if(!serverQueue.pause) return message.channel.send("La música no esta pausada.")
    
    client.distube.resume(message)
    
    message.channel.send("La música ya reanudó.")
  }
}