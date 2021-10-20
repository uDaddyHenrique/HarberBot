const Discord = require('discord.js');
exports.run = async(client, message, args) =>{

const membro = message.member;

  message.delete()
  message.channel.send(`${message.author}, enviei uma mensagem em seu privado!`).then(msg => msg.delete({timeout: 3000}))
  let verau = new Discord.MessageEmbed()
  .setColor('GOLD')
  .setTitle(':white_check_mark: Verificação!')
  .setDescription('Para nós o verificar diga seu nome a nós! \n De preferência seu nick do minecraft!')
  .setTimestamp(new Date())
  .setFooter('HarberBot © todos direitos reservados', client.user.displayAvatarURL())
  await message.author.createDM();
  message.author.send(verau)
  var tazer = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 10000 * 50, max: 1});
  tazer.on('collect', r=> {
    let nome = r.content ||  r.attachments.first().url
    message.author.send(`Parabéns você se verificou! :white_check_mark: agora o seu nome no servidor é: ${nome}! <a:confete:828440875612635216>`)
    membro.setNickname(nome)
    membro.roles.add('828442257337221150')
    let logembed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle('Verificação feita! <a:sino:828440765985325118>')
    .setDescription(`Verificação feita por: ${message.author} \n Nick escolhido: ${nome}`)
    .setTimestamp(new Date())
    .setFooter('HarberBot © todos direitos reservados', message.author.displayAvatarURL({dynamic: true, format: "png"}))
    let logcanal = client.channels.cache.get('828763673757614112')
    logcanal.send(logembed)
  })
}