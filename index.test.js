const Discord = require('discord.js')
const BDFD = require('./index.js')

const client = new Discord.Client()

client.on('message', _ => {
  const message = BDFD.message(_)
  if (message.author.bot) return;

  // message.channel.send(message.code("<@$authorID> sent a message ($message) in channel <#$channelID>, which is in $guildID. (Message: $messageID)"))
  const args = message.content.split(/ +/g)
  if (args.shift() == "evaluate") {
    message.channel.send(message.code(args.join(' ')))
  }
})

client.login(process.env.TOKEN)