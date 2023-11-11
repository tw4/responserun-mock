"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomUsername = void 0;
const username_1 = require("./data/username/username");
function randomUsername() {
    return username_1.username[Math.floor(Math.random() * username_1.username.length)];
}
exports.randomUsername = randomUsername;
//# sourceMappingURL=random.js.map