import { config } from "dotenv";
config();
import { readdirSync } from "fs";
import { join } from "path";
import { UpBeatClient } from "./struct/Client";
import { ActivityType } from "discord.js";
const client:UpBeatClient = new UpBeatClient({
    token: process.env.DISCORD_CLIENT_TOKEN!,
    prefix: process.env.DISCORD_CLIENT_PREFIX!,
});

// Command Handler
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.default.name, command.default);
    console.log(`${file} loaded`);
}

// Ready Event
client.once("ready", () => {
   console.log(`Logged in as ${client.user?.tag ?? ""}`);

   try {
       void client.user?.setPresence({
           status: "dnd",
           activity: {
               name: process.env.DISCORD_CLIENT_PRESENCE_MESSAGE,
               // To read from env, we have to type case here
               type: process.env.DISCORD_CLIENT_PRESENCE_TYPE as ActivityType,
           },
       });
   }
   catch (err) {
       console.error(err);
   }
});

// Client Login
client.login(client.config.token).catch(err => console.error(err));