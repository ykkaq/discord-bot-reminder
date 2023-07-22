import { sender } from "./sender.js";
import { receiver} from "./receiver.js";

declare const global: {
      [x: string]: unknown;
};

global.sender = sender;
global.receiver = receiver;
