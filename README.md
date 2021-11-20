# BDFD2DJS
BDFD2DJS is an npm package that allows you to use Bot Designer for Discord's functions in normal `discord.js`.

The package exposes the following:

> BDFD#message()  
> BDFD#functions

The former can be called in your message event to set up your message object, while the latter shows you which functions you can use.

## BDFD#message()
Parameters: 
> message (type: Discord.Message)

```js
// client initalization above
const BDFD = require('bdfd2js')

// I recommend you do it like this so you don't overwrite the original message object
client.on('message', (_) => {
    const message = BDFD.message(_) // Return value is a new message object, read below
})
```

### BDFD#message() return value
The return value is the original message object, but with a new function: `Message#code`  
It will execute any BDFD code and replace anything that is in `BDFD#functions`.

```js
// client initalization above
const BDFD = require('bdfd2js')

client.on('message', (_) => {
    const message = BDFD.message(_)

    const args = message.content.split(/ +/g)
    const command = args.shift();

    if (command == "!hi") {
        message.channel.send(message.code("Hi <@$authorID>! 👋"))
    }
})
```

To read more on BDFD's functions, I recommend you read the function help in their app, which I have kindly linked here for [Google Play](https://play.google.com/store/apps/details?id=com.jakubtomana.discordbotdesinger&utm_source=main_page&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1) and for the [App Store](https://apps.apple.com/us/app/bot-designer-for-discord/id1495536477).