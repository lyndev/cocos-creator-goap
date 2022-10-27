
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/FireNpc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
var GotoToiletAction_1 = require("./GotoToiletAction");
var GotoEatAction_1 = require("./GotoEatAction");
var GotoEquipmentAction_1 = require("./GotoEquipmentAction");
var GotoFireAction_1 = require("./GotoFireAction");
var GotSleepAction_1 = require("./GotSleepAction");
var GoapAgent_1 = require("../src/app/ai/goap/GoapAgent");
var GoapOutFire2_1 = require("./goaps/GoapOutFire2");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FireNpc = /** @class */ (function (_super) {
    __extends(FireNpc, _super);
    function FireNpc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FireNpc.prototype.onLoad = function () {
        var goap = new GoapOutFire2_1.default();
        goap.initAvaliableActions([
            GotoToiletAction_1.GotoToiletAction,
            GotSleepAction_1.GotSleepAction,
            GotoEatAction_1.GotoEatAction,
            GotoEquipmentAction_1.GotoEquipmentAction,
            GotoFireAction_1.GotoFireAction
        ]);
        this.setGoap(goap);
        this.setCurrentActions(goap.getAvaliableActions());
        _super.prototype.onLoad.call(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcRmlyZU5wYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsdURBQXNEO0FBQ3RELGlEQUFnRDtBQUNoRCw2REFBNEQ7QUFDNUQsbURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCwwREFBeUQ7QUFDekQscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXFDLDJCQUFTO0lBQTlDOztJQXlCQSxDQUFDO0lBeEJHLHdCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLHNCQUFZLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDdEIsbUNBQWdCO1lBQ2QsK0JBQWM7WUFDZCw2QkFBYTtZQUNiLHlDQUFtQjtZQUNuQiwrQkFBYztTQUNuQixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFBO1FBQ2xELGlCQUFNLE1BQU0sV0FBRSxDQUFBO0lBQ2xCLENBQUM7SUFHTSxpQ0FBZSxHQUF0QjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLGlCQUFNLE1BQU0sWUFBQyxFQUFFLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBeEJnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBeUIzQjtJQUFELGNBQUM7Q0F6QkQsQUF5QkMsQ0F6Qm9DLHFCQUFTLEdBeUI3QztrQkF6Qm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSAnLi9BY3Rpb25EYXRhU3RhdHVzJztcclxuaW1wb3J0IHsgR290b1RvaWxldEFjdGlvbiB9IGZyb20gJy4vR290b1RvaWxldEFjdGlvbic7XHJcbmltcG9ydCB7IEdvdG9FYXRBY3Rpb24gfSBmcm9tICcuL0dvdG9FYXRBY3Rpb24nO1xyXG5pbXBvcnQgeyBHb3RvRXF1aXBtZW50QWN0aW9uIH0gZnJvbSAnLi9Hb3RvRXF1aXBtZW50QWN0aW9uJztcclxuaW1wb3J0IHsgR290b0ZpcmVBY3Rpb24gfSBmcm9tICcuL0dvdG9GaXJlQWN0aW9uJztcclxuaW1wb3J0IHsgR290U2xlZXBBY3Rpb24gfSBmcm9tICcuL0dvdFNsZWVwQWN0aW9uJztcclxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSAnLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudCc7XHJcbmltcG9ydCBHb2FwT3V0RmlyZTIgZnJvbSAnLi9nb2Fwcy9Hb2FwT3V0RmlyZTInO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyZU5wYyBleHRlbmRzIEdvYXBBZ2VudCB7XHJcbiAgICBvbkxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGdvYXAgPSBuZXcgR29hcE91dEZpcmUyKClcclxuICAgICAgICBnb2FwLmluaXRBdmFsaWFibGVBY3Rpb25zKFtcclxuICAgICAgICAgICAgR290b1RvaWxldEFjdGlvblxyXG4gICAgICAgICAgICAsIEdvdFNsZWVwQWN0aW9uXHJcbiAgICAgICAgICAgICwgR290b0VhdEFjdGlvblxyXG4gICAgICAgICAgICAsIEdvdG9FcXVpcG1lbnRBY3Rpb25cclxuICAgICAgICAgICAgLCBHb3RvRmlyZUFjdGlvblxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgdGhpcy5zZXRHb2FwKGdvYXApXHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50QWN0aW9ucyhnb2FwLmdldEF2YWxpYWJsZUFjdGlvbnMoKSlcclxuICAgICAgICBzdXBlci5vbkxvYWQoKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xyXG4gICAgICAgIGxldCBnb2FsID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcclxuICAgICAgICBnb2FsLnNldChBY3Rpb25EYXRhU3RhdHVzLm91dEZpcmUsIHRydWUpO1xyXG4gICAgICAgIHJldHVybiBnb2FsO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZShkdClcclxuICAgIH1cclxufVxyXG4iXX0=