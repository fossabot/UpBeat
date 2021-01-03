import { UpBeatClient } from "../struct/Client";
import { Message } from "discord.js";

export default {
    name: "ping",
    description: "Get bot & api latency",
    async execute(client:UpBeatClient, message:Message) {
        const msg = await message.channel.send("Pinging... 🏓");
        await msg.edit(`**Pong!** 🏓\nBot Latency: ${msg.createdTimestamp - message.createdTimestamp}ms \nGateway Latency: ${client.ws.ping}ms`);
    }
}