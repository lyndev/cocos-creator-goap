"use strict";
cc._RF.push(module, 'bcdfdFXGOFA7IKPqcag3j0p', 'ContextShop');
// shopping/ContextShop.ts

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
var Checkstand_1 = require("./Checkstand");
var GoodsShelf_1 = require("./GoodsShelf");
var LeavePoint_1 = require("./LeavePoint");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ContextShop = /** @class */ (function (_super) {
    __extends(ContextShop, _super);
    function ContextShop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.goodsShelf = null;
        _this.checkstand = null;
        _this.leavePoint = null;
        return _this;
    }
    ContextShop_1 = ContextShop;
    ContextShop.prototype.onLoad = function () {
        ContextShop_1.goodsShelf = this.goodsShelf;
        ContextShop_1.checkstand = this.checkstand;
        ContextShop_1.leavePoint = this.leavePoint;
    };
    var ContextShop_1;
    __decorate([
        property(GoodsShelf_1.default)
    ], ContextShop.prototype, "goodsShelf", void 0);
    __decorate([
        property(Checkstand_1.default)
    ], ContextShop.prototype, "checkstand", void 0);
    __decorate([
        property(LeavePoint_1.default)
    ], ContextShop.prototype, "leavePoint", void 0);
    ContextShop = ContextShop_1 = __decorate([
        ccclass
    ], ContextShop);
    return ContextShop;
}(cc.Component));
exports.default = ContextShop;

cc._RF.pop();