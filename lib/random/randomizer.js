"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleRandomizer = void 0;
// this func will return a random item from the list
function singleRandomizer(list) {
    return list[Math.floor(Math.random() * list.length)];
}
exports.singleRandomizer = singleRandomizer;
//# sourceMappingURL=randomizer.js.map