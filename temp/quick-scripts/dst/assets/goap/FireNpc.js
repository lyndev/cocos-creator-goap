
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FireNpc = /** @class */ (function (_super) {
    __extends(FireNpc, _super);
    function FireNpc() {
        var _this = _super.call(this) || this;
        _this.toInitAvaliableActions([
            GotoToiletAction_1.GotoToiletAction,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0ZpcmVOcGMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdURBQXNEO0FBQ3RELG1DQUE4QjtBQUM5Qix1REFBc0Q7QUFDdEQsaURBQWdEO0FBQ2hELDZEQUE0RDtBQUM1RCxtREFBa0Q7QUFFNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBcUMsMkJBQU07SUFDdkM7UUFBQSxZQUNJLGlCQUFPLFNBUVY7UUFQRyxLQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDeEIsbUNBQWdCO1lBQ2QsNkJBQWE7WUFDYix5Q0FBbUI7WUFDbkIsK0JBQWM7U0FDbkIsQ0FBQyxDQUFBO1FBQ0YsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFBOztJQUNmLENBQUM7SUFFTSxpQ0FBZSxHQUF0QjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsT0FBTyxFQUFJLElBQUksQ0FBQyxDQUFDO1FBQzNDLE9BQU8sSUFBSSxDQUFDO0lBQ1YsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBcEJnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBcUIzQjtJQUFELGNBQUM7Q0FyQkQsQUFxQkMsQ0FyQm9DLGdCQUFNLEdBcUIxQztrQkFyQm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSAnLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb24nO1xuaW1wb3J0IHsgQWN0aW9uRGF0YVN0YXR1cyB9IGZyb20gJy4vQWN0aW9uRGF0YVN0YXR1cyc7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcbmltcG9ydCB7IEdvdG9Ub2lsZXRBY3Rpb24gfSBmcm9tICcuL0dvdG9Ub2lsZXRBY3Rpb24nO1xuaW1wb3J0IHsgR290b0VhdEFjdGlvbiB9IGZyb20gJy4vR290b0VhdEFjdGlvbic7XG5pbXBvcnQgeyBHb3RvRXF1aXBtZW50QWN0aW9uIH0gZnJvbSAnLi9Hb3RvRXF1aXBtZW50QWN0aW9uJztcbmltcG9ydCB7IEdvdG9GaXJlQWN0aW9uIH0gZnJvbSAnLi9Hb3RvRmlyZUFjdGlvbic7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyZU5wYyBleHRlbmRzIEVudGl0eSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLnRvSW5pdEF2YWxpYWJsZUFjdGlvbnMoW1xuICAgICAgICAgICAgR290b1RvaWxldEFjdGlvblxuICAgICAgICAgICAgLCBHb3RvRWF0QWN0aW9uXG4gICAgICAgICAgICAsIEdvdG9FcXVpcG1lbnRBY3Rpb25cbiAgICAgICAgICAgICwgR290b0ZpcmVBY3Rpb25cbiAgICAgICAgXSlcbiAgICAgICAgdGhpcy5pbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuICAgICAgICBsZXQgZ29hbCA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KCk7XG5cdFx0Z29hbC5zZXQoQWN0aW9uRGF0YVN0YXR1cy5vdXRGaXJl4oCL4oCLLCB0cnVlKTtcblx0XHRyZXR1cm4gZ29hbDtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpe1xuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVyKGR0KVxuICAgIH1cbn1cbiJdfQ==