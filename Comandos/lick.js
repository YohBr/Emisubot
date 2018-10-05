const Discord = require('discord.js');
const bot = new Discord.Client();

exports.run = async (client, message, args, level) => {  

    var sender = message.author;
    var reciver = message.mentions.users.first();
    let noReciver = args[0];
    var motivo = args.slice(1).join(" ");
    if(!noReciver) return message.channel.send('mencione alguem');

    var gifs = ["https://media.giphy.com/media/12MEJ2ArZc23cY/giphy.gif",
                "https://media.giphy.com/media/x4P8TaYhGn4FW/giphy.gif",
                "https://media.giphy.com/media/kVDaetFZqnDXi/giphy.gif",
                "https://media.giphy.com/media/ZvyiF8rS8I9QA/giphy.gif",
                "https://media.giphy.com/media/bC0caT4xYU8qQ/giphy.gif"]
                var temp = gifs[Math.floor(Math.random() * 5)]
                var embed = new Discord.RichEmbed()
                    .setColor(0x2186c0)
                    .setAuthor(`😨${sender.username} Lambeu ${reciver.username}! ${motivo}😨`, client.user.avatarURL)
                    .setImage(temp)
                message.channel.send(embed);
}
            
exports.config = {
    command: "lick"
}