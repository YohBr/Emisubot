module.exports.run = async (bot, message, args) => {

    var fs = require('fs');
    var userData = JSON.parse(fs.readFileSync("Storage/userData.json", "utf8"));  
    var sender = message.author; //A pessoa que enviou a menssagem

    var globalMoney = 0;
    var globalUsers = 0;
    var globalRichest = '';
    var globalRichest$ = 0;

    for (var i in userData) {
        globalMoney += userData[i].money;
        globalUsers += 1;
        if (userData[i].money > globalRichest$) {
          globalRichest$ = userData[i].money;
          globalRichest = userData[i].username;
        }
      }
    

    message.channel.send({embed:{
      title: "Global Stats",
      color: 0x17A589,
      fields: [{
          name:"Accounts",
          value:globalUsers,
          inline:true
       },
       {
          name:"Total Money",
          value:globalMoney,
          inline:true
         },
         {
          name:"Richest Account",
          value:`${globalRichest} with ${globalRichest$}`  
       }]
    }})
}

module.exports.config = {
    command: "global"
}