
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/WoodCutter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6137dB/EBRFTIM8zI55FtzA', 'WoodCutter');
// src/app/gamedata/labourers/WoodCutter.ts

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
exports.WoodCutter = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var VGameObject_1 = require("../../base/VGameObject");
var ChopFirewoodAction_1 = require("../actions/ChopFirewoodAction");
var DropOffFirewoodAction_1 = require("../actions/DropOffFirewoodAction");
var PickUpToolAction_1 = require("../actions/PickUpToolAction");
var Labourer_1 = require("./Labourer");
/**
 * 砍柴工
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var WoodCutter = /** @class */ (function (_super) {
    __extends(WoodCutter, _super);
    function WoodCutter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WoodCutter.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initAvaliableActions([ChopFirewoodAction_1.ChopFirewoodAction, DropOffFirewoodAction_1.DropOffFirewoodAction, PickUpToolAction_1.PickUpToolAction]);
    };
    /**
     * Our only goal will ever be to chop logs.
     * The ChopFirewoodAction will be able to fulfill this goal.
     */
    WoodCutter.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set(ActionStatus_1.ActionStatus.CollectFirewood, true);
        return goal;
    };
    WoodCutter.prototype.updateBackPack = function () {
        console.log("木柴：" + this.backpack.numFirewood);
    };
    WoodCutter = __decorate([
        ccclass,
        requireComponent(VGameObject_1.VGameObject)
    ], WoodCutter);
    return WoodCutter;
}(Labourer_1.Labourer));
exports.WoodCutter = WoodCutter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy9Xb29kQ3V0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBeUQ7QUFDekQsc0RBQW9EO0FBQ3BELG9FQUFrRTtBQUNsRSwwRUFBd0U7QUFDeEUsZ0VBQThEO0FBQzlELHVDQUFxQztBQUVyQzs7R0FFRztBQUNHLElBQUEsS0FBMEMsRUFBRSxDQUFDLFVBQVUsRUFBckQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsZ0JBQWdCLHNCQUFrQixDQUFBO0FBRzdEO0lBQWdDLDhCQUFRO0lBQXhDOztJQWtCQSxDQUFDO0lBakJVLDJCQUFNLEdBQWI7UUFDSSxpQkFBTSxNQUFNLFdBQUUsQ0FBQTtRQUNkLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLHVDQUFrQixFQUFFLDZDQUFxQixFQUFFLG1DQUFnQixDQUFDLENBQUMsQ0FBQTtJQUM1RixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksb0NBQWUsR0FBdEI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQTtRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzVDLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVNLG1DQUFjLEdBQXJCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBakJRLFVBQVU7UUFGdEIsT0FBTztRQUNQLGdCQUFnQixDQUFDLHlCQUFXLENBQUM7T0FDakIsVUFBVSxDQWtCdEI7SUFBRCxpQkFBQztDQWxCRCxBQWtCQyxDQWxCK0IsbUJBQVEsR0FrQnZDO0FBbEJZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIlxuaW1wb3J0IHsgQ2hvcEZpcmV3b29kQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvQ2hvcEZpcmV3b29kQWN0aW9uXCJcbmltcG9ydCB7IERyb3BPZmZGaXJld29vZEFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL0Ryb3BPZmZGaXJld29vZEFjdGlvblwiXG5pbXBvcnQgeyBQaWNrVXBUb29sQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvUGlja1VwVG9vbEFjdGlvblwiXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuL0xhYm91cmVyXCJcblxuLyoqXG4gKiDnoI3mn7Tlt6VcbiAqL1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgcmVxdWlyZUNvbXBvbmVudCB9ID0gY2MuX2RlY29yYXRvclxuQGNjY2xhc3NcbkByZXF1aXJlQ29tcG9uZW50KFZHYW1lT2JqZWN0KVxuZXhwb3J0IGNsYXNzIFdvb2RDdXR0ZXIgZXh0ZW5kcyBMYWJvdXJlciB7XG4gICAgcHVibGljIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKClcbiAgICAgICAgdGhpcy5pbml0QXZhbGlhYmxlQWN0aW9ucyhbQ2hvcEZpcmV3b29kQWN0aW9uLCBEcm9wT2ZmRmlyZXdvb2RBY3Rpb24sIFBpY2tVcFRvb2xBY3Rpb25dKVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBPdXIgb25seSBnb2FsIHdpbGwgZXZlciBiZSB0byBjaG9wIGxvZ3MuXG4gICAgICogVGhlIENob3BGaXJld29vZEFjdGlvbiB3aWxsIGJlIGFibGUgdG8gZnVsZmlsbCB0aGlzIGdvYWwuXG4gICAgICovXG4gICAgcHVibGljIGNyZWF0ZUdvYWxTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+IHtcbiAgICAgICAgbGV0IGdvYWwgPSBuZXcgTWFwPHN0cmluZywgT2JqZWN0PigpXG4gICAgICAgIGdvYWwuc2V0KEFjdGlvblN0YXR1cy5Db2xsZWN0RmlyZXdvb2QsIHRydWUpXG4gICAgICAgIHJldHVybiBnb2FsXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUJhY2tQYWNrKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIuacqOaftO+8mlwiICsgdGhpcy5iYWNrcGFjay5udW1GaXJld29vZClcbiAgICB9XG59XG4iXX0=