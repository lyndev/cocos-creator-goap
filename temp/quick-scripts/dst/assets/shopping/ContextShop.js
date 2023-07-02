
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/ContextShop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
var BagPoint_1 = require("./BagPoint");
var Checkstand_1 = require("./Checkstand");
var GoodsShelf_1 = require("./GoodsShelf");
var LeavePoint_1 = require("./LeavePoint");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ContextShop = /** @class */ (function (_super) {
    __extends(ContextShop, _super);
    function ContextShop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.goodsShelf = null;
        _this.goodsShelf2 = null;
        _this.checkstand = null;
        _this.leavePoint = null;
        _this.bagPoint = null;
        return _this;
    }
    ContextShop_1 = ContextShop;
    ContextShop.prototype.onLoad = function () {
        ContextShop_1.goodsShelf = this.goodsShelf;
        ContextShop_1.goodsShelf2 = this.goodsShelf2;
        ContextShop_1.checkstand = this.checkstand;
        ContextShop_1.leavePoint = this.leavePoint;
        ContextShop_1.bagPoint = this.bagPoint;
    };
    var ContextShop_1;
    __decorate([
        property(GoodsShelf_1.default)
    ], ContextShop.prototype, "goodsShelf", void 0);
    __decorate([
        property(GoodsShelf_1.default)
    ], ContextShop.prototype, "goodsShelf2", void 0);
    __decorate([
        property(Checkstand_1.default)
    ], ContextShop.prototype, "checkstand", void 0);
    __decorate([
        property(LeavePoint_1.default)
    ], ContextShop.prototype, "leavePoint", void 0);
    __decorate([
        property(BagPoint_1.default)
    ], ContextShop.prototype, "bagPoint", void 0);
    ContextShop = ContextShop_1 = __decorate([
        ccclass
    ], ContextShop);
    return ContextShop;
}(cc.Component));
exports.default = ContextShop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9Db250ZXh0U2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBaUM7QUFDakMsMkNBQXFDO0FBQ3JDLDJDQUFxQztBQUNyQywyQ0FBcUM7QUFFL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFHM0M7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUE2QkM7UUEzQkcsZ0JBQVUsR0FBZSxJQUFJLENBQUE7UUFHN0IsaUJBQVcsR0FBZSxJQUFJLENBQUE7UUFHOUIsZ0JBQVUsR0FBZSxJQUFJLENBQUE7UUFHN0IsZ0JBQVUsR0FBZSxJQUFJLENBQUE7UUFHN0IsY0FBUSxHQUFhLElBQUksQ0FBQTs7SUFlN0IsQ0FBQztvQkE3Qm9CLFdBQVc7SUFzQmxCLDRCQUFNLEdBQWhCO1FBQ0ksYUFBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ3hDLGFBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQTtRQUMxQyxhQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUE7UUFDeEMsYUFBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ3hDLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUN4QyxDQUFDOztJQTFCRDtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO21EQUNRO0lBRzdCO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7b0RBQ1M7SUFHOUI7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQzttREFDUTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO21EQUNRO0lBRzdCO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7aURBQ007SUFkUixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBNkIvQjtJQUFELGtCQUFDO0NBN0JELEFBNkJDLENBN0J3QyxFQUFFLENBQUMsU0FBUyxHQTZCcEQ7a0JBN0JvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhZ1BvaW50IGZyb20gXCIuL0JhZ1BvaW50XCJcbmltcG9ydCBDaGVja3N0YW5kIGZyb20gXCIuL0NoZWNrc3RhbmRcIlxuaW1wb3J0IEdvb2RzU2hlbGYgZnJvbSBcIi4vR29vZHNTaGVsZlwiXG5pbXBvcnQgTGVhdmVQb2ludCBmcm9tIFwiLi9MZWF2ZVBvaW50XCJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dFNob3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShHb29kc1NoZWxmKVxuICAgIGdvb2RzU2hlbGY6IEdvb2RzU2hlbGYgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoR29vZHNTaGVsZilcbiAgICBnb29kc1NoZWxmMjogR29vZHNTaGVsZiA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShDaGVja3N0YW5kKVxuICAgIGNoZWNrc3RhbmQ6IENoZWNrc3RhbmQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoTGVhdmVQb2ludClcbiAgICBsZWF2ZVBvaW50OiBMZWF2ZVBvaW50ID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KEJhZ1BvaW50KVxuICAgIGJhZ1BvaW50OiBCYWdQb2ludCA9IG51bGxcblxuICAgIHB1YmxpYyBzdGF0aWMgZ29vZHNTaGVsZjogR29vZHNTaGVsZlxuICAgIHB1YmxpYyBzdGF0aWMgZ29vZHNTaGVsZjI6IEdvb2RzU2hlbGZcbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrc3RhbmQ6IENoZWNrc3RhbmRcbiAgICBwdWJsaWMgc3RhdGljIGxlYXZlUG9pbnQ6IExlYXZlUG9pbnRcbiAgICBwdWJsaWMgc3RhdGljIGJhZ1BvaW50OiBCYWdQb2ludFxuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgQ29udGV4dFNob3AuZ29vZHNTaGVsZiA9IHRoaXMuZ29vZHNTaGVsZlxuICAgICAgICBDb250ZXh0U2hvcC5nb29kc1NoZWxmMiA9IHRoaXMuZ29vZHNTaGVsZjJcbiAgICAgICAgQ29udGV4dFNob3AuY2hlY2tzdGFuZCA9IHRoaXMuY2hlY2tzdGFuZFxuICAgICAgICBDb250ZXh0U2hvcC5sZWF2ZVBvaW50ID0gdGhpcy5sZWF2ZVBvaW50XG4gICAgICAgIENvbnRleHRTaG9wLmJhZ1BvaW50ID0gdGhpcy5iYWdQb2ludFxuICAgIH1cbn1cbiJdfQ==