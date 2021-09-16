"use strict";
cc._RF.push(module, 'f3724rOLWVA8ZBqyqopkrnw', 'TimeUtil');
// src/utils/TimeUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeUtil = /** @class */ (function () {
    function TimeUtil() {
    }
    TimeUtil.getTime = function () {
        return new Date().getTime() / 1000;
    };
    return TimeUtil;
}());
exports.default = TimeUtil;

cc._RF.pop();