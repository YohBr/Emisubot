module.exports.run = async (bot, message, args) => {

    var fs = require('fs');
    var userData = JSON.parse(fs.readFileSync("Storage/userData.json", "utf8"));
    var sender = message.mentions.users.first() || message.author; //A pessoa que enviou a menssagem

        message.channel.send({embed:{
          title: "Banco",
          color: 0x17A589,
          fields: [{
            name:"Dono da Conta",
            value:sender.username,
            inline:true
         },
         {
            name:"Saldo da Conta",
            value:userData[sender.id + message.guild.id].money,
            inline:false
          }]
        }})
}

module.exports.config = {
    command: "money",   command: "balance"
}