const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, MessageEmbed } = require("discord.js");
const prefix = "-";

module.exports = {

  name: "purge",
  alias: ["borrar"],

  execute(client, message, args) {

    let permiso = message.member.hasPermission("MANAGE_MESSAGES");
    if (!permiso) {
      message.channel.send('Error, No tiene los permisos necesarios {MANAGE_MESSAGES}');
    } else {
      if (!args[0]) return message.channel.send("Necesitas poner la cantidad a eliminar")
      let number = args[0]
      if (isNaN(number)) return message.channel.send("Necesitas colocar un numero sin signos o letras")
      number = parseInt(number)
      if (number > 200 || number <= 0) return message.channel.send("El valor es invalido(1-200).")
      message.channel.bulkDelete(number + 1).then(() => {
        message.channel.send(`Se eliminarón  ${number} mensajes.`)
      }).catch(error => (`Ocurrio un error: ${error.message}`))




    }
  }

}