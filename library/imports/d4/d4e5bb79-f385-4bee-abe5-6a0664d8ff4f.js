"use strict";
cc._RF.push(module, 'd4e5bt584VL7qvlagZk2P9P', 'ToolType');
// src/app/data/ToolType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolType = void 0;
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-11-03 19:01:10
 * @Last Modified by:   RannarYang
 * @Last Modified time: 2018-11-03 19:01:10
 */
var ToolType = /** @class */ (function () {
    function ToolType() {
    }
    ToolType.getSource = function (type) {
        return type + '_png';
    };
    ToolType.Axe = 'axe';
    ToolType.Pick = 'pick';
    return ToolType;
}());
exports.ToolType = ToolType;

cc._RF.pop();