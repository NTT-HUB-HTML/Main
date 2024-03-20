const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('Hello! How can I help you today?');
  } else if (msg.content === 'bye') {
    msg.reply('Goodbye! Have a great day!');
  } else if (msg.content === 'help') {
    msg.reply('I am here to assist you. Just let me know what you need help with.');
  } else {
    msg.reply('I'm sorry, I don't understand that command. Please try again.');
  }
});

client.login('MTA4OTU0NzQzMzk3OTE2Njg2Mw.GxWToC.1W2VG-x-GwbiGNHsHYKICkT-O5aeO5PejQs8J0');
