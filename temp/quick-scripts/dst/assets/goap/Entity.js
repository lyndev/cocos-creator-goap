
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/Entity.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5817cR872hFhatI1yE2kJy3', 'Entity');
// goap/Entity.ts

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
var GoapAgent_1 = require("../src/app/ai/goap/GoapAgent");
var ActionDataStatus_1 = require("./ActionDataStatus");
var DataMemory_1 = require("./DataMemory");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bMoveEnd = false;
        _this.bMoving = false;
        /**拥有的actions */
        _this.avaliableActions = [];
        return _this;
    }
    Entity.prototype.init = function () {
        this.memory = new DataMemory_1.default();
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isTolietOk, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isCanOutfire, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isEquipOk, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isFireOk, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isSleepOk, false);
        this.goapAgent = new GoapAgent_1.GoapAgent(this);
    };
    Entity.prototype.getAvaliableActions = function () {
        return this.avaliableActions;
    };
    Entity.prototype.toInitAvaliableActions = function (actionCls) {
        var action;
        for (var i = 0, len = actionCls.length; i < len; i++) {
            action = new actionCls[i]();
            this.avaliableActions.push(action);
        }
    };
    Entity.prototype.getWorldState = function () {
        var worldData = new Map();
        worldData.set(ActionDataStatus_1.ActionDataStatus.isTolietOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isTolietOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isCanOutfire, this.memory.get(ActionDataStatus_1.ActionDataStatus.isCanOutfire));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isEquipOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isEquipOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isFireOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isFireOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isSleepOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isSleepOk));
        return worldData;
    };
    Entity.prototype.planFailed = function (failedGoal) {
        console.log("planFailed");
    };
    Entity.prototype.planFound = function (goal, actions) {
        console.log("planFound");
    };
    Entity.prototype.actionsFinished = function () {
        console.log("Actions completed");
    };
    Entity.prototype.planAborted = function (aborter) {
        console.log("planAborted");
    };
    Entity.prototype.moveAgent = function (nextAction, delta) {
        var _this = this;
        var target = nextAction.target;
        if (this.bMoveEnd) {
            this.bMoveEnd = false;
            return true;
        }
        if (!this.bMoving) {
            this.bMoving = true;
            var actions = [];
            actions.push(cc.moveTo(2, new cc.Vec2(target.node.x, target.node.y)));
            actions.push(cc.callFunc(function () {
                _this.bMoveEnd = true;
                _this.bMoving = false;
                nextAction.setInRange(true);
            }));
            this.node.stopAllActions();
            this.node.runAction(cc.sequence(actions));
        }
        return this.bMoveEnd;
    };
    Entity.prototype.updateTimer = function (delta) {
        this.goapAgent.update(delta);
    };
    Entity = __decorate([
        ccclass
    ], Entity);
    return Entity;
}(cc.Component));
exports.default = Entity;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO2dCQUNwQixVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtTQUM1QztRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUN4QixDQUFDO0lBRU0sNEJBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBcEZ5QixNQUFNO1FBRG5DLE9BQU87T0FDc0IsTUFBTSxDQXFGbkM7SUFBRCxhQUFDO0NBckZELEFBcUZDLENBckY0QyxFQUFFLENBQUMsU0FBUyxHQXFGeEQ7a0JBckY2QixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gJy4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uJztcclxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSAnLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudCc7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSAnLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwJztcclxuaW1wb3J0IHsgQWN0aW9uRGF0YVN0YXR1cyB9IGZyb20gJy4vQWN0aW9uRGF0YVN0YXR1cyc7XHJcbmltcG9ydCBEYXRhTWVtb3J5IGZyb20gJy4vRGF0YU1lbW9yeSc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgYWJzdHJhY3QgZGVmYXVsdCBjbGFzcyBFbnRpdHkgZXh0ZW5kcyBjYy5Db21wb25lbnQgaW1wbGVtZW50cyBJR29hcCB7XHJcbiAgICBtZW1vcnk6IERhdGFNZW1vcnlcclxuICAgIGJNb3ZlRW5kOiBib29sZWFuID0gZmFsc2VcclxuICAgIGJNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIC8qKmdvYXAgYWdlbnQgKi9cclxuICAgIHByb3RlY3RlZCBnb2FwQWdlbnQ6IEdvYXBBZ2VudDtcclxuICAgIC8qKuaLpeacieeahGFjdGlvbnMgKi9cclxuICAgIHByaXZhdGUgYXZhbGlhYmxlQWN0aW9uczogR29hcEFjdGlvbltdID0gW107XHJcblxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tZW1vcnkgPSBuZXcgRGF0YU1lbW9yeSgpXHJcbiAgICAgICAgdGhpcy5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNUb2xpZXRPaywgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCBmYWxzZSlcclxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIGZhbHNlKVxyXG4gICAgICAgIHRoaXMubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rLCBmYWxzZSlcclxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1NsZWVwT2ssIGZhbHNlKVxyXG4gICAgICAgIHRoaXMuZ29hcEFnZW50ID0gbmV3IEdvYXBBZ2VudCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXZhbGlhYmxlQWN0aW9ucygpOiBHb2FwQWN0aW9uW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF2YWxpYWJsZUFjdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvSW5pdEF2YWxpYWJsZUFjdGlvbnMoYWN0aW9uQ2xzOiBhbnlbXSkge1xyXG4gICAgICAgIGxldCBhY3Rpb247XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFjdGlvbkNscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBuZXcgYWN0aW9uQ2xzW2ldKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXZhbGlhYmxlQWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmxkU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XHJcbiAgICAgICAgbGV0IHdvcmxkRGF0YTogTWFwPHN0cmluZywgT2JqZWN0PiA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KCk7XHJcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2spKTtcclxuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCB0aGlzLm1lbW9yeS5nZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUpKTtcclxuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCB0aGlzLm1lbW9yeS5nZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2spKTtcclxuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rKSk7XHJcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzU2xlZXBPaywgdGhpcy5tZW1vcnkuZ2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNTbGVlcE9rKSk7XHJcbiAgICAgICAgcmV0dXJuIHdvcmxkRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PlxyXG5cclxuICAgIHBsYW5GYWlsZWQoZmFpbGVkR29hbDogTWFwPHN0cmluZywgT2JqZWN0Pik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxhbkZhaWxlZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIHBsYW5Gb3VuZChnb2FsOiBNYXA8c3RyaW5nLCBPYmplY3Q+LCBhY3Rpb25zOiBHb2FwQWN0aW9uW10pOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBsYW5Gb3VuZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIGFjdGlvbnNGaW5pc2hlZCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkFjdGlvbnMgY29tcGxldGVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYW5BYm9ydGVkKGFib3J0ZXI6IEdvYXBBY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBsYW5BYm9ydGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUFnZW50KG5leHRBY3Rpb246IEdvYXBBY3Rpb24sIGRlbHRhOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gbmV4dEFjdGlvbi50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRoaXMuYk1vdmVFbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5iTW92aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYk1vdmluZyA9IHRydWVcclxuICAgICAgICAgICAgbGV0IGFjdGlvbnMgPSBbXVxyXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MubW92ZVRvKDIsIG5ldyBjYy5WZWMyKHRhcmdldC5ub2RlLngsIHRhcmdldC5ub2RlLnkpKSlcclxuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYk1vdmVFbmQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgbmV4dEFjdGlvbi5zZXRJblJhbmdlKHRydWUpO1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKClcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY3Rpb25zKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJNb3ZlRW5kXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVRpbWVyKGRlbHRhOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmdvYXBBZ2VudC51cGRhdGUoZGVsdGEpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==