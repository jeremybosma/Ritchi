const Discord = require("discord-rpc")
const settings = require('./customization')
var setTitle = require('console-title');
var center = require('center-align');
var colors = require("colors")

const startTimestamp = new Date()

Discord.register(settings.id)

const rpc = new Discord.Client({
        transport: "ipc"
});

rpc.on("ready", () => {
        console.clear()
        console.log("  ");
        console.log("  ");
        console.log("  ");
        console.log("  ");
        console.log("  ");
        console.log("  ");
        console.log(center(`


    ██▓███   ██▀███   ▒█████   ▄▄▄██▀▀▀▓█████  ▄████▄  ▄▄▄█████▓    ██▀███   ██▓▄▄▄█████▓ ▄████▄   ██░ ██  ██▓
    ▓██░  ██▒▓██ ▒ ██▒▒██▒  ██▒   ▒██   ▓█   ▀ ▒██▀ ▀█  ▓  ██▒ ▓▒   ▓██ ▒ ██▒▓██▒▓  ██▒ ▓▒▒██▀ ▀█  ▓██░ ██▒▓██▒
    ▓██░ ██▓▒▓██ ░▄█ ▒▒██░  ██▒   ░██   ▒███   ▒▓█    ▄ ▒ ▓██░ ▒░   ▓██ ░▄█ ▒▒██▒▒ ▓██░ ▒░▒▓█    ▄ ▒██▀▀██░▒██▒
    ▒██▄█▓▒ ▒▒██▀▀█▄  ▒██   ██░▓██▄██▓  ▒▓█  ▄ ▒▓▓▄ ▄██▒░ ▓██▓ ░    ▒██▀▀█▄  ░██░░ ▓██▓ ░ ▒▓▓▄ ▄██▒░▓█ ░██ ░██░
    ▒██▒ ░  ░░██▓ ▒██▒░ ████▓▒░ ▓███▒   ░▒████▒▒ ▓███▀ ░  ▒██▒ ░    ░██▓ ▒██▒░██░  ▒██▒ ░ ▒ ▓███▀ ░░▓█▒░██▓░██░
    ▒▓▒░ ░  ░░ ▒▓ ░▒▓░░ ▒░▒░▒░  ▒▓▒▒░   ░░ ▒░ ░░ ░▒ ▒  ░  ▒ ░░      ░ ▒▓ ░▒▓░░▓    ▒ ░░   ░ ░▒ ▒  ░ ▒ ░░▒░▒░▓  
    ░▒ ░       ░▒ ░ ▒░  ░ ▒ ▒░  ▒ ░▒░    ░ ░  ░  ░  ▒       ░         ░▒ ░ ▒░ ▒ ░    ░      ░  ▒    ▒ ░▒░ ░ ▒ ░
    ░░         ░░   ░ ░ ░ ░ ▒   ░ ░ ░      ░   ░          ░           ░░   ░  ▒ ░  ░      ░         ░  ░░ ░ ▒ ░
                ░         ░ ░   ░   ░      ░  ░░ ░                     ░      ░           ░ ░       ░  ░  ░ ░  
                                               ░                                          ░                    
    
       
    `.red, 120));
        setTitle(`Project: Ritchi | リッチ`);
        console.log(center("$───────────────────────────────$".cyan, 136));
        console.log(center(`Id: ${settings.id}`.gray, 136));
        console.log(center(`Title: ${settings.title}`.gray, 136));
        console.log(center(`Subtitle: ${settings.subtitle}`.gray, 136));
        console.log(center(`lIK: ${settings.lIK}`.gray, 136));
        console.log(center(`lIK_Name: ${settings.lIK_name}`.gray, 136));
        console.log(center(`sIK: ${settings.sIK}`.gray, 136));
        console.log(center(`sIK_name: ${settings.sIK_name}`.gray, 136));
        console.log(center(`Fakegame: ${settings.fakegame}`.gray, 136));
        console.log(center("$───────────────────────────────$".cyan, 136));
        console.log(center("$リッチ Made by ! EC JΞCTA 伊根#7417$".red, 130));
        console.log("  ");
        console.log("  ");
        console.log("  ");
        
        if (settings.fakegame === true) {
                rpc.setActivity({
                        details: settings.title
                        , state: settings.subtitle
                        , startTimestamp
                        , largeImageKey: settings.lIK
                        , smallImageKey: settings.sIK
                        , largeImageText: settings.lIK_name
                        , smallImageText: settings.sIK_name
                        , partyId: settings.title
                        , partySize: 1
                        , partyMax: 1
                        , matchSecret: 'ri'
                        , joinSecret: 'tc'
                        , spectateSecret: 'hi'
                        , instance: false
                })
        } else {
                rpc.setActivity({
                        details: settings.title
                        , state: settings.subtitle
                        , largeImageKey: settings.lIK
                        , smallImageKey: settings.sIK
                        , largeImageText: settings.lIK_name
                        , smallImageText: settings.sIK_name
                        , instance: false
                })
        }
})

rpc.login({
                clientId: settings.id
        })
        .catch(console.error)
