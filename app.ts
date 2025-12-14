import { message } from "./src/constants/message.js";
import type { StringBox } from "./src/models/stringBox.js";

const box:StringBox = {
    content:message,
}

console.log(box.content);