const Discord = require("discord-rpc")
const settings = require('./customization')
var setTitle = require('console-title');
var center = require('center-align');
var colors = require("colors")

const startTimestamp = new Date()

Discord.register(settings.id)

const rpc = new Discord.Client({transport: "ipc"});

  rpc.on("ready", () => {
    console.log("  ");
    console.log("  ");
    console.log("  ");
    
    console.clear()
    console.log("  ");
    console.log("  ");
    console.log("  ");
    console.log("  ");
    console.log("  ");
    console.log("  ");
    console.log(center(`
██████  ██ ████████  ██████ ██   ██ ██ 
██   ██ ██    ██    ██      ██   ██ ██ 
██████  ██    ██    ██      ███████ ██ 
██   ██ ██    ██    ██      ██   ██ ██ 
██   ██ ██    ██     ██████ ██   ██ ██      
    `.red, 118));
    
      setTitle(`RITCHI | RPC IS RUNNING`);
    
    console.log(center("$───────────────────────────────$".cyan, 130));
    console.log(center(`Title: ${settings.title}`.gray, 130));
    console.log(center(`Subtitle: ${settings.subtitle}`.gray, 130));
    console.log(center(`Fakegame: ${settings.fakegame}`.gray, 130));
    console.log(center("$───────────────────────────────$".cyan, 130));
    
    console.log("  ");
    console.log("  ");
    console.log("  ");

    if(fakegame === true){
    rpc.setActivity({
        details: settings.title,
        state: settings.subtitle,
        startTimestamp,
        largeImageKey: settings.lIK,
        smallImageKey: settings.sIK,
        largeImageText: settings.lIK_name,
        smallImageText: settings.sIK_name,
        instance: false
    })
} else {
    rpc.setActivity({
      details: settings.title,
      state: settings.subtitle,
      largeImageKey: settings.lIK,
      smallImageKey: settings.sIK,
      largeImageText: settings.lIK_name,
      smallImageText: settings.sIK_name,
      instance: false
    })
}
})

rpc.login({clientId: settings.id}).catch(console.error)
