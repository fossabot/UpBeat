import { config } from "dotenv";
config();
import { UpBeatClient } from "./struct/Client";
const client:UpBeatClient = new UpBeatClient({
    token: process.env.DISCORD_CLIENT_TOKEN!,
    prefix: process.env.DISCORD_CLIENT_PREFIX!,
});

// Client Login
client.login(client.config.token).catch(err => console.error(err));