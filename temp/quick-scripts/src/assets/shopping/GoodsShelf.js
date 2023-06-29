"use strict";
cc._RF.push(module, '0cfab0dpmdNPblRhGMciB8W', 'GoodsShelf');
// shopping/GoodsShelf.ts

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
exports.Product = void 0;
var VGameObject_1 = require("../src/app/base/VGameObject");
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GoodsShelf = /** @class */ (function (_super) {
    __extends(GoodsShelf, _super);
    function GoodsShelf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.interval = 3;
        return _this;
    }
    GoodsShelf.prototype.onLoad = function () {
        this.product = new Product();
        this.product.amount = 10;
        this.product.maxAmount = 10;
        this.product.cfgId = 1;
    };
    GoodsShelf.prototype.has = function (count) {
        return this.product.amount >= count;
    };
    GoodsShelf.prototype.cost = function (count) {
        if (this.has(count)) {
            this.product.amount -= count;
        }
    };
    GoodsShelf.prototype.add = function (count) {
        this.product.amount += count;
        this.product.amount = Math.min(this.product.amount, this.product.maxAmount);
    };
    GoodsShelf.prototype.update = function (dt) {
        this.interval -= dt;
        if (this.interval <= 0) {
            this.interval = 3;
            this.add(1);
        }
    };
    GoodsShelf = __decorate([
        ccclass
    ], GoodsShelf);
    return GoodsShelf;
}(VGameObject_1.VGameObject));
exports.default = GoodsShelf;

cc._RF.pop();