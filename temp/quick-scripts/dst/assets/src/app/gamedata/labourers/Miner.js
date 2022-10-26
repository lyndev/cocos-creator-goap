
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/Miner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a62dN85WNPJrKPUHUnLo0i', 'Miner');
// src/app/gamedata/labourers/Miner.ts

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
exports.Miner = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var DropOffOreAction_1 = require("../actions/DropOffOreAction");
var MineOreAction_1 = require("../actions/MineOreAction");
var PickUpToolAction_1 = require("../actions/PickUpToolAction");
var Labourer_1 = require("./Labourer");
/*
 * @Description: 矿工
 * @Author: Rannar.Yang
 * @Date: 2018-09-05 20:40:44
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 18:41:37
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Miner = /** @class */ (function (_super) {
    __extends(Miner, _super);
    function Miner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //public labourerType = LabourerType.Miner;
    Miner.prototype.initAvaliableActions = function () {
        this.toInitAvaliableActions([MineOreAction_1.MineOreAction, PickUpToolAction_1.PickUpToolAction, DropOffOreAction_1.DropOffOreAction]);
    };
    /**
     * Our only goal will ever be to mine ore.
     * The MineOreAction will be able to fulfill this goal.
     */
    Miner.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set(ActionStatus_1.ActionStatus.CollectOre, true);
        return goal;
    };
    Miner.prototype.updateBackPack = function () {
        console.log("矿石：" + this.backpack.numOre);
    };
    Miner = __decorate([
        ccclass
    ], Miner);
    return Miner;
}(Labourer_1.Labourer));
exports.Miner = Miner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXE1pbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsZ0VBQStEO0FBQy9ELDBEQUF5RDtBQUN6RCxnRUFBK0Q7QUFDL0QsdUNBQXNDO0FBRXRDOzs7Ozs7R0FNRztBQUNHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTJCLHlCQUFRO0lBQW5DOztJQWtCQSxDQUFDO0lBakJBLDJDQUEyQztJQUNqQyxvQ0FBb0IsR0FBOUI7UUFDQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyw2QkFBYSxFQUFFLG1DQUFnQixFQUFFLG1DQUFnQixDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksK0JBQWUsR0FBdEI7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLDhCQUFjLEdBQXJCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBakJXLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0FrQmpCO0lBQUQsWUFBQztDQWxCRCxBQWtCQyxDQWxCMEIsbUJBQVEsR0FrQmxDO0FBbEJZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IERyb3BPZmZPcmVBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9Ecm9wT2ZmT3JlQWN0aW9uXCI7XHJcbmltcG9ydCB7IE1pbmVPcmVBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9NaW5lT3JlQWN0aW9uXCI7XHJcbmltcG9ydCB7IFBpY2tVcFRvb2xBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9QaWNrVXBUb29sQWN0aW9uXCI7XHJcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4vTGFib3VyZXJcIjtcclxuXHJcbi8qXHJcbiAqIEBEZXNjcmlwdGlvbjog55+/5belXHJcbiAqIEBBdXRob3I6IFJhbm5hci5ZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0wOS0wNSAyMDo0MDo0NCBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wNCAxODo0MTozN1xyXG4gKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIE1pbmVyIGV4dGVuZHMgTGFib3VyZXIge1xyXG5cdC8vcHVibGljIGxhYm91cmVyVHlwZSA9IExhYm91cmVyVHlwZS5NaW5lcjtcclxuXHRwcm90ZWN0ZWQgaW5pdEF2YWxpYWJsZUFjdGlvbnMoKSB7XHJcblx0XHR0aGlzLnRvSW5pdEF2YWxpYWJsZUFjdGlvbnMoW01pbmVPcmVBY3Rpb24sIFBpY2tVcFRvb2xBY3Rpb24sIERyb3BPZmZPcmVBY3Rpb25dKTtcclxuXHR9XHJcblx0LyoqXHJcblx0ICogT3VyIG9ubHkgZ29hbCB3aWxsIGV2ZXIgYmUgdG8gbWluZSBvcmUuXHJcblx0ICogVGhlIE1pbmVPcmVBY3Rpb24gd2lsbCBiZSBhYmxlIHRvIGZ1bGZpbGwgdGhpcyBnb2FsLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XHJcblx0XHRsZXQgZ29hbCA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KCk7XHJcblx0XHRnb2FsLnNldChBY3Rpb25TdGF0dXMuQ29sbGVjdE9yZSwgdHJ1ZSk7XHJcblx0XHRyZXR1cm4gZ29hbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB1cGRhdGVCYWNrUGFjaygpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi55+/55+z77yaXCIgKyB0aGlzLmJhY2twYWNrLm51bU9yZSlcclxuXHR9XHJcbn0iXX0=