module.exports.run = async (bot, message, args) => {

    var fs = require('fs');
    var userData = JSON.parse(fs.readFileSync("Storage/userData.json", "utf8"));   
    var sender = message.author; //A pessoa que enviou a menssagem

    var guildMoney = 0;
    var guildUsers = 0;
    var guildRichest = '';
    var guildRichest$ = 0;

    for (var i in userData) {
      if (i.endsWith(message.guild.id)) {
        guildMoney += userData[i].money;
        guildUsers += 1;
        if (userData[i].money > guildRichest$) {
          guildRichest$ = userData[i].money;
          guildRichest = userData[i].username;
        }
      }
    }

    message.channel.send({embed:{
      title: "Guild Stats",
      color: 0x17A589,
      fields: [{
          name:"Accounts",
          value:guildUsers,
          inline:true
       },
       {
          name:"Total Money",
          value:guildMoney,
          inline:true
         },
         {
          name:"Richest Account",
          value:`${guildRichest} with ${guildRichest$}`  
       }]
    }})
}

module.exports.config = {
    command: "guild"
}