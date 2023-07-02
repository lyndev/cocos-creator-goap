
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
require('./assets/shopping/ActionBuyProduct');
require('./assets/shopping/ActionBuyerLeave');
require('./assets/shopping/ActionBuyerPay');
require('./assets/shopping/ActionGetBag');
require('./assets/shopping/BagPoint');
require('./assets/shopping/Buyer');
require('./assets/shopping/Checkstand');
require('./assets/shopping/ContextShop');
require('./assets/shopping/EBuyerStatus');
require('./assets/shopping/GoodsShelf');
require('./assets/shopping/LeavePoint');
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
    ActionPayMoney.prototype.checkProceduralPrecondition = function (node) {
        if (Environment_1.Environment.storeA.isHaveGoods()) {
            return true;
        }
    };
    ActionPayMoney.prototype.perform = function (node) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL2FjdGlvbnMvQWN0aW9uUGF5TW9uZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE2RDtBQUc3RCxrRUFBZ0U7QUFDaEUscURBQStDO0FBRS9DO0lBQW9DLGtDQUFVO0lBSzFDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBTk8sV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFBO1FBQ3JCLGtCQUFZLEdBQVcsQ0FBQyxDQUFBLENBQUMsVUFBVTtRQUNwQyxVQUFJLEdBQVcsQ0FBQyxDQUFBOztJQUd2QixDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFTSx3Q0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVNLG9EQUEyQixHQUFsQyxVQUFtQyxJQUFhO1FBQzVDLElBQUkseUJBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUE7U0FDZDtJQUNMLENBQUM7SUFFTSxnQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUU1RCxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pELHdEQUF3RDtZQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtTQUNwQjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsQ0FyQ21DLHVCQUFVLEdBcUM3QztBQXJDWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCJcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCJcblxuZXhwb3J0IGNsYXNzIEFjdGlvblBheU1vbmV5IGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIHdvcmtEdXJhdGlvbjogbnVtYmVyID0gMiAvLyBzZWNvbmRzXG4gICAgcHVibGljIGNvc3Q6IG51bWJlciA9IDFcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYkRvbmUgPSBmYWxzZVxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IDBcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNEb25lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iRG9uZVxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChFbnZpcm9ubWVudC5zdG9yZUEuaXNIYXZlR29vZHMoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lID09IDApIHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpXG5cbiAgICAgICAgaWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy53b3JrRHVyYXRpb24pIHtcbiAgICAgICAgICAgIC8vZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpXG4gICAgICAgICAgICB0aGlzLmJEb25lID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvdXRpbHMvVGltZVV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBSUEsQ0FBQztJQUhpQixnQkFBTyxHQUFyQjtRQUNJLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUE7SUFDdEMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVVdGlsIHtcbiAgICBwdWJsaWMgc3RhdGljIGdldFRpbWUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDBcbiAgICB9XG59Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2RhdGEvTGFib3VyZXJUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRztBQUNILElBQVksWUFNWDtBQU5ELFdBQVksWUFBWTtJQUN2QiwrQ0FBSSxDQUFBO0lBQ0osMkRBQVUsQ0FBQTtJQUNWLG1EQUFNLENBQUE7SUFDTixpREFBSyxDQUFBO0lBQ0wsMkRBQVUsQ0FBQTtBQUNYLENBQUMsRUFOVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQU12QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTExLTAzIDE5OjAxOjM3IFxuICogQExhc3QgTW9kaWZpZWQgYnk6ICAgUmFubmFyWWFuZyBcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDMgMTk6MDE6MzcgXG4gKi9cbmV4cG9ydCBlbnVtIExhYm91cmVyVHlwZSB7XG5cdE5vbmUsXG5cdEJsYWNrc21pdGgsXG5cdExvZ2dlcixcblx0TWluZXIsXG5cdFdvb2RDdXR0ZXIsXG59Il19
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
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
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
        var vg = agent.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, trees_1 = trees; _i < trees_1.length; _i++) {
            var tree = trees_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = tree;
                closestDist = tree.distanceSquare(vg);
            }
            else {
                // is this one closer than the last?
                var dist = tree.distanceSquare(vg);
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
    ChopTreeAction.prototype.perform = function (node) {
        var labourer = node.getComponent(Labourer_1.Labourer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvQ2hvcFRyZWVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE4QztBQUM5QywyREFBeUQ7QUFDekQsdURBQXFEO0FBQ3JELHNEQUFvRDtBQUVwRCw4Q0FBNEM7QUFDNUMsa0RBQWdEO0FBSWhEO0lBQW9DLGtDQUFVO0lBSzFDO1FBQUEsWUFDSSxpQkFBTyxTQUlWO1FBVE8sYUFBTyxHQUFZLEtBQUssQ0FBQTtRQUV4QixlQUFTLEdBQVcsQ0FBQyxDQUFBO1FBQ3JCLGtCQUFZLEdBQVcsQ0FBQyxDQUFBLENBQUMsVUFBVTtRQUd2QyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsNEJBQTRCO1FBQzdFLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUEsQ0FBQyxxQ0FBcUM7UUFDdkYsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTs7SUFDOUMsQ0FBQztJQUNNLDhCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUN2QixDQUFDO0lBRU0sd0NBQWUsR0FBdEI7UUFDSSxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTSxvREFBMkIsR0FBbEMsVUFBbUMsS0FBYztRQUM3Qyw4Q0FBOEM7UUFDOUMsSUFBSSxLQUFLLEdBQW9CLHlCQUFXLENBQUMsU0FBUyxDQUFBO1FBQ2xELElBQUksT0FBTyxHQUFrQixJQUFJLENBQUE7UUFDakMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFBO1FBQzNCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMseUJBQVcsQ0FBQyxDQUFBO1FBQ3hDLEtBQWlCLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUU7WUFBbkIsSUFBSSxJQUFJLGNBQUE7WUFDVCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLElBQUksQ0FBQTtnQkFDZCxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTthQUN4QztpQkFBTTtnQkFDSCxvQ0FBb0M7Z0JBQ3BDLElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzFDLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtvQkFDcEIsZ0NBQWdDO29CQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFBO29CQUNkLFdBQVcsR0FBRyxJQUFJLENBQUE7aUJBQ3JCO2FBQ0o7U0FDSjtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQTtRQUVqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQTtRQUVyQixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUE7SUFDMUIsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQVEsQ0FBQyxDQUFBO1FBQzFDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQzVELElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDekQsb0JBQW9CO1lBQ3BCLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsUUFBUSxDQUFBO1lBQ25ELFFBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFBO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksSUFBSSxHQUFrQixRQUFRLENBQUMsSUFBSSxDQUFBO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUNsQixnQ0FBZ0M7Z0JBQ2hDLHdCQUF3QjtnQkFDeEIsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFBO2FBQ3pCO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTCxxQkFBQztBQUFELENBdEVBLEFBc0VDLENBdEVtQyx1QkFBVSxHQXNFN0M7QUF0RVksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL1RpbWVVdGlsXCJcbmltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiXG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCJcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCJcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiXG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSBcIi4uL1Rvb2xDb21wb25lbnRcIlxuaW1wb3J0IHsgVHJlZUNvbXBvbmVudCB9IGZyb20gXCIuLi9UcmVlQ29tcG9uZW50XCJcblxuZXhwb3J0IGNsYXNzIENob3BUcmVlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBjaG9wcGVkOiBib29sZWFuID0gZmFsc2VcblxuICAgIHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSB3b3JrRHVyYXRpb246IG51bWJlciA9IDIgLy8gc2Vjb25kc1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzVG9vbCwgdHJ1ZSkgLy8gd2UgbmVlZCBhIHRvb2wgdG8gZG8gdGhpc1xuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzTG9ncywgZmFsc2UpIC8vIGlmIHdlIGhhdmUgbG9ncyB3ZSBkb24ndCB3YW50IG1vcmVcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIHRydWUpXG4gICAgfVxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaG9wcGVkID0gZmFsc2VcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hvcHBlZFxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgLy8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHRyZWUgdGhhdCB3ZSBjYW4gY2hvcFxuICAgICAgICBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wc1xuICAgICAgICBsZXQgY2xvc2VzdDogVHJlZUNvbXBvbmVudCA9IG51bGxcbiAgICAgICAgbGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwXG4gICAgICAgIGxldCB2ZyA9IGFnZW50LmdldENvbXBvbmVudChWR2FtZU9iamVjdClcbiAgICAgICAgZm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xuICAgICAgICAgICAgaWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcbiAgICAgICAgICAgICAgICBjbG9zZXN0ID0gdHJlZVxuICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0ID0gdHJlZS5kaXN0YW5jZVNxdWFyZSh2ZylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgICAgICAgICAgbGV0IGRpc3Q6IG51bWJlciA9IHRyZWUuZGlzdGFuY2VTcXVhcmUodmcpXG4gICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0ID0gdHJlZVxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IGRpc3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsb3Nlc3QgPT0gbnVsbCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgdGhpcy50YXJnZXQgPSBjbG9zZXN0XG5cbiAgICAgICAgcmV0dXJuIGNsb3Nlc3QgIT0gbnVsbFxuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGxhYm91cmVyID0gbm9kZS5nZXRDb21wb25lbnQoTGFib3VyZXIpXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKSB0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKVxuICAgICAgICBpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLndvcmtEdXJhdGlvbikge1xuICAgICAgICAgICAgLy8gZmluaXNoZWQgY2hvcHBpbmdcbiAgICAgICAgICAgIGxldCBiYWNrcGFjazogQmFja1BhY2tDb21wb25lbnQgPSBsYWJvdXJlci5iYWNrcGFja1xuICAgICAgICAgICAgYmFja3BhY2subnVtTG9ncyArPSAxXG4gICAgICAgICAgICB0aGlzLmNob3BwZWQgPSB0cnVlXG4gICAgICAgICAgICBsZXQgdG9vbDogVG9vbENvbXBvbmVudCA9IGxhYm91cmVyLnRvb2xcbiAgICAgICAgICAgIHRvb2wudXNlKDAuMzQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS9v+eUqOW3peWFt1wiLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpXG4gICAgICAgICAgICBpZiAodG9vbC5kZXN0cm95ZWQoKSkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IERlc3Ryb3koYmFja3BhY2sudG9vbCk7XG4gICAgICAgICAgICAgICAgLy8gYmFja3BhY2sudG9vbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGFib3VyZXIuZGVzdHJveVRvb2woKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIl19
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
/**
 * 樵夫
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy92bGFib3VyZXJzL1ZMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUF3QztBQUV4Qzs7R0FFRztBQUNIO0lBQTZCLDJCQUFTO0lBQ3JDLDZCQUE2QjtJQUM3QjtlQUNDLGlCQUFPO0lBQ1IsQ0FBQztJQUNGLGNBQUM7QUFBRCxDQUxBLEFBS0MsQ0FMNEIscUJBQVMsR0FLckM7QUFMWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9Mb2dnZXJcIjtcbmltcG9ydCB7IFZMYWJvdXJlciB9IGZyb20gXCIuL1ZMYWJvdXJlclwiO1xuXG4vKipcbiAqIOaoteWkq1xuICovXG5leHBvcnQgY2xhc3MgVkxvZ2dlciBleHRlbmRzIFZMYWJvdXJlciB7XG5cdC8vcHJvdGVjdGVkIGxhYm91cmVyOiBMb2dnZXI7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG59Il19
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
        this._preconditions = new Map();
        this._effects = new Map();
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
        this._preconditions.set(key, value);
    };
    GoapAction.prototype.removePrecondition = function (key) {
        this._preconditions.delete(key);
    };
    GoapAction.prototype.addEffect = function (key, value) {
        this._effects.set(key, value);
    };
    GoapAction.prototype.removeEffect = function (key) {
        this._effects.delete(key);
    };
    Object.defineProperty(GoapAction.prototype, "preconditions", {
        get: function () {
            return this._preconditions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GoapAction.prototype, "effects", {
        get: function () {
            return this._effects;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7Ozs7O0dBTUc7QUFDSDtJQWdCSTtRQWJRLFlBQU8sR0FBWSxLQUFLLENBQUE7UUFDaEM7OzhCQUVzQjtRQUNmLFNBQUksR0FBVyxDQUFDLENBQUE7UUFVbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQTtRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFBO0lBQ25ELENBQUM7SUFFTSw0QkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUErQkQ7OztPQUdHO0lBQ0ksOEJBQVMsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDdkIsQ0FBQztJQUVNLCtCQUFVLEdBQWpCLFVBQWtCLE9BQWdCO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0lBQzFCLENBQUM7SUFFTSxvQ0FBZSxHQUF0QixVQUF1QixHQUFXLEVBQUUsS0FBVTtRQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVNLHVDQUFrQixHQUF6QixVQUEwQixHQUFXO1FBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFTSw4QkFBUyxHQUFoQixVQUFpQixHQUFXLEVBQUUsS0FBVTtRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVNLGlDQUFZLEdBQW5CLFVBQW9CLEdBQVc7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELHNCQUFXLHFDQUFhO2FBQXhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFBO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsK0JBQU87YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDeEIsQ0FBQzs7O09BQUE7SUFDTCxpQkFBQztBQUFELENBM0ZBLEFBMkZDLElBQUE7QUEzRnFCLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vLi4vLi4vLi4vZ29hcC9FbnRpdHlcIlxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25TdGF0dXNcIlxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4vR29hcEFnZW50XCJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4vSUdvYXBcIlxuXG4vKlxuICogQERlc2NyaXB0aW9uOlxuICogQEF1dGhvcjogUmFubmFyWWFuZ1xuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MDk6MjZcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIFJhbm5hcllhbmdcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDktMDYgMDA6MDk6MjZcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdvYXBBY3Rpb24ge1xuICAgIHByaXZhdGUgX3ByZWNvbmRpdGlvbnM6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD5cbiAgICBwcml2YXRlIF9lZmZlY3RzOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+XG4gICAgcHJpdmF0ZSBpblJhbmdlOiBib29sZWFuID0gZmFsc2VcbiAgICAvKiDmiafooYzliqjkvZznmoTmiJDmnKzjgIJcbiAgICAgKiDmib7lh7rpgILlkIjliqjkvZznmoTph43ph4/jgIJcbiAgICAgKiDmm7TmlLnlroPlsIblvbHlk43lnKjorqHliJLmnJ/pl7TpgInmi6nnmoTmk43kvZzjgIIqL1xuICAgIHB1YmxpYyBjb3N0OiBudW1iZXIgPSAxXG5cbiAgICAvKipcbiAgICAgKiDliqjkvZzmiafooYznmoTnm67moIflr7nosaHvvIzlj6/ku6XkuLrnqbrjgIIgKi9cbiAgICBwdWJsaWMgdGFyZ2V0OiBhbnlcblxuICAgIC8vIOWKqOS9nOaJgOWxnlxuICAgIHB1YmxpYyBnb2FwQWdlbnQ6IEdvYXBBZ2VudFxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wcmVjb25kaXRpb25zID0gbmV3IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4oKVxuICAgICAgICB0aGlzLl9lZmZlY3RzID0gbmV3IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4oKVxuICAgIH1cblxuICAgIHB1YmxpYyBkb1Jlc2V0KCkge1xuICAgICAgICB0aGlzLmluUmFuZ2UgPSBmYWxzZVxuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGxcbiAgICAgICAgdGhpcy5yZXNldCgpXG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlc2V0IGFueSB2YXJpYWJsZXMgdGhhdCBuZWVkIHRvIGJlIHJlc2V0IGJlZm9yZSBwbGFubmluZyBoYXBwZW5zIGFnYWluLlxuICAgICAqL1xuICAgIGFic3RyYWN0IHJlc2V0KCk6IHZvaWRcblxuICAgIC8qKlxuICAgICAqIElzIHRoZSBhY3Rpb24gZG9uZT9cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBpc0RvbmUoKTogYm9vbGVhblxuXG4gICAgLyoqXG4gICAgICogUHJvY2VkdXJhbGx5IGNoZWNrIGlmIHRoaXMgYWN0aW9uIGNhbiBydW4uIE5vdCBhbGwgYWN0aW9uc1xuICAgICAqIHdpbGwgbmVlZCB0aGlzLCBidXQgc29tZSBtaWdodC5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24obm9kZTogY2MuTm9kZSk6IGJvb2xlYW5cblxuICAgIC8qKlxuICAgICAqIFJ1biB0aGUgYWN0aW9uLlxuICAgICAqIFJldHVybnMgVHJ1ZSBpZiB0aGUgYWN0aW9uIHBlcmZvcm1lZCBzdWNjZXNzZnVsbHkgb3IgZmFsc2VcbiAgICAgKiBpZiBzb21ldGhpbmcgaGFwcGVuZWQgYW5kIGl0IGNhbiBubyBsb25nZXIgcGVyZm9ybS4gSW4gdGhpcyBjYXNlXG4gICAgICogdGhlIGFjdGlvbiBxdWV1ZSBzaG91bGQgY2xlYXIgb3V0IGFuZCB0aGUgZ29hbCBjYW5ub3QgYmUgcmVhY2hlZC5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBwZXJmb3JtKGdvYXA6IGNjLk5vZGUpOiBib29sZWFuXG5cbiAgICAvKipcbiAgICAgKiBEb2VzIHRoaXMgYWN0aW9uIG5lZWQgdG8gYmUgd2l0aGluIHJhbmdlIG9mIGEgdGFyZ2V0IGdhbWUgb2JqZWN0P1xuICAgICAqIElmIG5vdCB0aGVuIHRoZSBtb3ZlVG8gc3RhdGUgd2lsbCBub3QgbmVlZCB0byBydW4gZm9yIHRoaXMgYWN0aW9uLlxuICAgICAqL1xuICAgIGFic3RyYWN0IHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuXG5cbiAgICAvKipcbiAgICAgKiBBcmUgd2UgaW4gcmFuZ2Ugb2YgdGhlIHRhcmdldD9cbiAgICAgKiBUaGUgTW92ZVRvIHN0YXRlIHdpbGwgc2V0IHRoaXMgYW5kIGl0IGdldHMgcmVzZXQgZWFjaCB0aW1lIHRoaXMgYWN0aW9uIGlzIHBlcmZvcm1lZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNJblJhbmdlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pblJhbmdlXG4gICAgfVxuXG4gICAgcHVibGljIHNldEluUmFuZ2UoaW5SYW5nZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmluUmFuZ2UgPSBpblJhbmdlXG4gICAgfVxuXG4gICAgcHVibGljIGFkZFByZWNvbmRpdGlvbihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLl9wcmVjb25kaXRpb25zLnNldChrZXksIHZhbHVlKVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVQcmVjb25kaXRpb24oa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJlY29uZGl0aW9ucy5kZWxldGUoa2V5KVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRFZmZlY3Qoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fZWZmZWN0cy5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlRWZmZWN0KGtleTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2VmZmVjdHMuZGVsZXRlKGtleSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHByZWNvbmRpdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVjb25kaXRpb25zXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBlZmZlY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWZmZWN0c1xuICAgIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0VudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwREFBeUQ7QUFLbkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBNkMsMEJBQVM7SUFBdEQ7O0lBSUEsQ0FBQztJQUhVLDRCQUFXLEdBQWxCLFVBQW1CLEtBQWE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBSHlCLE1BQU07UUFEbkMsT0FBTztPQUNzQixNQUFNLENBSW5DO0lBQUQsYUFBQztDQUpELEFBSUMsQ0FKNEMscUJBQVMsR0FJckQ7a0JBSjZCLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSAnLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb24nO1xuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSAnLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudCc7XG5pbXBvcnQgeyBJR29hcCB9IGZyb20gJy4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcCc7XG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSAnLi9BY3Rpb25EYXRhU3RhdHVzJztcbmltcG9ydCBEYXRhTWVtb3J5IGZyb20gJy4vRGF0YU1lbW9yeSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGFic3RyYWN0IGRlZmF1bHQgY2xhc3MgRW50aXR5IGV4dGVuZHMgR29hcEFnZW50ICB7XG4gICAgcHVibGljIHVwZGF0ZVRpbWVyKGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy51cGRhdGUoZGVsdGEpO1xuICAgIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL2dvYXBzL0dvYXBPdXRGaXJlRXhpZ2VuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSx3REFBdUQ7QUFDdkQsNENBQXVDO0FBQ3ZDLDREQUEyRDtBQUMzRCw4REFBNkQ7QUFDN0Qsb0RBQW1EO0FBRW5EO0lBS0k7UUFIQSxhQUFRLEdBQVksS0FBSyxDQUFBO1FBQ3pCLFlBQU8sR0FBWSxLQUFLLENBQUE7UUFXeEIsZ0JBQWdCO1FBQ1IscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQVR4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksb0JBQVUsRUFBRSxDQUFBO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDdEQsQ0FBQztJQUlNLGtEQUFvQixHQUEzQixVQUE0QixTQUFvQjtRQUM1QyxJQUFJLFNBQVMsR0FBVSxDQUFDLHlDQUFtQixFQUFFLCtCQUFjLEVBQUUsdUNBQWtCLENBQUMsQ0FBQTtRQUNoRixJQUFJLE1BQWtCLENBQUM7UUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtZQUMzQixNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtZQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELGlEQUFtQixHQUFuQjtRQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFBO0lBQ2hDLENBQUM7SUFFRCxTQUFTO0lBQ1QsNkNBQWUsR0FBZjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVELDJDQUFhLEdBQWI7UUFDSSxJQUFJLFNBQVMsR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDL0QsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN6RixTQUFTLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzdGLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDdkYsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyRixTQUFTLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsVUFBK0I7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRUQsdUNBQVMsR0FBVCxVQUFVLElBQXlCLEVBQUUsT0FBcUI7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQsNkNBQWUsR0FBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLE9BQW1CO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDOUIsQ0FBQztJQUVELHVDQUFTLEdBQVQsVUFBVSxVQUFzQixFQUFFLEtBQWE7UUFBL0MsaUJBcUJDO1FBcEJHLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtZQUNyQixPQUFPLElBQUksQ0FBQTtTQUNkO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUNuQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUE7WUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDckUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNyQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtnQkFDcEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7Z0JBQ3BCLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDL0IsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1NBQ2pEO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFDTCwwQkFBQztBQUFELENBckZBLEFBcUZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudFwiO1xuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCI7XG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4uL0FjdGlvbkRhdGFTdGF0dXNcIjtcbmltcG9ydCBEYXRhTWVtb3J5IGZyb20gXCIuLi9EYXRhTWVtb3J5XCI7XG5pbXBvcnQgeyBFeGlnZW5jZUZpcmVBY3Rpb24gfSBmcm9tIFwiLi4vRXhpZ2VuY2VGaXJlQWN0aW9uXCI7XG5pbXBvcnQgeyBHb3RvRXF1aXBtZW50QWN0aW9uIH0gZnJvbSBcIi4uL0dvdG9FcXVpcG1lbnRBY3Rpb25cIjtcbmltcG9ydCB7IEdvdG9GaXJlQWN0aW9uIH0gZnJvbSBcIi4uL0dvdG9GaXJlQWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvYXBPdXRGaXJlRXhpZ2VuY2UgaW1wbGVtZW50cyBJR29hcCB7XG4gICAgbWVtb3J5OiBEYXRhTWVtb3J5XG4gICAgYk1vdmVFbmQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIGJNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWVtb3J5ID0gbmV3IERhdGFNZW1vcnkoKVxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1RvbGlldE9rLCBmYWxzZSlcbiAgICAgICAgdGhpcy5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCBmYWxzZSlcbiAgICAgICAgdGhpcy5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCBmYWxzZSlcbiAgICAgICAgdGhpcy5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIGZhbHNlKVxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1NsZWVwT2ssIGZhbHNlKVxuICAgIH1cblxuICAgIC8qKuaLpeacieeahGFjdGlvbnMgKi9cbiAgICBwcml2YXRlIGF2YWxpYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IFtdO1xuICAgIHB1YmxpYyBpbml0QXZhbGlhYmxlQWN0aW9ucyhnb2FwQWdlbnQ6IEdvYXBBZ2VudCkge1xuICAgICAgICBsZXQgYWN0aW9uQ2xzOiBhbnlbXSA9IFtHb3RvRXF1aXBtZW50QWN0aW9uLCBHb3RvRmlyZUFjdGlvbiwgRXhpZ2VuY2VGaXJlQWN0aW9uXVxuICAgICAgICBsZXQgYWN0aW9uOiBHb2FwQWN0aW9uO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYWN0aW9uQ2xzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBuZXcgYWN0aW9uQ2xzW2ldKClcbiAgICAgICAgICAgIGFjdGlvbi5nb2FwQWdlbnQgPSBnb2FwQWdlbnRcbiAgICAgICAgICAgIHRoaXMuYXZhbGlhYmxlQWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBdmFsaWFibGVBY3Rpb25zKCk6IEdvYXBBY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF2YWxpYWJsZUFjdGlvbnNcbiAgICB9XG5cbiAgICAvLyDor6XorqHliJLnmoTnm67moIdcbiAgICBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XG4gICAgICAgIGxldCBnb2FsID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcbiAgICAgICAgZ29hbC5zZXQoQWN0aW9uRGF0YVN0YXR1cy5vdXRGaXJlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGdvYWxcbiAgICB9XG5cbiAgICBnZXRXb3JsZFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuICAgICAgICBsZXQgd29ybGREYXRhOiBNYXA8c3RyaW5nLCBPYmplY3Q+ID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2spKTtcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgdGhpcy5tZW1vcnkuZ2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlKSk7XG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzRXF1aXBPaykpO1xuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rKSk7XG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1NsZWVwT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzU2xlZXBPaykpO1xuICAgICAgICByZXR1cm4gd29ybGREYXRhO1xuICAgIH1cblxuICAgIHBsYW5GYWlsZWQoZmFpbGVkR29hbDogTWFwPHN0cmluZywgT2JqZWN0Pik6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBsYW5GYWlsZWRcIilcbiAgICB9XG5cbiAgICBwbGFuRm91bmQoZ29hbDogTWFwPHN0cmluZywgT2JqZWN0PiwgYWN0aW9uczogR29hcEFjdGlvbltdKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxhbkZvdW5kXCIpXG4gICAgfVxuXG4gICAgYWN0aW9uc0ZpbmlzaGVkKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFjdGlvbnMgY29tcGxldGVkXCIpO1xuICAgIH1cblxuICAgIHBsYW5BYm9ydGVkKGFib3J0ZXI6IEdvYXBBY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGFuQWJvcnRlZFwiKVxuICAgIH1cblxuICAgIG1vdmVBZ2VudChuZXh0QWN0aW9uOiBHb2FwQWN0aW9uLCBkZWx0YTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBuZXh0QWN0aW9uLnRhcmdldDtcbiAgICAgICAgbGV0IGdvYXBBZ2VudCA9IG5leHRBY3Rpb24uZ29hcEFnZW50O1xuICAgICAgICBpZiAodGhpcy5iTW92ZUVuZCkge1xuICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5iTW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmJNb3ZpbmcgPSB0cnVlXG4gICAgICAgICAgICBsZXQgYWN0aW9ucyA9IFtdXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MubW92ZVRvKDIsIG5ldyBjYy5WZWMyKHRhcmdldC5ub2RlLngsIHRhcmdldC5ub2RlLnkpKSlcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmJNb3ZpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIG5leHRBY3Rpb24uc2V0SW5SYW5nZSh0cnVlKTtcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgZ29hcEFnZW50Lm5vZGUuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgICAgICAgZ29hcEFnZW50Lm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbnMpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYk1vdmVFbmRcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/ActionBuyerLeave.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '197c4TPN7FPlZ3RZYCMUa1Y', 'ActionBuyerLeave');
// shopping/ActionBuyerLeave.ts

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
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var ContextShop_1 = require("./ContextShop");
var ActionBuyerLeave = /** @class */ (function (_super) {
    __extends(ActionBuyerLeave, _super);
    function ActionBuyerLeave() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.addPrecondition("payed", true);
        _this.addPrecondition("leaved", false);
        _this.addEffect("leaved", true);
        return _this;
    }
    ActionBuyerLeave.prototype.reset = function () {
        this.bDone = false;
    };
    ActionBuyerLeave.prototype.isDone = function () {
        return this.bDone;
    };
    ActionBuyerLeave.prototype.checkProceduralPrecondition = function (go) {
        if (ContextShop_1.default.leavePoint) {
            this.target = ContextShop_1.default.leavePoint;
            return true;
        }
        return false;
    };
    ActionBuyerLeave.prototype.perform = function (node) {
        this.bDone = true;
        console.log("离开");
        node.destroy();
        return true;
    };
    ActionBuyerLeave.prototype.requiresInRange = function () {
        return true;
    };
    return ActionBuyerLeave;
}(GoapAction_1.GoapAction));
exports.default = ActionBuyerLeave;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9BY3Rpb25CdXllckxlYXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEwRDtBQUMxRCw2Q0FBdUM7QUFHdkM7SUFBOEMsb0NBQVU7SUFHcEQ7UUFBQSxZQUNJLGlCQUFPLFNBSVY7UUFQUyxXQUFLLEdBQVksS0FBSyxDQUFBO1FBSTVCLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ25DLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3JDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBOztJQUNsQyxDQUFDO0lBRUQsZ0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3RCLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxzREFBMkIsR0FBM0IsVUFBNEIsRUFBVztRQUNuQyxJQUFJLHFCQUFXLENBQUMsVUFBVSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQVcsQ0FBQyxVQUFVLENBQUE7WUFDcEMsT0FBTyxJQUFJLENBQUE7U0FDZDtRQUNELE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUM7SUFFRCxrQ0FBTyxHQUFQLFVBQVEsSUFBYTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNkLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVELDBDQUFlLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTCx1QkFBQztBQUFELENBcENBLEFBb0NDLENBcEM2Qyx1QkFBVSxHQW9DdkQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCBDb250ZXh0U2hvcCBmcm9tIFwiLi9Db250ZXh0U2hvcFwiXG5pbXBvcnQgTGVhdmVQb2ludCBmcm9tIFwiLi9MZWF2ZVBvaW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQnV5ZXJMZWF2ZSBleHRlbmRzIEdvYXBBY3Rpb24ge1xuICAgIHByb3RlY3RlZCBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHVibGljIHRhcmdldDogTGVhdmVQb2ludFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKFwicGF5ZWRcIiwgdHJ1ZSlcbiAgICAgICAgdGhpcy5hZGRQcmVjb25kaXRpb24oXCJsZWF2ZWRcIiwgZmFsc2UpXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KFwibGVhdmVkXCIsIHRydWUpXG4gICAgfVxuXG4gICAgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYkRvbmUgPSBmYWxzZVxuICAgIH1cblxuICAgIGlzRG9uZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYkRvbmVcbiAgICB9XG5cbiAgICBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oZ286IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKENvbnRleHRTaG9wLmxlYXZlUG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gQ29udGV4dFNob3AubGVhdmVQb2ludFxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5iRG9uZSA9IHRydWVcbiAgICAgICAgY29uc29sZS5sb2coXCLnprvlvIBcIilcbiAgICAgICAgbm9kZS5kZXN0cm95KClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIl19
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
    };
    EnvironmentView.prototype.update = function (dt) {
        this.miner.update(dt);
        this.blackSmith.update(dt);
        this.logger.update(dt);
        this.woodCutter.update(dt);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL3ZpZXcvRW52aXJvbm1lbnRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBaUU7QUFDakUsNkVBQTJFO0FBQzNFLHVEQUFxRDtBQUNyRCw2REFBMkQ7QUFDM0QsbUVBQWlFO0FBQ2pFLCtEQUE2RDtBQUM3RCx1REFBcUQ7QUFDckQscURBQW1EO0FBQ25ELCtEQUE2RDtBQUM3RCx1RUFBcUU7QUFDckUsMkRBQXlEO0FBRW5ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRTNDO0lBQXFDLG1DQUFZO0lBQWpEO1FBQUEscUVBK0VDO1FBN0VVLHFCQUFlLEdBQXdCLElBQUksQ0FBQTtRQUczQyxxQkFBZSxHQUF3QixJQUFJLENBQUE7UUFHMUMsbUJBQWEsR0FBc0IsSUFBSSxDQUFBO1FBR3ZDLG1CQUFhLEdBQXNCLElBQUksQ0FBQTtRQUd2QyxtQkFBYSxHQUFzQixJQUFJLENBQUE7UUFHeEMsZUFBUyxHQUFrQixJQUFJLENBQUE7UUFHL0IsZUFBUyxHQUFrQixJQUFJLENBQUE7UUFHL0IsZUFBUyxHQUFrQixJQUFJLENBQUE7UUFHL0IsZUFBUyxHQUFrQixJQUFJLENBQUE7UUFHL0IsdUJBQWlCLEdBQTJCLElBQUksQ0FBQTtRQUdoRCxlQUFTLEdBQW1CLElBQUksQ0FBQTtRQUdoQyxnQkFBVSxHQUFlLElBQUksQ0FBQTtRQUc3QixZQUFNLEdBQVcsSUFBSSxDQUFBO1FBR3JCLFdBQUssR0FBVSxJQUFJLENBQUE7UUFHbkIsZ0JBQVUsR0FBZSxJQUFJLENBQUE7UUFFcEMsYUFBTyxHQUFHLENBQUMsQ0FBQTs7SUFpQ2YsQ0FBQztJQWhDRywrQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUFFTyx5Q0FBZSxHQUF2QjtRQUNJLHlCQUFXLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDMUUseUJBQVcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3BGLHlCQUFXLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRXhGLHlCQUFXLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3pDLHlCQUFXLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUV6RCxhQUFhO1FBQ2IsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBRXBDLElBQUksUUFBUSxHQUFHLElBQUkscUNBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUVqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLHFDQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFL0IsSUFBSSxZQUFZLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFTSxnQ0FBTSxHQUFiLFVBQWMsRUFBRTtRQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3JCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUE1RUQ7UUFEQyxRQUFRLENBQUMseUNBQW1CLENBQUM7NERBQ29CO0lBR2xEO1FBREMsUUFBUSxDQUFDLHlDQUFtQixDQUFDOzREQUNvQjtJQUdsRDtRQURDLFFBQVEsQ0FBQyxxQ0FBaUIsQ0FBQzswREFDbUI7SUFHL0M7UUFEQyxRQUFRLENBQUMscUNBQWlCLENBQUM7MERBQ21CO0lBRy9DO1FBREMsUUFBUSxDQUFDLHFDQUFpQixDQUFDOzBEQUNtQjtJQUcvQztRQURDLFFBQVEsQ0FBQyw2QkFBYSxDQUFDO3NEQUNjO0lBR3RDO1FBREMsUUFBUSxDQUFDLDZCQUFhLENBQUM7c0RBQ2M7SUFHdEM7UUFEQyxRQUFRLENBQUMsNkJBQWEsQ0FBQztzREFDYztJQUd0QztRQURDLFFBQVEsQ0FBQyw2QkFBYSxDQUFDO3NEQUNjO0lBR3RDO1FBREMsUUFBUSxDQUFDLCtDQUFzQixDQUFDOzhEQUNzQjtJQUd2RDtRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDO3NEQUNjO0lBR3ZDO1FBREMsUUFBUSxDQUFDLHVCQUFVLENBQUM7dURBQ2U7SUFHcEM7UUFEQyxRQUFRLENBQUMsZUFBTSxDQUFDO21EQUNXO0lBRzVCO1FBREMsUUFBUSxDQUFDLGFBQUssQ0FBQztrREFDVTtJQUcxQjtRQURDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDO3VEQUNlO0lBNUMzQixlQUFlO1FBRDNCLE9BQU87T0FDSyxlQUFlLENBK0UzQjtJQUFELHNCQUFDO0NBL0VELEFBK0VDLENBL0VvQyxFQUFFLENBQUMsU0FBUyxHQStFaEQ7QUEvRVksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9nYW1lZGF0YS9CYWNrUGFja0NvbXBvbmVudFwiXG5pbXBvcnQgeyBDaG9wcGluZ0Jsb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dhbWVkYXRhL0Nob3BwaW5nQmxvY2tDb21wb25lbnRcIlxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvRW52aXJvbm1lbnRcIlxuaW1wb3J0IHsgRm9yZ2VDb21wb25lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvRm9yZ2VDb21wb25lbnRcIlxuaW1wb3J0IHsgSXJvblJvY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvSXJvblJvY2tDb21wb25lbnRcIlxuaW1wb3J0IHsgQmxhY2tzbWl0aCB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvQmxhY2tzbWl0aFwiXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvbGFib3VyZXJzL0xvZ2dlclwiXG5pbXBvcnQgeyBNaW5lciB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvTWluZXJcIlxuaW1wb3J0IHsgV29vZEN1dHRlciB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvV29vZEN1dHRlclwiXG5pbXBvcnQgeyBTdXBwbHlQaWxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dhbWVkYXRhL1N1cHBseVBpbGVDb21wb25lbnRcIlxuaW1wb3J0IHsgVHJlZUNvbXBvbmVudCB9IGZyb20gXCIuLi9nYW1lZGF0YS9UcmVlQ29tcG9uZW50XCJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudFZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShTdXBwbHlQaWxlQ29tcG9uZW50KVxuICAgIHB1YmxpYyBzdXBwbHlQaWxlQ29tcDE6IFN1cHBseVBpbGVDb21wb25lbnQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoU3VwcGx5UGlsZUNvbXBvbmVudClcbiAgICBwdWJsaWMgc3VwcGx5UGlsZUNvbXAyOiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KElyb25Sb2NrQ29tcG9uZW50KVxuICAgIHByaXZhdGUgaXJvblJvY2tDb21wMTogSXJvblJvY2tDb21wb25lbnQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoSXJvblJvY2tDb21wb25lbnQpXG4gICAgcHJpdmF0ZSBpcm9uUm9ja0NvbXAyOiBJcm9uUm9ja0NvbXBvbmVudCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShJcm9uUm9ja0NvbXBvbmVudClcbiAgICBwcml2YXRlIGlyb25Sb2NrQ29tcDM6IElyb25Sb2NrQ29tcG9uZW50ID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KFRyZWVDb21wb25lbnQpXG4gICAgcHVibGljIHRyZWVDb21wMTogVHJlZUNvbXBvbmVudCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShUcmVlQ29tcG9uZW50KVxuICAgIHB1YmxpYyB0cmVlQ29tcDI6IFRyZWVDb21wb25lbnQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoVHJlZUNvbXBvbmVudClcbiAgICBwdWJsaWMgdHJlZUNvbXAzOiBUcmVlQ29tcG9uZW50ID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KFRyZWVDb21wb25lbnQpXG4gICAgcHVibGljIHRyZWVDb21wNDogVHJlZUNvbXBvbmVudCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShDaG9wcGluZ0Jsb2NrQ29tcG9uZW50KVxuICAgIHB1YmxpYyBjaG9wcGluZ0Jsb2NrQ29tcDogQ2hvcHBpbmdCbG9ja0NvbXBvbmVudCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShGb3JnZUNvbXBvbmVudClcbiAgICBwdWJsaWMgZm9yZ2VDb21wOiBGb3JnZUNvbXBvbmVudCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShCbGFja3NtaXRoKVxuICAgIHB1YmxpYyBibGFja1NtaXRoOiBCbGFja3NtaXRoID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KExvZ2dlcilcbiAgICBwdWJsaWMgbG9nZ2VyOiBMb2dnZXIgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoTWluZXIpXG4gICAgcHVibGljIG1pbmVyOiBNaW5lciA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShXb29kQ3V0dGVyKVxuICAgIHB1YmxpYyB3b29kQ3V0dGVyOiBXb29kQ3V0dGVyID0gbnVsbFxuXG4gICAgY3VyVGltZSA9IDBcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pbml0RW52aXJvbm1lbnQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEVudmlyb25tZW50KCkge1xuICAgICAgICBFbnZpcm9ubWVudC5zdXBwbHlQaWxlQ29tcHMgPSBbdGhpcy5zdXBwbHlQaWxlQ29tcDEsIHRoaXMuc3VwcGx5UGlsZUNvbXAyXVxuICAgICAgICBFbnZpcm9ubWVudC5yb2NrQ29tcHMgPSBbdGhpcy5pcm9uUm9ja0NvbXAxLCB0aGlzLmlyb25Sb2NrQ29tcDIsIHRoaXMuaXJvblJvY2tDb21wM11cbiAgICAgICAgRW52aXJvbm1lbnQudHJlZUNvbXBzID0gW3RoaXMudHJlZUNvbXAxLCB0aGlzLnRyZWVDb21wMiwgdGhpcy50cmVlQ29tcDMsIHRoaXMudHJlZUNvbXA0XVxuXG4gICAgICAgIEVudmlyb25tZW50LmZvcmdlQ29tcHMgPSBbdGhpcy5mb3JnZUNvbXBdXG4gICAgICAgIEVudmlyb25tZW50LmNob3BwaW5nQmxvY2tDb21wcyA9IFt0aGlzLmNob3BwaW5nQmxvY2tDb21wXVxuXG4gICAgICAgIC8vIOiuvue9rmJhY2twYWNrXG4gICAgICAgIGxldCBzbWl0aEJQID0gbmV3IEJhY2tQYWNrQ29tcG9uZW50KDAsIDAsIDApXG4gICAgICAgIHRoaXMuYmxhY2tTbWl0aC5zZXRCYWNrUGFjayhzbWl0aEJQKVxuXG4gICAgICAgIGxldCBsb2dnZXJCUCA9IG5ldyBCYWNrUGFja0NvbXBvbmVudCgwLCAwLCAwKVxuICAgICAgICB0aGlzLmxvZ2dlci5zZXRCYWNrUGFjayhsb2dnZXJCUClcblxuICAgICAgICBsZXQgbWluZXJCUCA9IG5ldyBCYWNrUGFja0NvbXBvbmVudCgwLCAwLCAwKVxuICAgICAgICB0aGlzLm1pbmVyLnNldEJhY2tQYWNrKG1pbmVyQlApXG5cbiAgICAgICAgbGV0IHdvb2RDdXR0ZXJCUCA9IG5ldyBCYWNrUGFja0NvbXBvbmVudCgwLCAwLCAwKVxuICAgICAgICB0aGlzLndvb2RDdXR0ZXIuc2V0QmFja1BhY2sod29vZEN1dHRlckJQKVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5taW5lci51cGRhdGUoZHQpXG4gICAgICAgIHRoaXMuYmxhY2tTbWl0aC51cGRhdGUoZHQpXG4gICAgICAgIHRoaXMubG9nZ2VyLnVwZGF0ZShkdClcbiAgICAgICAgdGhpcy53b29kQ3V0dGVyLnVwZGF0ZShkdClcbiAgICB9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWlDLCtCQUFZO0lBQTdDOztJQTJCQSxDQUFDO0lBMUJPLDRCQUFNLEdBQWIsVUFBYyxNQUFtQixFQUFFLElBQVk7UUFDOUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QyxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ3hCLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ04sSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0YsQ0FBQztJQUVNLDhCQUFRLEdBQWYsVUFBZ0IsT0FBb0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsV0FBVztJQUNKLG9DQUFjLEdBQXJCLFVBQXNCLE1BQW1CO1FBQ3hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RJLENBQUM7SUFFRCxRQUFRO0lBQ0QsOEJBQVEsR0FBZixVQUFnQixNQUFNO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQTFCVyxXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBMkJ2QjtJQUFELGtCQUFDO0NBM0JELEFBMkJDLENBM0JnQyxFQUFFLENBQUMsU0FBUyxHQTJCNUM7QUEzQlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFZHYW1lT2JqZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblx0cHVibGljIG1vdmVUbyh0YXJnZXQ6IFZHYW1lT2JqZWN0LCBzdGVwOiBudW1iZXIpIHtcblx0XHRsZXQgY3VyRGlzID0gdGhpcy5kaXN0YW5jZVNxdWFyZSh0YXJnZXQpXG5cdFx0bGV0IG1pbkRpcyA9IHN0ZXAgKiBzdGVwXG5cdFx0aWYgKGN1ckRpcyA8PSBtaW5EaXMpIHtcblx0XHRcdHRoaXMubm9kZS54ID0gdGFyZ2V0Lm5vZGUueDtcblx0XHRcdHRoaXMubm9kZS55ID0gdGFyZ2V0Lm5vZGUueTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IHBlcmNlbnQgPSA2IC8gdGhpcy5kaXN0YW5jZSh0YXJnZXQpXG5cdFx0XHR0aGlzLm5vZGUueCA9IHRoaXMubm9kZS54ICsgcGVyY2VudCAqICh0YXJnZXQubm9kZS54IC0gdGhpcy5ub2RlLngpXG5cdFx0XHR0aGlzLm5vZGUueSA9IHRoaXMubm9kZS55ICsgcGVyY2VudCAqICh0YXJnZXQubm9kZS55IC0gdGhpcy5ub2RlLnkpO1xuXHRcdH1cblx0fVxuXHRcblx0cHVibGljIHBvc0VxdWlwKGdhbWVPYmo6IFZHYW1lT2JqZWN0KSB7XG5cdFx0cmV0dXJuIHRoaXMubm9kZS54ID09IGdhbWVPYmoubm9kZS54ICYmIHRoaXMubm9kZS55ID09IGdhbWVPYmoubm9kZS55O1xuXHR9XG5cblx0Lyoq6Led56a755qE5bmz5pa5ICovXG5cdHB1YmxpYyBkaXN0YW5jZVNxdWFyZShvYmplY3Q6IFZHYW1lT2JqZWN0KSB7XG5cdFx0cmV0dXJuIChvYmplY3Qubm9kZS54IC0gdGhpcy5ub2RlLngpICogKG9iamVjdC5ub2RlLnggLSB0aGlzLm5vZGUueCkgKyAob2JqZWN0Lm5vZGUueSAtIHRoaXMubm9kZS55KSAqIChvYmplY3Qubm9kZS55IC0gdGhpcy5ub2RlLnkpO1xuXHR9XG5cblx0Lyoq6Led56a7ICovXG5cdHB1YmxpYyBkaXN0YW5jZShvYmplY3QpIHtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VTcXVhcmUob2JqZWN0KSlcblx0fVxufSJdfQ==
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
/**
 * 状态管理类
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9TdGF0ZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHOzs7QUFHSDtJQVFJLHNCQUFZLEtBQVU7UUFKWixrQkFBYSxHQUFjLElBQUksQ0FBQTtRQUMvQixlQUFVLEdBQWMsSUFBSSxDQUFBO1FBSWxDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO0lBQ3ZCLENBQUM7SUFFTSw4QkFBTyxHQUFkLFVBQWUsUUFBZ0I7UUFDM0IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBRU0sb0NBQWEsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDakMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLG9DQUFhLEdBQXBCLFVBQXFCLEdBQVcsRUFBRSxLQUFnQjtRQUM5QyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUM1QixPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUE7WUFDM0MsT0FBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUE7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxrQ0FBVyxHQUFsQixVQUFtQixHQUFXO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxrQ0FBVyxHQUFsQixVQUFtQixHQUFXLEVBQUUsR0FBZSxFQUFFLE9BQWU7UUFBaEMsb0JBQUEsRUFBQSxVQUFlO1FBQUUsd0JBQUEsRUFBQSxlQUFlO1FBQzVELElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxJQUFJLEdBQUcsRUFBRTtZQUMzRSxPQUFNO1NBQ1Q7UUFDRCxJQUFJLFFBQVEsR0FBYyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzdDLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEdBQUcsQ0FBQyxDQUFBO1lBQzdDLE9BQU07U0FDVDtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7U0FDcEQ7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUE7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUE7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVNLG1DQUFZLEdBQW5CLFVBQW9CLEdBQWU7UUFBZixvQkFBQSxFQUFBLFVBQWU7UUFDL0IsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFFRDs7O09BR0c7SUFDSSw2QkFBTSxHQUFiLFVBQWMsU0FBUztRQUNuQixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzFFLENBQUM7SUFFRDs7O09BR0c7SUFDSSxzQ0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUM3QixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0kseUNBQWtCLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUE7U0FDMUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxZQUFZLENBQUE7SUFDcEMsQ0FBQztJQUVELFlBQVk7SUFDTCxnQ0FBUyxHQUFoQixVQUFpQixRQUFnQjtRQUM3QixPQUFPLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUNoRCxDQUFDO0lBQ0Q7O09BRUc7SUFDSSw0QkFBSyxHQUFaO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDcEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUE7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUE7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7SUFDMUIsQ0FBQztJQUNELGFBQWE7SUFDTiw4QkFBTyxHQUFkO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDcEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUE7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7SUFDMUIsQ0FBQztJQXBIYSx5QkFBWSxHQUFXLFNBQVMsQ0FBQTtJQXFIbEQsbUJBQUM7Q0F0SEQsQUFzSEMsSUFBQTtBQXRIWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog54q25oCB566h55CG57G7XG4gKi9cblxuaW1wb3J0IHsgU3RhdGVCYXNlIH0gZnJvbSBcIi4vc3RhdGUvU3RhdGVCYXNlXCJcbmV4cG9ydCBjbGFzcyBTdGF0ZU1hbmFnZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgSW52YWxpZFN0YXRlOiBzdHJpbmcgPSBcIkludmFsaWRcIlxuXG4gICAgcHJvdGVjdGVkIF9zdGF0ZURpYzogeyBba2V5OiBzdHJpbmddOiBTdGF0ZUJhc2UgfVxuICAgIHByb3RlY3RlZCBfY3VycmVudFN0YXRlOiBTdGF0ZUJhc2UgPSBudWxsXG4gICAgcHJvdGVjdGVkIF9sYXN0U3RhdGU6IFN0YXRlQmFzZSA9IG51bGxcbiAgICBwcm90ZWN0ZWQgX293bmVyOiBjYy5Ob2RlXG5cbiAgICBjb25zdHJ1Y3Rvcihvd25lcjogYW55KSB7XG4gICAgICAgIHRoaXMuX3N0YXRlRGljID0ge31cbiAgICAgICAgdGhpcy5fb3duZXIgPSBvd25lclxuICAgIH1cblxuICAgIHB1YmxpYyBpc0V4aXN0KHN0YXRlS2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fc3RhdGVEaWNbc3RhdGVLZXldXG4gICAgfVxuXG4gICAgcHVibGljIGdldFN0YXRlQnlLZXkoc3RhdGVLZXk6IHN0cmluZyk6IFN0YXRlQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZURpY1tzdGF0ZUtleV1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDms6jlhoznirbmgIFcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJTdGF0ZShrZXk6IHN0cmluZywgc3RhdGU6IFN0YXRlQmFzZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fb3duZXIgIT0gc3RhdGUub3duZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcInN0YXRlbWFjaGluZSDkuI4gc3RhdGUg5omA5pyJ6ICF5LiN5LiA6Ie0XCIpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGF0ZURpY1trZXldID0gc3RhdGVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnp7vpmaTnirbmgIFcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlU3RhdGUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3N0YXRlRGljW2tleV1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmlLnlj5jnirbmgIFcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBpc0ZvcmNlIOW9k+W9k+WJjeeKtuaAgeWSjOimgeWIh+aNoueahOeKtuaAgeebuOWQjOaXtu+8jOaYr+WQpuW8uuWItuWIh+aNoueKtuaAgVxuICAgICAqL1xuICAgIHB1YmxpYyBjaGFuZ2VTdGF0ZShrZXk6IHN0cmluZywgb2JqOiBhbnkgPSBudWxsLCBpc0ZvcmNlID0gZmFsc2UpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpc0ZvcmNlICYmIHRoaXMuX2N1cnJlbnRTdGF0ZSAmJiB0aGlzLl9jdXJyZW50U3RhdGUuZ2V0U3RhdGVLZXkoKSA9PSBrZXkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdTdGF0ZTogU3RhdGVCYXNlID0gdGhpcy5fc3RhdGVEaWNba2V5XVxuICAgICAgICBpZiAobmV3U3RhdGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwidW5yZWdpc3RlciBzdGF0ZSB0eXBlOiBcIiArIGtleSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50U3RhdGUub25FeGl0KG5ld1N0YXRlLmdldFN0YXRlS2V5KCkpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0U3RhdGUgPSB0aGlzLl9jdXJyZW50U3RhdGVcbiAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlID0gbmV3U3RhdGVcbiAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlLm9uRW50ZXIob2JqKVxuICAgIH1cblxuICAgIHB1YmxpYyByZUVudGVyU3RhdGUob2JqOiBhbnkgPSBudWxsKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50U3RhdGUpIHRoaXMuX2N1cnJlbnRTdGF0ZS5vblJlRW50ZXIob2JqKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOabtOaWsFxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZSh0aW1lU3RhbXApOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBudWxsKSB0aGlzLl9jdXJyZW50U3RhdGUub25VcGRhdGUodGltZVN0YW1wKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOW9k+WJjeeKtuaAgVxuICAgICAqIEByZXR1cm5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q3VycmVudFN0YXRlKCk6IFN0YXRlQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50U3RhdGVcbiAgICB9XG4gICAgLyoqXG4gICAgICog5b2T5YmN54q25oCB57G75Z6LXG4gICAgICogQHJldHVyblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDdXJyZW50U3RhdGVLZXkoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFN0YXRlLmdldFN0YXRlS2V5KClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RhdGVNYW5hZ2VyLkludmFsaWRTdGF0ZVxuICAgIH1cblxuICAgIC8qKuW9k+WJjeWcqOeahOeKtuaAgSAqL1xuICAgIHB1YmxpYyBpc0luU3RhdGUoc3RhdGVLZXk6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RhdGVLZXkgPT0gdGhpcy5nZXRDdXJyZW50U3RhdGVLZXkoKVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmuIXpmaRcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50U3RhdGUgIT0gbnVsbCkgdGhpcy5fY3VycmVudFN0YXRlLm9uRXhpdChTdGF0ZU1hbmFnZXIuSW52YWxpZFN0YXRlKVxuICAgICAgICB0aGlzLl9zdGF0ZURpYyA9IHt9XG4gICAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IG51bGxcbiAgICAgICAgdGhpcy5fbGFzdFN0YXRlID0gbnVsbFxuICAgIH1cbiAgICAvKirmuIXpmaTmnIDlkI7nmoTnirbmgIEgKi9cbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBudWxsKSB0aGlzLl9jdXJyZW50U3RhdGUub25FeGl0KFN0YXRlTWFuYWdlci5JbnZhbGlkU3RhdGUpXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IG51bGxcbiAgICAgICAgdGhpcy5fbGFzdFN0YXRlID0gbnVsbFxuICAgIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0VhdGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFFcEQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFBc0MsMEJBQVc7SUFBakQ7O0lBRUEsQ0FBQztJQUZzQixNQUFNO1FBRDVCLE9BQU87T0FDZSxNQUFNLENBRTVCO0lBQUQsYUFBQztDQUZELEFBRUMsQ0FGcUMseUJBQVcsR0FFaEQ7a0JBRnNCLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gJy4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdCc7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCAgIGRlZmF1bHQgY2xhc3MgRWF0aW5nIGV4dGVuZHMgVkdhbWVPYmplY3Qge1xuICAgXG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0VxdWlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUVwRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUFxQyx5QkFBVztJQUFoRDs7SUFFQSxDQUFDO0lBRnNCLEtBQUs7UUFEM0IsT0FBTztPQUNlLEtBQUssQ0FFM0I7SUFBRCxZQUFDO0NBRkQsQUFFQyxDQUZvQyx5QkFBVyxHQUUvQztrQkFGc0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSAnLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0JztcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0ICAgZGVmYXVsdCBjbGFzcyBFcXVpcCBleHRlbmRzIFZHYW1lT2JqZWN0IHtcbiAgIFxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0Vudi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrREFBOEQ7QUFDOUQsbUNBQThCO0FBQzlCLGlDQUE0QjtBQUM1QiwrQkFBMEI7QUFDMUIsaUNBQTRCO0FBQzVCLG1DQUE4QjtBQUM5QixtQ0FBOEI7QUFFeEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUMsdUJBQVk7SUFBN0M7UUFBQSxxRUEyQkM7UUF6QkcsWUFBTSxHQUFXLElBQUksQ0FBQTtRQUdyQixVQUFJLEdBQVcsSUFBSSxDQUFBO1FBR25CLFdBQUssR0FBVyxJQUFJLENBQUE7UUFHcEIsWUFBTSxHQUFXLElBQUksQ0FBQTtRQUdyQixXQUFLLEdBQVcsSUFBSSxDQUFBO1FBR3BCLFlBQU0sR0FBVyxJQUFJLENBQUE7O0lBVXpCLENBQUM7SUFSRyxtQkFBSyxHQUFMO1FBQ0kseUJBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUN0Qyx5QkFBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ2xDLHlCQUFXLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDdEMseUJBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNwQyx5QkFBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3BDLHlCQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDcEMsQ0FBQztJQXhCRDtRQURDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDO3VDQUNJO0lBR3JCO1FBREMsUUFBUSxDQUFDLGNBQUksQ0FBQztxQ0FDSTtJQUduQjtRQURDLFFBQVEsQ0FBQyxlQUFLLENBQUM7c0NBQ0k7SUFHcEI7UUFEQyxRQUFRLENBQUMsZ0JBQU0sQ0FBQzt1Q0FDSTtJQUdyQjtRQURDLFFBQVEsQ0FBQyxlQUFLLENBQUM7c0NBQ0k7SUFHcEI7UUFEQyxRQUFRLENBQUMsZ0JBQU0sQ0FBQzt1Q0FDSTtJQWpCSixHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBMkJ2QjtJQUFELFVBQUM7Q0EzQkQsQUEyQkMsQ0EzQmdDLEVBQUUsQ0FBQyxTQUFTLEdBMkI1QztrQkEzQm9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL3NyYy9hcHAvZ2FtZWRhdGEvRW52aXJvbm1lbnRcIjtcbmltcG9ydCBFYXRpbmcgZnJvbSBcIi4vRWF0aW5nXCI7XG5pbXBvcnQgRXF1aXAgZnJvbSBcIi4vRXF1aXBcIjtcbmltcG9ydCBGaXJlIGZyb20gXCIuL0ZpcmVcIjtcbmltcG9ydCBTbGVlcCBmcm9tIFwiLi9TbGVlcFwiO1xuaW1wb3J0IFN0b3JlQSBmcm9tIFwiLi9TdG9yZUFcIjtcbmltcG9ydCBUb2lsZXQgZnJvbSBcIi4vVG9pbGV0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnYgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShUb2lsZXQpXG4gICAgdG9pbGV0OiBUb2lsZXQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoRmlyZSlcbiAgICBmaXJlOiBUb2lsZXQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoRXF1aXApXG4gICAgZXF1aXA6IFRvaWxldCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShFYXRpbmcpXG4gICAgZWF0aW5nOiBUb2lsZXQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoU2xlZXApXG4gICAgc2xlZXA6IFRvaWxldCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShTdG9yZUEpXG4gICAgc3RvcmVBOiBTdG9yZUEgPSBudWxsXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgRW52aXJvbm1lbnQudG9pbGV0VGFyZ2V0ID0gdGhpcy50b2lsZXRcbiAgICAgICAgRW52aXJvbm1lbnQuZmlyZVRhcmdldCA9IHRoaXMuZmlyZVxuICAgICAgICBFbnZpcm9ubWVudC5lYXRpbmdUYXJnZXQgPSB0aGlzLmVhdGluZ1xuICAgICAgICBFbnZpcm9ubWVudC5lcXVpcFRhcmdldCA9IHRoaXMuZXF1aXBcbiAgICAgICAgRW52aXJvbm1lbnQuc2xlZXBUYXJnZXQgPSB0aGlzLnNsZWVwXG4gICAgICAgIEVudmlyb25tZW50LnN0b3JlQSA9IHRoaXMuc3RvcmVBXG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0ZpcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBRXBELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWtDLHdCQUFXO0lBQTdDOztJQUVBLENBQUM7SUFGb0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQUV4QjtJQUFELFdBQUM7Q0FGRCxBQUVDLENBRmlDLHlCQUFXLEdBRTVDO2tCQUZvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tICcuLi9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3QnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpcmUgZXh0ZW5kcyBWR2FtZU9iamVjdCB7XG5cbn1cbiJdfQ==
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
    GotSleepAction.prototype.checkProceduralPrecondition = function (go) {
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
    GotSleepAction.prototype.perform = function (node) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0dvdFNsZWVwQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBMEQ7QUFHMUQsK0RBQTZEO0FBQzdELGtEQUE0QztBQUM1Qyx1REFBcUQ7QUFHckQ7SUFBb0Msa0NBQVU7SUFLMUM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFSTyxXQUFLLEdBQVksS0FBSyxDQUFBO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsa0JBQVksR0FBVyxDQUFDLENBQUEsQ0FBQyxVQUFVO1FBQ3BDLFVBQUksR0FBVyxDQUFDLENBQUE7UUFHbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQyw0QkFBNEI7UUFDcEYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE7O0lBQ3ZELENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQUVNLCtCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVNLHdDQUFlLEdBQXRCO1FBQ0ksT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ00sb0RBQTJCLEdBQWxDLFVBQW1DLEVBQVc7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBVyxDQUFDLFdBQVcsQ0FBQTtRQUNyQyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFBO1FBQzFCLGlEQUFpRDtRQUNqRCxzREFBc0Q7UUFDdEQscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUUvQiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxvQkFBb0I7UUFDcEIsOENBQThDO1FBQzlDLFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLElBQUk7UUFDSix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBRWpCLHlCQUF5QjtRQUV6QiwwQkFBMEI7SUFDOUIsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQzVELElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDekQsd0RBQXdEO1lBQ3hELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1NBQ3BCO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQTlEQSxBQThEQyxDQTlEbUMsdUJBQVUsR0E4RDdDO0FBOURZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvSUdvYXBcIlxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0XCJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL3NyYy9hcHAvZ2FtZWRhdGEvRW52aXJvbm1lbnRcIlxuaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi9zcmMvdXRpbHMvVGltZVV0aWxcIlxuaW1wb3J0IHsgQWN0aW9uRGF0YVN0YXR1cyB9IGZyb20gXCIuL0FjdGlvbkRhdGFTdGF0dXNcIlxuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHlcIlxuXG5leHBvcnQgY2xhc3MgR290U2xlZXBBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcml2YXRlIGJEb25lOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAxIC8vIHNlY29uZHNcbiAgICBwdWJsaWMgY29zdDogbnVtYmVyID0gMVxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRydWUpIC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpXG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJEb25lID0gZmFsc2VcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYkRvbmVcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGdvOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gRW52aXJvbm1lbnQuc2xlZXBUYXJnZXRcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICE9IG51bGxcbiAgICAgICAgLy8gLy8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHRyZWUgdGhhdCB3ZSBjYW4gY2hvcFxuICAgICAgICAvLyBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcbiAgICAgICAgLy8gbGV0IGNsb3Nlc3Q6IFRyZWVDb21wb25lbnQgPSBudWxsO1xuICAgICAgICAvLyBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cbiAgICAgICAgLy8gZm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xuICAgICAgICAvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgLy8gXHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcbiAgICAgICAgLy8gXHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcbiAgICAgICAgLy8gXHR9IGVsc2Uge1xuICAgICAgICAvLyBcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgIC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG4gICAgICAgIC8vIFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG4gICAgICAgIC8vIFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG4gICAgICAgIC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgIC8vIFx0XHR9XG4gICAgICAgIC8vIFx0fVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChjbG9zZXN0ID09IG51bGwpXG4gICAgICAgIC8vIFx0cmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuICAgICAgICAvLyByZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lID09IDApIHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpXG4gICAgICAgIGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XG4gICAgICAgICAgICAvL2VudGl0eS5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5iRG9uZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==
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
    GotoEquipmentAction.prototype.checkProceduralPrecondition = function (go) {
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
    GotoEquipmentAction.prototype.perform = function (node) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0dvdG9FcXVpcG1lbnRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEwRDtBQUkxRCwrREFBNkQ7QUFDN0Qsa0RBQTRDO0FBQzVDLHVEQUFxRDtBQUdyRDtJQUF5Qyx1Q0FBVTtJQUkvQztRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQVBPLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixrQkFBWSxHQUFXLENBQUMsQ0FBQSxDQUFDLFVBQVU7UUFHdkMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQ0FBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQyw0QkFBNEI7UUFDdEYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7O0lBQ3BELENBQUM7SUFFTSxtQ0FBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQUVNLG9DQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVNLDZDQUFlLEdBQXRCO1FBQ0ksT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ00seURBQTJCLEdBQWxDLFVBQW1DLEVBQVc7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBVyxDQUFDLFdBQVcsQ0FBQTtRQUNyQyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFBO1FBQzFCLGlEQUFpRDtRQUNqRCxzREFBc0Q7UUFDdEQscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUUvQiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxvQkFBb0I7UUFDcEIsOENBQThDO1FBQzlDLFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLElBQUk7UUFDSix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBRWpCLHlCQUF5QjtRQUV6QiwwQkFBMEI7SUFDOUIsQ0FBQztJQUVNLHFDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRTVELElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDekQscURBQXFEO1lBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1NBQ3BCO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQTlEQSxBQThEQyxDQTlEd0MsdUJBQVUsR0E4RGxEO0FBOURZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWdlbnRcIlxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCJcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCJcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25EYXRhU3RhdHVzXCJcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4vRW50aXR5XCJcblxuZXhwb3J0IGNsYXNzIEdvdG9FcXVpcG1lbnRBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcml2YXRlIGJEb25lOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAyIC8vIHNlY29uZHNcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpIC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIHRydWUpXG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJEb25lID0gZmFsc2VcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYkRvbmVcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGdvOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gRW52aXJvbm1lbnQuZXF1aXBUYXJnZXRcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICE9IG51bGxcbiAgICAgICAgLy8gLy8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHRyZWUgdGhhdCB3ZSBjYW4gY2hvcFxuICAgICAgICAvLyBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcbiAgICAgICAgLy8gbGV0IGNsb3Nlc3Q6IFRyZWVDb21wb25lbnQgPSBudWxsO1xuICAgICAgICAvLyBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cbiAgICAgICAgLy8gZm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xuICAgICAgICAvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgLy8gXHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcbiAgICAgICAgLy8gXHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcbiAgICAgICAgLy8gXHR9IGVsc2Uge1xuICAgICAgICAvLyBcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgIC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG4gICAgICAgIC8vIFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG4gICAgICAgIC8vIFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG4gICAgICAgIC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgIC8vIFx0XHR9XG4gICAgICAgIC8vIFx0fVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChjbG9zZXN0ID09IG51bGwpXG4gICAgICAgIC8vIFx0cmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuICAgICAgICAvLyByZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lID09IDApIHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpXG5cbiAgICAgICAgaWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy53b3JrRHVyYXRpb24pIHtcbiAgICAgICAgICAgIC8vZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIHRydWUpXG4gICAgICAgICAgICB0aGlzLmJEb25lID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIl19
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
    GotoEatAction.prototype.perform = function (node) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0dvdG9FYXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEwRDtBQUcxRCwrREFBNkQ7QUFDN0Qsa0RBQTRDO0FBQzVDLHVEQUFxRDtBQUVyRDtJQUFtQyxpQ0FBVTtJQUt6QztRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQVJPLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixrQkFBWSxHQUFXLENBQUMsQ0FBQSxDQUFDLFVBQVU7UUFDcEMsVUFBSSxHQUFXLENBQUMsQ0FBQTtRQUduQixLQUFJLENBQUMsZUFBZSxDQUFDLG1DQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDLDRCQUE0QjtRQUNwRixLQUFJLENBQUMsU0FBUyxDQUFDLG1DQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTs7SUFDdkQsQ0FBQztJQUVNLDZCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBRU0sdUNBQWUsR0FBdEI7UUFDSSxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFTSxtREFBMkIsR0FBbEMsVUFBbUMsS0FBYTtRQUM1QyxPQUFPLEtBQUssQ0FBQTtRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcseUJBQVcsQ0FBQyxZQUFZLENBQUE7UUFDdEMsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQTtRQUMxQixpREFBaUQ7UUFDakQsc0RBQXNEO1FBQ3RELHFDQUFxQztRQUNyQywrQkFBK0I7UUFFL0IsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQix1Q0FBdUM7UUFDdkMsb0JBQW9CO1FBQ3BCLDhDQUE4QztRQUM5QyxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLG1EQUFtRDtRQUNuRCw4QkFBOEI7UUFDOUIsc0NBQXNDO1FBQ3RDLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsTUFBTTtRQUNOLEtBQUs7UUFDTCxJQUFJO1FBQ0osdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUVqQix5QkFBeUI7UUFFekIsMEJBQTBCO0lBQzlCLENBQUM7SUFFTSwrQkFBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUM1RCxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pELHdEQUF3RDtZQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtTQUNwQjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FoRUEsQUFnRUMsQ0FoRWtDLHVCQUFVLEdBZ0U1QztBQWhFWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCJcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCJcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25EYXRhU3RhdHVzXCJcblxuZXhwb3J0IGNsYXNzIEdvdG9FYXRBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcml2YXRlIGJEb25lOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAyIC8vIHNlY29uZHNcbiAgICBwdWJsaWMgY29zdDogbnVtYmVyID0gMVxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRydWUpIC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpXG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJEb25lID0gZmFsc2VcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYkRvbmVcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6Y2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgdGhpcy50YXJnZXQgPSBFbnZpcm9ubWVudC5lYXRpbmdUYXJnZXRcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICE9IG51bGxcbiAgICAgICAgLy8gLy8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHRyZWUgdGhhdCB3ZSBjYW4gY2hvcFxuICAgICAgICAvLyBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcbiAgICAgICAgLy8gbGV0IGNsb3Nlc3Q6IFRyZWVDb21wb25lbnQgPSBudWxsO1xuICAgICAgICAvLyBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cbiAgICAgICAgLy8gZm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xuICAgICAgICAvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgLy8gXHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcbiAgICAgICAgLy8gXHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcbiAgICAgICAgLy8gXHR9IGVsc2Uge1xuICAgICAgICAvLyBcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgIC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG4gICAgICAgIC8vIFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG4gICAgICAgIC8vIFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG4gICAgICAgIC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgIC8vIFx0XHR9XG4gICAgICAgIC8vIFx0fVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChjbG9zZXN0ID09IG51bGwpXG4gICAgICAgIC8vIFx0cmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuICAgICAgICAvLyByZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lID09IDApIHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpXG4gICAgICAgIGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XG4gICAgICAgICAgICAvL2VudGl0eS5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5iRG9uZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==
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
    GotoToiletAction.prototype.checkProceduralPrecondition = function (go) {
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
    GotoToiletAction.prototype.perform = function (node) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0dvdG9Ub2lsZXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEwRDtBQUMxRCwrREFBNkQ7QUFDN0Qsa0RBQTRDO0FBQzVDLHVEQUFxRDtBQUVyRDtJQUFzQyxvQ0FBVTtJQUk1QztRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQU5PLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixrQkFBWSxHQUFXLENBQUMsQ0FBQSxDQUFDLFVBQVU7UUFHdkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7O0lBQ3JELENBQUM7SUFFTSxnQ0FBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQUVNLGlDQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVNLDBDQUFlLEdBQXRCO1FBQ0ksT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ00sc0RBQTJCLEdBQWxDLFVBQW1DLEVBQVc7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBVyxDQUFDLFlBQVksQ0FBQTtRQUN0QyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFBO1FBQzFCLGlEQUFpRDtRQUNqRCxzREFBc0Q7UUFDdEQscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUUvQiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxvQkFBb0I7UUFDcEIsOENBQThDO1FBQzlDLFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLElBQUk7UUFDSix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBRWpCLHlCQUF5QjtRQUV6QiwwQkFBMEI7SUFDOUIsQ0FBQztJQUVNLGtDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRTVELElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDekQsc0RBQXNEO1lBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1NBQ3BCO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQTdEQSxBQTZEQyxDQTdEcUMsdUJBQVUsR0E2RC9DO0FBN0RZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9nYW1lZGF0YS9FbnZpcm9ubWVudFwiXG5pbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uL3NyYy91dGlscy9UaW1lVXRpbFwiXG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uRGF0YVN0YXR1c1wiXG5cbmV4cG9ydCBjbGFzcyBHb3RvVG9pbGV0QWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIHdvcmtEdXJhdGlvbjogbnVtYmVyID0gMiAvLyBzZWNvbmRzXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMuaXNUb2xpZXRPaywgdHJ1ZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYkRvbmUgPSBmYWxzZVxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IDBcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNEb25lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iRG9uZVxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oZ286IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBFbnZpcm9ubWVudC50b2lsZXRUYXJnZXRcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICE9IG51bGxcbiAgICAgICAgLy8gLy8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHRyZWUgdGhhdCB3ZSBjYW4gY2hvcFxuICAgICAgICAvLyBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcbiAgICAgICAgLy8gbGV0IGNsb3Nlc3Q6IFRyZWVDb21wb25lbnQgPSBudWxsO1xuICAgICAgICAvLyBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cbiAgICAgICAgLy8gZm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xuICAgICAgICAvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgLy8gXHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcbiAgICAgICAgLy8gXHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcbiAgICAgICAgLy8gXHR9IGVsc2Uge1xuICAgICAgICAvLyBcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgIC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG4gICAgICAgIC8vIFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG4gICAgICAgIC8vIFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG4gICAgICAgIC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgIC8vIFx0XHR9XG4gICAgICAgIC8vIFx0fVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChjbG9zZXN0ID09IG51bGwpXG4gICAgICAgIC8vIFx0cmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuICAgICAgICAvLyByZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lID09IDApIHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpXG5cbiAgICAgICAgaWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy53b3JrRHVyYXRpb24pIHtcbiAgICAgICAgICAgIC8vZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1RvbGlldE9rLCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5iRG9uZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL1RvaWxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFFcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBb0MsMEJBQVc7SUFBL0M7O0lBRUEsQ0FBQztJQUZvQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBRTFCO0lBQUQsYUFBQztDQUZELEFBRUMsQ0FGbUMseUJBQVcsR0FFOUM7a0JBRm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gJy4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdCc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9pbGV0IGV4dGVuZHMgVkdhbWVPYmplY3Qge1xuXG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL1NsZWVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUVwRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUUxQztJQUFxQyx5QkFBVztJQUFoRDs7SUFFQSxDQUFDO0lBRnNCLEtBQUs7UUFEM0IsT0FBTztPQUNlLEtBQUssQ0FFM0I7SUFBRCxZQUFDO0NBRkQsQUFFQyxDQUZvQyx5QkFBVyxHQUUvQztrQkFGc0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSAnLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0JztcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0ICAgZGVmYXVsdCBjbGFzcyBTbGVlcCBleHRlbmRzIFZHYW1lT2JqZWN0IHtcbiAgIFxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0FjdGlvbkRhdGFTdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQU9BLENBQUM7SUFOYywyQkFBVSxHQUFHLFlBQVksQ0FBQztJQUMxQiw2QkFBWSxHQUFHLGNBQWMsQ0FBQTtJQUM3QiwwQkFBUyxHQUFHLFdBQVcsQ0FBQTtJQUN2Qix5QkFBUSxHQUFHLFVBQVUsQ0FBQTtJQUNyQiwwQkFBUyxHQUFHLFdBQVcsQ0FBQTtJQUN2Qix3QkFBTyxHQUFHLFNBQVMsQ0FBQTtJQUNsQyx1QkFBQztDQVBELEFBT0MsSUFBQTtBQVBZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBY3Rpb25EYXRhU3RhdHVzIHtcblx0cHVibGljIHN0YXRpYyBpc1RvbGlldE9rID0gXCJpc1RvbGlldE9rXCI7XG5cdHB1YmxpYyBzdGF0aWMgaXNDYW5PdXRmaXJlID0gXCJpc0Nhbk91dGZpcmVcIlxuXHRwdWJsaWMgc3RhdGljIGlzRXF1aXBPayA9IFwiaXNFcXVpcE9rXCJcblx0cHVibGljIHN0YXRpYyBpc0ZpcmVPayA9IFwiaXNGaXJlT2tcIlxuXHRwdWJsaWMgc3RhdGljIGlzU2xlZXBPayA9IFwiaXNTbGVlcE9rXCJcblx0cHVibGljIHN0YXRpYyBvdXRGaXJlID0gXCJvdXRGaXJlXCJcbn0iXX0=
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
    ActionBuyShopItem.prototype.checkProceduralPrecondition = function (node) {
        if (Environment_1.Environment.storeA.isHaveGoods()) {
            return true;
        }
    };
    ActionBuyShopItem.prototype.perform = function (node) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL2FjdGlvbnMvQWN0aW9uQnV5U2hvcEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE2RDtBQUk3RCxrRUFBZ0U7QUFDaEUscURBQStDO0FBSS9DO0lBQXVDLHFDQUFVO0lBSzdDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBTk8sV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFBO1FBQ3JCLGtCQUFZLEdBQVcsQ0FBQyxDQUFBLENBQUMsVUFBVTtRQUNwQyxVQUFJLEdBQVcsQ0FBQyxDQUFBOztJQUd2QixDQUFDO0lBRU0saUNBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFTSxrQ0FBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFTSwyQ0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVNLHVEQUEyQixHQUFsQyxVQUFtQyxJQUFhO1FBQzVDLElBQUkseUJBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUE7U0FDZDtJQUNMLENBQUM7SUFFTSxtQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUU1RCxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pELHdEQUF3RDtZQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtTQUNwQjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsQ0FyQ3NDLHVCQUFVLEdBcUNoRDtBQXJDWSw4Q0FBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFnZW50XCJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcFwiXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3RcIlxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9nYW1lZGF0YS9FbnZpcm9ubWVudFwiXG5pbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uLy4uL3NyYy91dGlscy9UaW1lVXRpbFwiXG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4uL0FjdGlvbkRhdGFTdGF0dXNcIlxuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vRW50aXR5XCJcblxuZXhwb3J0IGNsYXNzIEFjdGlvbkJ1eVNob3BJdGVtIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIHdvcmtEdXJhdGlvbjogbnVtYmVyID0gMiAvLyBzZWNvbmRzXG4gICAgcHVibGljIGNvc3Q6IG51bWJlciA9IDFcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYkRvbmUgPSBmYWxzZVxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IDBcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNEb25lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iRG9uZVxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChFbnZpcm9ubWVudC5zdG9yZUEuaXNIYXZlR29vZHMoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lID09IDApIHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpXG5cbiAgICAgICAgaWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy53b3JrRHVyYXRpb24pIHtcbiAgICAgICAgICAgIC8vZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpXG4gICAgICAgICAgICB0aGlzLmJEb25lID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0V4aWdlbmNlRmlyZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQTJEO0FBTTNELHVEQUFzRDtBQUd0RDtJQUF3QyxzQ0FBVTtJQUtqRDtRQUFBLFlBQ0MsaUJBQU8sU0FFUDtRQVBPLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDckMsVUFBSSxHQUFXLENBQUMsQ0FBQTtRQUd0QixLQUFJLENBQUMsU0FBUyxDQUFDLG1DQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDckQsQ0FBQztJQUVNLGtDQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sbUNBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRU0sNENBQWUsR0FBdEI7UUFDQyxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFTSx3REFBMkIsR0FBbEMsVUFBbUMsS0FBZ0I7UUFDbEQsT0FBTyxJQUFJLENBQUE7SUFDWixDQUFDO0lBRU0sb0NBQU8sR0FBZCxVQUFlLEtBQWdCO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLHlCQUFDO0FBQUQsQ0EvQkEsQUErQkMsQ0EvQnVDLHVCQUFVLEdBK0JqRDtBQS9CWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudFwiO1xuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCI7XG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL3NyYy9hcHAvZ2FtZWRhdGEvRW52aXJvbm1lbnRcIjtcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCI7XG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uRGF0YVN0YXR1c1wiO1xuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHlcIjtcblxuZXhwb3J0IGNsYXNzIEV4aWdlbmNlRmlyZUFjdGlvbiBleHRlbmRzIEdvYXBBY3Rpb24ge1xuXHRwcml2YXRlIGJEb25lOiBib29sZWFuID0gZmFsc2Vcblx0cHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAxOyAvLyBzZWNvbmRzXG5cdHB1YmxpYyBjb3N0OiBudW1iZXIgPSAwXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCB0cnVlKTtcblx0fVxuXG5cdHB1YmxpYyByZXNldCgpOiB2b2lkIHtcblx0XHR0aGlzLmJEb25lID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5iRG9uZTtcblx0fVxuXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogR29hcEFnZW50KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWVcblx0fVxuXG5cdHB1YmxpYyBwZXJmb3JtKGFnZW50OiBHb2FwQWdlbnQpOiBib29sZWFuIHtcblx0XHR0aGlzLmJEb25lID0gdHJ1ZVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/ActionBuyerPay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '989b0AXXkJICJ1zdqh6X8AY', 'ActionBuyerPay');
// shopping/ActionBuyerPay.ts

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
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Buyer_1 = require("./Buyer");
var ContextShop_1 = require("./ContextShop");
var ActionBuyerPay = /** @class */ (function (_super) {
    __extends(ActionBuyerPay, _super);
    function ActionBuyerPay() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.addPrecondition("hasProduct1", true);
        _this.addPrecondition("hasProduct2", true);
        _this.addPrecondition("payed", false);
        _this.addEffect("payed", true);
        return _this;
    }
    ActionBuyerPay.prototype.reset = function () {
        this.bDone = false;
    };
    ActionBuyerPay.prototype.isDone = function () {
        return this.bDone;
    };
    ActionBuyerPay.prototype.checkProceduralPrecondition = function (go) {
        if (ContextShop_1.default.checkstand) {
            this.target = ContextShop_1.default.checkstand;
            return true;
        }
        return false;
    };
    ActionBuyerPay.prototype.perform = function (node) {
        var _this = this;
        var buyer = node.getComponent(Buyer_1.Buyer);
        var prods = buyer.getProducts();
        prods.forEach(function (prod, _) {
            _this.target.pay(prod);
        });
        this.bDone = true;
        console.log("结算完成");
        return true;
    };
    ActionBuyerPay.prototype.requiresInRange = function () {
        return true;
    };
    return ActionBuyerPay;
}(GoapAction_1.GoapAction));
exports.default = ActionBuyerPay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9BY3Rpb25CdXllclBheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBMEQ7QUFDMUQsaUNBQStCO0FBRS9CLDZDQUF1QztBQUV2QztJQUE0QyxrQ0FBVTtJQUdsRDtRQUFBLFlBQ0ksaUJBQU8sU0FLVjtRQVJTLFdBQUssR0FBWSxLQUFLLENBQUE7UUFJNUIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDekMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDekMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDcEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7O0lBQ2pDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVELG9EQUEyQixHQUEzQixVQUE0QixFQUFXO1FBQ25DLElBQUkscUJBQVcsQ0FBQyxVQUFVLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBVyxDQUFDLFVBQVUsQ0FBQTtZQUNwQyxPQUFPLElBQUksQ0FBQTtTQUNkO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxJQUFhO1FBQXJCLGlCQVNDO1FBUkcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFLLENBQUMsQ0FBQTtRQUNwQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuQixPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQXpDQSxBQXlDQyxDQXpDMkMsdUJBQVUsR0F5Q3JEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBCdXllciB9IGZyb20gXCIuL0J1eWVyXCJcbmltcG9ydCBDaGVja3N0YW5kIGZyb20gXCIuL0NoZWNrc3RhbmRcIlxuaW1wb3J0IENvbnRleHRTaG9wIGZyb20gXCIuL0NvbnRleHRTaG9wXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQnV5ZXJQYXkgZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcm90ZWN0ZWQgYkRvbmU6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHB1YmxpYyB0YXJnZXQ6IENoZWNrc3RhbmRcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihcImhhc1Byb2R1Y3QxXCIsIHRydWUpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKFwiaGFzUHJvZHVjdDJcIiwgdHJ1ZSlcbiAgICAgICAgdGhpcy5hZGRQcmVjb25kaXRpb24oXCJwYXllZFwiLCBmYWxzZSlcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoXCJwYXllZFwiLCB0cnVlKVxuICAgIH1cblxuICAgIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJEb25lID0gZmFsc2VcbiAgICB9XG5cbiAgICBpc0RvbmUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmJEb25lXG4gICAgfVxuXG4gICAgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGdvOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChDb250ZXh0U2hvcC5jaGVja3N0YW5kKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IENvbnRleHRTaG9wLmNoZWNrc3RhbmRcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGVyZm9ybShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBidXllciA9IG5vZGUuZ2V0Q29tcG9uZW50KEJ1eWVyKVxuICAgICAgICBsZXQgcHJvZHMgPSBidXllci5nZXRQcm9kdWN0cygpXG4gICAgICAgIHByb2RzLmZvckVhY2goKHByb2QsIF8pID0+IHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBheShwcm9kKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmJEb25lID0gdHJ1ZVxuICAgICAgICBjb25zb2xlLmxvZyhcIue7k+eul+WujOaIkFwiKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0ZpcmVOcGMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3RELDBEQUF5RDtBQUN6RCxxREFBZ0Q7QUFFaEQsbUVBQThEO0FBQzlELCtEQUE4RDtBQUV4RCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFxQywyQkFBUztJQUE5QztRQUFBLHFFQTZDQztRQTVDRyxXQUFLLEdBQXVCLElBQUksR0FBRyxFQUFpQixDQUFBOztJQTRDeEQsQ0FBQztJQTFDRyx3QkFBTSxHQUFOO1FBQUEsaUJBZUM7UUFkRyxJQUFJLElBQUksR0FBRyxJQUFJLHNCQUFZLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUE7UUFHL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSw2QkFBbUIsRUFBRSxDQUFBO1FBQ3JDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUVoQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDbEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQTtRQUMvQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFFTSw0QkFBVSxHQUFqQixVQUFrQixRQUFRO1FBQ3RCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQzdCLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNsQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtZQUMzQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7WUFDdEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUE7WUFDeEMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ2pELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQTthQUMxQjtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFFTSxpQ0FBZSxHQUF0QjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLGlCQUFNLE1BQU0sWUFBQyxFQUFFLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBNUNnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBNkMzQjtJQUFELGNBQUM7Q0E3Q0QsQUE2Q0MsQ0E3Q29DLHFCQUFTLEdBNkM3QztrQkE3Q29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSAnLi9BY3Rpb25EYXRhU3RhdHVzJztcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gJy4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWdlbnQnO1xuaW1wb3J0IEdvYXBPdXRGaXJlMiBmcm9tICcuL2dvYXBzL0dvYXBPdXRGaXJlMic7XG5pbXBvcnQgeyBJR29hcCB9IGZyb20gJy4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcCc7XG5pbXBvcnQgR29hcE91dEZpcmVFeGlnZW5jZSBmcm9tICcuL2dvYXBzL0dvYXBPdXRGaXJlRXhpZ2VuY2UnO1xuaW1wb3J0IHsgU3RhdGVFbnVtIH0gZnJvbSAnLi4vc3JjL2FwcC9haS9mc20vc3RhdGUvU3RhdGVFbnVtJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaXJlTnBjIGV4dGVuZHMgR29hcEFnZW50IHtcbiAgICBnb2FwczogTWFwPHN0cmluZywgSUdvYXA+ID0gbmV3IE1hcDxzdHJpbmcsIElHb2FwPigpXG5cbiAgICBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIGxldCBnb2FwID0gbmV3IEdvYXBPdXRGaXJlMigpXG4gICAgICAgIGdvYXAuaW5pdEF2YWxpYWJsZUFjdGlvbnModGhpcylcblxuXG4gICAgICAgIGxldCBnb2FwMiA9IG5ldyBHb2FwT3V0RmlyZUV4aWdlbmNlKClcbiAgICAgICAgZ29hcDIuaW5pdEF2YWxpYWJsZUFjdGlvbnModGhpcylcblxuICAgICAgICB0aGlzLmdvYXBzLnNldChcIm5vcm1hbF9vdXRfZmlyZVwiLCBnb2FwKVxuICAgICAgICB0aGlzLmdvYXBzLnNldChcIm5vcm1hbF9vdXRfZmlyZV9leGlnZW5jZVwiLCBnb2FwMilcbiAgICAgICAgdGhpcy5pbml0KClcbiAgICAgICAgdGhpcy5jaGFuZ2VHb2FwKFwibm9ybWFsX291dF9maXJlXCIpXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMpLmRlbGF5KDEpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VHb2FwKFwibm9ybWFsX291dF9maXJlX2V4aWdlbmNlXCIpXG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlR29hcChnb2FwTmFtZSkge1xuICAgICAgICBsZXQgZ29hcCA9IHRoaXMuZ29hcHMuZ2V0KGdvYXBOYW1lKVxuICAgICAgICBjb25zb2xlLmxvZyhcIuWIh+aNouihjOWKqFwiLCBnb2FwTmFtZSlcbiAgICAgICAgaWYgKGdvYXApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0R29hcChnb2FwKVxuICAgICAgICAgICAgdGhpcy5jbGVhbkF2YWxhYmxlQWN0aW9ucygpXG4gICAgICAgICAgICB0aGlzLmNsZWFuQ3VyQWN0aW9ucygpXG4gICAgICAgICAgICBsZXQgYWN0aW9ucyA9IGdvYXAuZ2V0QXZhbGlhYmxlQWN0aW9ucygpXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYWN0aW9ucy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gYWN0aW9uc1tpbmRleF07XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBY3Rpb24oZWxlbWVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuICAgICAgICBsZXQgZ29hbCA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KCk7XG4gICAgICAgIGdvYWwuc2V0KEFjdGlvbkRhdGFTdGF0dXMub3V0RmlyZSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBnb2FsO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBzdXBlci51cGRhdGUoZHQpXG4gICAgfVxufVxuIl19
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
    GotoFireAction.prototype.checkProceduralPrecondition = function (go) {
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
    GotoFireAction.prototype.perform = function (node) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0dvdG9GaXJlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBMEQ7QUFHMUQsK0RBQTZEO0FBQzdELGtEQUE0QztBQUM1Qyx1REFBcUQ7QUFFckQ7SUFBb0Msa0NBQVU7SUFJMUM7UUFBQSxZQUNJLGlCQUFPLFNBU1Y7UUFiTyxXQUFLLEdBQVksS0FBSyxDQUFBO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsa0JBQVksR0FBVyxDQUFDLENBQUEsQ0FBQyxVQUFVO1FBR3ZDLEtBQUksQ0FBQyxlQUFlLENBQUMsbUNBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBLENBQUMsNEJBQTRCO1FBQ25GLEtBQUksQ0FBQyxlQUFlLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsNEJBQTRCO1FBQ25GLEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzlDLEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2pELEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2xELEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2pELEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2hELEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFBOztJQUN4RCxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFTSx3Q0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNNLG9EQUEyQixHQUFsQyxVQUFtQyxFQUFXO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcseUJBQVcsQ0FBQyxVQUFVLENBQUE7UUFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQTtRQUMxQixpREFBaUQ7UUFDakQsc0RBQXNEO1FBQ3RELHFDQUFxQztRQUNyQywrQkFBK0I7UUFFL0IsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQix1Q0FBdUM7UUFDdkMsb0JBQW9CO1FBQ3BCLDhDQUE4QztRQUM5QyxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLG1EQUFtRDtRQUNuRCw4QkFBOEI7UUFDOUIsc0NBQXNDO1FBQ3RDLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsTUFBTTtRQUNOLEtBQUs7UUFDTCxJQUFJO1FBQ0osdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUVqQix5QkFBeUI7UUFFekIsMEJBQTBCO0lBQzlCLENBQUM7SUFFRCxnQ0FBTyxHQUFQLFVBQVEsSUFBYTtRQUNqQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUM1RCxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1lBQ2pCLHdEQUF3RDtZQUN4RCxxREFBcUQ7WUFDckQsdURBQXVEO1lBQ3ZELHNEQUFzRDtTQUN6RDtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0F0RUEsQUFzRUMsQ0F0RW1DLHVCQUFVLEdBc0U3QztBQXRFWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCJcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCJcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25EYXRhU3RhdHVzXCJcblxuZXhwb3J0IGNsYXNzIEdvdG9GaXJlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIHdvcmtEdXJhdGlvbjogbnVtYmVyID0gMiAvLyBzZWNvbmRzXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIGZhbHNlKSAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCB0cnVlKSAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMub3V0RmlyZSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIGZhbHNlKVxuICAgICAgICB0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIGZhbHNlKVxuICAgICAgICB0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzRXF1aXBPaywgZmFsc2UpXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIGZhbHNlKVxuICAgICAgICB0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJEb25lID0gZmFsc2VcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYkRvbmVcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGdvOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gRW52aXJvbm1lbnQuZmlyZVRhcmdldFxuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQgIT0gbnVsbFxuICAgICAgICAvLyAvLyBUT0RPOmZpbmQgdGhlIG5lYXJlc3QgdHJlZSB0aGF0IHdlIGNhbiBjaG9wXG4gICAgICAgIC8vIGxldCB0cmVlczogVHJlZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQudHJlZUNvbXBzO1xuICAgICAgICAvLyBsZXQgY2xvc2VzdDogVHJlZUNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIC8vIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcblxuICAgICAgICAvLyBmb3IgKGxldCB0cmVlIG9mIHRyZWVzKSB7XG4gICAgICAgIC8vIFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuICAgICAgICAvLyBcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuICAgICAgICAvLyBcdFx0Y2xvc2VzdCA9IHRyZWU7XG4gICAgICAgIC8vIFx0XHRjbG9zZXN0RGlzdCA9IHRyZWUuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuICAgICAgICAvLyBcdH0gZWxzZSB7XG4gICAgICAgIC8vIFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cbiAgICAgICAgLy8gXHRcdGxldCBkaXN0OiBudW1iZXIgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcbiAgICAgICAgLy8gXHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcbiAgICAgICAgLy8gXHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcbiAgICAgICAgLy8gXHRcdFx0Y2xvc2VzdCA9IHRyZWU7XG4gICAgICAgIC8vIFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcbiAgICAgICAgLy8gXHRcdH1cbiAgICAgICAgLy8gXHR9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKGNsb3Nlc3QgPT0gbnVsbClcbiAgICAgICAgLy8gXHRyZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy8gdGhpcy50YXJnZXQgPSBjbG9zZXN0O1xuXG4gICAgICAgIC8vIHJldHVybiBjbG9zZXN0ICE9IG51bGw7XG4gICAgfVxuXG4gICAgcGVyZm9ybShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKSB0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKVxuICAgICAgICBpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLndvcmtEdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5iRG9uZSA9IHRydWVcbiAgICAgICAgICAgIC8vIGVudGl0eS5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNUb2xpZXRPaywgZmFsc2UpXG4gICAgICAgICAgICAvLyBlbnRpdHkubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRWF0T2ssIGZhbHNlKVxuICAgICAgICAgICAgLy8gZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIGZhbHNlKVxuICAgICAgICAgICAgLy8gZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0ZpcmVPaywgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/ActionGetBag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5750Vsf2BFpZuOqhMaaWXT', 'ActionGetBag');
// shopping/ActionGetBag.ts

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
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var ContextShop_1 = require("./ContextShop");
var ActionGetBag = /** @class */ (function (_super) {
    __extends(ActionGetBag, _super);
    function ActionGetBag() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.addPrecondition("hasBag", false);
        _this.addEffect("hasBag", true);
        return _this;
    }
    ActionGetBag.prototype.reset = function () {
        this.bDone = false;
    };
    ActionGetBag.prototype.isDone = function () {
        return this.bDone;
    };
    ActionGetBag.prototype.checkProceduralPrecondition = function (go) {
        if (ContextShop_1.default.bagPoint) {
            this.target = ContextShop_1.default.bagPoint;
            return true;
        }
        return false;
    };
    ActionGetBag.prototype.perform = function (node) {
        this.bDone = true;
        console.log("拿到购物篮");
        return true;
    };
    ActionGetBag.prototype.requiresInRange = function () {
        return true;
    };
    return ActionGetBag;
}(GoapAction_1.GoapAction));
exports.default = ActionGetBag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9BY3Rpb25HZXRCYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQTBEO0FBRTFELDZDQUF1QztBQUV2QztJQUEwQyxnQ0FBVTtJQUdoRDtRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQU5TLFdBQUssR0FBWSxLQUFLLENBQUE7UUFJNUIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDckMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7O0lBQ2xDLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVELGtEQUEyQixHQUEzQixVQUE0QixFQUFXO1FBQ25DLElBQUkscUJBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQTtZQUNsQyxPQUFPLElBQUksQ0FBQTtTQUNkO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUSxJQUFhO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FsQ0EsQUFrQ0MsQ0FsQ3lDLHVCQUFVLEdBa0NuRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IEJhZ1BvaW50IGZyb20gXCIuL0JhZ1BvaW50XCJcbmltcG9ydCBDb250ZXh0U2hvcCBmcm9tIFwiLi9Db250ZXh0U2hvcFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbkdldEJhZyBleHRlbmRzIEdvYXBBY3Rpb24ge1xuICAgIHByb3RlY3RlZCBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHVibGljIHRhcmdldDogQmFnUG9pbnRcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihcImhhc0JhZ1wiLCBmYWxzZSlcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoXCJoYXNCYWdcIiwgdHJ1ZSlcbiAgICB9XG5cbiAgICByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iRG9uZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgaXNEb25lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5iRG9uZVxuICAgIH1cblxuICAgIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihnbzogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoQ29udGV4dFNob3AuYmFnUG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gQ29udGV4dFNob3AuYmFnUG9pbnRcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGVyZm9ybShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMuYkRvbmUgPSB0cnVlXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5ou/5Yiw6LSt54mp56+uXCIpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmVxdWlyZXNJblJhbmdlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL1N0b3JlQS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFFcEQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBb0MsMEJBQVc7SUFBL0M7UUFBQSxxRUFTQztRQVJVLGVBQVMsR0FBRyxFQUFFLENBQUE7O0lBUXpCLENBQUM7SUFQVSxxQkFBSSxHQUFYLFVBQVksQ0FBSztRQUFMLGtCQUFBLEVBQUEsS0FBSztRQUNiLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFFTSw0QkFBVyxHQUFsQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQVJnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBUzFCO0lBQUQsYUFBQztDQVRELEFBU0MsQ0FUbUMseUJBQVcsR0FTOUM7a0JBVG9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gJy4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdCc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmVBIGV4dGVuZHMgVkdhbWVPYmplY3Qge1xuICAgIHB1YmxpYyBzaG9wQ291bnQgPSAxMFxuICAgIHB1YmxpYyBjb3N0KHYgPSAxKSB7XG4gICAgICAgIHRoaXMuc2hvcENvdW50IC09IHZcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNIYXZlR29vZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3BDb3VudCA+IDBcbiAgICB9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL2dvYXBzL0dvYXBPdXRGaXJlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHdEQUF1RDtBQUN2RCw0Q0FBdUM7QUFDdkMsa0RBQWlEO0FBQ2pELDhEQUE2RDtBQUM3RCxvREFBbUQ7QUFDbkQsd0RBQXVEO0FBQ3ZELG9EQUFtRDtBQUVuRDtJQUtJO1FBSEEsYUFBUSxHQUFZLEtBQUssQ0FBQTtRQUN6QixZQUFPLEdBQVksS0FBSyxDQUFBO1FBV3hCLGdCQUFnQjtRQUNSLHFCQUFnQixHQUFpQixFQUFFLENBQUM7UUFUeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLG9CQUFVLEVBQUUsQ0FBQTtRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFJTSwyQ0FBb0IsR0FBM0IsVUFBNEIsU0FBb0I7UUFDNUMsSUFBSSxTQUFTLEdBQVU7WUFDbkIsbUNBQWdCO1lBQ2QsK0JBQWM7WUFDZCw2QkFBYTtZQUNiLHlDQUFtQjtZQUNuQiwrQkFBYztTQUNuQixDQUFBO1FBQ0QsSUFBSSxNQUFrQixDQUFDO1FBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEQsTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7WUFDM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFRCwwQ0FBbUIsR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsU0FBUztJQUNULHNDQUFlLEdBQWY7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0ksSUFBSSxTQUFTLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQy9ELFNBQVMsQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDekYsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM3RixTQUFTLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckYsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN2RixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLFVBQStCO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxJQUF5QixFQUFFLE9BQXFCO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxPQUFtQjtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsVUFBc0IsRUFBRSxLQUFhO1FBQS9DLGlCQXFCQztRQXBCRyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7WUFDckIsT0FBTyxJQUFJLENBQUE7U0FDZDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFDbkIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFBO1lBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3JFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Z0JBQ3BCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO2dCQUNwQixVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDSCxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQy9CLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtTQUNqRDtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUN4QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQTNGQSxBQTJGQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWdlbnRcIjtcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcFwiO1xuaW1wb3J0IHsgQWN0aW9uRGF0YVN0YXR1cyB9IGZyb20gXCIuLi9BY3Rpb25EYXRhU3RhdHVzXCI7XG5pbXBvcnQgRGF0YU1lbW9yeSBmcm9tIFwiLi4vRGF0YU1lbW9yeVwiO1xuaW1wb3J0IHsgR290b0VhdEFjdGlvbiB9IGZyb20gXCIuLi9Hb3RvRWF0QWN0aW9uXCI7XG5pbXBvcnQgeyBHb3RvRXF1aXBtZW50QWN0aW9uIH0gZnJvbSBcIi4uL0dvdG9FcXVpcG1lbnRBY3Rpb25cIjtcbmltcG9ydCB7IEdvdG9GaXJlQWN0aW9uIH0gZnJvbSBcIi4uL0dvdG9GaXJlQWN0aW9uXCI7XG5pbXBvcnQgeyBHb3RvVG9pbGV0QWN0aW9uIH0gZnJvbSBcIi4uL0dvdG9Ub2lsZXRBY3Rpb25cIjtcbmltcG9ydCB7IEdvdFNsZWVwQWN0aW9uIH0gZnJvbSBcIi4uL0dvdFNsZWVwQWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvYXBPdXRGaXJlMiBpbXBsZW1lbnRzIElHb2FwIHtcbiAgICBtZW1vcnk6IERhdGFNZW1vcnlcbiAgICBiTW92ZUVuZDogYm9vbGVhbiA9IGZhbHNlXG4gICAgYk1vdmluZzogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZW1vcnkgPSBuZXcgRGF0YU1lbW9yeSgpXG4gICAgICAgIHRoaXMubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIGZhbHNlKVxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIGZhbHNlKVxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIGZhbHNlKVxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0ZpcmVPaywgZmFsc2UpXG4gICAgICAgIHRoaXMubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzU2xlZXBPaywgZmFsc2UpXG4gICAgfVxuXG4gICAgLyoq5oul5pyJ55qEYWN0aW9ucyAqL1xuICAgIHByaXZhdGUgYXZhbGlhYmxlQWN0aW9uczogR29hcEFjdGlvbltdID0gW107XG4gICAgcHVibGljIGluaXRBdmFsaWFibGVBY3Rpb25zKGdvYXBBZ2VudDogR29hcEFnZW50KSB7XG4gICAgICAgIGxldCBhY3Rpb25DbHM6IGFueVtdID0gW1xuICAgICAgICAgICAgR290b1RvaWxldEFjdGlvblxuICAgICAgICAgICAgLCBHb3RTbGVlcEFjdGlvblxuICAgICAgICAgICAgLCBHb3RvRWF0QWN0aW9uXG4gICAgICAgICAgICAsIEdvdG9FcXVpcG1lbnRBY3Rpb25cbiAgICAgICAgICAgICwgR290b0ZpcmVBY3Rpb25cbiAgICAgICAgXVxuICAgICAgICBsZXQgYWN0aW9uOiBHb2FwQWN0aW9uO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYWN0aW9uQ2xzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBuZXcgYWN0aW9uQ2xzW2ldKClcbiAgICAgICAgICAgIGFjdGlvbi5nb2FwQWdlbnQgPSBnb2FwQWdlbnRcbiAgICAgICAgICAgIHRoaXMuYXZhbGlhYmxlQWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBdmFsaWFibGVBY3Rpb25zKCk6IEdvYXBBY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF2YWxpYWJsZUFjdGlvbnNcbiAgICB9XG5cbiAgICAvLyDor6XorqHliJLnmoTnm67moIdcbiAgICBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XG4gICAgICAgIGxldCBnb2FsID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcbiAgICAgICAgZ29hbC5zZXQoQWN0aW9uRGF0YVN0YXR1cy5vdXRGaXJlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGdvYWxcbiAgICB9XG5cbiAgICBnZXRXb3JsZFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuICAgICAgICBsZXQgd29ybGREYXRhOiBNYXA8c3RyaW5nLCBPYmplY3Q+ID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2spKTtcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgdGhpcy5tZW1vcnkuZ2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlKSk7XG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzRXF1aXBPaykpO1xuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rKSk7XG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1NsZWVwT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzU2xlZXBPaykpO1xuICAgICAgICByZXR1cm4gd29ybGREYXRhO1xuICAgIH1cblxuICAgIHBsYW5GYWlsZWQoZmFpbGVkR29hbDogTWFwPHN0cmluZywgT2JqZWN0Pik6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBsYW5GYWlsZWRcIilcbiAgICB9XG5cbiAgICBwbGFuRm91bmQoZ29hbDogTWFwPHN0cmluZywgT2JqZWN0PiwgYWN0aW9uczogR29hcEFjdGlvbltdKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxhbkZvdW5kXCIpXG4gICAgfVxuXG4gICAgYWN0aW9uc0ZpbmlzaGVkKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFjdGlvbnMgY29tcGxldGVkXCIpO1xuICAgIH1cblxuICAgIHBsYW5BYm9ydGVkKGFib3J0ZXI6IEdvYXBBY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGFuQWJvcnRlZFwiKVxuICAgIH1cblxuICAgIG1vdmVBZ2VudChuZXh0QWN0aW9uOiBHb2FwQWN0aW9uLCBkZWx0YTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBuZXh0QWN0aW9uLnRhcmdldDtcbiAgICAgICAgbGV0IGdvYXBBZ2VudCA9IG5leHRBY3Rpb24uZ29hcEFnZW50O1xuICAgICAgICBpZiAodGhpcy5iTW92ZUVuZCkge1xuICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5iTW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmJNb3ZpbmcgPSB0cnVlXG4gICAgICAgICAgICBsZXQgYWN0aW9ucyA9IFtdXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MubW92ZVRvKDIsIG5ldyBjYy5WZWMyKHRhcmdldC5ub2RlLngsIHRhcmdldC5ub2RlLnkpKSlcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmJNb3ZpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIG5leHRBY3Rpb24uc2V0SW5SYW5nZSh0cnVlKTtcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgZ29hcEFnZW50Lm5vZGUuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgICAgICAgZ29hcEFnZW50Lm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbnMpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYk1vdmVFbmRcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/Buyer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '528f7yNkydCpZXs3AjEbymy', 'Buyer');
// shopping/Buyer.ts

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
exports.Buyer = void 0;
var GoapAgent_1 = require("../src/app/ai/goap/GoapAgent");
var ActionBuyerLeave_1 = require("./ActionBuyerLeave");
var ActionBuyerPay_1 = require("./ActionBuyerPay");
var ActionBuyProduct_1 = require("./ActionBuyProduct");
var ActionGetBag_1 = require("./ActionGetBag");
var GoodsShelf_1 = require("./GoodsShelf");
var ccclass = cc._decorator.ccclass;
var Buyer = /** @class */ (function (_super) {
    __extends(Buyer, _super);
    function Buyer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bMoving = false;
        _this.bMoveEnd = false;
        _this.bPayed = false;
        return _this;
    }
    Buyer.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.needPrdoucts = new Map();
        var needProd = new GoodsShelf_1.Product();
        needProd.amount = 0;
        needProd.cfgId = 1;
        needProd.maxAmount = 10;
        var needProd2 = new GoodsShelf_1.Product();
        needProd2.amount = 0;
        needProd2.cfgId = 2;
        needProd2.maxAmount = 10;
        this.needPrdoucts.set(1, needProd);
        this.needPrdoucts.set(2, needProd2);
        var goapAgent = this.getComponent(GoapAgent_1.GoapAgent);
        goapAgent.setGoap(this);
        this.initAvaliableActions([ActionGetBag_1.default, ActionBuyerPay_1.default, ActionBuyerLeave_1.default]);
    };
    Buyer.prototype.getProducts = function () {
        return this.needPrdoucts;
    };
    Buyer.prototype.initAvaliableActions = function (actionCls) {
        var action;
        this.availableActions = [];
        for (var i = 0, len = actionCls.length; i < len; i++) {
            action = new actionCls[i]();
            this.availableActions.push(action);
        }
        this.availableActions.push(new ActionBuyProduct_1.default(1));
        this.availableActions.push(new ActionBuyProduct_1.default(2));
    };
    Buyer.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    Buyer.prototype.getWorldState = function () {
        var worldData = new Map();
        worldData.set("hasProduct1", this.hasProductFull(1));
        worldData.set("hasProduct2", this.hasProductFull(2));
        worldData.set("payed", this.bPayed);
        worldData.set("leaved", false);
        return worldData;
    };
    Buyer.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set("hasProduct1", true);
        goal.set("hasProduct2", true);
        goal.set("leaved", true);
        return goal;
    };
    Buyer.prototype.planFailed = function (failedGoad) { };
    Buyer.prototype.planFound = function (goal, actions) {
        console.log("Plan found: ", GoapAgent_1.GoapAgent.prettyPrintActionsQueue(actions));
    };
    Buyer.prototype.actionsFinished = function () {
        console.log("Actions completed");
    };
    Buyer.prototype.planAborted = function (aborter) {
        console.log("Plan Aborted: " + GoapAgent_1.GoapAgent.prettyPrintAction(aborter));
    };
    Buyer.prototype.moveAgent = function (nextAction, delta) {
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
    Buyer.prototype.addProduct = function (cfgId, v) {
        var product = this.needPrdoucts.get(cfgId);
        if (!product) {
            return;
        }
        product.amount += v;
        product.amount = Math.min(product.amount, product.maxAmount);
        console.log("buy prod", product.cfgId, product.amount);
    };
    Buyer.prototype.hasProductFull = function (cfgId) {
        var product = this.needPrdoucts.get(cfgId);
        if (!product) {
            throw "unvalid product" + cfgId;
        }
        return product.amount >= product.maxAmount;
    };
    Buyer.prototype.updateBackPack = function () { };
    Buyer = __decorate([
        ccclass
    ], Buyer);
    return Buyer;
}(GoapAgent_1.GoapAgent));
exports.Buyer = Buyer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9CdXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMERBQXdEO0FBRXhELHVEQUFpRDtBQUNqRCxtREFBNkM7QUFDN0MsdURBQWlEO0FBQ2pELCtDQUF5QztBQUN6QywyQ0FBc0M7QUFFOUIsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBa0I7QUFFakM7SUFBMkIseUJBQVM7SUFBcEM7UUFBQSxxRUEySEM7UUExSEcsYUFBTyxHQUFHLEtBQUssQ0FBQTtRQUNmLGNBQVEsR0FBRyxLQUFLLENBQUE7UUFFaEIsWUFBTSxHQUFZLEtBQUssQ0FBQTs7SUF1SDNCLENBQUM7SUF0SFUsc0JBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFBO1FBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQTtRQUM5QyxJQUFJLFFBQVEsR0FBRyxJQUFJLG9CQUFPLEVBQUUsQ0FBQTtRQUM1QixRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNuQixRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNsQixRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQTtRQUV2QixJQUFJLFNBQVMsR0FBRyxJQUFJLG9CQUFPLEVBQUUsQ0FBQTtRQUM3QixTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNwQixTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNuQixTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQTtRQUV4QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBRW5DLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQVMsQ0FBQyxDQUFBO1FBQzVDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFdkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsc0JBQVksRUFBRSx3QkFBYyxFQUFFLDBCQUFnQixDQUFDLENBQUMsQ0FBQTtJQUMvRSxDQUFDO0lBRU0sMkJBQVcsR0FBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDNUIsQ0FBQztJQUVTLG9DQUFvQixHQUE5QixVQUErQixTQUFnQjtRQUMzQyxJQUFJLE1BQU0sQ0FBQTtRQUNWLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUE7UUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTtZQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ3JDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLDBCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLDBCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdkQsQ0FBQztJQUVNLHNCQUFNLEdBQWIsVUFBYyxFQUFVO1FBQ3BCLGlCQUFNLE1BQU0sWUFBQyxFQUFFLENBQUMsQ0FBQTtJQUNwQixDQUFDO0lBRU0sNkJBQWEsR0FBcEI7UUFDSSxJQUFJLFNBQVMsR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUE7UUFDOUQsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BELFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNwRCxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbkMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDOUIsT0FBTyxTQUFTLENBQUE7SUFDcEIsQ0FBQztJQUVNLCtCQUFlLEdBQXRCO1FBQ0ksSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUE7UUFDcEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDeEIsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRU0sMEJBQVUsR0FBakIsVUFBa0IsVUFBK0IsSUFBRyxDQUFDO0lBRTlDLHlCQUFTLEdBQWhCLFVBQWlCLElBQXlCLEVBQUUsT0FBcUI7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUscUJBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUFFTSwrQkFBZSxHQUF0QjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBRU0sMkJBQVcsR0FBbEIsVUFBbUIsT0FBbUI7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBUyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7SUFDeEUsQ0FBQztJQUVNLHlCQUFTLEdBQWhCLFVBQWlCLFVBQXNCLEVBQUUsS0FBYTtRQUF0RCxpQkFzQkM7UUFyQkcsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQTtRQUM5QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtZQUNyQixPQUFPLElBQUksQ0FBQTtTQUNkO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUNuQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUE7WUFDaEIsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDckUsT0FBTyxDQUFDLElBQUksQ0FDUixFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNSLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2dCQUNwQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtnQkFDcEIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMvQixDQUFDLENBQUMsQ0FDTCxDQUFBO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7U0FDNUM7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDeEIsQ0FBQztJQUVNLDBCQUFVLEdBQWpCLFVBQWtCLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDVixPQUFNO1NBQ1Q7UUFFRCxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQTtRQUNuQixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQUVNLDhCQUFjLEdBQXJCLFVBQXNCLEtBQUs7UUFDdkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLE1BQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFBO1NBQ2xDO1FBQ0QsT0FBTyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUE7SUFDOUMsQ0FBQztJQUVNLDhCQUFjLEdBQXJCLGNBQXlCLENBQUM7SUExSGpCLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0EySGpCO0lBQUQsWUFBQztDQTNIRCxBQTJIQyxDQTNIMEIscUJBQVMsR0EySG5DO0FBM0hZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudFwiXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvSUdvYXBcIlxuaW1wb3J0IEFjdGlvbkJ1eWVyTGVhdmUgZnJvbSBcIi4vQWN0aW9uQnV5ZXJMZWF2ZVwiXG5pbXBvcnQgQWN0aW9uQnV5ZXJQYXkgZnJvbSBcIi4vQWN0aW9uQnV5ZXJQYXlcIlxuaW1wb3J0IEFjdGlvbkJ1eVByb2R1Y3QgZnJvbSBcIi4vQWN0aW9uQnV5UHJvZHVjdFwiXG5pbXBvcnQgQWN0aW9uR2V0QmFnIGZyb20gXCIuL0FjdGlvbkdldEJhZ1wiXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vR29vZHNTaGVsZlwiXG5cbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvclxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBCdXllciBleHRlbmRzIEdvYXBBZ2VudCBpbXBsZW1lbnRzIElHb2FwIHtcbiAgICBiTW92aW5nID0gZmFsc2VcbiAgICBiTW92ZUVuZCA9IGZhbHNlXG4gICAgbmVlZFByZG91Y3RzOiBNYXA8bnVtYmVyLCBQcm9kdWN0PlxuICAgIGJQYXllZDogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHVibGljIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKClcbiAgICAgICAgdGhpcy5uZWVkUHJkb3VjdHMgPSBuZXcgTWFwPG51bWJlciwgUHJvZHVjdD4oKVxuICAgICAgICBsZXQgbmVlZFByb2QgPSBuZXcgUHJvZHVjdCgpXG4gICAgICAgIG5lZWRQcm9kLmFtb3VudCA9IDBcbiAgICAgICAgbmVlZFByb2QuY2ZnSWQgPSAxXG4gICAgICAgIG5lZWRQcm9kLm1heEFtb3VudCA9IDEwXG5cbiAgICAgICAgbGV0IG5lZWRQcm9kMiA9IG5ldyBQcm9kdWN0KClcbiAgICAgICAgbmVlZFByb2QyLmFtb3VudCA9IDBcbiAgICAgICAgbmVlZFByb2QyLmNmZ0lkID0gMlxuICAgICAgICBuZWVkUHJvZDIubWF4QW1vdW50ID0gMTBcblxuICAgICAgICB0aGlzLm5lZWRQcmRvdWN0cy5zZXQoMSwgbmVlZFByb2QpXG4gICAgICAgIHRoaXMubmVlZFByZG91Y3RzLnNldCgyLCBuZWVkUHJvZDIpXG5cbiAgICAgICAgbGV0IGdvYXBBZ2VudCA9IHRoaXMuZ2V0Q29tcG9uZW50KEdvYXBBZ2VudClcbiAgICAgICAgZ29hcEFnZW50LnNldEdvYXAodGhpcylcblxuICAgICAgICB0aGlzLmluaXRBdmFsaWFibGVBY3Rpb25zKFtBY3Rpb25HZXRCYWcsIEFjdGlvbkJ1eWVyUGF5LCBBY3Rpb25CdXllckxlYXZlXSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJvZHVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5lZWRQcmRvdWN0c1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0QXZhbGlhYmxlQWN0aW9ucyhhY3Rpb25DbHM6IGFueVtdKSB7XG4gICAgICAgIGxldCBhY3Rpb25cbiAgICAgICAgdGhpcy5hdmFpbGFibGVBY3Rpb25zID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFjdGlvbkNscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgYWN0aW9uID0gbmV3IGFjdGlvbkNsc1tpXSgpXG4gICAgICAgICAgICB0aGlzLmF2YWlsYWJsZUFjdGlvbnMucHVzaChhY3Rpb24pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmF2YWlsYWJsZUFjdGlvbnMucHVzaChuZXcgQWN0aW9uQnV5UHJvZHVjdCgxKSlcbiAgICAgICAgdGhpcy5hdmFpbGFibGVBY3Rpb25zLnB1c2gobmV3IEFjdGlvbkJ1eVByb2R1Y3QoMikpXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShkdClcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0V29ybGRTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+IHtcbiAgICAgICAgbGV0IHdvcmxkRGF0YTogTWFwPHN0cmluZywgT2JqZWN0PiA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KClcbiAgICAgICAgd29ybGREYXRhLnNldChcImhhc1Byb2R1Y3QxXCIsIHRoaXMuaGFzUHJvZHVjdEZ1bGwoMSkpXG4gICAgICAgIHdvcmxkRGF0YS5zZXQoXCJoYXNQcm9kdWN0MlwiLCB0aGlzLmhhc1Byb2R1Y3RGdWxsKDIpKVxuICAgICAgICB3b3JsZERhdGEuc2V0KFwicGF5ZWRcIiwgdGhpcy5iUGF5ZWQpXG4gICAgICAgIHdvcmxkRGF0YS5zZXQoXCJsZWF2ZWRcIiwgZmFsc2UpXG4gICAgICAgIHJldHVybiB3b3JsZERhdGFcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuICAgICAgICBsZXQgZ29hbCA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KClcbiAgICAgICAgZ29hbC5zZXQoXCJoYXNQcm9kdWN0MVwiLCB0cnVlKVxuICAgICAgICBnb2FsLnNldChcImhhc1Byb2R1Y3QyXCIsIHRydWUpXG4gICAgICAgIGdvYWwuc2V0KFwibGVhdmVkXCIsIHRydWUpXG4gICAgICAgIHJldHVybiBnb2FsXG4gICAgfVxuXG4gICAgcHVibGljIHBsYW5GYWlsZWQoZmFpbGVkR29hZDogTWFwPHN0cmluZywgT2JqZWN0Pikge31cblxuICAgIHB1YmxpYyBwbGFuRm91bmQoZ29hbDogTWFwPHN0cmluZywgT2JqZWN0PiwgYWN0aW9uczogR29hcEFjdGlvbltdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxhbiBmb3VuZDogXCIsIEdvYXBBZ2VudC5wcmV0dHlQcmludEFjdGlvbnNRdWV1ZShhY3Rpb25zKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0aW9uc0ZpbmlzaGVkKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFjdGlvbnMgY29tcGxldGVkXCIpXG4gICAgfVxuXG4gICAgcHVibGljIHBsYW5BYm9ydGVkKGFib3J0ZXI6IEdvYXBBY3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGFuIEFib3J0ZWQ6IFwiICsgR29hcEFnZW50LnByZXR0eVByaW50QWN0aW9uKGFib3J0ZXIpKVxuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlQWdlbnQobmV4dEFjdGlvbjogR29hcEFjdGlvbiwgZGVsdGE6IG51bWJlcikge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gbmV4dEFjdGlvbi50YXJnZXRcbiAgICAgICAgaWYgKHRoaXMuYk1vdmVFbmQpIHtcbiAgICAgICAgICAgIHRoaXMuYk1vdmVFbmQgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYk1vdmluZykge1xuICAgICAgICAgICAgdGhpcy5iTW92aW5nID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IGFjdGlvbnMgPSBbXVxuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLm1vdmVUbygyLCBuZXcgY2MuVmVjMih0YXJnZXQubm9kZS54LCB0YXJnZXQubm9kZS55KSkpXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJNb3ZlRW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJNb3ZpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBuZXh0QWN0aW9uLnNldEluUmFuZ2UodHJ1ZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKClcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9ucykpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5iTW92ZUVuZFxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRQcm9kdWN0KGNmZ0lkLCB2KSB7XG4gICAgICAgIGxldCBwcm9kdWN0ID0gdGhpcy5uZWVkUHJkb3VjdHMuZ2V0KGNmZ0lkKVxuICAgICAgICBpZiAoIXByb2R1Y3QpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgcHJvZHVjdC5hbW91bnQgKz0gdlxuICAgICAgICBwcm9kdWN0LmFtb3VudCA9IE1hdGgubWluKHByb2R1Y3QuYW1vdW50LCBwcm9kdWN0Lm1heEFtb3VudClcblxuICAgICAgICBjb25zb2xlLmxvZyhcImJ1eSBwcm9kXCIsIHByb2R1Y3QuY2ZnSWQsIHByb2R1Y3QuYW1vdW50KVxuICAgIH1cblxuICAgIHB1YmxpYyBoYXNQcm9kdWN0RnVsbChjZmdJZCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcHJvZHVjdCA9IHRoaXMubmVlZFByZG91Y3RzLmdldChjZmdJZClcbiAgICAgICAgaWYgKCFwcm9kdWN0KSB7XG4gICAgICAgICAgICB0aHJvdyBcInVudmFsaWQgcHJvZHVjdFwiICsgY2ZnSWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvZHVjdC5hbW91bnQgPj0gcHJvZHVjdC5tYXhBbW91bnRcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQmFja1BhY2soKSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/BagPoint.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '355fe32qSRMCoRBYg6FFndn', 'BagPoint');
// shopping/BagPoint.ts

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
var BagPoint = /** @class */ (function (_super) {
    __extends(BagPoint, _super);
    function BagPoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gold = 0;
        return _this;
    }
    BagPoint.prototype.onLoad = function () { };
    BagPoint = __decorate([
        ccclass
    ], BagPoint);
    return BagPoint;
}(VGameObject_1.VGameObject));
exports.default = BagPoint;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9CYWdQb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBeUQ7QUFDbkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFFM0M7SUFBc0MsNEJBQVc7SUFBakQ7UUFBQSxxRUFHQztRQUZHLFVBQUksR0FBVyxDQUFDLENBQUE7O0lBRXBCLENBQUM7SUFEYSx5QkFBTSxHQUFoQixjQUEwQixDQUFDO0lBRlYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQUc1QjtJQUFELGVBQUM7Q0FIRCxBQUdDLENBSHFDLHlCQUFXLEdBR2hEO2tCQUhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0XCJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWdQb2ludCBleHRlbmRzIFZHYW1lT2JqZWN0IHtcbiAgICBnb2xkOiBudW1iZXIgPSAwXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/Checkstand.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '039b5GmIS9Iu4vB+2I1hx0n', 'Checkstand');
// shopping/Checkstand.ts

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
var Checkstand = /** @class */ (function (_super) {
    __extends(Checkstand, _super);
    function Checkstand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gold = 0;
        return _this;
    }
    Checkstand.prototype.onLoad = function () { };
    Checkstand.prototype.pay = function (prod) {
        if (!prod) {
            return;
        }
        this.gold += prod.amount * 10;
        prod.amount = 0;
    };
    Checkstand = __decorate([
        ccclass
    ], Checkstand);
    return Checkstand;
}(VGameObject_1.VGameObject));
exports.default = Checkstand;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9DaGVja3N0YW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF5RDtBQUVuRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF3Qyw4QkFBVztJQUFuRDtRQUFBLHFFQVlDO1FBWEcsVUFBSSxHQUFXLENBQUMsQ0FBQTs7SUFXcEIsQ0FBQztJQVZhLDJCQUFNLEdBQWhCLGNBQTBCLENBQUM7SUFFcEIsd0JBQUcsR0FBVixVQUFXLElBQWE7UUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU07U0FDVDtRQUVELElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUE7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFDbkIsQ0FBQztJQVhnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBWTlCO0lBQUQsaUJBQUM7Q0FaRCxBQVlDLENBWnVDLHlCQUFXLEdBWWxEO2tCQVpvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0XCJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi9Hb29kc1NoZWxmXCJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tzdGFuZCBleHRlbmRzIFZHYW1lT2JqZWN0IHtcbiAgICBnb2xkOiBudW1iZXIgPSAwXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHt9XG5cbiAgICBwdWJsaWMgcGF5KHByb2Q6IFByb2R1Y3QpIHtcbiAgICAgICAgaWYgKCFwcm9kKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ29sZCArPSBwcm9kLmFtb3VudCAqIDEwXG4gICAgICAgIHByb2QuYW1vdW50ID0gMFxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/ContextShop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bcdfdFXGOFA7IKPqcag3j0p', 'ContextShop');
// shopping/ContextShop.ts

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
var BagPoint_1 = require("./BagPoint");
var Checkstand_1 = require("./Checkstand");
var GoodsShelf_1 = require("./GoodsShelf");
var LeavePoint_1 = require("./LeavePoint");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ContextShop = /** @class */ (function (_super) {
    __extends(ContextShop, _super);
    function ContextShop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.goodsShelf = null;
        _this.goodsShelf2 = null;
        _this.checkstand = null;
        _this.leavePoint = null;
        _this.bagPoint = null;
        return _this;
    }
    ContextShop_1 = ContextShop;
    ContextShop.prototype.onLoad = function () {
        ContextShop_1.goodsShelf = this.goodsShelf;
        ContextShop_1.goodsShelf2 = this.goodsShelf2;
        ContextShop_1.checkstand = this.checkstand;
        ContextShop_1.leavePoint = this.leavePoint;
        ContextShop_1.bagPoint = this.bagPoint;
    };
    var ContextShop_1;
    __decorate([
        property(GoodsShelf_1.default)
    ], ContextShop.prototype, "goodsShelf", void 0);
    __decorate([
        property(GoodsShelf_1.default)
    ], ContextShop.prototype, "goodsShelf2", void 0);
    __decorate([
        property(Checkstand_1.default)
    ], ContextShop.prototype, "checkstand", void 0);
    __decorate([
        property(LeavePoint_1.default)
    ], ContextShop.prototype, "leavePoint", void 0);
    __decorate([
        property(BagPoint_1.default)
    ], ContextShop.prototype, "bagPoint", void 0);
    ContextShop = ContextShop_1 = __decorate([
        ccclass
    ], ContextShop);
    return ContextShop;
}(cc.Component));
exports.default = ContextShop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9Db250ZXh0U2hvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBaUM7QUFDakMsMkNBQXFDO0FBQ3JDLDJDQUFxQztBQUNyQywyQ0FBcUM7QUFFL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFHM0M7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUE2QkM7UUEzQkcsZ0JBQVUsR0FBZSxJQUFJLENBQUE7UUFHN0IsaUJBQVcsR0FBZSxJQUFJLENBQUE7UUFHOUIsZ0JBQVUsR0FBZSxJQUFJLENBQUE7UUFHN0IsZ0JBQVUsR0FBZSxJQUFJLENBQUE7UUFHN0IsY0FBUSxHQUFhLElBQUksQ0FBQTs7SUFlN0IsQ0FBQztvQkE3Qm9CLFdBQVc7SUFzQmxCLDRCQUFNLEdBQWhCO1FBQ0ksYUFBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ3hDLGFBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQTtRQUMxQyxhQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUE7UUFDeEMsYUFBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ3hDLGFBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUN4QyxDQUFDOztJQTFCRDtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO21EQUNRO0lBRzdCO1FBREMsUUFBUSxDQUFDLG9CQUFVLENBQUM7b0RBQ1M7SUFHOUI7UUFEQyxRQUFRLENBQUMsb0JBQVUsQ0FBQzttREFDUTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxvQkFBVSxDQUFDO21EQUNRO0lBRzdCO1FBREMsUUFBUSxDQUFDLGtCQUFRLENBQUM7aURBQ007SUFkUixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBNkIvQjtJQUFELGtCQUFDO0NBN0JELEFBNkJDLENBN0J3QyxFQUFFLENBQUMsU0FBUyxHQTZCcEQ7a0JBN0JvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhZ1BvaW50IGZyb20gXCIuL0JhZ1BvaW50XCJcbmltcG9ydCBDaGVja3N0YW5kIGZyb20gXCIuL0NoZWNrc3RhbmRcIlxuaW1wb3J0IEdvb2RzU2hlbGYgZnJvbSBcIi4vR29vZHNTaGVsZlwiXG5pbXBvcnQgTGVhdmVQb2ludCBmcm9tIFwiLi9MZWF2ZVBvaW50XCJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGV4dFNob3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShHb29kc1NoZWxmKVxuICAgIGdvb2RzU2hlbGY6IEdvb2RzU2hlbGYgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoR29vZHNTaGVsZilcbiAgICBnb29kc1NoZWxmMjogR29vZHNTaGVsZiA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShDaGVja3N0YW5kKVxuICAgIGNoZWNrc3RhbmQ6IENoZWNrc3RhbmQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoTGVhdmVQb2ludClcbiAgICBsZWF2ZVBvaW50OiBMZWF2ZVBvaW50ID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KEJhZ1BvaW50KVxuICAgIGJhZ1BvaW50OiBCYWdQb2ludCA9IG51bGxcblxuICAgIHB1YmxpYyBzdGF0aWMgZ29vZHNTaGVsZjogR29vZHNTaGVsZlxuICAgIHB1YmxpYyBzdGF0aWMgZ29vZHNTaGVsZjI6IEdvb2RzU2hlbGZcbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrc3RhbmQ6IENoZWNrc3RhbmRcbiAgICBwdWJsaWMgc3RhdGljIGxlYXZlUG9pbnQ6IExlYXZlUG9pbnRcbiAgICBwdWJsaWMgc3RhdGljIGJhZ1BvaW50OiBCYWdQb2ludFxuXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgQ29udGV4dFNob3AuZ29vZHNTaGVsZiA9IHRoaXMuZ29vZHNTaGVsZlxuICAgICAgICBDb250ZXh0U2hvcC5nb29kc1NoZWxmMiA9IHRoaXMuZ29vZHNTaGVsZjJcbiAgICAgICAgQ29udGV4dFNob3AuY2hlY2tzdGFuZCA9IHRoaXMuY2hlY2tzdGFuZFxuICAgICAgICBDb250ZXh0U2hvcC5sZWF2ZVBvaW50ID0gdGhpcy5sZWF2ZVBvaW50XG4gICAgICAgIENvbnRleHRTaG9wLmJhZ1BvaW50ID0gdGhpcy5iYWdQb2ludFxuICAgIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvTmV3U2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBaUJDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixVQUFJLEdBQVcsT0FBTyxDQUFDOztRQVV2QixpQkFBaUI7SUFDckIsQ0FBQztJQVRHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNJO0lBR3ZCO1FBREMsUUFBUTswQ0FDYztJQU5OLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpQjVCO0lBQUQsZUFBQztDQWpCRCxBQWlCQyxDQWpCcUMsRUFBRSxDQUFDLFNBQVMsR0FpQmpEO2tCQWpCb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgdGV4dDogc3RyaW5nID0gJ2hlbGxvJztcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/ActionBuyProduct.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cca27Hf45VMLIOSVgKg70G0', 'ActionBuyProduct');
// shopping/ActionBuyProduct.ts

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
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Buyer_1 = require("./Buyer");
var ContextShop_1 = require("./ContextShop");
var ActionBuyProduct = /** @class */ (function (_super) {
    __extends(ActionBuyProduct, _super);
    function ActionBuyProduct(cfgId) {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.cfgId = cfgId;
        _this.addPrecondition("hasProduct" + cfgId, false);
        _this.addEffect("hasProduct" + cfgId, true);
        return _this;
    }
    ActionBuyProduct.prototype.reset = function () {
        this.bDone = false;
    };
    ActionBuyProduct.prototype.isDone = function () {
        return this.bDone;
    };
    ActionBuyProduct.prototype.checkProceduralPrecondition = function (go) {
        if (this.cfgId == 1) {
            if (ContextShop_1.default.goodsShelf) {
                this.target = ContextShop_1.default.goodsShelf;
                return true;
            }
        }
        else if (this.cfgId == 2) {
            if (ContextShop_1.default.goodsShelf2) {
                this.target = ContextShop_1.default.goodsShelf2;
                return true;
            }
        }
        return false;
    };
    ActionBuyProduct.prototype.perform = function (node) {
        if (this.target.has(this.cfgId)) {
            this.target.cost(this.cfgId);
            var buyer = node.getComponent(Buyer_1.Buyer);
            buyer.addProduct(this.cfgId, 1);
            if (buyer.hasProductFull(this.cfgId)) {
                this.bDone = true;
                console.log("购物完成", this.target.node.name, this.cfgId);
            }
        }
        return true;
    };
    ActionBuyProduct.prototype.requiresInRange = function () {
        return true;
    };
    return ActionBuyProduct;
}(GoapAction_1.GoapAction));
exports.default = ActionBuyProduct;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9BY3Rpb25CdXlQcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEwRDtBQUMxRCxpQ0FBK0I7QUFDL0IsNkNBQXVDO0FBR3ZDO0lBQThDLG9DQUFVO0lBSXBELDBCQUFZLEtBQUs7UUFBakIsWUFDSSxpQkFBTyxTQUlWO1FBUlMsV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUs1QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksR0FBRyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDakQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBOztJQUM5QyxDQUFDO0lBRUQsZ0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3RCLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxzREFBMkIsR0FBM0IsVUFBNEIsRUFBVztRQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2pCLElBQUkscUJBQVcsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQVcsQ0FBQyxVQUFVLENBQUE7Z0JBQ3BDLE9BQU8sSUFBSSxDQUFBO2FBQ2Q7U0FDSjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxxQkFBVyxDQUFDLFdBQVcsRUFBRTtnQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBVyxDQUFDLFdBQVcsQ0FBQTtnQkFDckMsT0FBTyxJQUFJLENBQUE7YUFDZDtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxJQUFhO1FBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQUssQ0FBQyxDQUFBO1lBQ3BDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUMvQixJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUN6RDtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUQsMENBQWUsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FsREEsQUFrREMsQ0FsRDZDLHVCQUFVLEdBa0R2RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgQnV5ZXIgfSBmcm9tIFwiLi9CdXllclwiXG5pbXBvcnQgQ29udGV4dFNob3AgZnJvbSBcIi4vQ29udGV4dFNob3BcIlxuaW1wb3J0IEdvb2RzU2hlbGYgZnJvbSBcIi4vR29vZHNTaGVsZlwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbkJ1eVByb2R1Y3QgZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcm90ZWN0ZWQgYkRvbmU6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHB1YmxpYyB0YXJnZXQ6IEdvb2RzU2hlbGZcbiAgICBwcml2YXRlIGNmZ0lkOiBudW1iZXJcbiAgICBjb25zdHJ1Y3RvcihjZmdJZCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuY2ZnSWQgPSBjZmdJZFxuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihcImhhc1Byb2R1Y3RcIiArIGNmZ0lkLCBmYWxzZSlcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoXCJoYXNQcm9kdWN0XCIgKyBjZmdJZCwgdHJ1ZSlcbiAgICB9XG5cbiAgICByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iRG9uZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgaXNEb25lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5iRG9uZVxuICAgIH1cblxuICAgIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihnbzogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5jZmdJZCA9PSAxKSB7XG4gICAgICAgICAgICBpZiAoQ29udGV4dFNob3AuZ29vZHNTaGVsZikge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gQ29udGV4dFNob3AuZ29vZHNTaGVsZlxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jZmdJZCA9PSAyKSB7XG4gICAgICAgICAgICBpZiAoQ29udGV4dFNob3AuZ29vZHNTaGVsZjIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IENvbnRleHRTaG9wLmdvb2RzU2hlbGYyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0Lmhhcyh0aGlzLmNmZ0lkKSkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuY29zdCh0aGlzLmNmZ0lkKVxuICAgICAgICAgICAgbGV0IGJ1eWVyID0gbm9kZS5nZXRDb21wb25lbnQoQnV5ZXIpXG4gICAgICAgICAgICBidXllci5hZGRQcm9kdWN0KHRoaXMuY2ZnSWQsIDEpXG4gICAgICAgICAgICBpZiAoYnV5ZXIuaGFzUHJvZHVjdEZ1bGwodGhpcy5jZmdJZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJEb25lID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6LSt54mp5a6M5oiQXCIsIHRoaXMudGFyZ2V0Lm5vZGUubmFtZSwgdGhpcy5jZmdJZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0RhdGFNZW1vcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUVJO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFBO0lBQ3RDLENBQUM7SUFDTSx3QkFBRyxHQUFWLFVBQVcsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVNLHdCQUFHLEdBQVYsVUFBVyxHQUFHO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRU0sMkJBQU0sR0FBYixVQUFjLEdBQUc7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1lbW9yeXtcbiAgICBwcml2YXRlIGRhdGE6TWFwPHN0cmluZywgYW55PlxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KClcbiAgICB9XG4gICAgcHVibGljIHNldChrZXksIHYpe1xuICAgICAgICB0aGlzLmRhdGEuc2V0KGtleSwgdilcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGtleSl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZ2V0KGtleSlcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlKGtleSl7XG4gICAgICAgIHRoaXMuZGF0YS5kZWxldGUoa2V5KVxuICAgIH1cbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2RhdGEvVF9MYWJvdXJlckNvbnRhaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMsdUNBQXNDO0FBRXRDOzs7Ozs7R0FNRztBQUNIO0lBS0M7UUFKUSxpQkFBWSxHQUFnQyxJQUFJLEdBQUcsRUFBMEIsQ0FBQztRQUtyRixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLGNBQWMsQ0FBQywyQkFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsbUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQzVHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLElBQUksY0FBYyxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDcEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxLQUFLLEVBQUUsSUFBSSxjQUFjLENBQUMsMkJBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLG1CQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUNuRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLGNBQWMsQ0FBQywyQkFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsbUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzdHLENBQUM7SUFSRCxzQkFBVyw0Q0FBVzthQUF0QjtZQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQU9NLCtDQUFpQixHQUF4QixVQUF5QixJQUFZO1FBQ3BDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQzthQUFNO1lBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNyRCxPQUFPLElBQUksQ0FBQztTQUNaO0lBQ0YsQ0FBQztJQUNGLDBCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSxrREFBbUI7QUFxQmhDO0lBUUMsd0JBQVksSUFBa0IsRUFBRSxLQUFhLEVBQUUsUUFBZ0I7UUFDOUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0FiQSxBQWFDLElBQUE7QUFiWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhYm91cmVyVHlwZSB9IGZyb20gXCIuL0xhYm91cmVyVHlwZVwiO1xuaW1wb3J0IHsgVG9vbFR5cGUgfSBmcm9tIFwiLi9Ub29sVHlwZVwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXG4gKiBARGF0ZTogMjAxOC0xMS0wMyAxODozNzoxNCBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTAzIDE5OjAzOjIyXG4gKi9cbmV4cG9ydCBjbGFzcyBUX0xhYm91cmVyQ29udGFpbmVyIHtcblx0cHJpdmF0ZSBfbGFib3VyZXJNYXA6IE1hcDxudW1iZXIsIFRfTGFib3VyZXJCZWFuPiA9IG5ldyBNYXA8bnVtYmVyLCBUX0xhYm91cmVyQmVhbj4oKTtcblx0cHVibGljIGdldCBsYWJvdXJlck1hcCgpOiBNYXA8bnVtYmVyLCBUX0xhYm91cmVyQmVhbj4ge1xuXHRcdHJldHVybiB0aGlzLl9sYWJvdXJlck1hcDtcblx0fVxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLl9sYWJvdXJlck1hcC5zZXQoTGFib3VyZXJUeXBlLkJsYWNrc21pdGgsIG5ldyBUX0xhYm91cmVyQmVhbihMYWJvdXJlclR5cGUuQmxhY2tzbWl0aCwgMSwgVG9vbFR5cGUuQXhlKSlcblx0XHR0aGlzLl9sYWJvdXJlck1hcC5zZXQoTGFib3VyZXJUeXBlLkxvZ2dlciwgbmV3IFRfTGFib3VyZXJCZWFuKExhYm91cmVyVHlwZS5Mb2dnZXIsIDIsIFRvb2xUeXBlLkF4ZSkpXG5cdFx0dGhpcy5fbGFib3VyZXJNYXAuc2V0KExhYm91cmVyVHlwZS5NaW5lciwgbmV3IFRfTGFib3VyZXJCZWFuKExhYm91cmVyVHlwZS5NaW5lciwgMSwgVG9vbFR5cGUuUGljaykpXG5cdFx0dGhpcy5fbGFib3VyZXJNYXAuc2V0KExhYm91cmVyVHlwZS5Xb29kQ3V0dGVyLCBuZXcgVF9MYWJvdXJlckJlYW4oTGFib3VyZXJUeXBlLldvb2RDdXR0ZXIsIDIsIFRvb2xUeXBlLkF4ZSkpXG5cdH1cblx0cHVibGljIGdldExhYm91cmVyQnlUeXBlKHR5cGU6IG51bWJlcik6IFRfTGFib3VyZXJCZWFuIHtcblx0XHRpZiAodGhpcy5fbGFib3VyZXJNYXAuaGFzKHR5cGUpKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fbGFib3VyZXJNYXAuZ2V0KHR5cGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJjYW4gbm90IGZpbmQgbGFib3VyZXIgYnkgdHlwZTogXCIsIHR5cGUpXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFRfTGFib3VyZXJCZWFuIHtcblx0Lyoq57G75Z6LICovXG5cdHB1YmxpYyB0eXBlOiBMYWJvdXJlclR5cGU7XG5cdC8qKuenu+WKqOmAn+W6piAqL1xuXHRwdWJsaWMgc3BlZWQ6IG51bWJlcjtcblx0Lyoq5bel5YW357G75Z6LICovXG5cdHB1YmxpYyB0b29sVHlwZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHR5cGU6IExhYm91cmVyVHlwZSwgc3BlZWQ6IG51bWJlciwgdG9vbFR5cGU6IHN0cmluZykge1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy5zcGVlZCA9IHNwZWVkO1xuXHRcdHRoaXMudG9vbFR5cGUgPSB0b29sVHlwZTtcblx0fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/LeavePoint.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '117f24ptPFDWqbtNwaFoQ2+', 'LeavePoint');
// shopping/LeavePoint.ts

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
var LeavePoint = /** @class */ (function (_super) {
    __extends(LeavePoint, _super);
    function LeavePoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeavePoint.prototype.onLoad = function () { };
    LeavePoint = __decorate([
        ccclass
    ], LeavePoint);
    return LeavePoint;
}(VGameObject_1.VGameObject));
exports.default = LeavePoint;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9MZWF2ZVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF5RDtBQUNuRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF3Qyw4QkFBVztJQUFuRDs7SUFFQSxDQUFDO0lBRGEsMkJBQU0sR0FBaEIsY0FBMEIsQ0FBQztJQURWLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0FFOUI7SUFBRCxpQkFBQztDQUZELEFBRUMsQ0FGdUMseUJBQVcsR0FFbEQ7a0JBRm9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3RcIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZWF2ZVBvaW50IGV4dGVuZHMgVkdhbWVPYmplY3Qge1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7fVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2RhdGEvVG9vbFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztHQU1HO0FBQ0g7SUFBQTtJQU1BLENBQUM7SUFIYyxrQkFBUyxHQUF2QixVQUF3QixJQUFZO1FBQ25DLE9BQU8sSUFBSSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBSmEsWUFBRyxHQUFXLEtBQUssQ0FBQztJQUNwQixhQUFJLEdBQVcsTUFBTSxDQUFDO0lBSXJDLGVBQUM7Q0FORCxBQU1DLElBQUE7QUFOWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTExLTAzIDE5OjAxOjEwIFxuICogQExhc3QgTW9kaWZpZWQgYnk6ICAgUmFubmFyWWFuZyBcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDMgMTk6MDE6MTAgXG4gKi9cbmV4cG9ydCBjbGFzcyBUb29sVHlwZSB7XG5cdHB1YmxpYyBzdGF0aWMgQXhlOiBzdHJpbmcgPSAnYXhlJztcblx0cHVibGljIHN0YXRpYyBQaWNrOiBzdHJpbmcgPSAncGljayc7XG5cdHB1YmxpYyBzdGF0aWMgZ2V0U291cmNlKHR5cGU6IHN0cmluZykge1xuXHRcdHJldHVybiB0eXBlICsgJ19wbmcnO1xuXHR9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/EBuyerStatus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a378AFCntAy4BZhsAeOeo0', 'EBuyerStatus');
// shopping/EBuyerStatus.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EBuyerStatus = void 0;
var EBuyerStatus;
(function (EBuyerStatus) {
})(EBuyerStatus = exports.EBuyerStatus || (exports.EBuyerStatus = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9FQnV5ZXJTdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxZQUVYO0FBRkQsV0FBWSxZQUFZO0FBRXhCLENBQUMsRUFGVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUV2QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEVCdXllclN0YXR1cyB7XG4gICAgXG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2RhdGEvR2FtZURhdGFNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE0RDtBQUU1RDs7Ozs7O0dBTUc7QUFDSDtJQUFBO1FBQ1cseUJBQW9CLEdBQXdCLElBQUkseUNBQW1CLEVBQUUsQ0FBQztJQVNqRixDQUFDO0lBTkcsc0JBQWtCLG9CQUFDO2FBQW5CO1lBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQzthQUN6QztZQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUNMLHNCQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRfTGFib3VyZXJDb250YWluZXIgfSBmcm9tIFwiLi9UX0xhYm91cmVyQ29udGFpbmVyXCI7XG5cbi8qXG4gKiBARGVzY3JpcHRpb246IOa4uOaIj+aVsOaNrueuoeeQhuWZqFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTExLTAzIDE5OjAyOjQ2IFxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDMgMTk6MDM6NDJcbiAqL1xuZXhwb3J0IGNsYXNzIEdhbWVEYXRhTWFuYWdlciB7XG4gICAgcHVibGljIHRfbGFib3VyZGVyQ29udGFpbmVyOiBUX0xhYm91cmVyQ29udGFpbmVyID0gbmV3IFRfTGFib3VyZXJDb250YWluZXIoKTtcbiAgICAvKirljZXkvosgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogR2FtZURhdGFNYW5hZ2VyO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IEkoKTogR2FtZURhdGFNYW5hZ2VyIHtcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IEdhbWVEYXRhTWFuYWdlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/GoodsShelf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0cfab0dpmdNPblRhGMciB8W', 'GoodsShelf');
// shopping/GoodsShelf.ts

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
exports.Product = void 0;
var VGameObject_1 = require("../src/app/base/VGameObject");
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GoodsShelf = /** @class */ (function (_super) {
    __extends(GoodsShelf, _super);
    function GoodsShelf() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cfgId = 0;
        _this.interval = 3;
        return _this;
    }
    GoodsShelf.prototype.onLoad = function () {
        this.product = new Product();
        this.product.amount = 10;
        this.product.maxAmount = 10;
        this.product.cfgId = this.cfgId;
    };
    GoodsShelf.prototype.has = function (count) {
        return this.product.amount >= count;
    };
    GoodsShelf.prototype.cost = function (count) {
        if (this.has(count)) {
            this.product.amount -= count;
        }
    };
    GoodsShelf.prototype.add = function (count) {
        this.product.amount += count;
        this.product.amount = Math.min(this.product.amount, this.product.maxAmount);
    };
    GoodsShelf.prototype.update = function (dt) {
        this.interval -= dt;
        if (this.interval <= 0) {
            this.interval = 3;
            this.add(1);
        }
    };
    __decorate([
        property(cc.Integer)
    ], GoodsShelf.prototype, "cfgId", void 0);
    GoodsShelf = __decorate([
        ccclass
    ], GoodsShelf);
    return GoodsShelf;
}(VGameObject_1.VGameObject));
exports.default = GoodsShelf;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9Hb29kc1NoZWxmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBeUQ7QUFFekQ7SUFBQTtJQUlBLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSwwQkFBTztBQUtkLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRTNDO0lBQXdDLDhCQUFXO0lBQW5EO1FBQUEscUVBbUNDO1FBakNHLFdBQUssR0FBVyxDQUFDLENBQUE7UUFHakIsY0FBUSxHQUFXLENBQUMsQ0FBQTs7SUE4QnhCLENBQUM7SUE3QmEsMkJBQU0sR0FBaEI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUE7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ25DLENBQUM7SUFFTSx3QkFBRyxHQUFWLFVBQVcsS0FBSztRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFBO0lBQ3ZDLENBQUM7SUFFTSx5QkFBSSxHQUFYLFVBQVksS0FBSztRQUNiLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUE7U0FDL0I7SUFDTCxDQUFDO0lBRU0sd0JBQUcsR0FBVixVQUFXLEtBQUs7UUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUE7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQy9FLENBQUM7SUFFUywyQkFBTSxHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFBO1FBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNkO0lBQ0wsQ0FBQztJQWhDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzZDQUNKO0lBRkEsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQW1DOUI7SUFBRCxpQkFBQztDQW5DRCxBQW1DQyxDQW5DdUMseUJBQVcsR0FtQ2xEO2tCQW5Db0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiXG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0IHtcbiAgICBjZmdJZDogbnVtYmVyIHwgc3RyaW5nXG4gICAgYW1vdW50OiBudW1iZXJcbiAgICBtYXhBbW91bnQ6IG51bWJlclxufVxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2RzU2hlbGYgZXh0ZW5kcyBWR2FtZU9iamVjdCB7XG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gICAgY2ZnSWQ6IG51bWJlciA9IDBcblxuICAgIHByb2R1Y3Q6IFByb2R1Y3RcbiAgICBpbnRlcnZhbDogbnVtYmVyID0gM1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucHJvZHVjdCA9IG5ldyBQcm9kdWN0KClcbiAgICAgICAgdGhpcy5wcm9kdWN0LmFtb3VudCA9IDEwXG4gICAgICAgIHRoaXMucHJvZHVjdC5tYXhBbW91bnQgPSAxMFxuICAgICAgICB0aGlzLnByb2R1Y3QuY2ZnSWQgPSB0aGlzLmNmZ0lkXG4gICAgfVxuXG4gICAgcHVibGljIGhhcyhjb3VudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0LmFtb3VudCA+PSBjb3VudFxuICAgIH1cblxuICAgIHB1YmxpYyBjb3N0KGNvdW50KSB7XG4gICAgICAgIGlmICh0aGlzLmhhcyhjb3VudCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdC5hbW91bnQgLT0gY291bnRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGQoY291bnQpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0LmFtb3VudCArPSBjb3VudFxuICAgICAgICB0aGlzLnByb2R1Y3QuYW1vdW50ID0gTWF0aC5taW4odGhpcy5wcm9kdWN0LmFtb3VudCwgdGhpcy5wcm9kdWN0Lm1heEFtb3VudClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnRlcnZhbCAtPSBkdFxuICAgICAgICBpZiAodGhpcy5pbnRlcnZhbCA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gM1xuICAgICAgICAgICAgdGhpcy5hZGQoMSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBO0lBQUE7SUFpQkEsQ0FBQztJQUFELGtCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSxrQ0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFYXRpbmcgZnJvbSBcIi4uLy4uLy4uL2dvYXAvRWF0aW5nXCI7XG5pbXBvcnQgRXF1aXAgZnJvbSBcIi4uLy4uLy4uL2dvYXAvRXF1aXBcIjtcbmltcG9ydCBGaXJlIGZyb20gXCIuLi8uLi8uLi9nb2FwL0ZpcmVcIjtcbmltcG9ydCBTbGVlcCBmcm9tIFwiLi4vLi4vLi4vZ29hcC9TbGVlcFwiO1xuaW1wb3J0IFN0b3JlQSBmcm9tIFwiLi4vLi4vLi4vZ29hcC9TdG9yZUFcIjtcbmltcG9ydCBUb2lsZXQgZnJvbSBcIi4uLy4uLy4uL2dvYXAvVG9pbGV0XCI7XG5pbXBvcnQgR29vZHNTaGVsZiBmcm9tIFwiLi4vLi4vLi4vc2hvcHBpbmcvR29vZHNTaGVsZlwiO1xuaW1wb3J0IHsgQ2hvcHBpbmdCbG9ja0NvbXBvbmVudCB9IGZyb20gXCIuL0Nob3BwaW5nQmxvY2tDb21wb25lbnRcIjtcbmltcG9ydCB7IEZvcmdlQ29tcG9uZW50IH0gZnJvbSBcIi4vRm9yZ2VDb21wb25lbnRcIjtcbmltcG9ydCB7IElyb25Sb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4vSXJvblJvY2tDb21wb25lbnRcIjtcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi9TdXBwbHlQaWxlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBUcmVlQ29tcG9uZW50IH0gZnJvbSBcIi4vVHJlZUNvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXHRwdWJsaWMgc3RhdGljIHN1cHBseVBpbGVDb21wczogU3VwcGx5UGlsZUNvbXBvbmVudFtdO1xuXHRwdWJsaWMgc3RhdGljIHRyZWVDb21wczogVHJlZUNvbXBvbmVudFtdO1xuXHRwdWJsaWMgc3RhdGljIHJvY2tDb21wczogSXJvblJvY2tDb21wb25lbnRbXTtcblx0cHVibGljIHN0YXRpYyBmb3JnZUNvbXBzOiBGb3JnZUNvbXBvbmVudFtdO1xuXHRwdWJsaWMgc3RhdGljIGNob3BwaW5nQmxvY2tDb21wczogQ2hvcHBpbmdCbG9ja0NvbXBvbmVudFtdO1xuXG5cdHB1YmxpYyBzdGF0aWMgdG9pbGV0VGFyZ2V0OiBUb2lsZXQ7XG5cdHB1YmxpYyBzdGF0aWMgZmlyZVRhcmdldDogRmlyZTtcblx0cHVibGljIHN0YXRpYyBlYXRpbmdUYXJnZXQ6IEVhdGluZztcblx0cHVibGljIHN0YXRpYyBlcXVpcFRhcmdldDogRXF1aXA7XG5cdHB1YmxpYyBzdGF0aWMgc2xlZXBUYXJnZXQ6IFNsZWVwXG5cdHB1YmxpYyBzdGF0aWMgc3RvcmVBOiBTdG9yZUFcblx0Ly9cblxuXG5cdHB1YmxpYyBzdGF0aWMgZ29vZHNTaGVsZjpHb29kc1NoZWxmXG59Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL0Nob3BwaW5nQmxvY2tDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUM1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE0QywwQ0FBVztJQUV0RDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQztJQUpXLHNCQUFzQjtRQURsQyxPQUFPO09BQ0ssc0JBQXNCLENBS2xDO0lBQUQsNkJBQUM7Q0FMRCxBQUtDLENBTDJDLHlCQUFXLEdBS3REO0FBTFksd0RBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQ2hvcHBpbmdCbG9ja0NvbXBvbmVudCBleHRlbmRzIFZHYW1lT2JqZWN0IHtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKVxuXHR9XG59Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL0ZvcmdlQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBb0Msa0NBQVc7SUFDOUM7ZUFDQyxpQkFBTztJQUNSLENBQUM7SUFIVyxjQUFjO1FBRDFCLE9BQU87T0FDSyxjQUFjLENBSTFCO0lBQUQscUJBQUM7Q0FKRCxBQUlDLENBSm1DLHlCQUFXLEdBSTlDO0FBSlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBGb3JnZUNvbXBvbmVudCBleHRlbmRzIFZHYW1lT2JqZWN0IHtcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL1N1cHBseVBpbGVDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUM1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF5Qyx1Q0FBVztJQUFwRDtRQUFBLHFFQXlEQztRQXZETyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0Isb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFTL0IsZUFBUyxHQUFXLENBQUMsQ0FBQyxDQUFDLG1DQUFtQztRQVUxRCxjQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCO1FBVXZDLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1FBVWpELGFBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjOztJQVU1QyxDQUFDO0lBL0NBLG1DQUFLLEdBQUw7UUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2RCxDQUFDO0lBR0Qsc0JBQVcseUNBQVE7YUFBbkI7WUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkIsQ0FBQzthQUNELFVBQW9CLEdBQVc7WUFDOUIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzNELENBQUM7OztPQUxBO0lBUUQsc0JBQVcsd0NBQU87YUFBbEI7WUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQW1CLEdBQVc7WUFDN0IsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELENBQUM7OztPQUxBO0lBUUQsc0JBQVcsNENBQVc7YUFBdEI7WUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQXVCLEdBQVc7WUFDakMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN4QixJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLENBQUM7OztPQUxBO0lBUUQsc0JBQVcsdUNBQU07YUFBakI7WUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckIsQ0FBQzthQUNELFVBQWtCLEdBQVc7WUFDNUIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELENBQUM7OztPQUxBO0lBaEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkRBQ2dCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ2U7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDZTtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytEQUNvQjtJQVIzQixtQkFBbUI7UUFEL0IsT0FBTztPQUNLLG1CQUFtQixDQXlEL0I7SUFBRCwwQkFBQztDQXpERCxBQXlEQyxDQXpEd0MseUJBQVcsR0F5RG5EO0FBekRZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFN1cHBseVBpbGVDb21wb25lbnQgZXh0ZW5kcyBWR2FtZU9iamVjdCB7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHVibGljIHR4dFRvb2xOdW06IGNjLkxhYmVsID0gbnVsbDtcblx0QHByb3BlcnR5KGNjLkxhYmVsKVxuXHRwdWJsaWMgdHh0T3JlTnVtOiBjYy5MYWJlbCA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHVibGljIHR4dExvZ051bTogY2MuTGFiZWwgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG5cdHB1YmxpYyB0eHRGaXJld29vZE51bTogY2MuTGFiZWwgPSBudWxsO1xuXG5cdHN0YXJ0KCkge1xuXHRcdHRoaXMudHh0VG9vbE51bS5zdHJpbmcgPSBcIuW3peWFt++8mlwiICsgdGhpcy5udW1Ub29scztcblx0XHR0aGlzLnR4dE9yZU51bS5zdHJpbmcgPSBcIuefv+efs++8mlwiICsgdGhpcy5udW1PcmU7XG5cdFx0dGhpcy50eHRMb2dOdW0uc3RyaW5nID0gXCLljp/mnKjvvJpcIiArIHRoaXMubnVtTG9ncztcblx0XHR0aGlzLnR4dEZpcmV3b29kTnVtLnN0cmluZyA9IFwi5pyo5p+077yaXCIgKyB0aGlzLm51bUZpcmV3b29kO1xuXHR9XG5cblx0cHJpdmF0ZSBfbnVtVG9vbHM6IG51bWJlciA9IDA7IC8vIGZvciBtaW5pbmcgb3JlIGFuZCBjaG9wcGluZyBsb2dzXG5cdHB1YmxpYyBnZXQgbnVtVG9vbHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX251bVRvb2xzO1xuXHR9XG5cdHB1YmxpYyBzZXQgbnVtVG9vbHModmFsOiBudW1iZXIpIHtcblx0XHR2YWwgPSBOdW1iZXIodmFsKTtcblx0XHR0aGlzLl9udW1Ub29scyA9IHZhbDtcblx0XHR0aGlzLnR4dFRvb2xOdW0gJiYgKHRoaXMudHh0VG9vbE51bS5zdHJpbmcgPSBcIuW3peWFt++8mlwiICsgdmFsKTtcblx0fVxuXG5cdHByaXZhdGUgX251bUxvZ3M6IG51bWJlciA9IDA7IC8vIG1ha2VzIGZpcmV3b29kXG5cdHB1YmxpYyBnZXQgbnVtTG9ncygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl9udW1Mb2dzO1xuXHR9XG5cdHB1YmxpYyBzZXQgbnVtTG9ncyh2YWw6IG51bWJlcikge1xuXHRcdHZhbCA9IE51bWJlcih2YWwpO1xuXHRcdHRoaXMuX251bUxvZ3MgPSB2YWw7XG5cdFx0dGhpcy50eHRMb2dOdW0gJiYgKHRoaXMudHh0TG9nTnVtLnN0cmluZyA9IFwi5Y6f5pyo77yaXCIgKyB2YWwpO1xuXHR9XG5cblx0cHJpdmF0ZSBfbnVtRmlyZXdvb2Q6IG51bWJlciA9IDA7IC8vIHdoYXQgd2Ugd2FudCB0byBtYWtlXG5cdHB1YmxpYyBnZXQgbnVtRmlyZXdvb2QoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fbnVtRmlyZXdvb2Q7XG5cdH1cblx0cHVibGljIHNldCBudW1GaXJld29vZCh2YWw6IG51bWJlcikge1xuXHRcdHZhbCA9IE51bWJlcih2YWwpO1xuXHRcdHRoaXMuX251bUZpcmV3b29kID0gdmFsO1xuXHRcdHRoaXMudHh0RmlyZXdvb2ROdW0gJiYgKHRoaXMudHh0RmlyZXdvb2ROdW0uc3RyaW5nID0gXCLmnKjmn7TvvJpcIiArIHZhbCk7XG5cdH1cblxuXHRwcml2YXRlIF9udW1PcmU6IG51bWJlciA9IDA7IC8vIG1ha2VzIHRvb2xzXG5cdHB1YmxpYyBnZXQgbnVtT3JlKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX251bU9yZTtcblx0fVxuXHRwdWJsaWMgc2V0IG51bU9yZSh2YWw6IG51bWJlcikge1xuXHRcdHZhbCA9IE51bWJlcih2YWwpO1xuXHRcdHRoaXMuX251bU9yZSA9IHZhbDtcblx0XHR0aGlzLnR4dE9yZU51bSAmJiAodGhpcy50eHRPcmVOdW0uc3RyaW5nID0gXCLnn7/nn7PvvJpcIiArIHZhbCk7XG5cdH1cblxufSJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL1Rvb2xDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQW1DLGlDQUFZO0lBRzlDO1FBQUEsWUFDQyxpQkFBTyxTQUVQO1FBREEsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7O0lBQ3BDLENBQUM7SUFFTSwyQkFBRyxHQUFWLFVBQVcsTUFBYztRQUN4QixJQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRU0saUNBQVMsR0FBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRixvQkFBQztBQUFELENBaEJBLEFBZ0JDLENBaEJrQyxFQUFFLENBQUMsU0FBUyxHQWdCOUM7QUFoQlksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVG9vbENvbXBvbmVudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cdC8qKlswLi4xXSBvciAwJSB0byAxMDAlICovXG5cdHB1YmxpYyBzdHJlbmd0aDogbnVtYmVyO1xuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN0cmVuZ3RoID0gMTsgLy8gZnVsbCBzdHJlbmd0aFxuXHR9XG5cblx0cHVibGljIHVzZShkYW1hZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc3RyZW5ndGggLT0gZGFtYWdlO1xuXHR9XG5cblx0cHVibGljIGRlc3Ryb3llZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJlbmd0aCA8PSAwO1xuXHR9XG5cbn1cblxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL1RyZWVDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUM1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFtQyxpQ0FBVztJQUE5Qzs7SUFDQSxDQUFDO0lBRFksYUFBYTtRQUR6QixPQUFPO09BQ0ssYUFBYSxDQUN6QjtJQUFELG9CQUFDO0NBREQsQUFDQyxDQURrQyx5QkFBVyxHQUM3QztBQURZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgVHJlZUNvbXBvbmVudCBleHRlbmRzIFZHYW1lT2JqZWN0IHtcbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL0lyb25Sb2NrQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDNUMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBdUMscUNBQVc7SUFDakQ7ZUFDQyxpQkFBTztJQUNSLENBQUM7SUFIVyxpQkFBaUI7UUFEN0IsT0FBTztPQUNLLGlCQUFpQixDQUk3QjtJQUFELHdCQUFDO0NBSkQsQUFJQyxDQUpzQyx5QkFBVyxHQUlqRDtBQUpZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIElyb25Sb2NrQ29tcG9uZW50IGV4dGVuZHMgVkdhbWVPYmplY3Qge1xuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxufSJdfQ==
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
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
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
        var vg = agent.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = supply;
                closestDist = supply.distanceSquare(vg);
            }
            else {
                // is this one closer than the last?
                var dist = supply.distanceSquare(vg);
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
    DropOffLogsAction.prototype.perform = function (node) {
        var labourer = node.getComponent(Labourer_1.Labourer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZkxvZ3NBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF5RDtBQUN6RCx1REFBcUQ7QUFDckQsc0RBQW9EO0FBRXBELDhDQUE0QztBQUM1QyxrREFBZ0Q7QUFJaEQ7SUFBdUMscUNBQVU7SUFHN0M7UUFBQSxZQUNJLGlCQUFPLFNBSVY7UUFQTyxvQkFBYyxHQUFZLEtBQUssQ0FBQTtRQUluQyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsb0RBQW9EO1FBQ3JHLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUEsQ0FBQyxzQkFBc0I7UUFDbEUsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDLG9CQUFvQjs7SUFDdkUsQ0FBQztJQUVNLGlDQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQTtJQUMvQixDQUFDO0lBRU0sa0NBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUM5QixDQUFDO0lBRU0sMkNBQWUsR0FBdEI7UUFDSSxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFTSx1REFBMkIsR0FBbEMsVUFBbUMsS0FBYztRQUM3QyxvQ0FBb0M7UUFDcEMsSUFBSSxXQUFXLEdBQTBCLHlCQUFXLENBQUMsZUFBZSxDQUFBO1FBQ3BFLElBQUksT0FBTyxHQUF3QixJQUFJLENBQUE7UUFDdkMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFBO1FBQzNCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMseUJBQVcsQ0FBQyxDQUFBO1FBQ3hDLEtBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQTNCLElBQUksTUFBTSxvQkFBQTtZQUNYLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDakIsa0NBQWtDO2dCQUNsQyxPQUFPLEdBQUcsTUFBTSxDQUFBO2dCQUNoQixXQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTthQUMxQztpQkFBTTtnQkFDSCxvQ0FBb0M7Z0JBQ3BDLElBQUksSUFBSSxHQUFXLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzVDLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtvQkFDcEIsZ0NBQWdDO29CQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFBO29CQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFBO2lCQUNyQjthQUNKO1NBQ0o7UUFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFFakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUE7UUFFckIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFBO0lBQzFCLENBQUM7SUFFTSxtQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUM5QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFRLENBQUMsQ0FBQTtRQUNwQyxJQUFJLFFBQVEsR0FBc0IsUUFBUSxDQUFDLFFBQVEsQ0FBQTtRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFBO1FBQzFCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO1FBRXBCLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0EzREEsQUEyREMsQ0EzRHNDLHVCQUFVLEdBMkRoRDtBQTNEWSw4Q0FBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIlxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIlxuaW1wb3J0IHsgU3VwcGx5UGlsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9TdXBwbHlQaWxlQ29tcG9uZW50XCJcblxuXG5leHBvcnQgY2xhc3MgRHJvcE9mZkxvZ3NBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcml2YXRlIGRyb3BwZWRPZmZMb2dzOiBib29sZWFuID0gZmFsc2VcbiAgICBwdWJsaWMgdGFyZ2V0OiBTdXBwbHlQaWxlQ29tcG9uZW50XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNMb2dzLCB0cnVlKSAvLyBjYW4ndCBkcm9wIG9mZiBsb2dzIGlmIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBzb21lXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNMb2dzLCBmYWxzZSkgLy8gd2Ugbm93IGhhdmUgbm8gbG9nc1xuICAgICAgICB0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuQ29sbGVjdExvZ3MsIHRydWUpIC8vIHdlIGNvbGxlY3RlZCBsb2dzXG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmRyb3BwZWRPZmZMb2dzID0gZmFsc2VcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNEb25lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wcGVkT2ZmTG9nc1xuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBUT0RPOmZpbmQgdGhlIG5lYXJlc3Qgc3VwcGx5IHBpbGVcbiAgICAgICAgbGV0IHN1cHBseVBpbGVzOiBTdXBwbHlQaWxlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC5zdXBwbHlQaWxlQ29tcHNcbiAgICAgICAgbGV0IGNsb3Nlc3Q6IFN1cHBseVBpbGVDb21wb25lbnQgPSBudWxsXG4gICAgICAgIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMFxuICAgICAgICBsZXQgdmcgPSBhZ2VudC5nZXRDb21wb25lbnQoVkdhbWVPYmplY3QpXG4gICAgICAgIGZvciAobGV0IHN1cHBseSBvZiBzdXBwbHlQaWxlcykge1xuICAgICAgICAgICAgaWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcbiAgICAgICAgICAgICAgICBjbG9zZXN0ID0gc3VwcGx5XG4gICAgICAgICAgICAgICAgY2xvc2VzdERpc3QgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUodmcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlzIHRoaXMgb25lIGNsb3NlciB0aGFuIHRoZSBsYXN0P1xuICAgICAgICAgICAgICAgIGxldCBkaXN0OiBudW1iZXIgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUodmcpXG4gICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0ID0gc3VwcGx5XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0ID0gZGlzdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xvc2VzdCA9PSBudWxsKSByZXR1cm4gZmFsc2VcblxuICAgICAgICB0aGlzLnRhcmdldCA9IGNsb3Nlc3RcblxuICAgICAgICByZXR1cm4gY2xvc2VzdCAhPSBudWxsXG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm0obm9kZTogY2MuTm9kZSk6IGJvb2xlYW4ge1xuXHRcdGxldCBsYWJvdXJlciA9IG5vZGUuZ2V0Q29tcG9uZW50KExhYm91cmVyKVxuICAgICAgICBsZXQgYmFja3BhY2s6IEJhY2tQYWNrQ29tcG9uZW50ID0gbGFib3VyZXIuYmFja3BhY2tcbiAgICAgICAgdGhpcy50YXJnZXQubnVtTG9ncyArPSBiYWNrcGFjay5udW1Mb2dzXG4gICAgICAgIHRoaXMuZHJvcHBlZE9mZkxvZ3MgPSB0cnVlXG4gICAgICAgIGJhY2twYWNrLm51bUxvZ3MgPSAwXG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG4iXX0=
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
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
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
        var vg = agent.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = supply;
                closestDist = supply.distanceSquare(vg);
            }
            else {
                // is this one closer than the last?
                var dist = supply.distanceSquare(vg);
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
    DropOffOreAction.prototype.perform = function (node) {
        var labourer = node.getComponent(Labourer_1.Labourer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZk9yZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXlEO0FBQ3pELHVEQUFxRDtBQUNyRCxzREFBb0Q7QUFFcEQsOENBQTRDO0FBQzVDLGtEQUFnRDtBQUdoRDtJQUFzQyxvQ0FBVTtJQUc1QztRQUFBLFlBQ0ksaUJBQU8sU0FJVjtRQVBPLG1CQUFhLEdBQUcsS0FBSyxDQUFBO1FBSXpCLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQyxtREFBbUQ7UUFDbkcsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQSxDQUFDLHFCQUFxQjtRQUNoRSxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsbUJBQW1COztJQUNyRSxDQUFDO0lBRU0sZ0NBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFBO0lBQzlCLENBQUM7SUFFTSxpQ0FBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO0lBQzdCLENBQUM7SUFDTSwwQ0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFBLENBQUMsa0VBQWtFO0lBQ2xGLENBQUM7SUFDTSxzREFBMkIsR0FBbEMsVUFBbUMsS0FBYztRQUM3Qyx1REFBdUQ7UUFDdkQsSUFBSSxXQUFXLEdBQTBCLHlCQUFXLENBQUMsZUFBZSxDQUFBO1FBQ3BFLElBQUksT0FBTyxHQUF3QixJQUFJLENBQUE7UUFDdkMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFBO1FBQzNCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMseUJBQVcsQ0FBQyxDQUFBO1FBQ3hDLEtBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQTNCLElBQUksTUFBTSxvQkFBQTtZQUNYLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDakIsa0NBQWtDO2dCQUNsQyxPQUFPLEdBQUcsTUFBTSxDQUFBO2dCQUNoQixXQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTthQUMxQztpQkFBTTtnQkFDSCxvQ0FBb0M7Z0JBQ3BDLElBQUksSUFBSSxHQUFXLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzVDLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtvQkFDcEIsZ0NBQWdDO29CQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFBO29CQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFBO2lCQUNyQjthQUNKO1NBQ0o7UUFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFFakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUE7UUFFckIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFBO0lBQzFCLENBQUM7SUFFTSxrQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUM5QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFRLENBQUMsQ0FBQTtRQUNwQyxJQUFJLFFBQVEsR0FBc0IsUUFBUSxDQUFDLFFBQVEsQ0FBQTtRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFBO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFBO1FBQ3pCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ25CLHFDQUFxQztRQUVyQyxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTCx1QkFBQztBQUFELENBMURBLEFBMERDLENBMURxQyx1QkFBVSxHQTBEL0M7QUExRFksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIlxuaW1wb3J0IHsgQmFja1BhY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vQmFja1BhY2tDb21wb25lbnRcIlxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIlxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCJcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiXG5cbmV4cG9ydCBjbGFzcyBEcm9wT2ZmT3JlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBkcm9wcGVkT2ZmT3JlID0gZmFsc2VcbiAgICBwdWJsaWMgdGFyZ2V0OiBTdXBwbHlQaWxlQ29tcG9uZW50IC8vIHdoZXJlIHdlIGRyb3Agb2ZmIHRoZSBvcmVcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc09yZSwgdHJ1ZSkgLy8gY2FuJ3QgZHJvcCBvZmYgb3JlIGlmIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBzb21lXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNPcmUsIGZhbHNlKSAvLyB3ZSBub3cgaGF2ZSBubyBvcmVcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkNvbGxlY3RPcmUsIHRydWUpIC8vIHdlIGNvbGxlY3RlZCBvcmVcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZHJvcHBlZE9mZk9yZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcHBlZE9mZk9yZVxuICAgIH1cbiAgICBwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZSAvLyB5ZXMgd2UgbmVlZCB0byBiZSBuZWFyIGEgc3VwcGx5IHBpbGUgc28gd2UgY2FuIGRyb3Agb2ZmIHRoZSBvcmVcbiAgICB9XG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICAvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3Qgc3VwcGx5IHBpbGUgdGhhdCBoYXMgc3BhcmUgb3JlXG4gICAgICAgIGxldCBzdXBwbHlQaWxlczogU3VwcGx5UGlsZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQuc3VwcGx5UGlsZUNvbXBzXG4gICAgICAgIGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbFxuICAgICAgICBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDBcbiAgICAgICAgbGV0IHZnID0gYWdlbnQuZ2V0Q29tcG9uZW50KFZHYW1lT2JqZWN0KVxuICAgICAgICBmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcbiAgICAgICAgICAgIGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XG4gICAgICAgICAgICAgICAgY2xvc2VzdCA9IHN1cHBseVxuICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKHZnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cbiAgICAgICAgICAgICAgICBsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKHZnKVxuICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdCA9IHN1cHBseVxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IGRpc3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsb3Nlc3QgPT0gbnVsbCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgdGhpcy50YXJnZXQgPSBjbG9zZXN0XG5cbiAgICAgICAgcmV0dXJuIGNsb3Nlc3QgIT0gbnVsbFxuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcblx0XHRsZXQgbGFib3VyZXIgPSBub2RlLmdldENvbXBvbmVudChMYWJvdXJlcilcbiAgICAgICAgbGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrXG4gICAgICAgIHRoaXMudGFyZ2V0Lm51bU9yZSArPSBiYWNrcGFjay5udW1PcmVcbiAgICAgICAgdGhpcy5kcm9wcGVkT2ZmT3JlID0gdHJ1ZVxuICAgICAgICBiYWNrcGFjay5udW1PcmUgPSAwXG4gICAgICAgIC8vVE9ETyBwbGF5IGVmZmVjdCwgY2hhbmdlIGFjdG9yIGljb25cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL0JhY2tQYWNrQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7R0FNRztBQUNIO0lBOEJDLDJCQUFZLE9BQWUsRUFBRSxXQUFtQixFQUFFLE1BQWM7UUE1QnhELGFBQVEsR0FBVyxDQUFDLENBQUM7UUFVckIsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFTekIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQVUzQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBL0JELHNCQUFXLHNDQUFPO2FBQWxCO1lBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3RCLENBQUM7YUFDRCxVQUFtQixHQUFXO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0IsQ0FBQzs7O09BSkE7SUFRRCxzQkFBVywwQ0FBVzthQUF0QjtZQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMxQixDQUFDO2FBQ0QsVUFBdUIsR0FBVztZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdCLENBQUM7OztPQUpBO0lBT0Qsc0JBQVcscUNBQU07YUFBakI7WUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckIsQ0FBQzthQUNELFVBQWtCLEdBQVc7WUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3QixDQUFDOzs7T0FKQTtJQVdNLG9DQUFRLEdBQWYsVUFBZ0IsS0FBZTtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRU0sa0NBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLGtDQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFTSx1Q0FBVyxHQUFsQjtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVGLHdCQUFDO0FBQUQsQ0FuREEsQUFtREMsSUFBQTtBQW5EWSw4Q0FBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuL2xhYm91cmVycy9MYWJvdXJlclwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBIb2xkcyByZXNvdXJjZXMgZm9yIHRoZSBBZ2VudFxuICogQEF1dGhvcjogUmFubmFyLllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNSAyMDo0NDo1NiBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTA0IDE4OjMzOjA3XG4gKi9cbmV4cG9ydCBjbGFzcyBCYWNrUGFja0NvbXBvbmVudCB7XG5cdHByaXZhdGUgb3duZXI6IExhYm91cmVyO1xuXHRwcml2YXRlIF9udW1Mb2dzOiBudW1iZXIgPSAwO1xuXHRwdWJsaWMgZ2V0IG51bUxvZ3MoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fbnVtTG9ncztcblx0fVxuXHRwdWJsaWMgc2V0IG51bUxvZ3ModmFsOiBudW1iZXIpIHtcblx0XHR0aGlzLl9udW1Mb2dzID0gdmFsO1xuXHRcdHRoaXMub3duZXIudXBkYXRlQmFja1BhY2soKTtcblx0fVxuXG5cblx0cHJpdmF0ZSBfbnVtRmlyZXdvb2Q6IG51bWJlciA9IDA7XG5cdHB1YmxpYyBnZXQgbnVtRmlyZXdvb2QoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fbnVtRmlyZXdvb2Q7XG5cdH1cblx0cHVibGljIHNldCBudW1GaXJld29vZCh2YWw6IG51bWJlcikge1xuXHRcdHRoaXMuX251bUZpcmV3b29kID0gdmFsO1xuXHRcdHRoaXMub3duZXIudXBkYXRlQmFja1BhY2soKTtcblx0fVxuXG5cdHByaXZhdGUgX251bU9yZTogbnVtYmVyID0gMDtcblx0cHVibGljIGdldCBudW1PcmUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5fbnVtT3JlO1xuXHR9XG5cdHB1YmxpYyBzZXQgbnVtT3JlKHZhbDogbnVtYmVyKSB7XG5cdFx0dGhpcy5fbnVtT3JlID0gdmFsO1xuXHRcdHRoaXMub3duZXIudXBkYXRlQmFja1BhY2soKTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKG51bUxvZ3M6IG51bWJlciwgbnVtRmlyZXdvb2Q6IG51bWJlciwgbnVtT3JlOiBudW1iZXIpIHtcblx0XHR0aGlzLl9udW1Mb2dzID0gbnVtTG9ncztcblx0XHR0aGlzLl9udW1GaXJld29vZCA9IG51bUZpcmV3b29kO1xuXHRcdHRoaXMuX251bU9yZSA9IG51bU9yZTtcblx0fVxuXHRwdWJsaWMgc2V0T3duZXIob3duZXI6IExhYm91cmVyKSB7XG5cdFx0dGhpcy5vd25lciA9IG93bmVyO1xuXHR9XG5cblx0cHVibGljIGhhc09yZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5udW1PcmUgPiAwO1xuXHR9XG5cblx0cHVibGljIGhhc0xvZygpIHtcblx0XHRyZXR1cm4gdGhpcy5udW1Mb2dzID4gMDtcblx0fVxuXG5cdHB1YmxpYyBoYXNGaXJld29vZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5udW1GaXJld29vZCA+IDA7XG5cdH1cblxufSJdfQ==
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
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
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
        var vg = agent.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = supply;
                closestDist = supply.distanceSquare(vg);
            }
            else {
                // is this one closer than the last?
                var dist = supply.distanceSquare(vg);
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
    DropOffToolsAction.prototype.perform = function (node) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZlRvb2xzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBeUQ7QUFDekQsdURBQXFEO0FBQ3JELHNEQUFvRDtBQUNwRCw4Q0FBNEM7QUFJNUM7SUFBd0Msc0NBQVU7SUFHOUM7UUFBQSxZQUNJLGlCQUFPLFNBSVY7UUFQTyxxQkFBZSxHQUFZLEtBQUssQ0FBQTtRQUlwQyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMscURBQXFEO1FBQzFHLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUEsQ0FBQyx1QkFBdUI7UUFDdkUsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDLHFCQUFxQjs7SUFDekUsQ0FBQztJQUVNLGtDQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQTtJQUNoQyxDQUFDO0lBRU0sbUNBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQTtJQUMvQixDQUFDO0lBRU0sNENBQWUsR0FBdEI7UUFDSSxPQUFPLElBQUksQ0FBQSxDQUFDLG9FQUFvRTtJQUNwRixDQUFDO0lBRU0sd0RBQTJCLEdBQWxDLFVBQW1DLEtBQWM7UUFDN0MseURBQXlEO1FBQ3pELElBQUksV0FBVyxHQUEwQix5QkFBVyxDQUFDLGVBQWUsQ0FBQTtRQUNwRSxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFBO1FBQ3ZDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQTtRQUMzQixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLHlCQUFXLENBQUMsQ0FBQTtRQUN4QyxLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDWCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtnQkFDaEIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7YUFDMUM7aUJBQU07Z0JBQ0gsb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUM1QyxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3BCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtvQkFDaEIsV0FBVyxHQUFHLElBQUksQ0FBQTtpQkFDckI7YUFDSjtTQUNKO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUFFLE9BQU8sS0FBSyxDQUFBO1FBRWpDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFBO1FBRXJCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQTtJQUMxQixDQUFDO0lBRU0sb0NBQU8sR0FBZCxVQUFlLElBQWE7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO1FBQzNCLHFDQUFxQztRQUVyQyxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTCx5QkFBQztBQUFELENBekRBLEFBeURDLENBekR1Qyx1QkFBVSxHQXlEakQ7QUF6RFksZ0RBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIlxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIlxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCJcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiXG5cbmV4cG9ydCBjbGFzcyBEcm9wT2ZmVG9vbHNBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcml2YXRlIGRyb3BwZWRPZmZUb29sczogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHVibGljIHRhcmdldDogU3VwcGx5UGlsZUNvbXBvbmVudCAvLyB3aGVyZSB3ZSBkcm9wIG9mZiB0aGUgIHRvb2xzXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNOZXdUb29scywgdHJ1ZSkgLy8gY2FuJ3QgZHJvcCBvZmYgdG9vbHMgaWYgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIHNvbWVcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc05ld1Rvb2xzLCBmYWxzZSkgLy8gd2Ugbm93IGhhdmUgbm8gdG9vbHNcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkNvbGxlY3RUb29scywgdHJ1ZSkgLy8gd2UgY29sbGVjdGVkIHRvb2xzXG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyb3BwZWRPZmZUb29scyA9IGZhbHNlXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcHBlZE9mZlRvb2xzXG4gICAgfVxuXG4gICAgcHVibGljIHJlcXVpcmVzSW5SYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWUgLy8geWVzIHdlIG5lZWQgdG8gYmUgbmVhciBhIHN1cHBseSBwaWxlIHNvIHdlIGNhbiBkcm9wIG9mZiB0aGUgdG9vbHNcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIC8vVE9ETzogZmluZCB0aGUgbmVhcmVzdCBzdXBwbHkgcGlsZSB0aGF0IGhhcyBzcGFyZSB0b29sc1xuICAgICAgICBsZXQgc3VwcGx5UGlsZXM6IFN1cHBseVBpbGVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnN1cHBseVBpbGVDb21wc1xuICAgICAgICBsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGxcbiAgICAgICAgbGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwXG4gICAgICAgIGxldCB2ZyA9IGFnZW50LmdldENvbXBvbmVudChWR2FtZU9iamVjdClcbiAgICAgICAgZm9yIChsZXQgc3VwcGx5IG9mIHN1cHBseVBpbGVzKSB7XG4gICAgICAgICAgICBpZiAoY2xvc2VzdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuICAgICAgICAgICAgICAgIGNsb3Nlc3QgPSBzdXBwbHlcbiAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZSh2ZylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgICAgICAgICAgbGV0IGRpc3Q6IG51bWJlciA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZSh2ZylcbiAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3QgPSBzdXBwbHlcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdERpc3QgPSBkaXN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbG9zZXN0ID09IG51bGwpIHJldHVybiBmYWxzZVxuXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gY2xvc2VzdFxuXG4gICAgICAgIHJldHVybiBjbG9zZXN0ICE9IG51bGxcbiAgICB9XG5cbiAgICBwdWJsaWMgcGVyZm9ybShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMudGFyZ2V0Lm51bVRvb2xzICs9IDJcbiAgICAgICAgdGhpcy5kcm9wcGVkT2ZmVG9vbHMgPSB0cnVlXG4gICAgICAgIC8vVE9ETyBwbGF5IGVmZmVjdCwgY2hhbmdlIGFjdG9yIGljb25cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==
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
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
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
    DropOffFirewoodAction.prototype.checkProceduralPrecondition = function (go) {
        // TODO:find the nearest supply pile that has spare firewood
        var supplyPiles = Environment_1.Environment.supplyPileComps;
        var closest = null;
        var closestDist = 0;
        var vGameObject = go.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = supply;
                closestDist = supply.distanceSquare(vGameObject);
            }
            else {
                // is this one closer than the last?
                var dist = supply.distanceSquare(vGameObject);
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
    DropOffFirewoodAction.prototype.perform = function (node) {
        var labourer = node.getComponent(Labourer_1.Labourer);
        var backpack = labourer.backpack;
        this.target.numFirewood += backpack.numFirewood;
        backpack.numFirewood = 0;
        this.droppedOffFirewood = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZkZpcmV3b29kQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBeUQ7QUFDekQsdURBQXFEO0FBQ3JELHNEQUFvRDtBQUNwRCw4Q0FBNEM7QUFDNUMsa0RBQWdEO0FBR2hEO0lBQTJDLHlDQUFVO0lBR2pEO1FBQUEsWUFDSSxpQkFBTyxTQUlWO1FBUE8sd0JBQWtCLEdBQVksS0FBSyxDQUFBO1FBSXZDLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQyx3REFBd0Q7UUFDN0csS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQSxDQUFDLDBCQUEwQjtRQUMxRSxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsd0JBQXdCOztJQUMvRSxDQUFDO0lBRU0scUNBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUE7SUFDbkMsQ0FBQztJQUVNLHNDQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQTtJQUNsQyxDQUFDO0lBRU0sK0NBQWUsR0FBdEI7UUFDSSxPQUFPLElBQUksQ0FBQSxDQUFDLHVFQUF1RTtJQUN2RixDQUFDO0lBQ00sMkRBQTJCLEdBQWxDLFVBQW1DLEVBQVc7UUFDMUMsNERBQTREO1FBQzVELElBQUksV0FBVyxHQUEwQix5QkFBVyxDQUFDLGVBQWUsQ0FBQTtRQUNwRSxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFBO1FBQ3ZDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQTtRQUMzQixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLHlCQUFXLENBQUMsQ0FBQTtRQUM5QyxLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDWCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtnQkFDaEIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDbkQ7aUJBQU07Z0JBQ0gsb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUNyRCxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3BCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtvQkFDaEIsV0FBVyxHQUFHLElBQUksQ0FBQTtpQkFDckI7YUFDSjtTQUNKO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUFFLE9BQU8sS0FBSyxDQUFBO1FBRWpDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFBO1FBRXJCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQTtJQUMxQixDQUFDO0lBRU0sdUNBQU8sR0FBZCxVQUFlLElBQWE7UUFDeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUSxDQUFDLENBQUE7UUFDMUMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQTtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFBO1FBQ3JELFFBQVEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUE7UUFDOUIsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQXpEQSxBQXlEQyxDQXpEMEMsdUJBQVUsR0F5RHBEO0FBekRZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiXG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCJcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiXG5pbXBvcnQgeyBTdXBwbHlQaWxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL1N1cHBseVBpbGVDb21wb25lbnRcIlxuXG5leHBvcnQgY2xhc3MgRHJvcE9mZkZpcmV3b29kQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBkcm9wcGVkT2ZmRmlyZXdvb2Q6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHB1YmxpYyB0YXJnZXQ6IFN1cHBseVBpbGVDb21wb25lbnQgLy8gd2hlcmUgd2UgZHJvcCBvZmYgdGhlIG9yZVxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzRmlyZXdvb2QsIHRydWUpIC8vIGNhbid0IGRyb3Agb2ZmIGZpcmV3b29kIGlmIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBzb21lXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNGaXJld29vZCwgZmFsc2UpIC8vIHdlIG5vdyBoYXZlIG5vIGZpcmV3b29kXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5Db2xsZWN0RmlyZXdvb2QsIHRydWUpIC8vIHdlIGNvbGxlY3RlZCBmaXJld29vZFxuICAgIH1cblxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcm9wcGVkT2ZmRmlyZXdvb2QgPSBmYWxzZVxuICAgIH1cblxuICAgIHB1YmxpYyBpc0RvbmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3BwZWRPZmZGaXJld29vZFxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0cnVlIC8vIHllcyB3ZSBuZWVkIHRvIGJlIG5lYXIgYSBzdXBwbHkgcGlsZSBzbyB3ZSBjYW4gZHJvcCBvZmYgdGhlIGZpcmV3b29kXG4gICAgfVxuICAgIHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oZ286IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgLy8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHN1cHBseSBwaWxlIHRoYXQgaGFzIHNwYXJlIGZpcmV3b29kXG4gICAgICAgIGxldCBzdXBwbHlQaWxlczogU3VwcGx5UGlsZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQuc3VwcGx5UGlsZUNvbXBzXG4gICAgICAgIGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbFxuICAgICAgICBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDBcbiAgICAgICAgbGV0IHZHYW1lT2JqZWN0ID0gZ28uZ2V0Q29tcG9uZW50KFZHYW1lT2JqZWN0KVxuICAgICAgICBmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcbiAgICAgICAgICAgIGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XG4gICAgICAgICAgICAgICAgY2xvc2VzdCA9IHN1cHBseVxuICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKHZHYW1lT2JqZWN0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cbiAgICAgICAgICAgICAgICBsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKHZHYW1lT2JqZWN0KVxuICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdCA9IHN1cHBseVxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IGRpc3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsb3Nlc3QgPT0gbnVsbCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgdGhpcy50YXJnZXQgPSBjbG9zZXN0XG5cbiAgICAgICAgcmV0dXJuIGNsb3Nlc3QgIT0gbnVsbFxuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGxhYm91cmVyID0gbm9kZS5nZXRDb21wb25lbnQoTGFib3VyZXIpXG4gICAgICAgIGxldCBiYWNrcGFjayA9IGxhYm91cmVyLmJhY2twYWNrXG4gICAgICAgIHRoaXMudGFyZ2V0Lm51bUZpcmV3b29kICs9IGJhY2twYWNrLm51bUZpcmV3b29kXG5cdFx0YmFja3BhY2subnVtRmlyZXdvb2QgPSAwXG4gICAgICAgIHRoaXMuZHJvcHBlZE9mZkZpcmV3b29kID0gdHJ1ZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==
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
var VGameObject_1 = require("../../base/VGameObject");
var Labourer_1 = require("../labourers/Labourer");
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
        var vg = agent.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (supply.numLogs > 0) {
                if (closest == null) {
                    // first one, so choose it for now
                    closest = supply;
                    closestDist = supply.distanceSquare(vg);
                }
                else {
                    // is this one closer than the last?
                    var dist = supply.distanceSquare(vg);
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
    PickUpLogsAction.prototype.perform = function (node) {
        if (this.target.numLogs > 0) {
            this.target.numLogs -= 1;
            this.hasLogs = true;
            var labourer = node.getComponent(Labourer_1.Labourer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvUGlja1VwTG9nc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFELHVEQUFzRDtBQUN0RCxzREFBcUQ7QUFDckQsa0RBQWlEO0FBR2pEO0lBQXNDLG9DQUFVO0lBRy9DO1FBQUEsWUFDQyxpQkFBTyxTQUdQO1FBTk8sYUFBTyxHQUFZLEtBQUssQ0FBQztRQUloQyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsMENBQTBDO1FBQzdGLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7O0lBQ2xFLENBQUM7SUFFTSxnQ0FBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLGlDQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVNLDBDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU0sc0RBQTJCLEdBQWxDLFVBQW1DLEtBQWE7UUFDL0Msd0RBQXdEO1FBQ3hELElBQUksV0FBVyxHQUEwQixFQUFFLENBQUM7UUFDNUMsSUFBSSxPQUFPLEdBQXdCLElBQUksQ0FBQztRQUN4QyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUM7UUFDNUIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyx5QkFBVyxDQUFDLENBQUE7UUFDeEMsS0FBbUIsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUU7WUFBM0IsSUFBSSxNQUFNLG9CQUFBO1lBQ2QsSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO29CQUNwQixrQ0FBa0M7b0JBQ2xDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQ2pCLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN4QztxQkFBTTtvQkFDTixvQ0FBb0M7b0JBQ3BDLElBQUksSUFBSSxHQUFXLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzdDLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTt3QkFDdkIsZ0NBQWdDO3dCQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFDO3dCQUNqQixXQUFXLEdBQUcsSUFBSSxDQUFDO3FCQUNuQjtpQkFDRDthQUNEO1NBQ0Q7UUFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1FBRWQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFFdEIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxrQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUSxDQUFDLENBQUE7WUFDMUMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUVyQixPQUFPLElBQUksQ0FBQztTQUNaO2FBQU07WUFDTiwrRkFBK0Y7WUFDL0YsT0FBTyxLQUFLLENBQUM7U0FDYjtJQUNGLENBQUM7SUFDRix1QkFBQztBQUFELENBbEVBLEFBa0VDLENBbEVxQyx1QkFBVSxHQWtFL0M7QUFsRVksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XG5pbXBvcnQgeyBTdXBwbHlQaWxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL1N1cHBseVBpbGVDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFBpY2tVcExvZ3NBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcblx0cHJpdmF0ZSBoYXNMb2dzOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyB0YXJnZXQ6IFN1cHBseVBpbGVDb21wb25lbnQ7ICAvLyB3aGVyZSB3ZSBnZXQgdGhlIGxvZ3MgZnJvbVxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzTG9ncywgZmFsc2UpOyAvLyBkb24ndCBnZXQgYSBsb2dzIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmVcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuSGFzTG9ncywgdHJ1ZSk7IC8vIHdlIG5vdyBoYXZlIGEgbG9nc1xuXHR9XG5cblx0cHVibGljIHJlc2V0KCkge1xuXHRcdHRoaXMuaGFzTG9ncyA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5oYXNMb2dzO1xuXHR9XG5cblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6Y2MuTm9kZSk6IGJvb2xlYW4ge1xuXHRcdC8vVE9ETzogZmluZCB0aGUgbmVhcmVzdCBzdXBwbHkgcGlsZSB0aGF0IGhhcyBzcGFyZSBsb2dzXG5cdFx0bGV0IHN1cHBseVBpbGVzOiBTdXBwbHlQaWxlQ29tcG9uZW50W10gPSBbXTtcblx0XHRsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGw7XG5cdFx0bGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwO1xuXHRcdGxldCB2ZyA9IGFnZW50LmdldENvbXBvbmVudChWR2FtZU9iamVjdClcblx0XHRmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcblx0XHRcdGlmIChzdXBwbHkubnVtTG9ncyA+IDApIHtcblx0XHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcblx0XHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKHZnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cblx0XHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKHZnKTtcblx0XHRcdFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcblx0XHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbClcblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuXHRcdHJldHVybiBjbG9zZXN0ICE9IG51bGw7XG5cdH1cblxuXHRwdWJsaWMgcGVyZm9ybShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMudGFyZ2V0Lm51bUxvZ3MgPiAwKSB7XG5cdFx0XHR0aGlzLnRhcmdldC5udW1Mb2dzIC09IDE7XG5cdFx0XHR0aGlzLmhhc0xvZ3MgPSB0cnVlO1xuXHRcdFx0bGV0IGxhYm91cmVyID0gbm9kZS5nZXRDb21wb25lbnQoTGFib3VyZXIpXG5cdFx0XHRsZXQgYmFja3BhY2sgPSBsYWJvdXJlci5iYWNrcGFjaztcblx0XHRcdGJhY2twYWNrLm51bUxvZ3MgPSAxO1xuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gd2UgZ290IHRoZXJlIGJ1dCB0aGVyZSB3YXMgbm8gbG9ncyBhdmFpbGFibGUhIFNvbWVvbmUgZ290IHRoZXJlIGZpcnN0LiBDYW5ub3QgcGVyZm9ybSBhY3Rpb25cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cbn0iXX0=
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
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
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
    ForgeToolAction.prototype.checkProceduralPrecondition = function (go) {
        //TODO: find the nearest forge
        var forges = Environment_1.Environment.forgeComps;
        var closest = null;
        var closestDist = 0;
        var vg = go.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, forges_1 = forges; _i < forges_1.length; _i++) {
            var forge = forges_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = forge;
                closestDist = forge.distanceSquare(vg);
            }
            else {
                // is this one closer than the last?
                var dist = forge.distanceSquare(vg);
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
    ForgeToolAction.prototype.perform = function (node) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.forgeDuration) {
            var labourer = node.getComponent(Labourer_1.Labourer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRm9yZ2VUb29sQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBOEM7QUFDOUMsMkRBQXlEO0FBQ3pELHVEQUFxRDtBQUNyRCxzREFBb0Q7QUFFcEQsOENBQTRDO0FBRTVDLGtEQUFnRDtBQUVoRDtJQUFxQyxtQ0FBVTtJQU0zQztRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQVRPLFlBQU0sR0FBWSxLQUFLLENBQUE7UUFHdkIsZUFBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixtQkFBYSxHQUFXLENBQUMsQ0FBQSxDQUFDLFVBQVU7UUFHeEMsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUMvQyxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFBOztJQUNsRCxDQUFDO0lBRU0sK0JBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFDTSx5Q0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVNLHFEQUEyQixHQUFsQyxVQUFtQyxFQUFXO1FBQzFDLDhCQUE4QjtRQUM5QixJQUFJLE1BQU0sR0FBcUIseUJBQVcsQ0FBQyxVQUFVLENBQUE7UUFDckQsSUFBSSxPQUFPLEdBQW1CLElBQUksQ0FBQTtRQUNsQyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUE7UUFDM0IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyx5QkFBVyxDQUFDLENBQUE7UUFDckMsS0FBa0IsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUU7WUFBckIsSUFBSSxLQUFLLGVBQUE7WUFDVixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLEtBQUssQ0FBQTtnQkFDZixXQUFXLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTthQUN6QztpQkFBTTtnQkFDSCxvQ0FBb0M7Z0JBQ3BDLElBQUksSUFBSSxHQUFXLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzNDLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtvQkFDcEIsZ0NBQWdDO29CQUNoQyxPQUFPLEdBQUcsS0FBSyxDQUFBO29CQUNmLFdBQVcsR0FBRyxJQUFJLENBQUE7aUJBQ3JCO2FBQ0o7U0FDSjtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQTtRQUVqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQTtRQUVyQixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUE7SUFDMUIsQ0FBQztJQUVNLGlDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQzVELElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDMUQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUSxDQUFDLENBQUE7WUFDMUMsMEJBQTBCO1lBQzFCLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsUUFBUSxDQUFBO1lBQ25ELFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1NBQ3JCO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQS9EQSxBQStEQyxDQS9Eb0MsdUJBQVUsR0ErRDlDO0FBL0RZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi8uLi8uLi91dGlscy9UaW1lVXRpbFwiXG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIlxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiXG5pbXBvcnQgeyBGb3JnZUNvbXBvbmVudCB9IGZyb20gXCIuLi9Gb3JnZUNvbXBvbmVudFwiXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIlxuXG5leHBvcnQgY2xhc3MgRm9yZ2VUb29sQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBmb3JnZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHB1YmxpYyB0YXJnZXQ6IEZvcmdlQ29tcG9uZW50IC8vIHdoZXJlIHdlIGZvcmdlIHRvb2xzXG5cbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgZm9yZ2VEdXJhdGlvbjogbnVtYmVyID0gMiAvLyBzZWNvbmRzXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNPcmUsIHRydWUpXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNOZXdUb29scywgdHJ1ZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZm9yZ2VkID0gZmFsc2VcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9yZ2VkXG4gICAgfVxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihnbzogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICAvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3QgZm9yZ2VcbiAgICAgICAgbGV0IGZvcmdlczogRm9yZ2VDb21wb25lbnRbXSA9IEVudmlyb25tZW50LmZvcmdlQ29tcHNcbiAgICAgICAgbGV0IGNsb3Nlc3Q6IEZvcmdlQ29tcG9uZW50ID0gbnVsbFxuICAgICAgICBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDBcbiAgICAgICAgbGV0IHZnID0gZ28uZ2V0Q29tcG9uZW50KFZHYW1lT2JqZWN0KVxuICAgICAgICBmb3IgKGxldCBmb3JnZSBvZiBmb3JnZXMpIHtcbiAgICAgICAgICAgIGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XG4gICAgICAgICAgICAgICAgY2xvc2VzdCA9IGZvcmdlXG4gICAgICAgICAgICAgICAgY2xvc2VzdERpc3QgPSBmb3JnZS5kaXN0YW5jZVNxdWFyZSh2ZylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgICAgICAgICAgbGV0IGRpc3Q6IG51bWJlciA9IGZvcmdlLmRpc3RhbmNlU3F1YXJlKHZnKVxuICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdCA9IGZvcmdlXG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0ID0gZGlzdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xvc2VzdCA9PSBudWxsKSByZXR1cm4gZmFsc2VcblxuICAgICAgICB0aGlzLnRhcmdldCA9IGNsb3Nlc3RcblxuICAgICAgICByZXR1cm4gY2xvc2VzdCAhPSBudWxsXG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm0obm9kZTogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5zdGFydFRpbWUgPT0gMCkgdGhpcy5zdGFydFRpbWUgPSBUaW1lVXRpbC5nZXRUaW1lKClcbiAgICAgICAgaWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy5mb3JnZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICBsZXQgbGFib3VyZXIgPSBub2RlLmdldENvbXBvbmVudChMYWJvdXJlcilcbiAgICAgICAgICAgIC8vIGZpbmlzaGVkIGZvcmdpbmcgYSB0b29sXG4gICAgICAgICAgICBsZXQgYmFja3BhY2s6IEJhY2tQYWNrQ29tcG9uZW50ID0gbGFib3VyZXIuYmFja3BhY2tcbiAgICAgICAgICAgIGJhY2twYWNrLm51bU9yZSA9IDBcbiAgICAgICAgICAgIHRoaXMuZm9yZ2VkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIl19
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
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
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
        var vg = agent.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (supply.numOre >= 3) {
                // we need to take 3 ore
                if (closest == null) {
                    // first one, so choose it for now
                    closest = supply;
                    closestDist = supply.distanceSquare(vg);
                }
                else {
                    // is this one closer than the last?
                    var dist = supply.distanceSquare(vg);
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
    PickUpOreAction.prototype.perform = function (node) {
        if (this.target.numOre >= 3) {
            this.target.numOre -= 3;
            this.hasOre = true;
            var labourer = node.getComponent(Labourer_1.Labourer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvUGlja1VwT3JlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBeUQ7QUFDekQsdURBQXFEO0FBQ3JELHNEQUFvRDtBQUVwRCw4Q0FBNEM7QUFDNUMsa0RBQWdEO0FBR2hEO0lBQXFDLG1DQUFVO0lBRzNDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBTk8sWUFBTSxHQUFZLEtBQUssQ0FBQTtRQUkzQixLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFBLENBQUMseUNBQXlDO1FBQzFGLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQyxvQkFBb0I7O0lBQ2xFLENBQUM7SUFFTSwrQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDdkIsQ0FBQztJQUVNLGdDQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUVNLHlDQUFlLEdBQXRCO1FBQ0ksT0FBTyxJQUFJLENBQUEsQ0FBQyxpRUFBaUU7SUFDakYsQ0FBQztJQUVNLHFEQUEyQixHQUFsQyxVQUFtQyxLQUFjO1FBQzdDLGtEQUFrRDtRQUNsRCxJQUFJLFdBQVcsR0FBMEIseUJBQVcsQ0FBQyxlQUFlLENBQUE7UUFDcEUsSUFBSSxPQUFPLEdBQXdCLElBQUksQ0FBQTtRQUN2QyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUE7UUFDM0IsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyx5QkFBVyxDQUFDLENBQUE7UUFDeEMsS0FBbUIsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUU7WUFBM0IsSUFBSSxNQUFNLG9CQUFBO1lBQ1gsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDcEIsd0JBQXdCO2dCQUN4QixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ2pCLGtDQUFrQztvQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtvQkFDaEIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7aUJBQzFDO3FCQUFNO29CQUNILG9DQUFvQztvQkFDcEMsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtvQkFDNUMsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO3dCQUNwQixnQ0FBZ0M7d0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUE7d0JBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUE7cUJBQ3JCO2lCQUNKO2FBQ0o7U0FDSjtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQTtRQUVqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQTtRQUVyQixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUE7SUFDMUIsQ0FBQztJQUVNLGlDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQTtZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUNsQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFRLENBQUMsQ0FBQTtZQUMxQyxxQ0FBcUM7WUFDckMsSUFBSSxRQUFRLEdBQXNCLFFBQVEsQ0FBQyxRQUFRLENBQUE7WUFDbkQsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUE7WUFFcEIsT0FBTyxJQUFJLENBQUE7U0FDZDthQUFNO1lBQ0gsOEZBQThGO1lBQzlGLE9BQU8sS0FBSyxDQUFBO1NBQ2Y7SUFDTCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQW5FQSxBQW1FQyxDQW5Fb0MsdUJBQVUsR0FtRTlDO0FBbkVZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIlxuaW1wb3J0IHsgQmFja1BhY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vQmFja1BhY2tDb21wb25lbnRcIlxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIlxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCJcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiXG5cbmV4cG9ydCBjbGFzcyBQaWNrVXBPcmVBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcml2YXRlIGhhc09yZTogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHVibGljIHRhcmdldDogU3VwcGx5UGlsZUNvbXBvbmVudCAvLyB3aGVyZSB3ZSBnZXQgdGhlIG9yZSBmcm9tXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNPcmUsIGZhbHNlKSAvLyBkb24ndCBnZXQgYSBvcmUgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxuICAgICAgICB0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuSGFzT3JlLCB0cnVlKSAvLyB3ZSBub3cgaGF2ZSBhIG9yZVxuICAgIH1cblxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oYXNPcmUgPSBmYWxzZVxuICAgIH1cblxuICAgIHB1YmxpYyBpc0RvbmUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc09yZVxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlIC8vIHllcyB3ZSBuZWVkIHRvIGJlIG5lYXIgYSBzdXBwbHkgcGlsZSBzbyB3ZSBjYW4gcGljayB1cCB0aGUgb3JlXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICAvL2ZpbmQgdGhlIG5lYXJlc3Qgc3VwcGx5IHBpbGUgdGhhdCBoYXMgc3BhcmUgb3Jlc1xuICAgICAgICBsZXQgc3VwcGx5UGlsZXM6IFN1cHBseVBpbGVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnN1cHBseVBpbGVDb21wc1xuICAgICAgICBsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGxcbiAgICAgICAgbGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwXG4gICAgICAgIGxldCB2ZyA9IGFnZW50LmdldENvbXBvbmVudChWR2FtZU9iamVjdClcbiAgICAgICAgZm9yIChsZXQgc3VwcGx5IG9mIHN1cHBseVBpbGVzKSB7XG4gICAgICAgICAgICBpZiAoc3VwcGx5Lm51bU9yZSA+PSAzKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB0YWtlIDMgb3JlXG4gICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3QgPSBzdXBwbHlcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdERpc3QgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUodmcpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXN0OiBudW1iZXIgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUodmcpXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXN0ID0gc3VwcGx5XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IGRpc3RcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xvc2VzdCA9PSBudWxsKSByZXR1cm4gZmFsc2VcblxuICAgICAgICB0aGlzLnRhcmdldCA9IGNsb3Nlc3RcblxuICAgICAgICByZXR1cm4gY2xvc2VzdCAhPSBudWxsXG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm0obm9kZTogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQubnVtT3JlID49IDMpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Lm51bU9yZSAtPSAzXG4gICAgICAgICAgICB0aGlzLmhhc09yZSA9IHRydWVcbiAgICAgICAgICAgIGxldCBsYWJvdXJlciA9IG5vZGUuZ2V0Q29tcG9uZW50KExhYm91cmVyKVxuICAgICAgICAgICAgLy9UT0RPIHBsYXkgZWZmZWN0LCBjaGFuZ2UgYWN0b3IgaWNvblxuICAgICAgICAgICAgbGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrXG4gICAgICAgICAgICBiYWNrcGFjay5udW1PcmUgKz0gM1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gd2UgZ290IHRoZXJlIGJ1dCB0aGVyZSB3YXMgbm8gb3JlIGF2YWlsYWJsZSEgU29tZW9uZSBnb3QgdGhlcmUgZmlyc3QuIENhbm5vdCBwZXJmb3JtIGFjdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
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
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
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
        var vg = agent.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, rocks_1 = rocks; _i < rocks_1.length; _i++) {
            var rock = rocks_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = rock;
                closestDist = rock.distanceSquare(vg);
            }
            else {
                // is this one closer than the last?
                var dist = rock.distanceSquare(vg);
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
    MineOreAction.prototype.perform = function (node) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.miningDuration) {
            // finished mining
            var labourer = node.getComponent(Labourer_1.Labourer);
            var backpack = labourer.backpack;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvTWluZU9yZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQThDO0FBQzlDLDJEQUF5RDtBQUN6RCx1REFBcUQ7QUFDckQsc0RBQW9EO0FBRXBELDhDQUE0QztBQUU1QyxrREFBZ0Q7QUFHaEQ7SUFBbUMsaUNBQVU7SUFNekM7UUFBQSxZQUNJLGlCQUFPLFNBSVY7UUFWTyxXQUFLLEdBQVksS0FBSyxDQUFBO1FBRXRCLGVBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsb0JBQWMsR0FBVyxDQUFDLENBQUEsQ0FBQyxXQUFXO1FBSTFDLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQyw0QkFBNEI7UUFDN0UsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQSxDQUFDLG9DQUFvQztRQUNyRixLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBOztJQUM3QyxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFTSx1Q0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFBLENBQUMsZ0NBQWdDO0lBQ2hELENBQUM7SUFFTSxtREFBMkIsR0FBbEMsVUFBbUMsS0FBYztRQUM3Qyw4Q0FBOEM7UUFDOUMsSUFBSSxLQUFLLEdBQXdCLHlCQUFXLENBQUMsU0FBUyxDQUFBO1FBQ3RELElBQUksT0FBTyxHQUFzQixJQUFJLENBQUE7UUFDckMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFBO1FBQzNCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMseUJBQVcsQ0FBQyxDQUFBO1FBQ3hDLEtBQWlCLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUU7WUFBbkIsSUFBSSxJQUFJLGNBQUE7WUFDVCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLElBQUksQ0FBQTtnQkFDZCxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTthQUN4QztpQkFBTTtnQkFDSCxvQ0FBb0M7Z0JBQ3BDLElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzFDLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtvQkFDcEIsZ0NBQWdDO29CQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFBO29CQUNkLFdBQVcsR0FBRyxJQUFJLENBQUE7aUJBQ3JCO2FBQ0o7U0FDSjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFBO1FBRXJCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQTtJQUMxQixDQUFDO0lBRU0sK0JBQU8sR0FBZCxVQUFlLElBQWE7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDNUQsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUMzRCxrQkFBa0I7WUFDbEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUSxDQUFDLENBQUE7WUFDMUMsSUFBSSxRQUFRLEdBQXNCLFFBQVEsQ0FBQyxRQUFRLENBQUE7WUFDbkQsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUE7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7WUFDakIsSUFBSSxJQUFJLEdBQWtCLFFBQVEsQ0FBQyxJQUFJLENBQUE7WUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUNsQixpQ0FBaUM7Z0JBQ2pDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQTthQUN6QjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQXJFQSxBQXFFQyxDQXJFa0MsdUJBQVUsR0FxRTVDO0FBckVZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi8uLi8uLi91dGlscy9UaW1lVXRpbFwiXG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIlxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiXG5pbXBvcnQgeyBJcm9uUm9ja0NvbXBvbmVudCB9IGZyb20gXCIuLi9Jcm9uUm9ja0NvbXBvbmVudFwiXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIlxuaW1wb3J0IHsgVG9vbENvbXBvbmVudCB9IGZyb20gXCIuLi9Ub29sQ29tcG9uZW50XCJcblxuZXhwb3J0IGNsYXNzIE1pbmVPcmVBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcml2YXRlIG1pbmVkOiBib29sZWFuID0gZmFsc2VcblxuICAgIHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBtaW5pbmdEdXJhdGlvbjogbnVtYmVyID0gMiAvLyBzZWNvbmRzO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNUb29sLCB0cnVlKSAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNPcmUsIGZhbHNlKSAvLyBpZiB3ZSBoYXZlIG9yZSB3ZSBkb24ndCB3YW50IG1vcmVcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc09yZSwgdHJ1ZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWluZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IDBcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNEb25lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5taW5lZFxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlIC8vIHllcyB3ZSBuZWVkIHRvIGJlIG5lYXIgYSByb2NrXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICAvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3Qgcm9jayB0aGF0IHdlIGNhbiBtaW5lXG4gICAgICAgIGxldCByb2NrczogSXJvblJvY2tDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnJvY2tDb21wc1xuICAgICAgICBsZXQgY2xvc2VzdDogSXJvblJvY2tDb21wb25lbnQgPSBudWxsXG4gICAgICAgIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMFxuICAgICAgICBsZXQgdmcgPSBhZ2VudC5nZXRDb21wb25lbnQoVkdhbWVPYmplY3QpXG4gICAgICAgIGZvciAobGV0IHJvY2sgb2Ygcm9ja3MpIHtcbiAgICAgICAgICAgIGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XG4gICAgICAgICAgICAgICAgY2xvc2VzdCA9IHJvY2tcbiAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IHJvY2suZGlzdGFuY2VTcXVhcmUodmcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlzIHRoaXMgb25lIGNsb3NlciB0aGFuIHRoZSBsYXN0P1xuICAgICAgICAgICAgICAgIGxldCBkaXN0OiBudW1iZXIgPSByb2NrLmRpc3RhbmNlU3F1YXJlKHZnKVxuICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdCA9IHJvY2tcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdERpc3QgPSBkaXN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gY2xvc2VzdFxuXG4gICAgICAgIHJldHVybiBjbG9zZXN0ICE9IG51bGxcbiAgICB9XG5cbiAgICBwdWJsaWMgcGVyZm9ybShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKSB0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKVxuICAgICAgICBpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLm1pbmluZ0R1cmF0aW9uKSB7XG4gICAgICAgICAgICAvLyBmaW5pc2hlZCBtaW5pbmdcbiAgICAgICAgICAgIGxldCBsYWJvdXJlciA9IG5vZGUuZ2V0Q29tcG9uZW50KExhYm91cmVyKVxuICAgICAgICAgICAgbGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrXG4gICAgICAgICAgICBiYWNrcGFjay5udW1PcmUgKz0gMlxuICAgICAgICAgICAgdGhpcy5taW5lZCA9IHRydWVcbiAgICAgICAgICAgIGxldCB0b29sOiBUb29sQ29tcG9uZW50ID0gbGFib3VyZXIudG9vbFxuICAgICAgICAgICAgdG9vbC51c2UoMC41KVxuICAgICAgICAgICAgaWYgKHRvb2wuZGVzdHJveWVkKCkpIHtcbiAgICAgICAgICAgICAgICAvL1RPRE865Yig6ZmkIERlc3Ryb3koYmFja3BhY2sudG9vbCk7XG4gICAgICAgICAgICAgICAgbGFib3VyZXIuZGVzdHJveVRvb2woKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIl19
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
var _a = cc._decorator, requireComponent = _a.requireComponent, ccclass = _a.ccclass, property = _a.property;
var Labourer = /** @class */ (function (_super) {
    __extends(Labourer, _super);
    function Labourer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labourerType = LabourerType_1.LabourerType.None;
        _this.bMoving = false;
        _this.bMoveEnd = false;
        return _this;
    }
    Labourer.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var goapAgent = this.getComponent(GoapAgent_1.GoapAgent);
        goapAgent.setGoap(this);
        this.bean = GameDataManager_1.GameDataManager.I.t_labourderContainer.getLabourerByType(this.labourerType);
        if (!this.tool) {
            this.pickUpTool();
        }
    };
    Labourer.prototype.initAvaliableActions = function (actionCls) {
        var action;
        this.availableActions = [];
        for (var i = 0, len = actionCls.length; i < len; i++) {
            action = new actionCls[i]();
            this.availableActions.push(action);
        }
    };
    Labourer.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
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
    Labourer.prototype.createGoalState = function () {
        throw new Error("Method not implemented.");
    };
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
    };
    /**设置背包里的物品 */
    Labourer.prototype.setBackPack = function (backpack) {
        this.backpack = backpack;
        backpack.setOwner(this);
    };
    /**拾取工具 */
    Labourer.prototype.pickUpTool = function () {
        this.tool = new ToolComponent_1.ToolComponent();
        console.log("拾取工具", this.constructor.name);
    };
    /**销毁工具 */
    Labourer.prototype.destroyTool = function () {
        this.tool = undefined;
    };
    Labourer.prototype.updateBackPack = function () { };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy9MYWJvdXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXlEO0FBRXpELHFEQUFtRDtBQUVuRCw4REFBNEQ7QUFDNUQsd0RBQXNEO0FBR3RELGtEQUFnRDtBQUUxQyxJQUFBLEtBQTBDLEVBQUUsQ0FBQyxVQUFVLEVBQXJELGdCQUFnQixzQkFBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUU3RDtJQUE4Qiw0QkFBUztJQUF2QztRQUFBLHFFQW1IQztRQWpIVSxrQkFBWSxHQUFpQiwyQkFBWSxDQUFDLElBQUksQ0FBQTtRQU9yRCxhQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ2YsY0FBUSxHQUFHLEtBQUssQ0FBQTs7SUF5R3BCLENBQUM7SUF4R1UseUJBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFBO1FBQ2QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBUyxDQUFDLENBQUE7UUFDNUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLGlDQUFlLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN2RixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtTQUNwQjtJQUNMLENBQUM7SUFFUyx1Q0FBb0IsR0FBOUIsVUFBK0IsU0FBZ0I7UUFDM0MsSUFBSSxNQUFNLENBQUE7UUFDVixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFBO1FBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEQsTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7WUFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUNyQztJQUNMLENBQUM7SUFFTSx5QkFBTSxHQUFiLFVBQWMsRUFBVTtRQUMxQixpQkFBTSxNQUFNLFlBQUMsRUFBRSxDQUFDLENBQUE7SUFDakIsQ0FBQztJQUVTLGdDQUFhLEdBQXBCO1FBQ0ksSUFBSSxTQUFTLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFBO1FBQzlELFNBQVMsQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQzFELFNBQVMsQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQzNELFNBQVMsQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFBO1FBQ3BFLFNBQVMsQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFDbkQsT0FBTyxTQUFTLENBQUE7SUFDcEIsQ0FBQztJQUVPLDBCQUFPLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFBO0lBQzVCLENBQUM7SUFFTSxrQ0FBZSxHQUF0QjtRQUNJLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRU0sNkJBQVUsR0FBakIsVUFBa0IsVUFBK0I7UUFDN0MsaUZBQWlGO1FBQ2pGLGdGQUFnRjtRQUNoRixrREFBa0Q7SUFDdEQsQ0FBQztJQUVNLDRCQUFTLEdBQWhCLFVBQWlCLElBQXlCLEVBQUUsT0FBcUI7UUFDN0QsbUNBQW1DO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLHFCQUFTLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUMzRSxDQUFDO0lBRU0sa0NBQWUsR0FBdEI7UUFDSSxzRUFBc0U7UUFDdEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFTSw4QkFBVyxHQUFsQixVQUFtQixPQUFtQjtRQUNsQyx3RUFBd0U7UUFDeEUsMEVBQTBFO1FBQzFFLHVCQUF1QjtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLHFCQUFTLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUN4RSxDQUFDO0lBRU0sNEJBQVMsR0FBaEIsVUFBaUIsVUFBc0IsRUFBRSxLQUFhO1FBQXRELGlCQXNCQztRQXJCRyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFBO1FBQzlCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO1lBQ3JCLE9BQU8sSUFBSSxDQUFBO1NBQ2Q7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQTtZQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNyRSxPQUFPLENBQUMsSUFBSSxDQUNSLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ1IsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Z0JBQ3BCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO2dCQUNwQixVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQy9CLENBQUMsQ0FBQyxDQUNMLENBQUE7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtTQUM1QztRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUN4QixDQUFDO0lBRUQsY0FBYztJQUNQLDhCQUFXLEdBQWxCLFVBQW1CLFFBQTJCO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUNELFVBQVU7SUFDSCw2QkFBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUE7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsVUFBVTtJQUNILDhCQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUE7SUFDekIsQ0FBQztJQUVNLGlDQUFjLEdBQXJCLGNBQXlCLENBQUM7SUFoSDFCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztrREFDVjtJQUY1QyxRQUFRO1FBRHBCLE9BQU87T0FDSyxRQUFRLENBbUhwQjtJQUFELGVBQUM7Q0FuSEQsQUFtSEMsQ0FuSDZCLHFCQUFTLEdBbUh0QztBQW5IWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiXG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWdlbnRcIlxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9JR29hcFwiXG5pbXBvcnQgeyBHYW1lRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9HYW1lRGF0YU1hbmFnZXJcIlxuaW1wb3J0IHsgTGFib3VyZXJUeXBlIH0gZnJvbSBcIi4uLy4uL2RhdGEvTGFib3VyZXJUeXBlXCJcbmltcG9ydCB7IFRfTGFib3VyZXJCZWFuIH0gZnJvbSBcIi4uLy4uL2RhdGEvVF9MYWJvdXJlckNvbnRhaW5lclwiXG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiXG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSBcIi4uL1Rvb2xDb21wb25lbnRcIlxuXG5jb25zdCB7IHJlcXVpcmVDb21wb25lbnQsIGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIExhYm91cmVyIGV4dGVuZHMgR29hcEFnZW50IGltcGxlbWVudHMgSUdvYXAge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oTGFib3VyZXJUeXBlKSwgZGlzcGxheU5hbWU6IFwidHlwZVwiIH0pXG4gICAgcHVibGljIGxhYm91cmVyVHlwZTogTGFib3VyZXJUeXBlID0gTGFib3VyZXJUeXBlLk5vbmVcblxuICAgIC8qKuiDjOWMhSAqL1xuICAgIHB1YmxpYyBiYWNrcGFjazogQmFja1BhY2tDb21wb25lbnRcbiAgICBwdWJsaWMgYmVhbjogVF9MYWJvdXJlckJlYW5cbiAgICBwdWJsaWMgdG9vbDogVG9vbENvbXBvbmVudFxuXG4gICAgYk1vdmluZyA9IGZhbHNlXG4gICAgYk1vdmVFbmQgPSBmYWxzZVxuICAgIHB1YmxpYyBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpXG4gICAgICAgIGxldCBnb2FwQWdlbnQgPSB0aGlzLmdldENvbXBvbmVudChHb2FwQWdlbnQpXG4gICAgICAgIGdvYXBBZ2VudC5zZXRHb2FwKHRoaXMpXG4gICAgICAgIHRoaXMuYmVhbiA9IEdhbWVEYXRhTWFuYWdlci5JLnRfbGFib3VyZGVyQ29udGFpbmVyLmdldExhYm91cmVyQnlUeXBlKHRoaXMubGFib3VyZXJUeXBlKVxuICAgICAgICBpZiAoIXRoaXMudG9vbCkge1xuICAgICAgICAgICAgdGhpcy5waWNrVXBUb29sKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0QXZhbGlhYmxlQWN0aW9ucyhhY3Rpb25DbHM6IGFueVtdKSB7XG4gICAgICAgIGxldCBhY3Rpb25cbiAgICAgICAgdGhpcy5hdmFpbGFibGVBY3Rpb25zID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFjdGlvbkNscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgYWN0aW9uID0gbmV3IGFjdGlvbkNsc1tpXSgpXG4gICAgICAgICAgICB0aGlzLmF2YWlsYWJsZUFjdGlvbnMucHVzaChhY3Rpb24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcblx0XHRzdXBlci51cGRhdGUoZHQpXG5cdH1cblxuICAgIHB1YmxpYyBnZXRXb3JsZFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuICAgICAgICBsZXQgd29ybGREYXRhOiBNYXA8c3RyaW5nLCBPYmplY3Q+ID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKVxuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvblN0YXR1cy5IYXNPcmUsIHRoaXMuYmFja3BhY2suaGFzT3JlKCkpXG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIHRoaXMuYmFja3BhY2suaGFzTG9nKCkpXG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc0ZpcmV3b29kLCB0aGlzLmJhY2twYWNrLmhhc0ZpcmV3b29kKCkpXG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc1Rvb2wsIHRoaXMuaGFzVG9vbCgpKVxuICAgICAgICByZXR1cm4gd29ybGREYXRhXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYXNUb29sKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b29sICE9IG51bGxcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKVxuICAgIH1cblxuICAgIHB1YmxpYyBwbGFuRmFpbGVkKGZhaWxlZEdvYWQ6IE1hcDxzdHJpbmcsIE9iamVjdD4pIHtcbiAgICAgICAgLy8gTm90IGhhbmRsaW5nIHRoaXMgaGVyZSBzaW5jZSB3ZSBhcmUgbWFraW5nIHN1cmUgb3VyIGdvYWxzIHdpbGwgYWx3YXlzIHN1Y2NlZWQuXG4gICAgICAgIC8vIEJ1dCBub3JtYWxseSB5b3Ugd2FudCB0byBtYWtlIHN1cmUgdGhlIHdvcmxkIHN0YXRlIGhhcyBjaGFuZ2VkIGJlZm9yZSBydW5uaW5nXG4gICAgICAgIC8vIHRoZSBzYW1lIGdvYWwgYWdhaW4sIG9yIGVsc2UgaXQgd2lsbCBqdXN0IGZhaWwuXG4gICAgfVxuXG4gICAgcHVibGljIHBsYW5Gb3VuZChnb2FsOiBNYXA8c3RyaW5nLCBPYmplY3Q+LCBhY3Rpb25zOiBHb2FwQWN0aW9uW10pIHtcbiAgICAgICAgLy8gWWF5IHdlIGZvdW5kIGEgcGxhbiBmb3Igb3VyIGdvYWxcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGFuIGZvdW5kOiBcIiwgR29hcEFnZW50LnByZXR0eVByaW50QWN0aW9uc1F1ZXVlKGFjdGlvbnMpKVxuICAgIH1cblxuICAgIHB1YmxpYyBhY3Rpb25zRmluaXNoZWQoKTogdm9pZCB7XG4gICAgICAgIC8vIEV2ZXJ5dGhpbmcgaXMgZG9uZSwgd2UgY29tcGxldGVkIG91ciBhY3Rpb25zIGZvciB0aGlzIGdvb2wuIEhvb3JheSFcbiAgICAgICAgY29uc29sZS5sb2coXCJBY3Rpb25zIGNvbXBsZXRlZFwiKVxuICAgIH1cblxuICAgIHB1YmxpYyBwbGFuQWJvcnRlZChhYm9ydGVyOiBHb2FwQWN0aW9uKSB7XG4gICAgICAgIC8vIEFuIGFjdGlvbiBiYWlsZWQgb3V0IG9mIHRoZSBwbGFuLiBTdGF0ZSBoYXMgYmVlbiByZXNldCB0byBwbGFuIGFnYWluLlxuICAgICAgICAvLyBUYWtlIG5vdGUgb2Ygd2hhdCBoYXBwZW5lZCBhbmQgbWFrZSBzdXJlIGlmIHlvdSBydW4gdGhlIHNhbWUgZ29hbCBhZ2FpblxuICAgICAgICAvLyB0aGF0IGl0IGNhbiBzdWNjZWVkLlxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYW4gQWJvcnRlZDogXCIgKyBHb2FwQWdlbnQucHJldHR5UHJpbnRBY3Rpb24oYWJvcnRlcikpXG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVBZ2VudChuZXh0QWN0aW9uOiBHb2FwQWN0aW9uLCBkZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBuZXh0QWN0aW9uLnRhcmdldFxuICAgICAgICBpZiAodGhpcy5iTW92ZUVuZCkge1xuICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5iTW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmJNb3ZpbmcgPSB0cnVlXG4gICAgICAgICAgICBsZXQgYWN0aW9ucyA9IFtdXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MubW92ZVRvKDIsIG5ldyBjYy5WZWMyKHRhcmdldC5ub2RlLngsIHRhcmdldC5ub2RlLnkpKSlcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYk1vdmVFbmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYk1vdmluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIG5leHRBY3Rpb24uc2V0SW5SYW5nZSh0cnVlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY3Rpb25zKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmJNb3ZlRW5kXG4gICAgfVxuXG4gICAgLyoq6K6+572u6IOM5YyF6YeM55qE54mp5ZOBICovXG4gICAgcHVibGljIHNldEJhY2tQYWNrKGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmJhY2twYWNrID0gYmFja3BhY2tcbiAgICAgICAgYmFja3BhY2suc2V0T3duZXIodGhpcylcbiAgICB9XG4gICAgLyoq5ou+5Y+W5bel5YW3ICovXG4gICAgcHVibGljIHBpY2tVcFRvb2woKSB7XG4gICAgICAgIHRoaXMudG9vbCA9IG5ldyBUb29sQ29tcG9uZW50KClcbiAgICAgICAgY29uc29sZS5sb2coXCLmi77lj5blt6XlhbdcIiwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKVxuICAgIH1cblxuICAgIC8qKumUgOavgeW3peWFtyAqL1xuICAgIHB1YmxpYyBkZXN0cm95VG9vbCgpIHtcbiAgICAgICAgdGhpcy50b29sID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUJhY2tQYWNrKCkge31cbn1cbiJdfQ==
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
var VGameObject_1 = require("../../base/VGameObject");
var DropOffOreAction_1 = require("../actions/DropOffOreAction");
var MineOreAction_1 = require("../actions/MineOreAction");
var PickUpToolAction_1 = require("../actions/PickUpToolAction");
var Labourer_1 = require("./Labourer");
/**
 *  矿工
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var Miner = /** @class */ (function (_super) {
    __extends(Miner, _super);
    function Miner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Miner.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initAvaliableActions([MineOreAction_1.MineOreAction, PickUpToolAction_1.PickUpToolAction, DropOffOreAction_1.DropOffOreAction]);
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
        ccclass,
        requireComponent(VGameObject_1.VGameObject)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy9NaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXlEO0FBQ3pELHNEQUFvRDtBQUNwRCxnRUFBOEQ7QUFDOUQsMERBQXdEO0FBQ3hELGdFQUE4RDtBQUM5RCx1Q0FBcUM7QUFFckM7O0dBRUc7QUFDRyxJQUFBLEtBQTBDLEVBQUUsQ0FBQyxVQUFVLEVBQXJELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGdCQUFnQixzQkFBa0IsQ0FBQTtBQUc3RDtJQUEyQix5QkFBUTtJQUFuQzs7SUFrQkEsQ0FBQztJQWpCVSxzQkFBTSxHQUFiO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUE7UUFDZCxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyw2QkFBYSxFQUFFLG1DQUFnQixFQUFFLG1DQUFnQixDQUFDLENBQUMsQ0FBQTtJQUNsRixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksK0JBQWUsR0FBdEI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQTtRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVNLDhCQUFjLEdBQXJCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBakJRLEtBQUs7UUFGakIsT0FBTztRQUNQLGdCQUFnQixDQUFDLHlCQUFXLENBQUM7T0FDakIsS0FBSyxDQWtCakI7SUFBRCxZQUFDO0NBbEJELEFBa0JDLENBbEIwQixtQkFBUSxHQWtCbEM7QUFsQlksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIlxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBEcm9wT2ZmT3JlQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvRHJvcE9mZk9yZUFjdGlvblwiXG5pbXBvcnQgeyBNaW5lT3JlQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvTWluZU9yZUFjdGlvblwiXG5pbXBvcnQgeyBQaWNrVXBUb29sQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvUGlja1VwVG9vbEFjdGlvblwiXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuL0xhYm91cmVyXCJcblxuLyoqXG4gKiAg55+/5belXG4gKi9cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIHJlcXVpcmVDb21wb25lbnQgfSA9IGNjLl9kZWNvcmF0b3JcbkBjY2NsYXNzXG5AcmVxdWlyZUNvbXBvbmVudChWR2FtZU9iamVjdClcbmV4cG9ydCBjbGFzcyBNaW5lciBleHRlbmRzIExhYm91cmVyIHtcbiAgICBwdWJsaWMgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBzdXBlci5vbkxvYWQoKVxuICAgICAgICB0aGlzLmluaXRBdmFsaWFibGVBY3Rpb25zKFtNaW5lT3JlQWN0aW9uLCBQaWNrVXBUb29sQWN0aW9uLCBEcm9wT2ZmT3JlQWN0aW9uXSlcbiAgICB9XG4gICAgLyoqXG4gICAgICogT3VyIG9ubHkgZ29hbCB3aWxsIGV2ZXIgYmUgdG8gbWluZSBvcmUuXG4gICAgICogVGhlIE1pbmVPcmVBY3Rpb24gd2lsbCBiZSBhYmxlIHRvIGZ1bGZpbGwgdGhpcyBnb2FsLlxuICAgICAqL1xuICAgIHB1YmxpYyBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XG4gICAgICAgIGxldCBnb2FsID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKVxuICAgICAgICBnb2FsLnNldChBY3Rpb25TdGF0dXMuQ29sbGVjdE9yZSwgdHJ1ZSlcbiAgICAgICAgcmV0dXJuIGdvYWxcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQmFja1BhY2soKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi55+/55+z77yaXCIgKyB0aGlzLmJhY2twYWNrLm51bU9yZSlcbiAgICB9XG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy92bGFib3VyZXJzL1ZMYWJvdXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQXdEO0FBR3hEO0lBQXdDLDZCQUFXO0lBRWxEO2VBQ0MsaUJBQU87SUFDUixDQUFDO0lBRUYsZ0JBQUM7QUFBRCxDQU5BLEFBTUMsQ0FOdUMseUJBQVcsR0FNbEQ7QUFOcUIsOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9MYWJvdXJlclwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVkxhYm91cmVyIGV4dGVuZHMgVkdhbWVPYmplY3Qge1xuXHRwcm90ZWN0ZWQgbGFib3VyZXI6IExhYm91cmVyO1xuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG59Il19
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
/**
 * 矿工
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy92bGFib3VyZXJzL1ZNaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQXdDO0FBQ3hDOztHQUVHO0FBQ0g7SUFBNEIsMEJBQVM7SUFFcEM7ZUFDQyxpQkFBTztJQUNSLENBQUM7SUFDRixhQUFDO0FBQUQsQ0FMQSxBQUtDLENBTDJCLHFCQUFTLEdBS3BDO0FBTFksd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNaW5lciB9IGZyb20gXCIuLi9NaW5lclwiO1xuaW1wb3J0IHsgVkxhYm91cmVyIH0gZnJvbSBcIi4vVkxhYm91cmVyXCI7XG4vKipcbiAqIOefv+W3pVxuICovXG5leHBvcnQgY2xhc3MgVk1pbmVyIGV4dGVuZHMgVkxhYm91cmVyIHtcblx0cHJvdGVjdGVkIGxhYm91cmVyOiBNaW5lcjtcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cbn0iXX0=
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
/**
 * 伐木工
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy92bGFib3VyZXJzL1ZXb29kQ3V0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBd0M7QUFFeEM7O0dBRUc7QUFDSDtJQUFpQywrQkFBUztJQUV6QztlQUNDLGlCQUFPO0lBQ1IsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FMQSxBQUtDLENBTGdDLHFCQUFTLEdBS3pDO0FBTFksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXb29kQ3V0dGVyIH0gZnJvbSBcIi4uL1dvb2RDdXR0ZXJcIjtcbmltcG9ydCB7IFZMYWJvdXJlciB9IGZyb20gXCIuL1ZMYWJvdXJlclwiO1xuXG4vKipcbiAqIOS8kOacqOW3pVxuICovXG5leHBvcnQgY2xhc3MgVldvb2RDdXR0ZXIgZXh0ZW5kcyBWTGFib3VyZXIge1xuXHRwcm90ZWN0ZWQgbGFib3VyZXI6IFdvb2RDdXR0ZXI7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG59Il19
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
/**
 * 铁匠
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy92bGFib3VyZXJzL1ZCbGFja3NtaXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBd0M7QUFFeEM7O0dBRUc7QUFDSDtJQUFpQywrQkFBUztJQUV6QztlQUNDLGlCQUFPO0lBQ1IsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FMQSxBQUtDLENBTGdDLHFCQUFTLEdBS3pDO0FBTFksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbGFja3NtaXRoIH0gZnJvbSBcIi4uL0JsYWNrc21pdGhcIjtcbmltcG9ydCB7IFZMYWJvdXJlciB9IGZyb20gXCIuL1ZMYWJvdXJlclwiO1xuXG4vKipcbiAqIOmTgeWMoFxuICovXG5leHBvcnQgY2xhc3MgVkJsYWNrc21pdGggZXh0ZW5kcyBWTGFib3VyZXIge1xuXHRwcm90ZWN0ZWQgbGFib3VyZXI6IEJsYWNrc21pdGg7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG59Il19
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
var VGameObject_1 = require("../../base/VGameObject");
var DropOffToolsAction_1 = require("../actions/DropOffToolsAction");
var ForgeToolAction_1 = require("../actions/ForgeToolAction");
var PickUpOreAction_1 = require("../actions/PickUpOreAction");
var Labourer_1 = require("./Labourer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, requireComponent = _a.requireComponent;
var Blacksmith = /** @class */ (function (_super) {
    __extends(Blacksmith, _super);
    function Blacksmith() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Blacksmith.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.initAvaliableActions([ForgeToolAction_1.ForgeToolAction, DropOffToolsAction_1.DropOffToolsAction, PickUpOreAction_1.PickUpOreAction]);
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
        ccclass,
        requireComponent(VGameObject_1.VGameObject)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy9CbGFja3NtaXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBeUQ7QUFDekQsc0RBQW9EO0FBQ3BELG9FQUFrRTtBQUNsRSw4REFBNEQ7QUFDNUQsOERBQTREO0FBQzVELHVDQUFxQztBQUUvQixJQUFBLEtBQTBDLEVBQUUsQ0FBQyxVQUFVLEVBQXJELE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGdCQUFnQixzQkFBa0IsQ0FBQTtBQUc3RDtJQUFnQyw4QkFBUTtJQUF4Qzs7SUFrQkEsQ0FBQztJQWpCVSwyQkFBTSxHQUFiO1FBQ0ksaUJBQU0sTUFBTSxXQUFFLENBQUE7UUFDZCxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxpQ0FBZSxFQUFFLHVDQUFrQixFQUFFLGlDQUFlLENBQUMsQ0FBQyxDQUFBO0lBQ3JGLENBQUM7SUFDRDs7O09BR0c7SUFDSSxvQ0FBZSxHQUF0QjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFBO1FBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDekMsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRU0sbUNBQWMsR0FBckI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFqQlEsVUFBVTtRQUZ0QixPQUFPO1FBQ1AsZ0JBQWdCLENBQUMseUJBQVcsQ0FBQztPQUNqQixVQUFVLENBa0J0QjtJQUFELGlCQUFDO0NBbEJELEFBa0JDLENBbEIrQixtQkFBUSxHQWtCdkM7QUFsQlksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIlxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBEcm9wT2ZmVG9vbHNBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9Ecm9wT2ZmVG9vbHNBY3Rpb25cIlxuaW1wb3J0IHsgRm9yZ2VUb29sQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvRm9yZ2VUb29sQWN0aW9uXCJcbmltcG9ydCB7IFBpY2tVcE9yZUFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL1BpY2tVcE9yZUFjdGlvblwiXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuL0xhYm91cmVyXCJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgcmVxdWlyZUNvbXBvbmVudCB9ID0gY2MuX2RlY29yYXRvclxuQGNjY2xhc3NcbkByZXF1aXJlQ29tcG9uZW50KFZHYW1lT2JqZWN0KVxuZXhwb3J0IGNsYXNzIEJsYWNrc21pdGggZXh0ZW5kcyBMYWJvdXJlciB7XG4gICAgcHVibGljIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKClcbiAgICAgICAgdGhpcy5pbml0QXZhbGlhYmxlQWN0aW9ucyhbRm9yZ2VUb29sQWN0aW9uLCBEcm9wT2ZmVG9vbHNBY3Rpb24sIFBpY2tVcE9yZUFjdGlvbl0pXG4gICAgfVxuICAgIC8qKlxuICAgICAqIE91ciBvbmx5IGdvYWwgd2lsbCBldmVyIGJlIHRvIG1ha2UgdG9vbHMuXG4gICAgICogVGhlIEZvcmdlVG9vbGRBY3Rpb24gd2lsbCBiZSBhYmxlIHRvIGZ1bGZpbGwgdGhpcyBnb2FsLlxuICAgICAqL1xuICAgIHB1YmxpYyBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XG4gICAgICAgIGxldCBnb2FsID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKVxuICAgICAgICBnb2FsLnNldChBY3Rpb25TdGF0dXMuQ29sbGVjdFRvb2xzLCB0cnVlKVxuICAgICAgICByZXR1cm4gZ29hbFxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVCYWNrUGFjaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLnn7/nn7PvvJpcIiArIHRoaXMuYmFja3BhY2subnVtT3JlKVxuICAgIH1cbn1cbiJdfQ==
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
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
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
        var vg = agent.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (supply.numTools > 0) {
                if (closest == null) {
                    // first one, so choose it for now
                    closest = supply;
                    closestDist = supply.distanceSquare(vg);
                }
                else {
                    // is this one closer than the last?
                    var dist = supply.distanceSquare(vg);
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
    PickUpToolAction.prototype.perform = function (node) {
        if (this.target.numTools > 0) {
            this.target.numTools -= 1;
            this.hasTool = true;
            var labourer = node.getComponent(Labourer_1.Labourer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvUGlja1VwVG9vbEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXlEO0FBQ3pELHVEQUFxRDtBQUNyRCxzREFBb0Q7QUFDcEQsOENBQTRDO0FBQzVDLGtEQUFnRDtBQUdoRDtJQUFzQyxvQ0FBVTtJQUc1QztRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQU5PLGFBQU8sR0FBWSxLQUFLLENBQUE7UUFJNUIsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQSxDQUFDLDBDQUEwQztRQUM1RixLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMscUJBQXFCOztJQUNwRSxDQUFDO0lBRU0sZ0NBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0lBQ3hCLENBQUM7SUFFTSxpQ0FBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3ZCLENBQUM7SUFFTSwwQ0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVNLHNEQUEyQixHQUFsQyxVQUFtQyxLQUFjO1FBQzdDLHlEQUF5RDtRQUN6RCxJQUFJLFdBQVcsR0FBMEIseUJBQVcsQ0FBQyxlQUFlLENBQUE7UUFDcEUsSUFBSSxPQUFPLEdBQXdCLElBQUksQ0FBQTtRQUN2QyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUE7UUFDM0IsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyx5QkFBVyxDQUFDLENBQUE7UUFDeEMsS0FBbUIsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUU7WUFBM0IsSUFBSSxNQUFNLG9CQUFBO1lBQ1gsSUFBSSxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtnQkFDckIsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO29CQUNqQixrQ0FBa0M7b0JBQ2xDLE9BQU8sR0FBRyxNQUFNLENBQUE7b0JBQ2hCLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2lCQUMxQztxQkFBTTtvQkFDSCxvQ0FBb0M7b0JBQ3BDLElBQUksSUFBSSxHQUFXLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7b0JBQzVDLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTt3QkFDcEIsZ0NBQWdDO3dCQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFBO3dCQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFBO3FCQUNyQjtpQkFDSjthQUNKO1NBQ0o7UUFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFFakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUE7UUFFckIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFBO0lBQzFCLENBQUM7SUFFTSxrQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUE7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUSxDQUFDLENBQUE7WUFDMUMsMENBQTBDO1lBQzFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtZQUNyQixPQUFPLElBQUksQ0FBQTtTQUNkO2FBQU07WUFDSCwrRkFBK0Y7WUFDL0YsT0FBTyxLQUFLLENBQUE7U0FDZjtJQUNMLENBQUM7SUFDTCx1QkFBQztBQUFELENBaEVBLEFBZ0VDLENBaEVxQyx1QkFBVSxHQWdFL0M7QUFoRVksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIlxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIlxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCJcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiXG5cbmV4cG9ydCBjbGFzcyBQaWNrVXBUb29sQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBoYXNUb29sOiBib29sZWFuID0gZmFsc2VcbiAgICBwdWJsaWMgdGFyZ2V0OiBTdXBwbHlQaWxlQ29tcG9uZW50IC8vIHdoZXJlIHdlIGdldCB0aGUgdG9vbCBmcm9tXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNUb29sLCBmYWxzZSkgLy8gZG9uJ3QgZ2V0IGEgdG9vbCBpZiB3ZSBhbHJlYWR5IGhhdmUgb25lXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNUb29sLCB0cnVlKSAvLyB3ZSBub3cgaGF2ZSBhIHRvb2xcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGFzVG9vbCA9IGZhbHNlXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzVG9vbFxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICAvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3Qgc3VwcGx5IHBpbGUgdGhhdCBoYXMgc3BhcmUgdG9vbHNcbiAgICAgICAgbGV0IHN1cHBseVBpbGVzOiBTdXBwbHlQaWxlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC5zdXBwbHlQaWxlQ29tcHNcbiAgICAgICAgbGV0IGNsb3Nlc3Q6IFN1cHBseVBpbGVDb21wb25lbnQgPSBudWxsXG4gICAgICAgIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMFxuICAgICAgICBsZXQgdmcgPSBhZ2VudC5nZXRDb21wb25lbnQoVkdhbWVPYmplY3QpXG4gICAgICAgIGZvciAobGV0IHN1cHBseSBvZiBzdXBwbHlQaWxlcykge1xuICAgICAgICAgICAgaWYgKHN1cHBseS5udW1Ub29scyA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdCA9IHN1cHBseVxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZSh2ZylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpc3Q6IG51bWJlciA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZSh2ZylcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3Nlc3QgPSBzdXBwbHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0ID0gZGlzdFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbG9zZXN0ID09IG51bGwpIHJldHVybiBmYWxzZVxuXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gY2xvc2VzdFxuXG4gICAgICAgIHJldHVybiBjbG9zZXN0ICE9IG51bGxcbiAgICB9XG5cbiAgICBwdWJsaWMgcGVyZm9ybShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5udW1Ub29scyA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Lm51bVRvb2xzIC09IDFcbiAgICAgICAgICAgIHRoaXMuaGFzVG9vbCA9IHRydWVcbiAgICAgICAgICAgIGxldCBsYWJvdXJlciA9IG5vZGUuZ2V0Q29tcG9uZW50KExhYm91cmVyKVxuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSB0b29sIGFuZCBhZGQgaXQgdG8gdGhlIGFnZW50XG4gICAgICAgICAgICBsYWJvdXJlci5waWNrVXBUb29sKClcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB3ZSBnb3QgdGhlcmUgYnV0IHRoZXJlIHdhcyBubyB0b29sIGF2YWlsYWJsZSEgU29tZW9uZSBnb3QgdGhlcmUgZmlyc3QuIENhbm5vdCBwZXJmb3JtIGFjdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
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
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
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
    ChopFirewoodAction.prototype.checkProceduralPrecondition = function (go) {
        // find the nearest chopping block that we can chop our wood at
        var blocks = Environment_1.Environment.choppingBlockComps;
        var closest = null;
        var closestDist = 0;
        var vg = go.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, blocks_1 = blocks; _i < blocks_1.length; _i++) {
            var block = blocks_1[_i];
            if (closest == null) {
                closest = block;
                closestDist = block.distanceSquare(vg);
            }
            else {
                // is this one closer than the last?
                var dist = block.distanceSquare(vg);
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
    ChopFirewoodAction.prototype.perform = function (node) {
        var labourer = node.getComponent(Labourer_1.Labourer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvQ2hvcEZpcmV3b29kQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBOEM7QUFDOUMsMkRBQXlEO0FBQ3pELHVEQUFxRDtBQUNyRCxzREFBb0Q7QUFHcEQsOENBQTRDO0FBQzVDLGtEQUFnRDtBQUVoRDtJQUF3QyxzQ0FBVTtJQUs5QztRQUFBLFlBQ0ksaUJBQU8sU0FJVjtRQVRPLGFBQU8sR0FBWSxLQUFLLENBQUE7UUFDeEIsZUFBUyxHQUFXLENBQUMsQ0FBQTtRQUN0QixrQkFBWSxHQUFXLENBQUMsQ0FBQTtRQUkzQixLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsNEJBQTRCO1FBQzdFLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUEsQ0FBQyx5Q0FBeUM7UUFDL0YsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTs7SUFDbEQsQ0FBQztJQUNNLGtDQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBQ00sbUNBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUN2QixDQUFDO0lBRU0sNENBQWUsR0FBdEI7UUFDSSxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFTSx3REFBMkIsR0FBbEMsVUFBbUMsRUFBVztRQUMxQywrREFBK0Q7UUFDL0QsSUFBSSxNQUFNLEdBQTZCLHlCQUFXLENBQUMsa0JBQWtCLENBQUE7UUFDckUsSUFBSSxPQUFPLEdBQTJCLElBQUksQ0FBQTtRQUMxQyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUE7UUFDM0IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyx5QkFBVyxDQUFDLENBQUE7UUFDckMsS0FBa0IsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUU7WUFBckIsSUFBSSxLQUFLLGVBQUE7WUFDVixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sR0FBRyxLQUFLLENBQUE7Z0JBQ2YsV0FBVyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7YUFDekM7aUJBQU07Z0JBQ0gsb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUMzQyxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3BCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLEtBQUssQ0FBQTtvQkFDZixXQUFXLEdBQUcsSUFBSSxDQUFBO2lCQUNyQjthQUNKO1NBQ0o7UUFFRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFFakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUE7UUFFckIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFBO0lBQzFCLENBQUM7SUFFTSxvQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFRLENBQUMsQ0FBQTtRQUMxQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUM1RCxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pELG9CQUFvQjtZQUNwQixJQUFJLFFBQVEsR0FBc0IsUUFBUSxDQUFDLFFBQVEsQ0FBQTtZQUNuRCxRQUFRLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUNuQixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFBO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDbEIsa0NBQWtDO2dCQUNsQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUE7YUFDekI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FwRUEsQUFvRUMsQ0FwRXVDLHVCQUFVLEdBb0VqRDtBQXBFWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL1RpbWVVdGlsXCJcbmltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiXG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCJcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCJcbmltcG9ydCB7IENob3BwaW5nQmxvY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vQ2hvcHBpbmdCbG9ja0NvbXBvbmVudFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIlxuXG5leHBvcnQgY2xhc3MgQ2hvcEZpcmV3b29kQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBjaG9wcGVkOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB3b3JrRHVyYXRpb246IG51bWJlciA9IDJcblx0XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNUb29sLCB0cnVlKSAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNGaXJld29vZCwgZmFsc2UpIC8vIGlmIHdlIGhhdmUgZmlyZXdvb2Qgd2UgZG9uJ3Qgd2FudCBtb3JlXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNGaXJld29vZCwgdHJ1ZSlcbiAgICB9XG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmNob3BwZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IDBcbiAgICB9XG4gICAgcHVibGljIGlzRG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hvcHBlZFxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihnbzogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBmaW5kIHRoZSBuZWFyZXN0IGNob3BwaW5nIGJsb2NrIHRoYXQgd2UgY2FuIGNob3Agb3VyIHdvb2QgYXRcbiAgICAgICAgbGV0IGJsb2NrczogQ2hvcHBpbmdCbG9ja0NvbXBvbmVudFtdID0gRW52aXJvbm1lbnQuY2hvcHBpbmdCbG9ja0NvbXBzXG4gICAgICAgIGxldCBjbG9zZXN0OiBDaG9wcGluZ0Jsb2NrQ29tcG9uZW50ID0gbnVsbFxuICAgICAgICBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDBcbiAgICAgICAgbGV0IHZnID0gZ28uZ2V0Q29tcG9uZW50KFZHYW1lT2JqZWN0KVxuICAgICAgICBmb3IgKGxldCBibG9jayBvZiBibG9ja3MpIHtcbiAgICAgICAgICAgIGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjbG9zZXN0ID0gYmxvY2tcbiAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IGJsb2NrLmRpc3RhbmNlU3F1YXJlKHZnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cbiAgICAgICAgICAgICAgICBsZXQgZGlzdDogbnVtYmVyID0gYmxvY2suZGlzdGFuY2VTcXVhcmUodmcpXG4gICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0ID0gYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdERpc3QgPSBkaXN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsb3Nlc3QgPT0gbnVsbCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgdGhpcy50YXJnZXQgPSBjbG9zZXN0XG5cbiAgICAgICAgcmV0dXJuIGNsb3Nlc3QgIT0gbnVsbFxuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGxhYm91cmVyID0gbm9kZS5nZXRDb21wb25lbnQoTGFib3VyZXIpXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKSB0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKVxuICAgICAgICBpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLndvcmtEdXJhdGlvbikge1xuICAgICAgICAgICAgLy8gZmluaXNoZWQgY2hvcHBpbmdcbiAgICAgICAgICAgIGxldCBiYWNrcGFjazogQmFja1BhY2tDb21wb25lbnQgPSBsYWJvdXJlci5iYWNrcGFja1xuICAgICAgICAgICAgYmFja3BhY2subnVtRmlyZXdvb2QgKz0gNVxuICAgICAgICAgICAgdGhpcy5jaG9wcGVkID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IHRvb2wgPSBsYWJvdXJlci50b29sXG4gICAgICAgICAgICB0b29sLnVzZSgwLjM0KVxuICAgICAgICAgICAgaWYgKHRvb2wuZGVzdHJveWVkKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOuWIoOmZpCBEZXN0cm95KGJhY2twYWNrLnRvb2wpO1xuICAgICAgICAgICAgICAgIGxhYm91cmVyLmRlc3Ryb3lUb29sKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoapAgent = void 0;
var StateEnum_1 = require("../fsm/state/StateEnum");
var StateIdle_1 = require("../fsm/state/StateIdle");
var StateMove_1 = require("../fsm/state/StateMove");
var StatePerformAction_1 = require("../fsm/state/StatePerformAction");
var StateManager_1 = require("../fsm/StateManager");
var GoapPlanner_1 = require("./GoapPlanner");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GoapAgent = /** @class */ (function (_super) {
    __extends(GoapAgent, _super);
    function GoapAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoapAgent_1 = GoapAgent;
    GoapAgent.prototype.onLoad = function () {
        this.initState();
        this.planner = new GoapPlanner_1.GoapPlanner();
        this.currentActions = [];
        this.stateMgr.changeState(StateEnum_1.StateEnum.StateIdle);
    };
    GoapAgent.prototype.initState = function () {
        var stateMgr = (this.stateMgr = new StateManager_1.StateManager(this.node));
        stateMgr.registerState(StateEnum_1.StateEnum.StateIdle, new StateIdle_1.StateIdle(this.node));
        stateMgr.registerState(StateEnum_1.StateEnum.StateMove, new StateMove_1.StateMove(this.node));
        stateMgr.registerState(StateEnum_1.StateEnum.StatePerformAction, new StatePerformAction_1.StatePerformAction(this.node));
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
        console.log("Found actions: " + GoapAgent_1.prettyPrintActions(actions));
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
    var GoapAgent_1;
    GoapAgent = GoapAgent_1 = __decorate([
        ccclass
    ], GoapAgent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvR29hcEFnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBa0Q7QUFDbEQsb0RBQWtEO0FBQ2xELG9EQUFrRDtBQUNsRCxzRUFBb0U7QUFDcEUsb0RBQWtEO0FBR2xELDZDQUEyQztBQUdyQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUUzQztJQUErQiw2QkFBWTtJQUEzQzs7SUFxSUEsQ0FBQztrQkFySVksU0FBUztJQU9SLDBCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUE7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUE7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRU8sNkJBQVMsR0FBakI7UUFDSSxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQzVELFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ3JFLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ3JFLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLHVDQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQzNGLENBQUM7SUFFTSwyQkFBTyxHQUFkO1FBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFBO0lBQ3BCLENBQUM7SUFFTSwyQkFBTyxHQUFkLFVBQWUsQ0FBQztRQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUFFTSw4QkFBVSxHQUFqQjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUN2QixDQUFDO0lBRU0sdUNBQW1CLEdBQTFCO1FBQ0ksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUE7SUFDaEMsQ0FBQztJQUVNLHFDQUFpQixHQUF4QixVQUF5QixjQUE0QjtRQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQTtJQUN4QyxDQUFDO0lBRU0sc0NBQWtCLEdBQXpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFTSx5Q0FBcUIsR0FBNUI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDdEMsQ0FBQztJQUVNLHFDQUFpQixHQUF4QjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUM5QixDQUFDO0lBRU0sK0JBQVcsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLEdBQVMsRUFBRSxPQUFpQjtRQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFTSwwQkFBTSxHQUFiLFVBQWMsS0FBYTtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBQ00sNkJBQVMsR0FBaEIsVUFBaUIsQ0FBYTtRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFTSw2QkFBUyxHQUFoQixVQUF1QyxHQUFrQjtRQUNyRCxLQUFtQixVQUFxQixFQUFyQixLQUFBLElBQUksQ0FBQyxnQkFBZ0IsRUFBckIsY0FBcUIsRUFBckIsSUFBcUIsRUFBRTtZQUFyQyxJQUFJLE1BQU0sU0FBQTtZQUNYLElBQUksTUFBTSxZQUFZLEdBQUcsRUFBRTtnQkFDdkIsT0FBTyxNQUFNLENBQUE7YUFDaEI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNNLGdDQUFZLEdBQW5CLFVBQW9CLE1BQWtCO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDOUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtnQkFDbEMsT0FBTTthQUNUO1NBQ0o7SUFDTCxDQUFDO0lBRU0saUNBQWEsR0FBcEI7UUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRU0sbUNBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVNLHdDQUFvQixHQUEzQjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFTywrQkFBVyxHQUFuQjtRQUNJLElBQUksT0FBTyxHQUFpQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtRQUN0RCxLQUFtQixVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU8sRUFBRTtZQUF2QixJQUFJLE1BQU0sZ0JBQUE7WUFDWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ3JDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxXQUFTLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUMxRSxDQUFDO0lBQ0Qsd0RBQXdEO0lBQzFDLDBCQUFnQixHQUE5QixVQUErQixLQUFnQztRQUMzRCxJQUFJLENBQUMsR0FBVyxFQUFFLENBQUE7UUFDbEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxHQUFHO1lBQ3JCLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQTtZQUN0QixDQUFDLElBQUksSUFBSSxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsQ0FBQTtJQUNaLENBQUM7SUFFYSxpQ0FBdUIsR0FBckMsVUFBc0MsT0FBcUI7UUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsR0FBVyxFQUFFLENBQUE7UUFDbEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQWtCO1lBQy9CLENBQUMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQTtZQUM1QixDQUFDLElBQUksS0FBSyxDQUFBO1FBQ2QsQ0FBQyxDQUFDLENBQUE7UUFDRixDQUFDLElBQUksTUFBTSxDQUFBO1FBQ1gsT0FBTyxDQUFDLENBQUE7SUFDWixDQUFDO0lBRWEsNEJBQWtCLEdBQWhDLFVBQWlDLE9BQXFCO1FBQ2xELElBQUksQ0FBQyxHQUFXLEVBQUUsQ0FBQTtRQUNsQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBa0I7WUFDL0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFBO1lBQzVCLENBQUMsSUFBSSxJQUFJLENBQUE7UUFDYixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxDQUFBO0lBQ1osQ0FBQztJQUVhLDJCQUFpQixHQUEvQixVQUFnQyxNQUFrQjtRQUM5QyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQTtJQUN2QyxDQUFDOztJQXBJUSxTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBcUlyQjtJQUFELGdCQUFDO0NBcklELEFBcUlDLENBckk4QixFQUFFLENBQUMsU0FBUyxHQXFJMUM7QUFySVksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZUVudW0gfSBmcm9tIFwiLi4vZnNtL3N0YXRlL1N0YXRlRW51bVwiXG5pbXBvcnQgeyBTdGF0ZUlkbGUgfSBmcm9tIFwiLi4vZnNtL3N0YXRlL1N0YXRlSWRsZVwiXG5pbXBvcnQgeyBTdGF0ZU1vdmUgfSBmcm9tIFwiLi4vZnNtL3N0YXRlL1N0YXRlTW92ZVwiXG5pbXBvcnQgeyBTdGF0ZVBlcmZvcm1BY3Rpb24gfSBmcm9tIFwiLi4vZnNtL3N0YXRlL1N0YXRlUGVyZm9ybUFjdGlvblwiXG5pbXBvcnQgeyBTdGF0ZU1hbmFnZXIgfSBmcm9tIFwiLi4vZnNtL1N0YXRlTWFuYWdlclwiXG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25TdGF0dXNcIlxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgR29hcFBsYW5uZXIgfSBmcm9tIFwiLi9Hb2FwUGxhbm5lclwiXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuL0lHb2FwXCJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBHb2FwQWdlbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByb3RlY3RlZCBhdmFpbGFibGVBY3Rpb25zOiBHb2FwQWN0aW9uW11cbiAgICBwcm90ZWN0ZWQgY3VycmVudEFjdGlvbnM6IEdvYXBBY3Rpb25bXVxuICAgIHByb3RlY3RlZCBzdGF0ZU1ncjogU3RhdGVNYW5hZ2VyXG4gICAgcHJvdGVjdGVkIGdvYXA6IElHb2FwXG4gICAgcHJvdGVjdGVkIHBsYW5uZXI6IEdvYXBQbGFubmVyXG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXRTdGF0ZSgpXG4gICAgICAgIHRoaXMucGxhbm5lciA9IG5ldyBHb2FwUGxhbm5lcigpXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbnMgPSBbXVxuICAgICAgICB0aGlzLnN0YXRlTWdyLmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0U3RhdGUoKSB7XG4gICAgICAgIGxldCBzdGF0ZU1nciA9ICh0aGlzLnN0YXRlTWdyID0gbmV3IFN0YXRlTWFuYWdlcih0aGlzLm5vZGUpKVxuICAgICAgICBzdGF0ZU1nci5yZWdpc3RlclN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUsIG5ldyBTdGF0ZUlkbGUodGhpcy5ub2RlKSlcbiAgICAgICAgc3RhdGVNZ3IucmVnaXN0ZXJTdGF0ZShTdGF0ZUVudW0uU3RhdGVNb3ZlLCBuZXcgU3RhdGVNb3ZlKHRoaXMubm9kZSkpXG4gICAgICAgIHN0YXRlTWdyLnJlZ2lzdGVyU3RhdGUoU3RhdGVFbnVtLlN0YXRlUGVyZm9ybUFjdGlvbiwgbmV3IFN0YXRlUGVyZm9ybUFjdGlvbih0aGlzLm5vZGUpKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRHb2FwKCk6IElHb2FwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ29hcFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRHb2FwKHYpIHtcbiAgICAgICAgdGhpcy5nb2FwID0gdlxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQbGFubmVyKCk6IEdvYXBQbGFubmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhbm5lclxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBdmFsaWFibGVBY3Rpb25zKCk6IEdvYXBBY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF2YWlsYWJsZUFjdGlvbnNcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q3VycmVudEFjdGlvbnMoY3VycmVudEFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb25zID0gY3VycmVudEFjdGlvbnNcbiAgICB9XG5cbiAgICBwdWJsaWMgcGVla0N1cnJlbnRBY3Rpb25zKCk6IEdvYXBBY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50QWN0aW9uc1swXVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXF1ZXVlQ3VycmVudEFjdGlvbnMoKTogR29hcEFjdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb25zLnNoaWZ0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q3VycmVudEFjdGlvbnMoKTogR29hcEFjdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEFjdGlvbnNcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlU3RhdGUoa2V5OiBzdHJpbmcsIG9iaj86IGFueSwgaXNGb3JjZT86IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zdGF0ZU1nci5jaGFuZ2VTdGF0ZShrZXksIG9iaiwgaXNGb3JjZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZU1nci51cGRhdGUoZGVsdGEpXG4gICAgfVxuICAgIHB1YmxpYyBhZGRBY3Rpb24oYTogR29hcEFjdGlvbikge1xuICAgICAgICB0aGlzLmF2YWlsYWJsZUFjdGlvbnMucHVzaChhKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBY3Rpb248VCBleHRlbmRzIEdvYXBBY3Rpb24+KGNsczogeyBuZXcgKCk6IFQgfSkge1xuICAgICAgICBmb3IgKGxldCBhY3Rpb24gb2YgdGhpcy5hdmFpbGFibGVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgY2xzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVBY3Rpb24oYWN0aW9uOiBHb2FwQWN0aW9uKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmF2YWlsYWJsZUFjdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF2YWlsYWJsZUFjdGlvbnNbaV0gPT0gYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVBY3Rpb25zLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGhhc0FjdGlvblBsYW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb25zLmxlbmd0aCA+IDBcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYW5DdXJBY3Rpb25zKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb25zLmxlbmd0aCA9IDBcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYW5BdmFsYWJsZUFjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQWN0aW9ucy5sZW5ndGggPSAwXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkQWN0aW9ucygpIHtcbiAgICAgICAgbGV0IGFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IHRoaXMuZ2V0QXZhbGlhYmxlQWN0aW9ucygpXG4gICAgICAgIGZvciAobGV0IGFjdGlvbiBvZiBhY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmF2YWlsYWJsZUFjdGlvbnMucHVzaChhY3Rpb24pXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJGb3VuZCBhY3Rpb25zOiBcIiArIEdvYXBBZ2VudC5wcmV0dHlQcmludEFjdGlvbnMoYWN0aW9ucykpXG4gICAgfVxuICAgIC8vIOi+k+WHuiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRTdGF0ZShzdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0Pikge1xuICAgICAgICBsZXQgczogc3RyaW5nID0gXCJcIlxuICAgICAgICBzdGF0ZS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBzICs9IGtleSArIFwiOlwiICsgdmFsdWVcbiAgICAgICAgICAgIHMgKz0gXCIsIFwiXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBzXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBwcmV0dHlQcmludEFjdGlvbnNRdWV1ZShhY3Rpb25zOiBHb2FwQWN0aW9uW10pOiBzdHJpbmcge1xuICAgICAgICBjb25zb2xlLmxvZyhcInByZXR0eVByaW50QWN0aW9uc1F1ZXVlOiBcIiwgYWN0aW9ucylcbiAgICAgICAgbGV0IHM6IHN0cmluZyA9IFwiXCJcbiAgICAgICAgYWN0aW9ucy5mb3JFYWNoKChhY3Rpb246IEdvYXBBY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHMgKz0gYWN0aW9uLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgICAgICAgIHMgKz0gXCItPiBcIlxuICAgICAgICB9KVxuICAgICAgICBzICs9IFwiR09BTFwiXG4gICAgICAgIHJldHVybiBzXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBwcmV0dHlQcmludEFjdGlvbnMoYWN0aW9uczogR29hcEFjdGlvbltdKSB7XG4gICAgICAgIGxldCBzOiBzdHJpbmcgPSBcIlwiXG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBHb2FwQWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzICs9IGFjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICAgICAgICBzICs9IFwiLCBcIlxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gc1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRBY3Rpb24oYWN0aW9uOiBHb2FwQWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBcIlwiICsgYWN0aW9uLmNvbnN0cnVjdG9yLm5hbWVcbiAgICB9XG59XG4iXX0=
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
    GoapPlanner.prototype.plan = function (go, availableActions, worldState, goal) {
        // reset the actions so we can start fresh with them
        for (var _i = 0, availableActions_1 = availableActions; _i < availableActions_1.length; _i++) {
            var a = availableActions_1[_i];
            a.doReset();
        }
        // check what actions can run using their checkProceduralPrecondition
        var usableActions = [];
        for (var _a = 0, availableActions_2 = availableActions; _a < availableActions_2.length; _a++) {
            var a = availableActions_2[_a];
            if (a.checkProceduralPrecondition(go)) {
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
            if (this.inState(action.preconditions, parent.state)) {
                // apply the action's effects to the parent state
                var currentState = this.populateState(parent.state, action.effects);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvR29hcFBsYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0dBRUc7QUFDSDtJQUFBO0lBNklBLENBQUM7SUE1SUc7Ozs7T0FJRztJQUNJLDBCQUFJLEdBQVgsVUFBWSxFQUFXLEVBQUUsZ0JBQThCLEVBQUUsVUFBcUMsRUFBRSxJQUErQjtRQUMzSCxvREFBb0Q7UUFDcEQsS0FBYyxVQUFnQixFQUFoQixxQ0FBZ0IsRUFBaEIsOEJBQWdCLEVBQWhCLElBQWdCLEVBQUU7WUFBM0IsSUFBSSxDQUFDLHlCQUFBO1lBQ04sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBQ2Q7UUFFRCxxRUFBcUU7UUFDckUsSUFBSSxhQUFhLEdBQWlCLEVBQUUsQ0FBQTtRQUNwQyxLQUFjLFVBQWdCLEVBQWhCLHFDQUFnQixFQUFoQiw4QkFBZ0IsRUFBaEIsSUFBZ0IsRUFBRTtZQUEzQixJQUFJLENBQUMseUJBQUE7WUFDTixJQUFJLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDbkMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUN4QjtTQUNKO1FBRUQsZ0VBQWdFO1FBRWhFLG1GQUFtRjtRQUNuRixJQUFJLE1BQU0sR0FBZSxFQUFFLENBQUE7UUFFM0IsY0FBYztRQUNkLElBQUksS0FBSyxHQUFhLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzdELElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFMUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLDhCQUE4QjtZQUM5Qix5QkFBeUI7WUFDekIsT0FBTyxJQUFJLENBQUE7U0FDZDtRQUVELHdCQUF3QjtRQUN4QixJQUFJLFFBQVEsR0FBYSxJQUFJLENBQUE7UUFDN0IsS0FBaUIsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUU7WUFBcEIsSUFBSSxJQUFJLGVBQUE7WUFDVCxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQ2xCLFFBQVEsR0FBRyxJQUFJLENBQUE7YUFDbEI7aUJBQU07Z0JBQ0gsSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUU7b0JBQ3pDLFFBQVEsR0FBRyxJQUFJLENBQUE7aUJBQ2xCO2FBQ0o7U0FDSjtRQUVELGlEQUFpRDtRQUNqRCxJQUFJLE1BQU0sR0FBaUIsRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxHQUFhLFFBQVEsQ0FBQTtRQUMxQixPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUN4QjtZQUNELENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFBO1NBQ2Y7UUFDRCxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUE7UUFFaEIseUJBQXlCO1FBQ3pCLE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7SUFDRDs7T0FFRztJQUNLLGtDQUFZLEdBQXBCLFVBQXFCLE9BQXFCLEVBQUUsUUFBb0I7UUFDNUQsSUFBSSxNQUFNLEdBQWlCLEVBQUUsQ0FBQTtRQUM3QixLQUFjLFVBQU8sRUFBUCxtQkFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTyxFQUFFO1lBQWxCLElBQUksQ0FBQyxnQkFBQTtZQUNOLElBQUksQ0FBQyxJQUFJLFFBQVEsRUFBRTtnQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ2pCO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxnQ0FBVSxHQUFsQixVQUFtQixNQUFnQixFQUFFLE1BQWtCLEVBQUUsYUFBMkIsRUFBRSxJQUErQjtRQUNqSCxJQUFJLFFBQVEsR0FBWSxLQUFLLENBQUE7UUFFN0IsOEVBQThFO1FBQzlFLEtBQW1CLFVBQWEsRUFBYiwrQkFBYSxFQUFiLDJCQUFhLEVBQWIsSUFBYSxFQUFFO1lBQTdCLElBQUksTUFBTSxzQkFBQTtZQUNYLDZGQUE2RjtZQUM3RixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xELGlEQUFpRDtnQkFDakQsSUFBSSxZQUFZLEdBQThCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7Z0JBQzlGLElBQUksSUFBSSxHQUFhLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFBO2dCQUVqRyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxFQUFFO29CQUNsQyx1QkFBdUI7b0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ2pCLFFBQVEsR0FBRyxJQUFJLENBQUE7aUJBQ2xCO3FCQUFNO29CQUNILG1GQUFtRjtvQkFFbkYsSUFBSSxNQUFNLEdBQWlCLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFBO29CQUVuRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO29CQUN2RCxJQUFJLEtBQUssRUFBRTt3QkFDUCxRQUFRLEdBQUcsSUFBSSxDQUFBO3FCQUNsQjtpQkFDSjthQUNKO1NBQ0o7UUFFRCxPQUFPLFFBQVEsQ0FBQTtJQUNuQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssNkJBQU8sR0FBZixVQUFnQixJQUErQixFQUFFLEtBQWdDO1FBQzdFLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7UUFDeEMsS0FBZ0IsVUFBVSxFQUFWLHlCQUFVLEVBQVYsd0JBQVUsRUFBVixJQUFVLEVBQUU7WUFBdkIsSUFBSSxHQUFHLG1CQUFBO1lBQ1IsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sS0FBSyxDQUFBO2FBQ2Y7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVEOztPQUVHO0lBQ0ssbUNBQWEsR0FBckIsVUFBc0IsWUFBdUMsRUFBRSxXQUFzQztRQUNqRyxJQUFJLEtBQUssR0FBOEIsSUFBSSxHQUFHLEVBQXdCLENBQUE7UUFDdEUsb0NBQW9DO1FBQ3BDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFhLEVBQUUsR0FBaUI7WUFDbEQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDekIsQ0FBQyxDQUFDLENBQUE7UUFFRixXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBYSxFQUFFLEdBQWlCO1lBQ2pELEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0E3SUEsQUE2SUMsSUFBQTtBQTdJWSxrQ0FBVztBQStJeEI7SUFNSSxrQkFBWSxNQUFnQixFQUFFLFdBQW1CLEVBQUUsS0FBZ0MsRUFBRSxNQUFrQjtRQUNuRyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN4QixDQUFDO0lBQ0wsZUFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25TdGF0dXNcIlxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuL0dvYXBBY3Rpb25cIlxuXG4vKipcbiAqIFBsYW5zIHdoYXQgYWN0aW9ucyBjYW4gYmUgY29tcGxldGVkIGluIG9yZGVyIHRvIGZ1bGZpbGwgYSBnb2FsIHN0YXRlLlxuICovXG5leHBvcnQgY2xhc3MgR29hcFBsYW5uZXIge1xuICAgIC8qKlxuICAgICAqIFBsYW4gd2hhdCBzZXF1ZW5jZSBvZiBhY3Rpb25zIGNhbiBmdWxmaWxsIHRoZSBnb2FsLlxuICAgICAqIFJldHVybnMgbnVsbCBpZiBhIHBsYW4gY291bGQgbm90IGJlIGZvdW5kLCBvciBhIGxpc3Qgb2YgdGhlIGFjdGlvbnNcbiAgICAgKiB0aGF0IG11c3QgYmUgcGVyZm9ybWVkLCBpbiBvcmRlciwgdG8gZnVsZmlsbCB0aGUgZ29hbC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcGxhbihnbzogY2MuTm9kZSwgYXZhaWxhYmxlQWN0aW9uczogR29hcEFjdGlvbltdLCB3b3JsZFN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+LCBnb2FsOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KTogR29hcEFjdGlvbltdIHtcbiAgICAgICAgLy8gcmVzZXQgdGhlIGFjdGlvbnMgc28gd2UgY2FuIHN0YXJ0IGZyZXNoIHdpdGggdGhlbVxuICAgICAgICBmb3IgKGxldCBhIG9mIGF2YWlsYWJsZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIGEuZG9SZXNldCgpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayB3aGF0IGFjdGlvbnMgY2FuIHJ1biB1c2luZyB0aGVpciBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb25cbiAgICAgICAgbGV0IHVzYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IFtdXG4gICAgICAgIGZvciAobGV0IGEgb2YgYXZhaWxhYmxlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKGEuY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGdvKSkge1xuICAgICAgICAgICAgICAgIHVzYWJsZUFjdGlvbnMucHVzaChhKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2Ugbm93IGhhdmUgYWxsIGFjdGlvbnMgdGhhdCBjYW4gcnVuLCBzdG9yZWQgaW4gdXNhYmxlQWN0aW9uc1xuXG4gICAgICAgIC8vIGJ1aWxkIHVwIHRoZSB0cmVlIGFuZCByZWNvcmQgdGhlIGxlYWYgbm9kZXMgdGhhdCBwcm92aWRlIGEgc29sdXRpb24gdG8gdGhlIGdvYWwuXG4gICAgICAgIGxldCBsZWF2ZXM6IFBsYW5Ob2RlW10gPSBbXVxuXG4gICAgICAgIC8vIGJ1aWxkIGdyYXBoXG4gICAgICAgIGxldCBzdGFydDogUGxhbk5vZGUgPSBuZXcgUGxhbk5vZGUobnVsbCwgMCwgd29ybGRTdGF0ZSwgbnVsbClcbiAgICAgICAgbGV0IHN1Y2Nlc3M6IGJvb2xlYW4gPSB0aGlzLmJ1aWxkR3JhcGgoc3RhcnQsIGxlYXZlcywgdXNhYmxlQWN0aW9ucywgZ29hbClcblxuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIC8vIG9oIG5vLCB3ZSBkaWRuJ3QgZ2V0IGEgcGxhblxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIk5PIFBMYW5cIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBjaGVhcGVzdCBsZWFmXG4gICAgICAgIGxldCBjaGVhcGVzdDogUGxhbk5vZGUgPSBudWxsXG4gICAgICAgIGZvciAobGV0IGxlYWYgb2YgbGVhdmVzKSB7XG4gICAgICAgICAgICBpZiAoY2hlYXBlc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNoZWFwZXN0ID0gbGVhZlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobGVhZi5ydW5uaW5nQ29zdCA8IGNoZWFwZXN0LnJ1bm5pbmdDb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWFwZXN0ID0gbGVhZlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCBpdHMgbm9kZSBhbmQgd29yayBiYWNrIHRocm91Z2ggdGhlIHBhcmVudHNcbiAgICAgICAgbGV0IHJlc3VsdDogR29hcEFjdGlvbltdID0gW11cbiAgICAgICAgbGV0IG46IFBsYW5Ob2RlID0gY2hlYXBlc3RcbiAgICAgICAgd2hpbGUgKG4gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKG4uYWN0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChuLmFjdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG4gPSBuLnBhcmVudFxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5yZXZlcnNlKClcblxuICAgICAgICAvLyBob29yYXkgd2UgaGF2ZSBhIHBsYW4hXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgc3Vic2V0IG9mIHRoZSBhY3Rpb25zIGV4Y2x1ZGluZyB0aGUgcmVtb3ZlTWUgb25lLiBDcmVhdGVzIGEgbmV3IHNldC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGFjdGlvblN1YnNldChhY3Rpb25zOiBHb2FwQWN0aW9uW10sIHJlbW92ZU1lOiBHb2FwQWN0aW9uKTogR29hcEFjdGlvbltdIHtcbiAgICAgICAgbGV0IHN1YnNldDogR29hcEFjdGlvbltdID0gW11cbiAgICAgICAgZm9yIChsZXQgYSBvZiBhY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAoYSAhPSByZW1vdmVNZSkge1xuICAgICAgICAgICAgICAgIHN1YnNldC5wdXNoKGEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNldFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgc29sdXRpb24gd2FzIGZvdW5kLlxuICAgICAqIFRoZSBwb3NzaWJsZSBwYXRocyBhcmUgc3RvcmVkIGluIHRoZSBsZWF2ZXMgbGlzdC4gRWFjaCBsZWFmIGhhcyBhXG4gICAgICogJ3J1bm5pbmdDb3N0JyB2YWx1ZSB3aGVyZSB0aGUgbG93ZXN0IGNvc3Qgd2lsbCBiZSB0aGUgYmVzdCBhY3Rpb25cbiAgICAgKiBzZXF1ZW5jZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGJ1aWxkR3JhcGgocGFyZW50OiBQbGFuTm9kZSwgbGVhdmVzOiBQbGFuTm9kZVtdLCB1c2FibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10sIGdvYWw6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4pOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGZvdW5kT25lOiBib29sZWFuID0gZmFsc2VcblxuICAgICAgICAvLyBnbyB0aHJvdWdoIGVhY2ggYWN0aW9uIGF2YWlsYWJsZSBhdCB0aGlzIG5vZGUgYW5kIHNlZSBpZiB3ZSBjYW4gdXNlIGl0IGhlcmVcbiAgICAgICAgZm9yIChsZXQgYWN0aW9uIG9mIHVzYWJsZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwYXJlbnQgc3RhdGUgaGFzIHRoZSBjb25kaXRpb25zIGZvciB0aGlzIGFjdGlvbidzIHByZWNvbmRpdGlvbnMsIHdlIGNhbiB1c2UgaXQgaGVyZVxuICAgICAgICAgICAgaWYgKHRoaXMuaW5TdGF0ZShhY3Rpb24ucHJlY29uZGl0aW9ucywgcGFyZW50LnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIC8vIGFwcGx5IHRoZSBhY3Rpb24ncyBlZmZlY3RzIHRvIHRoZSBwYXJlbnQgc3RhdGVcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+ID0gdGhpcy5wb3B1bGF0ZVN0YXRlKHBhcmVudC5zdGF0ZSwgYWN0aW9uLmVmZmVjdHMpXG4gICAgICAgICAgICAgICAgbGV0IG5vZGU6IFBsYW5Ob2RlID0gbmV3IFBsYW5Ob2RlKHBhcmVudCwgcGFyZW50LnJ1bm5pbmdDb3N0ICsgYWN0aW9uLmNvc3QsIGN1cnJlbnRTdGF0ZSwgYWN0aW9uKVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5TdGF0ZShnb2FsLCBjdXJyZW50U3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGZvdW5kIGEgc29sdXRpb24hXG4gICAgICAgICAgICAgICAgICAgIGxlYXZlcy5wdXNoKG5vZGUpXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kT25lID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdCBhdCBhIHNvbHV0aW9uIHlldCwgc28gdGVzdCBhbGwgdGhlIHJlbWFpbmluZyBhY3Rpb25zIGFuZCBicmFuY2ggb3V0IHRoZSB0cmVlXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHN1YnNldDogR29hcEFjdGlvbltdID0gdGhpcy5hY3Rpb25TdWJzZXQodXNhYmxlQWN0aW9ucywgYWN0aW9uKVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IHRoaXMuYnVpbGRHcmFwaChub2RlLCBsZWF2ZXMsIHN1YnNldCwgZ29hbClcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZE9uZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZE9uZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrIHRoYXQgYWxsIGl0ZW1zIGluICd0ZXN0JyBhcmUgaW4gJ3N0YXRlJy4gSWYganVzdCBvbmUgZG9lcyBub3QgbWF0Y2ggb3IgaXMgbm90IHRoZXJlXG4gICAgICogdGhlbiB0aGlzIHJldHVybnMgZmFsc2UuXG4gICAgICovXG4gICAgcHJpdmF0ZSBpblN0YXRlKHRlc3Q6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4sIHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB0ZXN0S2V5QXJyID0gQXJyYXkuZnJvbSh0ZXN0LmtleXMoKSlcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIHRlc3RLZXlBcnIpIHtcbiAgICAgICAgICAgIGlmICh0ZXN0LmdldChrZXkpICE9IHN0YXRlLmdldChrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSB0aGUgc3RhdGVDaGFuZ2UgdG8gdGhlIGN1cnJlbnRTdGF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgcG9wdWxhdGVTdGF0ZShjdXJyZW50U3RhdGU6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4sIHN0YXRlQ2hhbmdlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PiB7XG4gICAgICAgIGxldCBzdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PiA9IG5ldyBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KClcbiAgICAgICAgLy8gY29weSB0aGUgS1ZQcyBvdmVyIGFzIG5ldyBvYmplY3RzXG4gICAgICAgIGN1cnJlbnRTdGF0ZS5mb3JFYWNoKCh2YWx1ZTogT2JqZWN0LCBrZXk6IEFjdGlvblN0YXR1cykgPT4ge1xuICAgICAgICAgICAgc3RhdGUuc2V0KGtleSwgdmFsdWUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgc3RhdGVDaGFuZ2UuZm9yRWFjaCgodmFsdWU6IE9iamVjdCwga2V5OiBBY3Rpb25TdGF0dXMpID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnNldChrZXksIHZhbHVlKVxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYW5Ob2RlIHtcbiAgICBwdWJsaWMgcGFyZW50OiBQbGFuTm9kZVxuICAgIHB1YmxpYyBydW5uaW5nQ29zdDogbnVtYmVyXG4gICAgcHVibGljIHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+XG4gICAgcHVibGljIGFjdGlvbjogR29hcEFjdGlvblxuXG4gICAgY29uc3RydWN0b3IocGFyZW50OiBQbGFuTm9kZSwgcnVubmluZ0Nvc3Q6IG51bWJlciwgc3RhdGU6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4sIGFjdGlvbjogR29hcEFjdGlvbikge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudFxuICAgICAgICB0aGlzLnJ1bm5pbmdDb3N0ID0gcnVubmluZ0Nvc3RcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlXG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uXG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvQWN0aW9uU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFVQSxDQUFDO0lBVGMsb0JBQU8sR0FBRyxTQUFTLENBQUM7SUFDcEIsd0JBQVcsR0FBRyxhQUFhLENBQUE7SUFDM0Isb0JBQU8sR0FBRyxTQUFTLENBQUE7SUFDbkIsNEJBQWUsR0FBRyxpQkFBaUIsQ0FBQTtJQUNuQyx3QkFBVyxHQUFHLGFBQWEsQ0FBQTtJQUMzQixtQkFBTSxHQUFHLFFBQVEsQ0FBQTtJQUNqQix1QkFBVSxHQUFHLFlBQVksQ0FBQTtJQUN6Qix3QkFBVyxHQUFHLGFBQWEsQ0FBQTtJQUMzQix5QkFBWSxHQUFHLGNBQWMsQ0FBQTtJQUM1QyxtQkFBQztDQVZELEFBVUMsSUFBQTtBQVZZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFjdGlvblN0YXR1cyB7XG5cdHB1YmxpYyBzdGF0aWMgSGFzVG9vbCA9IFwiSGFzVG9vbFwiO1xuXHRwdWJsaWMgc3RhdGljIEhhc0ZpcmV3b29kID0gXCJIYXNGaXJld29vZFwiXG5cdHB1YmxpYyBzdGF0aWMgSGFzTG9ncyA9IFwiSGFzTG9nc1wiXG5cdHB1YmxpYyBzdGF0aWMgQ29sbGVjdEZpcmV3b29kID0gXCJDb2xsZWN0RmlyZXdvb2RcIlxuXHRwdWJsaWMgc3RhdGljIENvbGxlY3RMb2dzID0gXCJDb2xsZWN0TG9nc1wiXG5cdHB1YmxpYyBzdGF0aWMgSGFzT3JlID0gXCJIYXNPcmVcIlxuXHRwdWJsaWMgc3RhdGljIENvbGxlY3RPcmUgPSBcIkNvbGxlY3RPcmVcIlxuXHRwdWJsaWMgc3RhdGljIEhhc05ld1Rvb2xzID0gXCJIYXNOZXdUb29sc1wiXG5cdHB1YmxpYyBzdGF0aWMgQ29sbGVjdFRvb2xzID0gXCJDb2xsZWN0VG9vbHNcIlxufSJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvSUdvYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjA5OjM4IFxuICogQExhc3QgTW9kaWZpZWQgYnk6ICAgUmFubmFyWWFuZyBcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDktMDYgMDA6MDk6MzggXG4gKi9cblxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuL0dvYXBBY3Rpb25cIjtcblxuLyoqXG4gKiBBbnkgYWdlbnQgdGhhdCB3YW50cyB0byB1c2UgR09BUCBtdXN0IGltcGxlbWVudFxuICogdGhpcyBpbnRlcmZhY2UuIEl0IHByb3ZpZGVzIGluZm9ybWF0aW9uIHRvIHRoZSBHT0FQXG4gKiBwbGFubmVyIHNvIGl0IGNhbiBwbGFuIHdoYXQgYWN0aW9ucyB0byB1c2UuXG4gKiBcbiAqIEl0IGFsc28gcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciB0aGUgcGxhbm5lciB0byBnaXZlIFxuICogZmVlZGJhY2sgdG8gdGhlIEFnZW50IGFuZCByZXBvcnQgc3VjY2Vzcy9mYWlsdXJlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFx0SUdvYXAge1xuXHQvKipcblx0ICogVGhlIHN0YXJ0aW5nIHN0YXRlIG9mIHRoZSBBZ2VudCBhbmQgdGhlIHdvcmxkLlxuXHQgKiBTdXBwbHkgd2hhdCBzdGF0ZXMgYXJlIG5lZWRlZCBmb3IgYWN0aW9ucyB0byBydW4uXG5cdCAqL1xuXHRnZXRXb3JsZFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD47XG5cblx0Z2V0QXZhbGlhYmxlQWN0aW9ucygpOiBHb2FwQWN0aW9uW107XG5cblx0LyoqXG5cdCAqIEdpdmUgdGhlIHBsYW5uZXIgYSBuZXcgZ29hbCBzbyBpdCBjYW4gZmlndXJlIG91dCBcblx0ICogdGhlIGFjdGlvbnMgbmVlZGVkIHRvIGZ1bGZpbGwgaXQuXG5cdCAqL1xuXHRjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PjtcblxuXHQvKipcblx0ICogTm8gc2VxdWVuY2Ugb2YgYWN0aW9ucyBjb3VsZCBiZSBmb3VuZCBmb3IgdGhlIHN1cHBsaWVkIGdvYWwuXG5cdCAqIFlvdSB3aWxsIG5lZWQgdG8gdHJ5IGFub3RoZXIgZ29hbFxuXHQgKi9cblx0cGxhbkZhaWxlZChmYWlsZWRHb2FsOiBNYXA8c3RyaW5nLCBPYmplY3Q+KTogdm9pZDtcblxuXHQvKipcblx0ICogQSBwbGFuIHdhcyBmb3VuZCBmb3IgdGhlIHN1cHBsaWVkIGdvYWwuXG5cdCAqIFRoZXNlIGFyZSB0aGUgYWN0aW9ucyB0aGUgQWdlbnQgd2lsbCBwZXJmb3JtLCBpbiBvcmRlci5cblx0ICovXG5cdHBsYW5Gb3VuZChnb2FsOiBNYXA8c3RyaW5nLCBPYmplY3Q+LCBhY3Rpb25zOiBHb2FwQWN0aW9uW10pOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBBbGwgYWN0aW9ucyBhcmUgY29tcGxldGUgYW5kIHRoZSBnb2FsIHdhcyByZWFjaGVkLiBIb29yYXkhXG5cdCAqL1xuXHRhY3Rpb25zRmluaXNoZWQoKTogdm9pZDtcblxuXHQvKipcblx0ICogT25lIG9mIHRoZSBhY3Rpb25zIGNhdXNlZCB0aGUgcGxhbiB0byBhYm9ydC5cblx0ICogVGhhdCBhY3Rpb24gaXMgcmV0dXJuZWQuXG5cdCAqL1xuXHRwbGFuQWJvcnRlZChhYm9ydGVyOiBHb2FwQWN0aW9uKTogdm9pZDtcblxuXHQvKipcblx0ICogQ2FsbGVkIGR1cmluZyBVcGRhdGUuIE1vdmUgdGhlIGFnZW50IHRvd2FyZHMgdGhlIHRhcmdldCBpbiBvcmRlclxuXHQgKiBmb3IgdGhlIG5leHQgYWN0aW9uIHRvIGJlIGFibGUgdG8gcGVyZm9ybS5cblx0ICogUmV0dXJuIHRydWUgaWYgdGhlIEFnZW50IGlzIGF0IHRoZSB0YXJnZXQgYW5kIHRoZSBuZXh0IGFjdGlvbiBjYW4gcGVyZm9ybS5cblx0ICogRmFsc2UgaWYgaXQgaXMgbm90IHRoZXJlIHlldC5cblx0ICovXG5cdG1vdmVBZ2VudChuZXh0QWN0aW9uOiBHb2FwQWN0aW9uLCBkZWx0YTogbnVtYmVyKTogYm9vbGVhbjtcbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZUVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQUlBLENBQUM7SUFIYyxtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4QixtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQUN4Qiw0QkFBa0IsR0FBRyxvQkFBb0IsQ0FBQztJQUN6RCxnQkFBQztDQUpELEFBSUMsSUFBQTtBQUpZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0YXRlRW51bSB7XG5cdHB1YmxpYyBzdGF0aWMgU3RhdGVJZGxlID0gXCJTdGF0ZUlkbGVcIjtcblx0cHVibGljIHN0YXRpYyBTdGF0ZU1vdmUgPSBcIlN0YXRlTW92ZVwiO1xuXHRwdWJsaWMgc3RhdGljIFN0YXRlUGVyZm9ybUFjdGlvbiA9IFwiU3RhdGVQZXJmb3JtQWN0aW9uXCI7XG59Il19
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
var GoapAgent_1 = require("../../goap/GoapAgent");
var StateBase_1 = require("./StateBase");
var StateEnum_1 = require("./StateEnum");
var StateIdle = /** @class */ (function (_super) {
    __extends(StateIdle, _super);
    function StateIdle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StateIdle.prototype.onEnter = function () { };
    /**
     * 状态更新
     * @return
     */
    StateIdle.prototype.onUpdate = function (timeStamp) {
        var owner = this.owner.getComponent(GoapAgent_1.GoapAgent);
        var goap = owner.getGoap();
        var planner = owner.getPlanner();
        var avaliableActions = owner.getAvaliableActions();
        // GOAP planning
        // get the world state and the goal we want to plan for
        var worldState = goap.getWorldState();
        var goal = goap.createGoalState();
        // plan
        var plan = planner.plan(owner.node, avaliableActions, worldState, goal);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZUlkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUFnRDtBQUdoRCx5Q0FBdUM7QUFDdkMseUNBQXVDO0FBRXZDO0lBQStCLDZCQUFTO0lBQXhDOztJQWlDQSxDQUFDO0lBaENVLDJCQUFPLEdBQWQsY0FBa0IsQ0FBQztJQUVuQjs7O09BR0c7SUFDSSw0QkFBUSxHQUFmLFVBQWdCLFNBQWlCO1FBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLHFCQUFTLENBQUMsQ0FBQTtRQUM5QyxJQUFJLElBQUksR0FBVSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDakMsSUFBSSxPQUFPLEdBQWdCLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUM3QyxJQUFJLGdCQUFnQixHQUFpQixLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtRQUNoRSxnQkFBZ0I7UUFFaEIsdURBQXVEO1FBQ3ZELElBQUksVUFBVSxHQUF3QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDMUQsSUFBSSxJQUFJLEdBQXdCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUV0RCxPQUFPO1FBQ1AsSUFBSSxJQUFJLEdBQWlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDckYsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2QsMEJBQTBCO1lBQzFCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUUxQiw4QkFBOEI7WUFDOUIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLGtCQUFrQixDQUFDLENBQUE7U0FDbEQ7YUFBTTtZQUNILDZCQUE2QjtZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3JCLEtBQUssQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtTQUN6QztJQUNMLENBQUM7SUFDTCxnQkFBQztBQUFELENBakNBLEFBaUNDLENBakM4QixxQkFBUyxHQWlDdkM7QUFqQ1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwQWdlbnRcIlxuaW1wb3J0IHsgR29hcFBsYW5uZXIgfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwUGxhbm5lclwiXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi8uLi9nb2FwL0lHb2FwXCJcbmltcG9ydCB7IFN0YXRlQmFzZSB9IGZyb20gXCIuL1N0YXRlQmFzZVwiXG5pbXBvcnQgeyBTdGF0ZUVudW0gfSBmcm9tIFwiLi9TdGF0ZUVudW1cIlxuXG5leHBvcnQgY2xhc3MgU3RhdGVJZGxlIGV4dGVuZHMgU3RhdGVCYXNlIHtcbiAgICBwdWJsaWMgb25FbnRlcigpIHt9XG5cbiAgICAvKipcbiAgICAgKiDnirbmgIHmm7TmlrBcbiAgICAgKiBAcmV0dXJuXG4gICAgICovXG4gICAgcHVibGljIG9uVXBkYXRlKHRpbWVTdGFtcDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBvd25lciA9IHRoaXMub3duZXIuZ2V0Q29tcG9uZW50KEdvYXBBZ2VudClcbiAgICAgICAgbGV0IGdvYXA6IElHb2FwID0gb3duZXIuZ2V0R29hcCgpXG4gICAgICAgIGxldCBwbGFubmVyOiBHb2FwUGxhbm5lciA9IG93bmVyLmdldFBsYW5uZXIoKVxuICAgICAgICBsZXQgYXZhbGlhYmxlQWN0aW9uczogR29hcEFjdGlvbltdID0gb3duZXIuZ2V0QXZhbGlhYmxlQWN0aW9ucygpXG4gICAgICAgIC8vIEdPQVAgcGxhbm5pbmdcblxuICAgICAgICAvLyBnZXQgdGhlIHdvcmxkIHN0YXRlIGFuZCB0aGUgZ29hbCB3ZSB3YW50IHRvIHBsYW4gZm9yXG4gICAgICAgIGxldCB3b3JsZFN0YXRlOiBNYXA8c3RyaW5nLCBPYmplY3Q+ID0gZ29hcC5nZXRXb3JsZFN0YXRlKClcbiAgICAgICAgbGV0IGdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4gPSBnb2FwLmNyZWF0ZUdvYWxTdGF0ZSgpXG5cbiAgICAgICAgLy8gcGxhblxuICAgICAgICBsZXQgcGxhbjogR29hcEFjdGlvbltdID0gcGxhbm5lci5wbGFuKG93bmVyLm5vZGUsIGF2YWxpYWJsZUFjdGlvbnMsIHdvcmxkU3RhdGUsIGdvYWwpXG4gICAgICAgIGlmIChwbGFuICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBwbGFuLCBob29yYXkhXG4gICAgICAgICAgICBvd25lci5zZXRDdXJyZW50QWN0aW9ucyhwbGFuKVxuICAgICAgICAgICAgZ29hcC5wbGFuRm91bmQoZ29hbCwgcGxhbilcblxuICAgICAgICAgICAgLy8gbW92ZSB0byBQZXJmb3JtQWN0aW9uIHN0YXRlXG4gICAgICAgICAgICBvd25lci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVQZXJmb3JtQWN0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkZhaWxlZCBQbGFuXCIpO1xuICAgICAgICAgICAgZ29hcC5wbGFuRmFpbGVkKGdvYWwpXG4gICAgICAgICAgICBvd25lci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVJZGxlKVxuICAgICAgICB9XG4gICAgfVxufVxuIl19
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
var GoapAgent_1 = require("../../goap/GoapAgent");
var StateBase_1 = require("./StateBase");
var StateEnum_1 = require("./StateEnum");
var StateMove = /** @class */ (function (_super) {
    __extends(StateMove, _super);
    function StateMove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StateMove.prototype.onEnter = function () { };
    /**
     * 状态更新
     * @return
     */
    StateMove.prototype.onUpdate = function (delta) {
        var goapAgent = this.owner.getComponent(GoapAgent_1.GoapAgent);
        var goap = goapAgent.getGoap();
        var action = goapAgent.peekCurrentActions();
        if (action.requiresInRange() && action.target == null) {
            console.log("Fatal error: Action requires a target but has none. Planning failed. You did not assign the target in your Action.checkProceduralPrecondition()");
            goapAgent.changeState(StateEnum_1.StateEnum.StateIdle);
            return;
        }
        // get the agent to move itself
        if (goap.moveAgent(action, delta)) {
            goapAgent.changeState(StateEnum_1.StateEnum.StatePerformAction);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZU1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUFnRDtBQUVoRCx5Q0FBdUM7QUFDdkMseUNBQXVDO0FBRXZDO0lBQStCLDZCQUFTO0lBQXhDOztJQXFCQSxDQUFDO0lBcEJVLDJCQUFPLEdBQWQsY0FBa0IsQ0FBQztJQUNuQjs7O09BR0c7SUFDSSw0QkFBUSxHQUFmLFVBQWdCLEtBQWE7UUFDekIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMscUJBQVMsQ0FBQyxDQUFBO1FBQ2xELElBQUksSUFBSSxHQUFVLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNyQyxJQUFJLE1BQU0sR0FBZSxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtRQUN2RCxJQUFJLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlKQUFpSixDQUFDLENBQUE7WUFDOUosU0FBUyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQzFDLE9BQU07U0FDVDtRQUVELCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQy9CLFNBQVMsQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1NBQ3REO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsQ0FyQjhCLHFCQUFTLEdBcUJ2QztBQXJCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi8uLi9nb2FwL0dvYXBBZ2VudFwiXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi8uLi9nb2FwL0lHb2FwXCJcbmltcG9ydCB7IFN0YXRlQmFzZSB9IGZyb20gXCIuL1N0YXRlQmFzZVwiXG5pbXBvcnQgeyBTdGF0ZUVudW0gfSBmcm9tIFwiLi9TdGF0ZUVudW1cIlxuXG5leHBvcnQgY2xhc3MgU3RhdGVNb3ZlIGV4dGVuZHMgU3RhdGVCYXNlIHtcbiAgICBwdWJsaWMgb25FbnRlcigpIHt9XG4gICAgLyoqXG4gICAgICog54q25oCB5pu05pawXG4gICAgICogQHJldHVyblxuICAgICAqL1xuICAgIHB1YmxpYyBvblVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBnb2FwQWdlbnQgPSB0aGlzLm93bmVyLmdldENvbXBvbmVudChHb2FwQWdlbnQpXG4gICAgICAgIGxldCBnb2FwOiBJR29hcCA9IGdvYXBBZ2VudC5nZXRHb2FwKClcbiAgICAgICAgbGV0IGFjdGlvbjogR29hcEFjdGlvbiA9IGdvYXBBZ2VudC5wZWVrQ3VycmVudEFjdGlvbnMoKVxuICAgICAgICBpZiAoYWN0aW9uLnJlcXVpcmVzSW5SYW5nZSgpICYmIGFjdGlvbi50YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYXRhbCBlcnJvcjogQWN0aW9uIHJlcXVpcmVzIGEgdGFyZ2V0IGJ1dCBoYXMgbm9uZS4gUGxhbm5pbmcgZmFpbGVkLiBZb3UgZGlkIG5vdCBhc3NpZ24gdGhlIHRhcmdldCBpbiB5b3VyIEFjdGlvbi5jaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oKVwiKVxuICAgICAgICAgICAgZ29hcEFnZW50LmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCB0aGUgYWdlbnQgdG8gbW92ZSBpdHNlbGZcbiAgICAgICAgaWYgKGdvYXAubW92ZUFnZW50KGFjdGlvbiwgZGVsdGEpKSB7XG4gICAgICAgICAgICBnb2FwQWdlbnQuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlUGVyZm9ybUFjdGlvbilcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
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
var GoapAgent_1 = require("../../goap/GoapAgent");
var StateBase_1 = require("./StateBase");
var StateEnum_1 = require("./StateEnum");
var StatePerformAction = /** @class */ (function (_super) {
    __extends(StatePerformAction, _super);
    function StatePerformAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatePerformAction.prototype.onEnter = function () { };
    /**
     * 状态更新
     * @return
     */
    StatePerformAction.prototype.onUpdate = function (timeStamp) {
        var goapAgent = this.owner.getComponent(GoapAgent_1.GoapAgent);
        var goap = goapAgent.getGoap();
        if (!goapAgent.hasActionPlan()) {
            // no actions to perform
            console.log("Done actions");
            goapAgent.changeState(StateEnum_1.StateEnum.StateIdle);
            goap.actionsFinished();
            return;
        }
        var action = goapAgent.peekCurrentActions();
        if (action.isDone()) {
            // the action is done. Remove it so we can perform the next one
            goapAgent.dequeueCurrentActions();
        }
        if (goapAgent.hasActionPlan()) {
            // perform the next action
            action = goapAgent.peekCurrentActions();
            var inRange = action.requiresInRange() ? action.isInRange() : true;
            if (inRange) {
                // we are in range, so perform the action
                var success = action.perform(this.owner);
                if (!success) {
                    // action failed, we need to plan again
                    goapAgent.changeState(StateEnum_1.StateEnum.StateIdle);
                    goap.planAborted(action);
                }
            }
            else {
                // we need to move there first
                //TODO: push moveTo state
                goapAgent.changeState(StateEnum_1.StateEnum.StateMove);
            }
        }
        else {
            // no actions left, move to Plan state
            goapAgent.changeState(StateEnum_1.StateEnum.StateIdle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZVBlcmZvcm1BY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUFnRDtBQUVoRCx5Q0FBdUM7QUFDdkMseUNBQXVDO0FBRXZDO0lBQXdDLHNDQUFTO0lBQWpEOztJQTZDQSxDQUFDO0lBNUNVLG9DQUFPLEdBQWQsY0FBa0IsQ0FBQztJQUNuQjs7O09BR0c7SUFDSSxxQ0FBUSxHQUFmLFVBQWdCLFNBQWlCO1FBQzdCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLHFCQUFTLENBQUMsQ0FBQTtRQUNsRCxJQUFJLElBQUksR0FBVSxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUM1Qix3QkFBd0I7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUMzQixTQUFTLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDMUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1lBQ3RCLE9BQU07U0FDVDtRQUNELElBQUksTUFBTSxHQUFlLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO1FBQ3ZELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2pCLCtEQUErRDtZQUMvRCxTQUFTLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtTQUNwQztRQUVELElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzNCLDBCQUEwQjtZQUMxQixNQUFNLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQUE7WUFDdkMsSUFBSSxPQUFPLEdBQVksTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtZQUMzRSxJQUFJLE9BQU8sRUFBRTtnQkFDVCx5Q0FBeUM7Z0JBQ3pDLElBQUksT0FBTyxHQUFZLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNqRCxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNWLHVDQUF1QztvQkFDdkMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO29CQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUMzQjthQUNKO2lCQUFNO2dCQUNILDhCQUE4QjtnQkFDOUIseUJBQXlCO2dCQUN6QixTQUFTLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDN0M7U0FDSjthQUFNO1lBQ0gsc0NBQXNDO1lBQ3RDLFNBQVMsQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUMxQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7U0FDekI7SUFDTCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQTdDQSxBQTZDQyxDQTdDdUMscUJBQVMsR0E2Q2hEO0FBN0NZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi8uLi9nb2FwL0dvYXBBZ2VudFwiXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi8uLi9nb2FwL0lHb2FwXCJcbmltcG9ydCB7IFN0YXRlQmFzZSB9IGZyb20gXCIuL1N0YXRlQmFzZVwiXG5pbXBvcnQgeyBTdGF0ZUVudW0gfSBmcm9tIFwiLi9TdGF0ZUVudW1cIlxuXG5leHBvcnQgY2xhc3MgU3RhdGVQZXJmb3JtQWN0aW9uIGV4dGVuZHMgU3RhdGVCYXNlIHtcbiAgICBwdWJsaWMgb25FbnRlcigpIHt9XG4gICAgLyoqXG4gICAgICog54q25oCB5pu05pawXG4gICAgICogQHJldHVyblxuICAgICAqL1xuICAgIHB1YmxpYyBvblVwZGF0ZSh0aW1lU3RhbXA6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgZ29hcEFnZW50ID0gdGhpcy5vd25lci5nZXRDb21wb25lbnQoR29hcEFnZW50KVxuICAgICAgICBsZXQgZ29hcDogSUdvYXAgPSBnb2FwQWdlbnQuZ2V0R29hcCgpXG4gICAgICAgIGlmICghZ29hcEFnZW50Lmhhc0FjdGlvblBsYW4oKSkge1xuICAgICAgICAgICAgLy8gbm8gYWN0aW9ucyB0byBwZXJmb3JtXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvbmUgYWN0aW9uc1wiKVxuICAgICAgICAgICAgZ29hcEFnZW50LmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUpXG4gICAgICAgICAgICBnb2FwLmFjdGlvbnNGaW5pc2hlZCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsZXQgYWN0aW9uOiBHb2FwQWN0aW9uID0gZ29hcEFnZW50LnBlZWtDdXJyZW50QWN0aW9ucygpXG4gICAgICAgIGlmIChhY3Rpb24uaXNEb25lKCkpIHtcbiAgICAgICAgICAgIC8vIHRoZSBhY3Rpb24gaXMgZG9uZS4gUmVtb3ZlIGl0IHNvIHdlIGNhbiBwZXJmb3JtIHRoZSBuZXh0IG9uZVxuICAgICAgICAgICAgZ29hcEFnZW50LmRlcXVldWVDdXJyZW50QWN0aW9ucygpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ29hcEFnZW50Lmhhc0FjdGlvblBsYW4oKSkge1xuICAgICAgICAgICAgLy8gcGVyZm9ybSB0aGUgbmV4dCBhY3Rpb25cbiAgICAgICAgICAgIGFjdGlvbiA9IGdvYXBBZ2VudC5wZWVrQ3VycmVudEFjdGlvbnMoKVxuICAgICAgICAgICAgbGV0IGluUmFuZ2U6IGJvb2xlYW4gPSBhY3Rpb24ucmVxdWlyZXNJblJhbmdlKCkgPyBhY3Rpb24uaXNJblJhbmdlKCkgOiB0cnVlXG4gICAgICAgICAgICBpZiAoaW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIC8vIHdlIGFyZSBpbiByYW5nZSwgc28gcGVyZm9ybSB0aGUgYWN0aW9uXG4gICAgICAgICAgICAgICAgbGV0IHN1Y2Nlc3M6IGJvb2xlYW4gPSBhY3Rpb24ucGVyZm9ybSh0aGlzLm93bmVyKVxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBhY3Rpb24gZmFpbGVkLCB3ZSBuZWVkIHRvIHBsYW4gYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgZ29hcEFnZW50LmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUpXG4gICAgICAgICAgICAgICAgICAgIGdvYXAucGxhbkFib3J0ZWQoYWN0aW9uKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBtb3ZlIHRoZXJlIGZpcnN0XG4gICAgICAgICAgICAgICAgLy9UT0RPOiBwdXNoIG1vdmVUbyBzdGF0ZVxuICAgICAgICAgICAgICAgIGdvYXBBZ2VudC5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVNb3ZlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm8gYWN0aW9ucyBsZWZ0LCBtb3ZlIHRvIFBsYW4gc3RhdGVcbiAgICAgICAgICAgIGdvYXBBZ2VudC5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVJZGxlKVxuICAgICAgICAgICAgZ29hcC5hY3Rpb25zRmluaXNoZWQoKVxuICAgICAgICB9XG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQThDO0FBQzlDO0lBTUksbUJBQVksS0FBYztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUN2QixDQUFDO0lBTEQsc0JBQVcsNEJBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDdEIsQ0FBQzs7O09BQUE7SUFJRDs7T0FFRztJQUNJLDJCQUFPLEdBQWQsVUFBZSxHQUFlO1FBQWYsb0JBQUEsRUFBQSxVQUFlO0lBQVMsQ0FBQztJQUV4Qzs7OztPQUlHO0lBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsR0FBZTtRQUFmLG9CQUFBLEVBQUEsVUFBZTtJQUFTLENBQUM7SUFFMUM7OztPQUdHO0lBQ0ksNEJBQVEsR0FBZixVQUFnQixTQUFpQixJQUFTLENBQUM7SUFFM0M7Ozs7O09BS0c7SUFDSSwwQkFBTSxHQUFiLFVBQWMsTUFBMEI7UUFBMUIsdUJBQUEsRUFBQSxrQkFBMEI7SUFBUyxDQUFDO0lBQ2xEOzs7O09BSUc7SUFDSSwrQkFBVyxHQUFsQjtRQUNJLE9BQU8sMkJBQVksQ0FBQyxZQUFZLENBQUE7SUFDcEMsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtBQTFDWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlTWFuYWdlciB9IGZyb20gXCIuLi9TdGF0ZU1hbmFnZXJcIlxuZXhwb3J0IGNsYXNzIFN0YXRlQmFzZSB7XG4gICAgcHJvdGVjdGVkIF9vd25lcjogY2MuTm9kZVxuXG4gICAgcHVibGljIGdldCBvd25lcigpOiBjYy5Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX293bmVyXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKG93bmVyOiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMuX293bmVyID0gb3duZXJcbiAgICB9XG4gICAgLyoqXG4gICAgICog6L+b5YWl54q25oCBXG4gICAgICovXG4gICAgcHVibGljIG9uRW50ZXIob2JqOiBhbnkgPSBudWxsKTogdm9pZCB7fVxuXG4gICAgLyoqXG4gICAgICog5YaN5qyh6L+b5YWl54q25oCBXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEByZXR1cm5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25SZUVudGVyKG9iajogYW55ID0gbnVsbCk6IHZvaWQge31cblxuICAgIC8qKlxuICAgICAqIOeKtuaAgeabtOaWsFxuICAgICAqIEByZXR1cm5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25VcGRhdGUodGltZVN0YW1wOiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgICAvKipcbiAgICAgKiDnprvlvIDnirbmgIHnu5PmnZ9cbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVyblxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIG9uRXhpdChwcmVLZXk6IHN0cmluZyA9IHVuZGVmaW5lZCk6IHZvaWQge31cbiAgICAvKipcbiAgICAgKiDov5Tlm57nirbmgIFJRFxuICAgICAqIEByZXR1cm5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTdGF0ZUtleSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gU3RhdGVNYW5hZ2VyLkludmFsaWRTdGF0ZVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
