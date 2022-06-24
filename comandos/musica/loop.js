 Discord = require("discord.js");
const  client = new Discord.Client();
const {Client, MessageEmbed} = require("discord.js");
const prefix = "-";

module.exports = {
  
  name: "loop",
  alias: ["repetir"],
  
  execute (client, message, args){
    
    
    const queue = client.distube.getQueue(message)
    if(!message.member.voice.channel) return message.channel.send ("Debes estar en un canal de voz")
    if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send ("Debes estar en el mismo canal de voz que yo")
    
    if(!queue) return message.channel.send("No hay música en reproducción.")
    const opcion = args[0]
    if(!opcion) return message.channel.send("Debes poner una opción (0/1/2), o escribe **-musichelp**")

    if(opcion < 0 || opcion > 2){
      
      message.channel.send("**_Eso no es un valor aceptado._**")
      
    }
    if(opcion === "0"){
      client.distube.setRepeatMode(message, 0)
      message.channel.send("La Repetición ha sido desactivado. ")
      return;
     
    }
    if(opcion === "1"){
      client.distube.setRepeatMode(message, 1)
      message.channel.send("Se ha activado la repetición en la canción actual")
      return;
    }
    if(opcion === "2"){
      client.distube.setRepeatMode(message, 2)
      message.channel.send("Se ha activado la repetición en la PlayList actual")
      return;
      
    }
  }
}