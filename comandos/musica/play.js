const Discord = require("discord.js");
const  client = new Discord.Client();
const {Client, MessageEmbed} = require("discord.js");
const prefix = "-";

module.exports = {
  
  name: "play",
  alias: [],
  
  execute (client, message, args){
    
    
    const cancion = args.join(" ");
    
    if(!cancion) return message.channel.send ("debes escribir una cancion")
    
    if(!message.member.voice.channel) return message.channel.send ("debes estar en un canal de voz")
    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send ("Debes estar en el mismo canal de voz que yo")
    client.distube.play(message, cancion);
    
    message.channel.send("Se esta reproduciendo ahora mismo.")
  }
}