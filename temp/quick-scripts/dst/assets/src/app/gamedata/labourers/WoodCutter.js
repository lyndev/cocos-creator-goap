
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy9Xb29kQ3V0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsb0VBQW1FO0FBQ25FLDBFQUF5RTtBQUN6RSxnRUFBK0Q7QUFDL0QsdUNBQXNDO0FBRXRDOzs7Ozs7R0FNRztBQUNHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWdDLDhCQUFRO0lBQXhDOztJQWlCQSxDQUFDO0lBaEJVLHlDQUFvQixHQUE5QjtRQUNDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLHVDQUFrQixFQUFFLDZDQUFxQixFQUFFLG1DQUFnQixDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksb0NBQWUsR0FBdEI7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLG1DQUFjLEdBQXJCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBaEJXLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0FpQnRCO0lBQUQsaUJBQUM7Q0FqQkQsQUFpQkMsQ0FqQitCLG1CQUFRLEdBaUJ2QztBQWpCWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHsgQ2hvcEZpcmV3b29kQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvQ2hvcEZpcmV3b29kQWN0aW9uXCI7XG5pbXBvcnQgeyBEcm9wT2ZmRmlyZXdvb2RBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9Ecm9wT2ZmRmlyZXdvb2RBY3Rpb25cIjtcbmltcG9ydCB7IFBpY2tVcFRvb2xBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9QaWNrVXBUb29sQWN0aW9uXCI7XG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuL0xhYm91cmVyXCI7XG5cbi8qXG4gKiBARGVzY3JpcHRpb246IOS8kOacqOW3pVxuICogQEF1dGhvcjogUmFubmFyLllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNSAyMDo0MDo0NCBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTA0IDE4OjI4OjMwXG4gKi9cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFdvb2RDdXR0ZXIgZXh0ZW5kcyBMYWJvdXJlciB7XG5cdHByb3RlY3RlZCBpbml0QXZhbGlhYmxlQWN0aW9ucygpIHtcblx0XHR0aGlzLnRvSW5pdEF2YWxpYWJsZUFjdGlvbnMoW0Nob3BGaXJld29vZEFjdGlvbiwgRHJvcE9mZkZpcmV3b29kQWN0aW9uLCBQaWNrVXBUb29sQWN0aW9uXSk7XG5cdH1cblx0LyoqXG5cdCAqIE91ciBvbmx5IGdvYWwgd2lsbCBldmVyIGJlIHRvIGNob3AgbG9ncy5cblx0ICogVGhlIENob3BGaXJld29vZEFjdGlvbiB3aWxsIGJlIGFibGUgdG8gZnVsZmlsbCB0aGlzIGdvYWwuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuXHRcdGxldCBnb2FsID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcblx0XHRnb2FsLnNldChBY3Rpb25TdGF0dXMuQ29sbGVjdEZpcmV3b29kLCB0cnVlKTtcblx0XHRyZXR1cm4gZ29hbDtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGVCYWNrUGFjaygpIHtcblx0XHRjb25zb2xlLmxvZyhcIuacqOaftO+8mlwiICsgdGhpcy5iYWNrcGFjay5udW1GaXJld29vZClcblx0fVxufSJdfQ==