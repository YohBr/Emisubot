const Discord = require('discord.js');
const bot = new Discord.Client();

exports.run = async (client, message, args, level) => {  

    var sender = message.author;
    var reciver = message.mentions.users.first();
    let noReciver = args[0];
    var motivo = args.slice(1).join(" ");
    if(!noReciver) return message.channel.send('mencione alguem');

    var gifs = ["https://media.giphy.com/media/KH1CTZtw1iP3W/giphy.gif",
                "https://media.giphy.com/media/f5vXCvhSJsZxu/giphy.gif",
                "https://media.giphy.com/media/uSHX6qYv1M7pC/giphy.gif",
                "https://media.giphy.com/media/rSBJ7muTr25ry/giphy.gif",
                "https://media.giphy.com/media/lZDb2PNgLXdoA/giphy.gif"]
                var temp = gifs[Math.floor(Math.random() * 5)]
                var embed = new Discord.RichEmbed()
                    .setColor(0x2186c0)
                    .setAuthor(`😍${sender.username} Beijou ${reciver.username}! ${motivo}😍`, client.user.avatarURL)
                    .setImage(temp)
                message.channel.send(embed);
}
            
exports.config = {
    command: "kiss"
}