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
        setTitle(`github.com/jecta/ritchi`);
        
                rpc.setActivity({
                        details: title
                        , state: subtitle
                        , largeImageKey: settings.lIK
                        , smallImageKey: settings.sIK
                        , largeImageText: settings.lIK_name
                        , smallImageText: settings.sIK_name
                        , instance: false
                , buttons: [
                    { label: button1, url: button1l },
                    { label: button2, url: button2l }
                ]
            })
            console.log(color.white('[') + color.cyan(' RITCHI ') + color.white(']') + color.gray(' You have successfully been') + color.white(' logged in'))
            console.log(color.white('[') + color.cyan(' RITCHI ') + color.white(']') + color.gray(' Ritchi by') + color.white(' Jecta'))
            console.log(color.white('[') + color.cyan(' RITCHI ') + color.white(']') + color.gray(' For questions or updates:') + color.white(' https://github.com/Jecta'));
        })
 
async function Information() {
        console.clear();
        console.log(color.white('[') + color.cyan(' RITCHI ') + color.white(']') + color.gray(' Ritchi by') + color.white(' Jecta'))
        console.log(color.white('[') + color.cyan(' RITCHI ') + color.white(']') + color.gray(' For questions or updates:') + color.white(' https://github.com/Jecta'));
        
	question(color.white('\n[') + color.yellow(' > ') + color.white(']') + color.gray(' Write your title which you want to display: ')).then(async Results => {
		await Results
		title = Results.toString().toLowerCase()
		question(color.white('[') + color.yellow(' > ') + color.white(']') + color.gray(' Write your subtitle which you want to display: ')).then(async Results2 => {
			await Results2
			subtitle = Results2.toString().toLowerCase()
            question(color.white('\n[') + color.yellow(' > ') + color.white(']') + color.gray(' Write your button(1) name which you want to display: ')).then(async Results3 => {
                await Results3
                button1 = Results3.toString().toLowerCase()
                question(color.white('[') + color.yellow(' > ') + color.white(']') + color.gray(' Write your button(1) link which you want to display: ')).then(async Results4 => {
                    await Results4
                    button1l = Results4.toString().toLowerCase()
                    question(color.white('\n[') + color.yellow(' > ') + color.white(']') + color.gray(' Write your button(2) name which you want to display: ')).then(async Results5 => {
                        await Results5
                        button2 = Results5.toString().toLowerCase()
                        question(color.white('[') + color.yellow(' > ') + color.white(']') + color.gray(' Write your button(2) link which you want to display: ')).then(async Results6 => {
                            await Results6
                            button2l = Results6.toString().toLowerCase()
			
			if(title.length >= 100){
				console.log(color.white('\n[') + color.red(' ERR ') + color.white(']') + color.gray(" Title is longer than 100 characters! Try again!"));
				setTimeout((function() {
					return process.exit(22);
				}), 100);
			} else if(subtitle.length >= 100){
				console.log(color.white('\n[') + color.red(' ERR ') + color.white(']') + color.gray(" Subtitle is longer than 100 characters! Try again!"));
				setTimeout((function() {
					return process.exit(22);
				}), 100);
			} else if(button1.length >= 100){
				console.log(color.white('\n[') + color.red(' ERR ') + color.white(']') + color.gray(" Button1 is longer than 100 characters! Try again!"));
				setTimeout((function() {
					return process.exit(22);
				}), 100);
            } else if(button2.length >= 100){
				console.log(color.white('\n[') + color.red(' ERR ') + color.white(']') + color.gray(" Button2 is longer than 100 characters! Try again!"));
				setTimeout((function() {
					return process.exit(22);
				}), 100);
            } else if(button1l.length >= 100){
				console.log(color.white('\n[') + color.red(' ERR ') + color.white(']') + color.gray(" Button1-link is longer than 100 characters! Try again!"));
				setTimeout((function() {
					return process.exit(22);
				}), 100);
            } else if(button2l.length >= 100){
				console.log(color.white('\n[') + color.red(' ERR ') + color.white(']') + color.gray(" Button2-link is longer than 100 characters! Try again!"));
				setTimeout((function() {
					return process.exit(22);
				}), 100);
            }
            
			
			rpc.login({ clientId: settings.id })
		})
	})
})
    })
})
    })
}
Information()

console.warn = () => {
    console.log(color.white('\n[') + color.red(' ERR ') + color.white(']') + color.gray(" An error has occurred, this probably has something to do with the buttons being left blank."));
    return console.log(color.white('\n[') + color.blue(' INFO ') + color.white(']') + color.gray(" Exit the node and retry by doing ctrl + c or closing the windows."));
};
console.error = () => {
    console.log(color.white('\n[') + color.red(' ERR ') + color.white(']') + color.gray(" An error has occurred, this probably has something to do with the buttons being left blank."));
    return console.log(color.white('\n[') + color.blue(' INFO ') + color.white(']') + color.gray(" Exit the node and retry by doing ctrl + c or closing the windows."));
};
process.on('uncaughtException', function (err) {
    console.log(color.white('\n[') + color.red(' ERR ') + color.white(']') + color.gray(" An error has occurred, this probably has something to do with the buttons being left blank."));
    return console.log(color.white('\n[') + color.blue(' INFO ') + color.white(']') + color.gray(" Exit the node and retry by doing ctrl + c or closing the windows."));
});