const Discord = require('discord.js');
const bot = new Discord.Client();

exports.run = async (bot, message, args) => {

    if(!args[0]) return message.reply("Faça Qualquer Pergunta que Queira!");
    let replices = ["Sim 👍", "Não 👎", "Certeza 👌", "Duvido 🙅", "Eu sinceramente não sei 🤷", "3 Dedin na sua Buuuuuuuunda 🤘", "Sera? 🤔", "Tente Novamente 🤦"];

    let result = Math.floor((Math.random() * replices.length));
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(0x00AE86)
    .addField("Pergunta", question)
    .addField("Resposta", replices[result]);

    message.channel.send(ballembed);  

}

exports.config = {
    command: "8ball"
}