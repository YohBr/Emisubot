const Discord = require('discord.js');
const bot = new Discord.Client();

exports.run = async (client, message, args, level) => {  

    var sender = message.author;
    var motivo = args.slice(0).join(" ");

    var gifs = ["https://media.giphy.com/media/oTiMS5tKgDSKY/giphy.gif",
                "https://media.giphy.com/media/XotulrpeCFzXi/giphy.gif",
                "https://media.giphy.com/media/maZHPccdCgVEI/giphy.gif",
                "https://media.giphy.com/media/WXB88TeARFVvi/giphy.gif",
                "https://media.giphy.com/media/euMGM3uD3NHva/giphy.gif"]
                var temp = gifs[Math.floor(Math.random() * 5)]
                var embed = new Discord.RichEmbed()
                    .setColor(0x2186c0)
                    .setAuthor(`${sender.username} Esta dançando! ${motivo}`, client.user.avatarURL)
                    .setImage(temp)
                message.channel.send(embed);
}
            
exports.config = {
    command: "dance"
}