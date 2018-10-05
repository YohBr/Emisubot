const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('**Coloque uma localização!**')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Clima em ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Horario',`UTC${location.timezone}`, true)
          .addField('Escala Termica',location.degreetype, true)
          .addField('Temperatura',`${current.temperature} Graus`, true)
          .addField('Sensação Termica', `${current.feelslike} Graus`, true)
          .addField('Ventos',current.winddisplay, true)
          .addField('Humidade', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}
module.exports.config = {
    command: "clima"
}