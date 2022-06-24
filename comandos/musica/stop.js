 Discord = require("discord.js");
const  client = new Discord.Client();
const {Client, MessageEmbed} = require("discord.js");
const prefix = "-";

module.exports = {
  
  name: "stop",
  alias: ["detener"],
  
  execute (client, message, args){
    
    const serverQueue = client.distube.getQueue(message)
    
    if(!message.member.voice.channel) return message.channel.send ("debes estar en un canal de voz")
    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send ("Debes estar en el mismo canal de voz que yoz")
    if(!serverQueue) return message.channel.send ("No hay música en reproducción")
    
    client.distube.stop(message)
    message.channel.send("La música se detuvo con éxito.")
    
    
  }
}