
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
var ChopTreeAction_1 = require("../actions/ChopTreeAction");
var DropOffLogsAction_1 = require("../actions/DropOffLogsAction");
var PickUpToolAction_1 = require("../actions/PickUpToolAction");
var Labourer_1 = require("./Labourer");
/*
 * @Description: 樵夫
 * @Author: Rannar.Yang
 * @Date: 2018-09-05 20:40:44
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 18:22:04
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Logger = /** @class */ (function (_super) {
    __extends(Logger, _super);
    function Logger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logger.prototype.initAvaliableActions = function () {
        this.toInitAvaliableActions([ChopTreeAction_1.ChopTreeAction, DropOffLogsAction_1.DropOffLogsAction, PickUpToolAction_1.PickUpToolAction]);
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
        ccclass
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXExvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFELDREQUEyRDtBQUMzRCxrRUFBaUU7QUFDakUsZ0VBQStEO0FBQy9ELHVDQUFzQztBQUV0Qzs7Ozs7O0dBTUc7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE0QiwwQkFBUTtJQUFwQzs7SUFpQkEsQ0FBQztJQWhCVSxxQ0FBb0IsR0FBOUI7UUFDQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQywrQkFBYyxFQUFFLHFDQUFpQixFQUFFLG1DQUFnQixDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksZ0NBQWUsR0FBdEI7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLCtCQUFjLEdBQXJCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBaEJXLE1BQU07UUFEbEIsT0FBTztPQUNLLE1BQU0sQ0FpQmxCO0lBQUQsYUFBQztDQWpCRCxBQWlCQyxDQWpCMkIsbUJBQVEsR0FpQm5DO0FBakJZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IENob3BUcmVlQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvQ2hvcFRyZWVBY3Rpb25cIjtcclxuaW1wb3J0IHsgRHJvcE9mZkxvZ3NBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9Ecm9wT2ZmTG9nc0FjdGlvblwiO1xyXG5pbXBvcnQgeyBQaWNrVXBUb29sQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvUGlja1VwVG9vbEFjdGlvblwiO1xyXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuL0xhYm91cmVyXCI7XHJcblxyXG4vKlxyXG4gKiBARGVzY3JpcHRpb246IOaoteWkq1xyXG4gKiBAQXV0aG9yOiBSYW5uYXIuWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDUgMjA6NDA6NDQgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDQgMTg6MjI6MDRcclxuICovXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXIgZXh0ZW5kcyBMYWJvdXJlciB7XHJcblx0cHJvdGVjdGVkIGluaXRBdmFsaWFibGVBY3Rpb25zKCkge1xyXG5cdFx0dGhpcy50b0luaXRBdmFsaWFibGVBY3Rpb25zKFtDaG9wVHJlZUFjdGlvbiwgRHJvcE9mZkxvZ3NBY3Rpb24sIFBpY2tVcFRvb2xBY3Rpb25dKTtcclxuXHR9XHJcblx0LyoqXHJcblx0ICogT3VyIG9ubHkgZ29hbCB3aWxsIGV2ZXIgYmUgdG8gY2hvcCB0cmVlcy5cclxuXHQgKiBUaGUgQ2hvcFRyZWVBY3Rpb24gd2lsbCBiZSBhYmxlIHRvIGZ1bGZpbGwgdGhpcyBnb2FsLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XHJcblx0XHRsZXQgZ29hbCA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KCk7XHJcblx0XHRnb2FsLnNldChBY3Rpb25TdGF0dXMuQ29sbGVjdExvZ3MsIHRydWUpO1xyXG5cdFx0cmV0dXJuIGdvYWw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlQmFja1BhY2soKSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuWOn+acqO+8mlwiICsgdGhpcy5iYWNrcGFjay5udW1Mb2dzKTtcclxuXHR9XHJcbn0iXX0=