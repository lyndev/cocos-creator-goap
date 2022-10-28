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
var GoapAgent_1 = require("../src/app/ai/goap/GoapAgent");
var GoapOutFire2_1 = require("./goaps/GoapOutFire2");
var GoapOutFireExigence_1 = require("./goaps/GoapOutFireExigence");
var StateEnum_1 = require("../src/app/ai/fsm/state/StateEnum");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FireNpc = /** @class */ (function (_super) {
    __extends(FireNpc, _super);
    function FireNpc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.goaps = new Map();
        return _this;
    }
    FireNpc.prototype.onLoad = function () {
        var _this = this;
        var goap = new GoapOutFire2_1.default();
        goap.initAvaliableActions(this);
        var goap2 = new GoapOutFireExigence_1.default();
        goap2.initAvaliableActions(this);
        this.goaps.set("normal_out_fire", goap);
        this.goaps.set("normal_out_fire_exigence", goap2);
        this.init();
        this.changeGoap("normal_out_fire");
        cc.tween(this).delay(1).call(function () {
            _this.changeGoap("normal_out_fire_exigence");
        }).start();
    };
    FireNpc.prototype.changeGoap = function (goapName) {
        var goap = this.goaps.get(goapName);
        console.log("切换行动", goapName);
        if (goap) {
            this.setGoap(goap);
            this.cleanAvalableActions();
            this.cleanCurActions();
            var actions = goap.getAvaliableActions();
            for (var index = 0; index < actions.length; index++) {
                var element = actions[index];
                this.addAction(element);
            }
            this.changeState(StateEnum_1.StateEnum.StateIdle);
        }
    };
    FireNpc.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set(ActionDataStatus_1.ActionDataStatus.outFire, true);
        return goal;
    };
    FireNpc.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    FireNpc = __decorate([
        ccclass
    ], FireNpc);
    return FireNpc;
}(GoapAgent_1.GoapAgent));
exports.default = FireNpc;

cc._RF.pop();