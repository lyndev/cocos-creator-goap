
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy9NaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFELGdFQUErRDtBQUMvRCwwREFBeUQ7QUFDekQsZ0VBQStEO0FBQy9ELHVDQUFzQztBQUV0Qzs7Ozs7O0dBTUc7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEyQix5QkFBUTtJQUFuQzs7SUFrQkEsQ0FBQztJQWpCQSwyQ0FBMkM7SUFDakMsb0NBQW9CLEdBQTlCO1FBQ0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsNkJBQWEsRUFBRSxtQ0FBZ0IsRUFBRSxtQ0FBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUNEOzs7T0FHRztJQUNJLCtCQUFlLEdBQXRCO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTSw4QkFBYyxHQUFyQjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQWpCVyxLQUFLO1FBRGpCLE9BQU87T0FDSyxLQUFLLENBa0JqQjtJQUFELFlBQUM7Q0FsQkQsQUFrQkMsQ0FsQjBCLG1CQUFRLEdBa0JsQztBQWxCWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHsgRHJvcE9mZk9yZUFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL0Ryb3BPZmZPcmVBY3Rpb25cIjtcbmltcG9ydCB7IE1pbmVPcmVBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9NaW5lT3JlQWN0aW9uXCI7XG5pbXBvcnQgeyBQaWNrVXBUb29sQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvUGlja1VwVG9vbEFjdGlvblwiO1xuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi9MYWJvdXJlclwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiDnn7/lt6VcbiAqIEBBdXRob3I6IFJhbm5hci5ZYW5nIFxuICogQERhdGU6IDIwMTgtMDktMDUgMjA6NDA6NDQgXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wNCAxODo0MTozN1xuICovXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBNaW5lciBleHRlbmRzIExhYm91cmVyIHtcblx0Ly9wdWJsaWMgbGFib3VyZXJUeXBlID0gTGFib3VyZXJUeXBlLk1pbmVyO1xuXHRwcm90ZWN0ZWQgaW5pdEF2YWxpYWJsZUFjdGlvbnMoKSB7XG5cdFx0dGhpcy50b0luaXRBdmFsaWFibGVBY3Rpb25zKFtNaW5lT3JlQWN0aW9uLCBQaWNrVXBUb29sQWN0aW9uLCBEcm9wT2ZmT3JlQWN0aW9uXSk7XG5cdH1cblx0LyoqXG5cdCAqIE91ciBvbmx5IGdvYWwgd2lsbCBldmVyIGJlIHRvIG1pbmUgb3JlLlxuXHQgKiBUaGUgTWluZU9yZUFjdGlvbiB3aWxsIGJlIGFibGUgdG8gZnVsZmlsbCB0aGlzIGdvYWwuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuXHRcdGxldCBnb2FsID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcblx0XHRnb2FsLnNldChBY3Rpb25TdGF0dXMuQ29sbGVjdE9yZSwgdHJ1ZSk7XG5cdFx0cmV0dXJuIGdvYWw7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlQmFja1BhY2soKSB7XG5cdFx0Y29uc29sZS5sb2coXCLnn7/nn7PvvJpcIiArIHRoaXMuYmFja3BhY2subnVtT3JlKVxuXHR9XG59Il19