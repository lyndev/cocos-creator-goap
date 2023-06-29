
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/StoreA.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL1N0b3JlQS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFFcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBb0MsMEJBQVc7SUFBL0M7UUFBQSxxRUFTQztRQVJVLGVBQVMsR0FBRyxFQUFFLENBQUE7O0lBUXpCLENBQUM7SUFQVSxxQkFBSSxHQUFYLFVBQVksQ0FBSztRQUFMLGtCQUFBLEVBQUEsS0FBSztRQUNiLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFFTSw0QkFBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQVJnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBUzFCO0lBQUQsYUFBQztDQVRELEFBU0MsQ0FUbUMseUJBQVcsR0FTOUM7a0JBVG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gJy4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdCc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmVBIGV4dGVuZHMgVkdhbWVPYmplY3Qge1xuICAgIHB1YmxpYyBzaG9wQ291bnQgPSAxMFxuICAgIHB1YmxpYyBjb3N0KHYgPSAxKSB7XG4gICAgICAgIHRoaXMuc2hvcENvdW50IC09IHZcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNIYXZlR29vZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3BDb3VudCA+IDBcbiAgICB9XG59XG4iXX0=