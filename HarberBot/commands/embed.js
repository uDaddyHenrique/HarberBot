const Discord = require('discord.js');
exports.run = async(client, message, args) =>{
  if(!message.member.roles.cache.some(role => role.id === '828751511282647090'))
    return message.reply('sem perm')
  let verif = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle(':white_check_mark: Verificação Discord! <a:confete:828440875612635216>')
  .setDescription('Seja muito bem vindo ao nosso discord! <a:confete:828440875612635216> \nNosso discord tem um sistema de Verificação \n você terá que se verificar primeiro para usar os canais! \n\n Utilize: \`/verificar\` para se verificar!')
  .setFooter('HarberBot © todos direitos reservados', client.user.displayAvatarURL())
  message.delete()
  message.channel.send(verif)
}