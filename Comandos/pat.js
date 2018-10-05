const Discord = require('discord.js');
const bot = new Discord.Client();

exports.run = async (client, message, args, level) => {  

    var sender = message.author;
    var reciver = message.mentions.users.first();
    let noReciver = args[0];
    var motivo = args.slice(1).join(" ");
    if(!noReciver) return message.channel.send('mencione alguem');

    var gifs = ["https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif",
                "https://media.giphy.com/media/L2z7dnOduqEow/giphy.gif",
                "https://media.giphy.com/media/osYdfUptPqV0s/giphy.gif",
                "https://media.giphy.com/media/109ltuoSQT212w/giphy.gif",
                "https://media.giphy.com/media/REwolzD4SjNvO/giphy.gif"]
                var temp = gifs[Math.floor(Math.random() * 5)]
                var embed = new Discord.RichEmbed()
                    .setColor(0x2186c0)
                    .setAuthor(`${sender.username} Acariciou ${reciver.username}! ${motivo}`, client.user.avatarURL)
                    .setImage(temp)
                message.channel.send(embed);
}
            
exports.config = {
    command: "pat"
}