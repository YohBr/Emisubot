const Discord = require('discord.js');
const bot = new Discord.Client();

exports.run = async (client, message, args, level) => {  

    var sender = message.author;
    var reciver = message.mentions.users.first();
    let noReciver = args[0];
    var motivo = args.slice(1).join(" ");
    if(!noReciver) return message.channel.send('mencione alguem');

    var gifs = ["https://media.giphy.com/media/ZcINp0p8P3vE4LAfLj/giphy.gif",
                "https://media.giphy.com/media/BKRECiW08vdjG/giphy.gif",
                "https://media.giphy.com/media/Toc2E7feEat7G/giphy.gif",
                "https://media.giphy.com/media/iu4rThMvxxvoc/giphy.gif",
                "https://media.giphy.com/media/7fQtWJyj4jm5G/giphy.gif"]
                var temp = gifs[Math.floor(Math.random() * 5)]
                var embed = new Discord.RichEmbed()
                    .setColor(0x2186c0)
                    .setAuthor(`😡${sender.tag} Socou ${reciver.tag}! ${motivo}😡`, client.user.avatarURL)
                    .setImage(temp)
                message.channel.send(embed);
}
            
exports.config = {
    command: "punch"
}