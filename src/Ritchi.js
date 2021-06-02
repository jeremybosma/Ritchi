let Discord = require("discord-rpc");
let settings = require('./Customization');
let setTitle = require('console-title');
let readline = require("readline");
let color = require("chalk");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function question(string) {
    return new Promise((res) => {
        rl.question(string, (answer) => res(answer))
    })
  }
 
if(!settings.id){
    console.log(color.white('\n\n[') + color.red(' ERR ') + color.white(']') + color.gray(" Application ID is not set, please refer to customization.json"));
    setTimeout((function() {
        return process.exit(22);
    }), 100);}
if(!settings.lIK){
    console.log(color.white('\n\n[') + color.red(' ERR ') + color.white(']') + color.gray(" Large-Image-Name is not set, please refer to customization.json"));
    setTimeout((function() {
        return process.exit(22);
    }), 100);}
if(!settings.lIK_name){
    console.log(color.white('\n\n[') + color.red(' ERR ') + color.white(']') + color.gray(" Large-Image-Text is not set, please refer to customization.json"));
    setTimeout((function() {
        return process.exit(22);
    }), 100);}
if(!settings.sIK){
    console.log(color.white('\n\n[') + color.red(' ERR ') + color.white(']') + color.gray(" Small-Image-Name is not set, please refer to customization.json"));
    setTimeout((function() {
        return process.exit(22);
    }), 100);}
if(!settings.sIK_name){
    console.log(color.white('\n\n[') + color.red(' ERR ') + color.white(']') + color.gray(" Small-Image-Text is not set, please refer to customization.json"));
    setTimeout((function() {
        return process.exit(22);
    }), 100);}
 
let startTimestamp = new Date()
 
Discord.register(settings.id)
 
let rpc = new Discord.Client({
        transport: "ipc"
});
 
var title = undefined
var subtitle = undefined
 
rpc.on ("ready", async() => {
        console.clear()
        setTitle(`Ritchi Has Been Injected.`);
        
                rpc.setActivity({
                        details: title
                        , state: subtitle
                        , largeImageKey: settings.lIK
                        , smallImageKey: settings.sIK
                        , largeImageText: settings.lIK_name
                        , smallImageText: settings.sIK_name
                        , instance: false
                })
            console.log(color.white('[') + color.cyan(' RITCHI ') + color.white(']') + color.gray(' You have successfully been') + color.white(' logged in'))
            console.log(color.white('[') + color.cyan(' RITCHI ') + color.white(']') + color.gray(' RITCHI && PUREZENSU by') + color.white(' Jecta'))
            console.log(color.white('[') + color.cyan(' RITCHI ') + color.white(']') + color.gray(' For questions or updates:') + color.white(' https://github.com/Jecta07'));
        })
 
async function Information() {
        console.clear();
        console.log(color.white('[') + color.cyan(' RITCHI ') + color.white(']') + color.gray(' RITCHI && PUREZENSU by') + color.white(' Jecta'))
        console.log(color.white('[') + color.cyan(' RITCHI ') + color.white(']') + color.gray(' For questions or updates:') + color.white(' https://github.com/Jecta07'));
        
	question(color.white('\n[') + color.yellow(' > ') + color.white(']') + color.gray(' Write your title which you want to display: ')).then(async Results => {
		await Results
		title = Results.toString().toLowerCase()
		question(color.white('[') + color.yellow(' > ') + color.white(']') + color.gray(' Write your subtitle which you want to display: ')).then(async Results2 => {
			await Results2
			subtitle = Results2.toString().toLowerCase()
			
			if(title.length >= 100){
				console.log(color.white('\n[') + color.red(' E ') + color.white(']') + color.gray(" Title is longer than 100 characters! Try again!"));
				setTimeout((function() {
					return process.exit(22);
				}), 100);
			} else if(subtitle.length >= 100){
				console.log(color.white('\n[') + color.red(' E ') + color.white(']') + color.gray(" Title is longer than 100 characters! Try again!"));
				setTimeout((function() {
					return process.exit(22);
				}), 100);
			}
			
			rpc.login({ clientId: settings.id }).catch(Error => { console.error(Error) })
		})
	})
}
Information()
