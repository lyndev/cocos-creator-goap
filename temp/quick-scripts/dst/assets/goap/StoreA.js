
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcU3RvcmVBLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUVwRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFvQywwQkFBVztJQUEvQztRQUFBLHFFQVNDO1FBUlUsZUFBUyxHQUFHLEVBQUUsQ0FBQTs7SUFRekIsQ0FBQztJQVBVLHFCQUFJLEdBQVgsVUFBWSxDQUFLO1FBQUwsa0JBQUEsRUFBQSxLQUFLO1FBQ2IsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUVNLDRCQUFXLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBUmdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FTMUI7SUFBRCxhQUFDO0NBVEQsQUFTQyxDQVRtQyx5QkFBVyxHQVM5QztrQkFUb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSAnLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0JztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlQSBleHRlbmRzIFZHYW1lT2JqZWN0IHtcclxuICAgIHB1YmxpYyBzaG9wQ291bnQgPSAxMFxyXG4gICAgcHVibGljIGNvc3QodiA9IDEpIHtcclxuICAgICAgICB0aGlzLnNob3BDb3VudCAtPSB2XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzSGF2ZUdvb2RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNob3BDb3VudCA+IDBcclxuICAgIH1cclxufVxyXG4iXX0=