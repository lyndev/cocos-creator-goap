"use strict";
cc._RF.push(module, '5b9a3j9jclHTZlU+gduulXK', 'VMiner');
// src/app/gamedata/labourers/vlabourers/VMiner.ts

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
exports.VMiner = void 0;
var VLabourer_1 = require("./VLabourer");
/**
 * 矿工
 */
var VMiner = /** @class */ (function (_super) {
    __extends(VMiner, _super);
    function VMiner() {
        return _super.call(this) || this;
    }
    return VMiner;
}(VLabourer_1.VLabourer));
exports.VMiner = VMiner;

cc._RF.pop();