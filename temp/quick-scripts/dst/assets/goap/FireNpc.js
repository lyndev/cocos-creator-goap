
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcRmlyZU5wYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBc0Q7QUFDdEQsMERBQXlEO0FBQ3pELHFEQUFnRDtBQUVoRCxtRUFBOEQ7QUFDOUQsK0RBQThEO0FBRXhELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXFDLDJCQUFTO0lBQTlDO1FBQUEscUVBNkNDO1FBNUNHLFdBQUssR0FBdUIsSUFBSSxHQUFHLEVBQWlCLENBQUE7O0lBNEN4RCxDQUFDO0lBMUNHLHdCQUFNLEdBQU47UUFBQSxpQkFlQztRQWRHLElBQUksSUFBSSxHQUFHLElBQUksc0JBQVksRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUcvQixJQUFJLEtBQUssR0FBRyxJQUFJLDZCQUFtQixFQUFFLENBQUE7UUFDckMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFBO1FBRWhDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUNsQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekIsS0FBSSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO1FBQy9DLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2QsQ0FBQztJQUVNLDRCQUFVLEdBQWpCLFVBQWtCLFFBQVE7UUFDdEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDN0IsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2xCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1lBQzNCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtZQUN0QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtZQUN4QyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDakQsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBQzFCO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUVNLGlDQUFlLEdBQXRCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsaUJBQU0sTUFBTSxZQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3BCLENBQUM7SUE1Q2dCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0E2QzNCO0lBQUQsY0FBQztDQTdDRCxBQTZDQyxDQTdDb0MscUJBQVMsR0E2QzdDO2tCQTdDb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tICcuL0FjdGlvbkRhdGFTdGF0dXMnO1xyXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tICcuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFnZW50JztcclxuaW1wb3J0IEdvYXBPdXRGaXJlMiBmcm9tICcuL2dvYXBzL0dvYXBPdXRGaXJlMic7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSAnLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwJztcclxuaW1wb3J0IEdvYXBPdXRGaXJlRXhpZ2VuY2UgZnJvbSAnLi9nb2Fwcy9Hb2FwT3V0RmlyZUV4aWdlbmNlJztcclxuaW1wb3J0IHsgU3RhdGVFbnVtIH0gZnJvbSAnLi4vc3JjL2FwcC9haS9mc20vc3RhdGUvU3RhdGVFbnVtJztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpcmVOcGMgZXh0ZW5kcyBHb2FwQWdlbnQge1xyXG4gICAgZ29hcHM6IE1hcDxzdHJpbmcsIElHb2FwPiA9IG5ldyBNYXA8c3RyaW5nLCBJR29hcD4oKVxyXG5cclxuICAgIG9uTG9hZCgpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZ29hcCA9IG5ldyBHb2FwT3V0RmlyZTIoKVxyXG4gICAgICAgIGdvYXAuaW5pdEF2YWxpYWJsZUFjdGlvbnModGhpcylcclxuXHJcblxyXG4gICAgICAgIGxldCBnb2FwMiA9IG5ldyBHb2FwT3V0RmlyZUV4aWdlbmNlKClcclxuICAgICAgICBnb2FwMi5pbml0QXZhbGlhYmxlQWN0aW9ucyh0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmdvYXBzLnNldChcIm5vcm1hbF9vdXRfZmlyZVwiLCBnb2FwKVxyXG4gICAgICAgIHRoaXMuZ29hcHMuc2V0KFwibm9ybWFsX291dF9maXJlX2V4aWdlbmNlXCIsIGdvYXAyKVxyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VHb2FwKFwibm9ybWFsX291dF9maXJlXCIpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcykuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlR29hcChcIm5vcm1hbF9vdXRfZmlyZV9leGlnZW5jZVwiKVxyXG4gICAgICAgIH0pLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlR29hcChnb2FwTmFtZSkge1xyXG4gICAgICAgIGxldCBnb2FwID0gdGhpcy5nb2Fwcy5nZXQoZ29hcE5hbWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLliIfmjaLooYzliqhcIiwgZ29hcE5hbWUpXHJcbiAgICAgICAgaWYgKGdvYXApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRHb2FwKGdvYXApXHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW5BdmFsYWJsZUFjdGlvbnMoKVxyXG4gICAgICAgICAgICB0aGlzLmNsZWFuQ3VyQWN0aW9ucygpXHJcbiAgICAgICAgICAgIGxldCBhY3Rpb25zID0gZ29hcC5nZXRBdmFsaWFibGVBY3Rpb25zKClcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFjdGlvbnMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYWN0aW9uc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEFjdGlvbihlbGVtZW50KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XHJcbiAgICAgICAgbGV0IGdvYWwgPSBuZXcgTWFwPHN0cmluZywgT2JqZWN0PigpO1xyXG4gICAgICAgIGdvYWwuc2V0KEFjdGlvbkRhdGFTdGF0dXMub3V0RmlyZSwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGdvYWw7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlKGR0KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==