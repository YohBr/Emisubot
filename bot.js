//Estrutura Base do Bot
var Discord = require('discord.js');
var bot = new Discord.Client();
var config = require("./config.json");
var fs = require('fs');
var profanities = require('profanities');
var moment = require('moment');
var ms = require('ms')

var userData = JSON.parse(fs.readFileSync("Storage/userData.json", "utf8"));
var listaDeComandos = fs.readFileSync("Storage/comandos", "utf8");
bot.commands = new Discord.Collection();

function loadCmds () {
  fs.readdir('./Comandos/', (err, files) => {
    if(err) console.log(err);

    var jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if (jsfiles.length <= 0) { return console.log('Nenhum Comando Encontrado...')}
    else { console.log(jsfiles.length + ' Comandos Encontrados.') }
    
    jsfiles.forEach((f, i) => {
      delete require.cache[require.resolve(`./Comandos/${f}`)];
      var cmds = require(`./Comandos/${f}`);
      console.log(`Comando ${f} Carregando...`);
      bot.commands.set(cmds.config.command, cmds);
    })
  })
}

function userInfo(user, guild) {
  var finalString = '';

  finalString += '**' + user.username + '**, da ID de **' + user.id + '**';

  var userCreated = user.createdAt.toString().split(' ');
  finalString += ', Criado em **' + userCreated[1] + ' ' + userCreated[2] + ', ' + userCreated[3] + '**.'

  finalString += ' Alem disso, ele tem ** ' + userData[user.id + guild.id].messagesSent + ' menssagens** neste server.' 

  return finalString;
}

loadCmds();
//Evento do Ouvinte: Mensagem Recebida (Isso é executado toda vez que uma mensagem é recebida)
bot.on("message", message => {

  //Variaveis
  var sender = message.author; //A pessoa que enviou a menssagem
  var msg = message.content.toUpperCase(); //Pega a menssagem, e faça todo em MAIÚSCULAS
  var prefix = "!" //O caractere antes do comando, você pode alterar e por o que você quiser no lugar

  const responseObject = {
    "oi" : "Olá, como vai?",
    "ata" : "qdacasa",
    "?" : "ãhn?",
    "o cara ta loko" : "Chama a Policia",
    "cala a boca emisu" : "CALA A BOCA, MÃO NA BOCA, CHEIRA O CU DA VÉIA LOKA, VÉIA LOKA JÁ MORREU CHEIRA O CU DO SEU TADEU, SEU TADEU VIAJOU CHEIRA O CU DO MEU AVÔ, MEU AVÔ JÁ MORREU QUEM MANDA NA MINHA BOCA SOU EU",
    "emisu fdp" : "VAI SE FUDER SEU FILHO DA PUTA AUTISTA PRA CACETETE ARROMBADO DE UM CARALHO VERGONHA DO BONDE DE KONOHA SHOW POÇO DE FRACASSO DESPERDÍCIO DE OXIGÊNIO",
    "emisu arrombado" : "NÃO ME CHAMA DE ARROMBADO SEU ARROMBADO\n ARROMBADO ARROMBADO",
    "imensa" : "Não Fale da Imensa",
    "atenção" : "Meu Pau na Sua Mão",
    "piu parado ai" : "Passe já o seu Bucetão",
    "mo safado" : "safado demais",
    "fala fiote" : "Faaaaaala fiote",
    "num pode isso" : "é Crime na Russia",
    "duvido" : "Meu Pau no teu Ouvido",
    "e!padrim" : "https://www.padrim.com.br/emisu",
    "e!live" : "https://www.twitch.tv/emisulive",
    "e!yt" : "https://www.youtube.com/user/EmisuShow",
    "animal" : "Pega no meu Pal",
    "e!ba" : "Usuario Baneado do Cirver!"
  }
    message.channel.send(responseObject[message.content]);

  
 
  
  //Deletando Palavras que podem ser ofenssivas, você pode alterar para qualquer outra palavra
  if (msg.endsWith('ÃO')) { //Checa se a Palavra Putz esta inclusa na menssagem
     //Deleta a Menssagem
    message.channel.send('**MEU PAU NA SUA MÃO**') //Envia uma menssagem privada ao autor da menssagem
  }

  if (!message.content.startsWith(prefix)) return;
  var cont = message.content.slice(prefix.length).split(" ");
  var args = cont.slice(1);
  var cmd = bot.commands.get(cont[0])
  if (cmd) cmd.run(bot, message, args);

  if(message.content === prefix + "reboot") { 
    if (message.author.id === "326363082798399488") {
      message.channel.send(":gear: Reload in process")
      
      bot.destroy()
      bot.login(process.env.TOKEN)
    message.channel.send(":gear: Reload has been done")
    } else {
      
    message.channel.send("Only the Owner of this bot can do that !")
    }
    loadCmds()
  }

  if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {
      messagesSent: 0
    }
    userData[sender.id + message.guild.id].messagesSent++;
  if (!userData[sender.id + message.guild.id]) userData[sender.id + message.guild.id] = {}
  if (!userData[sender.id + message.guild.id].money) userData[sender.id + message.guild.id].money = 1000;
  if (!userData[sender.id + message.guild.id].lastDaily) userData[sender.id + message.guild.id].lastDaily = 'Not Colleted';
  if (!userData[sender.id + message.guild.id].picorik) userData[sender.id + message.guild.id].picorik = 0;
  if (!userData[sender.id + message.guild.id].username) userData[sender.id + message.guild.id].username = message.author.username;

    if(userData[sender.id + message.guild.id].lastDaily != moment().format('L')) {
       userData[sender.id + message.guild.id].lastDaily = moment().format('L')
       userData[sender.id + message.guild.id].money += 500
       userData[sender.id + message.guild.id].picorik += 2 ;
    
    
    fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {
      if (err) console.error(err);
    });
  }
});

