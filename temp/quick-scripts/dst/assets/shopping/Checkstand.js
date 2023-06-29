
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/Checkstand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '039b5GmIS9Iu4vB+2I1hx0n', 'Checkstand');
// shopping/Checkstand.ts

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
var Checkstand = /** @class */ (function (_super) {
    __extends(Checkstand, _super);
    function Checkstand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gold = 0;
        return _this;
    }
    Checkstand.prototype.onLoad = function () { };
    Checkstand.prototype.pay = function (prod) {
        if (!prod) {
            return;
        }
        this.gold += prod.amount * 10;
        prod.amount = 0;
    };
    Checkstand = __decorate([
        ccclass
    ], Checkstand);
    return Checkstand;
}(VGameObject_1.VGameObject));
exports.default = Checkstand;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9DaGVja3N0YW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF5RDtBQUVuRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF3Qyw4QkFBVztJQUFuRDtRQUFBLHFFQVlDO1FBWEcsVUFBSSxHQUFXLENBQUMsQ0FBQTs7SUFXcEIsQ0FBQztJQVZhLDJCQUFNLEdBQWhCLGNBQTBCLENBQUM7SUFFcEIsd0JBQUcsR0FBVixVQUFXLElBQWE7UUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU07U0FDVDtRQUVELElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFDbkIsQ0FBQztJQVhnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBWTlCO0lBQUQsaUJBQUM7Q0FaRCxBQVlDLENBWnVDLHlCQUFXLEdBWWxEO2tCQVpvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0XCJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi9Hb29kc1NoZWxmXCJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tzdGFuZCBleHRlbmRzIFZHYW1lT2JqZWN0IHtcbiAgICBnb2xkOiBudW1iZXIgPSAwXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHt9XG5cbiAgICBwdWJsaWMgcGF5KHByb2Q6IFByb2R1Y3QpIHtcbiAgICAgICAgaWYgKCFwcm9kKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ29sZCArPSBwcm9kLmFtb3VudCAqIDEwXG4gICAgICAgIHByb2QuYW1vdW50ID0gMFxuICAgIH1cbn1cbiJdfQ==