const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1099642415754776628')
        .setType('PLAYING')
        .setURL('https://www.youtube.com/channel/UCYvGMEkXftp8u6El8HyVayw')
        .setState('with Medal.tv')
        .setName('Medal')
        .setDetails('Recently clipped NoxPlayer')
        .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1176952548545003660/1203433173934022656/medal-with-bg.png?ex=65d1137b&is=65be9e7b&hm=9afaf2bf5f5ed475924b07e5fc2a1cdb92759392c6147bd0af8b281f944b6ac7&')
        .setAssetsLargeText('Apgr.')
        
        .addButton('Follow on Medal', 'https://medal.tv/u/anonymousplaysgr?ref=discordrpc')
        .addButton('Download Medal', 'https://medal.tv/?ref=discordrpc');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

client.login(process.env.TOKEN);












