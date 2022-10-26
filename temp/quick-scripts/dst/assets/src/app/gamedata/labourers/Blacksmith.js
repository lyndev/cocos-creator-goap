
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/Blacksmith.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0192gnkYJImoGjdoQ87cxo', 'Blacksmith');
// src/app/gamedata/labourers/Blacksmith.ts

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
exports.Blacksmith = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var DropOffToolsAction_1 = require("../actions/DropOffToolsAction");
var ForgeToolAction_1 = require("../actions/ForgeToolAction");
var PickUpOreAction_1 = require("../actions/PickUpOreAction");
var Labourer_1 = require("./Labourer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Blacksmith = /** @class */ (function (_super) {
    __extends(Blacksmith, _super);
    function Blacksmith() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Blacksmith.prototype.initAvaliableActions = function () {
        this.toInitAvaliableActions([ForgeToolAction_1.ForgeToolAction, DropOffToolsAction_1.DropOffToolsAction, PickUpOreAction_1.PickUpOreAction]);
    };
    /**
     * Our only goal will ever be to make tools.
     * The ForgeTooldAction will be able to fulfill this goal.
     */
    Blacksmith.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set(ActionStatus_1.ActionStatus.CollectTools, true);
        return goal;
    };
    Blacksmith.prototype.updateBackPack = function () {
        console.log("矿石：" + this.backpack.numOre);
    };
    Blacksmith = __decorate([
        ccclass
    ], Blacksmith);
    return Blacksmith;
}(Labourer_1.Labourer));
exports.Blacksmith = Blacksmith;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXEJsYWNrc21pdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUMxRCxvRUFBbUU7QUFDbkUsOERBQTZEO0FBQzdELDhEQUE2RDtBQUM3RCx1Q0FBc0M7QUFDaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBZ0MsOEJBQVE7SUFBeEM7O0lBaUJBLENBQUM7SUFoQlUseUNBQW9CLEdBQTlCO1FBQ0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsaUNBQWUsRUFBRSx1Q0FBa0IsRUFBRSxpQ0FBZSxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksb0NBQWUsR0FBdEI7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLG1DQUFjLEdBQXJCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBaEJXLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0FpQnRCO0lBQUQsaUJBQUM7Q0FqQkQsQUFpQkMsQ0FqQitCLG1CQUFRLEdBaUJ2QztBQWpCWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xyXG5pbXBvcnQgeyBEcm9wT2ZmVG9vbHNBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9Ecm9wT2ZmVG9vbHNBY3Rpb25cIjtcclxuaW1wb3J0IHsgRm9yZ2VUb29sQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvRm9yZ2VUb29sQWN0aW9uXCI7XHJcbmltcG9ydCB7IFBpY2tVcE9yZUFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL1BpY2tVcE9yZUFjdGlvblwiO1xyXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuL0xhYm91cmVyXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBCbGFja3NtaXRoIGV4dGVuZHMgTGFib3VyZXIge1xyXG5cdHByb3RlY3RlZCBpbml0QXZhbGlhYmxlQWN0aW9ucygpIHtcclxuXHRcdHRoaXMudG9Jbml0QXZhbGlhYmxlQWN0aW9ucyhbRm9yZ2VUb29sQWN0aW9uLCBEcm9wT2ZmVG9vbHNBY3Rpb24sIFBpY2tVcE9yZUFjdGlvbl0pO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBPdXIgb25seSBnb2FsIHdpbGwgZXZlciBiZSB0byBtYWtlIHRvb2xzLlxyXG5cdCAqIFRoZSBGb3JnZVRvb2xkQWN0aW9uIHdpbGwgYmUgYWJsZSB0byBmdWxmaWxsIHRoaXMgZ29hbC5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xyXG5cdFx0bGV0IGdvYWwgPSBuZXcgTWFwPHN0cmluZywgT2JqZWN0PigpO1xyXG5cdFx0Z29hbC5zZXQoQWN0aW9uU3RhdHVzLkNvbGxlY3RUb29scywgdHJ1ZSk7XHJcblx0XHRyZXR1cm4gZ29hbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB1cGRhdGVCYWNrUGFjaygpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi55+/55+z77yaXCIgKyB0aGlzLmJhY2twYWNrLm51bU9yZSlcclxuXHR9XHJcbn0iXX0=