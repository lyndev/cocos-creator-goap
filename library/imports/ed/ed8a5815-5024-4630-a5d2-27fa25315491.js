"use strict";
cc._RF.push(module, 'ed8a5gVUCRGMKXSJ/olMVSR', 'FireNpc');
// goap/FireNpc.ts

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
var ActionDataStatus_1 = require("./ActionDataStatus");
var Entity_1 = require("./Entity");
var GotoToiletAction_1 = require("./GotoToiletAction");
var GotoEatAction_1 = require("./GotoEatAction");
var GotoEquipmentAction_1 = require("./GotoEquipmentAction");
var GotoFireAction_1 = require("./GotoFireAction");
var GotSleepAction_1 = require("./GotSleepAction");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FireNpc = /** @class */ (function (_super) {
    __extends(FireNpc, _super);
    function FireNpc() {
        var _this = _super.call(this) || this;
        _this.toInitAvaliableActions([
            GotoToiletAction_1.GotoToiletAction,
            GotSleepAction_1.GotSleepAction,
            GotoEatAction_1.GotoEatAction,
            GotoEquipmentAction_1.GotoEquipmentAction,
            GotoFireAction_1.GotoFireAction
        ]);
        _this.init();
        return _this;
    }
    FireNpc.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set(ActionDataStatus_1.ActionDataStatus.outFire, true);
        return goal;
    };
    FireNpc.prototype.update = function (dt) {
        this.updateTimer(dt);
    };
    FireNpc = __decorate([
        ccclass
    ], FireNpc);
    return FireNpc;
}(Entity_1.default));
exports.default = FireNpc;

cc._RF.pop();