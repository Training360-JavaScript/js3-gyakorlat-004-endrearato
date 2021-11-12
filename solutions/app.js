const checker = {
        rules: {
            ip: checkIP,
            mac: checkMac,
            visa: checkVisa
        },
        validate(text, type) {
           return text.match(this.rules[type]) ? true : false;
        }
    };

import checkVisa from "./visa.js";
import checkMac from "./mac.js";
import checkIP from "./ip.js";    