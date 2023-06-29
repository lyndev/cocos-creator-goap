"use strict";
cc._RF.push(module, '20744NAa29Glpqjazi0V1md', 'VWoodCutter');
// src/app/gamedata/labourers/vlabourers/VWoodCutter.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VWoodCutter = void 0;
var VLabourer_1 = require("./VLabourer");
/**
 * 伐木工
 */
var VWoodCutter = /** @class */ (function (_super) {
    __extends(VWoodCutter, _super);
    function VWoodCutter() {
        return _super.call(this) || this;
    }
    return VWoodCutter;
}(VLabourer_1.VLabourer));
exports.VWoodCutter = VWoodCutter;

cc._RF.pop();