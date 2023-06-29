
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/Logger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9068f7BkBFHNLWDeR0qbXkH', 'Logger');
// src/app/gamedata/labourers/Logger.ts

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
exports.Logger = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var VGameObject_1 = require("../../base/VGameObject");
var ChopTreeAction_1 = require("../actions/ChopTreeAction");
var DropOffLogsAction_1 = require("../actions/DropOffLogsAction");
var PickUpToolAction_1 = require("../actions/PickUpToolAction");
var Labourer_1 = require("./Labourer");
/**
 * 樵夫
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var Logger = /** @class */ (function (_super) {
    __extends(Logger, _super);
    function Logger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logger.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initAvaliableActions([ChopTreeAction_1.ChopTreeAction, DropOffLogsAction_1.DropOffLogsAction, PickUpToolAction_1.PickUpToolAction]);
    };
    /**
     * Our only goal will ever be to chop trees.
     * The ChopTreeAction will be able to fulfill this goal.
     */
    Logger.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set(ActionStatus_1.ActionStatus.CollectLogs, true);
        return goal;
    };
    Logger.prototype.updateBackPack = function () {
        console.log("原木：" + this.backpack.numLogs);
    };
    Logger = __decorate([
        ccclass,
        requireComponent(VGameObject_1.VGameObject)
    ], Logger);
    return Logger;
}(Labourer_1.Labourer));
exports.Logger = Logger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy9Mb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF5RDtBQUN6RCxzREFBb0Q7QUFDcEQsNERBQTBEO0FBQzFELGtFQUFnRTtBQUNoRSxnRUFBOEQ7QUFDOUQsdUNBQXFDO0FBRXJDOztHQUVHO0FBQ0csSUFBQSxLQUEwQyxFQUFFLENBQUMsVUFBVSxFQUFyRCxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxnQkFBZ0Isc0JBQWtCLENBQUE7QUFHN0Q7SUFBNEIsMEJBQVE7SUFBcEM7O0lBa0JBLENBQUM7SUFqQlUsdUJBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFBO1FBQ2QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsK0JBQWMsRUFBRSxxQ0FBaUIsRUFBRSxtQ0FBZ0IsQ0FBQyxDQUFDLENBQUE7SUFDcEYsQ0FBQztJQUNEOzs7T0FHRztJQUNJLGdDQUFlLEdBQXRCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUE7UUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN4QyxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFTSwrQkFBYyxHQUFyQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQWpCUSxNQUFNO1FBRmxCLE9BQU87UUFDUCxnQkFBZ0IsQ0FBQyx5QkFBVyxDQUFDO09BQ2pCLE1BQU0sQ0FrQmxCO0lBQUQsYUFBQztDQWxCRCxBQWtCQyxDQWxCMkIsbUJBQVEsR0FrQm5DO0FBbEJZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIlxuaW1wb3J0IHsgQ2hvcFRyZWVBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9DaG9wVHJlZUFjdGlvblwiXG5pbXBvcnQgeyBEcm9wT2ZmTG9nc0FjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL0Ryb3BPZmZMb2dzQWN0aW9uXCJcbmltcG9ydCB7IFBpY2tVcFRvb2xBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9QaWNrVXBUb29sQWN0aW9uXCJcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4vTGFib3VyZXJcIlxuXG4vKipcbiAqIOaoteWkq1xuICovXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCByZXF1aXJlQ29tcG9uZW50IH0gPSBjYy5fZGVjb3JhdG9yXG5AY2NjbGFzc1xuQHJlcXVpcmVDb21wb25lbnQoVkdhbWVPYmplY3QpXG5leHBvcnQgY2xhc3MgTG9nZ2VyIGV4dGVuZHMgTGFib3VyZXIge1xuICAgIHB1YmxpYyBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpXG4gICAgICAgIHRoaXMuaW5pdEF2YWxpYWJsZUFjdGlvbnMoW0Nob3BUcmVlQWN0aW9uLCBEcm9wT2ZmTG9nc0FjdGlvbiwgUGlja1VwVG9vbEFjdGlvbl0pXG4gICAgfVxuICAgIC8qKlxuICAgICAqIE91ciBvbmx5IGdvYWwgd2lsbCBldmVyIGJlIHRvIGNob3AgdHJlZXMuXG4gICAgICogVGhlIENob3BUcmVlQWN0aW9uIHdpbGwgYmUgYWJsZSB0byBmdWxmaWxsIHRoaXMgZ29hbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuICAgICAgICBsZXQgZ29hbCA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KClcbiAgICAgICAgZ29hbC5zZXQoQWN0aW9uU3RhdHVzLkNvbGxlY3RMb2dzLCB0cnVlKVxuICAgICAgICByZXR1cm4gZ29hbFxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVCYWNrUGFjaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLljp/mnKjvvJpcIiArIHRoaXMuYmFja3BhY2subnVtTG9ncylcbiAgICB9XG59XG4iXX0=