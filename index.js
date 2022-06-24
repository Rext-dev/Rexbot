//html
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
//CAMBIAR PUERTO
app.listen(3000, () => console.log(`FUNCIONAMIENTO CORRECTO`));
//----------------------------


//-------handler------
const fs = require('fs');

//---------------------------- CODIGO DEL BOT ---------------------------
const Discord = require("discord.js");
const config = require("./config.json");
const versionbot=config.version
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });
//hadler 2
client.command = new Discord.Collection();
const commandFiles = fs
  .readdirSync('./comandos')
  .filter(file => file.endsWith('.js'));
const musicacommandFiles = fs
  .readdirSync('./comandos/musica')
  .filter(file => file.endsWith('.js'));
const generalcommandFiles = fs
  .readdirSync('./comandos/general')
  .filter(file => file.endsWith('.js'));
const modcommandFiles = fs
  .readdirSync('./comandos/mod')
  .filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.command.set(command.name, command);
}

for (const file of musicacommandFiles) {
  const command = require(`./comandos/musica/${file}`);
  client.command.set(command.name, command);
}
for (const file of generalcommandFiles) {
  const command = require(`./comandos/general/${file}`);
  client.command.set(command.name, command);
}
for (const file of modcommandFiles) {
  const command = require(`./comandos/mod/${file}`);
  client.command.set(command.name, command);
}
//------------------------------------------

client.on('ready', () => {
  const array = [
    {
      name: `${client.guilds.cache.size} servidores`,
      type: 'WATCHING'
    },
    {
      name: `Versión ${versionbot} BETA`,
      type: 'WATCHING'
    },
    {
      name: 'help /// musichelp',
      type: 'PLAYING'
    },
    {
      name: 'Creador KIKEREX',
      type: 'WATCHING'
    },
    {
      name: 'en Twitch: kikerexgg',
      type: 'STREAMING',
      url: 'https://twitch.tv/kikerexgg'
    },
    {
      name: 'otros bots :v',
      type: 'COMPETING'
    }
  ];
  setInterval(() => {
    function presence() {
      client.user.setPresence({
        status: 'online',
        //dnd no molestar, idle ausente, invisible, online
        activity: array[Math.floor(Math.random() * array.length)]
        // listening escuchando, playing jugando, streaming, watching (mayusculas)
      });
    }
    presence();
  }, 10000);
  console.log('Estoy en linea!');
});
/*
client.on('messageCreate',  message => {
  
})*/
client.on('message', async message => {

  prefix = "-"

  if (message.author.bot) return;
  var server = message.guild;
  if (!server) {
    message.channel.send(
      'Comandos invalidos, estos funcionan en un servidor, no en MD.'
    );
    return;
  }
  if (!message.content.startsWith(prefix)) return;

  //comandos
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  //hadler comandos
  let cmd = client.command.find(
    c => c.name === command || (c.alias && c.alias.includes(command))
  );
  if (cmd) {
    cmd.execute(client, message, args);
  }
})
//aprendiendo
client.on('message', message => {

  //evitar bucle
  if (message.author.bot) return;

  if (message.content === 'hola') {
    message.reply('hola, que tal');
  } else if (message.content === 'Hola') {
    message.reply('Hola, como estas');
  } else if (message.content === 'xd') {
    message.reply('xd');
  } else if (message.content === 'xdd') {
    message.reply('xd');
  }
});
//bienvenida
client.on('guildMemberAdd', member => {
  console.log(
    `Nuevo usuario:  ${member.user.username} se ha unido a ${
    member.guild.name
    }.`
  );
  var canal = client.channels.cache.get('824829402939785288');
  canal.send(`${member.user}, bienvenido al servidor pasala bien.`);
});
//economia

//musica
const Distube = require('distube');
client.distube = new Distube(client, {
  emitNewSongonly: true,
  SearchSongs: true,
  leaveOnStop: false,
  leaveOnFinish: true,
  leaveOnEmpty: true
});

//eventos
client.distube.on('addList', (message, queue, playlist) => {
  message.channel.send(
    `playlist añadida: **${playlist.name}** -- ${
    playlist.songs.length
    }** canciones`
  );
});
client.distube.on('addSong', (message, queue, song) => {
  message.channel.send(
    `cancion añadida: **${song.name}** -- **${song.formattedDuration}**`
  );
});
client.distube.on('playsong', (message, queue, playsong) => {
  message.channel.send(
    `reproduciendo ahora: **${playsong.name}** -- **${
    playSong.formattedDuration
    }**`
  );
});
client.distube.on('playList', (message, queue, playlist, song) => {
  message.channel.send(`reproduciendo ahora: **${playList.name}**`);
});
client.distube.on('error', (message, queue, error) => {
  console.log(error);
  message.channel.send(`Se encontro un error ${error}`);
});

const mySecret = process.env['TOKEN'];



client.login(mySecret);