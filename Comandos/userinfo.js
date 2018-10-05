module.exports.run = async (bot, message, args) => {

    var fs = require('fs');
    var userData = JSON.parse(fs.readFileSync("Storage/userData.json", "utf8"));
    var sender = message.author; //A pessoa que enviou a menssagem

    function userInfo(user, guild) {
        var finalString = '';
      
        finalString += '**' + user.username + '**, da ID de **' + user.id + '**';
      
        var userCreated = user.createdAt.toString().split(' ');
        finalString += ', Criado em **' + userCreated[1] + ' ' + userCreated[2] + ', ' + userCreated[3] + '**.'
      
        finalString += ' Alem disso, ele tem ** ' + userData[user.id + guild.id].messagesSent + ' menssagens** neste server.' 
      
        return finalString;
      }
      

          message.channel.send(userInfo(sender, message.guild))

          fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
            if (err) console.error(err);
        });       
      
}



module.exports.config = {
    command: "userinfo"
}