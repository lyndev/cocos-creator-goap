
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/goap/ActionDataStatus');
require('./assets/goap/DataMemory');
require('./assets/goap/Eating');
require('./assets/goap/Entity');
require('./assets/goap/Env');
require('./assets/goap/Equip');
require('./assets/goap/ExigenceFireAction');
require('./assets/goap/Fire');
require('./assets/goap/FireNpc');
require('./assets/goap/GotSleepAction');
require('./assets/goap/GotoEatAction');
require('./assets/goap/GotoEquipmentAction');
require('./assets/goap/GotoFireAction');
require('./assets/goap/GotoToiletAction');
require('./assets/goap/Sleep');
require('./assets/goap/StoreA');
require('./assets/goap/Toilet');
require('./assets/goap/actions/ActionBuyShopItem');
require('./assets/goap/actions/ActionPayMoney');
require('./assets/goap/goaps/GoapOutFire2');
require('./assets/goap/goaps/GoapOutFireExigence');
require('./assets/src/NewScript');
require('./assets/src/app/ai/fsm/StateManager');
require('./assets/src/app/ai/fsm/state/StateBase');
require('./assets/src/app/ai/fsm/state/StateEnum');
require('./assets/src/app/ai/fsm/state/StateIdle');
require('./assets/src/app/ai/fsm/state/StateMove');
require('./assets/src/app/ai/fsm/state/StatePerformAction');
require('./assets/src/app/ai/goap/ActionStatus');
require('./assets/src/app/ai/goap/GoapAction');
require('./assets/src/app/ai/goap/GoapAgent');
require('./assets/src/app/ai/goap/GoapPlanner');
require('./assets/src/app/ai/goap/IGoap');
require('./assets/src/app/base/VGameObject');
require('./assets/src/app/data/GameDataManager');
require('./assets/src/app/data/LabourerType');
require('./assets/src/app/data/T_LabourerContainer');
require('./assets/src/app/data/ToolType');
require('./assets/src/app/gamedata/BackPackComponent');
require('./assets/src/app/gamedata/ChoppingBlockComponent');
require('./assets/src/app/gamedata/Environment');
require('./assets/src/app/gamedata/ForgeComponent');
require('./assets/src/app/gamedata/IronRockComponent');
require('./assets/src/app/gamedata/SupplyPileComponent');
require('./assets/src/app/gamedata/ToolComponent');
require('./assets/src/app/gamedata/TreeComponent');
require('./assets/src/app/gamedata/actions/ChopFirewoodAction');
require('./assets/src/app/gamedata/actions/ChopTreeAction');
require('./assets/src/app/gamedata/actions/DropOffFirewoodAction');
require('./assets/src/app/gamedata/actions/DropOffLogsAction');
require('./assets/src/app/gamedata/actions/DropOffOreAction');
require('./assets/src/app/gamedata/actions/DropOffToolsAction');
require('./assets/src/app/gamedata/actions/ForgeToolAction');
require('./assets/src/app/gamedata/actions/MineOreAction');
require('./assets/src/app/gamedata/actions/PickUpLogsAction');
require('./assets/src/app/gamedata/actions/PickUpOreAction');
require('./assets/src/app/gamedata/actions/PickUpToolAction');
require('./assets/src/app/gamedata/labourers/Blacksmith');
require('./assets/src/app/gamedata/labourers/Labourer');
require('./assets/src/app/gamedata/labourers/Logger');
require('./assets/src/app/gamedata/labourers/Miner');
require('./assets/src/app/gamedata/labourers/WoodCutter');
require('./assets/src/app/gamedata/labourers/vlabourers/VBlacksmith');
require('./assets/src/app/gamedata/labourers/vlabourers/VLabourer');
require('./assets/src/app/gamedata/labourers/vlabourers/VLogger');
require('./assets/src/app/gamedata/labourers/vlabourers/VMiner');
require('./assets/src/app/gamedata/labourers/vlabourers/VWoodCutter');
require('./assets/src/app/view/EnvironmentView');
require('./assets/src/utils/TimeUtil');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/actions/ActionPayMoney.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c846bXR6A1J9bXFfPx/y+K0', 'ActionPayMoney');
// goap/actions/ActionPayMoney.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionPayMoney = void 0;
var GoapAction_1 = require("../../src/app/ai/goap/GoapAction");
var Environment_1 = require("../../src/app/gamedata/Environment");
var TimeUtil_1 = require("../../src/utils/TimeUtil");
var ActionPayMoney = /** @class */ (function (_super) {
    __extends(ActionPayMoney, _super);
    function ActionPayMoney() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.cost = 1;
        return _this;
    }
    ActionPayMoney.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    ActionPayMoney.prototype.isDone = function () {
        return this.bDone;
    };
    ActionPayMoney.prototype.requiresInRange = function () {
        return true;
    };
    ActionPayMoney.prototype.checkProceduralPrecondition = function (agent) {
        if (Environment_1.Environment.storeA.isHaveGoods()) {
            return true;
        }
    };
    ActionPayMoney.prototype.perform = function (agent) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isCanOutfire, true)
            this.bDone = true;
        }
        return true;
    };
    return ActionPayMoney;
}(GoapAction_1.GoapAction));
exports.ActionPayMoney = ActionPayMoney;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcYWN0aW9uc1xcQWN0aW9uUGF5TW9uZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE4RDtBQUk5RCxrRUFBaUU7QUFDakUscURBQWdEO0FBSWhEO0lBQW9DLGtDQUFVO0lBSzFDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBTk8sV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNyQyxVQUFJLEdBQVcsQ0FBQyxDQUFBOztJQUd2QixDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSx3Q0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxvREFBMkIsR0FBbEMsVUFBbUMsS0FBZ0I7UUFDL0MsSUFBSSx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQTtTQUNkO0lBQ0wsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxLQUFnQjtRQUMzQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFeEMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN6RCx3REFBd0Q7WUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7U0FDcEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQXRDQSxBQXNDQyxDQXRDbUMsdUJBQVUsR0FzQzdDO0FBdENZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiO1xyXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudFwiO1xyXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2FpL2dvYXAvSUdvYXBcIjtcclxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvZ2FtZWRhdGEvRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi8uLi9zcmMvdXRpbHMvVGltZVV0aWxcIjtcclxuaW1wb3J0IHsgQWN0aW9uRGF0YVN0YXR1cyB9IGZyb20gXCIuLi9BY3Rpb25EYXRhU3RhdHVzXCI7XHJcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL0VudGl0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjdGlvblBheU1vbmV5IGV4dGVuZHMgR29hcEFjdGlvbiB7XHJcbiAgICBwcml2YXRlIGJEb25lOiBib29sZWFuID0gZmFsc2VcclxuICAgIHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB3b3JrRHVyYXRpb246IG51bWJlciA9IDI7IC8vIHNlY29uZHNcclxuICAgIHB1YmxpYyBjb3N0OiBudW1iZXIgPSAxXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNEb25lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJEb25lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogR29hcEFnZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKEVudmlyb25tZW50LnN0b3JlQS5pc0hhdmVHb29kcygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwZXJmb3JtKGFnZW50OiBHb2FwQWdlbnQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5zdGFydFRpbWUgPT0gMClcclxuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBUaW1lVXRpbC5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgIGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMuYkRvbmUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/utils/TimeUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f3724rOLWVA8ZBqyqopkrnw', 'TimeUtil');
// src/utils/TimeUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeUtil = /** @class */ (function () {
    function TimeUtil() {
    }
    TimeUtil.getTime = function () {
        return new Date().getTime() / 1000;
    };
    return TimeUtil;
}());
exports.default = TimeUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFx1dGlsc1xcVGltZVV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBSUEsQ0FBQztJQUhpQixnQkFBTyxHQUFyQjtRQUNJLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUE7SUFDdEMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVVdGlsIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VGltZSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwXHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/data/T_LabourerContainer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d81aYW+MRMsIoQeqANKXML', 'T_LabourerContainer');
// src/app/data/T_LabourerContainer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.T_LabourerBean = exports.T_LabourerContainer = void 0;
var LabourerType_1 = require("./LabourerType");
var ToolType_1 = require("./ToolType");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-11-03 18:37:14
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-03 19:03:22
 */
var T_LabourerContainer = /** @class */ (function () {
    function T_LabourerContainer() {
        this._labourerMap = new Map();
        this._labourerMap.set(LabourerType_1.LabourerType.Blacksmith, new T_LabourerBean(LabourerType_1.LabourerType.Blacksmith, 1, ToolType_1.ToolType.Axe));
        this._labourerMap.set(LabourerType_1.LabourerType.Logger, new T_LabourerBean(LabourerType_1.LabourerType.Logger, 2, ToolType_1.ToolType.Axe));
        this._labourerMap.set(LabourerType_1.LabourerType.Miner, new T_LabourerBean(LabourerType_1.LabourerType.Miner, 1, ToolType_1.ToolType.Pick));
        this._labourerMap.set(LabourerType_1.LabourerType.WoodCutter, new T_LabourerBean(LabourerType_1.LabourerType.WoodCutter, 2, ToolType_1.ToolType.Axe));
    }
    Object.defineProperty(T_LabourerContainer.prototype, "labourerMap", {
        get: function () {
            return this._labourerMap;
        },
        enumerable: false,
        configurable: true
    });
    T_LabourerContainer.prototype.getLabourerByType = function (type) {
        if (this._labourerMap.has(type)) {
            return this._labourerMap.get(type);
        }
        else {
            console.warn("can not find labourer by type: ", type);
            return null;
        }
    };
    return T_LabourerContainer;
}());
exports.T_LabourerContainer = T_LabourerContainer;
var T_LabourerBean = /** @class */ (function () {
    function T_LabourerBean(type, speed, toolType) {
        this.type = type;
        this.speed = speed;
        this.toolType = toolType;
    }
    return T_LabourerBean;
}());
exports.T_LabourerBean = T_LabourerBean;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGRhdGFcXFRfTGFib3VyZXJDb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLHVDQUFzQztBQUV0Qzs7Ozs7O0dBTUc7QUFDSDtJQUtDO1FBSlEsaUJBQVksR0FBZ0MsSUFBSSxHQUFHLEVBQTBCLENBQUM7UUFLckYsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxjQUFjLENBQUMsMkJBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUM1RyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLGNBQWMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsbUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ3BHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsS0FBSyxFQUFFLElBQUksY0FBYyxDQUFDLDJCQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDbkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxjQUFjLENBQUMsMkJBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUM3RyxDQUFDO0lBUkQsc0JBQVcsNENBQVc7YUFBdEI7WUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFPTSwrQ0FBaUIsR0FBeEIsVUFBeUIsSUFBWTtRQUNwQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDckQsT0FBTyxJQUFJLENBQUM7U0FDWjtJQUNGLENBQUM7SUFDRiwwQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksa0RBQW1CO0FBcUJoQztJQVFDLHdCQUFZLElBQWtCLEVBQUUsS0FBYSxFQUFFLFFBQWdCO1FBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFDRixxQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYWJvdXJlclR5cGUgfSBmcm9tIFwiLi9MYWJvdXJlclR5cGVcIjtcclxuaW1wb3J0IHsgVG9vbFR5cGUgfSBmcm9tIFwiLi9Ub29sVHlwZVwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMTEtMDMgMTg6Mzc6MTQgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDMgMTk6MDM6MjJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUX0xhYm91cmVyQ29udGFpbmVyIHtcclxuXHRwcml2YXRlIF9sYWJvdXJlck1hcDogTWFwPG51bWJlciwgVF9MYWJvdXJlckJlYW4+ID0gbmV3IE1hcDxudW1iZXIsIFRfTGFib3VyZXJCZWFuPigpO1xyXG5cdHB1YmxpYyBnZXQgbGFib3VyZXJNYXAoKTogTWFwPG51bWJlciwgVF9MYWJvdXJlckJlYW4+IHtcclxuXHRcdHJldHVybiB0aGlzLl9sYWJvdXJlck1hcDtcclxuXHR9XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLl9sYWJvdXJlck1hcC5zZXQoTGFib3VyZXJUeXBlLkJsYWNrc21pdGgsIG5ldyBUX0xhYm91cmVyQmVhbihMYWJvdXJlclR5cGUuQmxhY2tzbWl0aCwgMSwgVG9vbFR5cGUuQXhlKSlcclxuXHRcdHRoaXMuX2xhYm91cmVyTWFwLnNldChMYWJvdXJlclR5cGUuTG9nZ2VyLCBuZXcgVF9MYWJvdXJlckJlYW4oTGFib3VyZXJUeXBlLkxvZ2dlciwgMiwgVG9vbFR5cGUuQXhlKSlcclxuXHRcdHRoaXMuX2xhYm91cmVyTWFwLnNldChMYWJvdXJlclR5cGUuTWluZXIsIG5ldyBUX0xhYm91cmVyQmVhbihMYWJvdXJlclR5cGUuTWluZXIsIDEsIFRvb2xUeXBlLlBpY2spKVxyXG5cdFx0dGhpcy5fbGFib3VyZXJNYXAuc2V0KExhYm91cmVyVHlwZS5Xb29kQ3V0dGVyLCBuZXcgVF9MYWJvdXJlckJlYW4oTGFib3VyZXJUeXBlLldvb2RDdXR0ZXIsIDIsIFRvb2xUeXBlLkF4ZSkpXHJcblx0fVxyXG5cdHB1YmxpYyBnZXRMYWJvdXJlckJ5VHlwZSh0eXBlOiBudW1iZXIpOiBUX0xhYm91cmVyQmVhbiB7XHJcblx0XHRpZiAodGhpcy5fbGFib3VyZXJNYXAuaGFzKHR5cGUpKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLl9sYWJvdXJlck1hcC5nZXQodHlwZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLndhcm4oXCJjYW4gbm90IGZpbmQgbGFib3VyZXIgYnkgdHlwZTogXCIsIHR5cGUpXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRfTGFib3VyZXJCZWFuIHtcclxuXHQvKirnsbvlnosgKi9cclxuXHRwdWJsaWMgdHlwZTogTGFib3VyZXJUeXBlO1xyXG5cdC8qKuenu+WKqOmAn+W6piAqL1xyXG5cdHB1YmxpYyBzcGVlZDogbnVtYmVyO1xyXG5cdC8qKuW3peWFt+exu+WeiyAqL1xyXG5cdHB1YmxpYyB0b29sVHlwZTogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBMYWJvdXJlclR5cGUsIHNwZWVkOiBudW1iZXIsIHRvb2xUeXBlOiBzdHJpbmcpIHtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLnNwZWVkID0gc3BlZWQ7XHJcblx0XHR0aGlzLnRvb2xUeXBlID0gdG9vbFR5cGU7XHJcblx0fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/ChopTreeAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ebd9M+JMxGE4m2I9agiweP', 'ChopTreeAction');
// src/app/gamedata/actions/ChopTreeAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChopTreeAction = void 0;
var TimeUtil_1 = require("../../../utils/TimeUtil");
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:12
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:32:23
 */
var ChopTreeAction = /** @class */ (function (_super) {
    __extends(ChopTreeAction, _super);
    function ChopTreeAction() {
        var _this = _super.call(this) || this;
        _this.chopped = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasTool, true); // we need a tool to do this
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasLogs, false); // if we have logs we don't want more
        _this.addEffect(ActionStatus_1.ActionStatus.HasLogs, true);
        return _this;
    }
    ChopTreeAction.prototype.reset = function () {
        this.chopped = false;
        this.startTime = 0;
    };
    ChopTreeAction.prototype.isDone = function () {
        return this.chopped;
    };
    ChopTreeAction.prototype.requiresInRange = function () {
        return true;
    };
    ChopTreeAction.prototype.checkProceduralPrecondition = function (agent) {
        // TODO:find the nearest tree that we can chop
        var trees = Environment_1.Environment.treeComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, trees_1 = trees; _i < trees_1.length; _i++) {
            var tree = trees_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = tree;
                closestDist = tree.distanceSquare(agent);
            }
            else {
                // is this one closer than the last?
                var dist = tree.distanceSquare(agent);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = tree;
                    closestDist = dist;
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    ChopTreeAction.prototype.perform = function (iGoap) {
        var labourer = iGoap;
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            // finished chopping
            var backpack = labourer.backpack;
            backpack.numLogs += 1;
            this.chopped = true;
            var tool = labourer.tool;
            tool.use(0.34);
            console.log("使用工具", this.constructor.name);
            if (tool.destroyed()) {
                // TODO: Destroy(backpack.tool);
                // backpack.tool = null;
                labourer.destroyTool();
            }
        }
        return true;
    };
    return ChopTreeAction;
}(GoapAction_1.GoapAction));
exports.ChopTreeAction = ChopTreeAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxDaG9wVHJlZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQStDO0FBQy9DLDJEQUEwRDtBQUMxRCx1REFBc0Q7QUFJdEQsOENBQTZDO0FBSzdDOzs7Ozs7R0FNRztBQUNIO0lBQW9DLGtDQUFVO0lBSzdDO1FBQUEsWUFDQyxpQkFBTyxTQUlQO1FBVE8sYUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUczQyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1FBQzlFLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxxQ0FBcUM7UUFDeEYsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDNUMsQ0FBQztJQUNNLDhCQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRU0sd0NBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDTSxvREFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQsOENBQThDO1FBQzlDLElBQUksS0FBSyxHQUFvQix5QkFBVyxDQUFDLFNBQVMsQ0FBQztRQUNuRCxJQUFJLE9BQU8sR0FBa0IsSUFBSSxDQUFDO1FBQ2xDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFpQixVQUFLLEVBQUwsZUFBSyxFQUFMLG1CQUFLLEVBQUwsSUFBSyxFQUFFO1lBQW5CLElBQUksSUFBSSxjQUFBO1lBQ1osSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNwQixrQ0FBa0M7Z0JBQ2xDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ2YsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekM7aUJBQU07Z0JBQ04sb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3ZCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDZixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjthQUNEO1NBQ0Q7UUFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1FBRWQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFFdEIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxnQ0FBTyxHQUFkLFVBQWUsS0FBWTtRQUMxQixJQUFJLFFBQVEsR0FBRyxLQUFpQixDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVyQyxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVELG9CQUFvQjtZQUNwQixJQUFJLFFBQVEsR0FBc0IsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNwRCxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLElBQUksR0FBa0IsUUFBUSxDQUFDLElBQUksQ0FBQztZQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMxQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDckIsZ0NBQWdDO2dCQUNoQyx3QkFBd0I7Z0JBQ3hCLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN2QjtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQXpFQSxBQXlFQyxDQXpFbUMsdUJBQVUsR0F5RTdDO0FBekVZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi8uLi8uLi91dGlscy9UaW1lVXRpbFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIjtcclxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9JR29hcFwiO1xyXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCI7XHJcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiO1xyXG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSBcIi4uL1Rvb2xDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVHJlZUNvbXBvbmVudCB9IGZyb20gXCIuLi9UcmVlQ29tcG9uZW50XCI7XHJcblxyXG4vKlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDowOToxMiBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMC0yOCAxMTozMjoyM1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENob3BUcmVlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XHJcblx0cHJpdmF0ZSBjaG9wcGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAyOyAvLyBzZWNvbmRzXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNUb29sLCB0cnVlKTsgLy8gd2UgbmVlZCBhIHRvb2wgdG8gZG8gdGhpc1xyXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIGZhbHNlKTsgLy8gaWYgd2UgaGF2ZSBsb2dzIHdlIGRvbid0IHdhbnQgbW9yZVxyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIHRydWUpO1xyXG5cdH1cclxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmNob3BwZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc0RvbmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jaG9wcGVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xyXG5cdFx0Ly8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHRyZWUgdGhhdCB3ZSBjYW4gY2hvcFxyXG5cdFx0bGV0IHRyZWVzOiBUcmVlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC50cmVlQ29tcHM7XHJcblx0XHRsZXQgY2xvc2VzdDogVHJlZUNvbXBvbmVudCA9IG51bGw7XHJcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdFx0Zm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xyXG5cdFx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKSB7XHJcblx0XHRcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xyXG5cdFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xyXG5cdFx0XHRcdGNsb3Nlc3REaXN0ID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XHJcblx0XHRcdFx0bGV0IGRpc3Q6IG51bWJlciA9IHRyZWUuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xyXG5cdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcclxuXHRcdFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XHJcblx0XHRcdFx0XHRjbG9zZXN0ID0gdHJlZTtcclxuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChjbG9zZXN0ID09IG51bGwpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XHJcblxyXG5cdFx0cmV0dXJuIGNsb3Nlc3QgIT0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwZXJmb3JtKGlHb2FwOiBJR29hcCk6IGJvb2xlYW4ge1xyXG5cdFx0bGV0IGxhYm91cmVyID0gaUdvYXAgYXMgTGFib3VyZXI7XHJcblx0XHRpZiAodGhpcy5zdGFydFRpbWUgPT0gMClcclxuXHRcdFx0dGhpcy5zdGFydFRpbWUgPSBUaW1lVXRpbC5nZXRUaW1lKCk7XHJcblxyXG5cdFx0aWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy53b3JrRHVyYXRpb24pIHtcclxuXHRcdFx0Ly8gZmluaXNoZWQgY2hvcHBpbmdcclxuXHRcdFx0bGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrO1xyXG5cdFx0XHRiYWNrcGFjay5udW1Mb2dzICs9IDE7XHJcblx0XHRcdHRoaXMuY2hvcHBlZCA9IHRydWU7XHJcblx0XHRcdGxldCB0b29sOiBUb29sQ29tcG9uZW50ID0gbGFib3VyZXIudG9vbDtcclxuXHRcdFx0dG9vbC51c2UoMC4zNCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5L2/55So5bel5YW3XCIsIHRoaXMuY29uc3RydWN0b3IubmFtZSlcclxuXHRcdFx0aWYgKHRvb2wuZGVzdHJveWVkKCkpIHtcclxuXHRcdFx0XHQvLyBUT0RPOiBEZXN0cm95KGJhY2twYWNrLnRvb2wpO1xyXG5cdFx0XHRcdC8vIGJhY2twYWNrLnRvb2wgPSBudWxsO1xyXG5cdFx0XHRcdGxhYm91cmVyLmRlc3Ryb3lUb29sKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VLabourer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5fed0DfS05KdZLymi1EqK4y', 'VLabourer');
// src/app/gamedata/labourers/vlabourers/VLabourer.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VLabourer = void 0;
var VGameObject_1 = require("../../../base/VGameObject");
var VLabourer = /** @class */ (function (_super) {
    __extends(VLabourer, _super);
    function VLabourer() {
        return _super.call(this) || this;
    }
    return VLabourer;
}(VGameObject_1.VGameObject));
exports.VLabourer = VLabourer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXHZsYWJvdXJlcnNcXFZMYWJvdXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQXdEO0FBR3hEO0lBQXdDLDZCQUFXO0lBRWxEO2VBQ0MsaUJBQU87SUFDUixDQUFDO0lBRUYsZ0JBQUM7QUFBRCxDQU5BLEFBTUMsQ0FOdUMseUJBQVcsR0FNbEQ7QUFOcUIsOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL0xhYm91cmVyXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVkxhYm91cmVyIGV4dGVuZHMgVkdhbWVPYmplY3Qge1xyXG5cdHByb3RlY3RlZCBsYWJvdXJlcjogTGFib3VyZXI7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/goap/GoapAgent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f1fa9m67hDyIz3E7rLr/eL', 'GoapAgent');
// src/app/ai/goap/GoapAgent.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoapAgent = void 0;
var StateEnum_1 = require("../fsm/state/StateEnum");
var StateIdle_1 = require("../fsm/state/StateIdle");
var StateMove_1 = require("../fsm/state/StateMove");
var StatePerformAction_1 = require("../fsm/state/StatePerformAction");
var StateManager_1 = require("../fsm/StateManager");
var GoapPlanner_1 = require("./GoapPlanner");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:30
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 17:41:31
 */
var GoapAgent = /** @class */ (function (_super) {
    __extends(GoapAgent, _super);
    function GoapAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoapAgent.prototype.init = function () {
        this.initState();
        this.planner = new GoapPlanner_1.GoapPlanner();
        this.availableActions = [];
        this.currentActions = [];
        this.stateMgr.changeState(StateEnum_1.StateEnum.StateIdle);
    };
    GoapAgent.prototype.initState = function () {
        var stateMgr = this.stateMgr = new StateManager_1.StateManager(this);
        stateMgr.registerState(StateEnum_1.StateEnum.StateIdle, new StateIdle_1.StateIdle(this));
        stateMgr.registerState(StateEnum_1.StateEnum.StateMove, new StateMove_1.StateMove(this));
        stateMgr.registerState(StateEnum_1.StateEnum.StatePerformAction, new StatePerformAction_1.StatePerformAction(this));
    };
    GoapAgent.prototype.getGoap = function () {
        return this.goap;
    };
    GoapAgent.prototype.setGoap = function (v) {
        this.goap = v;
    };
    GoapAgent.prototype.getPlanner = function () {
        return this.planner;
    };
    GoapAgent.prototype.getAvaliableActions = function () {
        return this.availableActions;
    };
    GoapAgent.prototype.setCurrentActions = function (currentActions) {
        this.currentActions = currentActions;
    };
    GoapAgent.prototype.peekCurrentActions = function () {
        return this.currentActions[0];
    };
    GoapAgent.prototype.dequeueCurrentActions = function () {
        return this.currentActions.shift();
    };
    GoapAgent.prototype.getCurrentActions = function () {
        return this.currentActions;
    };
    GoapAgent.prototype.changeState = function (key, obj, isForce) {
        this.stateMgr.changeState(key, obj, isForce);
    };
    GoapAgent.prototype.update = function (delta) {
        this.stateMgr.update(delta);
    };
    GoapAgent.prototype.addAction = function (a) {
        this.availableActions.push(a);
    };
    GoapAgent.prototype.getAction = function (cls) {
        for (var _i = 0, _a = this.availableActions; _i < _a.length; _i++) {
            var action = _a[_i];
            if (action instanceof cls) {
                return action;
            }
        }
        return null;
    };
    GoapAgent.prototype.removeAction = function (action) {
        for (var i = 0, len = this.availableActions.length; i < len; i++) {
            if (this.availableActions[i] == action) {
                this.availableActions.splice(i, 1);
                return;
            }
        }
    };
    GoapAgent.prototype.hasActionPlan = function () {
        return this.currentActions.length > 0;
    };
    GoapAgent.prototype.cleanCurActions = function () {
        this.currentActions.length = 0;
    };
    GoapAgent.prototype.cleanAvalableActions = function () {
        this.availableActions.length = 0;
    };
    GoapAgent.prototype.loadActions = function () {
        var actions = this.getAvaliableActions();
        for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
            var action = actions_1[_i];
            this.availableActions.push(action);
        }
        console.log("Found actions: " + GoapAgent.prettyPrintActions(actions));
    };
    // 输出 ==================================================
    GoapAgent.prettyPrintState = function (state) {
        var s = "";
        state.forEach(function (value, key) {
            s += key + ":" + value;
            s += ", ";
        });
        return s;
    };
    GoapAgent.prettyPrintActionsQueue = function (actions) {
        console.log("prettyPrintActionsQueue: ", actions);
        var s = "";
        actions.forEach(function (action) {
            s += action.constructor.name;
            s += "-> ";
        });
        s += "GOAL";
        return s;
    };
    GoapAgent.prettyPrintActions = function (actions) {
        var s = "";
        actions.forEach(function (action) {
            s += action.constructor.name;
            s += ", ";
        });
        return s;
    };
    GoapAgent.prettyPrintAction = function (action) {
        return "" + action.constructor.name;
    };
    return GoapAgent;
}(cc.Component));
exports.GoapAgent = GoapAgent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxnb2FwXFxHb2FwQWdlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQUNuRCxvREFBbUQ7QUFDbkQsb0RBQW1EO0FBQ25ELHNFQUFxRTtBQUNyRSxvREFBbUQ7QUFHbkQsNkNBQTRDO0FBRzVDOzs7Ozs7R0FNRztBQUNIO0lBQStCLDZCQUFZO0lBQTNDOztJQXlJQSxDQUFDO0lBbElPLHdCQUFJLEdBQVg7UUFDQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLDZCQUFTLEdBQWpCO1FBQ0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLDJCQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLHFCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUNoRSxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLElBQUkscUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ2hFLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLHVDQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDbkYsQ0FBQztJQUVNLDJCQUFPLEdBQWQ7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVNLDJCQUFPLEdBQWQsVUFBZSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRU0sOEJBQVUsR0FBakI7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVNLHVDQUFtQixHQUExQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7SUFFTSxxQ0FBaUIsR0FBeEIsVUFBeUIsY0FBNEI7UUFDcEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDdEMsQ0FBQztJQUVNLHNDQUFrQixHQUF6QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0seUNBQXFCLEdBQTVCO1FBQ0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTSxxQ0FBaUIsR0FBeEI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQztJQUdNLCtCQUFXLEdBQWxCLFVBQW1CLEdBQVcsRUFBRSxHQUFTLEVBQUUsT0FBaUI7UUFDM0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU0sMEJBQU0sR0FBYixVQUFjLEtBQWE7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUNNLDZCQUFTLEdBQWhCLFVBQWlCLENBQWE7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sNkJBQVMsR0FBaEIsVUFBdUMsR0FBaUI7UUFDdkQsS0FBbUIsVUFBcUIsRUFBckIsS0FBQSxJQUFJLENBQUMsZ0JBQWdCLEVBQXJCLGNBQXFCLEVBQXJCLElBQXFCLEVBQUU7WUFBckMsSUFBSSxNQUFNLFNBQUE7WUFDZCxJQUFJLE1BQU0sWUFBWSxHQUFHLEVBQUU7Z0JBQzFCLE9BQU8sTUFBTSxDQUFDO2FBQ2Q7U0FDRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNNLGdDQUFZLEdBQW5CLFVBQW9CLE1BQWtCO1FBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxFQUFFO2dCQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsT0FBTzthQUNQO1NBQ0Q7SUFDRixDQUFDO0lBRU0saUNBQWEsR0FBcEI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sbUNBQWUsR0FBdEI7UUFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLHdDQUFvQixHQUEzQjtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFTywrQkFBVyxHQUFuQjtRQUNDLElBQUksT0FBTyxHQUFpQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN2RCxLQUFtQixVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU8sRUFBRTtZQUF2QixJQUFJLE1BQU0sZ0JBQUE7WUFDZCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUV4RSxDQUFDO0lBQ0Qsd0RBQXdEO0lBQzFDLDBCQUFnQixHQUE5QixVQUErQixLQUFnQztRQUM5RCxJQUFJLENBQUMsR0FBVyxFQUFFLENBQUM7UUFDbkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxHQUFHO1lBQ3hCLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDLElBQUksSUFBSSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFYSxpQ0FBdUIsR0FBckMsVUFBc0MsT0FBcUI7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsR0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQWtCO1lBQ2xDLENBQUMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUM3QixDQUFDLElBQUksS0FBSyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUE7UUFDRixDQUFDLElBQUksTUFBTSxDQUFDO1FBQ1osT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRWEsNEJBQWtCLEdBQWhDLFVBQWlDLE9BQXFCO1FBQ3JELElBQUksQ0FBQyxHQUFXLEVBQUUsQ0FBQztRQUNuQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBa0I7WUFDbEMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzdCLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVhLDJCQUFpQixHQUEvQixVQUFnQyxNQUFrQjtRQUNqRCxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUYsZ0JBQUM7QUFBRCxDQXpJQSxBQXlJQyxDQXpJOEIsRUFBRSxDQUFDLFNBQVMsR0F5STFDO0FBeklZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVFbnVtIH0gZnJvbSBcIi4uL2ZzbS9zdGF0ZS9TdGF0ZUVudW1cIjtcclxuaW1wb3J0IHsgU3RhdGVJZGxlIH0gZnJvbSBcIi4uL2ZzbS9zdGF0ZS9TdGF0ZUlkbGVcIjtcclxuaW1wb3J0IHsgU3RhdGVNb3ZlIH0gZnJvbSBcIi4uL2ZzbS9zdGF0ZS9TdGF0ZU1vdmVcIjtcclxuaW1wb3J0IHsgU3RhdGVQZXJmb3JtQWN0aW9uIH0gZnJvbSBcIi4uL2ZzbS9zdGF0ZS9TdGF0ZVBlcmZvcm1BY3Rpb25cIjtcclxuaW1wb3J0IHsgU3RhdGVNYW5hZ2VyIH0gZnJvbSBcIi4uL2ZzbS9TdGF0ZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IEdvYXBQbGFubmVyIH0gZnJvbSBcIi4vR29hcFBsYW5uZXJcIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi9JR29hcFwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MDk6MzAgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDQgMTc6NDE6MzFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHb2FwQWdlbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdHByaXZhdGUgYXZhaWxhYmxlQWN0aW9uczogR29hcEFjdGlvbltdO1xyXG5cdHByaXZhdGUgY3VycmVudEFjdGlvbnM6IEdvYXBBY3Rpb25bXTtcclxuXHRwcml2YXRlIHN0YXRlTWdyOiBTdGF0ZU1hbmFnZXI7XHJcblx0cHJvdGVjdGVkIGdvYXA6IElHb2FwO1xyXG5cdHByaXZhdGUgcGxhbm5lcjogR29hcFBsYW5uZXI7XHJcblxyXG5cdHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5pbml0U3RhdGUoKTtcclxuXHRcdHRoaXMucGxhbm5lciA9IG5ldyBHb2FwUGxhbm5lcigpO1xyXG5cdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zID0gW107XHJcblx0XHR0aGlzLmN1cnJlbnRBY3Rpb25zID0gW107XHJcblx0XHR0aGlzLnN0YXRlTWdyLmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0U3RhdGUoKSB7XHJcblx0XHRsZXQgc3RhdGVNZ3IgPSB0aGlzLnN0YXRlTWdyID0gbmV3IFN0YXRlTWFuYWdlcih0aGlzKTtcclxuXHRcdHN0YXRlTWdyLnJlZ2lzdGVyU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSwgbmV3IFN0YXRlSWRsZSh0aGlzKSlcclxuXHRcdHN0YXRlTWdyLnJlZ2lzdGVyU3RhdGUoU3RhdGVFbnVtLlN0YXRlTW92ZSwgbmV3IFN0YXRlTW92ZSh0aGlzKSlcclxuXHRcdHN0YXRlTWdyLnJlZ2lzdGVyU3RhdGUoU3RhdGVFbnVtLlN0YXRlUGVyZm9ybUFjdGlvbiwgbmV3IFN0YXRlUGVyZm9ybUFjdGlvbih0aGlzKSlcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRHb2FwKCk6IElHb2FwIHtcclxuXHRcdHJldHVybiB0aGlzLmdvYXA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0R29hcCh2KSB7XHJcblx0XHR0aGlzLmdvYXAgPSB2XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0UGxhbm5lcigpOiBHb2FwUGxhbm5lciB7XHJcblx0XHRyZXR1cm4gdGhpcy5wbGFubmVyO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEF2YWxpYWJsZUFjdGlvbnMoKTogR29hcEFjdGlvbltdIHtcclxuXHRcdHJldHVybiB0aGlzLmF2YWlsYWJsZUFjdGlvbnM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0Q3VycmVudEFjdGlvbnMoY3VycmVudEFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xyXG5cdFx0dGhpcy5jdXJyZW50QWN0aW9ucyA9IGN1cnJlbnRBY3Rpb25zO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBlZWtDdXJyZW50QWN0aW9ucygpOiBHb2FwQWN0aW9uIHtcclxuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb25zWzBdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGRlcXVldWVDdXJyZW50QWN0aW9ucygpOiBHb2FwQWN0aW9uIHtcclxuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb25zLnNoaWZ0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0Q3VycmVudEFjdGlvbnMoKTogR29hcEFjdGlvbltdIHtcclxuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb25zO1xyXG5cdH1cclxuXHJcblxyXG5cdHB1YmxpYyBjaGFuZ2VTdGF0ZShrZXk6IHN0cmluZywgb2JqPzogYW55LCBpc0ZvcmNlPzogYm9vbGVhbikge1xyXG5cdFx0dGhpcy5zdGF0ZU1nci5jaGFuZ2VTdGF0ZShrZXksIG9iaiwgaXNGb3JjZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuc3RhdGVNZ3IudXBkYXRlKGRlbHRhKTtcclxuXHR9XHJcblx0cHVibGljIGFkZEFjdGlvbihhOiBHb2FwQWN0aW9uKSB7XHJcblx0XHR0aGlzLmF2YWlsYWJsZUFjdGlvbnMucHVzaChhKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRBY3Rpb248VCBleHRlbmRzIEdvYXBBY3Rpb24+KGNsczogeyBuZXcoKTogVCB9KSB7XHJcblx0XHRmb3IgKGxldCBhY3Rpb24gb2YgdGhpcy5hdmFpbGFibGVBY3Rpb25zKSB7XHJcblx0XHRcdGlmIChhY3Rpb24gaW5zdGFuY2VvZiBjbHMpIHtcclxuXHRcdFx0XHRyZXR1cm4gYWN0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0cHVibGljIHJlbW92ZUFjdGlvbihhY3Rpb246IEdvYXBBY3Rpb24pIHtcclxuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmF2YWlsYWJsZUFjdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0aWYgKHRoaXMuYXZhaWxhYmxlQWN0aW9uc1tpXSA9PSBhY3Rpb24pIHtcclxuXHRcdFx0XHR0aGlzLmF2YWlsYWJsZUFjdGlvbnMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGhhc0FjdGlvblBsYW4oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50QWN0aW9ucy5sZW5ndGggPiAwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNsZWFuQ3VyQWN0aW9ucygpIHtcclxuXHRcdHRoaXMuY3VycmVudEFjdGlvbnMubGVuZ3RoID0gMFxyXG5cdH1cclxuXHJcblx0cHVibGljIGNsZWFuQXZhbGFibGVBY3Rpb25zKCkge1xyXG5cdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zLmxlbmd0aCA9IDBcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbG9hZEFjdGlvbnMoKSB7XHJcblx0XHRsZXQgYWN0aW9uczogR29hcEFjdGlvbltdID0gdGhpcy5nZXRBdmFsaWFibGVBY3Rpb25zKCk7XHJcblx0XHRmb3IgKGxldCBhY3Rpb24gb2YgYWN0aW9ucykge1xyXG5cdFx0XHR0aGlzLmF2YWlsYWJsZUFjdGlvbnMucHVzaChhY3Rpb24pO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJGb3VuZCBhY3Rpb25zOiBcIiArIEdvYXBBZ2VudC5wcmV0dHlQcmludEFjdGlvbnMoYWN0aW9ucykpO1xyXG5cclxuXHR9XHJcblx0Ly8g6L6T5Ye6ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0cHVibGljIHN0YXRpYyBwcmV0dHlQcmludFN0YXRlKHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KSB7XHJcblx0XHRsZXQgczogc3RyaW5nID0gXCJcIjtcclxuXHRcdHN0YXRlLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuXHRcdFx0cyArPSBrZXkgKyBcIjpcIiArIHZhbHVlO1xyXG5cdFx0XHRzICs9IFwiLCBcIjtcclxuXHRcdH0pXHJcblx0XHRyZXR1cm4gcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRBY3Rpb25zUXVldWUoYWN0aW9uczogR29hcEFjdGlvbltdKTogc3RyaW5nIHtcclxuXHRcdGNvbnNvbGUubG9nKFwicHJldHR5UHJpbnRBY3Rpb25zUXVldWU6IFwiLCBhY3Rpb25zKVxyXG5cdFx0bGV0IHM6IHN0cmluZyA9IFwiXCI7XHJcblx0XHRhY3Rpb25zLmZvckVhY2goKGFjdGlvbjogR29hcEFjdGlvbikgPT4ge1xyXG5cdFx0XHRzICs9IGFjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdFx0XHRzICs9IFwiLT4gXCI7XHJcblx0XHR9KVxyXG5cdFx0cyArPSBcIkdPQUxcIjtcclxuXHRcdHJldHVybiBzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBwcmV0dHlQcmludEFjdGlvbnMoYWN0aW9uczogR29hcEFjdGlvbltdKSB7XHJcblx0XHRsZXQgczogc3RyaW5nID0gXCJcIjtcclxuXHRcdGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBHb2FwQWN0aW9uKSA9PiB7XHJcblx0XHRcdHMgKz0gYWN0aW9uLmNvbnN0cnVjdG9yLm5hbWU7XHJcblx0XHRcdHMgKz0gXCIsIFwiO1xyXG5cdFx0fSlcclxuXHRcdHJldHVybiBzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBwcmV0dHlQcmludEFjdGlvbihhY3Rpb246IEdvYXBBY3Rpb24pIHtcclxuXHRcdHJldHVybiBcIlwiICsgYWN0aW9uLmNvbnN0cnVjdG9yLm5hbWU7XHJcblx0fVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/Fire.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '382a6KIwExKTpqa1BIW2dPP', 'Fire');
// goap/Fire.ts

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
var VGameObject_1 = require("../src/app/base/VGameObject");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Fire = /** @class */ (function (_super) {
    __extends(Fire, _super);
    function Fire() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Fire = __decorate([
        ccclass
    ], Fire);
    return Fire;
}(VGameObject_1.VGameObject));
exports.default = Fire;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcRmlyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFFcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBa0Msd0JBQVc7SUFBN0M7O0lBRUEsQ0FBQztJQUZvQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBRXhCO0lBQUQsV0FBQztDQUZELEFBRUMsQ0FGaUMseUJBQVcsR0FFNUM7a0JBRm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gJy4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdCc7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXJlIGV4dGVuZHMgVkdhbWVPYmplY3Qge1xyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/goaps/GoapOutFire2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e59052yFc1M/Ln98qr2fmVT', 'GoapOutFire2');
// goap/goaps/GoapOutFire2.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionDataStatus_1 = require("../ActionDataStatus");
var DataMemory_1 = require("../DataMemory");
var GotoEatAction_1 = require("../GotoEatAction");
var GotoEquipmentAction_1 = require("../GotoEquipmentAction");
var GotoFireAction_1 = require("../GotoFireAction");
var GotoToiletAction_1 = require("../GotoToiletAction");
var GotSleepAction_1 = require("../GotSleepAction");
var GoapOutFire2 = /** @class */ (function () {
    function GoapOutFire2() {
        this.bMoveEnd = false;
        this.bMoving = false;
        /**拥有的actions */
        this.avaliableActions = [];
        this.memory = new DataMemory_1.default();
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isTolietOk, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isCanOutfire, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isEquipOk, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isFireOk, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isSleepOk, false);
    }
    GoapOutFire2.prototype.initAvaliableActions = function (goapAgent) {
        var actionCls = [
            GotoToiletAction_1.GotoToiletAction,
            GotSleepAction_1.GotSleepAction,
            GotoEatAction_1.GotoEatAction,
            GotoEquipmentAction_1.GotoEquipmentAction,
            GotoFireAction_1.GotoFireAction
        ];
        var action;
        for (var i = 0, len = actionCls.length; i < len; i++) {
            action = new actionCls[i]();
            action.goapAgent = goapAgent;
            this.avaliableActions.push(action);
        }
    };
    GoapOutFire2.prototype.getAvaliableActions = function () {
        return this.avaliableActions;
    };
    // 该计划的目标
    GoapOutFire2.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set(ActionDataStatus_1.ActionDataStatus.outFire, true);
        return goal;
    };
    GoapOutFire2.prototype.getWorldState = function () {
        var worldData = new Map();
        worldData.set(ActionDataStatus_1.ActionDataStatus.isTolietOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isTolietOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isCanOutfire, this.memory.get(ActionDataStatus_1.ActionDataStatus.isCanOutfire));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isEquipOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isEquipOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isFireOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isFireOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isSleepOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isSleepOk));
        return worldData;
    };
    GoapOutFire2.prototype.planFailed = function (failedGoal) {
        console.log("planFailed");
    };
    GoapOutFire2.prototype.planFound = function (goal, actions) {
        console.log("planFound");
    };
    GoapOutFire2.prototype.actionsFinished = function () {
        console.log("Actions completed");
    };
    GoapOutFire2.prototype.planAborted = function (aborter) {
        console.log("planAborted");
    };
    GoapOutFire2.prototype.moveAgent = function (nextAction, delta) {
        var _this = this;
        var target = nextAction.target;
        var goapAgent = nextAction.goapAgent;
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
            goapAgent.node.stopAllActions();
            goapAgent.node.runAction(cc.sequence(actions));
        }
        return this.bMoveEnd;
    };
    return GoapOutFire2;
}());
exports.default = GoapOutFire2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcZ29hcHNcXEdvYXBPdXRGaXJlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHdEQUF1RDtBQUN2RCw0Q0FBdUM7QUFDdkMsa0RBQWlEO0FBQ2pELDhEQUE2RDtBQUM3RCxvREFBbUQ7QUFDbkQsd0RBQXVEO0FBQ3ZELG9EQUFtRDtBQUVuRDtJQUtJO1FBSEEsYUFBUSxHQUFZLEtBQUssQ0FBQTtRQUN6QixZQUFPLEdBQVksS0FBSyxDQUFBO1FBV3hCLGdCQUFnQjtRQUNSLHFCQUFnQixHQUFpQixFQUFFLENBQUM7UUFUeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLG9CQUFVLEVBQUUsQ0FBQTtRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFJTSwyQ0FBb0IsR0FBM0IsVUFBNEIsU0FBb0I7UUFDNUMsSUFBSSxTQUFTLEdBQVU7WUFDbkIsbUNBQWdCO1lBQ2QsK0JBQWM7WUFDZCw2QkFBYTtZQUNiLHlDQUFtQjtZQUNuQiwrQkFBYztTQUNuQixDQUFBO1FBQ0QsSUFBSSxNQUFrQixDQUFDO1FBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEQsTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7WUFDM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFRCwwQ0FBbUIsR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsU0FBUztJQUNULHNDQUFlLEdBQWY7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0ksSUFBSSxTQUFTLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQy9ELFNBQVMsQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDekYsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM3RixTQUFTLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckYsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN2RixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLFVBQStCO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxJQUF5QixFQUFFLE9BQXFCO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxPQUFtQjtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsVUFBc0IsRUFBRSxLQUFhO1FBQS9DLGlCQXFCQztRQXBCRyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7WUFDckIsT0FBTyxJQUFJLENBQUE7U0FDZDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFDbkIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFBO1lBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3JFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Z0JBQ3BCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO2dCQUNwQixVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDSCxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQy9CLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtTQUNqRDtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUN4QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQTNGQSxBQTJGQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiO1xyXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudFwiO1xyXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2FpL2dvYXAvSUdvYXBcIjtcclxuaW1wb3J0IHsgQWN0aW9uRGF0YVN0YXR1cyB9IGZyb20gXCIuLi9BY3Rpb25EYXRhU3RhdHVzXCI7XHJcbmltcG9ydCBEYXRhTWVtb3J5IGZyb20gXCIuLi9EYXRhTWVtb3J5XCI7XHJcbmltcG9ydCB7IEdvdG9FYXRBY3Rpb24gfSBmcm9tIFwiLi4vR290b0VhdEFjdGlvblwiO1xyXG5pbXBvcnQgeyBHb3RvRXF1aXBtZW50QWN0aW9uIH0gZnJvbSBcIi4uL0dvdG9FcXVpcG1lbnRBY3Rpb25cIjtcclxuaW1wb3J0IHsgR290b0ZpcmVBY3Rpb24gfSBmcm9tIFwiLi4vR290b0ZpcmVBY3Rpb25cIjtcclxuaW1wb3J0IHsgR290b1RvaWxldEFjdGlvbiB9IGZyb20gXCIuLi9Hb3RvVG9pbGV0QWN0aW9uXCI7XHJcbmltcG9ydCB7IEdvdFNsZWVwQWN0aW9uIH0gZnJvbSBcIi4uL0dvdFNsZWVwQWN0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb2FwT3V0RmlyZTIgaW1wbGVtZW50cyBJR29hcCB7XHJcbiAgICBtZW1vcnk6IERhdGFNZW1vcnlcclxuICAgIGJNb3ZlRW5kOiBib29sZWFuID0gZmFsc2VcclxuICAgIGJNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVtb3J5ID0gbmV3IERhdGFNZW1vcnkoKVxyXG4gICAgICAgIHRoaXMubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIGZhbHNlKVxyXG4gICAgICAgIHRoaXMubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCBmYWxzZSlcclxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0ZpcmVPaywgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNTbGVlcE9rLCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICAvKirmi6XmnInnmoRhY3Rpb25zICovXHJcbiAgICBwcml2YXRlIGF2YWxpYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IFtdO1xyXG4gICAgcHVibGljIGluaXRBdmFsaWFibGVBY3Rpb25zKGdvYXBBZ2VudDogR29hcEFnZW50KSB7XHJcbiAgICAgICAgbGV0IGFjdGlvbkNsczogYW55W10gPSBbXHJcbiAgICAgICAgICAgIEdvdG9Ub2lsZXRBY3Rpb25cclxuICAgICAgICAgICAgLCBHb3RTbGVlcEFjdGlvblxyXG4gICAgICAgICAgICAsIEdvdG9FYXRBY3Rpb25cclxuICAgICAgICAgICAgLCBHb3RvRXF1aXBtZW50QWN0aW9uXHJcbiAgICAgICAgICAgICwgR290b0ZpcmVBY3Rpb25cclxuICAgICAgICBdXHJcbiAgICAgICAgbGV0IGFjdGlvbjogR29hcEFjdGlvbjtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYWN0aW9uQ2xzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IG5ldyBhY3Rpb25DbHNbaV0oKVxyXG4gICAgICAgICAgICBhY3Rpb24uZ29hcEFnZW50ID0gZ29hcEFnZW50XHJcbiAgICAgICAgICAgIHRoaXMuYXZhbGlhYmxlQWN0aW9ucy5wdXNoKGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEF2YWxpYWJsZUFjdGlvbnMoKTogR29hcEFjdGlvbltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdmFsaWFibGVBY3Rpb25zXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6K+l6K6h5YiS55qE55uu5qCHXHJcbiAgICBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XHJcbiAgICAgICAgbGV0IGdvYWwgPSBuZXcgTWFwPHN0cmluZywgT2JqZWN0PigpO1xyXG4gICAgICAgIGdvYWwuc2V0KEFjdGlvbkRhdGFTdGF0dXMub3V0RmlyZSwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGdvYWxcclxuICAgIH1cclxuXHJcbiAgICBnZXRXb3JsZFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xyXG4gICAgICAgIGxldCB3b3JsZERhdGE6IE1hcDxzdHJpbmcsIE9iamVjdD4gPSBuZXcgTWFwPHN0cmluZywgT2JqZWN0PigpO1xyXG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1RvbGlldE9rLCB0aGlzLm1lbW9yeS5nZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1RvbGlldE9rKSk7XHJcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgdGhpcy5tZW1vcnkuZ2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlKSk7XHJcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRXF1aXBPaywgdGhpcy5tZW1vcnkuZ2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rKSk7XHJcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rLCB0aGlzLm1lbW9yeS5nZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0ZpcmVPaykpO1xyXG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1NsZWVwT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzU2xlZXBPaykpO1xyXG4gICAgICAgIHJldHVybiB3b3JsZERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcGxhbkZhaWxlZChmYWlsZWRHb2FsOiBNYXA8c3RyaW5nLCBPYmplY3Q+KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGFuRmFpbGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcGxhbkZvdW5kKGdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4sIGFjdGlvbnM6IEdvYXBBY3Rpb25bXSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxhbkZvdW5kXCIpXHJcbiAgICB9XHJcblxyXG4gICAgYWN0aW9uc0ZpbmlzaGVkKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWN0aW9ucyBjb21wbGV0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcGxhbkFib3J0ZWQoYWJvcnRlcjogR29hcEFjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxhbkFib3J0ZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlQWdlbnQobmV4dEFjdGlvbjogR29hcEFjdGlvbiwgZGVsdGE6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBuZXh0QWN0aW9uLnRhcmdldDtcclxuICAgICAgICBsZXQgZ29hcEFnZW50ID0gbmV4dEFjdGlvbi5nb2FwQWdlbnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuYk1vdmVFbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5iTW92aW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYk1vdmluZyA9IHRydWVcclxuICAgICAgICAgICAgbGV0IGFjdGlvbnMgPSBbXVxyXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MubW92ZVRvKDIsIG5ldyBjYy5WZWMyKHRhcmdldC5ub2RlLngsIHRhcmdldC5ub2RlLnkpKSlcclxuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYk1vdmVFbmQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJNb3ZpbmcgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgbmV4dEFjdGlvbi5zZXRJblJhbmdlKHRydWUpO1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgZ29hcEFnZW50Lm5vZGUuc3RvcEFsbEFjdGlvbnMoKVxyXG4gICAgICAgICAgICBnb2FwQWdlbnQubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9ucykpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5iTW92ZUVuZFxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/view/EnvironmentView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8cff6UW7ClEN5DTWr6y35ws', 'EnvironmentView');
// src/app/view/EnvironmentView.ts

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
exports.EnvironmentView = void 0;
var BackPackComponent_1 = require("../gamedata/BackPackComponent");
var ChoppingBlockComponent_1 = require("../gamedata/ChoppingBlockComponent");
var Environment_1 = require("../gamedata/Environment");
var ForgeComponent_1 = require("../gamedata/ForgeComponent");
var IronRockComponent_1 = require("../gamedata/IronRockComponent");
var Blacksmith_1 = require("../gamedata/labourers/Blacksmith");
var Logger_1 = require("../gamedata/labourers/Logger");
var Miner_1 = require("../gamedata/labourers/Miner");
var WoodCutter_1 = require("../gamedata/labourers/WoodCutter");
var SupplyPileComponent_1 = require("../gamedata/SupplyPileComponent");
var TreeComponent_1 = require("../gamedata/TreeComponent");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EnvironmentView = /** @class */ (function (_super) {
    __extends(EnvironmentView, _super);
    function EnvironmentView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.supplyPileComp1 = null;
        _this.supplyPileComp2 = null;
        _this.ironRockComp1 = null;
        _this.ironRockComp2 = null;
        _this.ironRockComp3 = null;
        _this.treeComp1 = null;
        _this.treeComp2 = null;
        _this.treeComp3 = null;
        _this.treeComp4 = null;
        _this.choppingBlockComp = null;
        _this.forgeComp = null;
        _this.blackSmith = null;
        _this.logger = null;
        _this.miner = null;
        _this.woodCutter = null;
        _this.curTime = 0;
        return _this;
    }
    EnvironmentView.prototype.start = function () {
        this.initEnvironment();
    };
    EnvironmentView.prototype.initEnvironment = function () {
        Environment_1.Environment.supplyPileComps = [this.supplyPileComp1, this.supplyPileComp2];
        Environment_1.Environment.rockComps = [this.ironRockComp1, this.ironRockComp2, this.ironRockComp3];
        Environment_1.Environment.treeComps = [this.treeComp1, this.treeComp2, this.treeComp3, this.treeComp4];
        Environment_1.Environment.forgeComps = [this.forgeComp];
        Environment_1.Environment.choppingBlockComps = [this.choppingBlockComp];
        // 设置backpack
        var smithBP = new BackPackComponent_1.BackPackComponent(0, 0, 0);
        this.blackSmith.setBackPack(smithBP);
        var loggerBP = new BackPackComponent_1.BackPackComponent(0, 0, 0);
        this.logger.setBackPack(loggerBP);
        var minerBP = new BackPackComponent_1.BackPackComponent(0, 0, 0);
        this.miner.setBackPack(minerBP);
        var woodCutterBP = new BackPackComponent_1.BackPackComponent(0, 0, 0);
        this.woodCutter.setBackPack(woodCutterBP);
        this.startTick();
        // this.update(3);
    };
    /**开始游戏stick */
    EnvironmentView.prototype.startTick = function () {
        //this.lastTimeStamp = TimeUtil.getTime();
        //	egret.startTick(this.updateTimeStamp, this);
    };
    EnvironmentView.prototype.updateTimeStamp = function (timeStamp) {
        this.update(timeStamp - this.lastTimeStamp);
        this.lastTimeStamp = timeStamp;
        return true;
    };
    EnvironmentView.prototype.update = function (dt) {
        //this.curTime -= dt
        //if (this.curTime <= 0) {
        //this.curTime = 1
        this.miner.update(dt);
        this.blackSmith.update(dt);
        this.logger.update(dt);
        this.woodCutter.update(dt);
        //}
    };
    __decorate([
        property(SupplyPileComponent_1.SupplyPileComponent)
    ], EnvironmentView.prototype, "supplyPileComp1", void 0);
    __decorate([
        property(SupplyPileComponent_1.SupplyPileComponent)
    ], EnvironmentView.prototype, "supplyPileComp2", void 0);
    __decorate([
        property(IronRockComponent_1.IronRockComponent)
    ], EnvironmentView.prototype, "ironRockComp1", void 0);
    __decorate([
        property(IronRockComponent_1.IronRockComponent)
    ], EnvironmentView.prototype, "ironRockComp2", void 0);
    __decorate([
        property(IronRockComponent_1.IronRockComponent)
    ], EnvironmentView.prototype, "ironRockComp3", void 0);
    __decorate([
        property(TreeComponent_1.TreeComponent)
    ], EnvironmentView.prototype, "treeComp1", void 0);
    __decorate([
        property(TreeComponent_1.TreeComponent)
    ], EnvironmentView.prototype, "treeComp2", void 0);
    __decorate([
        property(TreeComponent_1.TreeComponent)
    ], EnvironmentView.prototype, "treeComp3", void 0);
    __decorate([
        property(TreeComponent_1.TreeComponent)
    ], EnvironmentView.prototype, "treeComp4", void 0);
    __decorate([
        property(ChoppingBlockComponent_1.ChoppingBlockComponent)
    ], EnvironmentView.prototype, "choppingBlockComp", void 0);
    __decorate([
        property(ForgeComponent_1.ForgeComponent)
    ], EnvironmentView.prototype, "forgeComp", void 0);
    __decorate([
        property(Blacksmith_1.Blacksmith)
    ], EnvironmentView.prototype, "blackSmith", void 0);
    __decorate([
        property(Logger_1.Logger)
    ], EnvironmentView.prototype, "logger", void 0);
    __decorate([
        property(Miner_1.Miner)
    ], EnvironmentView.prototype, "miner", void 0);
    __decorate([
        property(WoodCutter_1.WoodCutter)
    ], EnvironmentView.prototype, "woodCutter", void 0);
    EnvironmentView = __decorate([
        ccclass
    ], EnvironmentView);
    return EnvironmentView;
}(cc.Component));
exports.EnvironmentView = EnvironmentView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXHZpZXdcXEVudmlyb25tZW50Vmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQWtFO0FBQ2xFLDZFQUE0RTtBQUM1RSx1REFBc0Q7QUFDdEQsNkRBQTREO0FBQzVELG1FQUFrRTtBQUNsRSwrREFBOEQ7QUFDOUQsdURBQXNEO0FBQ3RELHFEQUFvRDtBQUNwRCwrREFBOEQ7QUFDOUQsdUVBQXNFO0FBQ3RFLDJEQUEwRDtBQUNwRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFxQyxtQ0FBWTtJQUFqRDtRQUFBLHFFQXdGQztRQXRGTyxxQkFBZSxHQUF3QixJQUFJLENBQUM7UUFFNUMscUJBQWUsR0FBd0IsSUFBSSxDQUFDO1FBRzNDLG1CQUFhLEdBQXNCLElBQUksQ0FBQTtRQUV2QyxtQkFBYSxHQUFzQixJQUFJLENBQUE7UUFFdkMsbUJBQWEsR0FBc0IsSUFBSSxDQUFBO1FBR3hDLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBR2hDLHVCQUFpQixHQUEyQixJQUFJLENBQUM7UUFFakQsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFHakMsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIsWUFBTSxHQUFXLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBRXBCLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRXJDLGFBQU8sR0FBRyxDQUFDLENBQUE7O0lBb0RaLENBQUM7SUFuREEsK0JBQUssR0FBTDtRQUNDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8seUNBQWUsR0FBdkI7UUFDQyx5QkFBVyxDQUFDLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNFLHlCQUFXLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNyRix5QkFBVyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6Rix5QkFBVyxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyx5QkFBVyxDQUFDLGtCQUFrQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFHMUQsYUFBYTtRQUNiLElBQUksT0FBTyxHQUFHLElBQUkscUNBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyQyxJQUFJLFFBQVEsR0FBRyxJQUFJLHFDQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWhDLElBQUksWUFBWSxHQUFHLElBQUkscUNBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsa0JBQWtCO0lBQ25CLENBQUM7SUFDRCxlQUFlO0lBQ1IsbUNBQVMsR0FBaEI7UUFDQywwQ0FBMEM7UUFDMUMsK0NBQStDO0lBQ2hELENBQUM7SUFHTyx5Q0FBZSxHQUF2QixVQUF3QixTQUFTO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDTSxnQ0FBTSxHQUFiLFVBQWMsRUFBRTtRQUNmLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLEdBQUc7SUFDSixDQUFDO0lBckZEO1FBREMsUUFBUSxDQUFDLHlDQUFtQixDQUFDOzREQUNxQjtJQUVuRDtRQURDLFFBQVEsQ0FBQyx5Q0FBbUIsQ0FBQzs0REFDcUI7SUFHbkQ7UUFEQyxRQUFRLENBQUMscUNBQWlCLENBQUM7MERBQ21CO0lBRS9DO1FBREMsUUFBUSxDQUFDLHFDQUFpQixDQUFDOzBEQUNtQjtJQUUvQztRQURDLFFBQVEsQ0FBQyxxQ0FBaUIsQ0FBQzswREFDbUI7SUFHL0M7UUFEQyxRQUFRLENBQUMsNkJBQWEsQ0FBQztzREFDZTtJQUV2QztRQURDLFFBQVEsQ0FBQyw2QkFBYSxDQUFDO3NEQUNlO0lBRXZDO1FBREMsUUFBUSxDQUFDLDZCQUFhLENBQUM7c0RBQ2U7SUFFdkM7UUFEQyxRQUFRLENBQUMsNkJBQWEsQ0FBQztzREFDZTtJQUd2QztRQURDLFFBQVEsQ0FBQywrQ0FBc0IsQ0FBQzs4REFDdUI7SUFFeEQ7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQztzREFDZTtJQUd4QztRQURDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDO3VEQUNnQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxlQUFNLENBQUM7bURBQ1k7SUFFN0I7UUFEQyxRQUFRLENBQUMsYUFBSyxDQUFDO2tEQUNXO0lBRTNCO1FBREMsUUFBUSxDQUFDLHVCQUFVLENBQUM7dURBQ2dCO0lBbEN6QixlQUFlO1FBRDNCLE9BQU87T0FDSyxlQUFlLENBd0YzQjtJQUFELHNCQUFDO0NBeEZELEFBd0ZDLENBeEZvQyxFQUFFLENBQUMsU0FBUyxHQXdGaEQ7QUF4RlksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9nYW1lZGF0YS9CYWNrUGFja0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaG9wcGluZ0Jsb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dhbWVkYXRhL0Nob3BwaW5nQmxvY2tDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IHsgRm9yZ2VDb21wb25lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvRm9yZ2VDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSXJvblJvY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvSXJvblJvY2tDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQmxhY2tzbWl0aCB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvQmxhY2tzbWl0aFwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvbGFib3VyZXJzL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBNaW5lciB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvTWluZXJcIjtcclxuaW1wb3J0IHsgV29vZEN1dHRlciB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvV29vZEN1dHRlclwiO1xyXG5pbXBvcnQgeyBTdXBwbHlQaWxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dhbWVkYXRhL1N1cHBseVBpbGVDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVHJlZUNvbXBvbmVudCB9IGZyb20gXCIuLi9nYW1lZGF0YS9UcmVlQ29tcG9uZW50XCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudFZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdEBwcm9wZXJ0eShTdXBwbHlQaWxlQ29tcG9uZW50KVxyXG5cdHB1YmxpYyBzdXBwbHlQaWxlQ29tcDE6IFN1cHBseVBpbGVDb21wb25lbnQgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShTdXBwbHlQaWxlQ29tcG9uZW50KVxyXG5cdHB1YmxpYyBzdXBwbHlQaWxlQ29tcDI6IFN1cHBseVBpbGVDb21wb25lbnQgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoSXJvblJvY2tDb21wb25lbnQpXHJcblx0cHJpdmF0ZSBpcm9uUm9ja0NvbXAxOiBJcm9uUm9ja0NvbXBvbmVudCA9IG51bGxcclxuXHRAcHJvcGVydHkoSXJvblJvY2tDb21wb25lbnQpXHJcblx0cHJpdmF0ZSBpcm9uUm9ja0NvbXAyOiBJcm9uUm9ja0NvbXBvbmVudCA9IG51bGxcclxuXHRAcHJvcGVydHkoSXJvblJvY2tDb21wb25lbnQpXHJcblx0cHJpdmF0ZSBpcm9uUm9ja0NvbXAzOiBJcm9uUm9ja0NvbXBvbmVudCA9IG51bGxcclxuXHJcblx0QHByb3BlcnR5KFRyZWVDb21wb25lbnQpXHJcblx0cHVibGljIHRyZWVDb21wMTogVHJlZUNvbXBvbmVudCA9IG51bGw7XHJcblx0QHByb3BlcnR5KFRyZWVDb21wb25lbnQpXHJcblx0cHVibGljIHRyZWVDb21wMjogVHJlZUNvbXBvbmVudCA9IG51bGw7XHJcblx0QHByb3BlcnR5KFRyZWVDb21wb25lbnQpXHJcblx0cHVibGljIHRyZWVDb21wMzogVHJlZUNvbXBvbmVudCA9IG51bGw7XHJcblx0QHByb3BlcnR5KFRyZWVDb21wb25lbnQpXHJcblx0cHVibGljIHRyZWVDb21wNDogVHJlZUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShDaG9wcGluZ0Jsb2NrQ29tcG9uZW50KVxyXG5cdHB1YmxpYyBjaG9wcGluZ0Jsb2NrQ29tcDogQ2hvcHBpbmdCbG9ja0NvbXBvbmVudCA9IG51bGw7XHJcblx0QHByb3BlcnR5KEZvcmdlQ29tcG9uZW50KVxyXG5cdHB1YmxpYyBmb3JnZUNvbXA6IEZvcmdlQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KEJsYWNrc21pdGgpXHJcblx0cHVibGljIGJsYWNrU21pdGg6IEJsYWNrc21pdGggPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShMb2dnZXIpXHJcblx0cHVibGljIGxvZ2dlcjogTG9nZ2VyID0gbnVsbDtcclxuXHRAcHJvcGVydHkoTWluZXIpXHJcblx0cHVibGljIG1pbmVyOiBNaW5lciA9IG51bGw7XHJcblx0QHByb3BlcnR5KFdvb2RDdXR0ZXIpXHJcblx0cHVibGljIHdvb2RDdXR0ZXI6IFdvb2RDdXR0ZXIgPSBudWxsO1xyXG5cclxuXHRjdXJUaW1lID0gMFxyXG5cdHN0YXJ0KCkge1xyXG5cdFx0dGhpcy5pbml0RW52aXJvbm1lbnQoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdEVudmlyb25tZW50KCkge1xyXG5cdFx0RW52aXJvbm1lbnQuc3VwcGx5UGlsZUNvbXBzID0gW3RoaXMuc3VwcGx5UGlsZUNvbXAxLCB0aGlzLnN1cHBseVBpbGVDb21wMl07XHJcblx0XHRFbnZpcm9ubWVudC5yb2NrQ29tcHMgPSBbdGhpcy5pcm9uUm9ja0NvbXAxLCB0aGlzLmlyb25Sb2NrQ29tcDIsIHRoaXMuaXJvblJvY2tDb21wM107XHJcblx0XHRFbnZpcm9ubWVudC50cmVlQ29tcHMgPSBbdGhpcy50cmVlQ29tcDEsIHRoaXMudHJlZUNvbXAyLCB0aGlzLnRyZWVDb21wMywgdGhpcy50cmVlQ29tcDRdO1xyXG5cclxuXHRcdEVudmlyb25tZW50LmZvcmdlQ29tcHMgPSBbdGhpcy5mb3JnZUNvbXBdO1xyXG5cdFx0RW52aXJvbm1lbnQuY2hvcHBpbmdCbG9ja0NvbXBzID0gW3RoaXMuY2hvcHBpbmdCbG9ja0NvbXBdO1xyXG5cclxuXHJcblx0XHQvLyDorr7nva5iYWNrcGFja1xyXG5cdFx0bGV0IHNtaXRoQlAgPSBuZXcgQmFja1BhY2tDb21wb25lbnQoMCwgMCwgMCk7XHJcblx0XHR0aGlzLmJsYWNrU21pdGguc2V0QmFja1BhY2soc21pdGhCUCk7XHJcblxyXG5cdFx0bGV0IGxvZ2dlckJQID0gbmV3IEJhY2tQYWNrQ29tcG9uZW50KDAsIDAsIDApO1xyXG5cdFx0dGhpcy5sb2dnZXIuc2V0QmFja1BhY2sobG9nZ2VyQlApO1xyXG5cclxuXHRcdGxldCBtaW5lckJQID0gbmV3IEJhY2tQYWNrQ29tcG9uZW50KDAsIDAsIDApO1xyXG5cdFx0dGhpcy5taW5lci5zZXRCYWNrUGFjayhtaW5lckJQKTtcclxuXHJcblx0XHRsZXQgd29vZEN1dHRlckJQID0gbmV3IEJhY2tQYWNrQ29tcG9uZW50KDAsIDAsIDApO1xyXG5cdFx0dGhpcy53b29kQ3V0dGVyLnNldEJhY2tQYWNrKHdvb2RDdXR0ZXJCUCk7XHJcblxyXG5cdFx0dGhpcy5zdGFydFRpY2soKTtcclxuXHRcdC8vIHRoaXMudXBkYXRlKDMpO1xyXG5cdH1cclxuXHQvKirlvIDlp4vmuLjmiI9zdGljayAqL1xyXG5cdHB1YmxpYyBzdGFydFRpY2soKSB7XHJcblx0XHQvL3RoaXMubGFzdFRpbWVTdGFtcCA9IFRpbWVVdGlsLmdldFRpbWUoKTtcclxuXHRcdC8vXHRlZ3JldC5zdGFydFRpY2sodGhpcy51cGRhdGVUaW1lU3RhbXAsIHRoaXMpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsYXN0VGltZVN0YW1wOiBudW1iZXI7XHJcblx0cHJpdmF0ZSB1cGRhdGVUaW1lU3RhbXAodGltZVN0YW1wKTogYm9vbGVhbiB7XHJcblx0XHR0aGlzLnVwZGF0ZSh0aW1lU3RhbXAgLSB0aGlzLmxhc3RUaW1lU3RhbXApO1xyXG5cdFx0dGhpcy5sYXN0VGltZVN0YW1wID0gdGltZVN0YW1wO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHB1YmxpYyB1cGRhdGUoZHQpIHtcclxuXHRcdC8vdGhpcy5jdXJUaW1lIC09IGR0XHJcblx0XHQvL2lmICh0aGlzLmN1clRpbWUgPD0gMCkge1xyXG5cdFx0Ly90aGlzLmN1clRpbWUgPSAxXHJcblx0XHR0aGlzLm1pbmVyLnVwZGF0ZShkdCk7XHJcblx0XHR0aGlzLmJsYWNrU21pdGgudXBkYXRlKGR0KTtcclxuXHRcdHRoaXMubG9nZ2VyLnVwZGF0ZShkdCk7XHJcblx0XHR0aGlzLndvb2RDdXR0ZXIudXBkYXRlKGR0KTtcclxuXHRcdC8vfVxyXG5cdH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/Eating.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f62c247xxhIcrPSO+Im+mnW', 'Eating');
// goap/Eating.ts

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
var VGameObject_1 = require("../src/app/base/VGameObject");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Eating = /** @class */ (function (_super) {
    __extends(Eating, _super);
    function Eating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Eating = __decorate([
        ccclass
    ], Eating);
    return Eating;
}(VGameObject_1.VGameObject));
exports.default = Eating;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcRWF0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUVwRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUFzQywwQkFBVztJQUFqRDs7SUFFQSxDQUFDO0lBRnNCLE1BQU07UUFENUIsT0FBTztPQUNlLE1BQU0sQ0FFNUI7SUFBRCxhQUFDO0NBRkQsQUFFQyxDQUZxQyx5QkFBVyxHQUVoRDtrQkFGc0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSAnLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0JztcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgICBkZWZhdWx0IGNsYXNzIEVhdGluZyBleHRlbmRzIFZHYW1lT2JqZWN0IHtcclxuICAgXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/Env.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b411321dG1Dr7ZuUYgk/MNH', 'Env');
// goap/Env.ts

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
var Environment_1 = require("../src/app/gamedata/Environment");
var Eating_1 = require("./Eating");
var Equip_1 = require("./Equip");
var Fire_1 = require("./Fire");
var Sleep_1 = require("./Sleep");
var StoreA_1 = require("./StoreA");
var Toilet_1 = require("./Toilet");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Env = /** @class */ (function (_super) {
    __extends(Env, _super);
    function Env() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toilet = null;
        _this.fire = null;
        _this.equip = null;
        _this.eating = null;
        _this.sleep = null;
        _this.storeA = null;
        return _this;
    }
    Env.prototype.start = function () {
        Environment_1.Environment.toiletTarget = this.toilet;
        Environment_1.Environment.fireTarget = this.fire;
        Environment_1.Environment.eatingTarget = this.eating;
        Environment_1.Environment.equipTarget = this.equip;
        Environment_1.Environment.sleepTarget = this.sleep;
        Environment_1.Environment.storeA = this.storeA;
    };
    __decorate([
        property(Toilet_1.default)
    ], Env.prototype, "toilet", void 0);
    __decorate([
        property(Fire_1.default)
    ], Env.prototype, "fire", void 0);
    __decorate([
        property(Equip_1.default)
    ], Env.prototype, "equip", void 0);
    __decorate([
        property(Eating_1.default)
    ], Env.prototype, "eating", void 0);
    __decorate([
        property(Sleep_1.default)
    ], Env.prototype, "sleep", void 0);
    __decorate([
        property(StoreA_1.default)
    ], Env.prototype, "storeA", void 0);
    Env = __decorate([
        ccclass
    ], Env);
    return Env;
}(cc.Component));
exports.default = Env;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcRW52LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtEQUE4RDtBQUM5RCxtQ0FBOEI7QUFDOUIsaUNBQTRCO0FBQzVCLCtCQUEwQjtBQUMxQixpQ0FBNEI7QUFDNUIsbUNBQThCO0FBQzlCLG1DQUE4QjtBQUV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQTJCQztRQXpCRyxZQUFNLEdBQVcsSUFBSSxDQUFBO1FBR3JCLFVBQUksR0FBVyxJQUFJLENBQUE7UUFHbkIsV0FBSyxHQUFXLElBQUksQ0FBQTtRQUdwQixZQUFNLEdBQVcsSUFBSSxDQUFBO1FBR3JCLFdBQUssR0FBVyxJQUFJLENBQUE7UUFHcEIsWUFBTSxHQUFXLElBQUksQ0FBQTs7SUFVekIsQ0FBQztJQVJHLG1CQUFLLEdBQUw7UUFDSSx5QkFBVyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQ3RDLHlCQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7UUFDbEMseUJBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUN0Qyx5QkFBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3BDLHlCQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDcEMseUJBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUNwQyxDQUFDO0lBeEJEO1FBREMsUUFBUSxDQUFDLGdCQUFNLENBQUM7dUNBQ0k7SUFHckI7UUFEQyxRQUFRLENBQUMsY0FBSSxDQUFDO3FDQUNJO0lBR25CO1FBREMsUUFBUSxDQUFDLGVBQUssQ0FBQztzQ0FDSTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDO3VDQUNJO0lBR3JCO1FBREMsUUFBUSxDQUFDLGVBQUssQ0FBQztzQ0FDSTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDO3VDQUNJO0lBakJKLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0EyQnZCO0lBQUQsVUFBQztDQTNCRCxBQTJCQyxDQTNCZ0MsRUFBRSxDQUFDLFNBQVMsR0EyQjVDO2tCQTNCb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCI7XHJcbmltcG9ydCBFYXRpbmcgZnJvbSBcIi4vRWF0aW5nXCI7XHJcbmltcG9ydCBFcXVpcCBmcm9tIFwiLi9FcXVpcFwiO1xyXG5pbXBvcnQgRmlyZSBmcm9tIFwiLi9GaXJlXCI7XHJcbmltcG9ydCBTbGVlcCBmcm9tIFwiLi9TbGVlcFwiO1xyXG5pbXBvcnQgU3RvcmVBIGZyb20gXCIuL1N0b3JlQVwiO1xyXG5pbXBvcnQgVG9pbGV0IGZyb20gXCIuL1RvaWxldFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoVG9pbGV0KVxyXG4gICAgdG9pbGV0OiBUb2lsZXQgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KEZpcmUpXHJcbiAgICBmaXJlOiBUb2lsZXQgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KEVxdWlwKVxyXG4gICAgZXF1aXA6IFRvaWxldCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoRWF0aW5nKVxyXG4gICAgZWF0aW5nOiBUb2lsZXQgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KFNsZWVwKVxyXG4gICAgc2xlZXA6IFRvaWxldCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoU3RvcmVBKVxyXG4gICAgc3RvcmVBOiBTdG9yZUEgPSBudWxsXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgRW52aXJvbm1lbnQudG9pbGV0VGFyZ2V0ID0gdGhpcy50b2lsZXRcclxuICAgICAgICBFbnZpcm9ubWVudC5maXJlVGFyZ2V0ID0gdGhpcy5maXJlXHJcbiAgICAgICAgRW52aXJvbm1lbnQuZWF0aW5nVGFyZ2V0ID0gdGhpcy5lYXRpbmdcclxuICAgICAgICBFbnZpcm9ubWVudC5lcXVpcFRhcmdldCA9IHRoaXMuZXF1aXBcclxuICAgICAgICBFbnZpcm9ubWVudC5zbGVlcFRhcmdldCA9IHRoaXMuc2xlZXBcclxuICAgICAgICBFbnZpcm9ubWVudC5zdG9yZUEgPSB0aGlzLnN0b3JlQVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Entity.prototype.updateTimer = function (delta) {
        this.update(delta);
    };
    Entity = __decorate([
        ccclass
    ], Entity);
    return Entity;
}(GoapAgent_1.GoapAgent));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDBEQUF5RDtBQUtuRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE2QywwQkFBUztJQUF0RDs7SUFJQSxDQUFDO0lBSFUsNEJBQVcsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFIeUIsTUFBTTtRQURuQyxPQUFPO09BQ3NCLE1BQU0sQ0FJbkM7SUFBRCxhQUFDO0NBSkQsQUFJQyxDQUo0QyxxQkFBUyxHQUlyRDtrQkFKNkIsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tICcuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvbic7XHJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gJy4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWdlbnQnO1xyXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gJy4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcCc7XHJcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tICcuL0FjdGlvbkRhdGFTdGF0dXMnO1xyXG5pbXBvcnQgRGF0YU1lbW9yeSBmcm9tICcuL0RhdGFNZW1vcnknO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGFic3RyYWN0IGRlZmF1bHQgY2xhc3MgRW50aXR5IGV4dGVuZHMgR29hcEFnZW50ICB7XHJcbiAgICBwdWJsaWMgdXBkYXRlVGltZXIoZGVsdGE6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKGRlbHRhKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/GotSleepAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0cd97qZZFBNNowKRYMbHfxX', 'GotSleepAction');
// goap/GotSleepAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GotSleepAction = void 0;
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Environment_1 = require("../src/app/gamedata/Environment");
var TimeUtil_1 = require("../src/utils/TimeUtil");
var ActionDataStatus_1 = require("./ActionDataStatus");
var GotSleepAction = /** @class */ (function (_super) {
    __extends(GotSleepAction, _super);
    function GotSleepAction() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 1; // seconds
        _this.cost = 1;
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isTolietOk, true); // we need a tool to do this
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isCanOutfire, true);
        return _this;
    }
    GotSleepAction.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    GotSleepAction.prototype.isDone = function () {
        return this.bDone;
    };
    GotSleepAction.prototype.requiresInRange = function () {
        return true;
    };
    GotSleepAction.prototype.checkProceduralPrecondition = function (agent) {
        this.target = Environment_1.Environment.sleepTarget;
        return this.target != null;
        // // TODO:find the nearest tree that we can chop
        // let trees: TreeComponent[] = Environment.treeComps;
        // let closest: TreeComponent = null;
        // let closestDist: number = 0;
        // for (let tree of trees) {
        // 	if (closest == null) {
        // 		// first one, so choose it for now
        // 		closest = tree;
        // 		closestDist = tree.distanceSquare(agent);
        // 	} else {
        // 		// is this one closer than the last?
        // 		let dist: number = tree.distanceSquare(agent);
        // 		if (dist < closestDist) {
        // 			// we found a closer one, use it
        // 			closest = tree;
        // 			closestDist = dist;
        // 		}
        // 	}
        // }
        // if (closest == null)
        // 	return false;
        // this.target = closest;
        // return closest != null;
    };
    GotSleepAction.prototype.perform = function (agent) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isCanOutfire, true)
            this.bDone = true;
        }
        return true;
    };
    return GotSleepAction;
}(GoapAction_1.GoapAction));
exports.GotSleepAction = GotSleepAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcR290U2xlZXBBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEyRDtBQUkzRCwrREFBOEQ7QUFDOUQsa0RBQTZDO0FBQzdDLHVEQUFzRDtBQUd0RDtJQUFvQyxrQ0FBVTtJQUs3QztRQUFBLFlBQ0MsaUJBQU8sU0FHUDtRQVJPLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDckMsVUFBSSxHQUFXLENBQUMsQ0FBQTtRQUd0QixLQUFJLENBQUMsZUFBZSxDQUFDLG1DQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtRQUNyRixLQUFJLENBQUMsU0FBUyxDQUFDLG1DQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDckQsQ0FBQztJQUVNLDhCQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRU0sd0NBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDTSxvREFBMkIsR0FBbEMsVUFBbUMsS0FBZ0I7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBVyxDQUFDLFdBQVcsQ0FBQztRQUN0QyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFBO1FBQzFCLGlEQUFpRDtRQUNqRCxzREFBc0Q7UUFDdEQscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUUvQiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxvQkFBb0I7UUFDcEIsOENBQThDO1FBQzlDLFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLElBQUk7UUFDSix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBRWpCLHlCQUF5QjtRQUV6QiwwQkFBMEI7SUFDM0IsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxLQUFnQjtRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFckMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1RCx3REFBd0Q7WUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7U0FDakI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRixxQkFBQztBQUFELENBaEVBLEFBZ0VDLENBaEVtQyx1QkFBVSxHQWdFN0M7QUFoRVksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFnZW50XCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcFwiO1xyXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9nYW1lZGF0YS9FbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uL3NyYy91dGlscy9UaW1lVXRpbFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uRGF0YVN0YXR1c1wiO1xyXG5pbXBvcnQgRW50aXR5IGZyb20gXCIuL0VudGl0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdvdFNsZWVwQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XHJcblx0cHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXHJcblx0cHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSB3b3JrRHVyYXRpb246IG51bWJlciA9IDE7IC8vIHNlY29uZHNcclxuXHRwdWJsaWMgY29zdDogbnVtYmVyID0gMVxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRydWUpOyAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmJEb25lID0gZmFsc2U7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaXNEb25lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYkRvbmU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IEdvYXBBZ2VudCk6IGJvb2xlYW4ge1xyXG5cdFx0dGhpcy50YXJnZXQgPSBFbnZpcm9ubWVudC5zbGVlcFRhcmdldDtcclxuXHRcdHJldHVybiB0aGlzLnRhcmdldCAhPSBudWxsXHJcblx0XHQvLyAvLyBUT0RPOmZpbmQgdGhlIG5lYXJlc3QgdHJlZSB0aGF0IHdlIGNhbiBjaG9wXHJcblx0XHQvLyBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcclxuXHRcdC8vIGxldCBjbG9zZXN0OiBUcmVlQ29tcG9uZW50ID0gbnVsbDtcclxuXHRcdC8vIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcclxuXHJcblx0XHQvLyBmb3IgKGxldCB0cmVlIG9mIHRyZWVzKSB7XHJcblx0XHQvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcclxuXHRcdC8vIFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XHJcblx0XHQvLyBcdFx0Y2xvc2VzdCA9IHRyZWU7XHJcblx0XHQvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdC8vIFx0fSBlbHNlIHtcclxuXHRcdC8vIFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cclxuXHRcdC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHQvLyBcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xyXG5cdFx0Ly8gXHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcclxuXHRcdC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xyXG5cdFx0Ly8gXHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xyXG5cdFx0Ly8gXHRcdH1cclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfVxyXG5cdFx0Ly8gaWYgKGNsb3Nlc3QgPT0gbnVsbClcclxuXHRcdC8vIFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcclxuXHJcblx0XHQvLyByZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBlcmZvcm0oYWdlbnQ6IEdvYXBBZ2VudCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHRoaXMuc3RhcnRUaW1lID09IDApXHJcblx0XHRcdHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpO1xyXG5cclxuXHRcdGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XHJcblx0XHRcdC8vZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpXHJcblx0XHRcdHRoaXMuYkRvbmUgPSB0cnVlXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/fsm/StateManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '60a066a2llN0bkPyHeT3fDY', 'StateManager');
// src/app/ai/fsm/StateManager.ts

"use strict";
/*
 * @Description: 状态管理类
 * @Author: Rannar.Yang
 * @Date: 2018-06-29 10:16:55
 * @Last Modified by: Rannar.Yang
 * @Last Modified time: 2018-07-05 17:35:31
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateManager = void 0;
var StateManager = /** @class */ (function () {
    function StateManager(owner) {
        this._currentState = null;
        this._lastState = null;
        this._stateDic = {};
        this._owner = owner;
    }
    StateManager.prototype.isExist = function (stateKey) {
        return !!this._stateDic[stateKey];
    };
    StateManager.prototype.getStateByKey = function (stateKey) {
        return this._stateDic[stateKey];
    };
    /**
     * 注册状态
     * @param key
     * @param state
     *
     */
    StateManager.prototype.registerState = function (key, state) {
        if (this._owner != state.owner) {
            console.warn("statemachine 与 state 所有者不一致");
            return;
        }
        this._stateDic[key] = state;
    };
    /**
     * 移除状态
     * @param key
     *
     */
    StateManager.prototype.removeState = function (key) {
        delete this._stateDic[key];
    };
    /**
     * 改变状态
     * @param key
     * @param obj
     * @param isForce 当当前状态和要切换的状态相同时，是否强制切换状态
     */
    StateManager.prototype.changeState = function (key, obj, isForce) {
        if (obj === void 0) { obj = null; }
        if (isForce === void 0) { isForce = false; }
        if (!isForce && this._currentState && this._currentState.getStateKey() == key) {
            return;
        }
        var newState = this._stateDic[key];
        if (newState == null) {
            console.warn("unregister state type: " + key);
            return;
        }
        if (this._currentState != null) {
            this._currentState.onExit(newState.getStateKey());
        }
        this._lastState = this._currentState;
        this._currentState = newState;
        this._currentState.onEnter(obj);
    };
    StateManager.prototype.reEnterState = function (obj) {
        if (obj === void 0) { obj = null; }
        if (this._currentState)
            this._currentState.onReEnter(obj);
    };
    /**
     * 更新
     *
     */
    StateManager.prototype.update = function (timeStamp) {
        if (this._currentState != null)
            this._currentState.onUpdate(timeStamp);
    };
    /**
     * 当前状态
     * @return
     */
    StateManager.prototype.getCurrentState = function () {
        return this._currentState;
    };
    /**
     * 当前状态类型
     * @return
     */
    StateManager.prototype.getCurrentStateKey = function () {
        if (this._currentState != null) {
            return this._currentState.getStateKey();
        }
        return StateManager.InvalidState;
    };
    /**当前在的状态 */
    StateManager.prototype.isInState = function (stateKey) {
        return stateKey == this.getCurrentStateKey();
    };
    /**
     * 清除
     */
    StateManager.prototype.clear = function () {
        if (this._currentState != null)
            this._currentState.onExit(StateManager.InvalidState);
        this._stateDic = {};
        this._currentState = null;
        this._lastState = null;
    };
    /**清除最后的状态 */
    StateManager.prototype.dispose = function () {
        if (this._currentState != null)
            this._currentState.onExit(StateManager.InvalidState);
        this._currentState = null;
        this._lastState = null;
    };
    StateManager.InvalidState = "Invalid";
    return StateManager;
}());
exports.StateManager = StateManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxmc21cXFN0YXRlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztHQU1HOzs7QUFLSDtJQVFDLHNCQUFZLEtBQVU7UUFKWixrQkFBYSxHQUFjLElBQUksQ0FBQztRQUNoQyxlQUFVLEdBQWMsSUFBSSxDQUFDO1FBSXRDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFHTSw4QkFBTyxHQUFkLFVBQWUsUUFBZ0I7UUFDOUIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sb0NBQWEsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLG9DQUFhLEdBQXBCLFVBQXFCLEdBQVcsRUFBRSxLQUFnQjtRQUNqRCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDNUMsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxrQ0FBVyxHQUFsQixVQUFtQixHQUFXO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxrQ0FBVyxHQUFsQixVQUFtQixHQUFXLEVBQUUsR0FBZSxFQUFFLE9BQWU7UUFBaEMsb0JBQUEsRUFBQSxVQUFlO1FBQUUsd0JBQUEsRUFBQSxlQUFlO1FBQy9ELElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxJQUFJLEdBQUcsRUFBRTtZQUM5RSxPQUFPO1NBQ1A7UUFDRCxJQUFJLFFBQVEsR0FBYyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLE9BQU87U0FDUDtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLG1DQUFZLEdBQW5CLFVBQW9CLEdBQWU7UUFBZixvQkFBQSxFQUFBLFVBQWU7UUFDbEMsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQU0sR0FBYixVQUFjLFNBQVM7UUFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHNDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFDRDs7O09BR0c7SUFDSSx5Q0FBa0IsR0FBekI7UUFDQyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QztRQUNELE9BQU8sWUFBWSxDQUFDLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBRUQsWUFBWTtJQUNMLGdDQUFTLEdBQWhCLFVBQWlCLFFBQWdCO1FBQ2hDLE9BQU8sUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFDRDs7T0FFRztJQUNJLDRCQUFLLEdBQVo7UUFDQyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUNELGFBQWE7SUFDTiw4QkFBTyxHQUFkO1FBQ0MsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUF6SGEseUJBQVksR0FBVyxTQUFTLENBQUM7SUEySGhELG1CQUFDO0NBNUhELEFBNEhDLElBQUE7QUE1SFksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHRpb246IOeKtuaAgeeuoeeQhuexu1xyXG4gKiBAQXV0aG9yOiBSYW5uYXIuWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDYtMjkgMTA6MTY6NTUgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXIuWWFuZ1xyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTA3LTA1IDE3OjM1OjMxXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uL2dvYXAvR29hcEFnZW50XCI7XHJcbmltcG9ydCB7IFN0YXRlQmFzZSB9IGZyb20gXCIuL3N0YXRlL1N0YXRlQmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRlTWFuYWdlciB7XHJcblx0cHVibGljIHN0YXRpYyBJbnZhbGlkU3RhdGU6IHN0cmluZyA9IFwiSW52YWxpZFwiO1xyXG5cclxuXHRwcm90ZWN0ZWQgX3N0YXRlRGljOiB7IFtrZXk6IHN0cmluZ106IFN0YXRlQmFzZSB9O1xyXG5cdHByb3RlY3RlZCBfY3VycmVudFN0YXRlOiBTdGF0ZUJhc2UgPSBudWxsO1xyXG5cdHByb3RlY3RlZCBfbGFzdFN0YXRlOiBTdGF0ZUJhc2UgPSBudWxsO1xyXG5cdHByb3RlY3RlZCBfb3duZXI6IEdvYXBBZ2VudDtcclxuXHJcblx0Y29uc3RydWN0b3Iob3duZXI6IGFueSkge1xyXG5cdFx0dGhpcy5fc3RhdGVEaWMgPSB7fTtcclxuXHRcdHRoaXMuX293bmVyID0gb3duZXI7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIGlzRXhpc3Qoc3RhdGVLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuICEhdGhpcy5fc3RhdGVEaWNbc3RhdGVLZXldO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFN0YXRlQnlLZXkoc3RhdGVLZXk6IHN0cmluZyk6IFN0YXRlQmFzZSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc3RhdGVEaWNbc3RhdGVLZXldO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICog5rOo5YaM54q25oCBIFxyXG5cdCAqIEBwYXJhbSBrZXlcclxuXHQgKiBAcGFyYW0gc3RhdGVcclxuXHQgKiBcclxuXHQgKi9cclxuXHRwdWJsaWMgcmVnaXN0ZXJTdGF0ZShrZXk6IHN0cmluZywgc3RhdGU6IFN0YXRlQmFzZSk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX293bmVyICE9IHN0YXRlLm93bmVyKSB7XHJcblx0XHRcdGNvbnNvbGUud2FybihcInN0YXRlbWFjaGluZSDkuI4gc3RhdGUg5omA5pyJ6ICF5LiN5LiA6Ie0XCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLl9zdGF0ZURpY1trZXldID0gc3RhdGU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDnp7vpmaTnirbmgIEgXHJcblx0ICogQHBhcmFtIGtleVxyXG5cdCAqIFxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZW1vdmVTdGF0ZShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0ZGVsZXRlIHRoaXMuX3N0YXRlRGljW2tleV07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDmlLnlj5jnirbmgIEgXHJcblx0ICogQHBhcmFtIGtleVxyXG5cdCAqIEBwYXJhbSBvYmpcclxuXHQgKiBAcGFyYW0gaXNGb3JjZSDlvZPlvZPliY3nirbmgIHlkozopoHliIfmjaLnmoTnirbmgIHnm7jlkIzml7bvvIzmmK/lkKblvLrliLbliIfmjaLnirbmgIFcclxuXHQgKi9cclxuXHRwdWJsaWMgY2hhbmdlU3RhdGUoa2V5OiBzdHJpbmcsIG9iajogYW55ID0gbnVsbCwgaXNGb3JjZSA9IGZhbHNlKTogdm9pZCB7XHJcblx0XHRpZiAoIWlzRm9yY2UgJiYgdGhpcy5fY3VycmVudFN0YXRlICYmIHRoaXMuX2N1cnJlbnRTdGF0ZS5nZXRTdGF0ZUtleSgpID09IGtleSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR2YXIgbmV3U3RhdGU6IFN0YXRlQmFzZSA9IHRoaXMuX3N0YXRlRGljW2tleV07XHJcblx0XHRpZiAobmV3U3RhdGUgPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zb2xlLndhcm4oXCJ1bnJlZ2lzdGVyIHN0YXRlIHR5cGU6IFwiICsga2V5KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLl9jdXJyZW50U3RhdGUgIT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25FeGl0KG5ld1N0YXRlLmdldFN0YXRlS2V5KCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2xhc3RTdGF0ZSA9IHRoaXMuX2N1cnJlbnRTdGF0ZTtcclxuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZSA9IG5ld1N0YXRlO1xyXG5cdFx0dGhpcy5fY3VycmVudFN0YXRlLm9uRW50ZXIob2JqKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZUVudGVyU3RhdGUob2JqOiBhbnkgPSBudWxsKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5fY3VycmVudFN0YXRlKVxyXG5cdFx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25SZUVudGVyKG9iaik7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDmm7TmlrAgXHJcblx0ICogXHJcblx0ICovXHJcblx0cHVibGljIHVwZGF0ZSh0aW1lU3RhbXApOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9jdXJyZW50U3RhdGUgIT0gbnVsbClcclxuXHRcdFx0dGhpcy5fY3VycmVudFN0YXRlLm9uVXBkYXRlKHRpbWVTdGFtcCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDlvZPliY3nirbmgIEgIFxyXG5cdCAqIEByZXR1cm4gXHJcblx0ICovXHJcblx0cHVibGljIGdldEN1cnJlbnRTdGF0ZSgpOiBTdGF0ZUJhc2Uge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRTdGF0ZTtcclxuXHR9XHJcblx0LyoqXHJcblx0ICog5b2T5YmN54q25oCB57G75Z6LICBcclxuXHQgKiBAcmV0dXJuIFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRDdXJyZW50U3RhdGVLZXkoKTogc3RyaW5nIHtcclxuXHRcdGlmICh0aGlzLl9jdXJyZW50U3RhdGUgIT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fY3VycmVudFN0YXRlLmdldFN0YXRlS2V5KCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gU3RhdGVNYW5hZ2VyLkludmFsaWRTdGF0ZTtcclxuXHR9XHJcblxyXG5cdC8qKuW9k+WJjeWcqOeahOeKtuaAgSAqL1xyXG5cdHB1YmxpYyBpc0luU3RhdGUoc3RhdGVLZXk6IHN0cmluZykge1xyXG5cdFx0cmV0dXJuIHN0YXRlS2V5ID09IHRoaXMuZ2V0Q3VycmVudFN0YXRlS2V5KCk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIOa4hemZpCBcclxuXHQgKi9cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5fY3VycmVudFN0YXRlICE9IG51bGwpXHJcblx0XHRcdHRoaXMuX2N1cnJlbnRTdGF0ZS5vbkV4aXQoU3RhdGVNYW5hZ2VyLkludmFsaWRTdGF0ZSk7XHJcblx0XHR0aGlzLl9zdGF0ZURpYyA9IHt9O1xyXG5cdFx0dGhpcy5fY3VycmVudFN0YXRlID0gbnVsbDtcclxuXHRcdHRoaXMuX2xhc3RTdGF0ZSA9IG51bGw7XHJcblx0fVxyXG5cdC8qKua4hemZpOacgOWQjueahOeKtuaAgSAqL1xyXG5cdHB1YmxpYyBkaXNwb3NlKCkge1xyXG5cdFx0aWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBudWxsKVxyXG5cdFx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25FeGl0KFN0YXRlTWFuYWdlci5JbnZhbGlkU3RhdGUpO1xyXG5cdFx0dGhpcy5fY3VycmVudFN0YXRlID0gbnVsbDtcclxuXHRcdHRoaXMuX2xhc3RTdGF0ZSA9IG51bGw7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/base/VGameObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f50eR/VF5OVayzFiMdd3ze', 'VGameObject');
// src/app/base/VGameObject.ts

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
exports.VGameObject = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VGameObject = /** @class */ (function (_super) {
    __extends(VGameObject, _super);
    function VGameObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VGameObject.prototype.createGoalState = function () {
        throw new Error("Method not implemented.");
    };
    VGameObject.prototype.moveTo = function (target, step) {
        var curDis = this.distanceSquare(target);
        var minDis = step * step;
        if (curDis <= minDis) {
            this.node.x = target.node.x;
            this.node.y = target.node.y;
        }
        else {
            var percent = 6 / this.distance(target);
            this.node.x = this.node.x + percent * (target.node.x - this.node.x);
            this.node.y = this.node.y + percent * (target.node.y - this.node.y);
        }
    };
    VGameObject.prototype.posEquip = function (gameObj) {
        return this.node.x == gameObj.node.x && this.node.y == gameObj.node.y;
    };
    /**距离的平方 */
    VGameObject.prototype.distanceSquare = function (object) {
        return (object.node.x - this.node.x) * (object.node.x - this.node.x) + (object.node.y - this.node.y) * (object.node.y - this.node.y);
    };
    /**距离 */
    VGameObject.prototype.distance = function (object) {
        return Math.sqrt(this.distanceSquare(object));
    };
    VGameObject = __decorate([
        ccclass
    ], VGameObject);
    return VGameObject;
}(cc.Component));
exports.VGameObject = VGameObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGJhc2VcXFZHYW1lT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFpQywrQkFBWTtJQUE3Qzs7SUEyQkEsQ0FBQztJQTFCQSxxQ0FBZSxHQUFmO1FBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDTSw0QkFBTSxHQUFiLFVBQWMsTUFBbUIsRUFBRSxJQUFZO1FBQzlDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUN4QixJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDNUI7YUFBTTtZQUNOLElBQUksT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTtJQUNGLENBQUM7SUFDTSw4QkFBUSxHQUFmLFVBQWdCLE9BQW9CO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNELFdBQVc7SUFDSixvQ0FBYyxHQUFyQixVQUFzQixNQUFtQjtRQUN4QyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0SSxDQUFDO0lBQ0QsUUFBUTtJQUNELDhCQUFRLEdBQWYsVUFBZ0IsTUFBTTtRQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBQzlDLENBQUM7SUExQlcsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQTJCdkI7SUFBRCxrQkFBQztDQTNCRCxBQTJCQyxDQTNCZ0MsRUFBRSxDQUFDLFNBQVMsR0EyQjVDO0FBM0JZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBWR2FtZU9iamVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblx0Y3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcblx0fVxyXG5cdHB1YmxpYyBtb3ZlVG8odGFyZ2V0OiBWR2FtZU9iamVjdCwgc3RlcDogbnVtYmVyKSB7XHJcblx0XHRsZXQgY3VyRGlzID0gdGhpcy5kaXN0YW5jZVNxdWFyZSh0YXJnZXQpXHJcblx0XHRsZXQgbWluRGlzID0gc3RlcCAqIHN0ZXBcclxuXHRcdGlmIChjdXJEaXMgPD0gbWluRGlzKSB7XHJcblx0XHRcdHRoaXMubm9kZS54ID0gdGFyZ2V0Lm5vZGUueDtcclxuXHRcdFx0dGhpcy5ub2RlLnkgPSB0YXJnZXQubm9kZS55O1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IHBlcmNlbnQgPSA2IC8gdGhpcy5kaXN0YW5jZSh0YXJnZXQpXHJcblx0XHRcdHRoaXMubm9kZS54ID0gdGhpcy5ub2RlLnggKyBwZXJjZW50ICogKHRhcmdldC5ub2RlLnggLSB0aGlzLm5vZGUueClcclxuXHRcdFx0dGhpcy5ub2RlLnkgPSB0aGlzLm5vZGUueSArIHBlcmNlbnQgKiAodGFyZ2V0Lm5vZGUueSAtIHRoaXMubm9kZS55KTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIHBvc0VxdWlwKGdhbWVPYmo6IFZHYW1lT2JqZWN0KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5ub2RlLnggPT0gZ2FtZU9iai5ub2RlLnggJiYgdGhpcy5ub2RlLnkgPT0gZ2FtZU9iai5ub2RlLnk7XHJcblx0fVxyXG5cdC8qKui3neemu+eahOW5s+aWuSAqL1xyXG5cdHB1YmxpYyBkaXN0YW5jZVNxdWFyZShvYmplY3Q6IFZHYW1lT2JqZWN0KSB7XHJcblx0XHRyZXR1cm4gKG9iamVjdC5ub2RlLnggLSB0aGlzLm5vZGUueCkgKiAob2JqZWN0Lm5vZGUueCAtIHRoaXMubm9kZS54KSArIChvYmplY3Qubm9kZS55IC0gdGhpcy5ub2RlLnkpICogKG9iamVjdC5ub2RlLnkgLSB0aGlzLm5vZGUueSk7XHJcblx0fVxyXG5cdC8qKui3neemuyAqL1xyXG5cdHB1YmxpYyBkaXN0YW5jZShvYmplY3QpIHtcclxuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVNxdWFyZShvYmplY3QpKVxyXG5cdH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/actions/ActionBuyShopItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b311214WgZAj5PBr8Y1dgV3', 'ActionBuyShopItem');
// goap/actions/ActionBuyShopItem.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionBuyShopItem = void 0;
var GoapAction_1 = require("../../src/app/ai/goap/GoapAction");
var Environment_1 = require("../../src/app/gamedata/Environment");
var TimeUtil_1 = require("../../src/utils/TimeUtil");
var ActionBuyShopItem = /** @class */ (function (_super) {
    __extends(ActionBuyShopItem, _super);
    function ActionBuyShopItem() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.cost = 1;
        return _this;
    }
    ActionBuyShopItem.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    ActionBuyShopItem.prototype.isDone = function () {
        return this.bDone;
    };
    ActionBuyShopItem.prototype.requiresInRange = function () {
        return true;
    };
    ActionBuyShopItem.prototype.checkProceduralPrecondition = function (agent) {
        if (Environment_1.Environment.storeA.isHaveGoods()) {
            return true;
        }
    };
    ActionBuyShopItem.prototype.perform = function (agent) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isCanOutfire, true)
            this.bDone = true;
        }
        return true;
    };
    return ActionBuyShopItem;
}(GoapAction_1.GoapAction));
exports.ActionBuyShopItem = ActionBuyShopItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcYWN0aW9uc1xcQWN0aW9uQnV5U2hvcEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE4RDtBQUk5RCxrRUFBaUU7QUFDakUscURBQWdEO0FBSWhEO0lBQXVDLHFDQUFVO0lBSzdDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBTk8sV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNyQyxVQUFJLEdBQVcsQ0FBQyxDQUFBOztJQUd2QixDQUFDO0lBRU0saUNBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxrQ0FBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSwyQ0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSx1REFBMkIsR0FBbEMsVUFBbUMsS0FBZ0I7UUFDL0MsSUFBSSx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQTtTQUNkO0lBQ0wsQ0FBQztJQUVNLG1DQUFPLEdBQWQsVUFBZSxLQUFnQjtRQUMzQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFeEMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN6RCx3REFBd0Q7WUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7U0FDcEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQXRDQSxBQXNDQyxDQXRDc0MsdUJBQVUsR0FzQ2hEO0FBdENZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWdlbnRcIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCI7XHJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCI7XHJcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCI7XHJcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tIFwiLi4vQWN0aW9uRGF0YVN0YXR1c1wiO1xyXG5pbXBvcnQgRW50aXR5IGZyb20gXCIuLi9FbnRpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25CdXlTaG9wSXRlbSBleHRlbmRzIEdvYXBBY3Rpb24ge1xyXG4gICAgcHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAyOyAvLyBzZWNvbmRzXHJcbiAgICBwdWJsaWMgY29zdDogbnVtYmVyID0gMVxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYkRvbmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRG9uZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iRG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IEdvYXBBZ2VudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChFbnZpcm9ubWVudC5zdG9yZUEuaXNIYXZlR29vZHMoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVyZm9ybShhZ2VudDogR29hcEFnZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lID09IDApXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICBpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLndvcmtEdXJhdGlvbikge1xyXG4gICAgICAgICAgICAvL2VudGl0eS5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLmJEb25lID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/GotoFireAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e22c2loAydIDY/KiKv+hFz1', 'GotoFireAction');
// goap/GotoFireAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GotoFireAction = void 0;
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Environment_1 = require("../src/app/gamedata/Environment");
var TimeUtil_1 = require("../src/utils/TimeUtil");
var ActionDataStatus_1 = require("./ActionDataStatus");
var GotoFireAction = /** @class */ (function (_super) {
    __extends(GotoFireAction, _super);
    function GotoFireAction() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isFireOk, false); // we need a tool to do this
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isEquipOk, true); // we need a tool to do this
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.outFire, true);
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isEquipOk, false);
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isTolietOk, false);
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isEquipOk, false);
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isFireOk, false);
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isCanOutfire, false);
        return _this;
    }
    GotoFireAction.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    GotoFireAction.prototype.isDone = function () {
        return this.bDone;
    };
    GotoFireAction.prototype.requiresInRange = function () {
        return true;
    };
    GotoFireAction.prototype.checkProceduralPrecondition = function (agent) {
        this.target = Environment_1.Environment.fireTarget;
        return this.target != null;
        // // TODO:find the nearest tree that we can chop
        // let trees: TreeComponent[] = Environment.treeComps;
        // let closest: TreeComponent = null;
        // let closestDist: number = 0;
        // for (let tree of trees) {
        // 	if (closest == null) {
        // 		// first one, so choose it for now
        // 		closest = tree;
        // 		closestDist = tree.distanceSquare(agent);
        // 	} else {
        // 		// is this one closer than the last?
        // 		let dist: number = tree.distanceSquare(agent);
        // 		if (dist < closestDist) {
        // 			// we found a closer one, use it
        // 			closest = tree;
        // 			closestDist = dist;
        // 		}
        // 	}
        // }
        // if (closest == null)
        // 	return false;
        // this.target = closest;
        // return closest != null;
    };
    GotoFireAction.prototype.perform = function (goapAgent) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            this.bDone = true;
            // entity.memory.set(ActionDataStatus.isTolietOk, false)
            // entity.memory.set(ActionDataStatus.isEatOk, false)
            // entity.memory.set(ActionDataStatus.isEquipOk, false)
            // entity.memory.set(ActionDataStatus.isFireOk, false)
        }
        return true;
    };
    return GotoFireAction;
}(GoapAction_1.GoapAction));
exports.GotoFireAction = GotoFireAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcR290b0ZpcmVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEyRDtBQUkzRCwrREFBOEQ7QUFDOUQsa0RBQTZDO0FBQzdDLHVEQUFzRDtBQUd0RDtJQUFvQyxrQ0FBVTtJQUk3QztRQUFBLFlBQ0MsaUJBQU8sU0FTUDtRQWJPLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFHM0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQ0FBZ0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7UUFDcEYsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7UUFDcEYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDakQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDbEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDakQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDaEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUE7O0lBQ3JELENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLCtCQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVNLHdDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ00sb0RBQTJCLEdBQWxDLFVBQW1DLEtBQWdCO1FBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcseUJBQVcsQ0FBQyxVQUFVLENBQUM7UUFDckMsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQTtRQUMxQixpREFBaUQ7UUFDakQsc0RBQXNEO1FBQ3RELHFDQUFxQztRQUNyQywrQkFBK0I7UUFFL0IsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQix1Q0FBdUM7UUFDdkMsb0JBQW9CO1FBQ3BCLDhDQUE4QztRQUM5QyxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLG1EQUFtRDtRQUNuRCw4QkFBOEI7UUFDOUIsc0NBQXNDO1FBQ3RDLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsTUFBTTtRQUNOLEtBQUs7UUFDTCxJQUFJO1FBQ0osdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUVqQix5QkFBeUI7UUFFekIsMEJBQTBCO0lBQzNCLENBQUM7SUFFTSxnQ0FBTyxHQUFkLFVBQWUsU0FBb0I7UUFDbEMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXJDLElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDNUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7WUFDakIsd0RBQXdEO1lBQ3hELHFEQUFxRDtZQUNyRCx1REFBdUQ7WUFDdkQsc0RBQXNEO1NBQ3REO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQXhFQSxBQXdFQyxDQXhFbUMsdUJBQVUsR0F3RTdDO0FBeEVZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiO1xyXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudFwiO1xyXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvSUdvYXBcIjtcclxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL3NyYy9hcHAvZ2FtZWRhdGEvRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi9zcmMvdXRpbHMvVGltZVV0aWxcIjtcclxuaW1wb3J0IHsgQWN0aW9uRGF0YVN0YXR1cyB9IGZyb20gXCIuL0FjdGlvbkRhdGFTdGF0dXNcIjtcclxuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHb3RvRmlyZUFjdGlvbiBleHRlbmRzIEdvYXBBY3Rpb24ge1xyXG5cdHByaXZhdGUgYkRvbmU6IGJvb2xlYW4gPSBmYWxzZVxyXG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAyOyAvLyBzZWNvbmRzXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIGZhbHNlKTsgLy8gd2UgbmVlZCBhIHRvb2wgdG8gZG8gdGhpc1xyXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIHRydWUpOyAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLm91dEZpcmUsIHRydWUpO1xyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIGZhbHNlKVxyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uRGF0YVN0YXR1cy5pc1RvbGlldE9rLCBmYWxzZSlcclxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCBmYWxzZSlcclxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIGZhbHNlKVxyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIGZhbHNlKVxyXG5cdH1cclxuXHJcblx0cHVibGljIHJlc2V0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5iRG9uZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzRG9uZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmJEb25lO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBHb2FwQWdlbnQpOiBib29sZWFuIHtcclxuXHRcdHRoaXMudGFyZ2V0ID0gRW52aXJvbm1lbnQuZmlyZVRhcmdldDtcclxuXHRcdHJldHVybiB0aGlzLnRhcmdldCAhPSBudWxsXHJcblx0XHQvLyAvLyBUT0RPOmZpbmQgdGhlIG5lYXJlc3QgdHJlZSB0aGF0IHdlIGNhbiBjaG9wXHJcblx0XHQvLyBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcclxuXHRcdC8vIGxldCBjbG9zZXN0OiBUcmVlQ29tcG9uZW50ID0gbnVsbDtcclxuXHRcdC8vIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcclxuXHJcblx0XHQvLyBmb3IgKGxldCB0cmVlIG9mIHRyZWVzKSB7XHJcblx0XHQvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcclxuXHRcdC8vIFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XHJcblx0XHQvLyBcdFx0Y2xvc2VzdCA9IHRyZWU7XHJcblx0XHQvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdC8vIFx0fSBlbHNlIHtcclxuXHRcdC8vIFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cclxuXHRcdC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHQvLyBcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xyXG5cdFx0Ly8gXHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcclxuXHRcdC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xyXG5cdFx0Ly8gXHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xyXG5cdFx0Ly8gXHRcdH1cclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfVxyXG5cdFx0Ly8gaWYgKGNsb3Nlc3QgPT0gbnVsbClcclxuXHRcdC8vIFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcclxuXHJcblx0XHQvLyByZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBlcmZvcm0oZ29hcEFnZW50OiBHb2FwQWdlbnQpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKVxyXG5cdFx0XHR0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKTtcclxuXHJcblx0XHRpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLndvcmtEdXJhdGlvbikge1xyXG5cdFx0XHR0aGlzLmJEb25lID0gdHJ1ZVxyXG5cdFx0XHQvLyBlbnRpdHkubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIGZhbHNlKVxyXG5cdFx0XHQvLyBlbnRpdHkubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRWF0T2ssIGZhbHNlKVxyXG5cdFx0XHQvLyBlbnRpdHkubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRXF1aXBPaywgZmFsc2UpXHJcblx0XHRcdC8vIGVudGl0eS5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIGZhbHNlKVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/NewScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b98eaYNgRdGsbq1Q3m/NwP6', 'NewScript');
// src/NewScript.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxOZXdTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFpQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O1FBVXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBVEcsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFHdkI7UUFEQyxRQUFROzBDQUNjO0lBTk4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWlCNUI7SUFBRCxlQUFDO0NBakJELEFBaUJDLENBakJxQyxFQUFFLENBQUMsU0FBUyxHQWlCakQ7a0JBakJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/Equip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6217z+zqhDF4nV+mMkPl5v', 'Equip');
// goap/Equip.ts

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
var VGameObject_1 = require("../src/app/base/VGameObject");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Equip = /** @class */ (function (_super) {
    __extends(Equip, _super);
    function Equip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Equip = __decorate([
        ccclass
    ], Equip);
    return Equip;
}(VGameObject_1.VGameObject));
exports.default = Equip;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcRXF1aXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBRXBELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQXFDLHlCQUFXO0lBQWhEOztJQUVBLENBQUM7SUFGc0IsS0FBSztRQUQzQixPQUFPO09BQ2UsS0FBSyxDQUUzQjtJQUFELFlBQUM7Q0FGRCxBQUVDLENBRm9DLHlCQUFXLEdBRS9DO2tCQUZzQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tICcuLi9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3QnO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCAgIGRlZmF1bHQgY2xhc3MgRXF1aXAgZXh0ZW5kcyBWR2FtZU9iamVjdCB7XHJcbiAgIFxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/GotoEquipmentAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5d14iVLfRFabOSdGozcxsv', 'GotoEquipmentAction');
// goap/GotoEquipmentAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GotoEquipmentAction = void 0;
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Environment_1 = require("../src/app/gamedata/Environment");
var TimeUtil_1 = require("../src/utils/TimeUtil");
var ActionDataStatus_1 = require("./ActionDataStatus");
var GotoEquipmentAction = /** @class */ (function (_super) {
    __extends(GotoEquipmentAction, _super);
    function GotoEquipmentAction() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isCanOutfire, true); // we need a tool to do this
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isEquipOk, true);
        return _this;
    }
    GotoEquipmentAction.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    GotoEquipmentAction.prototype.isDone = function () {
        return this.bDone;
    };
    GotoEquipmentAction.prototype.requiresInRange = function () {
        return true;
    };
    GotoEquipmentAction.prototype.checkProceduralPrecondition = function (agent) {
        this.target = Environment_1.Environment.equipTarget;
        return this.target != null;
        // // TODO:find the nearest tree that we can chop
        // let trees: TreeComponent[] = Environment.treeComps;
        // let closest: TreeComponent = null;
        // let closestDist: number = 0;
        // for (let tree of trees) {
        // 	if (closest == null) {
        // 		// first one, so choose it for now
        // 		closest = tree;
        // 		closestDist = tree.distanceSquare(agent);
        // 	} else {
        // 		// is this one closer than the last?
        // 		let dist: number = tree.distanceSquare(agent);
        // 		if (dist < closestDist) {
        // 			// we found a closer one, use it
        // 			closest = tree;
        // 			closestDist = dist;
        // 		}
        // 	}
        // }
        // if (closest == null)
        // 	return false;
        // this.target = closest;
        // return closest != null;
    };
    GotoEquipmentAction.prototype.perform = function (agent) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isEquipOk, true)
            this.bDone = true;
        }
        return true;
    };
    return GotoEquipmentAction;
}(GoapAction_1.GoapAction));
exports.GotoEquipmentAction = GotoEquipmentAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcR290b0VxdWlwbWVudEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQTJEO0FBSTNELCtEQUE4RDtBQUM5RCxrREFBNkM7QUFDN0MsdURBQXNEO0FBR3REO0lBQXlDLHVDQUFVO0lBSWxEO1FBQUEsWUFDQyxpQkFBTyxTQUdQO1FBUE8sV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUczQyxLQUFJLENBQUMsZUFBZSxDQUFDLG1DQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtRQUN2RixLQUFJLENBQUMsU0FBUyxDQUFDLG1DQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDbEQsQ0FBQztJQUVNLG1DQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sb0NBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRU0sNkNBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDTSx5REFBMkIsR0FBbEMsVUFBbUMsS0FBZ0I7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBVyxDQUFDLFdBQVcsQ0FBQztRQUN0QyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFBO1FBQzFCLGlEQUFpRDtRQUNqRCxzREFBc0Q7UUFDdEQscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUUvQiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxvQkFBb0I7UUFDcEIsOENBQThDO1FBQzlDLFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLElBQUk7UUFDSix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBRWpCLHlCQUF5QjtRQUV6QiwwQkFBMEI7SUFDM0IsQ0FBQztJQUVNLHFDQUFPLEdBQWQsVUFBZSxLQUFnQjtRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFckMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1RCxxREFBcUQ7WUFDckQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7U0FDakI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRiwwQkFBQztBQUFELENBL0RBLEFBK0RDLENBL0R3Qyx1QkFBVSxHQStEbEQ7QUEvRFksa0RBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiO1xyXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudFwiO1xyXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvSUdvYXBcIjtcclxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL3NyYy9hcHAvZ2FtZWRhdGEvRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi9zcmMvdXRpbHMvVGltZVV0aWxcIjtcclxuaW1wb3J0IHsgQWN0aW9uRGF0YVN0YXR1cyB9IGZyb20gXCIuL0FjdGlvbkRhdGFTdGF0dXNcIjtcclxuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHb3RvRXF1aXBtZW50QWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XHJcblx0cHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXHJcblx0cHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSB3b3JrRHVyYXRpb246IG51bWJlciA9IDI7IC8vIHNlY29uZHNcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpOyAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzRXF1aXBPaywgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmJEb25lID0gZmFsc2U7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaXNEb25lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYkRvbmU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IEdvYXBBZ2VudCk6IGJvb2xlYW4ge1xyXG5cdFx0dGhpcy50YXJnZXQgPSBFbnZpcm9ubWVudC5lcXVpcFRhcmdldDtcclxuXHRcdHJldHVybiB0aGlzLnRhcmdldCAhPSBudWxsXHJcblx0XHQvLyAvLyBUT0RPOmZpbmQgdGhlIG5lYXJlc3QgdHJlZSB0aGF0IHdlIGNhbiBjaG9wXHJcblx0XHQvLyBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcclxuXHRcdC8vIGxldCBjbG9zZXN0OiBUcmVlQ29tcG9uZW50ID0gbnVsbDtcclxuXHRcdC8vIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcclxuXHJcblx0XHQvLyBmb3IgKGxldCB0cmVlIG9mIHRyZWVzKSB7XHJcblx0XHQvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcclxuXHRcdC8vIFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XHJcblx0XHQvLyBcdFx0Y2xvc2VzdCA9IHRyZWU7XHJcblx0XHQvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdC8vIFx0fSBlbHNlIHtcclxuXHRcdC8vIFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cclxuXHRcdC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHQvLyBcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xyXG5cdFx0Ly8gXHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcclxuXHRcdC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xyXG5cdFx0Ly8gXHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xyXG5cdFx0Ly8gXHRcdH1cclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfVxyXG5cdFx0Ly8gaWYgKGNsb3Nlc3QgPT0gbnVsbClcclxuXHRcdC8vIFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcclxuXHJcblx0XHQvLyByZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBlcmZvcm0oYWdlbnQ6IEdvYXBBZ2VudCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHRoaXMuc3RhcnRUaW1lID09IDApXHJcblx0XHRcdHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpO1xyXG5cclxuXHRcdGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XHJcblx0XHRcdC8vZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIHRydWUpXHJcblx0XHRcdHRoaXMuYkRvbmUgPSB0cnVlXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/data/LabourerType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54e35rEb0xKy7GZhd9sN8Ei', 'LabourerType');
// src/app/data/LabourerType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabourerType = void 0;
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-11-03 19:01:37
 * @Last Modified by:   RannarYang
 * @Last Modified time: 2018-11-03 19:01:37
 */
var LabourerType;
(function (LabourerType) {
    LabourerType[LabourerType["None"] = 0] = "None";
    LabourerType[LabourerType["Blacksmith"] = 1] = "Blacksmith";
    LabourerType[LabourerType["Logger"] = 2] = "Logger";
    LabourerType[LabourerType["Miner"] = 3] = "Miner";
    LabourerType[LabourerType["WoodCutter"] = 4] = "WoodCutter";
})(LabourerType = exports.LabourerType || (exports.LabourerType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGRhdGFcXExhYm91cmVyVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0dBTUc7QUFDSCxJQUFZLFlBTVg7QUFORCxXQUFZLFlBQVk7SUFDdkIsK0NBQUksQ0FBQTtJQUNKLDJEQUFVLENBQUE7SUFDVixtREFBTSxDQUFBO0lBQ04saURBQUssQ0FBQTtJQUNMLDJEQUFVLENBQUE7QUFDWCxDQUFDLEVBTlcsWUFBWSxHQUFaLG9CQUFZLEtBQVosb0JBQVksUUFNdkIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0xMS0wMyAxOTowMTozNyBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6ICAgUmFubmFyWWFuZyBcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wMyAxOTowMTozNyBcclxuICovXHJcbmV4cG9ydCBlbnVtIExhYm91cmVyVHlwZSB7XHJcblx0Tm9uZSxcclxuXHRCbGFja3NtaXRoLFxyXG5cdExvZ2dlcixcclxuXHRNaW5lcixcclxuXHRXb29kQ3V0dGVyLFxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/StoreA.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22965eRdA5GBLXCznvQkp9g', 'StoreA');
// goap/StoreA.ts

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
var VGameObject_1 = require("../src/app/base/VGameObject");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StoreA = /** @class */ (function (_super) {
    __extends(StoreA, _super);
    function StoreA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.shopCount = 10;
        return _this;
    }
    StoreA.prototype.cost = function (v) {
        if (v === void 0) { v = 1; }
        this.shopCount -= v;
    };
    StoreA.prototype.isHaveGoods = function () {
        return this.shopCount > 0;
    };
    StoreA = __decorate([
        ccclass
    ], StoreA);
    return StoreA;
}(VGameObject_1.VGameObject));
exports.default = StoreA;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcU3RvcmVBLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUVwRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFvQywwQkFBVztJQUEvQztRQUFBLHFFQVNDO1FBUlUsZUFBUyxHQUFHLEVBQUUsQ0FBQTs7SUFRekIsQ0FBQztJQVBVLHFCQUFJLEdBQVgsVUFBWSxDQUFLO1FBQUwsa0JBQUEsRUFBQSxLQUFLO1FBQ2IsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUVNLDRCQUFXLEdBQWxCO1FBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBUmdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FTMUI7SUFBRCxhQUFDO0NBVEQsQUFTQyxDQVRtQyx5QkFBVyxHQVM5QztrQkFUb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSAnLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0JztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlQSBleHRlbmRzIFZHYW1lT2JqZWN0IHtcclxuICAgIHB1YmxpYyBzaG9wQ291bnQgPSAxMFxyXG4gICAgcHVibGljIGNvc3QodiA9IDEpIHtcclxuICAgICAgICB0aGlzLnNob3BDb3VudCAtPSB2XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzSGF2ZUdvb2RzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNob3BDb3VudCA+IDBcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/GotoEatAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4e9fbOu3RFlLQFtFT1qeYw', 'GotoEatAction');
// goap/GotoEatAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GotoEatAction = void 0;
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Environment_1 = require("../src/app/gamedata/Environment");
var TimeUtil_1 = require("../src/utils/TimeUtil");
var ActionDataStatus_1 = require("./ActionDataStatus");
var GotoEatAction = /** @class */ (function (_super) {
    __extends(GotoEatAction, _super);
    function GotoEatAction() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.cost = 1;
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isTolietOk, true); // we need a tool to do this
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isCanOutfire, true);
        return _this;
    }
    GotoEatAction.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    GotoEatAction.prototype.isDone = function () {
        return this.bDone;
    };
    GotoEatAction.prototype.requiresInRange = function () {
        return true;
    };
    GotoEatAction.prototype.checkProceduralPrecondition = function (agent) {
        return false;
        this.target = Environment_1.Environment.eatingTarget;
        return this.target != null;
        // // TODO:find the nearest tree that we can chop
        // let trees: TreeComponent[] = Environment.treeComps;
        // let closest: TreeComponent = null;
        // let closestDist: number = 0;
        // for (let tree of trees) {
        // 	if (closest == null) {
        // 		// first one, so choose it for now
        // 		closest = tree;
        // 		closestDist = tree.distanceSquare(agent);
        // 	} else {
        // 		// is this one closer than the last?
        // 		let dist: number = tree.distanceSquare(agent);
        // 		if (dist < closestDist) {
        // 			// we found a closer one, use it
        // 			closest = tree;
        // 			closestDist = dist;
        // 		}
        // 	}
        // }
        // if (closest == null)
        // 	return false;
        // this.target = closest;
        // return closest != null;
    };
    GotoEatAction.prototype.perform = function (agent) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isCanOutfire, true)
            this.bDone = true;
        }
        return true;
    };
    return GotoEatAction;
}(GoapAction_1.GoapAction));
exports.GotoEatAction = GotoEatAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcR290b0VhdEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQTJEO0FBSTNELCtEQUE4RDtBQUM5RCxrREFBNkM7QUFDN0MsdURBQXNEO0FBR3REO0lBQW1DLGlDQUFVO0lBSzVDO1FBQUEsWUFDQyxpQkFBTyxTQUdQO1FBUk8sV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNyQyxVQUFJLEdBQVcsQ0FBQyxDQUFBO1FBR3RCLEtBQUksQ0FBQyxlQUFlLENBQUMsbUNBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1FBQ3JGLEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUNyRCxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFTSx1Q0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLG1EQUEyQixHQUFsQyxVQUFtQyxLQUFhO1FBQy9DLE9BQU8sS0FBSyxDQUFBO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBVyxDQUFDLFlBQVksQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFBO1FBQzFCLGlEQUFpRDtRQUNqRCxzREFBc0Q7UUFDdEQscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUUvQiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxvQkFBb0I7UUFDcEIsOENBQThDO1FBQzlDLFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLElBQUk7UUFDSix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBRWpCLHlCQUF5QjtRQUV6QiwwQkFBMEI7SUFDM0IsQ0FBQztJQUVNLCtCQUFPLEdBQWQsVUFBZSxLQUFnQjtRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFckMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1RCx3REFBd0Q7WUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7U0FDakI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRixvQkFBQztBQUFELENBbEVBLEFBa0VDLENBbEVrQyx1QkFBVSxHQWtFNUM7QUFsRVksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFnZW50XCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcFwiO1xyXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9nYW1lZGF0YS9FbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uL3NyYy91dGlscy9UaW1lVXRpbFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uRGF0YVN0YXR1c1wiO1xyXG5pbXBvcnQgRW50aXR5IGZyb20gXCIuL0VudGl0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdvdG9FYXRBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcclxuXHRwcml2YXRlIGJEb25lOiBib29sZWFuID0gZmFsc2VcclxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIHdvcmtEdXJhdGlvbjogbnVtYmVyID0gMjsgLy8gc2Vjb25kc1xyXG5cdHB1YmxpYyBjb3N0OiBudW1iZXIgPSAxXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvbkRhdGFTdGF0dXMuaXNUb2xpZXRPaywgdHJ1ZSk7IC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcclxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCB0cnVlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXNldCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuYkRvbmUgPSBmYWxzZTtcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc0RvbmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5iRG9uZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IEVudGl0eSk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0XHR0aGlzLnRhcmdldCA9IEVudmlyb25tZW50LmVhdGluZ1RhcmdldDtcclxuXHRcdHJldHVybiB0aGlzLnRhcmdldCAhPSBudWxsXHJcblx0XHQvLyAvLyBUT0RPOmZpbmQgdGhlIG5lYXJlc3QgdHJlZSB0aGF0IHdlIGNhbiBjaG9wXHJcblx0XHQvLyBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcclxuXHRcdC8vIGxldCBjbG9zZXN0OiBUcmVlQ29tcG9uZW50ID0gbnVsbDtcclxuXHRcdC8vIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcclxuXHJcblx0XHQvLyBmb3IgKGxldCB0cmVlIG9mIHRyZWVzKSB7XHJcblx0XHQvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcclxuXHRcdC8vIFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XHJcblx0XHQvLyBcdFx0Y2xvc2VzdCA9IHRyZWU7XHJcblx0XHQvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdC8vIFx0fSBlbHNlIHtcclxuXHRcdC8vIFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cclxuXHRcdC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHQvLyBcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xyXG5cdFx0Ly8gXHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcclxuXHRcdC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xyXG5cdFx0Ly8gXHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xyXG5cdFx0Ly8gXHRcdH1cclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfVxyXG5cdFx0Ly8gaWYgKGNsb3Nlc3QgPT0gbnVsbClcclxuXHRcdC8vIFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcclxuXHJcblx0XHQvLyByZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBlcmZvcm0oYWdlbnQ6IEdvYXBBZ2VudCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHRoaXMuc3RhcnRUaW1lID09IDApXHJcblx0XHRcdHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpO1xyXG5cclxuXHRcdGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XHJcblx0XHRcdC8vZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpXHJcblx0XHRcdHRoaXMuYkRvbmUgPSB0cnVlXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/data/ToolType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4e5bt584VL7qvlagZk2P9P', 'ToolType');
// src/app/data/ToolType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolType = void 0;
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-11-03 19:01:10
 * @Last Modified by:   RannarYang
 * @Last Modified time: 2018-11-03 19:01:10
 */
var ToolType = /** @class */ (function () {
    function ToolType() {
    }
    ToolType.getSource = function (type) {
        return type + '_png';
    };
    ToolType.Axe = 'axe';
    ToolType.Pick = 'pick';
    return ToolType;
}());
exports.ToolType = ToolType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGRhdGFcXFRvb2xUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRztBQUNIO0lBQUE7SUFNQSxDQUFDO0lBSGMsa0JBQVMsR0FBdkIsVUFBd0IsSUFBWTtRQUNuQyxPQUFPLElBQUksR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUphLFlBQUcsR0FBVyxLQUFLLENBQUM7SUFDcEIsYUFBSSxHQUFXLE1BQU0sQ0FBQztJQUlyQyxlQUFDO0NBTkQsQUFNQyxJQUFBO0FBTlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0xMS0wMyAxOTowMToxMCBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6ICAgUmFubmFyWWFuZyBcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wMyAxOTowMToxMCBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUb29sVHlwZSB7XHJcblx0cHVibGljIHN0YXRpYyBBeGU6IHN0cmluZyA9ICdheGUnO1xyXG5cdHB1YmxpYyBzdGF0aWMgUGljazogc3RyaW5nID0gJ3BpY2snO1xyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0U291cmNlKHR5cGU6IHN0cmluZykge1xyXG5cdFx0cmV0dXJuIHR5cGUgKyAnX3BuZyc7XHJcblx0fVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/GotoToiletAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15b08XdD/lNKZEZIyLqqjK4', 'GotoToiletAction');
// goap/GotoToiletAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GotoToiletAction = void 0;
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Environment_1 = require("../src/app/gamedata/Environment");
var TimeUtil_1 = require("../src/utils/TimeUtil");
var ActionDataStatus_1 = require("./ActionDataStatus");
var GotoToiletAction = /** @class */ (function (_super) {
    __extends(GotoToiletAction, _super);
    function GotoToiletAction() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isTolietOk, true);
        return _this;
    }
    GotoToiletAction.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    GotoToiletAction.prototype.isDone = function () {
        return this.bDone;
    };
    GotoToiletAction.prototype.requiresInRange = function () {
        return true;
    };
    GotoToiletAction.prototype.checkProceduralPrecondition = function (agent) {
        this.target = Environment_1.Environment.toiletTarget;
        return this.target != null;
        // // TODO:find the nearest tree that we can chop
        // let trees: TreeComponent[] = Environment.treeComps;
        // let closest: TreeComponent = null;
        // let closestDist: number = 0;
        // for (let tree of trees) {
        // 	if (closest == null) {
        // 		// first one, so choose it for now
        // 		closest = tree;
        // 		closestDist = tree.distanceSquare(agent);
        // 	} else {
        // 		// is this one closer than the last?
        // 		let dist: number = tree.distanceSquare(agent);
        // 		if (dist < closestDist) {
        // 			// we found a closer one, use it
        // 			closest = tree;
        // 			closestDist = dist;
        // 		}
        // 	}
        // }
        // if (closest == null)
        // 	return false;
        // this.target = closest;
        // return closest != null;
    };
    GotoToiletAction.prototype.perform = function (agent) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isTolietOk, true)
            this.bDone = true;
        }
        return true;
    };
    return GotoToiletAction;
}(GoapAction_1.GoapAction));
exports.GotoToiletAction = GotoToiletAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcR290b1RvaWxldEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQTJEO0FBRTNELCtEQUE4RDtBQUM5RCxrREFBNkM7QUFDN0MsdURBQXNEO0FBRXREO0lBQXNDLG9DQUFVO0lBSS9DO1FBQUEsWUFDQyxpQkFBTyxTQUVQO1FBTk8sV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUczQyxLQUFJLENBQUMsU0FBUyxDQUFDLG1DQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDbkQsQ0FBQztJQUVNLGdDQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0saUNBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRU0sMENBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDTSxzREFBMkIsR0FBbEMsVUFBbUMsS0FBZ0I7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBVyxDQUFDLFlBQVksQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFBO1FBQzFCLGlEQUFpRDtRQUNqRCxzREFBc0Q7UUFDdEQscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUUvQiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxvQkFBb0I7UUFDcEIsOENBQThDO1FBQzlDLFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLElBQUk7UUFDSix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBRWpCLHlCQUF5QjtRQUV6QiwwQkFBMEI7SUFDM0IsQ0FBQztJQUVNLGtDQUFPLEdBQWQsVUFBZSxLQUFnQjtRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFckMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1RCxzREFBc0Q7WUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7U0FDakI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRix1QkFBQztBQUFELENBOURBLEFBOERDLENBOURxQyx1QkFBVSxHQThEL0M7QUE5RFksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiO1xyXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudFwiO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCI7XHJcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCI7XHJcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25EYXRhU3RhdHVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR290b1RvaWxldEFjdGlvbiBleHRlbmRzIEdvYXBBY3Rpb24ge1xyXG5cdHByaXZhdGUgYkRvbmU6IGJvb2xlYW4gPSBmYWxzZVxyXG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAyOyAvLyBzZWNvbmRzXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMuaXNUb2xpZXRPaywgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmJEb25lID0gZmFsc2U7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaXNEb25lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYkRvbmU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IEdvYXBBZ2VudCk6IGJvb2xlYW4ge1xyXG5cdFx0dGhpcy50YXJnZXQgPSBFbnZpcm9ubWVudC50b2lsZXRUYXJnZXQ7XHJcblx0XHRyZXR1cm4gdGhpcy50YXJnZXQgIT0gbnVsbFxyXG5cdFx0Ly8gLy8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHRyZWUgdGhhdCB3ZSBjYW4gY2hvcFxyXG5cdFx0Ly8gbGV0IHRyZWVzOiBUcmVlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC50cmVlQ29tcHM7XHJcblx0XHQvLyBsZXQgY2xvc2VzdDogVHJlZUNvbXBvbmVudCA9IG51bGw7XHJcblx0XHQvLyBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdFx0Ly8gZm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xyXG5cdFx0Ly8gXHRpZiAoY2xvc2VzdCA9PSBudWxsKSB7XHJcblx0XHQvLyBcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xyXG5cdFx0Ly8gXHRcdGNsb3Nlc3QgPSB0cmVlO1xyXG5cdFx0Ly8gXHRcdGNsb3Nlc3REaXN0ID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHQvLyBcdH0gZWxzZSB7XHJcblx0XHQvLyBcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XHJcblx0XHQvLyBcdFx0bGV0IGRpc3Q6IG51bWJlciA9IHRyZWUuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xyXG5cdFx0Ly8gXHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcclxuXHRcdC8vIFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XHJcblx0XHQvLyBcdFx0XHRjbG9zZXN0ID0gdHJlZTtcclxuXHRcdC8vIFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcclxuXHRcdC8vIFx0XHR9XHJcblx0XHQvLyBcdH1cclxuXHRcdC8vIH1cclxuXHRcdC8vIGlmIChjbG9zZXN0ID09IG51bGwpXHJcblx0XHQvLyBcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHQvLyB0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XHJcblxyXG5cdFx0Ly8gcmV0dXJuIGNsb3Nlc3QgIT0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwZXJmb3JtKGFnZW50OiBHb2FwQWdlbnQpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKVxyXG5cdFx0XHR0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKTtcclxuXHJcblx0XHRpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLndvcmtEdXJhdGlvbikge1xyXG5cdFx0XHQvL2VudGl0eS5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNUb2xpZXRPaywgdHJ1ZSlcclxuXHRcdFx0dGhpcy5iRG9uZSA9IHRydWVcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/Toilet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac435GX7A5AMpPpz8DueObl', 'Toilet');
// goap/Toilet.ts

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
var VGameObject_1 = require("../src/app/base/VGameObject");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Toilet = /** @class */ (function (_super) {
    __extends(Toilet, _super);
    function Toilet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toilet = __decorate([
        ccclass
    ], Toilet);
    return Toilet;
}(VGameObject_1.VGameObject));
exports.default = Toilet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcVG9pbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUVwRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFvQywwQkFBVztJQUEvQzs7SUFFQSxDQUFDO0lBRm9CLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FFMUI7SUFBRCxhQUFDO0NBRkQsQUFFQyxDQUZtQyx5QkFBVyxHQUU5QztrQkFGb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSAnLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0JztcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvaWxldCBleHRlbmRzIFZHYW1lT2JqZWN0IHtcclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/Sleep.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1afd55CZwJGFYieDItLlYSi', 'Sleep');
// goap/Sleep.ts

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
var VGameObject_1 = require("../src/app/base/VGameObject");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Sleep = /** @class */ (function (_super) {
    __extends(Sleep, _super);
    function Sleep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sleep = __decorate([
        ccclass
    ], Sleep);
    return Sleep;
}(VGameObject_1.VGameObject));
exports.default = Sleep;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcU2xlZXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBRXBELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQXFDLHlCQUFXO0lBQWhEOztJQUVBLENBQUM7SUFGc0IsS0FBSztRQUQzQixPQUFPO09BQ2UsS0FBSyxDQUUzQjtJQUFELFlBQUM7Q0FGRCxBQUVDLENBRm9DLHlCQUFXLEdBRS9DO2tCQUZzQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tICcuLi9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3QnO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCAgIGRlZmF1bHQgY2xhc3MgU2xlZXAgZXh0ZW5kcyBWR2FtZU9iamVjdCB7XHJcbiAgIFxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/DataMemory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec12dVAtEJBeIkK2LI6cR2R', 'DataMemory');
// goap/DataMemory.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataMemory = /** @class */ (function () {
    function DataMemory() {
        this.data = new Map();
    }
    DataMemory.prototype.set = function (key, v) {
        this.data.set(key, v);
    };
    DataMemory.prototype.get = function (key) {
        return this.data.get(key);
    };
    DataMemory.prototype.remove = function (key) {
        this.data.delete(key);
    };
    return DataMemory;
}());
exports.default = DataMemory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcRGF0YU1lbW9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBRUk7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFlLENBQUE7SUFDdEMsQ0FBQztJQUNNLHdCQUFHLEdBQVYsVUFBVyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBRU0sd0JBQUcsR0FBVixVQUFXLEdBQUc7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFTSwyQkFBTSxHQUFiLFVBQWMsR0FBRztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFDTCxpQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWVtb3J5e1xyXG4gICAgcHJpdmF0ZSBkYXRhOk1hcDxzdHJpbmcsIGFueT5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKVxyXG4gICAgfVxyXG4gICAgcHVibGljIHNldChrZXksIHYpe1xyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoa2V5LCB2KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5KXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmdldChrZXkpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZShrZXkpe1xyXG4gICAgICAgIHRoaXMuZGF0YS5kZWxldGUoa2V5KVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/ActionDataStatus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da350aTk2FJioP5Ii0n+P9C', 'ActionDataStatus');
// goap/ActionDataStatus.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionDataStatus = void 0;
var ActionDataStatus = /** @class */ (function () {
    function ActionDataStatus() {
    }
    ActionDataStatus.isTolietOk = "isTolietOk";
    ActionDataStatus.isCanOutfire = "isCanOutfire";
    ActionDataStatus.isEquipOk = "isEquipOk";
    ActionDataStatus.isFireOk = "isFireOk";
    ActionDataStatus.isSleepOk = "isSleepOk";
    ActionDataStatus.outFire = "outFire";
    return ActionDataStatus;
}());
exports.ActionDataStatus = ActionDataStatus;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcQWN0aW9uRGF0YVN0YXR1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBT0EsQ0FBQztJQU5jLDJCQUFVLEdBQUcsWUFBWSxDQUFDO0lBQzFCLDZCQUFZLEdBQUcsY0FBYyxDQUFBO0lBQzdCLDBCQUFTLEdBQUcsV0FBVyxDQUFBO0lBQ3ZCLHlCQUFRLEdBQUcsVUFBVSxDQUFBO0lBQ3JCLDBCQUFTLEdBQUcsV0FBVyxDQUFBO0lBQ3ZCLHdCQUFPLEdBQUcsU0FBUyxDQUFBO0lBQ2xDLHVCQUFDO0NBUEQsQUFPQyxJQUFBO0FBUFksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFjdGlvbkRhdGFTdGF0dXMge1xyXG5cdHB1YmxpYyBzdGF0aWMgaXNUb2xpZXRPayA9IFwiaXNUb2xpZXRPa1wiO1xyXG5cdHB1YmxpYyBzdGF0aWMgaXNDYW5PdXRmaXJlID0gXCJpc0Nhbk91dGZpcmVcIlxyXG5cdHB1YmxpYyBzdGF0aWMgaXNFcXVpcE9rID0gXCJpc0VxdWlwT2tcIlxyXG5cdHB1YmxpYyBzdGF0aWMgaXNGaXJlT2sgPSBcImlzRmlyZU9rXCJcclxuXHRwdWJsaWMgc3RhdGljIGlzU2xlZXBPayA9IFwiaXNTbGVlcE9rXCJcclxuXHRwdWJsaWMgc3RhdGljIG91dEZpcmUgPSBcIm91dEZpcmVcIlxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/Environment.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15b8cMNu/dGipUMaglywqEv', 'Environment');
// src/app/gamedata/Environment.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
var Environment = /** @class */ (function () {
    function Environment() {
    }
    return Environment;
}());
exports.Environment = Environment;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxFbnZpcm9ubWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTtJQUFBO0lBYUEsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFYXRpbmcgZnJvbSBcIi4uLy4uLy4uL2dvYXAvRWF0aW5nXCI7XHJcbmltcG9ydCBFcXVpcCBmcm9tIFwiLi4vLi4vLi4vZ29hcC9FcXVpcFwiO1xyXG5pbXBvcnQgRmlyZSBmcm9tIFwiLi4vLi4vLi4vZ29hcC9GaXJlXCI7XHJcbmltcG9ydCBTbGVlcCBmcm9tIFwiLi4vLi4vLi4vZ29hcC9TbGVlcFwiO1xyXG5pbXBvcnQgU3RvcmVBIGZyb20gXCIuLi8uLi8uLi9nb2FwL1N0b3JlQVwiO1xyXG5pbXBvcnQgVG9pbGV0IGZyb20gXCIuLi8uLi8uLi9nb2FwL1RvaWxldFwiO1xyXG5pbXBvcnQgeyBDaG9wcGluZ0Jsb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4vQ2hvcHBpbmdCbG9ja0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGb3JnZUNvbXBvbmVudCB9IGZyb20gXCIuL0ZvcmdlQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElyb25Sb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4vSXJvblJvY2tDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU3VwcGx5UGlsZUNvbXBvbmVudCB9IGZyb20gXCIuL1N1cHBseVBpbGVDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVHJlZUNvbXBvbmVudCB9IGZyb20gXCIuL1RyZWVDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XHJcblx0cHVibGljIHN0YXRpYyBzdXBwbHlQaWxlQ29tcHM6IFN1cHBseVBpbGVDb21wb25lbnRbXTtcclxuXHRwdWJsaWMgc3RhdGljIHRyZWVDb21wczogVHJlZUNvbXBvbmVudFtdO1xyXG5cdHB1YmxpYyBzdGF0aWMgcm9ja0NvbXBzOiBJcm9uUm9ja0NvbXBvbmVudFtdO1xyXG5cdHB1YmxpYyBzdGF0aWMgZm9yZ2VDb21wczogRm9yZ2VDb21wb25lbnRbXTtcclxuXHRwdWJsaWMgc3RhdGljIGNob3BwaW5nQmxvY2tDb21wczogQ2hvcHBpbmdCbG9ja0NvbXBvbmVudFtdO1xyXG5cclxuXHRwdWJsaWMgc3RhdGljIHRvaWxldFRhcmdldDogVG9pbGV0O1xyXG5cdHB1YmxpYyBzdGF0aWMgZmlyZVRhcmdldDogRmlyZTtcclxuXHRwdWJsaWMgc3RhdGljIGVhdGluZ1RhcmdldDogRWF0aW5nO1xyXG5cdHB1YmxpYyBzdGF0aWMgZXF1aXBUYXJnZXQ6IEVxdWlwO1xyXG5cdHB1YmxpYyBzdGF0aWMgc2xlZXBUYXJnZXQ6IFNsZWVwXHJcblx0cHVibGljIHN0YXRpYyBzdG9yZUE6IFN0b3JlQVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/data/GameDataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0fae6p8ixIWZuJZzEkk1+6', 'GameDataManager');
// src/app/data/GameDataManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameDataManager = void 0;
var T_LabourerContainer_1 = require("./T_LabourerContainer");
/*
 * @Description: 游戏数据管理器
 * @Author: RannarYang
 * @Date: 2018-11-03 19:02:46
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-03 19:03:42
 */
var GameDataManager = /** @class */ (function () {
    function GameDataManager() {
        this.t_labourderContainer = new T_LabourerContainer_1.T_LabourerContainer();
    }
    Object.defineProperty(GameDataManager, "I", {
        get: function () {
            if (!this.instance) {
                this.instance = new GameDataManager();
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    return GameDataManager;
}());
exports.GameDataManager = GameDataManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGRhdGFcXEdhbWVEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2REFBNEQ7QUFFNUQ7Ozs7OztHQU1HO0FBQ0g7SUFBQTtRQUNXLHlCQUFvQixHQUF3QixJQUFJLHlDQUFtQixFQUFFLENBQUM7SUFTakYsQ0FBQztJQU5HLHNCQUFrQixvQkFBQzthQUFuQjtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZUFBZSxFQUFFLENBQUM7YUFDekM7WUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFDTCxzQkFBQztBQUFELENBVkEsQUFVQyxJQUFBO0FBVlksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUX0xhYm91cmVyQ29udGFpbmVyIH0gZnJvbSBcIi4vVF9MYWJvdXJlckNvbnRhaW5lclwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiDmuLjmiI/mlbDmja7nrqHnkIblmahcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMTEtMDMgMTk6MDI6NDYgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDMgMTk6MDM6NDJcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHYW1lRGF0YU1hbmFnZXIge1xyXG4gICAgcHVibGljIHRfbGFib3VyZGVyQ29udGFpbmVyOiBUX0xhYm91cmVyQ29udGFpbmVyID0gbmV3IFRfTGFib3VyZXJDb250YWluZXIoKTtcclxuICAgIC8qKuWNleS+iyAqL1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEdhbWVEYXRhTWFuYWdlcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEkoKTogR2FtZURhdGFNYW5hZ2VyIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBHYW1lRGF0YU1hbmFnZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/DropOffFirewoodAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a407ri6IhPLIFFb7c1jdCa', 'DropOffFirewoodAction');
// src/app/gamedata/actions/DropOffFirewoodAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropOffFirewoodAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:17
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:32:49
 */
var DropOffFirewoodAction = /** @class */ (function (_super) {
    __extends(DropOffFirewoodAction, _super);
    function DropOffFirewoodAction() {
        var _this = _super.call(this) || this;
        _this.droppedOffFirewood = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasFirewood, true); // can't drop off firewood if we don't already have some
        _this.addEffect(ActionStatus_1.ActionStatus.HasFirewood, false); // we now have no firewood
        _this.addEffect(ActionStatus_1.ActionStatus.CollectFirewood, true); // we collected firewood
        return _this;
    }
    DropOffFirewoodAction.prototype.reset = function () {
        this.droppedOffFirewood = false;
    };
    DropOffFirewoodAction.prototype.isDone = function () {
        return this.droppedOffFirewood;
    };
    DropOffFirewoodAction.prototype.requiresInRange = function () {
        return true; // yes we need to be near a supply pile so we can drop off the firewood
    };
    DropOffFirewoodAction.prototype.checkProceduralPrecondition = function (agent) {
        // TODO:find the nearest supply pile that has spare firewood
        var supplyPiles = Environment_1.Environment.supplyPileComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = supply;
                closestDist = supply.distanceSquare(agent);
            }
            else {
                // is this one closer than the last?
                var dist = supply.distanceSquare(agent);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = supply;
                    closestDist = dist;
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    DropOffFirewoodAction.prototype.perform = function (iGoap) {
        var labourer = iGoap;
        var backpack = labourer.backpack;
        backpack.numFirewood += backpack.numFirewood;
        this.droppedOffFirewood = true;
        backpack.numFirewood = 0;
        return true;
    };
    return DropOffFirewoodAction;
}(GoapAction_1.GoapAction));
exports.DropOffFirewoodAction = DropOffFirewoodAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxEcm9wT2ZmRmlyZXdvb2RBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUMxRCx1REFBc0Q7QUFHdEQsOENBQTZDO0FBSTdDOzs7Ozs7R0FNRztBQUNIO0lBQTJDLHlDQUFVO0lBRXBEO1FBQUEsWUFDQyxpQkFBTyxTQUlQO1FBTk8sd0JBQWtCLEdBQVksS0FBSyxDQUFDO1FBRzNDLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyx3REFBd0Q7UUFDOUcsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLDBCQUEwQjtRQUMzRSxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsd0JBQXdCOztJQUM3RSxDQUFDO0lBRU0scUNBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVNLHNDQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNoQyxDQUFDO0lBRU0sK0NBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQyxDQUFDLHVFQUF1RTtJQUNyRixDQUFDO0lBQ00sMkRBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELDREQUE0RDtRQUM1RCxJQUFJLFdBQVcsR0FBMEIseUJBQVcsQ0FBQyxlQUFlLENBQUM7UUFDckUsSUFBSSxPQUFPLEdBQXdCLElBQUksQ0FBQztRQUN4QyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUM7UUFFNUIsS0FBbUIsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUU7WUFBM0IsSUFBSSxNQUFNLG9CQUFBO1lBQ2QsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNwQixrQ0FBa0M7Z0JBQ2xDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ2pCLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNDO2lCQUFNO2dCQUNOLG9DQUFvQztnQkFDcEMsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO29CQUN2QixnQ0FBZ0M7b0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQ2pCLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0Q7U0FDRDtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLHVDQUFPLEdBQWQsVUFBZSxLQUFZO1FBQzFCLElBQUksUUFBUSxHQUFHLEtBQWlCLENBQUM7UUFDakMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNqQyxRQUFRLENBQUMsV0FBVyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixRQUFRLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUV6QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRiw0QkFBQztBQUFELENBMURBLEFBMERDLENBMUQwQyx1QkFBVSxHQTBEcEQ7QUExRFksc0RBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvSUdvYXBcIjtcclxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIjtcclxuaW1wb3J0IHsgU3VwcGx5UGlsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9TdXBwbHlQaWxlQ29tcG9uZW50XCI7XHJcblxyXG4vKlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDowOToxNyBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMC0yOCAxMTozMjo0OVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERyb3BPZmZGaXJld29vZEFjdGlvbiBleHRlbmRzIEdvYXBBY3Rpb24ge1xyXG5cdHByaXZhdGUgZHJvcHBlZE9mZkZpcmV3b29kOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNGaXJld29vZCwgdHJ1ZSk7IC8vIGNhbid0IGRyb3Agb2ZmIGZpcmV3b29kIGlmIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBzb21lXHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuSGFzRmlyZXdvb2QsIGZhbHNlKTsgLy8gd2Ugbm93IGhhdmUgbm8gZmlyZXdvb2RcclxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5Db2xsZWN0RmlyZXdvb2QsIHRydWUpOyAvLyB3ZSBjb2xsZWN0ZWQgZmlyZXdvb2RcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXNldCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuZHJvcHBlZE9mZkZpcmV3b29kID0gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaXNEb25lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZHJvcHBlZE9mZkZpcmV3b29kO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpIHtcclxuXHRcdHJldHVybiB0cnVlOyAvLyB5ZXMgd2UgbmVlZCB0byBiZSBuZWFyIGEgc3VwcGx5IHBpbGUgc28gd2UgY2FuIGRyb3Agb2ZmIHRoZSBmaXJld29vZFxyXG5cdH1cclxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xyXG5cdFx0Ly8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHN1cHBseSBwaWxlIHRoYXQgaGFzIHNwYXJlIGZpcmV3b29kXHJcblx0XHRsZXQgc3VwcGx5UGlsZXM6IFN1cHBseVBpbGVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnN1cHBseVBpbGVDb21wcztcclxuXHRcdGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbDtcclxuXHRcdGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcclxuXHJcblx0XHRmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcclxuXHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xyXG5cdFx0XHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcclxuXHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xyXG5cdFx0XHRcdGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cclxuXHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XHJcblx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxyXG5cdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcclxuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChjbG9zZXN0ID09IG51bGwpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XHJcblxyXG5cdFx0cmV0dXJuIGNsb3Nlc3QgIT0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwZXJmb3JtKGlHb2FwOiBJR29hcCk6IGJvb2xlYW4ge1xyXG5cdFx0bGV0IGxhYm91cmVyID0gaUdvYXAgYXMgTGFib3VyZXI7XHJcblx0XHRsZXQgYmFja3BhY2sgPSBsYWJvdXJlci5iYWNrcGFjaztcclxuXHRcdGJhY2twYWNrLm51bUZpcmV3b29kICs9IGJhY2twYWNrLm51bUZpcmV3b29kO1xyXG5cdFx0dGhpcy5kcm9wcGVkT2ZmRmlyZXdvb2QgPSB0cnVlO1xyXG5cdFx0YmFja3BhY2subnVtRmlyZXdvb2QgPSAwO1xyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/SupplyPileComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '22481HRyh5LJqU8upRokqEA', 'SupplyPileComponent');
// src/app/gamedata/SupplyPileComponent.ts

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
exports.SupplyPileComponent = void 0;
var VGameObject_1 = require("../base/VGameObject");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SupplyPileComponent = /** @class */ (function (_super) {
    __extends(SupplyPileComponent, _super);
    function SupplyPileComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.txtToolNum = null;
        _this.txtOreNum = null;
        _this.txtLogNum = null;
        _this.txtFirewoodNum = null;
        _this._numTools = 0; // for mining ore and chopping logs
        _this._numLogs = 0; // makes firewood
        _this._numFirewood = 0; // what we want to make
        _this._numOre = 0; // makes tools
        return _this;
    }
    SupplyPileComponent.prototype.start = function () {
        this.txtToolNum.string = "工具：" + this.numTools;
        this.txtOreNum.string = "矿石：" + this.numOre;
        this.txtLogNum.string = "原木：" + this.numLogs;
        this.txtFirewoodNum.string = "木柴：" + this.numFirewood;
    };
    Object.defineProperty(SupplyPileComponent.prototype, "numTools", {
        get: function () {
            return this._numTools;
        },
        set: function (val) {
            val = Number(val);
            this._numTools = val;
            this.txtToolNum && (this.txtToolNum.string = "工具：" + val);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SupplyPileComponent.prototype, "numLogs", {
        get: function () {
            return this._numLogs;
        },
        set: function (val) {
            val = Number(val);
            this._numLogs = val;
            this.txtLogNum && (this.txtLogNum.string = "原木：" + val);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SupplyPileComponent.prototype, "numFirewood", {
        get: function () {
            return this._numFirewood;
        },
        set: function (val) {
            val = Number(val);
            this._numFirewood = val;
            this.txtFirewoodNum && (this.txtFirewoodNum.string = "木柴：" + val);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SupplyPileComponent.prototype, "numOre", {
        get: function () {
            return this._numOre;
        },
        set: function (val) {
            val = Number(val);
            this._numOre = val;
            this.txtOreNum && (this.txtOreNum.string = "矿石：" + val);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        property(cc.Label)
    ], SupplyPileComponent.prototype, "txtToolNum", void 0);
    __decorate([
        property(cc.Label)
    ], SupplyPileComponent.prototype, "txtOreNum", void 0);
    __decorate([
        property(cc.Label)
    ], SupplyPileComponent.prototype, "txtLogNum", void 0);
    __decorate([
        property(cc.Label)
    ], SupplyPileComponent.prototype, "txtFirewoodNum", void 0);
    SupplyPileComponent = __decorate([
        ccclass
    ], SupplyPileComponent);
    return SupplyPileComponent;
}(VGameObject_1.VGameObject));
exports.SupplyPileComponent = SupplyPileComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxTdXBwbHlQaWxlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBeUMsdUNBQVc7SUFBcEQ7UUFBQSxxRUEyREM7UUF6RE8sZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBUy9CLGVBQVMsR0FBVyxDQUFDLENBQUMsQ0FBQyxtQ0FBbUM7UUFVMUQsY0FBUSxHQUFXLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtRQVl2QyxrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtRQVVqRCxhQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUMsY0FBYzs7SUFVNUMsQ0FBQztJQWpEQSxtQ0FBSyxHQUFMO1FBQ0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkQsQ0FBQztJQUdELHNCQUFXLHlDQUFRO2FBQW5CO1lBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3ZCLENBQUM7YUFDRCxVQUFvQixHQUFXO1lBQzlCLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMzRCxDQUFDOzs7T0FMQTtJQVFELHNCQUFXLHdDQUFPO2FBQWxCO1lBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RCLENBQUM7YUFDRCxVQUFtQixHQUFXO1lBQzdCLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztRQUV6RCxDQUFDOzs7T0FOQTtJQVVELHNCQUFXLDRDQUFXO2FBQXRCO1lBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzFCLENBQUM7YUFDRCxVQUF1QixHQUFXO1lBQ2pDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7WUFDeEIsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNuRSxDQUFDOzs7T0FMQTtJQVFELHNCQUFXLHVDQUFNO2FBQWpCO1lBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JCLENBQUM7YUFDRCxVQUFrQixHQUFXO1lBQzVCLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN6RCxDQUFDOzs7T0FMQTtJQWxERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJEQUNnQjtJQUVuQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBEQUNlO0lBRWxDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ2U7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrREFDb0I7SUFSM0IsbUJBQW1CO1FBRC9CLE9BQU87T0FDSyxtQkFBbUIsQ0EyRC9CO0lBQUQsMEJBQUM7Q0EzREQsQUEyREMsQ0EzRHdDLHlCQUFXLEdBMkRuRDtBQTNEWSxrREFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBTdXBwbHlQaWxlQ29tcG9uZW50IGV4dGVuZHMgVkdhbWVPYmplY3Qge1xyXG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcclxuXHRwdWJsaWMgdHh0VG9vbE51bTogY2MuTGFiZWwgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcclxuXHRwdWJsaWMgdHh0T3JlTnVtOiBjYy5MYWJlbCA9IG51bGw7XHJcblx0QHByb3BlcnR5KGNjLkxhYmVsKVxyXG5cdHB1YmxpYyB0eHRMb2dOdW06IGNjLkxhYmVsID0gbnVsbDtcclxuXHRAcHJvcGVydHkoY2MuTGFiZWwpXHJcblx0cHVibGljIHR4dEZpcmV3b29kTnVtOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG5cdHN0YXJ0KCkge1xyXG5cdFx0dGhpcy50eHRUb29sTnVtLnN0cmluZyA9IFwi5bel5YW377yaXCIgKyB0aGlzLm51bVRvb2xzO1xyXG5cdFx0dGhpcy50eHRPcmVOdW0uc3RyaW5nID0gXCLnn7/nn7PvvJpcIiArIHRoaXMubnVtT3JlO1xyXG5cdFx0dGhpcy50eHRMb2dOdW0uc3RyaW5nID0gXCLljp/mnKjvvJpcIiArIHRoaXMubnVtTG9ncztcclxuXHRcdHRoaXMudHh0RmlyZXdvb2ROdW0uc3RyaW5nID0gXCLmnKjmn7TvvJpcIiArIHRoaXMubnVtRmlyZXdvb2Q7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9udW1Ub29sczogbnVtYmVyID0gMDsgLy8gZm9yIG1pbmluZyBvcmUgYW5kIGNob3BwaW5nIGxvZ3NcclxuXHRwdWJsaWMgZ2V0IG51bVRvb2xzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX251bVRvb2xzO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0IG51bVRvb2xzKHZhbDogbnVtYmVyKSB7XHJcblx0XHR2YWwgPSBOdW1iZXIodmFsKTtcclxuXHRcdHRoaXMuX251bVRvb2xzID0gdmFsO1xyXG5cdFx0dGhpcy50eHRUb29sTnVtICYmICh0aGlzLnR4dFRvb2xOdW0uc3RyaW5nID0gXCLlt6XlhbfvvJpcIiArIHZhbCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9udW1Mb2dzOiBudW1iZXIgPSAwOyAvLyBtYWtlcyBmaXJld29vZFxyXG5cdHB1YmxpYyBnZXQgbnVtTG9ncygpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIHRoaXMuX251bUxvZ3M7XHJcblx0fVxyXG5cdHB1YmxpYyBzZXQgbnVtTG9ncyh2YWw6IG51bWJlcikge1xyXG5cdFx0dmFsID0gTnVtYmVyKHZhbCk7XHJcblx0XHR0aGlzLl9udW1Mb2dzID0gdmFsO1xyXG5cdFx0dGhpcy50eHRMb2dOdW0gJiYgKHRoaXMudHh0TG9nTnVtLnN0cmluZyA9IFwi5Y6f5pyo77yaXCIgKyB2YWwpO1xyXG5cclxuXHR9XHJcblxyXG5cclxuXHRwcml2YXRlIF9udW1GaXJld29vZDogbnVtYmVyID0gMDsgLy8gd2hhdCB3ZSB3YW50IHRvIG1ha2VcclxuXHRwdWJsaWMgZ2V0IG51bUZpcmV3b29kKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbnVtRmlyZXdvb2Q7XHJcblx0fVxyXG5cdHB1YmxpYyBzZXQgbnVtRmlyZXdvb2QodmFsOiBudW1iZXIpIHtcclxuXHRcdHZhbCA9IE51bWJlcih2YWwpO1xyXG5cdFx0dGhpcy5fbnVtRmlyZXdvb2QgPSB2YWw7XHJcblx0XHR0aGlzLnR4dEZpcmV3b29kTnVtICYmICh0aGlzLnR4dEZpcmV3b29kTnVtLnN0cmluZyA9IFwi5pyo5p+077yaXCIgKyB2YWwpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBfbnVtT3JlOiBudW1iZXIgPSAwOyAvLyBtYWtlcyB0b29sc1xyXG5cdHB1YmxpYyBnZXQgbnVtT3JlKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbnVtT3JlO1xyXG5cdH1cclxuXHRwdWJsaWMgc2V0IG51bU9yZSh2YWw6IG51bWJlcikge1xyXG5cdFx0dmFsID0gTnVtYmVyKHZhbCk7XHJcblx0XHR0aGlzLl9udW1PcmUgPSB2YWw7XHJcblx0XHR0aGlzLnR4dE9yZU51bSAmJiAodGhpcy50eHRPcmVOdW0uc3RyaW5nID0gXCLnn7/nn7PvvJpcIiArIHZhbCk7XHJcblx0fVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/ChoppingBlockComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20395jRpwtE+opJdaJn1KXL', 'ChoppingBlockComponent');
// src/app/gamedata/ChoppingBlockComponent.ts

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
exports.ChoppingBlockComponent = void 0;
var VGameObject_1 = require("../base/VGameObject");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ChoppingBlockComponent = /** @class */ (function (_super) {
    __extends(ChoppingBlockComponent, _super);
    function ChoppingBlockComponent() {
        return _super.call(this) || this;
    }
    ChoppingBlockComponent = __decorate([
        ccclass
    ], ChoppingBlockComponent);
    return ChoppingBlockComponent;
}(VGameObject_1.VGameObject));
exports.ChoppingBlockComponent = ChoppingBlockComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxDaG9wcGluZ0Jsb2NrQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBNEMsMENBQVc7SUFFdEQ7ZUFDQyxpQkFBTztJQUNSLENBQUM7SUFKVyxzQkFBc0I7UUFEbEMsT0FBTztPQUNLLHNCQUFzQixDQUtsQztJQUFELDZCQUFDO0NBTEQsQUFLQyxDQUwyQyx5QkFBVyxHQUt0RDtBQUxZLHdEQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIENob3BwaW5nQmxvY2tDb21wb25lbnQgZXh0ZW5kcyBWR2FtZU9iamVjdCB7XHJcblxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKClcclxuXHR9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/IronRockComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35edbjhwXlIVZz8vGJZkNR7', 'IronRockComponent');
// src/app/gamedata/IronRockComponent.ts

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
exports.IronRockComponent = void 0;
var VGameObject_1 = require("../base/VGameObject");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var IronRockComponent = /** @class */ (function (_super) {
    __extends(IronRockComponent, _super);
    function IronRockComponent() {
        return _super.call(this) || this;
    }
    IronRockComponent = __decorate([
        ccclass
    ], IronRockComponent);
    return IronRockComponent;
}(VGameObject_1.VGameObject));
exports.IronRockComponent = IronRockComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxJcm9uUm9ja0NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQzVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXVDLHFDQUFXO0lBQ2pEO2VBQ0MsaUJBQU87SUFDUixDQUFDO0lBSFcsaUJBQWlCO1FBRDdCLE9BQU87T0FDSyxpQkFBaUIsQ0FJN0I7SUFBRCx3QkFBQztDQUpELEFBSUMsQ0FKc0MseUJBQVcsR0FJakQ7QUFKWSw4Q0FBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBJcm9uUm9ja0NvbXBvbmVudCBleHRlbmRzIFZHYW1lT2JqZWN0IHtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/ToolComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a70bfmR/JFOALM7ltmhuP+w', 'ToolComponent');
// src/app/gamedata/ToolComponent.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolComponent = void 0;
var ToolComponent = /** @class */ (function (_super) {
    __extends(ToolComponent, _super);
    function ToolComponent() {
        var _this = _super.call(this) || this;
        _this.strength = 1; // full strength
        return _this;
    }
    ToolComponent.prototype.use = function (damage) {
        this.strength -= damage;
    };
    ToolComponent.prototype.destroyed = function () {
        return this.strength <= 0;
    };
    return ToolComponent;
}(cc.Component));
exports.ToolComponent = ToolComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxUb29sQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFtQyxpQ0FBWTtJQUc5QztRQUFBLFlBQ0MsaUJBQU8sU0FFUDtRQURBLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCOztJQUNwQyxDQUFDO0lBRU0sMkJBQUcsR0FBVixVQUFXLE1BQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVNLGlDQUFTLEdBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUYsb0JBQUM7QUFBRCxDQWhCQSxBQWdCQyxDQWhCa0MsRUFBRSxDQUFDLFNBQVMsR0FnQjlDO0FBaEJZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRvb2xDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdC8qKlswLi4xXSBvciAwJSB0byAxMDAlICovXHJcblx0cHVibGljIHN0cmVuZ3RoOiBudW1iZXI7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuc3RyZW5ndGggPSAxOyAvLyBmdWxsIHN0cmVuZ3RoXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXNlKGRhbWFnZTogbnVtYmVyKTogdm9pZCB7XHJcblx0XHR0aGlzLnN0cmVuZ3RoIC09IGRhbWFnZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkZXN0cm95ZWQoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdHJlbmd0aCA8PSAwO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/ForgeComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19482/b3s9PqZZ3dBvg4fBL', 'ForgeComponent');
// src/app/gamedata/ForgeComponent.ts

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
exports.ForgeComponent = void 0;
var VGameObject_1 = require("../base/VGameObject");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ForgeComponent = /** @class */ (function (_super) {
    __extends(ForgeComponent, _super);
    function ForgeComponent() {
        return _super.call(this) || this;
    }
    ForgeComponent = __decorate([
        ccclass
    ], ForgeComponent);
    return ForgeComponent;
}(VGameObject_1.VGameObject));
exports.ForgeComponent = ForgeComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxGb3JnZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQzVDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQW9DLGtDQUFXO0lBQzlDO2VBQ0MsaUJBQU87SUFDUixDQUFDO0lBSFcsY0FBYztRQUQxQixPQUFPO09BQ0ssY0FBYyxDQUkxQjtJQUFELHFCQUFDO0NBSkQsQUFJQyxDQUptQyx5QkFBVyxHQUk5QztBQUpZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgRm9yZ2VDb21wb25lbnQgZXh0ZW5kcyBWR2FtZU9iamVjdCB7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHR9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/TreeComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7dbb8JVIqxIm6hcIp6PP+Jv', 'TreeComponent');
// src/app/gamedata/TreeComponent.ts

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
exports.TreeComponent = void 0;
var VGameObject_1 = require("../base/VGameObject");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TreeComponent = /** @class */ (function (_super) {
    __extends(TreeComponent, _super);
    function TreeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreeComponent = __decorate([
        ccclass
    ], TreeComponent);
    return TreeComponent;
}(VGameObject_1.VGameObject));
exports.TreeComponent = TreeComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxUcmVlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBbUMsaUNBQVc7SUFBOUM7O0lBQ0EsQ0FBQztJQURZLGFBQWE7UUFEekIsT0FBTztPQUNLLGFBQWEsQ0FDekI7SUFBRCxvQkFBQztDQURELEFBQ0MsQ0FEa0MseUJBQVcsR0FDN0M7QUFEWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFRyZWVDb21wb25lbnQgZXh0ZW5kcyBWR2FtZU9iamVjdCB7XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/DropOffOreAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7298eqbu4dPhIuAI/16oKQq', 'DropOffOreAction');
// src/app/gamedata/actions/DropOffOreAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropOffOreAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:11:26
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:34:51
 */
var DropOffOreAction = /** @class */ (function (_super) {
    __extends(DropOffOreAction, _super);
    function DropOffOreAction() {
        var _this = _super.call(this) || this;
        _this.droppedOffOre = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasOre, true); // can't drop off ore if we don't already have some
        _this.addEffect(ActionStatus_1.ActionStatus.HasOre, false); // we now have no ore
        _this.addEffect(ActionStatus_1.ActionStatus.CollectOre, true); // we collected ore
        return _this;
    }
    DropOffOreAction.prototype.reset = function () {
        this.droppedOffOre = false;
    };
    DropOffOreAction.prototype.isDone = function () {
        return this.droppedOffOre;
    };
    DropOffOreAction.prototype.requiresInRange = function () {
        return true; // yes we need to be near a supply pile so we can drop off the ore
    };
    DropOffOreAction.prototype.checkProceduralPrecondition = function (agent) {
        //TODO: find the nearest supply pile that has spare ore
        var supplyPiles = Environment_1.Environment.supplyPileComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = supply;
                closestDist = supply.distanceSquare(agent);
            }
            else {
                // is this one closer than the last?
                var dist = supply.distanceSquare(agent);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = supply;
                    closestDist = dist;
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    DropOffOreAction.prototype.perform = function (labourer) {
        var backpack = labourer.backpack;
        this.target.numOre += backpack.numOre;
        this.droppedOffOre = true;
        backpack.numOre = 0;
        //TODO play effect, change actor icon
        return true;
    };
    return DropOffOreAction;
}(GoapAction_1.GoapAction));
exports.DropOffOreAction = DropOffOreAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxEcm9wT2ZmT3JlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsdURBQXNEO0FBR3RELDhDQUE2QztBQUk3Qzs7Ozs7O0dBTUc7QUFDSDtJQUFzQyxvQ0FBVTtJQUcvQztRQUFBLFlBQ0MsaUJBQU8sU0FJUDtRQVBPLG1CQUFhLEdBQUcsS0FBSyxDQUFDO1FBSTdCLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxtREFBbUQ7UUFDcEcsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtRQUNqRSxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1COztJQUNuRSxDQUFDO0lBRU0sZ0NBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFTSxpQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFDTSwwQ0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLENBQUMsa0VBQWtFO0lBQ2hGLENBQUM7SUFDTSxzREFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQsdURBQXVEO1FBQ3ZELElBQUksV0FBVyxHQUEwQix5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQUNyRSxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFDO1FBQ3hDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDZCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDakIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ04sb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3ZCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDakIsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDbkI7YUFDRDtTQUNEO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNsQixPQUFPLEtBQUssQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRXRCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sa0NBQU8sR0FBZCxVQUFlLFFBQWtCO1FBQ2hDLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDcEIscUNBQXFDO1FBRXJDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLHVCQUFDO0FBQUQsQ0ExREEsQUEwREMsQ0ExRHFDLHVCQUFVLEdBMEQvQztBQTFEWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIjtcclxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIjtcclxuaW1wb3J0IHsgU3VwcGx5UGlsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9TdXBwbHlQaWxlQ29tcG9uZW50XCI7XHJcblxyXG4vKlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDoxMToyNiBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMC0yOCAxMTozNDo1MVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERyb3BPZmZPcmVBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcclxuXHRwcml2YXRlIGRyb3BwZWRPZmZPcmUgPSBmYWxzZTtcclxuXHRwdWJsaWMgdGFyZ2V0OiBTdXBwbHlQaWxlQ29tcG9uZW50OyAvLyB3aGVyZSB3ZSBkcm9wIG9mZiB0aGUgb3JlXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNPcmUsIHRydWUpOyAvLyBjYW4ndCBkcm9wIG9mZiBvcmUgaWYgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIHNvbWVcclxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNPcmUsIGZhbHNlKTsgLy8gd2Ugbm93IGhhdmUgbm8gb3JlXHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuQ29sbGVjdE9yZSwgdHJ1ZSk7IC8vIHdlIGNvbGxlY3RlZCBvcmVcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXNldCgpIHtcclxuXHRcdHRoaXMuZHJvcHBlZE9mZk9yZSA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLmRyb3BwZWRPZmZPcmU7XHJcblx0fVxyXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTsgLy8geWVzIHdlIG5lZWQgdG8gYmUgbmVhciBhIHN1cHBseSBwaWxlIHNvIHdlIGNhbiBkcm9wIG9mZiB0aGUgb3JlXHJcblx0fVxyXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IFZHYW1lT2JqZWN0KTogYm9vbGVhbiB7XHJcblx0XHQvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3Qgc3VwcGx5IHBpbGUgdGhhdCBoYXMgc3BhcmUgb3JlXHJcblx0XHRsZXQgc3VwcGx5UGlsZXM6IFN1cHBseVBpbGVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnN1cHBseVBpbGVDb21wcztcclxuXHRcdGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbDtcclxuXHRcdGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcclxuXHJcblx0XHRmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcclxuXHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xyXG5cdFx0XHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcclxuXHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xyXG5cdFx0XHRcdGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cclxuXHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XHJcblx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxyXG5cdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcclxuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChjbG9zZXN0ID09IG51bGwpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XHJcblxyXG5cdFx0cmV0dXJuIGNsb3Nlc3QgIT0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwZXJmb3JtKGxhYm91cmVyOiBMYWJvdXJlcik6IGJvb2xlYW4ge1xyXG5cdFx0bGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrO1xyXG5cdFx0dGhpcy50YXJnZXQubnVtT3JlICs9IGJhY2twYWNrLm51bU9yZTtcclxuXHRcdHRoaXMuZHJvcHBlZE9mZk9yZSA9IHRydWU7XHJcblx0XHRiYWNrcGFjay5udW1PcmUgPSAwO1xyXG5cdFx0Ly9UT0RPIHBsYXkgZWZmZWN0LCBjaGFuZ2UgYWN0b3IgaWNvblxyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/BackPackComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9c368tjj3lOdoA4/lBbS3e1', 'BackPackComponent');
// src/app/gamedata/BackPackComponent.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackPackComponent = void 0;
/*
 * @Description: Holds resources for the Agent
 * @Author: Rannar.Yang
 * @Date: 2018-09-05 20:44:56
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 18:33:07
 */
var BackPackComponent = /** @class */ (function () {
    function BackPackComponent(numLogs, numFirewood, numOre) {
        this._numLogs = 0;
        this._numFirewood = 0;
        this._numOre = 0;
        this._numLogs = numLogs;
        this._numFirewood = numFirewood;
        this._numOre = numOre;
    }
    Object.defineProperty(BackPackComponent.prototype, "numLogs", {
        get: function () {
            return this._numLogs;
        },
        set: function (val) {
            this._numLogs = val;
            this.owner.updateBackPack();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackPackComponent.prototype, "numFirewood", {
        get: function () {
            return this._numFirewood;
        },
        set: function (val) {
            this._numFirewood = val;
            this.owner.updateBackPack();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BackPackComponent.prototype, "numOre", {
        get: function () {
            return this._numOre;
        },
        set: function (val) {
            this._numOre = val;
            this.owner.updateBackPack();
        },
        enumerable: false,
        configurable: true
    });
    BackPackComponent.prototype.setOwner = function (owner) {
        this.owner = owner;
    };
    BackPackComponent.prototype.hasOre = function () {
        return this.numOre > 0;
    };
    BackPackComponent.prototype.hasLog = function () {
        return this.numLogs > 0;
    };
    BackPackComponent.prototype.hasFirewood = function () {
        return this.numFirewood > 0;
    };
    return BackPackComponent;
}());
exports.BackPackComponent = BackPackComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxCYWNrUGFja0NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0dBTUc7QUFDSDtJQThCQywyQkFBWSxPQUFlLEVBQUUsV0FBbUIsRUFBRSxNQUFjO1FBNUJ4RCxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBVXJCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBU3pCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFVM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQS9CRCxzQkFBVyxzQ0FBTzthQUFsQjtZQUNDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN0QixDQUFDO2FBQ0QsVUFBbUIsR0FBVztZQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdCLENBQUM7OztPQUpBO0lBUUQsc0JBQVcsMENBQVc7YUFBdEI7WUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQXVCLEdBQVc7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QixDQUFDOzs7T0FKQTtJQU9ELHNCQUFXLHFDQUFNO2FBQWpCO1lBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JCLENBQUM7YUFDRCxVQUFrQixHQUFXO1lBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0IsQ0FBQzs7O09BSkE7SUFXTSxvQ0FBUSxHQUFmLFVBQWdCLEtBQWU7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVNLGtDQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxrQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRU0sdUNBQVcsR0FBbEI7UUFDQyxPQUFPLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRix3QkFBQztBQUFELENBbkRBLEFBbURDLElBQUE7QUFuRFksOENBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi9sYWJvdXJlcnMvTGFib3VyZXJcIjtcclxuXHJcbi8qXHJcbiAqIEBEZXNjcmlwdGlvbjogSG9sZHMgcmVzb3VyY2VzIGZvciB0aGUgQWdlbnRcclxuICogQEF1dGhvcjogUmFubmFyLllhbmcgXHJcbiAqIEBEYXRlOiAyMDE4LTA5LTA1IDIwOjQ0OjU2IFxyXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTA0IDE4OjMzOjA3XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmFja1BhY2tDb21wb25lbnQge1xyXG5cdHByaXZhdGUgb3duZXI6IExhYm91cmVyO1xyXG5cdHByaXZhdGUgX251bUxvZ3M6IG51bWJlciA9IDA7XHJcblx0cHVibGljIGdldCBudW1Mb2dzKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5fbnVtTG9ncztcclxuXHR9XHJcblx0cHVibGljIHNldCBudW1Mb2dzKHZhbDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9udW1Mb2dzID0gdmFsO1xyXG5cdFx0dGhpcy5vd25lci51cGRhdGVCYWNrUGFjaygpO1xyXG5cdH1cclxuXHJcblxyXG5cdHByaXZhdGUgX251bUZpcmV3b29kOiBudW1iZXIgPSAwO1xyXG5cdHB1YmxpYyBnZXQgbnVtRmlyZXdvb2QoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9udW1GaXJld29vZDtcclxuXHR9XHJcblx0cHVibGljIHNldCBudW1GaXJld29vZCh2YWw6IG51bWJlcikge1xyXG5cdFx0dGhpcy5fbnVtRmlyZXdvb2QgPSB2YWw7XHJcblx0XHR0aGlzLm93bmVyLnVwZGF0ZUJhY2tQYWNrKCk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIF9udW1PcmU6IG51bWJlciA9IDA7XHJcblx0cHVibGljIGdldCBudW1PcmUoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLl9udW1PcmU7XHJcblx0fVxyXG5cdHB1YmxpYyBzZXQgbnVtT3JlKHZhbDogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9udW1PcmUgPSB2YWw7XHJcblx0XHR0aGlzLm93bmVyLnVwZGF0ZUJhY2tQYWNrKCk7XHJcblx0fVxyXG5cclxuXHRjb25zdHJ1Y3RvcihudW1Mb2dzOiBudW1iZXIsIG51bUZpcmV3b29kOiBudW1iZXIsIG51bU9yZTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLl9udW1Mb2dzID0gbnVtTG9ncztcclxuXHRcdHRoaXMuX251bUZpcmV3b29kID0gbnVtRmlyZXdvb2Q7XHJcblx0XHR0aGlzLl9udW1PcmUgPSBudW1PcmU7XHJcblx0fVxyXG5cdHB1YmxpYyBzZXRPd25lcihvd25lcjogTGFib3VyZXIpIHtcclxuXHRcdHRoaXMub3duZXIgPSBvd25lcjtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBoYXNPcmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5udW1PcmUgPiAwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGhhc0xvZygpIHtcclxuXHRcdHJldHVybiB0aGlzLm51bUxvZ3MgPiAwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGhhc0ZpcmV3b29kKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubnVtRmlyZXdvb2QgPiAwO1xyXG5cdH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/DropOffToolsAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cbb0eLsmetHRKewZGK6CtyY', 'DropOffToolsAction');
// src/app/gamedata/actions/DropOffToolsAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropOffToolsAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:11:39
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:35:24
 */
var DropOffToolsAction = /** @class */ (function (_super) {
    __extends(DropOffToolsAction, _super);
    function DropOffToolsAction() {
        var _this = _super.call(this) || this;
        _this.droppedOffTools = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasNewTools, true); // can't drop off tools if we don't already have some
        _this.addEffect(ActionStatus_1.ActionStatus.HasNewTools, false); // we now have no tools
        _this.addEffect(ActionStatus_1.ActionStatus.CollectTools, true); // we collected tools
        return _this;
    }
    DropOffToolsAction.prototype.reset = function () {
        this.droppedOffTools = false;
    };
    DropOffToolsAction.prototype.isDone = function () {
        return this.droppedOffTools;
    };
    DropOffToolsAction.prototype.requiresInRange = function () {
        return true; // yes we need to be near a supply pile so we can drop off the tools
    };
    DropOffToolsAction.prototype.checkProceduralPrecondition = function (agent) {
        //TODO: find the nearest supply pile that has spare tools
        var supplyPiles = Environment_1.Environment.supplyPileComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = supply;
                closestDist = supply.distanceSquare(agent);
            }
            else {
                // is this one closer than the last?
                var dist = supply.distanceSquare(agent);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = supply;
                    closestDist = dist;
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    DropOffToolsAction.prototype.perform = function (labourer) {
        this.target.numTools += 2;
        this.droppedOffTools = true;
        //TODO play effect, change actor icon
        return true;
    };
    return DropOffToolsAction;
}(GoapAction_1.GoapAction));
exports.DropOffToolsAction = DropOffToolsAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxEcm9wT2ZmVG9vbHNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUMxRCx1REFBc0Q7QUFFdEQsOENBQTZDO0FBSTdDOzs7Ozs7R0FNRztBQUNIO0lBQXdDLHNDQUFVO0lBR2pEO1FBQUEsWUFDQyxpQkFBTyxTQUlQO1FBUE8scUJBQWUsR0FBWSxLQUFLLENBQUM7UUFJeEMsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLHFEQUFxRDtRQUMzRyxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1FBQ3hFLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7O0lBQ3ZFLENBQUM7SUFFTSxrQ0FBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUVNLG1DQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDN0IsQ0FBQztJQUVNLDRDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUMsQ0FBQyxvRUFBb0U7SUFDbEYsQ0FBQztJQUVNLHdEQUEyQixHQUFsQyxVQUFtQyxLQUFrQjtRQUNwRCx5REFBeUQ7UUFDekQsSUFBSSxXQUFXLEdBQTBCLHlCQUFXLENBQUMsZUFBZSxDQUFDO1FBQ3JFLElBQUksT0FBTyxHQUF3QixJQUFJLENBQUM7UUFDeEMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLEtBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQTNCLElBQUksTUFBTSxvQkFBQTtZQUNkLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDcEIsa0NBQWtDO2dCQUNsQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUNqQixXQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTixvQ0FBb0M7Z0JBQ3BDLElBQUksSUFBSSxHQUFXLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hELElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtvQkFDdkIsZ0NBQWdDO29CQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUNqQixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjthQUNEO1NBQ0Q7UUFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1FBRWQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFFdEIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxvQ0FBTyxHQUFkLFVBQWUsUUFBa0I7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLHFDQUFxQztRQUVyQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRix5QkFBQztBQUFELENBMURBLEFBMERDLENBMUR1Qyx1QkFBVSxHQTBEakQ7QUExRFksZ0RBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XHJcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MTE6MzkgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTAtMjggMTE6MzU6MjRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBEcm9wT2ZmVG9vbHNBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcclxuXHRwcml2YXRlIGRyb3BwZWRPZmZUb29sczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHB1YmxpYyB0YXJnZXQ6IFN1cHBseVBpbGVDb21wb25lbnQ7IC8vIHdoZXJlIHdlIGRyb3Agb2ZmIHRoZSAgdG9vbHNcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc05ld1Rvb2xzLCB0cnVlKTsgLy8gY2FuJ3QgZHJvcCBvZmYgdG9vbHMgaWYgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIHNvbWVcclxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNOZXdUb29scywgZmFsc2UpOyAvLyB3ZSBub3cgaGF2ZSBubyB0b29sc1xyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkNvbGxlY3RUb29scywgdHJ1ZSk7IC8vIHdlIGNvbGxlY3RlZCB0b29sc1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlc2V0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5kcm9wcGVkT2ZmVG9vbHMgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc0RvbmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5kcm9wcGVkT2ZmVG9vbHM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xyXG5cdFx0cmV0dXJuIHRydWU7IC8vIHllcyB3ZSBuZWVkIHRvIGJlIG5lYXIgYSBzdXBwbHkgcGlsZSBzbyB3ZSBjYW4gZHJvcCBvZmYgdGhlIHRvb2xzXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xyXG5cdFx0Ly9UT0RPOiBmaW5kIHRoZSBuZWFyZXN0IHN1cHBseSBwaWxlIHRoYXQgaGFzIHNwYXJlIHRvb2xzXHJcblx0XHRsZXQgc3VwcGx5UGlsZXM6IFN1cHBseVBpbGVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnN1cHBseVBpbGVDb21wcztcclxuXHRcdGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbDtcclxuXHRcdGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcclxuXHJcblx0XHRmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcclxuXHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xyXG5cdFx0XHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcclxuXHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xyXG5cdFx0XHRcdGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cclxuXHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XHJcblx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxyXG5cdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcclxuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChjbG9zZXN0ID09IG51bGwpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XHJcblxyXG5cdFx0cmV0dXJuIGNsb3Nlc3QgIT0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwZXJmb3JtKGxhYm91cmVyOiBMYWJvdXJlcik6IGJvb2xlYW4ge1xyXG5cdFx0dGhpcy50YXJnZXQubnVtVG9vbHMgKz0gMjtcclxuXHRcdHRoaXMuZHJvcHBlZE9mZlRvb2xzID0gdHJ1ZTtcclxuXHRcdC8vVE9ETyBwbGF5IGVmZmVjdCwgY2hhbmdlIGFjdG9yIGljb25cclxuXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/DropOffLogsAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10608rxZehFOLOeFOjwHzym', 'DropOffLogsAction');
// src/app/gamedata/actions/DropOffLogsAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropOffLogsAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:08:59
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:34:06
 */
var DropOffLogsAction = /** @class */ (function (_super) {
    __extends(DropOffLogsAction, _super);
    function DropOffLogsAction() {
        var _this = _super.call(this) || this;
        _this.droppedOffLogs = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasLogs, true); // can't drop off logs if we don't already have some
        _this.addEffect(ActionStatus_1.ActionStatus.HasLogs, false); // we now have no logs
        _this.addEffect(ActionStatus_1.ActionStatus.CollectLogs, true); // we collected logs
        return _this;
    }
    DropOffLogsAction.prototype.reset = function () {
        this.droppedOffLogs = false;
    };
    DropOffLogsAction.prototype.isDone = function () {
        return this.droppedOffLogs;
    };
    DropOffLogsAction.prototype.requiresInRange = function () {
        return true;
    };
    DropOffLogsAction.prototype.checkProceduralPrecondition = function (agent) {
        // TODO:find the nearest supply pile
        var supplyPiles = Environment_1.Environment.supplyPileComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = supply;
                closestDist = supply.distanceSquare(agent);
            }
            else {
                // is this one closer than the last?
                var dist = supply.distanceSquare(agent);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = supply;
                    closestDist = dist;
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    DropOffLogsAction.prototype.perform = function (labourer) {
        var backpack = labourer.backpack;
        this.target.numLogs += backpack.numLogs;
        this.droppedOffLogs = true;
        backpack.numLogs = 0;
        return true;
    };
    return DropOffLogsAction;
}(GoapAction_1.GoapAction));
exports.DropOffLogsAction = DropOffLogsAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxEcm9wT2ZmTG9nc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFELHVEQUFzRDtBQUd0RCw4Q0FBNkM7QUFJN0M7Ozs7OztHQU1HO0FBQ0g7SUFBdUMscUNBQVU7SUFHaEQ7UUFBQSxZQUNDLGlCQUFPLFNBSVA7UUFQTyxvQkFBYyxHQUFZLEtBQUssQ0FBQztRQUl2QyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsb0RBQW9EO1FBQ3RHLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7UUFDbkUsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjs7SUFDckUsQ0FBQztJQUVNLGlDQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRU0sa0NBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDO0lBRU0sMkNBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTSx1REFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQsb0NBQW9DO1FBQ3BDLElBQUksV0FBVyxHQUEwQix5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQUNyRSxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFDO1FBQ3hDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDZCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDakIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ04sb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3ZCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDakIsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDbkI7YUFDRDtTQUNEO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNsQixPQUFPLEtBQUssQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRXRCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sbUNBQU8sR0FBZCxVQUFlLFFBQWtCO1FBQ2hDLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFFckIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQTNEQSxBQTJEQyxDQTNEc0MsdUJBQVUsR0EyRGhEO0FBM0RZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xyXG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiO1xyXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCI7XHJcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiO1xyXG5pbXBvcnQgeyBTdXBwbHlQaWxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL1N1cHBseVBpbGVDb21wb25lbnRcIjtcclxuXHJcbi8qXHJcbiAqIEBEZXNjcmlwdGlvbjogXHJcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXHJcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjA4OjU5IFxyXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTEwLTI4IDExOjM0OjA2XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRHJvcE9mZkxvZ3NBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcclxuXHRwcml2YXRlIGRyb3BwZWRPZmZMb2dzOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHVibGljIHRhcmdldDogU3VwcGx5UGlsZUNvbXBvbmVudDtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIHRydWUpOyAvLyBjYW4ndCBkcm9wIG9mZiBsb2dzIGlmIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBzb21lXHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuSGFzTG9ncywgZmFsc2UpOyAvLyB3ZSBub3cgaGF2ZSBubyBsb2dzXHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuQ29sbGVjdExvZ3MsIHRydWUpOyAvLyB3ZSBjb2xsZWN0ZWQgbG9nc1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlc2V0KCkge1xyXG5cdFx0dGhpcy5kcm9wcGVkT2ZmTG9ncyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLmRyb3BwZWRPZmZMb2dzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuIHtcclxuXHRcdC8vIFRPRE86ZmluZCB0aGUgbmVhcmVzdCBzdXBwbHkgcGlsZVxyXG5cdFx0bGV0IHN1cHBseVBpbGVzOiBTdXBwbHlQaWxlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC5zdXBwbHlQaWxlQ29tcHM7XHJcblx0XHRsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGw7XHJcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdFx0Zm9yIChsZXQgc3VwcGx5IG9mIHN1cHBseVBpbGVzKSB7XHJcblx0XHRcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcclxuXHRcdFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XHJcblx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcclxuXHRcdFx0XHRjbG9zZXN0RGlzdCA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XHJcblx0XHRcdFx0bGV0IGRpc3Q6IG51bWJlciA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHRcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xyXG5cdFx0XHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcclxuXHRcdFx0XHRcdGNsb3Nlc3QgPSBzdXBwbHk7XHJcblx0XHRcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy50YXJnZXQgPSBjbG9zZXN0O1xyXG5cclxuXHRcdHJldHVybiBjbG9zZXN0ICE9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGVyZm9ybShsYWJvdXJlcjogTGFib3VyZXIpOiBib29sZWFuIHtcclxuXHRcdGxldCBiYWNrcGFjazogQmFja1BhY2tDb21wb25lbnQgPSBsYWJvdXJlci5iYWNrcGFjaztcclxuXHRcdHRoaXMudGFyZ2V0Lm51bUxvZ3MgKz0gYmFja3BhY2subnVtTG9ncztcclxuXHRcdHRoaXMuZHJvcHBlZE9mZkxvZ3MgPSB0cnVlO1xyXG5cdFx0YmFja3BhY2subnVtTG9ncyA9IDA7XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/Labourer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3aabfuM6SJGhYeTyzeDCMbX', 'Labourer');
// src/app/gamedata/labourers/Labourer.ts

"use strict";
/*
 * @Description: {}
 * @Author: Rannar.Yang
 * @Date: 2018-09-05 20:52:30
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 18:31:49
 */
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
exports.Labourer = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAgent_1 = require("../../ai/goap/GoapAgent");
var GameDataManager_1 = require("../../data/GameDataManager");
var LabourerType_1 = require("../../data/LabourerType");
var ToolComponent_1 = require("../ToolComponent");
/**
 * A general labourer export class.
 * You should subexport class this for specific Labourer export classes and implement
 * the createGoalState() method that will populate the goal for the GOAP
 * planner.
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Labourer = /** @class */ (function (_super) {
    __extends(Labourer, _super);
    function Labourer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labourerType = LabourerType_1.LabourerType.None;
        /**拥有的actions */
        _this.avaliableActions = [];
        _this.bMoving = false;
        _this.bMoveEnd = false;
        return _this;
    }
    Labourer.prototype.getAvaliableActions = function () {
        return this.avaliableActions;
    };
    Labourer.prototype.toInitAvaliableActions = function (actionCls) {
        var action;
        for (var i = 0, len = actionCls.length; i < len; i++) {
            action = new actionCls[i]();
            this.avaliableActions.push(action);
        }
    };
    Labourer.prototype.onLoad = function () {
        //super.childrenCreated();
        this.bean = GameDataManager_1.GameDataManager.I.t_labourderContainer.getLabourerByType(this.labourerType);
        if (!this.tool) {
            this.pickUpTool();
        }
        this.initAvaliableActions();
        //this.goapAgent = new GoapAgent(this);
    };
    Labourer.prototype.initAvaliableActions = function () { };
    Labourer.prototype.update = function (delta) {
        this.update(delta);
    };
    Labourer.prototype.getWorldState = function () {
        var worldData = new Map();
        worldData.set(ActionStatus_1.ActionStatus.HasOre, this.backpack.hasOre());
        worldData.set(ActionStatus_1.ActionStatus.HasLogs, this.backpack.hasLog());
        worldData.set(ActionStatus_1.ActionStatus.HasFirewood, this.backpack.hasFirewood());
        worldData.set(ActionStatus_1.ActionStatus.HasTool, this.hasTool());
        return worldData;
    };
    Labourer.prototype.hasTool = function () {
        return this.tool != null;
    };
    /**
     * Implement in subexport classes
     */
    Labourer.prototype.createGoalState = function () {
        return new Map();
    };
    ;
    Labourer.prototype.planFailed = function (failedGoad) {
        // Not handling this here since we are making sure our goals will always succeed.
        // But normally you want to make sure the world state has changed before running
        // the same goal again, or else it will just fail.
    };
    Labourer.prototype.planFound = function (goal, actions) {
        // Yay we found a plan for our goal
        console.log("Plan found: ", GoapAgent_1.GoapAgent.prettyPrintActionsQueue(actions));
    };
    Labourer.prototype.actionsFinished = function () {
        // Everything is done, we completed our actions for this gool. Hooray!
        console.log("Actions completed");
    };
    Labourer.prototype.planAborted = function (aborter) {
        // An action bailed out of the plan. State has been reset to plan again.
        // Take note of what happened and make sure if you run the same goal again
        // that it can succeed.
        console.log("Plan Aborted: " + GoapAgent_1.GoapAgent.prettyPrintAction(aborter));
    };
    Labourer.prototype.moveAgent = function (nextAction, delta) {
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
        // let step = this.bean.speed * delta;
        // let target = nextAction.target;
        // // 设置新的position
        // this.moveTo(target, step);
        // if (this.posEquip(target)) {
        // 	nextAction.setInRange(true);
        // 	return true;
        // } else {
        // 	return false;
        // }
    };
    /**设置背包里的物品 */
    Labourer.prototype.setBackPack = function (backpack) {
        this.backpack = backpack;
        backpack.setOwner(this);
    };
    /**拾取工具 */
    Labourer.prototype.pickUpTool = function () {
        this.tool = new ToolComponent_1.ToolComponent();
        console.log('拾取工具', this.constructor.name);
        //let tool = 
        // tool.node.x = 18;
        // tool.node.y = 35;
        //	tool.node.getComponent(cc.Sprite).spriteFrame = ToolType.getSource(this.bean.toolType);
        // this.addChild(tool);
    };
    /**销毁工具 */
    Labourer.prototype.destroyTool = function () {
        //this.removeChild(this.tool);
        this.tool = undefined;
    };
    Labourer.prototype.updateBackPack = function () {
    };
    __decorate([
        property({ type: cc.Enum(LabourerType_1.LabourerType), displayName: "type" })
    ], Labourer.prototype, "labourerType", void 0);
    Labourer = __decorate([
        ccclass
    ], Labourer);
    return Labourer;
}(GoapAgent_1.GoapAgent));
exports.Labourer = Labourer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXExhYm91cmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCwyREFBMEQ7QUFFMUQscURBQW9EO0FBR3BELDhEQUE2RDtBQUM3RCx3REFBdUQ7QUFJdkQsa0RBQWlEO0FBRWpEOzs7OztHQUtHO0FBQ0csSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBOEIsNEJBQVM7SUFBdkM7UUFBQSxxRUE0SUM7UUExSU8sa0JBQVksR0FBaUIsMkJBQVksQ0FBQyxJQUFJLENBQUM7UUFJdEQsZ0JBQWdCO1FBQ1Isc0JBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQWtCNUMsYUFBTyxHQUFHLEtBQUssQ0FBQTtRQUNmLGNBQVEsR0FBRyxLQUFLLENBQUE7O0lBa0hqQixDQUFDO0lBcElPLHNDQUFtQixHQUExQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7SUFDUyx5Q0FBc0IsR0FBaEMsVUFBaUMsU0FBZ0I7UUFDaEQsSUFBSSxNQUFNLENBQUM7UUFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JELE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkM7SUFDRixDQUFDO0lBVU0seUJBQU0sR0FBYjtRQUNDLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLGlDQUFlLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN2RixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLHVDQUF1QztJQUN4QyxDQUFDO0lBQ1MsdUNBQW9CLEdBQTlCLGNBQW1DLENBQUM7SUFFN0IseUJBQU0sR0FBYixVQUFjLEtBQWE7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sZ0NBQWEsR0FBcEI7UUFDQyxJQUFJLFNBQVMsR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDL0QsU0FBUyxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDM0QsU0FBUyxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDNUQsU0FBUyxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDckUsU0FBUyxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNwRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDO0lBRU8sMEJBQU8sR0FBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVEOztPQUVHO0lBQ0ksa0NBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksR0FBRyxFQUFFLENBQUE7SUFDakIsQ0FBQztJQUFBLENBQUM7SUFFSyw2QkFBVSxHQUFqQixVQUFrQixVQUErQjtRQUNoRCxpRkFBaUY7UUFDakYsZ0ZBQWdGO1FBQ2hGLGtEQUFrRDtJQUNuRCxDQUFDO0lBRU0sNEJBQVMsR0FBaEIsVUFBaUIsSUFBeUIsRUFBRSxPQUFxQjtRQUNoRSxtQ0FBbUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUscUJBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTSxrQ0FBZSxHQUF0QjtRQUNDLHNFQUFzRTtRQUN0RSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVNLDhCQUFXLEdBQWxCLFVBQW1CLE9BQW1CO1FBQ3JDLHdFQUF3RTtRQUN4RSwwRUFBMEU7UUFDMUUsdUJBQXVCO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcscUJBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTSw0QkFBUyxHQUFoQixVQUFpQixVQUFzQixFQUFFLEtBQWE7UUFBdEQsaUJBOEJDO1FBN0JBLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO1lBQ3JCLE9BQU8sSUFBSSxDQUFBO1NBQ1g7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUNuQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUE7WUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDckUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUN4QixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtnQkFDcEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7Z0JBQ3BCLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNILElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1NBQ3pDO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBQ3BCLHNDQUFzQztRQUN0QyxrQ0FBa0M7UUFDbEMsa0JBQWtCO1FBQ2xCLDZCQUE2QjtRQUM3QiwrQkFBK0I7UUFDL0IsZ0NBQWdDO1FBQ2hDLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLElBQUk7SUFDTCxDQUFDO0lBQ0QsY0FBYztJQUNQLDhCQUFXLEdBQWxCLFVBQW1CLFFBQTJCO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELFVBQVU7SUFDSCw2QkFBVSxHQUFqQjtRQUNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMxQyxhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQiwwRkFBMEY7UUFDMUYsdUJBQXVCO0lBQ3hCLENBQUM7SUFDRCxVQUFVO0lBQ0gsOEJBQVcsR0FBbEI7UUFDQyw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUVNLGlDQUFjLEdBQXJCO0lBRUEsQ0FBQztJQXpJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLDJCQUFZLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7a0RBQ1Q7SUFGMUMsUUFBUTtRQURwQixPQUFPO09BQ0ssUUFBUSxDQTRJcEI7SUFBRCxlQUFDO0NBNUlELEFBNElDLENBNUk2QixxQkFBUyxHQTRJdEM7QUE1SVksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHRpb246IHt9IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXIuWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDUgMjA6NTI6MzAgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDQgMTg6MzE6NDlcclxuICovXHJcblxyXG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIjtcclxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFnZW50XCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvSUdvYXBcIjtcclxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBHYW1lRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9HYW1lRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgTGFib3VyZXJUeXBlIH0gZnJvbSBcIi4uLy4uL2RhdGEvTGFib3VyZXJUeXBlXCI7XHJcbmltcG9ydCB7IFRvb2xUeXBlIH0gZnJvbSBcIi4uLy4uL2RhdGEvVG9vbFR5cGVcIjtcclxuaW1wb3J0IHsgVF9MYWJvdXJlckJlYW4gfSBmcm9tIFwiLi4vLi4vZGF0YS9UX0xhYm91cmVyQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvb2xDb21wb25lbnQgfSBmcm9tIFwiLi4vVG9vbENvbXBvbmVudFwiO1xyXG5cclxuLyoqXHJcbiAqIEEgZ2VuZXJhbCBsYWJvdXJlciBleHBvcnQgY2xhc3MuXHJcbiAqIFlvdSBzaG91bGQgc3ViZXhwb3J0IGNsYXNzIHRoaXMgZm9yIHNwZWNpZmljIExhYm91cmVyIGV4cG9ydCBjbGFzc2VzIGFuZCBpbXBsZW1lbnRcclxuICogdGhlIGNyZWF0ZUdvYWxTdGF0ZSgpIG1ldGhvZCB0aGF0IHdpbGwgcG9wdWxhdGUgdGhlIGdvYWwgZm9yIHRoZSBHT0FQXHJcbiAqIHBsYW5uZXIuXHJcbiAqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgTGFib3VyZXIgZXh0ZW5kcyBHb2FwQWdlbnQgaW1wbGVtZW50cyBJR29hcCB7XHJcblx0QHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShMYWJvdXJlclR5cGUpLCBkaXNwbGF5TmFtZTogXCJ0eXBlXCIgfSlcclxuXHRwdWJsaWMgbGFib3VyZXJUeXBlOiBMYWJvdXJlclR5cGUgPSBMYWJvdXJlclR5cGUuTm9uZTtcclxuXHJcblx0LyoqZ29hcCBhZ2VudCAqL1xyXG5cdHByb3RlY3RlZCBnb2FwQWdlbnQ6IEdvYXBBZ2VudDtcclxuXHQvKirmi6XmnInnmoRhY3Rpb25zICovXHJcblx0cHJpdmF0ZSBhdmFsaWFibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10gPSBbXTtcclxuXHRwdWJsaWMgZ2V0QXZhbGlhYmxlQWN0aW9ucygpOiBHb2FwQWN0aW9uW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuYXZhbGlhYmxlQWN0aW9ucztcclxuXHR9XHJcblx0cHJvdGVjdGVkIHRvSW5pdEF2YWxpYWJsZUFjdGlvbnMoYWN0aW9uQ2xzOiBhbnlbXSkge1xyXG5cdFx0bGV0IGFjdGlvbjtcclxuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSBhY3Rpb25DbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0YWN0aW9uID0gbmV3IGFjdGlvbkNsc1tpXSgpO1xyXG5cdFx0XHR0aGlzLmF2YWxpYWJsZUFjdGlvbnMucHVzaChhY3Rpb24pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvKirog4zljIUgKi9cclxuXHRwdWJsaWMgYmFja3BhY2s6IEJhY2tQYWNrQ29tcG9uZW50O1xyXG5cclxuXHRwdWJsaWMgYmVhbjogVF9MYWJvdXJlckJlYW47XHJcblxyXG5cdHB1YmxpYyB0b29sOiBUb29sQ29tcG9uZW50O1xyXG5cclxuXHRiTW92aW5nID0gZmFsc2VcclxuXHRiTW92ZUVuZCA9IGZhbHNlXHJcblx0cHVibGljIG9uTG9hZCgpIHtcclxuXHRcdC8vc3VwZXIuY2hpbGRyZW5DcmVhdGVkKCk7XHJcblx0XHR0aGlzLmJlYW4gPSBHYW1lRGF0YU1hbmFnZXIuSS50X2xhYm91cmRlckNvbnRhaW5lci5nZXRMYWJvdXJlckJ5VHlwZSh0aGlzLmxhYm91cmVyVHlwZSlcclxuXHRcdGlmICghdGhpcy50b29sKSB7XHJcblx0XHRcdHRoaXMucGlja1VwVG9vbCgpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5pbml0QXZhbGlhYmxlQWN0aW9ucygpO1xyXG5cdFx0Ly90aGlzLmdvYXBBZ2VudCA9IG5ldyBHb2FwQWdlbnQodGhpcyk7XHJcblx0fVxyXG5cdHByb3RlY3RlZCBpbml0QXZhbGlhYmxlQWN0aW9ucygpIHsgfVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpIHtcclxuXHRcdHRoaXMudXBkYXRlKGRlbHRhKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRXb3JsZFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xyXG5cdFx0bGV0IHdvcmxkRGF0YTogTWFwPHN0cmluZywgT2JqZWN0PiA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KCk7XHJcblx0XHR3b3JsZERhdGEuc2V0KEFjdGlvblN0YXR1cy5IYXNPcmUsIHRoaXMuYmFja3BhY2suaGFzT3JlKCkpO1xyXG5cdFx0d29ybGREYXRhLnNldChBY3Rpb25TdGF0dXMuSGFzTG9ncywgdGhpcy5iYWNrcGFjay5oYXNMb2coKSk7XHJcblx0XHR3b3JsZERhdGEuc2V0KEFjdGlvblN0YXR1cy5IYXNGaXJld29vZCwgdGhpcy5iYWNrcGFjay5oYXNGaXJld29vZCgpKTtcclxuXHRcdHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc1Rvb2wsIHRoaXMuaGFzVG9vbCgpKTtcclxuXHRcdHJldHVybiB3b3JsZERhdGE7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhc1Rvb2woKSB7XHJcblx0XHRyZXR1cm4gdGhpcy50b29sICE9IG51bGw7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbXBsZW1lbnQgaW4gc3ViZXhwb3J0IGNsYXNzZXNcclxuXHQgKi9cclxuXHRwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xyXG5cdFx0cmV0dXJuIG5ldyBNYXAoKVxyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBwbGFuRmFpbGVkKGZhaWxlZEdvYWQ6IE1hcDxzdHJpbmcsIE9iamVjdD4pIHtcclxuXHRcdC8vIE5vdCBoYW5kbGluZyB0aGlzIGhlcmUgc2luY2Ugd2UgYXJlIG1ha2luZyBzdXJlIG91ciBnb2FscyB3aWxsIGFsd2F5cyBzdWNjZWVkLlxyXG5cdFx0Ly8gQnV0IG5vcm1hbGx5IHlvdSB3YW50IHRvIG1ha2Ugc3VyZSB0aGUgd29ybGQgc3RhdGUgaGFzIGNoYW5nZWQgYmVmb3JlIHJ1bm5pbmdcclxuXHRcdC8vIHRoZSBzYW1lIGdvYWwgYWdhaW4sIG9yIGVsc2UgaXQgd2lsbCBqdXN0IGZhaWwuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGxhbkZvdW5kKGdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4sIGFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xyXG5cdFx0Ly8gWWF5IHdlIGZvdW5kIGEgcGxhbiBmb3Igb3VyIGdvYWxcclxuXHRcdGNvbnNvbGUubG9nKFwiUGxhbiBmb3VuZDogXCIsIEdvYXBBZ2VudC5wcmV0dHlQcmludEFjdGlvbnNRdWV1ZShhY3Rpb25zKSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWN0aW9uc0ZpbmlzaGVkKCk6IHZvaWQge1xyXG5cdFx0Ly8gRXZlcnl0aGluZyBpcyBkb25lLCB3ZSBjb21wbGV0ZWQgb3VyIGFjdGlvbnMgZm9yIHRoaXMgZ29vbC4gSG9vcmF5IVxyXG5cdFx0Y29uc29sZS5sb2coXCJBY3Rpb25zIGNvbXBsZXRlZFwiKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwbGFuQWJvcnRlZChhYm9ydGVyOiBHb2FwQWN0aW9uKSB7XHJcblx0XHQvLyBBbiBhY3Rpb24gYmFpbGVkIG91dCBvZiB0aGUgcGxhbi4gU3RhdGUgaGFzIGJlZW4gcmVzZXQgdG8gcGxhbiBhZ2Fpbi5cclxuXHRcdC8vIFRha2Ugbm90ZSBvZiB3aGF0IGhhcHBlbmVkIGFuZCBtYWtlIHN1cmUgaWYgeW91IHJ1biB0aGUgc2FtZSBnb2FsIGFnYWluXHJcblx0XHQvLyB0aGF0IGl0IGNhbiBzdWNjZWVkLlxyXG5cdFx0Y29uc29sZS5sb2coXCJQbGFuIEFib3J0ZWQ6IFwiICsgR29hcEFnZW50LnByZXR0eVByaW50QWN0aW9uKGFib3J0ZXIpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBtb3ZlQWdlbnQobmV4dEFjdGlvbjogR29hcEFjdGlvbiwgZGVsdGE6IG51bWJlcikge1xyXG5cdFx0bGV0IHRhcmdldCA9IG5leHRBY3Rpb24udGFyZ2V0O1xyXG5cdFx0aWYgKHRoaXMuYk1vdmVFbmQpIHtcclxuXHRcdFx0dGhpcy5iTW92ZUVuZCA9IGZhbHNlXHJcblx0XHRcdHJldHVybiB0cnVlXHJcblx0XHR9XHJcblx0XHRpZiAoIXRoaXMuYk1vdmluZykge1xyXG5cdFx0XHR0aGlzLmJNb3ZpbmcgPSB0cnVlXHJcblx0XHRcdGxldCBhY3Rpb25zID0gW11cclxuXHRcdFx0YWN0aW9ucy5wdXNoKGNjLm1vdmVUbygyLCBuZXcgY2MuVmVjMih0YXJnZXQubm9kZS54LCB0YXJnZXQubm9kZS55KSkpXHJcblx0XHRcdGFjdGlvbnMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5iTW92ZUVuZCA9IHRydWVcclxuXHRcdFx0XHR0aGlzLmJNb3ZpbmcgPSBmYWxzZVxyXG5cdFx0XHRcdG5leHRBY3Rpb24uc2V0SW5SYW5nZSh0cnVlKTtcclxuXHRcdFx0fSkpXHJcblx0XHRcdHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcblx0XHRcdHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9ucykpXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYk1vdmVFbmRcclxuXHRcdC8vIGxldCBzdGVwID0gdGhpcy5iZWFuLnNwZWVkICogZGVsdGE7XHJcblx0XHQvLyBsZXQgdGFyZ2V0ID0gbmV4dEFjdGlvbi50YXJnZXQ7XHJcblx0XHQvLyAvLyDorr7nva7mlrDnmoRwb3NpdGlvblxyXG5cdFx0Ly8gdGhpcy5tb3ZlVG8odGFyZ2V0LCBzdGVwKTtcclxuXHRcdC8vIGlmICh0aGlzLnBvc0VxdWlwKHRhcmdldCkpIHtcclxuXHRcdC8vIFx0bmV4dEFjdGlvbi5zZXRJblJhbmdlKHRydWUpO1xyXG5cdFx0Ly8gXHRyZXR1cm4gdHJ1ZTtcclxuXHRcdC8vIH0gZWxzZSB7XHJcblx0XHQvLyBcdHJldHVybiBmYWxzZTtcclxuXHRcdC8vIH1cclxuXHR9XHJcblx0Lyoq6K6+572u6IOM5YyF6YeM55qE54mp5ZOBICovXHJcblx0cHVibGljIHNldEJhY2tQYWNrKGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCkge1xyXG5cdFx0dGhpcy5iYWNrcGFjayA9IGJhY2twYWNrO1xyXG5cdFx0YmFja3BhY2suc2V0T3duZXIodGhpcyk7XHJcblx0fVxyXG5cdC8qKuaLvuWPluW3peWFtyAqL1xyXG5cdHB1YmxpYyBwaWNrVXBUb29sKCkge1xyXG5cdFx0dGhpcy50b29sID0gbmV3IFRvb2xDb21wb25lbnQoKTtcclxuXHRcdGNvbnNvbGUubG9nKCfmi77lj5blt6XlhbcnLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpXHJcblx0XHQvL2xldCB0b29sID0gXHJcblx0XHQvLyB0b29sLm5vZGUueCA9IDE4O1xyXG5cdFx0Ly8gdG9vbC5ub2RlLnkgPSAzNTtcclxuXHRcdC8vXHR0b29sLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBUb29sVHlwZS5nZXRTb3VyY2UodGhpcy5iZWFuLnRvb2xUeXBlKTtcclxuXHRcdC8vIHRoaXMuYWRkQ2hpbGQodG9vbCk7XHJcblx0fVxyXG5cdC8qKumUgOavgeW3peWFtyAqL1xyXG5cdHB1YmxpYyBkZXN0cm95VG9vbCgpIHtcclxuXHRcdC8vdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnRvb2wpO1xyXG5cdFx0dGhpcy50b29sID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZUJhY2tQYWNrKCkge1xyXG5cclxuXHR9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/MineOreAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3892QFKmhKUZZMUoET4jUr', 'MineOreAction');
// src/app/gamedata/actions/MineOreAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MineOreAction = void 0;
var TimeUtil_1 = require("../../../utils/TimeUtil");
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:13:23
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:36:36
 */
var MineOreAction = /** @class */ (function (_super) {
    __extends(MineOreAction, _super);
    function MineOreAction() {
        var _this = _super.call(this) || this;
        _this.mined = false;
        _this.startTime = 0;
        _this.miningDuration = 2; // seconds;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasTool, true); // we need a tool to do this
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasOre, false); // if we have ore we don't want more
        _this.addEffect(ActionStatus_1.ActionStatus.HasOre, true);
        return _this;
    }
    MineOreAction.prototype.reset = function () {
        this.mined = false;
        this.startTime = 0;
    };
    MineOreAction.prototype.isDone = function () {
        return this.mined;
    };
    MineOreAction.prototype.requiresInRange = function () {
        return true; // yes we need to be near a rock
    };
    MineOreAction.prototype.checkProceduralPrecondition = function (agent) {
        //TODO: find the nearest rock that we can mine
        var rocks = Environment_1.Environment.rockComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, rocks_1 = rocks; _i < rocks_1.length; _i++) {
            var rock = rocks_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = rock;
                closestDist = rock.distanceSquare(agent);
            }
            else {
                // is this one closer than the last?
                var dist = rock.distanceSquare(agent);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = rock;
                    closestDist = dist;
                }
            }
        }
        this.target = closest;
        return closest != null;
    };
    MineOreAction.prototype.perform = function (labourer) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.miningDuration) {
            // finished mining
            var backpack = labourer.backpack;
            ;
            backpack.numOre += 2;
            this.mined = true;
            var tool = labourer.tool;
            tool.use(0.5);
            if (tool.destroyed()) {
                //TODO:删除 Destroy(backpack.tool);
                labourer.destroyTool();
            }
        }
        return true;
    };
    return MineOreAction;
}(GoapAction_1.GoapAction));
exports.MineOreAction = MineOreAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxNaW5lT3JlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsMkRBQTBEO0FBQzFELHVEQUFzRDtBQUd0RCw4Q0FBNkM7QUFLN0M7Ozs7OztHQU1HO0FBQ0g7SUFBbUMsaUNBQVU7SUFNNUM7UUFBQSxZQUNDLGlCQUFPLFNBSVA7UUFWTyxXQUFLLEdBQVksS0FBSyxDQUFDO1FBRXZCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsb0JBQWMsR0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXO1FBSTlDLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7UUFDOUUsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLG9DQUFvQztRQUN0RixLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUMzQyxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFTSx1Q0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLENBQUMsZ0NBQWdDO0lBQzlDLENBQUM7SUFFTSxtREFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQsOENBQThDO1FBQzlDLElBQUksS0FBSyxHQUF3Qix5QkFBVyxDQUFDLFNBQVMsQ0FBQztRQUN2RCxJQUFJLE9BQU8sR0FBc0IsSUFBSSxDQUFDO1FBQ3RDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFpQixVQUFLLEVBQUwsZUFBSyxFQUFMLG1CQUFLLEVBQUwsSUFBSyxFQUFFO1lBQW5CLElBQUksSUFBSSxjQUFBO1lBQ1osSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNwQixrQ0FBa0M7Z0JBQ2xDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ2YsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekM7aUJBQU07Z0JBQ04sb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3ZCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDZixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjthQUNEO1NBQ0Q7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLCtCQUFPLEdBQWQsVUFBZSxRQUFrQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFckMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM5RCxrQkFBa0I7WUFDbEIsSUFBSSxRQUFRLEdBQXNCLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFBQSxDQUFDO1lBQ3JELFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksSUFBSSxHQUFrQixRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDckIsaUNBQWlDO2dCQUNqQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdkI7U0FDRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLG9CQUFDO0FBQUQsQ0F0RUEsQUFzRUMsQ0F0RWtDLHVCQUFVLEdBc0U1QztBQXRFWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvVGltZVV0aWxcIjtcclxuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgQmFja1BhY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vQmFja1BhY2tDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IHsgSXJvblJvY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vSXJvblJvY2tDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XHJcbmltcG9ydCB7IFRvb2xDb21wb25lbnQgfSBmcm9tIFwiLi4vVG9vbENvbXBvbmVudFwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MTM6MjMgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTAtMjggMTE6MzY6MzZcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNaW5lT3JlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XHJcblx0cHJpdmF0ZSBtaW5lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIG1pbmluZ0R1cmF0aW9uOiBudW1iZXIgPSAyOyAvLyBzZWNvbmRzO1xyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc1Rvb2wsIHRydWUpOyAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXHJcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzT3JlLCBmYWxzZSk7IC8vIGlmIHdlIGhhdmUgb3JlIHdlIGRvbid0IHdhbnQgbW9yZVxyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc09yZSwgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLm1pbmVkID0gZmFsc2U7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaXNEb25lKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMubWluZWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRydWU7IC8vIHllcyB3ZSBuZWVkIHRvIGJlIG5lYXIgYSByb2NrXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xyXG5cdFx0Ly9UT0RPOiBmaW5kIHRoZSBuZWFyZXN0IHJvY2sgdGhhdCB3ZSBjYW4gbWluZVxyXG5cdFx0bGV0IHJvY2tzOiBJcm9uUm9ja0NvbXBvbmVudFtdID0gRW52aXJvbm1lbnQucm9ja0NvbXBzO1xyXG5cdFx0bGV0IGNsb3Nlc3Q6IElyb25Sb2NrQ29tcG9uZW50ID0gbnVsbDtcclxuXHRcdGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcclxuXHJcblx0XHRmb3IgKGxldCByb2NrIG9mIHJvY2tzKSB7XHJcblx0XHRcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcclxuXHRcdFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XHJcblx0XHRcdFx0Y2xvc2VzdCA9IHJvY2s7XHJcblx0XHRcdFx0Y2xvc2VzdERpc3QgPSByb2NrLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cclxuXHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gcm9jay5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHRcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xyXG5cdFx0XHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcclxuXHRcdFx0XHRcdGNsb3Nlc3QgPSByb2NrO1xyXG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy50YXJnZXQgPSBjbG9zZXN0O1xyXG5cclxuXHRcdHJldHVybiBjbG9zZXN0ICE9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGVyZm9ybShsYWJvdXJlcjogTGFib3VyZXIpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKVxyXG5cdFx0XHR0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKTtcclxuXHJcblx0XHRpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLm1pbmluZ0R1cmF0aW9uKSB7XHJcblx0XHRcdC8vIGZpbmlzaGVkIG1pbmluZ1xyXG5cdFx0XHRsZXQgYmFja3BhY2s6IEJhY2tQYWNrQ29tcG9uZW50ID0gbGFib3VyZXIuYmFja3BhY2s7O1xyXG5cdFx0XHRiYWNrcGFjay5udW1PcmUgKz0gMjtcclxuXHRcdFx0dGhpcy5taW5lZCA9IHRydWU7XHJcblx0XHRcdGxldCB0b29sOiBUb29sQ29tcG9uZW50ID0gbGFib3VyZXIudG9vbDtcclxuXHRcdFx0dG9vbC51c2UoMC41KTtcclxuXHRcdFx0aWYgKHRvb2wuZGVzdHJveWVkKCkpIHtcclxuXHRcdFx0XHQvL1RPRE865Yig6ZmkIERlc3Ryb3koYmFja3BhY2sudG9vbCk7XHJcblx0XHRcdFx0bGFib3VyZXIuZGVzdHJveVRvb2woKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/ForgeToolAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8aadKkvVBMOKX0cJTF86Tm', 'ForgeToolAction');
// src/app/gamedata/actions/ForgeToolAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgeToolAction = void 0;
var TimeUtil_1 = require("../../../utils/TimeUtil");
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:12:33
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:36:06
 */
var ForgeToolAction = /** @class */ (function (_super) {
    __extends(ForgeToolAction, _super);
    function ForgeToolAction() {
        var _this = _super.call(this) || this;
        _this.forged = false;
        _this.startTime = 0;
        _this.forgeDuration = 2; // seconds
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasOre, true);
        _this.addEffect(ActionStatus_1.ActionStatus.HasNewTools, true);
        return _this;
    }
    ForgeToolAction.prototype.reset = function () {
        this.forged = false;
        this.startTime = 0;
    };
    ForgeToolAction.prototype.isDone = function () {
        return this.forged;
    };
    ForgeToolAction.prototype.requiresInRange = function () {
        return true;
    };
    ForgeToolAction.prototype.checkProceduralPrecondition = function (agent) {
        //TODO: find the nearest forge
        var forges = Environment_1.Environment.forgeComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, forges_1 = forges; _i < forges_1.length; _i++) {
            var forge = forges_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = forge;
                closestDist = forge.distanceSquare(agent);
            }
            else {
                // is this one closer than the last?
                var dist = forge.distanceSquare(agent);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = forge;
                    closestDist = dist;
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    ForgeToolAction.prototype.perform = function (labourer) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.forgeDuration) {
            // finished forging a tool
            var backpack = labourer.backpack;
            backpack.numOre = 0;
            this.forged = true;
        }
        return true;
    };
    return ForgeToolAction;
}(GoapAction_1.GoapAction));
exports.ForgeToolAction = ForgeToolAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxGb3JnZVRvb2xBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUMvQywyREFBMEQ7QUFDMUQsdURBQXNEO0FBR3RELDhDQUE2QztBQUk3Qzs7Ozs7O0dBTUc7QUFDSDtJQUFxQyxtQ0FBVTtJQU05QztRQUFBLFlBQ0MsaUJBQU8sU0FHUDtRQVRPLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFHeEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixtQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFHNUMsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRCxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUNoRCxDQUFDO0lBRU0sK0JBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFDTSx5Q0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLHFEQUEyQixHQUFsQyxVQUFtQyxLQUFrQjtRQUNwRCw4QkFBOEI7UUFDOUIsSUFBSSxNQUFNLEdBQXFCLHlCQUFXLENBQUMsVUFBVSxDQUFDO1FBQ3RELElBQUksT0FBTyxHQUFtQixJQUFJLENBQUM7UUFDbkMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLEtBQWtCLFVBQU0sRUFBTixpQkFBTSxFQUFOLG9CQUFNLEVBQU4sSUFBTSxFQUFFO1lBQXJCLElBQUksS0FBSyxlQUFBO1lBQ2IsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNwQixrQ0FBa0M7Z0JBQ2xDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2hCLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFDO2lCQUFNO2dCQUNOLG9DQUFvQztnQkFDcEMsSUFBSSxJQUFJLEdBQVcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO29CQUN2QixnQ0FBZ0M7b0JBQ2hDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0Q7U0FDRDtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLGlDQUFPLEdBQWQsVUFBZSxRQUFrQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFckMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM3RCwwQkFBMEI7WUFDMUIsSUFBSSxRQUFRLEdBQXNCLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDcEQsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRixzQkFBQztBQUFELENBakVBLEFBaUVDLENBakVvQyx1QkFBVSxHQWlFOUM7QUFqRVksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL1RpbWVVdGlsXCI7XHJcbmltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xyXG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiO1xyXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCI7XHJcbmltcG9ydCB7IEZvcmdlQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ZvcmdlQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MTI6MzMgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTAtMjggMTE6MzY6MDZcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb3JnZVRvb2xBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcclxuXHRwcml2YXRlIGZvcmdlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHB1YmxpYyB0YXJnZXQ6IEZvcmdlQ29tcG9uZW50OyAvLyB3aGVyZSB3ZSBmb3JnZSB0b29sc1xyXG5cclxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIGZvcmdlRHVyYXRpb246IG51bWJlciA9IDI7IC8vIHNlY29uZHNcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc09yZSwgdHJ1ZSk7XHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuSGFzTmV3VG9vbHMsIHRydWUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlc2V0KCkge1xyXG5cdFx0dGhpcy5mb3JnZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc0RvbmUoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mb3JnZWQ7XHJcblx0fVxyXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IFZHYW1lT2JqZWN0KTogYm9vbGVhbiB7XHJcblx0XHQvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3QgZm9yZ2VcclxuXHRcdGxldCBmb3JnZXM6IEZvcmdlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC5mb3JnZUNvbXBzO1xyXG5cdFx0bGV0IGNsb3Nlc3Q6IEZvcmdlQ29tcG9uZW50ID0gbnVsbDtcclxuXHRcdGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcclxuXHJcblx0XHRmb3IgKGxldCBmb3JnZSBvZiBmb3JnZXMpIHtcclxuXHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xyXG5cdFx0XHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcclxuXHRcdFx0XHRjbG9zZXN0ID0gZm9yZ2U7XHJcblx0XHRcdFx0Y2xvc2VzdERpc3QgPSBmb3JnZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XHJcblx0XHRcdFx0bGV0IGRpc3Q6IG51bWJlciA9IGZvcmdlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XHJcblx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxyXG5cdFx0XHRcdFx0Y2xvc2VzdCA9IGZvcmdlO1xyXG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcclxuXHJcblx0XHRyZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBlcmZvcm0obGFib3VyZXI6IExhYm91cmVyKTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy5zdGFydFRpbWUgPT0gMClcclxuXHRcdFx0dGhpcy5zdGFydFRpbWUgPSBUaW1lVXRpbC5nZXRUaW1lKCk7XHJcblxyXG5cdFx0aWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy5mb3JnZUR1cmF0aW9uKSB7XHJcblx0XHRcdC8vIGZpbmlzaGVkIGZvcmdpbmcgYSB0b29sXHJcblx0XHRcdGxldCBiYWNrcGFjazogQmFja1BhY2tDb21wb25lbnQgPSBsYWJvdXJlci5iYWNrcGFjaztcclxuXHRcdFx0YmFja3BhY2subnVtT3JlID0gMDtcclxuXHRcdFx0dGhpcy5mb3JnZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/PickUpLogsAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb45aiSJ6xB45/z/NGUU+uT', 'PickUpLogsAction');
// src/app/gamedata/actions/PickUpLogsAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickUpLogsAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:14:10
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:36:49
 */
var PickUpLogsAction = /** @class */ (function (_super) {
    __extends(PickUpLogsAction, _super);
    function PickUpLogsAction() {
        var _this = _super.call(this) || this;
        _this.hasLogs = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasLogs, false); // don't get a logs if we already have one
        _this.addEffect(ActionStatus_1.ActionStatus.HasLogs, true); // we now have a logs
        return _this;
    }
    PickUpLogsAction.prototype.reset = function () {
        this.hasLogs = false;
    };
    PickUpLogsAction.prototype.isDone = function () {
        return this.hasLogs;
    };
    PickUpLogsAction.prototype.requiresInRange = function () {
        return true;
    };
    PickUpLogsAction.prototype.checkProceduralPrecondition = function (agent) {
        //TODO: find the nearest supply pile that has spare logs
        var supplyPiles = [];
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (supply.numLogs > 0) {
                if (closest == null) {
                    // first one, so choose it for now
                    closest = supply;
                    closestDist = supply.distanceSquare(agent);
                }
                else {
                    // is this one closer than the last?
                    var dist = supply.distanceSquare(agent);
                    if (dist < closestDist) {
                        // we found a closer one, use it
                        closest = supply;
                        closestDist = dist;
                    }
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    PickUpLogsAction.prototype.perform = function (labourer) {
        if (this.target.numLogs > 0) {
            this.target.numLogs -= 1;
            this.hasLogs = true;
            //TODO play effect, change actor icon
            var backpack = labourer.backpack;
            backpack.numLogs = 1;
            return true;
        }
        else {
            // we got there but there was no logs available! Someone got there first. Cannot perform action
            return false;
        }
    };
    return PickUpLogsAction;
}(GoapAction_1.GoapAction));
exports.PickUpLogsAction = PickUpLogsAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxQaWNrVXBMb2dzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsdURBQXNEO0FBS3REOzs7Ozs7R0FNRztBQUNIO0lBQXNDLG9DQUFVO0lBRy9DO1FBQUEsWUFDQyxpQkFBTyxTQUdQO1FBTk8sYUFBTyxHQUFZLEtBQUssQ0FBQztRQUloQyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsMENBQTBDO1FBQzdGLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7O0lBQ2xFLENBQUM7SUFFTSxnQ0FBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLGlDQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVNLDBDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU0sc0RBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELHdEQUF3RDtRQUN4RCxJQUFJLFdBQVcsR0FBMEIsRUFBRSxDQUFDO1FBQzVDLElBQUksT0FBTyxHQUF3QixJQUFJLENBQUM7UUFDeEMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLEtBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQTNCLElBQUksTUFBTSxvQkFBQTtZQUNkLElBQUksTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtvQkFDcEIsa0NBQWtDO29CQUNsQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUNqQixXQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDM0M7cUJBQU07b0JBQ04sb0NBQW9DO29CQUNwQyxJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoRCxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7d0JBQ3ZCLGdDQUFnQzt3QkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQzt3QkFDakIsV0FBVyxHQUFHLElBQUksQ0FBQztxQkFDbkI7aUJBQ0Q7YUFDRDtTQUNEO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNsQixPQUFPLEtBQUssQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRXRCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sa0NBQU8sR0FBZCxVQUFlLFFBQWtCO1FBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixxQ0FBcUM7WUFDckMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUVyQixPQUFPLElBQUksQ0FBQztTQUNaO2FBQU07WUFDTiwrRkFBK0Y7WUFDL0YsT0FBTyxLQUFLLENBQUM7U0FDYjtJQUNGLENBQUM7SUFDRix1QkFBQztBQUFELENBbEVBLEFBa0VDLENBbEVxQyx1QkFBVSxHQWtFL0M7QUFsRVksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XHJcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MTQ6MTAgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTAtMjggMTE6MzY6NDlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQaWNrVXBMb2dzQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XHJcblx0cHJpdmF0ZSBoYXNMb2dzOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHVibGljIHRhcmdldDogU3VwcGx5UGlsZUNvbXBvbmVudDsgIC8vIHdoZXJlIHdlIGdldCB0aGUgbG9ncyBmcm9tXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNMb2dzLCBmYWxzZSk7IC8vIGRvbid0IGdldCBhIGxvZ3MgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIHRydWUpOyAvLyB3ZSBub3cgaGF2ZSBhIGxvZ3NcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXNldCgpIHtcclxuXHRcdHRoaXMuaGFzTG9ncyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLmhhc0xvZ3M7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xyXG5cdFx0Ly9UT0RPOiBmaW5kIHRoZSBuZWFyZXN0IHN1cHBseSBwaWxlIHRoYXQgaGFzIHNwYXJlIGxvZ3NcclxuXHRcdGxldCBzdXBwbHlQaWxlczogU3VwcGx5UGlsZUNvbXBvbmVudFtdID0gW107XHJcblx0XHRsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGw7XHJcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdFx0Zm9yIChsZXQgc3VwcGx5IG9mIHN1cHBseVBpbGVzKSB7XHJcblx0XHRcdGlmIChzdXBwbHkubnVtTG9ncyA+IDApIHtcclxuXHRcdFx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XHJcblx0XHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xyXG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cclxuXHRcdFx0XHRcdGxldCBkaXN0OiBudW1iZXIgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xyXG5cdFx0XHRcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xyXG5cdFx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxyXG5cdFx0XHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xyXG5cdFx0XHRcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy50YXJnZXQgPSBjbG9zZXN0O1xyXG5cclxuXHRcdHJldHVybiBjbG9zZXN0ICE9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGVyZm9ybShsYWJvdXJlcjogTGFib3VyZXIpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLnRhcmdldC5udW1Mb2dzID4gMCkge1xyXG5cdFx0XHR0aGlzLnRhcmdldC5udW1Mb2dzIC09IDE7XHJcblx0XHRcdHRoaXMuaGFzTG9ncyA9IHRydWU7XHJcblx0XHRcdC8vVE9ETyBwbGF5IGVmZmVjdCwgY2hhbmdlIGFjdG9yIGljb25cclxuXHRcdFx0bGV0IGJhY2twYWNrID0gbGFib3VyZXIuYmFja3BhY2s7XHJcblx0XHRcdGJhY2twYWNrLm51bUxvZ3MgPSAxO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyB3ZSBnb3QgdGhlcmUgYnV0IHRoZXJlIHdhcyBubyBsb2dzIGF2YWlsYWJsZSEgU29tZW9uZSBnb3QgdGhlcmUgZmlyc3QuIENhbm5vdCBwZXJmb3JtIGFjdGlvblxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/PickUpOreAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35193pU0a9AtZnUpyjRwk1B', 'PickUpOreAction');
// src/app/gamedata/actions/PickUpOreAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickUpOreAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:14:55
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:37:41
 */
var PickUpOreAction = /** @class */ (function (_super) {
    __extends(PickUpOreAction, _super);
    function PickUpOreAction() {
        var _this = _super.call(this) || this;
        _this.hasOre = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasOre, false); // don't get a ore if we already have one
        _this.addEffect(ActionStatus_1.ActionStatus.HasOre, true); // we now have a ore
        return _this;
    }
    PickUpOreAction.prototype.reset = function () {
        this.hasOre = false;
    };
    PickUpOreAction.prototype.isDone = function () {
        return this.hasOre;
    };
    PickUpOreAction.prototype.requiresInRange = function () {
        return true; // yes we need to be near a supply pile so we can pick up the ore
    };
    PickUpOreAction.prototype.checkProceduralPrecondition = function (agent) {
        //find the nearest supply pile that has spare ores
        var supplyPiles = Environment_1.Environment.supplyPileComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (supply.numOre >= 3) { // we need to take 3 ore
                if (closest == null) {
                    // first one, so choose it for now
                    closest = supply;
                    closestDist = supply.distanceSquare(agent);
                }
                else {
                    // is this one closer than the last?
                    var dist = supply.distanceSquare(agent);
                    if (dist < closestDist) {
                        // we found a closer one, use it
                        closest = supply;
                        closestDist = dist;
                    }
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    PickUpOreAction.prototype.perform = function (labourer) {
        if (this.target.numOre >= 3) {
            this.target.numOre -= 3;
            this.hasOre = true;
            //TODO play effect, change actor icon
            var backpack = labourer.backpack;
            backpack.numOre += 3;
            return true;
        }
        else {
            // we got there but there was no ore available! Someone got there first. Cannot perform action
            return false;
        }
    };
    return PickUpOreAction;
}(GoapAction_1.GoapAction));
exports.PickUpOreAction = PickUpOreAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxQaWNrVXBPcmVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUMxRCx1REFBc0Q7QUFHdEQsOENBQTZDO0FBSTdDOzs7Ozs7R0FNRztBQUNIO0lBQXFDLG1DQUFVO0lBRzlDO1FBQUEsWUFDQyxpQkFBTyxTQUdQO1FBTk8sWUFBTSxHQUFZLEtBQUssQ0FBQztRQUkvQixLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMseUNBQXlDO1FBQzNGLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7O0lBQ2hFLENBQUM7SUFFTSwrQkFBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLGdDQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVNLHlDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUMsQ0FBQyxpRUFBaUU7SUFDL0UsQ0FBQztJQUVNLHFEQUEyQixHQUFsQyxVQUFtQyxLQUFrQjtRQUNwRCxrREFBa0Q7UUFDbEQsSUFBSSxXQUFXLEdBQTBCLHlCQUFXLENBQUMsZUFBZSxDQUFDO1FBQ3JFLElBQUksT0FBTyxHQUF3QixJQUFJLENBQUM7UUFDeEMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLEtBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQTNCLElBQUksTUFBTSxvQkFBQTtZQUNkLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsRUFBRSx3QkFBd0I7Z0JBQ2pELElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtvQkFDcEIsa0NBQWtDO29CQUNsQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUNqQixXQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDM0M7cUJBQU07b0JBQ04sb0NBQW9DO29CQUNwQyxJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoRCxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7d0JBQ3ZCLGdDQUFnQzt3QkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQzt3QkFDakIsV0FBVyxHQUFHLElBQUksQ0FBQztxQkFDbkI7aUJBQ0Q7YUFDRDtTQUNEO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNsQixPQUFPLEtBQUssQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRXRCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0saUNBQU8sR0FBZCxVQUFlLFFBQWtCO1FBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixxQ0FBcUM7WUFDckMsSUFBSSxRQUFRLEdBQXNCLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDcEQsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFFckIsT0FBTyxJQUFJLENBQUM7U0FDWjthQUFNO1lBQ04sOEZBQThGO1lBQzlGLE9BQU8sS0FBSyxDQUFDO1NBQ2I7SUFDRixDQUFDO0lBR0Ysc0JBQUM7QUFBRCxDQXBFQSxBQW9FQyxDQXBFb0MsdUJBQVUsR0FvRTlDO0FBcEVZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgQmFja1BhY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vQmFja1BhY2tDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XHJcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MTQ6NTUgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTAtMjggMTE6Mzc6NDFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQaWNrVXBPcmVBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcclxuXHRwcml2YXRlIGhhc09yZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHB1YmxpYyB0YXJnZXQ6IFN1cHBseVBpbGVDb21wb25lbnQ7IC8vIHdoZXJlIHdlIGdldCB0aGUgb3JlIGZyb21cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc09yZSwgZmFsc2UpOyAvLyBkb24ndCBnZXQgYSBvcmUgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc09yZSwgdHJ1ZSk7IC8vIHdlIG5vdyBoYXZlIGEgb3JlXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmhhc09yZSA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLmhhc09yZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdHJ1ZTsgLy8geWVzIHdlIG5lZWQgdG8gYmUgbmVhciBhIHN1cHBseSBwaWxlIHNvIHdlIGNhbiBwaWNrIHVwIHRoZSBvcmVcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IFZHYW1lT2JqZWN0KTogYm9vbGVhbiB7XHJcblx0XHQvL2ZpbmQgdGhlIG5lYXJlc3Qgc3VwcGx5IHBpbGUgdGhhdCBoYXMgc3BhcmUgb3Jlc1xyXG5cdFx0bGV0IHN1cHBseVBpbGVzOiBTdXBwbHlQaWxlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC5zdXBwbHlQaWxlQ29tcHM7XHJcblx0XHRsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGw7XHJcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdFx0Zm9yIChsZXQgc3VwcGx5IG9mIHN1cHBseVBpbGVzKSB7XHJcblx0XHRcdGlmIChzdXBwbHkubnVtT3JlID49IDMpIHsgLy8gd2UgbmVlZCB0byB0YWtlIDMgb3JlXHJcblx0XHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xyXG5cdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcclxuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XHJcblx0XHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcclxuXHRcdFx0XHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcclxuXHRcdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcclxuXHRcdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcclxuXHJcblx0XHRyZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBlcmZvcm0obGFib3VyZXI6IExhYm91cmVyKTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy50YXJnZXQubnVtT3JlID49IDMpIHtcclxuXHRcdFx0dGhpcy50YXJnZXQubnVtT3JlIC09IDM7XHJcblx0XHRcdHRoaXMuaGFzT3JlID0gdHJ1ZTtcclxuXHRcdFx0Ly9UT0RPIHBsYXkgZWZmZWN0LCBjaGFuZ2UgYWN0b3IgaWNvblxyXG5cdFx0XHRsZXQgYmFja3BhY2s6IEJhY2tQYWNrQ29tcG9uZW50ID0gbGFib3VyZXIuYmFja3BhY2s7XHJcblx0XHRcdGJhY2twYWNrLm51bU9yZSArPSAzO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyB3ZSBnb3QgdGhlcmUgYnV0IHRoZXJlIHdhcyBubyBvcmUgYXZhaWxhYmxlISBTb21lb25lIGdvdCB0aGVyZSBmaXJzdC4gQ2Fubm90IHBlcmZvcm0gYWN0aW9uXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/PickUpToolAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95cc6Nqz3dKYYtSiyYrsRs5', 'PickUpToolAction');
// src/app/gamedata/actions/PickUpToolAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickUpToolAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:15:38
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 17:47:27
 */
var PickUpToolAction = /** @class */ (function (_super) {
    __extends(PickUpToolAction, _super);
    function PickUpToolAction() {
        var _this = _super.call(this) || this;
        _this.hasTool = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasTool, false); // don't get a tool if we already have one
        _this.addEffect(ActionStatus_1.ActionStatus.HasTool, true); // we now have a tool
        return _this;
    }
    PickUpToolAction.prototype.reset = function () {
        this.hasTool = false;
    };
    PickUpToolAction.prototype.isDone = function () {
        return this.hasTool;
    };
    PickUpToolAction.prototype.requiresInRange = function () {
        return true;
    };
    PickUpToolAction.prototype.checkProceduralPrecondition = function (agent) {
        //TODO: find the nearest supply pile that has spare tools
        var supplyPiles = Environment_1.Environment.supplyPileComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (supply.numTools > 0) {
                if (closest == null) {
                    // first one, so choose it for now
                    closest = supply;
                    closestDist = supply.distanceSquare(agent);
                }
                else {
                    // is this one closer than the last?
                    var dist = supply.distanceSquare(agent);
                    if (dist < closestDist) {
                        // we found a closer one, use it
                        closest = supply;
                        closestDist = dist;
                    }
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    PickUpToolAction.prototype.perform = function (labourer) {
        if (this.target.numTools > 0) {
            this.target.numTools -= 1;
            this.hasTool = true;
            // create the tool and add it to the agent
            labourer.pickUpTool();
            return true;
        }
        else {
            // we got there but there was no tool available! Someone got there first. Cannot perform action
            return false;
        }
    };
    return PickUpToolAction;
}(GoapAction_1.GoapAction));
exports.PickUpToolAction = PickUpToolAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxQaWNrVXBUb29sQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsdURBQXNEO0FBRXRELDhDQUE2QztBQUk3Qzs7Ozs7O0dBTUc7QUFDSDtJQUFzQyxvQ0FBVTtJQUcvQztRQUFBLFlBQ0MsaUJBQU8sU0FHUDtRQU5PLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFJaEMsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLDBDQUEwQztRQUM3RixLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMscUJBQXFCOztJQUNsRSxDQUFDO0lBRU0sZ0NBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxpQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFTSwwQ0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLHNEQUEyQixHQUFsQyxVQUFtQyxLQUFrQjtRQUNwRCx5REFBeUQ7UUFDekQsSUFBSSxXQUFXLEdBQTBCLHlCQUFXLENBQUMsZUFBZSxDQUFDO1FBQ3JFLElBQUksT0FBTyxHQUF3QixJQUFJLENBQUM7UUFDeEMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLEtBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQTNCLElBQUksTUFBTSxvQkFBQTtZQUNkLElBQUksTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtvQkFDcEIsa0NBQWtDO29CQUNsQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUNqQixXQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDM0M7cUJBQU07b0JBQ04sb0NBQW9DO29CQUNwQyxJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoRCxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7d0JBQ3ZCLGdDQUFnQzt3QkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQzt3QkFDakIsV0FBVyxHQUFHLElBQUksQ0FBQztxQkFDbkI7aUJBQ0Q7YUFDRDtTQUNEO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNsQixPQUFPLEtBQUssQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRXRCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sa0NBQU8sR0FBZCxVQUFlLFFBQWtCO1FBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQiwwQ0FBMEM7WUFDMUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1NBQ1o7YUFBTTtZQUNOLCtGQUErRjtZQUMvRixPQUFPLEtBQUssQ0FBQztTQUNiO0lBQ0YsQ0FBQztJQUNGLHVCQUFDO0FBQUQsQ0FoRUEsQUFnRUMsQ0FoRXFDLHVCQUFVLEdBZ0UvQztBQWhFWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIjtcclxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIjtcclxuaW1wb3J0IHsgU3VwcGx5UGlsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9TdXBwbHlQaWxlQ29tcG9uZW50XCI7XHJcblxyXG4vKlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDoxNTozOCBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wNCAxNzo0NzoyN1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBpY2tVcFRvb2xBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcclxuXHRwcml2YXRlIGhhc1Rvb2w6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwdWJsaWMgdGFyZ2V0OiBTdXBwbHlQaWxlQ29tcG9uZW50OyAvLyB3aGVyZSB3ZSBnZXQgdGhlIHRvb2wgZnJvbVxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzVG9vbCwgZmFsc2UpOyAvLyBkb24ndCBnZXQgYSB0b29sIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmVcclxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNUb29sLCB0cnVlKTsgLy8gd2Ugbm93IGhhdmUgYSB0b29sXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmhhc1Rvb2wgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc0RvbmUoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5oYXNUb29sO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuIHtcclxuXHRcdC8vVE9ETzogZmluZCB0aGUgbmVhcmVzdCBzdXBwbHkgcGlsZSB0aGF0IGhhcyBzcGFyZSB0b29sc1xyXG5cdFx0bGV0IHN1cHBseVBpbGVzOiBTdXBwbHlQaWxlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC5zdXBwbHlQaWxlQ29tcHM7XHJcblx0XHRsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGw7XHJcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdFx0Zm9yIChsZXQgc3VwcGx5IG9mIHN1cHBseVBpbGVzKSB7XHJcblx0XHRcdGlmIChzdXBwbHkubnVtVG9vbHMgPiAwKSB7XHJcblx0XHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xyXG5cdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcclxuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XHJcblx0XHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcclxuXHRcdFx0XHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcclxuXHRcdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcclxuXHRcdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcclxuXHJcblx0XHRyZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBlcmZvcm0obGFib3VyZXI6IExhYm91cmVyKTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy50YXJnZXQubnVtVG9vbHMgPiAwKSB7XHJcblx0XHRcdHRoaXMudGFyZ2V0Lm51bVRvb2xzIC09IDE7XHJcblx0XHRcdHRoaXMuaGFzVG9vbCA9IHRydWU7XHJcblx0XHRcdC8vIGNyZWF0ZSB0aGUgdG9vbCBhbmQgYWRkIGl0IHRvIHRoZSBhZ2VudFxyXG5cdFx0XHRsYWJvdXJlci5waWNrVXBUb29sKCk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gd2UgZ290IHRoZXJlIGJ1dCB0aGVyZSB3YXMgbm8gdG9vbCBhdmFpbGFibGUhIFNvbWVvbmUgZ290IHRoZXJlIGZpcnN0LiBDYW5ub3QgcGVyZm9ybSBhY3Rpb25cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/ChopFirewoodAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20d3a8yS95Bma5uf0blkWk7', 'ChopFirewoodAction');
// src/app/gamedata/actions/ChopFirewoodAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChopFirewoodAction = void 0;
var TimeUtil_1 = require("../../../utils/TimeUtil");
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:09
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 17:35:57
 */
var ChopFirewoodAction = /** @class */ (function (_super) {
    __extends(ChopFirewoodAction, _super);
    function ChopFirewoodAction() {
        var _this = _super.call(this) || this;
        _this.chopped = false;
        _this.startTime = 0;
        _this.workDuration = 2;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasTool, true); // we need a tool to do this
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasFirewood, false); // if we have firewood we don't want more
        _this.addEffect(ActionStatus_1.ActionStatus.HasFirewood, true);
        return _this;
    }
    ChopFirewoodAction.prototype.reset = function () {
        this.chopped = false;
        this.startTime = 0;
    };
    ChopFirewoodAction.prototype.isDone = function () {
        return this.chopped;
    };
    ChopFirewoodAction.prototype.requiresInRange = function () {
        return true;
    };
    ChopFirewoodAction.prototype.checkProceduralPrecondition = function (agent) {
        var labourer = agent;
        // find the nearest chopping block that we can chop our wood at
        var blocks = Environment_1.Environment.choppingBlockComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, blocks_1 = blocks; _i < blocks_1.length; _i++) {
            var block = blocks_1[_i];
            if (closest == null) {
                closest = block;
                closestDist = block.distanceSquare(agent);
            }
            else {
                // is this one closer than the last?
                var dist = block.distanceSquare(agent);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = block;
                    closestDist = dist;
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    ChopFirewoodAction.prototype.perform = function (iGoap) {
        var labourer = iGoap;
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            // finished chopping
            var backpack = labourer.backpack;
            backpack.numFirewood += 5;
            this.chopped = true;
            var tool = labourer.tool;
            tool.use(0.34);
            if (tool.destroyed()) {
                // TODO:删除 Destroy(backpack.tool);
                labourer.destroyTool();
            }
        }
        return true;
    };
    return ChopFirewoodAction;
}(GoapAction_1.GoapAction));
exports.ChopFirewoodAction = ChopFirewoodAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxDaG9wRmlyZXdvb2RBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUMvQywyREFBMEQ7QUFDMUQsdURBQXNEO0FBS3RELDhDQUE2QztBQUc3Qzs7Ozs7O0dBTUc7QUFDSDtJQUF3QyxzQ0FBVTtJQUtqRDtRQUFBLFlBQ0MsaUJBQU8sU0FJUDtRQVRPLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN2QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUcvQixLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1FBQzlFLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyx5Q0FBeUM7UUFDaEcsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDaEQsQ0FBQztJQUNNLGtDQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ00sbUNBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRU0sNENBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTSx3REFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQsSUFBSSxRQUFRLEdBQWEsS0FBaUIsQ0FBQztRQUMzQywrREFBK0Q7UUFDL0QsSUFBSSxNQUFNLEdBQTZCLHlCQUFXLENBQUMsa0JBQWtCLENBQUM7UUFDdEUsSUFBSSxPQUFPLEdBQTJCLElBQUksQ0FBQztRQUMzQyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUM7UUFFNUIsS0FBa0IsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUU7WUFBckIsSUFBSSxLQUFLLGVBQUE7WUFDYixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2hCLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFDO2lCQUFNO2dCQUNOLG9DQUFvQztnQkFDcEMsSUFBSSxJQUFJLEdBQVcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO29CQUN2QixnQ0FBZ0M7b0JBQ2hDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0Q7U0FDRDtRQUVELElBQUksT0FBTyxJQUFJLElBQUk7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLG9DQUFPLEdBQWQsVUFBZSxLQUFZO1FBQzFCLElBQUksUUFBUSxHQUFHLEtBQWlCLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXJDLElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDNUQsb0JBQW9CO1lBQ3BCLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3BELFFBQVEsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNmLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUNyQixrQ0FBa0M7Z0JBQ2xDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN2QjtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQXhFQSxBQXdFQyxDQXhFdUMsdUJBQVUsR0F3RWpEO0FBeEVZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvVGltZVV0aWxcIjtcclxuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvSUdvYXBcIjtcclxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaG9wcGluZ0Jsb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0Nob3BwaW5nQmxvY2tDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XHJcblxyXG4vKlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDowOTowOSBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wNCAxNzozNTo1N1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENob3BGaXJld29vZEFjdGlvbiBleHRlbmRzIEdvYXBBY3Rpb24ge1xyXG5cdHByaXZhdGUgY2hvcHBlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcclxuXHRwdWJsaWMgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAyO1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzVG9vbCwgdHJ1ZSk7IC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcclxuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNGaXJld29vZCwgZmFsc2UpOyAvLyBpZiB3ZSBoYXZlIGZpcmV3b29kIHdlIGRvbid0IHdhbnQgbW9yZVxyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc0ZpcmV3b29kLCB0cnVlKTtcclxuXHR9XHJcblx0cHVibGljIHJlc2V0KCkge1xyXG5cdFx0dGhpcy5jaG9wcGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XHJcblx0fVxyXG5cdHB1YmxpYyBpc0RvbmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jaG9wcGVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuIHtcclxuXHRcdGxldCBsYWJvdXJlcjogTGFib3VyZXIgPSBhZ2VudCBhcyBMYWJvdXJlcjtcclxuXHRcdC8vIGZpbmQgdGhlIG5lYXJlc3QgY2hvcHBpbmcgYmxvY2sgdGhhdCB3ZSBjYW4gY2hvcCBvdXIgd29vZCBhdFxyXG5cdFx0bGV0IGJsb2NrczogQ2hvcHBpbmdCbG9ja0NvbXBvbmVudFtdID0gRW52aXJvbm1lbnQuY2hvcHBpbmdCbG9ja0NvbXBzO1xyXG5cdFx0bGV0IGNsb3Nlc3Q6IENob3BwaW5nQmxvY2tDb21wb25lbnQgPSBudWxsO1xyXG5cdFx0bGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwO1xyXG5cclxuXHRcdGZvciAobGV0IGJsb2NrIG9mIGJsb2Nrcykge1xyXG5cdFx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKSB7XHJcblx0XHRcdFx0Y2xvc2VzdCA9IGJsb2NrO1xyXG5cdFx0XHRcdGNsb3Nlc3REaXN0ID0gYmxvY2suZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGlzIHRoaXMgb25lIGNsb3NlciB0aGFuIHRoZSBsYXN0P1xyXG5cdFx0XHRcdGxldCBkaXN0OiBudW1iZXIgPSBibG9jay5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHRcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xyXG5cdFx0XHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcclxuXHRcdFx0XHRcdGNsb3Nlc3QgPSBibG9jaztcclxuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy50YXJnZXQgPSBjbG9zZXN0O1xyXG5cclxuXHRcdHJldHVybiBjbG9zZXN0ICE9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGVyZm9ybShpR29hcDogSUdvYXApOiBib29sZWFuIHtcclxuXHRcdGxldCBsYWJvdXJlciA9IGlHb2FwIGFzIExhYm91cmVyO1xyXG5cdFx0aWYgKHRoaXMuc3RhcnRUaW1lID09IDApXHJcblx0XHRcdHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpO1xyXG5cclxuXHRcdGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XHJcblx0XHRcdC8vIGZpbmlzaGVkIGNob3BwaW5nXHJcblx0XHRcdGxldCBiYWNrcGFjazogQmFja1BhY2tDb21wb25lbnQgPSBsYWJvdXJlci5iYWNrcGFjaztcclxuXHRcdFx0YmFja3BhY2subnVtRmlyZXdvb2QgKz0gNTtcclxuXHRcdFx0dGhpcy5jaG9wcGVkID0gdHJ1ZTtcclxuXHRcdFx0bGV0IHRvb2wgPSBsYWJvdXJlci50b29sO1xyXG5cdFx0XHR0b29sLnVzZSgwLjM0KTtcclxuXHRcdFx0aWYgKHRvb2wuZGVzdHJveWVkKCkpIHtcclxuXHRcdFx0XHQvLyBUT0RPOuWIoOmZpCBEZXN0cm95KGJhY2twYWNrLnRvb2wpO1xyXG5cdFx0XHRcdGxhYm91cmVyLmRlc3Ryb3lUb29sKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VWoodCutter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20744NAa29Glpqjazi0V1md', 'VWoodCutter');
// src/app/gamedata/labourers/vlabourers/VWoodCutter.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VWoodCutter = void 0;
var VLabourer_1 = require("./VLabourer");
/*
 * @Description: 伐木工
 * @Author: RannarYang
 * @Date: 2018-11-03 12:13:51
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-03 12:17:39
 */
var VWoodCutter = /** @class */ (function (_super) {
    __extends(VWoodCutter, _super);
    function VWoodCutter() {
        return _super.call(this) || this;
    }
    return VWoodCutter;
}(VLabourer_1.VLabourer));
exports.VWoodCutter = VWoodCutter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXHZsYWJvdXJlcnNcXFZXb29kQ3V0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBd0M7QUFFeEM7Ozs7OztHQU1HO0FBQ0g7SUFBaUMsK0JBQVM7SUFFekM7ZUFDQyxpQkFBTztJQUNSLENBQUM7SUFDRixrQkFBQztBQUFELENBTEEsQUFLQyxDQUxnQyxxQkFBUyxHQUt6QztBQUxZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV29vZEN1dHRlciB9IGZyb20gXCIuLi9Xb29kQ3V0dGVyXCI7XHJcbmltcG9ydCB7IFZMYWJvdXJlciB9IGZyb20gXCIuL1ZMYWJvdXJlclwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiDkvJDmnKjlt6VcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMTEtMDMgMTI6MTM6NTEgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDMgMTI6MTc6MzlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWV29vZEN1dHRlciBleHRlbmRzIFZMYWJvdXJlciB7XHJcblx0cHJvdGVjdGVkIGxhYm91cmVyOiBXb29kQ3V0dGVyO1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VLogger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cfe74JLQLhNwoE4/6eg7Aoi', 'VLogger');
// src/app/gamedata/labourers/vlabourers/VLogger.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VLogger = void 0;
var VLabourer_1 = require("./VLabourer");
/*
 * @Description: 樵夫
 * @Author: RannarYang
 * @Date: 2018-11-03 12:14:09
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-03 12:17:04
 */
var VLogger = /** @class */ (function (_super) {
    __extends(VLogger, _super);
    //protected labourer: Logger;
    function VLogger() {
        return _super.call(this) || this;
    }
    return VLogger;
}(VLabourer_1.VLabourer));
exports.VLogger = VLogger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXHZsYWJvdXJlcnNcXFZMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUF3QztBQUV4Qzs7Ozs7O0dBTUc7QUFDSDtJQUE2QiwyQkFBUztJQUNyQyw2QkFBNkI7SUFDN0I7ZUFDQyxpQkFBTztJQUNSLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FMQSxBQUtDLENBTDRCLHFCQUFTLEdBS3JDO0FBTFksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFZMYWJvdXJlciB9IGZyb20gXCIuL1ZMYWJvdXJlclwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiDmqLXlpKtcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMTEtMDMgMTI6MTQ6MDkgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDMgMTI6MTc6MDRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWTG9nZ2VyIGV4dGVuZHMgVkxhYm91cmVyIHtcclxuXHQvL3Byb3RlY3RlZCBsYWJvdXJlcjogTG9nZ2VyO1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/Blacksmith.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0192gnkYJImoGjdoQ87cxo', 'Blacksmith');
// src/app/gamedata/labourers/Blacksmith.ts

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
exports.Blacksmith = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var DropOffToolsAction_1 = require("../actions/DropOffToolsAction");
var ForgeToolAction_1 = require("../actions/ForgeToolAction");
var PickUpOreAction_1 = require("../actions/PickUpOreAction");
var Labourer_1 = require("./Labourer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Blacksmith = /** @class */ (function (_super) {
    __extends(Blacksmith, _super);
    function Blacksmith() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Blacksmith.prototype.initAvaliableActions = function () {
        this.toInitAvaliableActions([ForgeToolAction_1.ForgeToolAction, DropOffToolsAction_1.DropOffToolsAction, PickUpOreAction_1.PickUpOreAction]);
    };
    /**
     * Our only goal will ever be to make tools.
     * The ForgeTooldAction will be able to fulfill this goal.
     */
    Blacksmith.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set(ActionStatus_1.ActionStatus.CollectTools, true);
        return goal;
    };
    Blacksmith.prototype.updateBackPack = function () {
        console.log("矿石：" + this.backpack.numOre);
    };
    Blacksmith = __decorate([
        ccclass
    ], Blacksmith);
    return Blacksmith;
}(Labourer_1.Labourer));
exports.Blacksmith = Blacksmith;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXEJsYWNrc21pdGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUMxRCxvRUFBbUU7QUFDbkUsOERBQTZEO0FBQzdELDhEQUE2RDtBQUM3RCx1Q0FBc0M7QUFDaEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBZ0MsOEJBQVE7SUFBeEM7O0lBaUJBLENBQUM7SUFoQlUseUNBQW9CLEdBQTlCO1FBQ0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsaUNBQWUsRUFBRSx1Q0FBa0IsRUFBRSxpQ0FBZSxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksb0NBQWUsR0FBdEI7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLG1DQUFjLEdBQXJCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBaEJXLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0FpQnRCO0lBQUQsaUJBQUM7Q0FqQkQsQUFpQkMsQ0FqQitCLG1CQUFRLEdBaUJ2QztBQWpCWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xyXG5pbXBvcnQgeyBEcm9wT2ZmVG9vbHNBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9Ecm9wT2ZmVG9vbHNBY3Rpb25cIjtcclxuaW1wb3J0IHsgRm9yZ2VUb29sQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvRm9yZ2VUb29sQWN0aW9uXCI7XHJcbmltcG9ydCB7IFBpY2tVcE9yZUFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL1BpY2tVcE9yZUFjdGlvblwiO1xyXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuL0xhYm91cmVyXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBCbGFja3NtaXRoIGV4dGVuZHMgTGFib3VyZXIge1xyXG5cdHByb3RlY3RlZCBpbml0QXZhbGlhYmxlQWN0aW9ucygpIHtcclxuXHRcdHRoaXMudG9Jbml0QXZhbGlhYmxlQWN0aW9ucyhbRm9yZ2VUb29sQWN0aW9uLCBEcm9wT2ZmVG9vbHNBY3Rpb24sIFBpY2tVcE9yZUFjdGlvbl0pO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBPdXIgb25seSBnb2FsIHdpbGwgZXZlciBiZSB0byBtYWtlIHRvb2xzLlxyXG5cdCAqIFRoZSBGb3JnZVRvb2xkQWN0aW9uIHdpbGwgYmUgYWJsZSB0byBmdWxmaWxsIHRoaXMgZ29hbC5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xyXG5cdFx0bGV0IGdvYWwgPSBuZXcgTWFwPHN0cmluZywgT2JqZWN0PigpO1xyXG5cdFx0Z29hbC5zZXQoQWN0aW9uU3RhdHVzLkNvbGxlY3RUb29scywgdHJ1ZSk7XHJcblx0XHRyZXR1cm4gZ29hbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB1cGRhdGVCYWNrUGFjaygpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi55+/55+z77yaXCIgKyB0aGlzLmJhY2twYWNrLm51bU9yZSlcclxuXHR9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/Miner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6a62dN85WNPJrKPUHUnLo0i', 'Miner');
// src/app/gamedata/labourers/Miner.ts

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
exports.Miner = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var DropOffOreAction_1 = require("../actions/DropOffOreAction");
var MineOreAction_1 = require("../actions/MineOreAction");
var PickUpToolAction_1 = require("../actions/PickUpToolAction");
var Labourer_1 = require("./Labourer");
/*
 * @Description: 矿工
 * @Author: Rannar.Yang
 * @Date: 2018-09-05 20:40:44
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 18:41:37
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Miner = /** @class */ (function (_super) {
    __extends(Miner, _super);
    function Miner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //public labourerType = LabourerType.Miner;
    Miner.prototype.initAvaliableActions = function () {
        this.toInitAvaliableActions([MineOreAction_1.MineOreAction, PickUpToolAction_1.PickUpToolAction, DropOffOreAction_1.DropOffOreAction]);
    };
    /**
     * Our only goal will ever be to mine ore.
     * The MineOreAction will be able to fulfill this goal.
     */
    Miner.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set(ActionStatus_1.ActionStatus.CollectOre, true);
        return goal;
    };
    Miner.prototype.updateBackPack = function () {
        console.log("矿石：" + this.backpack.numOre);
    };
    Miner = __decorate([
        ccclass
    ], Miner);
    return Miner;
}(Labourer_1.Labourer));
exports.Miner = Miner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXE1pbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsZ0VBQStEO0FBQy9ELDBEQUF5RDtBQUN6RCxnRUFBK0Q7QUFDL0QsdUNBQXNDO0FBRXRDOzs7Ozs7R0FNRztBQUNHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTJCLHlCQUFRO0lBQW5DOztJQWtCQSxDQUFDO0lBakJBLDJDQUEyQztJQUNqQyxvQ0FBb0IsR0FBOUI7UUFDQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyw2QkFBYSxFQUFFLG1DQUFnQixFQUFFLG1DQUFnQixDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksK0JBQWUsR0FBdEI7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLDhCQUFjLEdBQXJCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBakJXLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0FrQmpCO0lBQUQsWUFBQztDQWxCRCxBQWtCQyxDQWxCMEIsbUJBQVEsR0FrQmxDO0FBbEJZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IERyb3BPZmZPcmVBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9Ecm9wT2ZmT3JlQWN0aW9uXCI7XHJcbmltcG9ydCB7IE1pbmVPcmVBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9NaW5lT3JlQWN0aW9uXCI7XHJcbmltcG9ydCB7IFBpY2tVcFRvb2xBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9QaWNrVXBUb29sQWN0aW9uXCI7XHJcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4vTGFib3VyZXJcIjtcclxuXHJcbi8qXHJcbiAqIEBEZXNjcmlwdGlvbjog55+/5belXHJcbiAqIEBBdXRob3I6IFJhbm5hci5ZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0wOS0wNSAyMDo0MDo0NCBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wNCAxODo0MTozN1xyXG4gKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIE1pbmVyIGV4dGVuZHMgTGFib3VyZXIge1xyXG5cdC8vcHVibGljIGxhYm91cmVyVHlwZSA9IExhYm91cmVyVHlwZS5NaW5lcjtcclxuXHRwcm90ZWN0ZWQgaW5pdEF2YWxpYWJsZUFjdGlvbnMoKSB7XHJcblx0XHR0aGlzLnRvSW5pdEF2YWxpYWJsZUFjdGlvbnMoW01pbmVPcmVBY3Rpb24sIFBpY2tVcFRvb2xBY3Rpb24sIERyb3BPZmZPcmVBY3Rpb25dKTtcclxuXHR9XHJcblx0LyoqXHJcblx0ICogT3VyIG9ubHkgZ29hbCB3aWxsIGV2ZXIgYmUgdG8gbWluZSBvcmUuXHJcblx0ICogVGhlIE1pbmVPcmVBY3Rpb24gd2lsbCBiZSBhYmxlIHRvIGZ1bGZpbGwgdGhpcyBnb2FsLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XHJcblx0XHRsZXQgZ29hbCA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KCk7XHJcblx0XHRnb2FsLnNldChBY3Rpb25TdGF0dXMuQ29sbGVjdE9yZSwgdHJ1ZSk7XHJcblx0XHRyZXR1cm4gZ29hbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB1cGRhdGVCYWNrUGFjaygpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi55+/55+z77yaXCIgKyB0aGlzLmJhY2twYWNrLm51bU9yZSlcclxuXHR9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

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
var ChopFirewoodAction_1 = require("../actions/ChopFirewoodAction");
var DropOffFirewoodAction_1 = require("../actions/DropOffFirewoodAction");
var PickUpToolAction_1 = require("../actions/PickUpToolAction");
var Labourer_1 = require("./Labourer");
/*
 * @Description: 伐木工
 * @Author: Rannar.Yang
 * @Date: 2018-09-05 20:40:44
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 18:28:30
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WoodCutter = /** @class */ (function (_super) {
    __extends(WoodCutter, _super);
    function WoodCutter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WoodCutter.prototype.initAvaliableActions = function () {
        this.toInitAvaliableActions([ChopFirewoodAction_1.ChopFirewoodAction, DropOffFirewoodAction_1.DropOffFirewoodAction, PickUpToolAction_1.PickUpToolAction]);
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
        ccclass
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXFdvb2RDdXR0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUMxRCxvRUFBbUU7QUFDbkUsMEVBQXlFO0FBQ3pFLGdFQUErRDtBQUMvRCx1Q0FBc0M7QUFFdEM7Ozs7OztHQU1HO0FBQ0csSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBZ0MsOEJBQVE7SUFBeEM7O0lBaUJBLENBQUM7SUFoQlUseUNBQW9CLEdBQTlCO1FBQ0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsdUNBQWtCLEVBQUUsNkNBQXFCLEVBQUUsbUNBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFDRDs7O09BR0c7SUFDSSxvQ0FBZSxHQUF0QjtRQUNDLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU0sbUNBQWMsR0FBckI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQy9DLENBQUM7SUFoQlcsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQWlCdEI7SUFBRCxpQkFBQztDQWpCRCxBQWlCQyxDQWpCK0IsbUJBQVEsR0FpQnZDO0FBakJZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IENob3BGaXJld29vZEFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL0Nob3BGaXJld29vZEFjdGlvblwiO1xyXG5pbXBvcnQgeyBEcm9wT2ZmRmlyZXdvb2RBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9Ecm9wT2ZmRmlyZXdvb2RBY3Rpb25cIjtcclxuaW1wb3J0IHsgUGlja1VwVG9vbEFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL1BpY2tVcFRvb2xBY3Rpb25cIjtcclxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi9MYWJvdXJlclwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiDkvJDmnKjlt6VcclxuICogQEF1dGhvcjogUmFubmFyLllhbmcgXHJcbiAqIEBEYXRlOiAyMDE4LTA5LTA1IDIwOjQwOjQ0IFxyXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTA0IDE4OjI4OjMwXHJcbiAqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgV29vZEN1dHRlciBleHRlbmRzIExhYm91cmVyIHtcclxuXHRwcm90ZWN0ZWQgaW5pdEF2YWxpYWJsZUFjdGlvbnMoKSB7XHJcblx0XHR0aGlzLnRvSW5pdEF2YWxpYWJsZUFjdGlvbnMoW0Nob3BGaXJld29vZEFjdGlvbiwgRHJvcE9mZkZpcmV3b29kQWN0aW9uLCBQaWNrVXBUb29sQWN0aW9uXSk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIE91ciBvbmx5IGdvYWwgd2lsbCBldmVyIGJlIHRvIGNob3AgbG9ncy5cclxuXHQgKiBUaGUgQ2hvcEZpcmV3b29kQWN0aW9uIHdpbGwgYmUgYWJsZSB0byBmdWxmaWxsIHRoaXMgZ29hbC5cclxuXHQgKi9cclxuXHRwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xyXG5cdFx0bGV0IGdvYWwgPSBuZXcgTWFwPHN0cmluZywgT2JqZWN0PigpO1xyXG5cdFx0Z29hbC5zZXQoQWN0aW9uU3RhdHVzLkNvbGxlY3RGaXJld29vZCwgdHJ1ZSk7XHJcblx0XHRyZXR1cm4gZ29hbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB1cGRhdGVCYWNrUGFjaygpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5pyo5p+077yaXCIgKyB0aGlzLmJhY2twYWNrLm51bUZpcmV3b29kKVxyXG5cdH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VBlacksmith.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6fc27eGHPBKt4F9PnFtM0nj', 'VBlacksmith');
// src/app/gamedata/labourers/vlabourers/VBlacksmith.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VBlacksmith = void 0;
var VLabourer_1 = require("./VLabourer");
/*
 * @Description: 铁匠
 * @Author: RannarYang
 * @Date: 2018-11-03 12:13:59
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-03 12:16:30
 */
var VBlacksmith = /** @class */ (function (_super) {
    __extends(VBlacksmith, _super);
    function VBlacksmith() {
        return _super.call(this) || this;
    }
    return VBlacksmith;
}(VLabourer_1.VLabourer));
exports.VBlacksmith = VBlacksmith;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXHZsYWJvdXJlcnNcXFZCbGFja3NtaXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBd0M7QUFFeEM7Ozs7OztHQU1HO0FBQ0g7SUFBaUMsK0JBQVM7SUFFekM7ZUFDQyxpQkFBTztJQUNSLENBQUM7SUFDRixrQkFBQztBQUFELENBTEEsQUFLQyxDQUxnQyxxQkFBUyxHQUt6QztBQUxZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmxhY2tzbWl0aCB9IGZyb20gXCIuLi9CbGFja3NtaXRoXCI7XHJcbmltcG9ydCB7IFZMYWJvdXJlciB9IGZyb20gXCIuL1ZMYWJvdXJlclwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiDpk4HljKBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMTEtMDMgMTI6MTM6NTkgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDMgMTI6MTY6MzBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWQmxhY2tzbWl0aCBleHRlbmRzIFZMYWJvdXJlciB7XHJcblx0cHJvdGVjdGVkIGxhYm91cmVyOiBCbGFja3NtaXRoO1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/goap/IGoap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdc7dNcI0ZNtrT9XLEK2oCk', 'IGoap');
// src/app/ai/goap/IGoap.ts

"use strict";
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:38
 * @Last Modified by:   RannarYang
 * @Last Modified time: 2018-09-06 00:09:38
 */
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxnb2FwXFxJR29hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztHQU1HIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MDk6MzggXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIFJhbm5hcllhbmcgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDktMDYgMDA6MDk6MzggXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuL0dvYXBBY3Rpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBBbnkgYWdlbnQgdGhhdCB3YW50cyB0byB1c2UgR09BUCBtdXN0IGltcGxlbWVudFxyXG4gKiB0aGlzIGludGVyZmFjZS4gSXQgcHJvdmlkZXMgaW5mb3JtYXRpb24gdG8gdGhlIEdPQVBcclxuICogcGxhbm5lciBzbyBpdCBjYW4gcGxhbiB3aGF0IGFjdGlvbnMgdG8gdXNlLlxyXG4gKiBcclxuICogSXQgYWxzbyBwcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIHRoZSBwbGFubmVyIHRvIGdpdmUgXHJcbiAqIGZlZWRiYWNrIHRvIHRoZSBBZ2VudCBhbmQgcmVwb3J0IHN1Y2Nlc3MvZmFpbHVyZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdvYXAge1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBzdGFydGluZyBzdGF0ZSBvZiB0aGUgQWdlbnQgYW5kIHRoZSB3b3JsZC5cclxuXHQgKiBTdXBwbHkgd2hhdCBzdGF0ZXMgYXJlIG5lZWRlZCBmb3IgYWN0aW9ucyB0byBydW4uXHJcblx0ICovXHJcblx0Z2V0V29ybGRTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+O1xyXG5cclxuXHRnZXRBdmFsaWFibGVBY3Rpb25zKCk6IEdvYXBBY3Rpb25bXTtcclxuXHJcblx0LyoqXHJcblx0ICogR2l2ZSB0aGUgcGxhbm5lciBhIG5ldyBnb2FsIHNvIGl0IGNhbiBmaWd1cmUgb3V0IFxyXG5cdCAqIHRoZSBhY3Rpb25zIG5lZWRlZCB0byBmdWxmaWxsIGl0LlxyXG5cdCAqL1xyXG5cdGNyZWF0ZUdvYWxTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+O1xyXG5cclxuXHQvKipcclxuXHQgKiBObyBzZXF1ZW5jZSBvZiBhY3Rpb25zIGNvdWxkIGJlIGZvdW5kIGZvciB0aGUgc3VwcGxpZWQgZ29hbC5cclxuXHQgKiBZb3Ugd2lsbCBuZWVkIHRvIHRyeSBhbm90aGVyIGdvYWxcclxuXHQgKi9cclxuXHRwbGFuRmFpbGVkKGZhaWxlZEdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBBIHBsYW4gd2FzIGZvdW5kIGZvciB0aGUgc3VwcGxpZWQgZ29hbC5cclxuXHQgKiBUaGVzZSBhcmUgdGhlIGFjdGlvbnMgdGhlIEFnZW50IHdpbGwgcGVyZm9ybSwgaW4gb3JkZXIuXHJcblx0ICovXHJcblx0cGxhbkZvdW5kKGdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4sIGFjdGlvbnM6IEdvYXBBY3Rpb25bXSk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFsbCBhY3Rpb25zIGFyZSBjb21wbGV0ZSBhbmQgdGhlIGdvYWwgd2FzIHJlYWNoZWQuIEhvb3JheSFcclxuXHQgKi9cclxuXHRhY3Rpb25zRmluaXNoZWQoKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogT25lIG9mIHRoZSBhY3Rpb25zIGNhdXNlZCB0aGUgcGxhbiB0byBhYm9ydC5cclxuXHQgKiBUaGF0IGFjdGlvbiBpcyByZXR1cm5lZC5cclxuXHQgKi9cclxuXHRwbGFuQWJvcnRlZChhYm9ydGVyOiBHb2FwQWN0aW9uKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogQ2FsbGVkIGR1cmluZyBVcGRhdGUuIE1vdmUgdGhlIGFnZW50IHRvd2FyZHMgdGhlIHRhcmdldCBpbiBvcmRlclxyXG5cdCAqIGZvciB0aGUgbmV4dCBhY3Rpb24gdG8gYmUgYWJsZSB0byBwZXJmb3JtLlxyXG5cdCAqIFJldHVybiB0cnVlIGlmIHRoZSBBZ2VudCBpcyBhdCB0aGUgdGFyZ2V0IGFuZCB0aGUgbmV4dCBhY3Rpb24gY2FuIHBlcmZvcm0uXHJcblx0ICogRmFsc2UgaWYgaXQgaXMgbm90IHRoZXJlIHlldC5cclxuXHQgKi9cclxuXHRtb3ZlQWdlbnQobmV4dEFjdGlvbjogR29hcEFjdGlvbiwgZGVsdGE6IG51bWJlcik6IGJvb2xlYW47XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/goap/GoapAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb66cSHr3JCl5d2q3MzKcU5', 'GoapAction');
// src/app/ai/goap/GoapAction.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoapAction = void 0;
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:26
 * @Last Modified by:   RannarYang
 * @Last Modified time: 2018-09-06 00:09:26
 */
var GoapAction = /** @class */ (function () {
    function GoapAction() {
        this.inRange = false;
        /* 执行动作的成本。
        * 找出适合动作的重量。
        * 更改它将影响在计划期间选择的操作。*/
        this.cost = 1;
        this.preconditions = new Map();
        this.effects = new Map();
    }
    GoapAction.prototype.doReset = function () {
        this.inRange = false;
        this.target = null;
        this.reset();
    };
    /**
     * Are we in range of the target?
     * The MoveTo state will set this and it gets reset each time this action is performed.
     */
    GoapAction.prototype.isInRange = function () {
        return this.inRange;
    };
    GoapAction.prototype.setInRange = function (inRange) {
        this.inRange = inRange;
    };
    GoapAction.prototype.addPrecondition = function (key, value) {
        this.preconditions.set(key, value);
    };
    GoapAction.prototype.removePrecondition = function (key) {
        this.preconditions.delete(key);
    };
    GoapAction.prototype.addEffect = function (key, value) {
        this.effects.set(key, value);
    };
    GoapAction.prototype.removeEffect = function (key) {
        this.effects.delete(key);
    };
    Object.defineProperty(GoapAction.prototype, "Preconditions", {
        get: function () {
            return this.preconditions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GoapAction.prototype, "Effects", {
        get: function () {
            return this.effects;
        },
        enumerable: false,
        configurable: true
    });
    return GoapAction;
}());
exports.GoapAction = GoapAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxnb2FwXFxHb2FwQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOzs7Ozs7R0FNRztBQUNIO0lBb0JDO1FBaEJRLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFakM7OzZCQUVxQjtRQUNkLFNBQUksR0FBVyxDQUFDLENBQUM7UUFZdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO0lBQ2hELENBQUM7SUFFTSw0QkFBTyxHQUFkO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQWdDRDs7O09BR0c7SUFDSSw4QkFBUyxHQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRU0sK0JBQVUsR0FBakIsVUFBa0IsT0FBZ0I7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVNLG9DQUFlLEdBQXRCLFVBQXVCLEdBQVcsRUFBRSxLQUFVO1FBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRU0sdUNBQWtCLEdBQXpCLFVBQTBCLEdBQVc7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLDhCQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxLQUFVO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ00saUNBQVksR0FBbkIsVUFBb0IsR0FBVztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsc0JBQVcscUNBQWE7YUFBeEI7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVywrQkFBTzthQUFsQjtZQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUNGLGlCQUFDO0FBQUQsQ0E3RkEsQUE2RkMsSUFBQTtBQTdGcUIsZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW50aXR5IGZyb20gXCIuLi8uLi8uLi8uLi9nb2FwL0VudGl0eVwiO1xyXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuL0FjdGlvblN0YXR1c1wiO1xyXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi9Hb2FwQWdlbnRcIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi9JR29hcFwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MDk6MjYgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIFJhbm5hcllhbmcgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDktMDYgMDA6MDk6MjYgXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR29hcEFjdGlvbiB7XHJcblx0cHJpdmF0ZSBwcmVjb25kaXRpb25zOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+O1xyXG5cdHByaXZhdGUgZWZmZWN0czogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PjtcclxuXHJcblx0cHJpdmF0ZSBpblJhbmdlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8qIOaJp+ihjOWKqOS9nOeahOaIkOacrOOAglxyXG5cdCog5om+5Ye66YCC5ZCI5Yqo5L2c55qE6YeN6YeP44CCXHJcblx0KiDmm7TmlLnlroPlsIblvbHlk43lnKjorqHliJLmnJ/pl7TpgInmi6nnmoTmk43kvZzjgIIqL1xyXG5cdHB1YmxpYyBjb3N0OiBudW1iZXIgPSAxO1xyXG5cclxuXHJcblx0LyoqXHJcblx0KiDkuIDkuKrliqjkvZzpgJrluLjlv4XpobvlnKjkuIDkuKrlr7nosaHkuIrmiafooYzjgILov5nlsLHmmK/pgqPkuKrlr7nosaHjgILlj6/ku6XkuLrnqbrjgIIgKi9cclxuXHRwdWJsaWMgdGFyZ2V0OiBWR2FtZU9iamVjdDtcclxuXHRcclxuXHJcblx0Ly8g5Yqo5L2c5omA5bGeXHJcblx0cHVibGljIGdvYXBBZ2VudDpHb2FwQWdlbnRcclxuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5wcmVjb25kaXRpb25zID0gbmV3IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4oKTtcclxuXHRcdHRoaXMuZWZmZWN0cyA9IG5ldyBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZG9SZXNldCgpIHtcclxuXHRcdHRoaXMuaW5SYW5nZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy50YXJnZXQgPSBudWxsO1xyXG5cdFx0dGhpcy5yZXNldCgpO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBSZXNldCBhbnkgdmFyaWFibGVzIHRoYXQgbmVlZCB0byBiZSByZXNldCBiZWZvcmUgcGxhbm5pbmcgaGFwcGVucyBhZ2Fpbi5cclxuXHQgKi9cclxuXHRhYnN0cmFjdCByZXNldCgpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBJcyB0aGUgYWN0aW9uIGRvbmU/XHJcblx0ICovXHJcblx0YWJzdHJhY3QgaXNEb25lKCk6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFByb2NlZHVyYWxseSBjaGVjayBpZiB0aGlzIGFjdGlvbiBjYW4gcnVuLiBOb3QgYWxsIGFjdGlvbnNcclxuXHQgKiB3aWxsIG5lZWQgdGhpcywgYnV0IHNvbWUgbWlnaHQuXHJcblx0ICovXHJcblx0YWJzdHJhY3QgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBHb2FwQWdlbnQpOiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdW4gdGhlIGFjdGlvbi5cclxuXHQgKiBSZXR1cm5zIFRydWUgaWYgdGhlIGFjdGlvbiBwZXJmb3JtZWQgc3VjY2Vzc2Z1bGx5IG9yIGZhbHNlXHJcblx0ICogaWYgc29tZXRoaW5nIGhhcHBlbmVkIGFuZCBpdCBjYW4gbm8gbG9uZ2VyIHBlcmZvcm0uIEluIHRoaXMgY2FzZVxyXG5cdCAqIHRoZSBhY3Rpb24gcXVldWUgc2hvdWxkIGNsZWFyIG91dCBhbmQgdGhlIGdvYWwgY2Fubm90IGJlIHJlYWNoZWQuXHJcblx0ICovXHJcblx0YWJzdHJhY3QgcGVyZm9ybShhZ2VudDogR29hcEFnZW50KTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogRG9lcyB0aGlzIGFjdGlvbiBuZWVkIHRvIGJlIHdpdGhpbiByYW5nZSBvZiBhIHRhcmdldCBnYW1lIG9iamVjdD9cclxuXHQgKiBJZiBub3QgdGhlbiB0aGUgbW92ZVRvIHN0YXRlIHdpbGwgbm90IG5lZWQgdG8gcnVuIGZvciB0aGlzIGFjdGlvbi5cclxuXHQgKi9cclxuXHRhYnN0cmFjdCByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbjtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFyZSB3ZSBpbiByYW5nZSBvZiB0aGUgdGFyZ2V0P1xyXG5cdCAqIFRoZSBNb3ZlVG8gc3RhdGUgd2lsbCBzZXQgdGhpcyBhbmQgaXQgZ2V0cyByZXNldCBlYWNoIHRpbWUgdGhpcyBhY3Rpb24gaXMgcGVyZm9ybWVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBpc0luUmFuZ2UoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5pblJhbmdlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldEluUmFuZ2UoaW5SYW5nZTogYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0dGhpcy5pblJhbmdlID0gaW5SYW5nZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRQcmVjb25kaXRpb24oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuXHRcdHRoaXMucHJlY29uZGl0aW9ucy5zZXQoa2V5LCB2YWx1ZSlcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW1vdmVQcmVjb25kaXRpb24oa2V5OiBzdHJpbmcpIHtcclxuXHRcdHRoaXMucHJlY29uZGl0aW9ucy5kZWxldGUoa2V5KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRFZmZlY3Qoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuXHRcdHRoaXMuZWZmZWN0cy5zZXQoa2V5LCB2YWx1ZSk7XHJcblx0fVxyXG5cdHB1YmxpYyByZW1vdmVFZmZlY3Qoa2V5OiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuZWZmZWN0cy5kZWxldGUoa2V5KTtcclxuXHR9XHJcblx0cHVibGljIGdldCBQcmVjb25kaXRpb25zKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucHJlY29uZGl0aW9ucztcclxuXHR9XHJcblx0cHVibGljIGdldCBFZmZlY3RzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWZmZWN0cztcclxuXHR9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VMiner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b9a3j9jclHTZlU+gduulXK', 'VMiner');
// src/app/gamedata/labourers/vlabourers/VMiner.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VMiner = void 0;
var VLabourer_1 = require("./VLabourer");
/*
 * @Description: 矿工
 * @Author: RannarYang
 * @Date: 2018-11-03 12:14:32
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-03 12:17:13
 */
var VMiner = /** @class */ (function (_super) {
    __extends(VMiner, _super);
    function VMiner() {
        return _super.call(this) || this;
    }
    return VMiner;
}(VLabourer_1.VLabourer));
exports.VMiner = VMiner;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXHZsYWJvdXJlcnNcXFZNaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQXdDO0FBRXhDOzs7Ozs7R0FNRztBQUNIO0lBQTRCLDBCQUFTO0lBRXBDO2VBQ0MsaUJBQU87SUFDUixDQUFDO0lBQ0YsYUFBQztBQUFELENBTEEsQUFLQyxDQUwyQixxQkFBUyxHQUtwQztBQUxZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWluZXIgfSBmcm9tIFwiLi4vTWluZXJcIjtcclxuaW1wb3J0IHsgVkxhYm91cmVyIH0gZnJvbSBcIi4vVkxhYm91cmVyXCI7XHJcblxyXG4vKlxyXG4gKiBARGVzY3JpcHRpb246IOefv+W3pVxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0xMS0wMyAxMjoxNDozMiBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wMyAxMjoxNzoxM1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZNaW5lciBleHRlbmRzIFZMYWJvdXJlciB7XHJcblx0cHJvdGVjdGVkIGxhYm91cmVyOiBNaW5lcjtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/goap/ActionStatus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '602a3OxObpPqoMH8KzIbVll', 'ActionStatus');
// src/app/ai/goap/ActionStatus.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionStatus = void 0;
var ActionStatus = /** @class */ (function () {
    function ActionStatus() {
    }
    ActionStatus.HasTool = "HasTool";
    ActionStatus.HasFirewood = "HasFirewood";
    ActionStatus.HasLogs = "HasLogs";
    ActionStatus.CollectFirewood = "CollectFirewood";
    ActionStatus.CollectLogs = "CollectLogs";
    ActionStatus.HasOre = "HasOre";
    ActionStatus.CollectOre = "CollectOre";
    ActionStatus.HasNewTools = "HasNewTools";
    ActionStatus.CollectTools = "CollectTools";
    return ActionStatus;
}());
exports.ActionStatus = ActionStatus;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxnb2FwXFxBY3Rpb25TdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQVVBLENBQUM7SUFUYyxvQkFBTyxHQUFHLFNBQVMsQ0FBQztJQUNwQix3QkFBVyxHQUFHLGFBQWEsQ0FBQTtJQUMzQixvQkFBTyxHQUFHLFNBQVMsQ0FBQTtJQUNuQiw0QkFBZSxHQUFHLGlCQUFpQixDQUFBO0lBQ25DLHdCQUFXLEdBQUcsYUFBYSxDQUFBO0lBQzNCLG1CQUFNLEdBQUcsUUFBUSxDQUFBO0lBQ2pCLHVCQUFVLEdBQUcsWUFBWSxDQUFBO0lBQ3pCLHdCQUFXLEdBQUcsYUFBYSxDQUFBO0lBQzNCLHlCQUFZLEdBQUcsY0FBYyxDQUFBO0lBQzVDLG1CQUFDO0NBVkQsQUFVQyxJQUFBO0FBVlksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQWN0aW9uU3RhdHVzIHtcclxuXHRwdWJsaWMgc3RhdGljIEhhc1Rvb2wgPSBcIkhhc1Rvb2xcIjtcclxuXHRwdWJsaWMgc3RhdGljIEhhc0ZpcmV3b29kID0gXCJIYXNGaXJld29vZFwiXHJcblx0cHVibGljIHN0YXRpYyBIYXNMb2dzID0gXCJIYXNMb2dzXCJcclxuXHRwdWJsaWMgc3RhdGljIENvbGxlY3RGaXJld29vZCA9IFwiQ29sbGVjdEZpcmV3b29kXCJcclxuXHRwdWJsaWMgc3RhdGljIENvbGxlY3RMb2dzID0gXCJDb2xsZWN0TG9nc1wiXHJcblx0cHVibGljIHN0YXRpYyBIYXNPcmUgPSBcIkhhc09yZVwiXHJcblx0cHVibGljIHN0YXRpYyBDb2xsZWN0T3JlID0gXCJDb2xsZWN0T3JlXCJcclxuXHRwdWJsaWMgc3RhdGljIEhhc05ld1Rvb2xzID0gXCJIYXNOZXdUb29sc1wiXHJcblx0cHVibGljIHN0YXRpYyBDb2xsZWN0VG9vbHMgPSBcIkNvbGxlY3RUb29sc1wiXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/goap/GoapPlanner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e207LkB2BGBbOyFkEIyz4d', 'GoapPlanner');
// src/app/ai/goap/GoapPlanner.ts

"use strict";
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:35
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 18:04:36
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanNode = exports.GoapPlanner = void 0;
/**
 * Plans what actions can be completed in order to fulfill a goal state.
 */
var GoapPlanner = /** @class */ (function () {
    function GoapPlanner() {
    }
    /**
     * Plan what sequence of actions can fulfill the goal.
     * Returns null if a plan could not be found, or a list of the actions
     * that must be performed, in order, to fulfill the goal.
     */
    GoapPlanner.prototype.plan = function (agent, availableActions, worldState, goal) {
        // reset the actions so we can start fresh with them
        for (var _i = 0, availableActions_1 = availableActions; _i < availableActions_1.length; _i++) {
            var a = availableActions_1[_i];
            a.doReset();
        }
        // check what actions can run using their checkProceduralPrecondition
        var usableActions = [];
        for (var _a = 0, availableActions_2 = availableActions; _a < availableActions_2.length; _a++) {
            var a = availableActions_2[_a];
            if (a.checkProceduralPrecondition(agent)) {
                usableActions.push(a);
            }
        }
        // we now have all actions that can run, stored in usableActions
        // build up the tree and record the leaf nodes that provide a solution to the goal.
        var leaves = [];
        // build graph
        var start = new PlanNode(null, 0, worldState, null);
        var success = this.buildGraph(start, leaves, usableActions, goal);
        if (!success) {
            // oh no, we didn't get a plan
            //console.log("NO PLan");
            return null;
        }
        // get the cheapest leaf
        var cheapest = null;
        for (var _b = 0, leaves_1 = leaves; _b < leaves_1.length; _b++) {
            var leaf = leaves_1[_b];
            if (cheapest == null) {
                cheapest = leaf;
            }
            else {
                if (leaf.runningCost < cheapest.runningCost) {
                    cheapest = leaf;
                }
            }
        }
        // get its node and work back through the parents
        var result = [];
        var n = cheapest;
        while (n != null) {
            if (n.action != null) {
                result.push(n.action);
            }
            n = n.parent;
        }
        result.reverse();
        // hooray we have a plan!
        return result;
    };
    /**
     * Create a subset of the actions excluding the removeMe one. Creates a new set.
     */
    GoapPlanner.prototype.actionSubset = function (actions, removeMe) {
        var subset = [];
        for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
            var a = actions_1[_i];
            if (a != removeMe) {
                subset.push(a);
            }
        }
        return subset;
    };
    /**
     * Returns true if at least one solution was found.
     * The possible paths are stored in the leaves list. Each leaf has a
     * 'runningCost' value where the lowest cost will be the best action
     * sequence.
     */
    GoapPlanner.prototype.buildGraph = function (parent, leaves, usableActions, goal) {
        var foundOne = false;
        // go through each action available at this node and see if we can use it here
        for (var _i = 0, usableActions_1 = usableActions; _i < usableActions_1.length; _i++) {
            var action = usableActions_1[_i];
            // if the parent state has the conditions for this action's preconditions, we can use it here
            if (this.inState(action.Preconditions, parent.state)) {
                // apply the action's effects to the parent state
                var currentState = this.populateState(parent.state, action.Effects);
                var node = new PlanNode(parent, parent.runningCost + action.cost, currentState, action);
                if (this.inState(goal, currentState)) {
                    // we found a solution!
                    leaves.push(node);
                    foundOne = true;
                }
                else {
                    // not at a solution yet, so test all the remaining actions and branch out the tree
                    var subset = this.actionSubset(usableActions, action);
                    var found = this.buildGraph(node, leaves, subset, goal);
                    if (found) {
                        foundOne = true;
                    }
                }
            }
        }
        return foundOne;
    };
    /**
     * Check that all items in 'test' are in 'state'. If just one does not match or is not there
     * then this returns false.
     */
    GoapPlanner.prototype.inState = function (test, state) {
        var testKeyArr = Array.from(test.keys());
        for (var _i = 0, testKeyArr_1 = testKeyArr; _i < testKeyArr_1.length; _i++) {
            var key = testKeyArr_1[_i];
            if (test.get(key) != state.get(key)) {
                return false;
            }
        }
        return true;
    };
    /**
     * Apply the stateChange to the currentState
     */
    GoapPlanner.prototype.populateState = function (currentState, stateChange) {
        var state = new Map();
        // copy the KVPs over as new objects
        currentState.forEach(function (value, key) {
            state.set(key, value);
        });
        stateChange.forEach(function (value, key) {
            state.set(key, value);
        });
        return state;
    };
    return GoapPlanner;
}());
exports.GoapPlanner = GoapPlanner;
var PlanNode = /** @class */ (function () {
    function PlanNode(parent, runningCost, state, action) {
        this.parent = parent;
        this.runningCost = runningCost;
        this.state = state;
        this.action = action;
    }
    return PlanNode;
}());
exports.PlanNode = PlanNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxnb2FwXFxHb2FwUGxhbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztHQU1HOzs7QUFNSDs7R0FFRztBQUNIO0lBQUE7SUE2SUEsQ0FBQztJQTVJQTs7OztPQUlHO0lBQ0ksMEJBQUksR0FBWCxVQUFZLEtBQWdCLEVBQUUsZ0JBQThCLEVBQUUsVUFBcUMsRUFBRSxJQUErQjtRQUNuSSxvREFBb0Q7UUFDcEQsS0FBYyxVQUFnQixFQUFoQixxQ0FBZ0IsRUFBaEIsOEJBQWdCLEVBQWhCLElBQWdCLEVBQUU7WUFBM0IsSUFBSSxDQUFDLHlCQUFBO1lBQ1QsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ1o7UUFFRCxxRUFBcUU7UUFDckUsSUFBSSxhQUFhLEdBQWlCLEVBQUUsQ0FBQztRQUNyQyxLQUFjLFVBQWdCLEVBQWhCLHFDQUFnQixFQUFoQiw4QkFBZ0IsRUFBaEIsSUFBZ0IsRUFBRTtZQUEzQixJQUFJLENBQUMseUJBQUE7WUFDVCxJQUFJLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDekMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QjtTQUNEO1FBRUQsZ0VBQWdFO1FBRWhFLG1GQUFtRjtRQUNuRixJQUFJLE1BQU0sR0FBZSxFQUFFLENBQUM7UUFFNUIsY0FBYztRQUNkLElBQUksS0FBSyxHQUFhLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFM0UsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLDhCQUE4QjtZQUM5Qix5QkFBeUI7WUFDekIsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUVELHdCQUF3QjtRQUN4QixJQUFJLFFBQVEsR0FBYSxJQUFJLENBQUM7UUFDOUIsS0FBaUIsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUU7WUFBcEIsSUFBSSxJQUFJLGVBQUE7WUFDWixJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDaEI7aUJBQU07Z0JBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUU7b0JBQzVDLFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQ2hCO2FBQ0Q7U0FDRDtRQUVELGlEQUFpRDtRQUNqRCxJQUFJLE1BQU0sR0FBaUIsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFhLFFBQVEsQ0FBQztRQUMzQixPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDakIsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdEI7WUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUNiO1FBQ0QsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWpCLHlCQUF5QjtRQUN6QixPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFDRDs7T0FFRztJQUNLLGtDQUFZLEdBQXBCLFVBQXFCLE9BQXFCLEVBQUUsUUFBb0I7UUFDL0QsSUFBSSxNQUFNLEdBQWlCLEVBQUUsQ0FBQztRQUM5QixLQUFjLFVBQU8sRUFBUCxtQkFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTyxFQUFFO1lBQWxCLElBQUksQ0FBQyxnQkFBQTtZQUNULElBQUksQ0FBQyxJQUFJLFFBQVEsRUFBRTtnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNmO1NBQ0Q7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLGdDQUFVLEdBQWxCLFVBQW1CLE1BQWdCLEVBQUUsTUFBa0IsRUFBRSxhQUEyQixFQUFFLElBQStCO1FBQ3BILElBQUksUUFBUSxHQUFZLEtBQUssQ0FBQztRQUU5Qiw4RUFBOEU7UUFDOUUsS0FBbUIsVUFBYSxFQUFiLCtCQUFhLEVBQWIsMkJBQWEsRUFBYixJQUFhLEVBQUU7WUFBN0IsSUFBSSxNQUFNLHNCQUFBO1lBQ2QsNkZBQTZGO1lBQzdGLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDckQsaURBQWlEO2dCQUNqRCxJQUFJLFlBQVksR0FBOEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0YsSUFBSSxJQUFJLEdBQWEsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBRWxHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLEVBQUU7b0JBQ3JDLHVCQUF1QjtvQkFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDaEI7cUJBQU07b0JBQ04sbUZBQW1GO29CQUVuRixJQUFJLE1BQU0sR0FBaUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBRXBFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3hELElBQUksS0FBSyxFQUFFO3dCQUNWLFFBQVEsR0FBRyxJQUFJLENBQUM7cUJBQ2hCO2lCQUNEO2FBQ0Q7U0FDRDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7O09BR0c7SUFDSyw2QkFBTyxHQUFmLFVBQWdCLElBQStCLEVBQUUsS0FBZ0M7UUFDaEYsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN6QyxLQUFnQixVQUFVLEVBQVYseUJBQVUsRUFBVix3QkFBVSxFQUFWLElBQVUsRUFBRTtZQUF2QixJQUFJLEdBQUcsbUJBQUE7WUFDWCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDcEMsT0FBTyxLQUFLLENBQUM7YUFDYjtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQ7O09BRUc7SUFDSyxtQ0FBYSxHQUFyQixVQUFzQixZQUF1QyxFQUFFLFdBQXNDO1FBQ3BHLElBQUksS0FBSyxHQUE4QixJQUFJLEdBQUcsRUFBd0IsQ0FBQztRQUN2RSxvQ0FBb0M7UUFDcEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQWEsRUFBRSxHQUFpQjtZQUNyRCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtRQUVGLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFhLEVBQUUsR0FBaUI7WUFDcEQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFDRixrQkFBQztBQUFELENBN0lBLEFBNklDLElBQUE7QUE3SVksa0NBQVc7QUErSXhCO0lBTUMsa0JBQVksTUFBZ0IsRUFBRSxXQUFtQixFQUFFLEtBQWdDLEVBQUUsTUFBa0I7UUFDdEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MDk6MzUgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDQgMTg6MDQ6MzZcclxuICovXHJcblxyXG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25TdGF0dXNcIjtcclxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4vR29hcEFnZW50XCI7XHJcblxyXG4vKipcclxuICogUGxhbnMgd2hhdCBhY3Rpb25zIGNhbiBiZSBjb21wbGV0ZWQgaW4gb3JkZXIgdG8gZnVsZmlsbCBhIGdvYWwgc3RhdGUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR29hcFBsYW5uZXIge1xyXG5cdC8qKlxyXG5cdCAqIFBsYW4gd2hhdCBzZXF1ZW5jZSBvZiBhY3Rpb25zIGNhbiBmdWxmaWxsIHRoZSBnb2FsLlxyXG5cdCAqIFJldHVybnMgbnVsbCBpZiBhIHBsYW4gY291bGQgbm90IGJlIGZvdW5kLCBvciBhIGxpc3Qgb2YgdGhlIGFjdGlvbnNcclxuXHQgKiB0aGF0IG11c3QgYmUgcGVyZm9ybWVkLCBpbiBvcmRlciwgdG8gZnVsZmlsbCB0aGUgZ29hbC5cclxuXHQgKi9cclxuXHRwdWJsaWMgcGxhbihhZ2VudDogR29hcEFnZW50LCBhdmFpbGFibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10sIHdvcmxkU3RhdGU6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4sIGdvYWw6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4pOiBHb2FwQWN0aW9uW10ge1xyXG5cdFx0Ly8gcmVzZXQgdGhlIGFjdGlvbnMgc28gd2UgY2FuIHN0YXJ0IGZyZXNoIHdpdGggdGhlbVxyXG5cdFx0Zm9yIChsZXQgYSBvZiBhdmFpbGFibGVBY3Rpb25zKSB7XHJcblx0XHRcdGEuZG9SZXNldCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNoZWNrIHdoYXQgYWN0aW9ucyBjYW4gcnVuIHVzaW5nIHRoZWlyIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvblxyXG5cdFx0bGV0IHVzYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgYSBvZiBhdmFpbGFibGVBY3Rpb25zKSB7XHJcblx0XHRcdGlmIChhLmNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudCkpIHtcclxuXHRcdFx0XHR1c2FibGVBY3Rpb25zLnB1c2goYSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyB3ZSBub3cgaGF2ZSBhbGwgYWN0aW9ucyB0aGF0IGNhbiBydW4sIHN0b3JlZCBpbiB1c2FibGVBY3Rpb25zXHJcblxyXG5cdFx0Ly8gYnVpbGQgdXAgdGhlIHRyZWUgYW5kIHJlY29yZCB0aGUgbGVhZiBub2RlcyB0aGF0IHByb3ZpZGUgYSBzb2x1dGlvbiB0byB0aGUgZ29hbC5cclxuXHRcdGxldCBsZWF2ZXM6IFBsYW5Ob2RlW10gPSBbXTtcclxuXHJcblx0XHQvLyBidWlsZCBncmFwaFxyXG5cdFx0bGV0IHN0YXJ0OiBQbGFuTm9kZSA9IG5ldyBQbGFuTm9kZShudWxsLCAwLCB3b3JsZFN0YXRlLCBudWxsKTtcclxuXHRcdGxldCBzdWNjZXNzOiBib29sZWFuID0gdGhpcy5idWlsZEdyYXBoKHN0YXJ0LCBsZWF2ZXMsIHVzYWJsZUFjdGlvbnMsIGdvYWwpO1xyXG5cclxuXHRcdGlmICghc3VjY2Vzcykge1xyXG5cdFx0XHQvLyBvaCBubywgd2UgZGlkbid0IGdldCBhIHBsYW5cclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcIk5PIFBMYW5cIik7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGdldCB0aGUgY2hlYXBlc3QgbGVhZlxyXG5cdFx0bGV0IGNoZWFwZXN0OiBQbGFuTm9kZSA9IG51bGw7XHJcblx0XHRmb3IgKGxldCBsZWFmIG9mIGxlYXZlcykge1xyXG5cdFx0XHRpZiAoY2hlYXBlc3QgPT0gbnVsbCkge1xyXG5cdFx0XHRcdGNoZWFwZXN0ID0gbGVhZjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAobGVhZi5ydW5uaW5nQ29zdCA8IGNoZWFwZXN0LnJ1bm5pbmdDb3N0KSB7XHJcblx0XHRcdFx0XHRjaGVhcGVzdCA9IGxlYWY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZ2V0IGl0cyBub2RlIGFuZCB3b3JrIGJhY2sgdGhyb3VnaCB0aGUgcGFyZW50c1xyXG5cdFx0bGV0IHJlc3VsdDogR29hcEFjdGlvbltdID0gW107XHJcblx0XHRsZXQgbjogUGxhbk5vZGUgPSBjaGVhcGVzdDtcclxuXHRcdHdoaWxlIChuICE9IG51bGwpIHtcclxuXHRcdFx0aWYgKG4uYWN0aW9uICE9IG51bGwpIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChuLmFjdGlvbik7XHJcblx0XHRcdH1cclxuXHRcdFx0biA9IG4ucGFyZW50O1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0LnJldmVyc2UoKTtcclxuXHJcblx0XHQvLyBob29yYXkgd2UgaGF2ZSBhIHBsYW4hXHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSBzdWJzZXQgb2YgdGhlIGFjdGlvbnMgZXhjbHVkaW5nIHRoZSByZW1vdmVNZSBvbmUuIENyZWF0ZXMgYSBuZXcgc2V0LlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYWN0aW9uU3Vic2V0KGFjdGlvbnM6IEdvYXBBY3Rpb25bXSwgcmVtb3ZlTWU6IEdvYXBBY3Rpb24pOiBHb2FwQWN0aW9uW10ge1xyXG5cdFx0bGV0IHN1YnNldDogR29hcEFjdGlvbltdID0gW107XHJcblx0XHRmb3IgKGxldCBhIG9mIGFjdGlvbnMpIHtcclxuXHRcdFx0aWYgKGEgIT0gcmVtb3ZlTWUpIHtcclxuXHRcdFx0XHRzdWJzZXQucHVzaChhKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN1YnNldDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgc29sdXRpb24gd2FzIGZvdW5kLlxyXG5cdCAqIFRoZSBwb3NzaWJsZSBwYXRocyBhcmUgc3RvcmVkIGluIHRoZSBsZWF2ZXMgbGlzdC4gRWFjaCBsZWFmIGhhcyBhXHJcblx0ICogJ3J1bm5pbmdDb3N0JyB2YWx1ZSB3aGVyZSB0aGUgbG93ZXN0IGNvc3Qgd2lsbCBiZSB0aGUgYmVzdCBhY3Rpb25cclxuXHQgKiBzZXF1ZW5jZS5cclxuXHQgKi9cclxuXHRwcml2YXRlIGJ1aWxkR3JhcGgocGFyZW50OiBQbGFuTm9kZSwgbGVhdmVzOiBQbGFuTm9kZVtdLCB1c2FibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10sIGdvYWw6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4pOiBib29sZWFuIHtcclxuXHRcdGxldCBmb3VuZE9uZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRcdC8vIGdvIHRocm91Z2ggZWFjaCBhY3Rpb24gYXZhaWxhYmxlIGF0IHRoaXMgbm9kZSBhbmQgc2VlIGlmIHdlIGNhbiB1c2UgaXQgaGVyZVxyXG5cdFx0Zm9yIChsZXQgYWN0aW9uIG9mIHVzYWJsZUFjdGlvbnMpIHtcclxuXHRcdFx0Ly8gaWYgdGhlIHBhcmVudCBzdGF0ZSBoYXMgdGhlIGNvbmRpdGlvbnMgZm9yIHRoaXMgYWN0aW9uJ3MgcHJlY29uZGl0aW9ucywgd2UgY2FuIHVzZSBpdCBoZXJlXHJcblx0XHRcdGlmICh0aGlzLmluU3RhdGUoYWN0aW9uLlByZWNvbmRpdGlvbnMsIHBhcmVudC5zdGF0ZSkpIHtcclxuXHRcdFx0XHQvLyBhcHBseSB0aGUgYWN0aW9uJ3MgZWZmZWN0cyB0byB0aGUgcGFyZW50IHN0YXRlXHJcblx0XHRcdFx0bGV0IGN1cnJlbnRTdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PiA9IHRoaXMucG9wdWxhdGVTdGF0ZShwYXJlbnQuc3RhdGUsIGFjdGlvbi5FZmZlY3RzKTtcclxuXHRcdFx0XHRsZXQgbm9kZTogUGxhbk5vZGUgPSBuZXcgUGxhbk5vZGUocGFyZW50LCBwYXJlbnQucnVubmluZ0Nvc3QgKyBhY3Rpb24uY29zdCwgY3VycmVudFN0YXRlLCBhY3Rpb24pO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5pblN0YXRlKGdvYWwsIGN1cnJlbnRTdGF0ZSkpIHtcclxuXHRcdFx0XHRcdC8vIHdlIGZvdW5kIGEgc29sdXRpb24hXHJcblx0XHRcdFx0XHRsZWF2ZXMucHVzaChub2RlKTtcclxuXHRcdFx0XHRcdGZvdW5kT25lID0gdHJ1ZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gbm90IGF0IGEgc29sdXRpb24geWV0LCBzbyB0ZXN0IGFsbCB0aGUgcmVtYWluaW5nIGFjdGlvbnMgYW5kIGJyYW5jaCBvdXQgdGhlIHRyZWVcclxuXHJcblx0XHRcdFx0XHRsZXQgc3Vic2V0OiBHb2FwQWN0aW9uW10gPSB0aGlzLmFjdGlvblN1YnNldCh1c2FibGVBY3Rpb25zLCBhY3Rpb24pO1xyXG5cclxuXHRcdFx0XHRcdGxldCBmb3VuZCA9IHRoaXMuYnVpbGRHcmFwaChub2RlLCBsZWF2ZXMsIHN1YnNldCwgZ29hbCk7XHJcblx0XHRcdFx0XHRpZiAoZm91bmQpIHtcclxuXHRcdFx0XHRcdFx0Zm91bmRPbmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmb3VuZE9uZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrIHRoYXQgYWxsIGl0ZW1zIGluICd0ZXN0JyBhcmUgaW4gJ3N0YXRlJy4gSWYganVzdCBvbmUgZG9lcyBub3QgbWF0Y2ggb3IgaXMgbm90IHRoZXJlXHJcblx0ICogdGhlbiB0aGlzIHJldHVybnMgZmFsc2UuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBpblN0YXRlKHRlc3Q6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4sIHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KTogYm9vbGVhbiB7XHJcblx0XHRsZXQgdGVzdEtleUFyciA9IEFycmF5LmZyb20odGVzdC5rZXlzKCkpO1xyXG5cdFx0Zm9yIChsZXQga2V5IG9mIHRlc3RLZXlBcnIpIHtcclxuXHRcdFx0aWYgKHRlc3QuZ2V0KGtleSkgIT0gc3RhdGUuZ2V0KGtleSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQXBwbHkgdGhlIHN0YXRlQ2hhbmdlIHRvIHRoZSBjdXJyZW50U3RhdGVcclxuXHQgKi9cclxuXHRwcml2YXRlIHBvcHVsYXRlU3RhdGUoY3VycmVudFN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+LCBzdGF0ZUNoYW5nZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0Pik6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4ge1xyXG5cdFx0bGV0IHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+ID0gbmV3IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4oKTtcclxuXHRcdC8vIGNvcHkgdGhlIEtWUHMgb3ZlciBhcyBuZXcgb2JqZWN0c1xyXG5cdFx0Y3VycmVudFN0YXRlLmZvckVhY2goKHZhbHVlOiBPYmplY3QsIGtleTogQWN0aW9uU3RhdHVzKSA9PiB7XHJcblx0XHRcdHN0YXRlLnNldChrZXksIHZhbHVlKTtcclxuXHRcdH0pXHJcblxyXG5cdFx0c3RhdGVDaGFuZ2UuZm9yRWFjaCgodmFsdWU6IE9iamVjdCwga2V5OiBBY3Rpb25TdGF0dXMpID0+IHtcclxuXHRcdFx0c3RhdGUuc2V0KGtleSwgdmFsdWUpO1xyXG5cdFx0fSlcclxuXHJcblx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhbk5vZGUge1xyXG5cdHB1YmxpYyBwYXJlbnQ6IFBsYW5Ob2RlO1xyXG5cdHB1YmxpYyBydW5uaW5nQ29zdDogbnVtYmVyO1xyXG5cdHB1YmxpYyBzdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PjtcclxuXHRwdWJsaWMgYWN0aW9uOiBHb2FwQWN0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBsYW5Ob2RlLCBydW5uaW5nQ29zdDogbnVtYmVyLCBzdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PiwgYWN0aW9uOiBHb2FwQWN0aW9uKSB7XHJcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHRcdHRoaXMucnVubmluZ0Nvc3QgPSBydW5uaW5nQ29zdDtcclxuXHRcdHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuXHRcdHRoaXMuYWN0aW9uID0gYWN0aW9uO1xyXG5cdH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/fsm/state/StateIdle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2490dGEfv5LaIbOqd+6fOPP', 'StateIdle');
// src/app/ai/fsm/state/StateIdle.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateIdle = void 0;
var StateBase_1 = require("./StateBase");
var StateEnum_1 = require("./StateEnum");
var StateIdle = /** @class */ (function (_super) {
    __extends(StateIdle, _super);
    function StateIdle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StateIdle.prototype.onEnter = function () {
    };
    /**
     * 状态更新
     * @return
     */
    StateIdle.prototype.onUpdate = function (timeStamp) {
        var owner = this.owner;
        var goap = owner.getGoap();
        var planner = owner.getPlanner();
        var avaliableActions = owner.getAvaliableActions();
        // GOAP planning
        // get the world state and the goal we want to plan for
        var worldState = goap.getWorldState();
        var goal = goap.createGoalState();
        // plan
        var plan = planner.plan(owner, avaliableActions, worldState, goal);
        if (plan != null) {
            // we have a plan, hooray!
            owner.setCurrentActions(plan);
            goap.planFound(goal, plan);
            // move to PerformAction state
            owner.changeState(StateEnum_1.StateEnum.StatePerformAction);
        }
        else {
            //console.log("Failed Plan");
            goap.planFailed(goal);
            owner.changeState(StateEnum_1.StateEnum.StateIdle);
        }
    };
    return StateIdle;
}(StateBase_1.StateBase));
exports.StateIdle = StateIdle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxmc21cXHN0YXRlXFxTdGF0ZUlkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLHlDQUF3QztBQUN4Qyx5Q0FBd0M7QUFFeEM7SUFBK0IsNkJBQVM7SUFBeEM7O0lBa0NBLENBQUM7SUFqQ1UsMkJBQU8sR0FBZDtJQUNBLENBQUM7SUFFRDs7O09BR0c7SUFDSSw0QkFBUSxHQUFmLFVBQWdCLFNBQWlCO1FBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFrQixDQUFBO1FBQ25DLElBQUksSUFBSSxHQUFVLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQyxJQUFJLE9BQU8sR0FBZ0IsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlDLElBQUksZ0JBQWdCLEdBQWlCLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2pFLGdCQUFnQjtRQUVoQix1REFBdUQ7UUFDdkQsSUFBSSxVQUFVLEdBQXdCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzRCxJQUFJLElBQUksR0FBd0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZELE9BQU87UUFDUCxJQUFJLElBQUksR0FBaUIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pGLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNkLDBCQUEwQjtZQUMxQixLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFM0IsOEJBQThCO1lBQzlCLEtBQUssQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDSCw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUM7SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWxDQSxBQWtDQyxDQWxDOEIscUJBQVMsR0FrQ3ZDO0FBbENZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcEFnZW50XCI7XHJcbmltcG9ydCB7IEdvYXBQbGFubmVyIH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcFBsYW5uZXJcIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vZ29hcC9JR29hcFwiO1xyXG5pbXBvcnQgeyBTdGF0ZUJhc2UgfSBmcm9tIFwiLi9TdGF0ZUJhc2VcIjtcclxuaW1wb3J0IHsgU3RhdGVFbnVtIH0gZnJvbSBcIi4vU3RhdGVFbnVtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGVJZGxlIGV4dGVuZHMgU3RhdGVCYXNlIHtcclxuICAgIHB1YmxpYyBvbkVudGVyKCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog54q25oCB5pu05pawIFxyXG4gICAgICogQHJldHVybiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uVXBkYXRlKHRpbWVTdGFtcDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG93bmVyID0gdGhpcy5vd25lciBhcyBHb2FwQWdlbnRcclxuICAgICAgICBsZXQgZ29hcDogSUdvYXAgPSBvd25lci5nZXRHb2FwKCk7XHJcbiAgICAgICAgbGV0IHBsYW5uZXI6IEdvYXBQbGFubmVyID0gb3duZXIuZ2V0UGxhbm5lcigpO1xyXG4gICAgICAgIGxldCBhdmFsaWFibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10gPSBvd25lci5nZXRBdmFsaWFibGVBY3Rpb25zKCk7XHJcbiAgICAgICAgLy8gR09BUCBwbGFubmluZ1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIHdvcmxkIHN0YXRlIGFuZCB0aGUgZ29hbCB3ZSB3YW50IHRvIHBsYW4gZm9yXHJcbiAgICAgICAgbGV0IHdvcmxkU3RhdGU6IE1hcDxzdHJpbmcsIE9iamVjdD4gPSBnb2FwLmdldFdvcmxkU3RhdGUoKTtcclxuICAgICAgICBsZXQgZ29hbDogTWFwPHN0cmluZywgT2JqZWN0PiA9IGdvYXAuY3JlYXRlR29hbFN0YXRlKCk7XHJcblxyXG4gICAgICAgIC8vIHBsYW5cclxuICAgICAgICBsZXQgcGxhbjogR29hcEFjdGlvbltdID0gcGxhbm5lci5wbGFuKG93bmVyLCBhdmFsaWFibGVBY3Rpb25zLCB3b3JsZFN0YXRlLCBnb2FsKTtcclxuICAgICAgICBpZiAocGxhbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBwbGFuLCBob29yYXkhXHJcbiAgICAgICAgICAgIG93bmVyLnNldEN1cnJlbnRBY3Rpb25zKHBsYW4pO1xyXG4gICAgICAgICAgICBnb2FwLnBsYW5Gb3VuZChnb2FsLCBwbGFuKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgdG8gUGVyZm9ybUFjdGlvbiBzdGF0ZVxyXG4gICAgICAgICAgICBvd25lci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVQZXJmb3JtQWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRmFpbGVkIFBsYW5cIik7XHJcbiAgICAgICAgICAgIGdvYXAucGxhbkZhaWxlZChnb2FsKTtcclxuICAgICAgICAgICAgb3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/fsm/state/StateEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5df00n6FwFEZ4MgeC5dAu/p', 'StateEnum');
// src/app/ai/fsm/state/StateEnum.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateEnum = void 0;
var StateEnum = /** @class */ (function () {
    function StateEnum() {
    }
    StateEnum.StateIdle = "StateIdle";
    StateEnum.StateMove = "StateMove";
    StateEnum.StatePerformAction = "StatePerformAction";
    return StateEnum;
}());
exports.StateEnum = StateEnum;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxmc21cXHN0YXRlXFxTdGF0ZUVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQUlBLENBQUM7SUFIYyxtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4QixtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4Qiw0QkFBa0IsR0FBRyxvQkFBb0IsQ0FBQztJQUN6RCxnQkFBQztDQUpELEFBSUMsSUFBQTtBQUpZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0YXRlRW51bSB7XHJcblx0cHVibGljIHN0YXRpYyBTdGF0ZUlkbGUgPSBcIlN0YXRlSWRsZVwiO1xyXG5cdHB1YmxpYyBzdGF0aWMgU3RhdGVNb3ZlID0gXCJTdGF0ZU1vdmVcIjtcclxuXHRwdWJsaWMgc3RhdGljIFN0YXRlUGVyZm9ybUFjdGlvbiA9IFwiU3RhdGVQZXJmb3JtQWN0aW9uXCI7XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/fsm/state/StateMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9552e8otr1AnqPty2ylLv5S', 'StateMove');
// src/app/ai/fsm/state/StateMove.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateMove = void 0;
var StateBase_1 = require("./StateBase");
var StateEnum_1 = require("./StateEnum");
var StateMove = /** @class */ (function (_super) {
    __extends(StateMove, _super);
    function StateMove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StateMove.prototype.onEnter = function () {
    };
    /**
     * 状态更新
     * @return
     */
    StateMove.prototype.onUpdate = function (delta) {
        var owner = this.owner;
        var goap = owner.getGoap();
        var action = this.owner.peekCurrentActions();
        if (action.requiresInRange() && action.target == null) {
            console.log("Fatal error: Action requires a target but has none. Planning failed. You did not assign the target in your Action.checkProceduralPrecondition()");
            this.owner.changeState(StateEnum_1.StateEnum.StateIdle);
            return;
        }
        // get the agent to move itself
        if (goap.moveAgent(action, delta)) {
            this.owner.changeState(StateEnum_1.StateEnum.StatePerformAction);
        }
    };
    return StateMove;
}(StateBase_1.StateBase));
exports.StateMove = StateMove;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxmc21cXHN0YXRlXFxTdGF0ZU1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHlDQUF3QztBQUN4Qyx5Q0FBd0M7QUFFeEM7SUFBK0IsNkJBQVM7SUFBeEM7O0lBc0JBLENBQUM7SUFyQlUsMkJBQU8sR0FBZDtJQUNBLENBQUM7SUFDRDs7O09BR0c7SUFDSSw0QkFBUSxHQUFmLFVBQWdCLEtBQWE7UUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQWtCLENBQUE7UUFDbkMsSUFBSSxJQUFJLEdBQVUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN6RCxJQUFJLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlKQUFpSixDQUFDLENBQUM7WUFDL0osSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QyxPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDeEQ7SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxDQXRCOEIscUJBQVMsR0FzQnZDO0FBdEJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcEFnZW50XCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL2dvYXAvSUdvYXBcIjtcclxuaW1wb3J0IHsgU3RhdGVCYXNlIH0gZnJvbSBcIi4vU3RhdGVCYXNlXCI7XHJcbmltcG9ydCB7IFN0YXRlRW51bSB9IGZyb20gXCIuL1N0YXRlRW51bVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRlTW92ZSBleHRlbmRzIFN0YXRlQmFzZSB7XHJcbiAgICBwdWJsaWMgb25FbnRlcigpIHtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog54q25oCB5pu05pawIFxyXG4gICAgICogQHJldHVybiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uVXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgb3duZXIgPSB0aGlzLm93bmVyIGFzIEdvYXBBZ2VudFxyXG4gICAgICAgIGxldCBnb2FwOiBJR29hcCA9IG93bmVyLmdldEdvYXAoKTtcclxuICAgICAgICBsZXQgYWN0aW9uOiBHb2FwQWN0aW9uID0gdGhpcy5vd25lci5wZWVrQ3VycmVudEFjdGlvbnMoKTtcclxuICAgICAgICBpZiAoYWN0aW9uLnJlcXVpcmVzSW5SYW5nZSgpICYmIGFjdGlvbi50YXJnZXQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhdGFsIGVycm9yOiBBY3Rpb24gcmVxdWlyZXMgYSB0YXJnZXQgYnV0IGhhcyBub25lLiBQbGFubmluZyBmYWlsZWQuIFlvdSBkaWQgbm90IGFzc2lnbiB0aGUgdGFyZ2V0IGluIHlvdXIgQWN0aW9uLmNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbigpXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyLmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIGFnZW50IHRvIG1vdmUgaXRzZWxmXHJcbiAgICAgICAgaWYgKGdvYXAubW92ZUFnZW50KGFjdGlvbiwgZGVsdGEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlUGVyZm9ybUFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/fsm/state/StateBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a7215gBjVCG7JMSK5HcnBT', 'StateBase');
// src/app/ai/fsm/state/StateBase.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateBase = void 0;
var StateManager_1 = require("../StateManager");
/*
 * @Description: 状态基类
 * @Author: Rannar.Yang
 * @Date: 2018-06-29 10:17:10
 * @Last Modified by: Rannar.Yang
 * @Last Modified time: 2018-06-29 10:17:32
 */
var StateBase = /** @class */ (function () {
    function StateBase(owner) {
        this._owner = owner;
    }
    Object.defineProperty(StateBase.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 进入状态
     */
    StateBase.prototype.onEnter = function (obj) {
        if (obj === void 0) { obj = null; }
    };
    /**
     * 再次进入状态
     * @param obj
     * @return
     */
    StateBase.prototype.onReEnter = function (obj) {
        if (obj === void 0) { obj = null; }
    };
    /**
     * 状态更新
     * @return
     */
    StateBase.prototype.onUpdate = function (timeStamp) { };
    /**
     * 离开状态结束
     * @param string
     * @return
     *
     */
    StateBase.prototype.onExit = function (preKey) {
        if (preKey === void 0) { preKey = undefined; }
    };
    /**
     * 返回状态ID
     * @return
     *
     */
    StateBase.prototype.getStateKey = function () {
        return StateManager_1.StateManager.InvalidState;
    };
    return StateBase;
}());
exports.StateBase = StateBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxmc21cXHN0YXRlXFxTdGF0ZUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQStDO0FBRS9DOzs7Ozs7R0FNRztBQUNIO0lBT0MsbUJBQVksS0FBVTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBTEQsc0JBQVcsNEJBQUs7YUFBaEI7WUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFJRDs7T0FFRztJQUNJLDJCQUFPLEdBQWQsVUFBZSxHQUFlO1FBQWYsb0JBQUEsRUFBQSxVQUFlO0lBQVUsQ0FBQztJQUV6Qzs7OztPQUlHO0lBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsR0FBZTtRQUFmLG9CQUFBLEVBQUEsVUFBZTtJQUFVLENBQUM7SUFFM0M7OztPQUdHO0lBQ0ksNEJBQVEsR0FBZixVQUFnQixTQUFpQixJQUFVLENBQUM7SUFFNUM7Ozs7O09BS0c7SUFDSSwwQkFBTSxHQUFiLFVBQWMsTUFBMEI7UUFBMUIsdUJBQUEsRUFBQSxrQkFBMEI7SUFBVSxDQUFDO0lBQ25EOzs7O09BSUc7SUFDSSwrQkFBVyxHQUFsQjtRQUNDLE9BQU8sMkJBQVksQ0FBQyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUVGLGdCQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtBQTVDWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlTWFuYWdlciB9IGZyb20gXCIuLi9TdGF0ZU1hbmFnZXJcIjtcclxuXHJcbi8qXHJcbiAqIEBEZXNjcmlwdGlvbjog54q25oCB5Z+657G7IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXIuWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDYtMjkgMTA6MTc6MTAgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXIuWWFuZ1xyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTA2LTI5IDEwOjE3OjMyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RhdGVCYXNlIHtcclxuXHJcblx0cHJvdGVjdGVkIF9vd25lcjogYW55O1xyXG5cclxuXHRwdWJsaWMgZ2V0IG93bmVyKCk6IGFueSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fb3duZXI7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKG93bmVyOiBhbnkpIHtcclxuXHRcdHRoaXMuX293bmVyID0gb3duZXI7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIOi/m+WFpeeKtuaAgSBcclxuXHQgKi9cclxuXHRwdWJsaWMgb25FbnRlcihvYmo6IGFueSA9IG51bGwpOiB2b2lkIHsgfVxyXG5cclxuXHQvKipcclxuXHQgKiDlho3mrKHov5vlhaXnirbmgIEgXHJcblx0ICogQHBhcmFtIG9ialxyXG5cdCAqIEByZXR1cm4gXHJcblx0ICovXHJcblx0cHVibGljIG9uUmVFbnRlcihvYmo6IGFueSA9IG51bGwpOiB2b2lkIHsgfVxyXG5cclxuXHQvKipcclxuXHQgKiDnirbmgIHmm7TmlrAgXHJcblx0ICogQHJldHVybiBcclxuXHQgKi9cclxuXHRwdWJsaWMgb25VcGRhdGUodGltZVN0YW1wOiBudW1iZXIpOiB2b2lkIHsgfVxyXG5cclxuXHQvKipcclxuXHQgKiDnprvlvIDnirbmgIHnu5PmnZ8gXHJcblx0ICogQHBhcmFtIHN0cmluZ1xyXG5cdCAqIEByZXR1cm4gXHJcblx0ICogXHJcblx0ICovXHJcblx0cHVibGljIG9uRXhpdChwcmVLZXk6IHN0cmluZyA9IHVuZGVmaW5lZCk6IHZvaWQgeyB9XHJcblx0LyoqXHJcblx0ICog6L+U5Zue54q25oCBSUQgXHJcblx0ICogQHJldHVybiBcclxuXHQgKiBcclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0U3RhdGVLZXkoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBTdGF0ZU1hbmFnZXIuSW52YWxpZFN0YXRlO1xyXG5cdH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/fsm/state/StatePerformAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37f02DUc49Epq9j1p2iFU5k', 'StatePerformAction');
// src/app/ai/fsm/state/StatePerformAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatePerformAction = void 0;
var StateBase_1 = require("./StateBase");
var StateEnum_1 = require("./StateEnum");
var StatePerformAction = /** @class */ (function (_super) {
    __extends(StatePerformAction, _super);
    function StatePerformAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatePerformAction.prototype.onEnter = function () {
    };
    /**
     * 状态更新
     * @return
     */
    StatePerformAction.prototype.onUpdate = function (timeStamp) {
        var owner = this.owner;
        var goap = owner.getGoap();
        if (!owner.hasActionPlan()) {
            // no actions to perform
            console.log("Done actions");
            this.owner.changeState(StateEnum_1.StateEnum.StateIdle);
            goap.actionsFinished();
            return;
        }
        var action = this.owner.peekCurrentActions();
        if (action.isDone()) {
            // the action is done. Remove it so we can perform the next one
            this.owner.dequeueCurrentActions();
        }
        if (this.owner.hasActionPlan()) {
            // perform the next action
            action = this.owner.peekCurrentActions();
            var inRange = action.requiresInRange() ? action.isInRange() : true;
            if (inRange) {
                // we are in range, so perform the action
                var success = action.perform(this.owner);
                if (!success) {
                    // action failed, we need to plan again
                    this.owner.changeState(StateEnum_1.StateEnum.StateIdle);
                    goap.planAborted(action);
                }
            }
            else {
                // we need to move there first
                //TODO: push moveTo state
                this.owner.changeState(StateEnum_1.StateEnum.StateMove);
            }
        }
        else {
            // no actions left, move to Plan state
            this.owner.changeState(StateEnum_1.StateEnum.StateIdle);
            goap.actionsFinished();
        }
    };
    return StatePerformAction;
}(StateBase_1.StateBase));
exports.StatePerformAction = StatePerformAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxmc21cXHN0YXRlXFxTdGF0ZVBlcmZvcm1BY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHlDQUF3QztBQUN4Qyx5Q0FBd0M7QUFFeEM7SUFBd0Msc0NBQVM7SUFBakQ7O0lBaURBLENBQUM7SUFoRFUsb0NBQU8sR0FBZDtJQUNBLENBQUM7SUFDRDs7O09BR0c7SUFDSSxxQ0FBUSxHQUFmLFVBQWdCLFNBQWlCO1FBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFrQixDQUFBO1FBQ25DLElBQUksSUFBSSxHQUFVLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLHdCQUF3QjtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87U0FDVjtRQUNELElBQUksTUFBTSxHQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN6RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNqQiwrREFBK0Q7WUFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQ3RDO1FBR0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzVCLDBCQUEwQjtZQUMxQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ3pDLElBQUksT0FBTyxHQUFZLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFNUUsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QseUNBQXlDO2dCQUN6QyxJQUFJLE9BQU8sR0FBWSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFbEQsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDVix1Q0FBdUM7b0JBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzVCO2FBQ0o7aUJBQU07Z0JBQ0gsOEJBQThCO2dCQUM5Qix5QkFBeUI7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0M7U0FDSjthQUFNO1lBQ0gsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FqREEsQUFpREMsQ0FqRHVDLHFCQUFTLEdBaURoRDtBQWpEWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcEFjdGlvblwiO1xyXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwQWdlbnRcIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vZ29hcC9JR29hcFwiO1xyXG5pbXBvcnQgeyBTdGF0ZUJhc2UgfSBmcm9tIFwiLi9TdGF0ZUJhc2VcIjtcclxuaW1wb3J0IHsgU3RhdGVFbnVtIH0gZnJvbSBcIi4vU3RhdGVFbnVtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGVQZXJmb3JtQWN0aW9uIGV4dGVuZHMgU3RhdGVCYXNlIHtcclxuICAgIHB1YmxpYyBvbkVudGVyKCkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnirbmgIHmm7TmlrAgXHJcbiAgICAgKiBAcmV0dXJuIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25VcGRhdGUodGltZVN0YW1wOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgb3duZXIgPSB0aGlzLm93bmVyIGFzIEdvYXBBZ2VudFxyXG4gICAgICAgIGxldCBnb2FwOiBJR29hcCA9IG93bmVyLmdldEdvYXAoKTtcclxuICAgICAgICBpZiAoIW93bmVyLmhhc0FjdGlvblBsYW4oKSkge1xyXG4gICAgICAgICAgICAvLyBubyBhY3Rpb25zIHRvIHBlcmZvcm1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEb25lIGFjdGlvbnNcIik7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XHJcbiAgICAgICAgICAgIGdvYXAuYWN0aW9uc0ZpbmlzaGVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFjdGlvbjogR29hcEFjdGlvbiA9IHRoaXMub3duZXIucGVla0N1cnJlbnRBY3Rpb25zKCk7XHJcbiAgICAgICAgaWYgKGFjdGlvbi5pc0RvbmUoKSkge1xyXG4gICAgICAgICAgICAvLyB0aGUgYWN0aW9uIGlzIGRvbmUuIFJlbW92ZSBpdCBzbyB3ZSBjYW4gcGVyZm9ybSB0aGUgbmV4dCBvbmVcclxuICAgICAgICAgICAgdGhpcy5vd25lci5kZXF1ZXVlQ3VycmVudEFjdGlvbnMoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5vd25lci5oYXNBY3Rpb25QbGFuKCkpIHtcclxuICAgICAgICAgICAgLy8gcGVyZm9ybSB0aGUgbmV4dCBhY3Rpb25cclxuICAgICAgICAgICAgYWN0aW9uID0gdGhpcy5vd25lci5wZWVrQ3VycmVudEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgbGV0IGluUmFuZ2U6IGJvb2xlYW4gPSBhY3Rpb24ucmVxdWlyZXNJblJhbmdlKCkgPyBhY3Rpb24uaXNJblJhbmdlKCkgOiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHdlIGFyZSBpbiByYW5nZSwgc28gcGVyZm9ybSB0aGUgYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBsZXQgc3VjY2VzczogYm9vbGVhbiA9IGFjdGlvbi5wZXJmb3JtKHRoaXMub3duZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFjdGlvbiBmYWlsZWQsIHdlIG5lZWQgdG8gcGxhbiBhZ2FpblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29hcC5wbGFuQWJvcnRlZChhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBtb3ZlIHRoZXJlIGZpcnN0XHJcbiAgICAgICAgICAgICAgICAvL1RPRE86IHB1c2ggbW92ZVRvIHN0YXRlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyLmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZU1vdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbm8gYWN0aW9ucyBsZWZ0LCBtb3ZlIHRvIFBsYW4gc3RhdGVcclxuICAgICAgICAgICAgdGhpcy5vd25lci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVJZGxlKTtcclxuICAgICAgICAgICAgZ29hcC5hY3Rpb25zRmluaXNoZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/goaps/GoapOutFireExigence.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'addb7Hq8RRGb4rejo9rNZXg', 'GoapOutFireExigence');
// goap/goaps/GoapOutFireExigence.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionDataStatus_1 = require("../ActionDataStatus");
var DataMemory_1 = require("../DataMemory");
var ExigenceFireAction_1 = require("../ExigenceFireAction");
var GotoEquipmentAction_1 = require("../GotoEquipmentAction");
var GotoFireAction_1 = require("../GotoFireAction");
var GoapOutFireExigence = /** @class */ (function () {
    function GoapOutFireExigence() {
        this.bMoveEnd = false;
        this.bMoving = false;
        /**拥有的actions */
        this.avaliableActions = [];
        this.memory = new DataMemory_1.default();
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isTolietOk, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isCanOutfire, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isEquipOk, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isFireOk, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isSleepOk, false);
    }
    GoapOutFireExigence.prototype.initAvaliableActions = function (goapAgent) {
        var actionCls = [GotoEquipmentAction_1.GotoEquipmentAction, GotoFireAction_1.GotoFireAction, ExigenceFireAction_1.ExigenceFireAction];
        var action;
        for (var i = 0, len = actionCls.length; i < len; i++) {
            action = new actionCls[i]();
            action.goapAgent = goapAgent;
            this.avaliableActions.push(action);
        }
    };
    GoapOutFireExigence.prototype.getAvaliableActions = function () {
        return this.avaliableActions;
    };
    // 该计划的目标
    GoapOutFireExigence.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set(ActionDataStatus_1.ActionDataStatus.outFire, true);
        return goal;
    };
    GoapOutFireExigence.prototype.getWorldState = function () {
        var worldData = new Map();
        worldData.set(ActionDataStatus_1.ActionDataStatus.isTolietOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isTolietOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isCanOutfire, this.memory.get(ActionDataStatus_1.ActionDataStatus.isCanOutfire));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isEquipOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isEquipOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isFireOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isFireOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isSleepOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isSleepOk));
        return worldData;
    };
    GoapOutFireExigence.prototype.planFailed = function (failedGoal) {
        console.log("planFailed");
    };
    GoapOutFireExigence.prototype.planFound = function (goal, actions) {
        console.log("planFound");
    };
    GoapOutFireExigence.prototype.actionsFinished = function () {
        console.log("Actions completed");
    };
    GoapOutFireExigence.prototype.planAborted = function (aborter) {
        console.log("planAborted");
    };
    GoapOutFireExigence.prototype.moveAgent = function (nextAction, delta) {
        var _this = this;
        var target = nextAction.target;
        var goapAgent = nextAction.goapAgent;
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
            goapAgent.node.stopAllActions();
            goapAgent.node.runAction(cc.sequence(actions));
        }
        return this.bMoveEnd;
    };
    return GoapOutFireExigence;
}());
exports.default = GoapOutFireExigence;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcZ29hcHNcXEdvYXBPdXRGaXJlRXhpZ2VuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSx3REFBdUQ7QUFDdkQsNENBQXVDO0FBQ3ZDLDREQUEyRDtBQUMzRCw4REFBNkQ7QUFDN0Qsb0RBQW1EO0FBRW5EO0lBS0k7UUFIQSxhQUFRLEdBQVksS0FBSyxDQUFBO1FBQ3pCLFlBQU8sR0FBWSxLQUFLLENBQUE7UUFXeEIsZ0JBQWdCO1FBQ1IscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQVR4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksb0JBQVUsRUFBRSxDQUFBO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDdEQsQ0FBQztJQUlNLGtEQUFvQixHQUEzQixVQUE0QixTQUFvQjtRQUM1QyxJQUFJLFNBQVMsR0FBVSxDQUFDLHlDQUFtQixFQUFFLCtCQUFjLEVBQUUsdUNBQWtCLENBQUMsQ0FBQTtRQUNoRixJQUFJLE1BQWtCLENBQUM7UUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtZQUMzQixNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtZQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELGlEQUFtQixHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFBO0lBQ2hDLENBQUM7SUFFRCxTQUFTO0lBQ1QsNkNBQWUsR0FBZjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVELDJDQUFhLEdBQWI7UUFDSSxJQUFJLFNBQVMsR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDL0QsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN6RixTQUFTLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzdGLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDdkYsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyRixTQUFTLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsVUFBK0I7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRUQsdUNBQVMsR0FBVCxVQUFVLElBQXlCLEVBQUUsT0FBcUI7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsNkNBQWUsR0FBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLE9BQW1CO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUVELHVDQUFTLEdBQVQsVUFBVSxVQUFzQixFQUFFLEtBQWE7UUFBL0MsaUJBcUJDO1FBcEJHLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtZQUNyQixPQUFPLElBQUksQ0FBQTtTQUNkO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUNuQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUE7WUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDckUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNyQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtnQkFDcEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7Z0JBQ3BCLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDL0IsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1NBQ2pEO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFDTCwwQkFBQztBQUFELENBckZBLEFBcUZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFnZW50XCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4uL0FjdGlvbkRhdGFTdGF0dXNcIjtcclxuaW1wb3J0IERhdGFNZW1vcnkgZnJvbSBcIi4uL0RhdGFNZW1vcnlcIjtcclxuaW1wb3J0IHsgRXhpZ2VuY2VGaXJlQWN0aW9uIH0gZnJvbSBcIi4uL0V4aWdlbmNlRmlyZUFjdGlvblwiO1xyXG5pbXBvcnQgeyBHb3RvRXF1aXBtZW50QWN0aW9uIH0gZnJvbSBcIi4uL0dvdG9FcXVpcG1lbnRBY3Rpb25cIjtcclxuaW1wb3J0IHsgR290b0ZpcmVBY3Rpb24gfSBmcm9tIFwiLi4vR290b0ZpcmVBY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvYXBPdXRGaXJlRXhpZ2VuY2UgaW1wbGVtZW50cyBJR29hcCB7XHJcbiAgICBtZW1vcnk6IERhdGFNZW1vcnlcclxuICAgIGJNb3ZlRW5kOiBib29sZWFuID0gZmFsc2VcclxuICAgIGJNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVtb3J5ID0gbmV3IERhdGFNZW1vcnkoKVxyXG4gICAgICAgIHRoaXMubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIGZhbHNlKVxyXG4gICAgICAgIHRoaXMubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCBmYWxzZSlcclxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0ZpcmVPaywgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNTbGVlcE9rLCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICAvKirmi6XmnInnmoRhY3Rpb25zICovXHJcbiAgICBwcml2YXRlIGF2YWxpYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IFtdO1xyXG4gICAgcHVibGljIGluaXRBdmFsaWFibGVBY3Rpb25zKGdvYXBBZ2VudDogR29hcEFnZW50KSB7XHJcbiAgICAgICAgbGV0IGFjdGlvbkNsczogYW55W10gPSBbR290b0VxdWlwbWVudEFjdGlvbiwgR290b0ZpcmVBY3Rpb24sIEV4aWdlbmNlRmlyZUFjdGlvbl1cclxuICAgICAgICBsZXQgYWN0aW9uOiBHb2FwQWN0aW9uO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhY3Rpb25DbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgYWN0aW9uID0gbmV3IGFjdGlvbkNsc1tpXSgpXHJcbiAgICAgICAgICAgIGFjdGlvbi5nb2FwQWdlbnQgPSBnb2FwQWdlbnRcclxuICAgICAgICAgICAgdGhpcy5hdmFsaWFibGVBY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXZhbGlhYmxlQWN0aW9ucygpOiBHb2FwQWN0aW9uW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF2YWxpYWJsZUFjdGlvbnNcclxuICAgIH1cclxuXHJcbiAgICAvLyDor6XorqHliJLnmoTnm67moIdcclxuICAgIGNyZWF0ZUdvYWxTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+IHtcclxuICAgICAgICBsZXQgZ29hbCA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KCk7XHJcbiAgICAgICAgZ29hbC5zZXQoQWN0aW9uRGF0YVN0YXR1cy5vdXRGaXJlLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gZ29hbFxyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmxkU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XHJcbiAgICAgICAgbGV0IHdvcmxkRGF0YTogTWFwPHN0cmluZywgT2JqZWN0PiA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KCk7XHJcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2spKTtcclxuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCB0aGlzLm1lbW9yeS5nZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUpKTtcclxuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCB0aGlzLm1lbW9yeS5nZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2spKTtcclxuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rKSk7XHJcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzU2xlZXBPaywgdGhpcy5tZW1vcnkuZ2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNTbGVlcE9rKSk7XHJcbiAgICAgICAgcmV0dXJuIHdvcmxkRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwbGFuRmFpbGVkKGZhaWxlZEdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4pOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBsYW5GYWlsZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBwbGFuRm91bmQoZ29hbDogTWFwPHN0cmluZywgT2JqZWN0PiwgYWN0aW9uczogR29hcEFjdGlvbltdKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGFuRm91bmRcIilcclxuICAgIH1cclxuXHJcbiAgICBhY3Rpb25zRmluaXNoZWQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBY3Rpb25zIGNvbXBsZXRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGFuQWJvcnRlZChhYm9ydGVyOiBHb2FwQWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGFuQWJvcnRlZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVBZ2VudChuZXh0QWN0aW9uOiBHb2FwQWN0aW9uLCBkZWx0YTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IG5leHRBY3Rpb24udGFyZ2V0O1xyXG4gICAgICAgIGxldCBnb2FwQWdlbnQgPSBuZXh0QWN0aW9uLmdvYXBBZ2VudDtcclxuICAgICAgICBpZiAodGhpcy5iTW92ZUVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLmJNb3ZlRW5kID0gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmJNb3ZpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5iTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICBsZXQgYWN0aW9ucyA9IFtdXHJcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5tb3ZlVG8oMiwgbmV3IGNjLlZlYzIodGFyZ2V0Lm5vZGUueCwgdGFyZ2V0Lm5vZGUueSkpKVxyXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYk1vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBuZXh0QWN0aW9uLnNldEluUmFuZ2UodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICBnb2FwQWdlbnQubm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgICAgIGdvYXBBZ2VudC5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY3Rpb25zKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJNb3ZlRW5kXHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/ExigenceFireAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be89b8BYFpO8pTv0h7jcubV', 'ExigenceFireAction');
// goap/ExigenceFireAction.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExigenceFireAction = void 0;
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var ActionDataStatus_1 = require("./ActionDataStatus");
var ExigenceFireAction = /** @class */ (function (_super) {
    __extends(ExigenceFireAction, _super);
    function ExigenceFireAction() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 1; // seconds
        _this.cost = 0;
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isCanOutfire, true);
        return _this;
    }
    ExigenceFireAction.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    ExigenceFireAction.prototype.isDone = function () {
        return this.bDone;
    };
    ExigenceFireAction.prototype.requiresInRange = function () {
        return false;
    };
    ExigenceFireAction.prototype.checkProceduralPrecondition = function (agent) {
        return true;
    };
    ExigenceFireAction.prototype.perform = function (agent) {
        this.bDone = true;
        return true;
    };
    return ExigenceFireAction;
}(GoapAction_1.GoapAction));
exports.ExigenceFireAction = ExigenceFireAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcRXhpZ2VuY2VGaXJlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBMkQ7QUFNM0QsdURBQXNEO0FBR3REO0lBQXdDLHNDQUFVO0lBS2pEO1FBQUEsWUFDQyxpQkFBTyxTQUVQO1FBUE8sV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNyQyxVQUFJLEdBQVcsQ0FBQyxDQUFBO1FBR3RCLEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUNyRCxDQUFDO0lBRU0sa0NBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSxtQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFTSw0Q0FBZSxHQUF0QjtRQUNDLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVNLHdEQUEyQixHQUFsQyxVQUFtQyxLQUFnQjtRQUNsRCxPQUFPLElBQUksQ0FBQTtJQUNaLENBQUM7SUFFTSxvQ0FBTyxHQUFkLFVBQWUsS0FBZ0I7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDakIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQS9CQSxBQStCQyxDQS9CdUMsdUJBQVUsR0ErQmpEO0FBL0JZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWdlbnRcIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCI7XHJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCI7XHJcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCI7XHJcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25EYXRhU3RhdHVzXCI7XHJcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4vRW50aXR5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXhpZ2VuY2VGaXJlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XHJcblx0cHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXHJcblx0cHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSB3b3JrRHVyYXRpb246IG51bWJlciA9IDE7IC8vIHNlY29uZHNcclxuXHRwdWJsaWMgY29zdDogbnVtYmVyID0gMFxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmJEb25lID0gZmFsc2U7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaXNEb25lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYkRvbmU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogR29hcEFnZW50KTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdHJ1ZVxyXG5cdH1cclxuXHJcblx0cHVibGljIHBlcmZvcm0oYWdlbnQ6IEdvYXBBZ2VudCk6IGJvb2xlYW4ge1xyXG5cdFx0dGhpcy5iRG9uZSA9IHRydWVcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------
