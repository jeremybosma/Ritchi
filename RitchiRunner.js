import { readFile } from 'fs/promises';
const config = JSON.parse(
    await readFile(
        new URL('./config.json', import.meta.url)
    )
);

import Discord from "discord-rpc";
import color from "chalk";

async function Ritchi() {

    let startTimestamp = new Date()

    Discord.register(config.id)

    let rpc = new Discord.Client({
        transport: "ipc"
    });

    rpc.on("ready",
        async () => {
            console.clear()

            console.log(color.magenta("\n" +
                " ██▀███   ██▓▄▄▄█████▓ ▄████▄   ██░ ██  ██▓\n" +
                "▓██ ▒ ██▒▓██▒▓  ██▒ ▓▒▒██▀ ▀█  ▓██░ ██▒▓██▒\n" +
                "▓██ ░▄█ ▒▒██▒▒ ▓██░ ▒░▒▓█    ▄ ▒██▀▀██░▒██▒\n" +
                "▒██▀▀█▄  ░██░░ ▓██▓ ░ ▒▓▓▄ ▄██▒░▓█ ░██ ░██░\n" +
                "░██▓ ▒██▒░██░  ▒██▒ ░ ▒ ▓███▀ ░░▓█▒░██▓░██░\n" +
                "░ ▒▓ ░▒▓░░▓    ▒ ░░   ░ ░▒ ▒  ░ ▒ ░░▒░▒░▓  \n" +
                "  ░▒ ░ ▒░ ▒ ░    ░      ░  ▒    ▒ ░▒░ ░ ▒ ░\n" +
                "  ░░   ░  ▒ ░  ░      ░         ░  ░░ ░ ▒ ░\n" +
                "   ░      ░           ░ ░       ░  ░  ░ ░  \n" +
                "                      ░                    \n"))

            await rpc.setActivity({
                details: config.title
                , state: config.subtitle
                , startTimestamp
                , largeImageKey: config.lIK
                , smallImageKey: config.sIK
                , largeImageText: config.lIK_name
                , smallImageText: config.sIK_name
                , instance: false
                , buttons: [
                    { label: config.button1, url: config.link1 },
                    { label: config.button2, url: config.link2 }
                ]
            })
        })

    rpc.login({ clientId: config.id })
}
Ritchi()