import { doSend } from "./sender";
import { doReceive } from "./receiver";

declare const global: {
    [x: string]: unknown;
};

global.doSend = doSend;
global.doReceive = doReceive;
