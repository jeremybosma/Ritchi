const config = require('./customization.json')
const client = require('discord-rich-presence')(config.id);

client.updatePresence({
  state: `${config.title}`,
  details: `${config.subtitle}`,
  startTimestamp: Date.now(),
  endTimestamp: Date.now(),
  largeImageKey: `${config.lIK}`,
  smallImageKey: `${config.sIK}`,
  instance: true,
});
