"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMaleFirstName = void 0;
const maleFirstName_1 = require("../data/locale/tr/maleFirstName");
const locale_1 = require("../enums/locale");
const randomizer_1 = require("./randomizer");
function createMaleFirstName(locale) {
    switch (locale) {
        case locale_1.Locale.tr:
            return (0, randomizer_1.singleRandomizer)(maleFirstName_1.maleFirstName);
        default:
            break;
    }
}
exports.createMaleFirstName = createMaleFirstName;
//# sourceMappingURL=firstname.js.map