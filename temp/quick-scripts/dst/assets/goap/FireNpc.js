
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcRmlyZU5wYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1REFBc0Q7QUFDdEQsbUNBQThCO0FBQzlCLHVEQUFzRDtBQUN0RCxpREFBZ0Q7QUFDaEQsNkRBQTREO0FBQzVELG1EQUFrRDtBQUNsRCxtREFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBcUMsMkJBQU07SUFDdkM7UUFBQSxZQUNJLGlCQUFPLFNBU1Y7UUFSRyxLQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDeEIsbUNBQWdCO1lBQ2QsK0JBQWM7WUFDZCw2QkFBYTtZQUNiLHlDQUFtQjtZQUNuQiwrQkFBYztTQUNuQixDQUFDLENBQUE7UUFDRixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7O0lBQ2YsQ0FBQztJQUVNLGlDQUFlLEdBQXRCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBckJnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBc0IzQjtJQUFELGNBQUM7Q0F0QkQsQUFzQkMsQ0F0Qm9DLGdCQUFNLEdBc0IxQztrQkF0Qm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSAnLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb24nO1xyXG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSAnLi9BY3Rpb25EYXRhU3RhdHVzJztcclxuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XHJcbmltcG9ydCB7IEdvdG9Ub2lsZXRBY3Rpb24gfSBmcm9tICcuL0dvdG9Ub2lsZXRBY3Rpb24nO1xyXG5pbXBvcnQgeyBHb3RvRWF0QWN0aW9uIH0gZnJvbSAnLi9Hb3RvRWF0QWN0aW9uJztcclxuaW1wb3J0IHsgR290b0VxdWlwbWVudEFjdGlvbiB9IGZyb20gJy4vR290b0VxdWlwbWVudEFjdGlvbic7XHJcbmltcG9ydCB7IEdvdG9GaXJlQWN0aW9uIH0gZnJvbSAnLi9Hb3RvRmlyZUFjdGlvbic7XHJcbmltcG9ydCB7IEdvdFNsZWVwQWN0aW9uIH0gZnJvbSAnLi9Hb3RTbGVlcEFjdGlvbic7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXJlTnBjIGV4dGVuZHMgRW50aXR5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnRvSW5pdEF2YWxpYWJsZUFjdGlvbnMoW1xyXG4gICAgICAgICAgICBHb3RvVG9pbGV0QWN0aW9uXHJcbiAgICAgICAgICAgICwgR290U2xlZXBBY3Rpb25cclxuICAgICAgICAgICAgLCBHb3RvRWF0QWN0aW9uXHJcbiAgICAgICAgICAgICwgR290b0VxdWlwbWVudEFjdGlvblxyXG4gICAgICAgICAgICAsIEdvdG9GaXJlQWN0aW9uXHJcbiAgICAgICAgXSlcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XHJcbiAgICAgICAgbGV0IGdvYWwgPSBuZXcgTWFwPHN0cmluZywgT2JqZWN0PigpO1xyXG4gICAgICAgIGdvYWwuc2V0KEFjdGlvbkRhdGFTdGF0dXMub3V0RmlyZSwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGdvYWw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lcihkdClcclxuICAgIH1cclxufVxyXG4iXX0=