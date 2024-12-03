const { Client } = require('discord.js-selfbot-v13');
const { joinVoiceChannel, VoiceConnectionStatus } = require('@discordjs/voice');
const { token,id_channel,id_guild } = require('./config.json');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
  try {
    const channel = await client.channels.fetch(id_channel);
    const connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: id_guild,
      adapterCreator: channel.guild.voiceAdapterCreator,
      selfDeaf: true,
      selfMute: true
    });

    connection.on(VoiceConnectionStatus.Ready, () => {
      console.log('Connected to voice channel!');
    });
  } catch (error) {
    console.error('Failed to join voice channel:', error);
  }
})

client.login(token);