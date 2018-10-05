const Discord = require('discord.js');
const bot = new Discord.Client();

exports.run = async (client, message, args, level) => {  

    var ndms = ["Bonoro",
                "Bololo",
                "Bolsossauro",
                "Salnorabo",
                "Malbonaro",
                "Bozonaro",
                "Bolsochato",
                "Chatonaro",
                "Capinaro",
                "BolsoNAZI",
                "Bolismo",
                "Bolo",
                "Boloro",
                "Bolsoralho",
                "Fetonaro",
                "Bostonaro",
                "Trumpnaro",
                "Fuzilnaro",
                "Bozotario",
                "Esfaquinaro"]
                var temp = ndms[Math.floor(Math.random() * 11)]
                message.channel.send(`Seu Nome de Mito é **${temp}**.`);
}
            
exports.config = {
    command: "ndm"
}