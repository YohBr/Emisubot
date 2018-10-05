const Discord = require('discord.js');
const bot = new Discord.Client();

exports.run = async (client, message, args, level) => {  

    var sender = message.author;
    var reciver = message.mentions.users.first();
    let noReciver = args[0];
    var motivo = args.slice(1).join(" ");
    if(!noReciver) return message.channel.send('mencione alguem');

    var gifs = ["https://media.giphy.com/media/HaC1WdpkL3W00/giphy.gif",
                "https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif",
                "https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif",
                "https://media.giphy.com/media/fFC10O3zlGfe/giphy.gif",
                "https://media.giphy.com/media/s31WaGPAmTP1e/giphy.gif"]
                var temp = gifs[Math.floor(Math.random() * 5)]
                var embed = new Discord.RichEmbed()
                    .setColor(0x2186c0)
                    .setAuthor(`😍${sender.username} Abraçou ${reciver.username}! ${motivo}😍`, client.user.avatarURL)
                    .setImage(temp)
                message.channel.send(embed);
}
            
exports.config = {
    command: "hug"
}