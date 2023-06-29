
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/GoodsShelf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9Hb29kc1NoZWxmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBeUQ7QUFFekQ7SUFBQTtJQUlBLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSwwQkFBTztBQUtkLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXdDLDhCQUFXO0lBQW5EO1FBQUEscUVBZ0NDO1FBOUJHLGNBQVEsR0FBVyxDQUFDLENBQUE7O0lBOEJ4QixDQUFDO0lBN0JhLDJCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFBO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUE7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFTSx3QkFBRyxHQUFWLFVBQVcsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFBO0lBQ3ZDLENBQUM7SUFFTSx5QkFBSSxHQUFYLFVBQVksS0FBSztRQUNiLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUE7U0FDL0I7SUFDTCxDQUFDO0lBRU0sd0JBQUcsR0FBVixVQUFXLEtBQUs7UUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUE7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQy9FLENBQUM7SUFFUywyQkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFBO1FBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNkO0lBQ0wsQ0FBQztJQS9CZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQWdDOUI7SUFBRCxpQkFBQztDQWhDRCxBQWdDQyxDQWhDdUMseUJBQVcsR0FnQ2xEO2tCQWhDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiXG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0IHtcbiAgICBjZmdJZDogbnVtYmVyIHwgc3RyaW5nXG4gICAgYW1vdW50OiBudW1iZXJcbiAgICBtYXhBbW91bnQ6IG51bWJlclxufVxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb29kc1NoZWxmIGV4dGVuZHMgVkdhbWVPYmplY3Qge1xuICAgIHByb2R1Y3Q6IFByb2R1Y3RcbiAgICBpbnRlcnZhbDogbnVtYmVyID0gM1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJvZHVjdCA9IG5ldyBQcm9kdWN0KClcbiAgICAgICAgdGhpcy5wcm9kdWN0LmFtb3VudCA9IDEwXG4gICAgICAgIHRoaXMucHJvZHVjdC5tYXhBbW91bnQgPSAxMFxuICAgICAgICB0aGlzLnByb2R1Y3QuY2ZnSWQgPSAxXG4gICAgfVxuXG4gICAgcHVibGljIGhhcyhjb3VudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0LmFtb3VudCA+PSBjb3VudFxuICAgIH1cblxuICAgIHB1YmxpYyBjb3N0KGNvdW50KSB7XG4gICAgICAgIGlmICh0aGlzLmhhcyhjb3VudCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdC5hbW91bnQgLT0gY291bnRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGQoY291bnQpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0LmFtb3VudCArPSBjb3VudFxuICAgICAgICB0aGlzLnByb2R1Y3QuYW1vdW50ID0gTWF0aC5taW4odGhpcy5wcm9kdWN0LmFtb3VudCwgdGhpcy5wcm9kdWN0Lm1heEFtb3VudClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCAtPSBkdFxuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gM1xuICAgICAgICAgICAgdGhpcy5hZGQoMSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==