//Evento do Ouvinte: Ligando o Bot
bot.on("ready", () => {
  console.log('Bot Ligado...') //Execulta quando o Bot esta Funcionando
  
  //Você pode por qualque codigo que queira aqui, ele sera execultado quando o bot ligar.
  
  //Alterando os Status do Bot, tipo o que ele esta jogando ou transmindo, se esta online ou ocupado
  
  //status
  bot.user.setStatus("dnd") //Você pode alterar para 'Online", 'idle' para ausente, 'dnd' para ocupado & 'ínvisible' para invisivel
  
  //Jogando & Transmitindo
  bot.user.setGame('Olá!') //Você pode alterar pra qualquer coisa que quiser tipo "Dona Florinda Ultra Adventures"
  //apa transmissões você pode por dessa forma:
  bot.user.setGame('Meu Prefixo é "!"', 'https://www.twitch.tv/emisulive'); 
  
});

//Evento do Ouvinte: Um Usuario Entrou no Server
bot.on("guildMemberAdd", member => {
  
  console.log('User ' + member.user.username + ' Entrou no Server!') //Envia uma menssagem no console avisando que alguem entrou no servr
  console.log(member)
  //Adicionando o cargo quer q a pessoa receba assim que entrar no server
  var role = member.guild.roles.find('name', 'level 1'); //Checa os cargos do server e preocura o cargo descrito, no caso o Cobaia Favoriata, você pode mudar pra qualquer cargo que tenha no server
  
  //Adicionando o Cargo a Pessoa
  member.addRole(role)
  
  member.guild.channels.get('497076287677005824').send('**' + member.user.username + ' Entrou no Server!') //Envia Uma Mensagem de Aviso de Novo Membro
  
  
});

//Evento do Ouvinte: Um Usuario Saiu no Server
bot.on("guildMemberRemove", member => {
  
  member.guild.channels.get('497076287677005824').send('**' + member.user.username + ' Saiu no Server!') //Envia Uma Mensagem de Aviso de um Membro que deixou o server

});


//Login
bot.login(config.token)