const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel } = require('@discordjs/voice');
const { token,id_channel,id_guild } = require('./config.json');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  const channel = await client.channels.fetch(id_channel);
  joinVoiceChannel({
    channelId: channel.id,
    guildId: id_guild,
    adapterCreator: channel.guild.voiceAdapterCreator,
  });
})

client.login(token);