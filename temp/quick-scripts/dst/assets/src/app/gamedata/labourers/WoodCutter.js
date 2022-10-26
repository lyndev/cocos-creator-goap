
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/WoodCutter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6137dB/EBRFTIM8zI55FtzA', 'WoodCutter');
// src/app/gamedata/labourers/WoodCutter.ts

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
exports.WoodCutter = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var ChopFirewoodAction_1 = require("../actions/ChopFirewoodAction");
var DropOffFirewoodAction_1 = require("../actions/DropOffFirewoodAction");
var PickUpToolAction_1 = require("../actions/PickUpToolAction");
var Labourer_1 = require("./Labourer");
/*
 * @Description: 伐木工
 * @Author: Rannar.Yang
 * @Date: 2018-09-05 20:40:44
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 18:28:30
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WoodCutter = /** @class */ (function (_super) {
    __extends(WoodCutter, _super);
    function WoodCutter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WoodCutter.prototype.initAvaliableActions = function () {
        this.toInitAvaliableActions([ChopFirewoodAction_1.ChopFirewoodAction, DropOffFirewoodAction_1.DropOffFirewoodAction, PickUpToolAction_1.PickUpToolAction]);
    };
    /**
     * Our only goal will ever be to chop logs.
     * The ChopFirewoodAction will be able to fulfill this goal.
     */
    WoodCutter.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set(ActionStatus_1.ActionStatus.CollectFirewood, true);
        return goal;
    };
    WoodCutter.prototype.updateBackPack = function () {
        console.log("木柴：" + this.backpack.numFirewood);
    };
    WoodCutter = __decorate([
        ccclass
    ], WoodCutter);
    return WoodCutter;
}(Labourer_1.Labourer));
exports.WoodCutter = WoodCutter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXFdvb2RDdXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUMxRCxvRUFBbUU7QUFDbkUsMEVBQXlFO0FBQ3pFLGdFQUErRDtBQUMvRCx1Q0FBc0M7QUFFdEM7Ozs7OztHQU1HO0FBQ0csSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBZ0MsOEJBQVE7SUFBeEM7O0lBaUJBLENBQUM7SUFoQlUseUNBQW9CLEdBQTlCO1FBQ0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsdUNBQWtCLEVBQUUsNkNBQXFCLEVBQUUsbUNBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFDRDs7O09BR0c7SUFDSSxvQ0FBZSxHQUF0QjtRQUNDLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU0sbUNBQWMsR0FBckI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFoQlcsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQWlCdEI7SUFBRCxpQkFBQztDQWpCRCxBQWlCQyxDQWpCK0IsbUJBQVEsR0FpQnZDO0FBakJZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IENob3BGaXJld29vZEFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL0Nob3BGaXJld29vZEFjdGlvblwiO1xyXG5pbXBvcnQgeyBEcm9wT2ZmRmlyZXdvb2RBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9Ecm9wT2ZmRmlyZXdvb2RBY3Rpb25cIjtcclxuaW1wb3J0IHsgUGlja1VwVG9vbEFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL1BpY2tVcFRvb2xBY3Rpb25cIjtcclxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi9MYWJvdXJlclwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiDkvJDmnKjlt6VcclxuICogQEF1dGhvcjogUmFubmFyLllhbmcgXHJcbiAqIEBEYXRlOiAyMDE4LTA5LTA1IDIwOjQwOjQ0IFxyXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTA0IDE4OjI4OjMwXHJcbiAqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgV29vZEN1dHRlciBleHRlbmRzIExhYm91cmVyIHtcclxuXHRwcm90ZWN0ZWQgaW5pdEF2YWxpYWJsZUFjdGlvbnMoKSB7XHJcblx0XHR0aGlzLnRvSW5pdEF2YWxpYWJsZUFjdGlvbnMoW0Nob3BGaXJld29vZEFjdGlvbiwgRHJvcE9mZkZpcmV3b29kQWN0aW9uLCBQaWNrVXBUb29sQWN0aW9uXSk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIE91ciBvbmx5IGdvYWwgd2lsbCBldmVyIGJlIHRvIGNob3AgbG9ncy5cclxuXHQgKiBUaGUgQ2hvcEZpcmV3b29kQWN0aW9uIHdpbGwgYmUgYWJsZSB0byBmdWxmaWxsIHRoaXMgZ29hbC5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xyXG5cdFx0bGV0IGdvYWwgPSBuZXcgTWFwPHN0cmluZywgT2JqZWN0PigpO1xyXG5cdFx0Z29hbC5zZXQoQWN0aW9uU3RhdHVzLkNvbGxlY3RGaXJld29vZCwgdHJ1ZSk7XHJcblx0XHRyZXR1cm4gZ29hbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB1cGRhdGVCYWNrUGFjaygpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5pyo5p+077yaXCIgKyB0aGlzLmJhY2twYWNrLm51bUZpcmV3b29kKVxyXG5cdH1cclxufSJdfQ==