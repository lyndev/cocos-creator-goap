
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
        this.init();
        this.setGoap(goap);
        var actions = goap.getAvaliableActions();
        for (var index = 0; index < actions.length; index++) {
            var element = actions[index];
            this.addAction(element);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcRmlyZU5wYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsdURBQXNEO0FBQ3RELGlEQUFnRDtBQUNoRCw2REFBNEQ7QUFDNUQsbURBQWtEO0FBQ2xELG1EQUFrRDtBQUNsRCwwREFBeUQ7QUFDekQscURBQWdEO0FBRTFDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXFDLDJCQUFTO0lBQTlDOztJQThCQSxDQUFDO0lBN0JHLHdCQUFNLEdBQU47UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLHNCQUFZLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUM7WUFDdEIsbUNBQWdCO1lBQ2QsK0JBQWM7WUFDZCw2QkFBYTtZQUNiLHlDQUFtQjtZQUNuQiwrQkFBYztTQUNuQixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO1FBQ3hDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2pELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzFCO0lBRUwsQ0FBQztJQUdNLGlDQUFlLEdBQXRCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsaUJBQU0sTUFBTSxZQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3BCLENBQUM7SUE3QmdCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0E4QjNCO0lBQUQsY0FBQztDQTlCRCxBQThCQyxDQTlCb0MscUJBQVMsR0E4QjdDO2tCQTlCb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tICcuL0FjdGlvbkRhdGFTdGF0dXMnO1xyXG5pbXBvcnQgeyBHb3RvVG9pbGV0QWN0aW9uIH0gZnJvbSAnLi9Hb3RvVG9pbGV0QWN0aW9uJztcclxuaW1wb3J0IHsgR290b0VhdEFjdGlvbiB9IGZyb20gJy4vR290b0VhdEFjdGlvbic7XHJcbmltcG9ydCB7IEdvdG9FcXVpcG1lbnRBY3Rpb24gfSBmcm9tICcuL0dvdG9FcXVpcG1lbnRBY3Rpb24nO1xyXG5pbXBvcnQgeyBHb3RvRmlyZUFjdGlvbiB9IGZyb20gJy4vR290b0ZpcmVBY3Rpb24nO1xyXG5pbXBvcnQgeyBHb3RTbGVlcEFjdGlvbiB9IGZyb20gJy4vR290U2xlZXBBY3Rpb24nO1xyXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tICcuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFnZW50JztcclxuaW1wb3J0IEdvYXBPdXRGaXJlMiBmcm9tICcuL2dvYXBzL0dvYXBPdXRGaXJlMic7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXJlTnBjIGV4dGVuZHMgR29hcEFnZW50IHtcclxuICAgIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZ29hcCA9IG5ldyBHb2FwT3V0RmlyZTIoKVxyXG4gICAgICAgIGdvYXAuaW5pdEF2YWxpYWJsZUFjdGlvbnMoW1xyXG4gICAgICAgICAgICBHb3RvVG9pbGV0QWN0aW9uXHJcbiAgICAgICAgICAgICwgR290U2xlZXBBY3Rpb25cclxuICAgICAgICAgICAgLCBHb3RvRWF0QWN0aW9uXHJcbiAgICAgICAgICAgICwgR290b0VxdWlwbWVudEFjdGlvblxyXG4gICAgICAgICAgICAsIEdvdG9GaXJlQWN0aW9uXHJcbiAgICAgICAgXSlcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgICAgIHRoaXMuc2V0R29hcChnb2FwKVxyXG4gICAgICAgIGxldCBhY3Rpb25zID0gZ29hcC5nZXRBdmFsaWFibGVBY3Rpb25zKClcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYWN0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFjdGlvbnNbaW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLmFkZEFjdGlvbihlbGVtZW50KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XHJcbiAgICAgICAgbGV0IGdvYWwgPSBuZXcgTWFwPHN0cmluZywgT2JqZWN0PigpO1xyXG4gICAgICAgIGdvYWwuc2V0KEFjdGlvbkRhdGFTdGF0dXMub3V0RmlyZSwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGdvYWw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGR0KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==