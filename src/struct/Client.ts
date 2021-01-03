import { Client, Collection } from "discord.js";

type UpBeatConfig = {
    token: string,
    prefix: string,
};

export class UpBeatClient extends Client {
    commands = new Collection<any, any>();
    config: UpBeatConfig;

    constructor(config: UpBeatConfig) {
        super({
            disableMentions: "everyone",
        });
        this.config = config;
    }
}