"use strict";
cc._RF.push(module, '22965eRdA5GBLXCznvQkp9g', 'StoreA');
// goap/StoreA.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var VGameObject_1 = require("../src/app/base/VGameObject");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StoreA = /** @class */ (function (_super) {
    __extends(StoreA, _super);
    function StoreA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shopCount = 10;
        return _this;
    }
    StoreA.prototype.cost = function (v) {
        if (v === void 0) { v = 1; }
        this.shopCount -= v;
    };
    StoreA.prototype.isHaveGoods = function () {
        return this.shopCount > 0;
    };
    StoreA = __decorate([
        ccclass
    ], StoreA);
    return StoreA;
}(VGameObject_1.VGameObject));
exports.default = StoreA;

cc._RF.pop();