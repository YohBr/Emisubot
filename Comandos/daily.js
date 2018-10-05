module.exports.run = async (bot, message, args) => {

    var fs = require('fs');
    var moment = require('moment');
    var userData = JSON.parse(fs.readFileSync("Storage/userData.json", "utf8"));   
    var sender = message.author; //A pessoa que enviou a menssagem

    if (userData[sender.id + message.guild.id].lastDaily != moment().format('L')) {
        userData[sender.id + message.guild.id].lastDaily = moment().format('L')
        userData[sender.id + message.guild.id].money += 500;
        message.channel.send({embed: {
          title: "Daily Reward",
          description: "You Got $500 added to your Account! \n Seu Picorick Cresceu 2cm",
          color: 0x17A589
        }})
     } else {
         message.channel.send({embed: {
           title: "Daily Reward",
           description: "You Already colleted your daily reward! You can collet your next reward " + moment().endOf('day').fromNow() + '.',
           color: 0x17A589
         }})
     }
   

}

module.exports.config = {
    command: "daily"
}