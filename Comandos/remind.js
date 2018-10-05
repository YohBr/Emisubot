module.exports.run = async (bot, message, args) => {

    const Discord = require("discord.js")
    const ms = require("ms");

    let reminderTime = args[0];
    if (!reminderTime) return message.channel.send("**Specify a time for me to remind you. Usage: /remind 15min any text or code**");

    let reminder = args.slice(1).join(" ");

       message.channel.send((`Ok, irei lembra-lo de **${reminder}** daqui ah **${reminderTime}**.`), {embed: {
        title:(`${message.author.username}`),
        color:0x17A589,
        fields: [{
            name:"Lembrete",
            value:(`**${reminder}**`),
            inline:true
        },
        {
            name:"tempo",
            value:(`**${reminderTime}**`),
            inline:true
        }],
        timestamp: new Date()   
    }}) 

    setTimeout(function() {
        let remindEmbed = new Discord.RichEmbed()
            .setColor('#17A589')
            .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
            .addField("Lembrete", `**${reminder}**`)
            .setTimestamp()

        message.channel.send(`<@${message.author.id}>`, remindEmbed);
    }, ms(reminderTime));
}
module.exports.config = {
    command: "remind"
}