
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9Db250ZXh0U2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUM7QUFDckMsMkNBQXFDO0FBQ3JDLDJDQUFxQztBQUUvQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUczQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQW1CQztRQWpCRyxnQkFBVSxHQUFlLElBQUksQ0FBQTtRQUc3QixnQkFBVSxHQUFlLElBQUksQ0FBQTtRQUc3QixnQkFBVSxHQUFlLElBQUksQ0FBQTs7SUFXakMsQ0FBQztvQkFuQm9CLFdBQVc7SUFjbEIsNEJBQU0sR0FBaEI7UUFDSSxhQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUE7UUFDeEMsYUFBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ3hDLGFBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQTtJQUM1QyxDQUFDOztJQWhCRDtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO21EQUNRO0lBRzdCO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7bURBQ1E7SUFHN0I7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQzttREFDUTtJQVJaLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FtQi9CO0lBQUQsa0JBQUM7Q0FuQkQsQUFtQkMsQ0FuQndDLEVBQUUsQ0FBQyxTQUFTLEdBbUJwRDtrQkFuQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hlY2tzdGFuZCBmcm9tIFwiLi9DaGVja3N0YW5kXCJcbmltcG9ydCBHb29kc1NoZWxmIGZyb20gXCIuL0dvb2RzU2hlbGZcIlxuaW1wb3J0IExlYXZlUG9pbnQgZnJvbSBcIi4vTGVhdmVQb2ludFwiXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRleHRTaG9wIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoR29vZHNTaGVsZilcbiAgICBnb29kc1NoZWxmOiBHb29kc1NoZWxmID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KENoZWNrc3RhbmQpXG4gICAgY2hlY2tzdGFuZDogQ2hlY2tzdGFuZCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShMZWF2ZVBvaW50KVxuICAgIGxlYXZlUG9pbnQ6IExlYXZlUG9pbnQgPSBudWxsXG5cbiAgICBwdWJsaWMgc3RhdGljIGdvb2RzU2hlbGY6IEdvb2RzU2hlbGZcbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrc3RhbmQ6IENoZWNrc3RhbmRcbiAgICBwdWJsaWMgc3RhdGljIGxlYXZlUG9pbnQ6IExlYXZlUG9pbnRcblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIENvbnRleHRTaG9wLmdvb2RzU2hlbGYgPSB0aGlzLmdvb2RzU2hlbGZcbiAgICAgICAgQ29udGV4dFNob3AuY2hlY2tzdGFuZCA9IHRoaXMuY2hlY2tzdGFuZFxuICAgICAgICBDb250ZXh0U2hvcC5sZWF2ZVBvaW50ID0gdGhpcy5sZWF2ZVBvaW50XG4gICAgfVxufVxuIl19