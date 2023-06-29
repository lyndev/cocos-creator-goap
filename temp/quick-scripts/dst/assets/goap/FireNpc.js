
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0ZpcmVOcGMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3RELDBEQUF5RDtBQUN6RCxxREFBZ0Q7QUFFaEQsbUVBQThEO0FBQzlELCtEQUE4RDtBQUV4RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFxQywyQkFBUztJQUE5QztRQUFBLHFFQTZDQztRQTVDRyxXQUFLLEdBQXVCLElBQUksR0FBRyxFQUFpQixDQUFBOztJQTRDeEQsQ0FBQztJQTFDRyx3QkFBTSxHQUFOO1FBQUEsaUJBZUM7UUFkRyxJQUFJLElBQUksR0FBRyxJQUFJLHNCQUFZLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUE7UUFHL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSw2QkFBbUIsRUFBRSxDQUFBO1FBQ3JDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUVoQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtRQUMvQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFFTSw0QkFBVSxHQUFqQixVQUFrQixRQUFRO1FBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQzdCLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNsQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtZQUMzQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7WUFDdEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUE7WUFDeEMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ2pELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUMxQjtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFFTSxpQ0FBZSxHQUF0QjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLGlCQUFNLE1BQU0sWUFBQyxFQUFFLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBNUNnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBNkMzQjtJQUFELGNBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q29DLHFCQUFTLEdBNkM3QztrQkE3Q29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSAnLi9BY3Rpb25EYXRhU3RhdHVzJztcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gJy4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWdlbnQnO1xuaW1wb3J0IEdvYXBPdXRGaXJlMiBmcm9tICcuL2dvYXBzL0dvYXBPdXRGaXJlMic7XG5pbXBvcnQgeyBJR29hcCB9IGZyb20gJy4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcCc7XG5pbXBvcnQgR29hcE91dEZpcmVFeGlnZW5jZSBmcm9tICcuL2dvYXBzL0dvYXBPdXRGaXJlRXhpZ2VuY2UnO1xuaW1wb3J0IHsgU3RhdGVFbnVtIH0gZnJvbSAnLi4vc3JjL2FwcC9haS9mc20vc3RhdGUvU3RhdGVFbnVtJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXJlTnBjIGV4dGVuZHMgR29hcEFnZW50IHtcbiAgICBnb2FwczogTWFwPHN0cmluZywgSUdvYXA+ID0gbmV3IE1hcDxzdHJpbmcsIElHb2FwPigpXG5cbiAgICBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIGxldCBnb2FwID0gbmV3IEdvYXBPdXRGaXJlMigpXG4gICAgICAgIGdvYXAuaW5pdEF2YWxpYWJsZUFjdGlvbnModGhpcylcblxuXG4gICAgICAgIGxldCBnb2FwMiA9IG5ldyBHb2FwT3V0RmlyZUV4aWdlbmNlKClcbiAgICAgICAgZ29hcDIuaW5pdEF2YWxpYWJsZUFjdGlvbnModGhpcylcblxuICAgICAgICB0aGlzLmdvYXBzLnNldChcIm5vcm1hbF9vdXRfZmlyZVwiLCBnb2FwKVxuICAgICAgICB0aGlzLmdvYXBzLnNldChcIm5vcm1hbF9vdXRfZmlyZV9leGlnZW5jZVwiLCBnb2FwMilcbiAgICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgdGhpcy5jaGFuZ2VHb2FwKFwibm9ybWFsX291dF9maXJlXCIpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMpLmRlbGF5KDEpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VHb2FwKFwibm9ybWFsX291dF9maXJlX2V4aWdlbmNlXCIpXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlR29hcChnb2FwTmFtZSkge1xuICAgICAgICBsZXQgZ29hcCA9IHRoaXMuZ29hcHMuZ2V0KGdvYXBOYW1lKVxuICAgICAgICBjb25zb2xlLmxvZyhcIuWIh+aNouihjOWKqFwiLCBnb2FwTmFtZSlcbiAgICAgICAgaWYgKGdvYXApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0R29hcChnb2FwKVxuICAgICAgICAgICAgdGhpcy5jbGVhbkF2YWxhYmxlQWN0aW9ucygpXG4gICAgICAgICAgICB0aGlzLmNsZWFuQ3VyQWN0aW9ucygpXG4gICAgICAgICAgICBsZXQgYWN0aW9ucyA9IGdvYXAuZ2V0QXZhbGlhYmxlQWN0aW9ucygpXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYWN0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYWN0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBY3Rpb24oZWxlbWVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuICAgICAgICBsZXQgZ29hbCA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KCk7XG4gICAgICAgIGdvYWwuc2V0KEFjdGlvbkRhdGFTdGF0dXMub3V0RmlyZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBnb2FsO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBzdXBlci51cGRhdGUoZHQpXG4gICAgfVxufVxuIl19