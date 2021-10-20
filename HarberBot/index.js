const Discord = require('discord.js');
const client = new Discord.Client()

  const PREFIX = '/'


client.on('ready', () =>{
  console.log('Bot ativo!')

})
client.on('guildMemberAdd', member =>{
  const server = client.guilds.cache.get('828436544888111124')
  let welcome = client.channels.cache.get('828440388263477268')

  let welcomeembed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('<a:confete:828440875612635216> Seja bem vindo! ')
  .setDescription('\nSeja bem vindo ao nosso servidor! \n Sempre buscamos dar o melhor atendimento e atenção e mais coisas \n caso queira conversar vá em <#828436544888111128> \n para ver as regras <#828441666162917376> \n é isso qualquer dúvida chame alguém no privado!')
  .setFooter('HarberBot © todos direitos reservados.')
  welcome.send(welcomeembed)
})
client.on('message', message =>{
           // commands|==============================================================|
           const args = message.content.slice(PREFIX.length).trim().split(/ +/)
           const command = args.shift().toLowerCase();
       
           try {
             let commandFile = require(`./commands/${command}`);
             commandFile.run(client, message, args);
          console.log(` ${message.author.tag} executou o comando ${PREFIX}${command}`)
           } catch (err) {
        }
})
client.login(process.env.TOKEN)