
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy9Mb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUMxRCw0REFBMkQ7QUFDM0Qsa0VBQWlFO0FBQ2pFLGdFQUErRDtBQUMvRCx1Q0FBc0M7QUFFdEM7Ozs7OztHQU1HO0FBQ0csSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBNEIsMEJBQVE7SUFBcEM7O0lBaUJBLENBQUM7SUFoQlUscUNBQW9CLEdBQTlCO1FBQ0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsK0JBQWMsRUFBRSxxQ0FBaUIsRUFBRSxtQ0FBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNEOzs7T0FHRztJQUNJLGdDQUFlLEdBQXRCO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTSwrQkFBYyxHQUFyQjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQWhCVyxNQUFNO1FBRGxCLE9BQU87T0FDSyxNQUFNLENBaUJsQjtJQUFELGFBQUM7Q0FqQkQsQUFpQkMsQ0FqQjJCLG1CQUFRLEdBaUJuQztBQWpCWSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHsgQ2hvcFRyZWVBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9DaG9wVHJlZUFjdGlvblwiO1xuaW1wb3J0IHsgRHJvcE9mZkxvZ3NBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9Ecm9wT2ZmTG9nc0FjdGlvblwiO1xuaW1wb3J0IHsgUGlja1VwVG9vbEFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL1BpY2tVcFRvb2xBY3Rpb25cIjtcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4vTGFib3VyZXJcIjtcblxuLypcbiAqIEBEZXNjcmlwdGlvbjog5qi15aSrXG4gKiBAQXV0aG9yOiBSYW5uYXIuWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTA5LTA1IDIwOjQwOjQ0IFxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDQgMTg6MjI6MDRcbiAqL1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgTG9nZ2VyIGV4dGVuZHMgTGFib3VyZXIge1xuXHRwcm90ZWN0ZWQgaW5pdEF2YWxpYWJsZUFjdGlvbnMoKSB7XG5cdFx0dGhpcy50b0luaXRBdmFsaWFibGVBY3Rpb25zKFtDaG9wVHJlZUFjdGlvbiwgRHJvcE9mZkxvZ3NBY3Rpb24sIFBpY2tVcFRvb2xBY3Rpb25dKTtcblx0fVxuXHQvKipcblx0ICogT3VyIG9ubHkgZ29hbCB3aWxsIGV2ZXIgYmUgdG8gY2hvcCB0cmVlcy5cblx0ICogVGhlIENob3BUcmVlQWN0aW9uIHdpbGwgYmUgYWJsZSB0byBmdWxmaWxsIHRoaXMgZ29hbC5cblx0ICovXG5cdHB1YmxpYyBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XG5cdFx0bGV0IGdvYWwgPSBuZXcgTWFwPHN0cmluZywgT2JqZWN0PigpO1xuXHRcdGdvYWwuc2V0KEFjdGlvblN0YXR1cy5Db2xsZWN0TG9ncywgdHJ1ZSk7XG5cdFx0cmV0dXJuIGdvYWw7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlQmFja1BhY2soKSB7XG5cdFx0Y29uc29sZS5sb2coXCLljp/mnKjvvJpcIiArIHRoaXMuYmFja3BhY2subnVtTG9ncyk7XG5cdH1cbn0iXX0=