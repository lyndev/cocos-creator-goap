"use strict";
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