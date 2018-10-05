module.exports.run = async (bot, message, args) => {

    var fs = require('fs');
    var listaDeComandos = fs.readFileSync("Storage/comandos", "utf8");
  
        message.author.send(listaDeComandos)
        message.channel.send(`<@${message.author.id}> Verifique Sua DM!`)
}

module.exports.config = {
    command: "help",  command: "comandos"
}