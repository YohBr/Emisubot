module.exports.run = async (bot, message, args) => {

    var fs = require('fs');
    var userData = JSON.parse(fs.readFileSync("Storage/userData.json", "utf8"));
    var sender = message.mentions.users.first() || message.author;

    if (sender.id === '326363082798399488') { //Checa se a ID do autor é a mesma que a do bot
        return message.channel.send('Erro: Não é possivel coletar estes dados pós supera limites cataclismicos!'); //Cancela todo o processo seguinte
      }
    

        message.channel.send(`O Picorik de ${sender.tag} mede ${userData[sender.id + message.guild.id].picorik}cm :cucumber:`)
}

module.exports.config = {
    command: "picorik"
}