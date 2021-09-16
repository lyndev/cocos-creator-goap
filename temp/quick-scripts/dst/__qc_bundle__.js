
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
require('./assets/goap/Fire');
require('./assets/goap/FireNpc');
require('./assets/goap/GotoEatAction');
require('./assets/goap/GotoEquipmentAction');
require('./assets/goap/GotoFireAction');
require('./assets/goap/GotoToiletAction');
require('./assets/goap/Toilet');
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZkxvZ3NBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUMxRCx1REFBc0Q7QUFHdEQsOENBQTZDO0FBSTdDOzs7Ozs7R0FNRztBQUNIO0lBQXVDLHFDQUFVO0lBR2hEO1FBQUEsWUFDQyxpQkFBTyxTQUlQO1FBUE8sb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFJdkMsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLG9EQUFvRDtRQUN0RyxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsc0JBQXNCO1FBQ25FLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7O0lBQ3JFLENBQUM7SUFFTSxpQ0FBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVNLGtDQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQztJQUVNLDJDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU0sdURBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELG9DQUFvQztRQUNwQyxJQUFJLFdBQVcsR0FBMEIseUJBQVcsQ0FBQyxlQUFlLENBQUM7UUFDckUsSUFBSSxPQUFPLEdBQXdCLElBQUksQ0FBQztRQUN4QyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUM7UUFFNUIsS0FBbUIsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUU7WUFBM0IsSUFBSSxNQUFNLG9CQUFBO1lBQ2QsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNwQixrQ0FBa0M7Z0JBQ2xDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ2pCLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNDO2lCQUFNO2dCQUNOLG9DQUFvQztnQkFDcEMsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO29CQUN2QixnQ0FBZ0M7b0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQ2pCLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0Q7U0FDRDtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLG1DQUFPLEdBQWQsVUFBZSxRQUFrQjtRQUNoQyxJQUFJLFFBQVEsR0FBc0IsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLHdCQUFDO0FBQUQsQ0EzREEsQUEyREMsQ0EzRHNDLHVCQUFVLEdBMkRoRDtBQTNEWSw4Q0FBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIjtcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiO1xuaW1wb3J0IHsgU3VwcGx5UGlsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9TdXBwbHlQaWxlQ29tcG9uZW50XCI7XG5cbi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjA4OjU5IFxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTAtMjggMTE6MzQ6MDZcbiAqL1xuZXhwb3J0IGNsYXNzIERyb3BPZmZMb2dzQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG5cdHByaXZhdGUgZHJvcHBlZE9mZkxvZ3M6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIHRhcmdldDogU3VwcGx5UGlsZUNvbXBvbmVudDtcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIHRydWUpOyAvLyBjYW4ndCBkcm9wIG9mZiBsb2dzIGlmIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBzb21lXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIGZhbHNlKTsgLy8gd2Ugbm93IGhhdmUgbm8gbG9nc1xuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5Db2xsZWN0TG9ncywgdHJ1ZSk7IC8vIHdlIGNvbGxlY3RlZCBsb2dzXG5cdH1cblxuXHRwdWJsaWMgcmVzZXQoKSB7XG5cdFx0dGhpcy5kcm9wcGVkT2ZmTG9ncyA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5kcm9wcGVkT2ZmTG9ncztcblx0fVxuXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xuXHRcdC8vIFRPRE86ZmluZCB0aGUgbmVhcmVzdCBzdXBwbHkgcGlsZVxuXHRcdGxldCBzdXBwbHlQaWxlczogU3VwcGx5UGlsZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQuc3VwcGx5UGlsZUNvbXBzO1xuXHRcdGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbDtcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cblx0XHRmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcblx0XHRcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcblx0XHRcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuXHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRjbG9zZXN0RGlzdCA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cblx0XHRcdFx0bGV0IGRpc3Q6IG51bWJlciA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcblx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdFx0XHRcdGNsb3Nlc3QgPSBzdXBwbHk7XG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChjbG9zZXN0ID09IG51bGwpXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XG5cblx0XHRyZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuXHR9XG5cblx0cHVibGljIHBlcmZvcm0obGFib3VyZXI6IExhYm91cmVyKTogYm9vbGVhbiB7XG5cdFx0bGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrO1xuXHRcdHRoaXMudGFyZ2V0Lm51bUxvZ3MgKz0gYmFja3BhY2subnVtTG9ncztcblx0XHR0aGlzLmRyb3BwZWRPZmZMb2dzID0gdHJ1ZTtcblx0XHRiYWNrcGFjay5udW1Mb2dzID0gMDtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL3ZpZXcvRW52aXJvbm1lbnRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBa0U7QUFDbEUsNkVBQTRFO0FBQzVFLHVEQUFzRDtBQUN0RCw2REFBNEQ7QUFDNUQsbUVBQWtFO0FBQ2xFLCtEQUE4RDtBQUM5RCx1REFBc0Q7QUFDdEQscURBQW9EO0FBQ3BELCtEQUE4RDtBQUM5RCx1RUFBc0U7QUFDdEUsMkRBQTBEO0FBQ3BELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXFDLG1DQUFZO0lBQWpEO1FBQUEscUVBd0ZDO1FBdEZPLHFCQUFlLEdBQXdCLElBQUksQ0FBQztRQUU1QyxxQkFBZSxHQUF3QixJQUFJLENBQUM7UUFHM0MsbUJBQWEsR0FBc0IsSUFBSSxDQUFBO1FBRXZDLG1CQUFhLEdBQXNCLElBQUksQ0FBQTtRQUV2QyxtQkFBYSxHQUFzQixJQUFJLENBQUE7UUFHeEMsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFHaEMsdUJBQWlCLEdBQTJCLElBQUksQ0FBQztRQUVqRCxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUdqQyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixZQUFNLEdBQVcsSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBVSxJQUFJLENBQUM7UUFFcEIsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFckMsYUFBTyxHQUFHLENBQUMsQ0FBQTs7SUFvRFosQ0FBQztJQW5EQSwrQkFBSyxHQUFMO1FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyx5Q0FBZSxHQUF2QjtRQUNDLHlCQUFXLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDM0UseUJBQVcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3JGLHlCQUFXLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXpGLHlCQUFXLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLHlCQUFXLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUcxRCxhQUFhO1FBQ2IsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLElBQUksUUFBUSxHQUFHLElBQUkscUNBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLHFDQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFaEMsSUFBSSxZQUFZLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixrQkFBa0I7SUFDbkIsQ0FBQztJQUNELGVBQWU7SUFDUixtQ0FBUyxHQUFoQjtRQUNDLDBDQUEwQztRQUMxQywrQ0FBK0M7SUFDaEQsQ0FBQztJQUdPLHlDQUFlLEdBQXZCLFVBQXdCLFNBQVM7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNNLGdDQUFNLEdBQWIsVUFBYyxFQUFFO1FBQ2Ysb0JBQW9CO1FBQ3BCLDBCQUEwQjtRQUMxQixrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsR0FBRztJQUNKLENBQUM7SUFyRkQ7UUFEQyxRQUFRLENBQUMseUNBQW1CLENBQUM7NERBQ3FCO0lBRW5EO1FBREMsUUFBUSxDQUFDLHlDQUFtQixDQUFDOzREQUNxQjtJQUduRDtRQURDLFFBQVEsQ0FBQyxxQ0FBaUIsQ0FBQzswREFDbUI7SUFFL0M7UUFEQyxRQUFRLENBQUMscUNBQWlCLENBQUM7MERBQ21CO0lBRS9DO1FBREMsUUFBUSxDQUFDLHFDQUFpQixDQUFDOzBEQUNtQjtJQUcvQztRQURDLFFBQVEsQ0FBQyw2QkFBYSxDQUFDO3NEQUNlO0lBRXZDO1FBREMsUUFBUSxDQUFDLDZCQUFhLENBQUM7c0RBQ2U7SUFFdkM7UUFEQyxRQUFRLENBQUMsNkJBQWEsQ0FBQztzREFDZTtJQUV2QztRQURDLFFBQVEsQ0FBQyw2QkFBYSxDQUFDO3NEQUNlO0lBR3ZDO1FBREMsUUFBUSxDQUFDLCtDQUFzQixDQUFDOzhEQUN1QjtJQUV4RDtRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDO3NEQUNlO0lBR3hDO1FBREMsUUFBUSxDQUFDLHVCQUFVLENBQUM7dURBQ2dCO0lBRXJDO1FBREMsUUFBUSxDQUFDLGVBQU0sQ0FBQzttREFDWTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxhQUFLLENBQUM7a0RBQ1c7SUFFM0I7UUFEQyxRQUFRLENBQUMsdUJBQVUsQ0FBQzt1REFDZ0I7SUFsQ3pCLGVBQWU7UUFEM0IsT0FBTztPQUNLLGVBQWUsQ0F3RjNCO0lBQUQsc0JBQUM7Q0F4RkQsQUF3RkMsQ0F4Rm9DLEVBQUUsQ0FBQyxTQUFTLEdBd0ZoRDtBQXhGWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dhbWVkYXRhL0JhY2tQYWNrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaG9wcGluZ0Jsb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dhbWVkYXRhL0Nob3BwaW5nQmxvY2tDb21wb25lbnRcIjtcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL2dhbWVkYXRhL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBGb3JnZUNvbXBvbmVudCB9IGZyb20gXCIuLi9nYW1lZGF0YS9Gb3JnZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXJvblJvY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvSXJvblJvY2tDb21wb25lbnRcIjtcbmltcG9ydCB7IEJsYWNrc21pdGggfSBmcm9tIFwiLi4vZ2FtZWRhdGEvbGFib3VyZXJzL0JsYWNrc21pdGhcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvTG9nZ2VyXCI7XG5pbXBvcnQgeyBNaW5lciB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvTWluZXJcIjtcbmltcG9ydCB7IFdvb2RDdXR0ZXIgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvbGFib3VyZXJzL1dvb2RDdXR0ZXJcIjtcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvU3VwcGx5UGlsZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVHJlZUNvbXBvbmVudCB9IGZyb20gXCIuLi9nYW1lZGF0YS9UcmVlQ29tcG9uZW50XCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudFZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXHRAcHJvcGVydHkoU3VwcGx5UGlsZUNvbXBvbmVudClcblx0cHVibGljIHN1cHBseVBpbGVDb21wMTogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGw7XG5cdEBwcm9wZXJ0eShTdXBwbHlQaWxlQ29tcG9uZW50KVxuXHRwdWJsaWMgc3VwcGx5UGlsZUNvbXAyOiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbDtcblxuXHRAcHJvcGVydHkoSXJvblJvY2tDb21wb25lbnQpXG5cdHByaXZhdGUgaXJvblJvY2tDb21wMTogSXJvblJvY2tDb21wb25lbnQgPSBudWxsXG5cdEBwcm9wZXJ0eShJcm9uUm9ja0NvbXBvbmVudClcblx0cHJpdmF0ZSBpcm9uUm9ja0NvbXAyOiBJcm9uUm9ja0NvbXBvbmVudCA9IG51bGxcblx0QHByb3BlcnR5KElyb25Sb2NrQ29tcG9uZW50KVxuXHRwcml2YXRlIGlyb25Sb2NrQ29tcDM6IElyb25Sb2NrQ29tcG9uZW50ID0gbnVsbFxuXG5cdEBwcm9wZXJ0eShUcmVlQ29tcG9uZW50KVxuXHRwdWJsaWMgdHJlZUNvbXAxOiBUcmVlQ29tcG9uZW50ID0gbnVsbDtcblx0QHByb3BlcnR5KFRyZWVDb21wb25lbnQpXG5cdHB1YmxpYyB0cmVlQ29tcDI6IFRyZWVDb21wb25lbnQgPSBudWxsO1xuXHRAcHJvcGVydHkoVHJlZUNvbXBvbmVudClcblx0cHVibGljIHRyZWVDb21wMzogVHJlZUNvbXBvbmVudCA9IG51bGw7XG5cdEBwcm9wZXJ0eShUcmVlQ29tcG9uZW50KVxuXHRwdWJsaWMgdHJlZUNvbXA0OiBUcmVlQ29tcG9uZW50ID0gbnVsbDtcblxuXHRAcHJvcGVydHkoQ2hvcHBpbmdCbG9ja0NvbXBvbmVudClcblx0cHVibGljIGNob3BwaW5nQmxvY2tDb21wOiBDaG9wcGluZ0Jsb2NrQ29tcG9uZW50ID0gbnVsbDtcblx0QHByb3BlcnR5KEZvcmdlQ29tcG9uZW50KVxuXHRwdWJsaWMgZm9yZ2VDb21wOiBGb3JnZUNvbXBvbmVudCA9IG51bGw7XG5cblx0QHByb3BlcnR5KEJsYWNrc21pdGgpXG5cdHB1YmxpYyBibGFja1NtaXRoOiBCbGFja3NtaXRoID0gbnVsbDtcblx0QHByb3BlcnR5KExvZ2dlcilcblx0cHVibGljIGxvZ2dlcjogTG9nZ2VyID0gbnVsbDtcblx0QHByb3BlcnR5KE1pbmVyKVxuXHRwdWJsaWMgbWluZXI6IE1pbmVyID0gbnVsbDtcblx0QHByb3BlcnR5KFdvb2RDdXR0ZXIpXG5cdHB1YmxpYyB3b29kQ3V0dGVyOiBXb29kQ3V0dGVyID0gbnVsbDtcblxuXHRjdXJUaW1lID0gMFxuXHRzdGFydCgpIHtcblx0XHR0aGlzLmluaXRFbnZpcm9ubWVudCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0RW52aXJvbm1lbnQoKSB7XG5cdFx0RW52aXJvbm1lbnQuc3VwcGx5UGlsZUNvbXBzID0gW3RoaXMuc3VwcGx5UGlsZUNvbXAxLCB0aGlzLnN1cHBseVBpbGVDb21wMl07XG5cdFx0RW52aXJvbm1lbnQucm9ja0NvbXBzID0gW3RoaXMuaXJvblJvY2tDb21wMSwgdGhpcy5pcm9uUm9ja0NvbXAyLCB0aGlzLmlyb25Sb2NrQ29tcDNdO1xuXHRcdEVudmlyb25tZW50LnRyZWVDb21wcyA9IFt0aGlzLnRyZWVDb21wMSwgdGhpcy50cmVlQ29tcDIsIHRoaXMudHJlZUNvbXAzLCB0aGlzLnRyZWVDb21wNF07XG5cblx0XHRFbnZpcm9ubWVudC5mb3JnZUNvbXBzID0gW3RoaXMuZm9yZ2VDb21wXTtcblx0XHRFbnZpcm9ubWVudC5jaG9wcGluZ0Jsb2NrQ29tcHMgPSBbdGhpcy5jaG9wcGluZ0Jsb2NrQ29tcF07XG5cblxuXHRcdC8vIOiuvue9rmJhY2twYWNrXG5cdFx0bGV0IHNtaXRoQlAgPSBuZXcgQmFja1BhY2tDb21wb25lbnQoMCwgMCwgMCk7XG5cdFx0dGhpcy5ibGFja1NtaXRoLnNldEJhY2tQYWNrKHNtaXRoQlApO1xuXG5cdFx0bGV0IGxvZ2dlckJQID0gbmV3IEJhY2tQYWNrQ29tcG9uZW50KDAsIDAsIDApO1xuXHRcdHRoaXMubG9nZ2VyLnNldEJhY2tQYWNrKGxvZ2dlckJQKTtcblxuXHRcdGxldCBtaW5lckJQID0gbmV3IEJhY2tQYWNrQ29tcG9uZW50KDAsIDAsIDApO1xuXHRcdHRoaXMubWluZXIuc2V0QmFja1BhY2sobWluZXJCUCk7XG5cblx0XHRsZXQgd29vZEN1dHRlckJQID0gbmV3IEJhY2tQYWNrQ29tcG9uZW50KDAsIDAsIDApO1xuXHRcdHRoaXMud29vZEN1dHRlci5zZXRCYWNrUGFjayh3b29kQ3V0dGVyQlApO1xuXG5cdFx0dGhpcy5zdGFydFRpY2soKTtcblx0XHQvLyB0aGlzLnVwZGF0ZSgzKTtcblx0fVxuXHQvKirlvIDlp4vmuLjmiI9zdGljayAqL1xuXHRwdWJsaWMgc3RhcnRUaWNrKCkge1xuXHRcdC8vdGhpcy5sYXN0VGltZVN0YW1wID0gVGltZVV0aWwuZ2V0VGltZSgpO1xuXHRcdC8vXHRlZ3JldC5zdGFydFRpY2sodGhpcy51cGRhdGVUaW1lU3RhbXAsIHRoaXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBsYXN0VGltZVN0YW1wOiBudW1iZXI7XG5cdHByaXZhdGUgdXBkYXRlVGltZVN0YW1wKHRpbWVTdGFtcCk6IGJvb2xlYW4ge1xuXHRcdHRoaXMudXBkYXRlKHRpbWVTdGFtcCAtIHRoaXMubGFzdFRpbWVTdGFtcCk7XG5cdFx0dGhpcy5sYXN0VGltZVN0YW1wID0gdGltZVN0YW1wO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHB1YmxpYyB1cGRhdGUoZHQpIHtcblx0XHQvL3RoaXMuY3VyVGltZSAtPSBkdFxuXHRcdC8vaWYgKHRoaXMuY3VyVGltZSA8PSAwKSB7XG5cdFx0Ly90aGlzLmN1clRpbWUgPSAxXG5cdFx0dGhpcy5taW5lci51cGRhdGUoZHQpO1xuXHRcdHRoaXMuYmxhY2tTbWl0aC51cGRhdGUoZHQpO1xuXHRcdHRoaXMubG9nZ2VyLnVwZGF0ZShkdCk7XG5cdFx0dGhpcy53b29kQ3V0dGVyLnVwZGF0ZShkdCk7XG5cdFx0Ly99XG5cdH1cbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7Ozs7O0dBTUc7QUFDSDtJQWdCQztRQVpRLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFakM7OzZCQUVxQjtRQUNkLFNBQUksR0FBVyxDQUFDLENBQUM7UUFRdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO0lBQ2hELENBQUM7SUFFTSw0QkFBTyxHQUFkO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQWdDRDs7O09BR0c7SUFDSSw4QkFBUyxHQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRU0sK0JBQVUsR0FBakIsVUFBa0IsT0FBZ0I7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVNLG9DQUFlLEdBQXRCLFVBQXVCLEdBQVcsRUFBRSxLQUFVO1FBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRU0sdUNBQWtCLEdBQXpCLFVBQTBCLEdBQVc7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLDhCQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxLQUFVO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ00saUNBQVksR0FBbkIsVUFBb0IsR0FBVztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsc0JBQVcscUNBQWE7YUFBeEI7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVywrQkFBTzthQUFsQjtZQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUNGLGlCQUFDO0FBQUQsQ0F6RkEsQUF5RkMsSUFBQTtBQXpGcUIsZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25TdGF0dXNcIjtcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4vSUdvYXBcIjtcblxuLypcbiAqIEBEZXNjcmlwdGlvbjogXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MDk6MjYgXG4gKiBATGFzdCBNb2RpZmllZCBieTogICBSYW5uYXJZYW5nIFxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0wOS0wNiAwMDowOToyNiBcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdvYXBBY3Rpb24ge1xuXHRwcml2YXRlIHByZWNvbmRpdGlvbnM6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD47XG5cdHByaXZhdGUgZWZmZWN0czogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PjtcblxuXHRwcml2YXRlIGluUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHQvKiDmiafooYzliqjkvZznmoTmiJDmnKzjgIJcblx0KiDmib7lh7rpgILlkIjliqjkvZznmoTph43ph4/jgIJcblx0KiDmm7TmlLnlroPlsIblvbHlk43lnKjorqHliJLmnJ/pl7TpgInmi6nnmoTmk43kvZzjgIIqL1xuXHRwdWJsaWMgY29zdDogbnVtYmVyID0gMTtcblxuXHRcblx0LyoqXG5cdCog5LiA5Liq5Yqo5L2c6YCa5bi45b+F6aG75Zyo5LiA5Liq5a+56LGh5LiK5omn6KGM44CC6L+Z5bCx5piv6YKj5Liq5a+56LGh44CC5Y+v5Lul5Li656m644CCICovXG5cdHB1YmxpYyB0YXJnZXQ6IFZHYW1lT2JqZWN0O1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnByZWNvbmRpdGlvbnMgPSBuZXcgTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PigpO1xuXHRcdHRoaXMuZWZmZWN0cyA9IG5ldyBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KCk7XG5cdH1cblxuXHRwdWJsaWMgZG9SZXNldCgpIHtcblx0XHR0aGlzLmluUmFuZ2UgPSBmYWxzZTtcblx0XHR0aGlzLnRhcmdldCA9IG51bGw7XG5cdFx0dGhpcy5yZXNldCgpO1xuXHR9XG5cdC8qKlxuXHQgKiBSZXNldCBhbnkgdmFyaWFibGVzIHRoYXQgbmVlZCB0byBiZSByZXNldCBiZWZvcmUgcGxhbm5pbmcgaGFwcGVucyBhZ2Fpbi5cblx0ICovXG5cdGFic3RyYWN0IHJlc2V0KCk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIElzIHRoZSBhY3Rpb24gZG9uZT9cblx0ICovXG5cdGFic3RyYWN0IGlzRG9uZSgpOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBQcm9jZWR1cmFsbHkgY2hlY2sgaWYgdGhpcyBhY3Rpb24gY2FuIHJ1bi4gTm90IGFsbCBhY3Rpb25zXG5cdCAqIHdpbGwgbmVlZCB0aGlzLCBidXQgc29tZSBtaWdodC5cblx0ICovXG5cdGFic3RyYWN0IGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBSdW4gdGhlIGFjdGlvbi5cblx0ICogUmV0dXJucyBUcnVlIGlmIHRoZSBhY3Rpb24gcGVyZm9ybWVkIHN1Y2Nlc3NmdWxseSBvciBmYWxzZVxuXHQgKiBpZiBzb21ldGhpbmcgaGFwcGVuZWQgYW5kIGl0IGNhbiBubyBsb25nZXIgcGVyZm9ybS4gSW4gdGhpcyBjYXNlXG5cdCAqIHRoZSBhY3Rpb24gcXVldWUgc2hvdWxkIGNsZWFyIG91dCBhbmQgdGhlIGdvYWwgY2Fubm90IGJlIHJlYWNoZWQuXG5cdCAqL1xuXHRhYnN0cmFjdCBwZXJmb3JtKGlHb2FwOiBJR29hcCk6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIERvZXMgdGhpcyBhY3Rpb24gbmVlZCB0byBiZSB3aXRoaW4gcmFuZ2Ugb2YgYSB0YXJnZXQgZ2FtZSBvYmplY3Q/XG5cdCAqIElmIG5vdCB0aGVuIHRoZSBtb3ZlVG8gc3RhdGUgd2lsbCBub3QgbmVlZCB0byBydW4gZm9yIHRoaXMgYWN0aW9uLlxuXHQgKi9cblx0YWJzdHJhY3QgcmVxdWlyZXNJblJhbmdlKCk6IGJvb2xlYW47XG5cblxuXHQvKipcblx0ICogQXJlIHdlIGluIHJhbmdlIG9mIHRoZSB0YXJnZXQ/XG5cdCAqIFRoZSBNb3ZlVG8gc3RhdGUgd2lsbCBzZXQgdGhpcyBhbmQgaXQgZ2V0cyByZXNldCBlYWNoIHRpbWUgdGhpcyBhY3Rpb24gaXMgcGVyZm9ybWVkLlxuXHQgKi9cblx0cHVibGljIGlzSW5SYW5nZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pblJhbmdlO1xuXHR9XG5cblx0cHVibGljIHNldEluUmFuZ2UoaW5SYW5nZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuaW5SYW5nZSA9IGluUmFuZ2U7XG5cdH1cblxuXHRwdWJsaWMgYWRkUHJlY29uZGl0aW9uKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5wcmVjb25kaXRpb25zLnNldChrZXksIHZhbHVlKVxuXHR9XG5cblx0cHVibGljIHJlbW92ZVByZWNvbmRpdGlvbihrZXk6IHN0cmluZykge1xuXHRcdHRoaXMucHJlY29uZGl0aW9ucy5kZWxldGUoa2V5KTtcblx0fVxuXG5cdHB1YmxpYyBhZGRFZmZlY3Qoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLmVmZmVjdHMuc2V0KGtleSwgdmFsdWUpO1xuXHR9XG5cdHB1YmxpYyByZW1vdmVFZmZlY3Qoa2V5OiBzdHJpbmcpIHtcblx0XHR0aGlzLmVmZmVjdHMuZGVsZXRlKGtleSk7XG5cdH1cblx0cHVibGljIGdldCBQcmVjb25kaXRpb25zKCkge1xuXHRcdHJldHVybiB0aGlzLnByZWNvbmRpdGlvbnM7XG5cdH1cblx0cHVibGljIGdldCBFZmZlY3RzKCkge1xuXHRcdHJldHVybiB0aGlzLmVmZmVjdHM7XG5cdH1cbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWlDLCtCQUFZO0lBQTdDOztJQXdCQSxDQUFDO0lBdkJPLDRCQUFNLEdBQWIsVUFBYyxNQUFtQixFQUFFLElBQVk7UUFDOUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QyxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ3hCLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ04sSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0YsQ0FBQztJQUNNLDhCQUFRLEdBQWYsVUFBZ0IsT0FBb0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0QsV0FBVztJQUNKLG9DQUFjLEdBQXJCLFVBQXNCLE1BQW1CO1FBQ3hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RJLENBQUM7SUFDRCxRQUFRO0lBQ0QsOEJBQVEsR0FBZixVQUFnQixNQUFNO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQXZCVyxXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBd0J2QjtJQUFELGtCQUFDO0NBeEJELEFBd0JDLENBeEJnQyxFQUFFLENBQUMsU0FBUyxHQXdCNUM7QUF4Qlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBWR2FtZU9iamVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cdHB1YmxpYyBtb3ZlVG8odGFyZ2V0OiBWR2FtZU9iamVjdCwgc3RlcDogbnVtYmVyKSB7XG5cdFx0bGV0IGN1ckRpcyA9IHRoaXMuZGlzdGFuY2VTcXVhcmUodGFyZ2V0KVxuXHRcdGxldCBtaW5EaXMgPSBzdGVwICogc3RlcFxuXHRcdGlmIChjdXJEaXMgPD0gbWluRGlzKSB7XG5cdFx0XHR0aGlzLm5vZGUueCA9IHRhcmdldC5ub2RlLng7XG5cdFx0XHR0aGlzLm5vZGUueSA9IHRhcmdldC5ub2RlLnk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBwZXJjZW50ID0gNiAvIHRoaXMuZGlzdGFuY2UodGFyZ2V0KVxuXHRcdFx0dGhpcy5ub2RlLnggPSB0aGlzLm5vZGUueCArIHBlcmNlbnQgKiAodGFyZ2V0Lm5vZGUueCAtIHRoaXMubm9kZS54KVxuXHRcdFx0dGhpcy5ub2RlLnkgPSB0aGlzLm5vZGUueSArIHBlcmNlbnQgKiAodGFyZ2V0Lm5vZGUueSAtIHRoaXMubm9kZS55KTtcblx0XHR9XG5cdH1cblx0cHVibGljIHBvc0VxdWlwKGdhbWVPYmo6IFZHYW1lT2JqZWN0KSB7XG5cdFx0cmV0dXJuIHRoaXMubm9kZS54ID09IGdhbWVPYmoubm9kZS54ICYmIHRoaXMubm9kZS55ID09IGdhbWVPYmoubm9kZS55O1xuXHR9XG5cdC8qKui3neemu+eahOW5s+aWuSAqL1xuXHRwdWJsaWMgZGlzdGFuY2VTcXVhcmUob2JqZWN0OiBWR2FtZU9iamVjdCkge1xuXHRcdHJldHVybiAob2JqZWN0Lm5vZGUueCAtIHRoaXMubm9kZS54KSAqIChvYmplY3Qubm9kZS54IC0gdGhpcy5ub2RlLngpICsgKG9iamVjdC5ub2RlLnkgLSB0aGlzLm5vZGUueSkgKiAob2JqZWN0Lm5vZGUueSAtIHRoaXMubm9kZS55KTtcblx0fVxuXHQvKirot53nprsgKi9cblx0cHVibGljIGRpc3RhbmNlKG9iamVjdCkge1xuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVNxdWFyZShvYmplY3QpKVxuXHR9XG59Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBO0lBQUE7SUFXQSxDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQVhBLEFBV0MsSUFBQTtBQVhZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVhdGluZyBmcm9tIFwiLi4vLi4vLi4vZ29hcC9FYXRpbmdcIjtcbmltcG9ydCBFcXVpcCBmcm9tIFwiLi4vLi4vLi4vZ29hcC9FcXVpcFwiO1xuaW1wb3J0IEZpcmUgZnJvbSBcIi4uLy4uLy4uL2dvYXAvRmlyZVwiO1xuaW1wb3J0IFRvaWxldCBmcm9tIFwiLi4vLi4vLi4vZ29hcC9Ub2lsZXRcIjtcbmltcG9ydCB7IENob3BwaW5nQmxvY2tDb21wb25lbnQgfSBmcm9tIFwiLi9DaG9wcGluZ0Jsb2NrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBGb3JnZUNvbXBvbmVudCB9IGZyb20gXCIuL0ZvcmdlQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBJcm9uUm9ja0NvbXBvbmVudCB9IGZyb20gXCIuL0lyb25Sb2NrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBTdXBwbHlQaWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVHJlZUNvbXBvbmVudCB9IGZyb20gXCIuL1RyZWVDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblx0cHVibGljIHN0YXRpYyBzdXBwbHlQaWxlQ29tcHM6IFN1cHBseVBpbGVDb21wb25lbnRbXTtcblx0cHVibGljIHN0YXRpYyB0cmVlQ29tcHM6IFRyZWVDb21wb25lbnRbXTtcblx0cHVibGljIHN0YXRpYyByb2NrQ29tcHM6IElyb25Sb2NrQ29tcG9uZW50W107XG5cdHB1YmxpYyBzdGF0aWMgZm9yZ2VDb21wczogRm9yZ2VDb21wb25lbnRbXTtcblx0cHVibGljIHN0YXRpYyBjaG9wcGluZ0Jsb2NrQ29tcHM6IENob3BwaW5nQmxvY2tDb21wb25lbnRbXTtcblxuXHRwdWJsaWMgc3RhdGljIHRvaWxldFRhcmdldDpUb2lsZXTigIvigIs7XG5cdHB1YmxpYyBzdGF0aWMgZmlyZVRhcmdldDpGaXJlO1xuXHRwdWJsaWMgc3RhdGljIGVhdGluZ1RhcmdldDpFYXRpbmc7XG5cdHB1YmxpYyBzdGF0aWMgZXF1aXBUYXJnZXQ6RXF1aXA7XG59Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL1N1cHBseVBpbGVDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUM1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF5Qyx1Q0FBVztJQUFwRDtRQUFBLHFFQTJEQztRQXpETyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0Isb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFTL0IsZUFBUyxHQUFXLENBQUMsQ0FBQyxDQUFDLG1DQUFtQztRQVUxRCxjQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCO1FBWXZDLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1FBVWpELGFBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjOztJQVU1QyxDQUFDO0lBakRBLG1DQUFLLEdBQUw7UUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2RCxDQUFDO0lBR0Qsc0JBQVcseUNBQVE7YUFBbkI7WUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkIsQ0FBQzthQUNELFVBQW9CLEdBQVc7WUFDOUIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzNELENBQUM7OztPQUxBO0lBUUQsc0JBQVcsd0NBQU87YUFBbEI7WUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQW1CLEdBQVc7WUFDN0IsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRXpELENBQUM7OztPQU5BO0lBVUQsc0JBQVcsNENBQVc7YUFBdEI7WUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQXVCLEdBQVc7WUFDakMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN4QixJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLENBQUM7OztPQUxBO0lBUUQsc0JBQVcsdUNBQU07YUFBakI7WUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckIsQ0FBQzthQUNELFVBQWtCLEdBQVc7WUFDNUIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELENBQUM7OztPQUxBO0lBbEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkRBQ2dCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ2U7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDZTtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytEQUNvQjtJQVIzQixtQkFBbUI7UUFEL0IsT0FBTztPQUNLLG1CQUFtQixDQTJEL0I7SUFBRCwwQkFBQztDQTNERCxBQTJEQyxDQTNEd0MseUJBQVcsR0EyRG5EO0FBM0RZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFN1cHBseVBpbGVDb21wb25lbnQgZXh0ZW5kcyBWR2FtZU9iamVjdCB7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHVibGljIHR4dFRvb2xOdW06IGNjLkxhYmVsID0gbnVsbDtcblx0QHByb3BlcnR5KGNjLkxhYmVsKVxuXHRwdWJsaWMgdHh0T3JlTnVtOiBjYy5MYWJlbCA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHVibGljIHR4dExvZ051bTogY2MuTGFiZWwgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG5cdHB1YmxpYyB0eHRGaXJld29vZE51bTogY2MuTGFiZWwgPSBudWxsO1xuXG5cdHN0YXJ0KCkge1xuXHRcdHRoaXMudHh0VG9vbE51bS5zdHJpbmcgPSBcIuW3peWFt++8mlwiICsgdGhpcy5udW1Ub29scztcblx0XHR0aGlzLnR4dE9yZU51bS5zdHJpbmcgPSBcIuefv+efs++8mlwiICsgdGhpcy5udW1PcmU7XG5cdFx0dGhpcy50eHRMb2dOdW0uc3RyaW5nID0gXCLljp/mnKjvvJpcIiArIHRoaXMubnVtTG9ncztcblx0XHR0aGlzLnR4dEZpcmV3b29kTnVtLnN0cmluZyA9IFwi5pyo5p+077yaXCIgKyB0aGlzLm51bUZpcmV3b29kO1xuXHR9XG5cblx0cHJpdmF0ZSBfbnVtVG9vbHM6IG51bWJlciA9IDA7IC8vIGZvciBtaW5pbmcgb3JlIGFuZCBjaG9wcGluZyBsb2dzXG5cdHB1YmxpYyBnZXQgbnVtVG9vbHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX251bVRvb2xzO1xuXHR9XG5cdHB1YmxpYyBzZXQgbnVtVG9vbHModmFsOiBudW1iZXIpIHtcblx0XHR2YWwgPSBOdW1iZXIodmFsKTtcblx0XHR0aGlzLl9udW1Ub29scyA9IHZhbDtcblx0XHR0aGlzLnR4dFRvb2xOdW0gJiYgKHRoaXMudHh0VG9vbE51bS5zdHJpbmcgPSBcIuW3peWFt++8mlwiICsgdmFsKTtcblx0fVxuXG5cdHByaXZhdGUgX251bUxvZ3M6IG51bWJlciA9IDA7IC8vIG1ha2VzIGZpcmV3b29kXG5cdHB1YmxpYyBnZXQgbnVtTG9ncygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl9udW1Mb2dzO1xuXHR9XG5cdHB1YmxpYyBzZXQgbnVtTG9ncyh2YWw6IG51bWJlcikge1xuXHRcdHZhbCA9IE51bWJlcih2YWwpO1xuXHRcdHRoaXMuX251bUxvZ3MgPSB2YWw7XG5cdFx0dGhpcy50eHRMb2dOdW0gJiYgKHRoaXMudHh0TG9nTnVtLnN0cmluZyA9IFwi5Y6f5pyo77yaXCIgKyB2YWwpO1xuXG5cdH1cblxuXG5cdHByaXZhdGUgX251bUZpcmV3b29kOiBudW1iZXIgPSAwOyAvLyB3aGF0IHdlIHdhbnQgdG8gbWFrZVxuXHRwdWJsaWMgZ2V0IG51bUZpcmV3b29kKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX251bUZpcmV3b29kO1xuXHR9XG5cdHB1YmxpYyBzZXQgbnVtRmlyZXdvb2QodmFsOiBudW1iZXIpIHtcblx0XHR2YWwgPSBOdW1iZXIodmFsKTtcblx0XHR0aGlzLl9udW1GaXJld29vZCA9IHZhbDtcblx0XHR0aGlzLnR4dEZpcmV3b29kTnVtICYmICh0aGlzLnR4dEZpcmV3b29kTnVtLnN0cmluZyA9IFwi5pyo5p+077yaXCIgKyB2YWwpO1xuXHR9XG5cblx0cHJpdmF0ZSBfbnVtT3JlOiBudW1iZXIgPSAwOyAvLyBtYWtlcyB0b29sc1xuXHRwdWJsaWMgZ2V0IG51bU9yZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl9udW1PcmU7XG5cdH1cblx0cHVibGljIHNldCBudW1PcmUodmFsOiBudW1iZXIpIHtcblx0XHR2YWwgPSBOdW1iZXIodmFsKTtcblx0XHR0aGlzLl9udW1PcmUgPSB2YWw7XG5cdFx0dGhpcy50eHRPcmVOdW0gJiYgKHRoaXMudHh0T3JlTnVtLnN0cmluZyA9IFwi55+/55+z77yaXCIgKyB2YWwpO1xuXHR9XG5cbn0iXX0=
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvQ2hvcFRyZWVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUMvQywyREFBMEQ7QUFDMUQsdURBQXNEO0FBSXRELDhDQUE2QztBQUs3Qzs7Ozs7O0dBTUc7QUFDSDtJQUFvQyxrQ0FBVTtJQUs3QztRQUFBLFlBQ0MsaUJBQU8sU0FJUDtRQVRPLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFHM0MsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtRQUM5RSxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMscUNBQXFDO1FBQ3hGLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQzVDLENBQUM7SUFDTSw4QkFBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLCtCQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVNLHdDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ00sb0RBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELDhDQUE4QztRQUM5QyxJQUFJLEtBQUssR0FBb0IseUJBQVcsQ0FBQyxTQUFTLENBQUM7UUFDbkQsSUFBSSxPQUFPLEdBQWtCLElBQUksQ0FBQztRQUNsQyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUM7UUFFNUIsS0FBaUIsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssRUFBRTtZQUFuQixJQUFJLElBQUksY0FBQTtZQUNaLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDcEIsa0NBQWtDO2dCQUNsQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNmLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNOLG9DQUFvQztnQkFDcEMsSUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO29CQUN2QixnQ0FBZ0M7b0JBQ2hDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2YsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDbkI7YUFDRDtTQUNEO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNsQixPQUFPLEtBQUssQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRXRCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sZ0NBQU8sR0FBZCxVQUFlLEtBQVk7UUFDMUIsSUFBSSxRQUFRLEdBQUcsS0FBaUIsQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFckMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1RCxvQkFBb0I7WUFDcEIsSUFBSSxRQUFRLEdBQXNCLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDcEQsUUFBUSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxJQUFJLEdBQWtCLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDMUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQ3JCLGdDQUFnQztnQkFDaEMsd0JBQXdCO2dCQUN4QixRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdkI7U0FDRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0F6RUEsQUF5RUMsQ0F6RW1DLHVCQUFVLEdBeUU3QztBQXpFWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvVGltZVV0aWxcIjtcbmltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvSUdvYXBcIjtcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSBcIi4uL1Rvb2xDb21wb25lbnRcIjtcbmltcG9ydCB7IFRyZWVDb21wb25lbnQgfSBmcm9tIFwiLi4vVHJlZUNvbXBvbmVudFwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDowOToxMiBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTEwLTI4IDExOjMyOjIzXG4gKi9cbmV4cG9ydCBjbGFzcyBDaG9wVHJlZUFjdGlvbiBleHRlbmRzIEdvYXBBY3Rpb24ge1xuXHRwcml2YXRlIGNob3BwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSB3b3JrRHVyYXRpb246IG51bWJlciA9IDI7IC8vIHNlY29uZHNcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc1Rvb2wsIHRydWUpOyAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIGZhbHNlKTsgLy8gaWYgd2UgaGF2ZSBsb2dzIHdlIGRvbid0IHdhbnQgbW9yZVxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNMb2dzLCB0cnVlKTtcblx0fVxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG5cdFx0dGhpcy5jaG9wcGVkID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jaG9wcGVkO1xuXHR9XG5cblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xuXHRcdC8vIFRPRE86ZmluZCB0aGUgbmVhcmVzdCB0cmVlIHRoYXQgd2UgY2FuIGNob3Bcblx0XHRsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcblx0XHRsZXQgY2xvc2VzdDogVHJlZUNvbXBvbmVudCA9IG51bGw7XG5cdFx0bGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwO1xuXG5cdFx0Zm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xuXHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuXHRcdFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XG5cdFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xuXHRcdFx0XHRjbG9zZXN0RGlzdCA9IHRyZWUuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG5cdFx0XHRcdGxldCBkaXN0OiBudW1iZXIgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHRcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xuXHRcdFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG5cdFx0XHRcdFx0Y2xvc2VzdCA9IHRyZWU7XG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChjbG9zZXN0ID09IG51bGwpXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XG5cblx0XHRyZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuXHR9XG5cblx0cHVibGljIHBlcmZvcm0oaUdvYXA6IElHb2FwKTogYm9vbGVhbiB7XG5cdFx0bGV0IGxhYm91cmVyID0gaUdvYXAgYXMgTGFib3VyZXI7XG5cdFx0aWYgKHRoaXMuc3RhcnRUaW1lID09IDApXG5cdFx0XHR0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKTtcblxuXHRcdGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XG5cdFx0XHQvLyBmaW5pc2hlZCBjaG9wcGluZ1xuXHRcdFx0bGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrO1xuXHRcdFx0YmFja3BhY2subnVtTG9ncyArPSAxO1xuXHRcdFx0dGhpcy5jaG9wcGVkID0gdHJ1ZTtcblx0XHRcdGxldCB0b29sOiBUb29sQ29tcG9uZW50ID0gbGFib3VyZXIudG9vbDtcblx0XHRcdHRvb2wudXNlKDAuMzQpO1xuXHRcdFx0Y29uc29sZS5sb2coXCLkvb/nlKjlt6XlhbdcIiwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKVxuXHRcdFx0aWYgKHRvb2wuZGVzdHJveWVkKCkpIHtcblx0XHRcdFx0Ly8gVE9ETzogRGVzdHJveShiYWNrcGFjay50b29sKTtcblx0XHRcdFx0Ly8gYmFja3BhY2sudG9vbCA9IG51bGw7XG5cdFx0XHRcdGxhYm91cmVyLmRlc3Ryb3lUb29sKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59Il19
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRm9yZ2VUb29sQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsMkRBQTBEO0FBQzFELHVEQUFzRDtBQUd0RCw4Q0FBNkM7QUFJN0M7Ozs7OztHQU1HO0FBQ0g7SUFBcUMsbUNBQVU7SUFNOUM7UUFBQSxZQUNDLGlCQUFPLFNBR1A7UUFUTyxZQUFNLEdBQVksS0FBSyxDQUFDO1FBR3hCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsbUJBQWEsR0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBRzVDLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEQsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDaEQsQ0FBQztJQUVNLCtCQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sZ0NBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBQ00seUNBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTSxxREFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQsOEJBQThCO1FBQzlCLElBQUksTUFBTSxHQUFxQix5QkFBVyxDQUFDLFVBQVUsQ0FBQztRQUN0RCxJQUFJLE9BQU8sR0FBbUIsSUFBSSxDQUFDO1FBQ25DLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFrQixVQUFNLEVBQU4saUJBQU0sRUFBTixvQkFBTSxFQUFOLElBQU0sRUFBRTtZQUFyQixJQUFJLEtBQUssZUFBQTtZQUNiLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDcEIsa0NBQWtDO2dCQUNsQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNoQixXQUFXLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQztpQkFBTTtnQkFDTixvQ0FBb0M7Z0JBQ3BDLElBQUksSUFBSSxHQUFXLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9DLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtvQkFDdkIsZ0NBQWdDO29CQUNoQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjthQUNEO1NBQ0Q7UUFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1FBRWQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFFdEIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxpQ0FBTyxHQUFkLFVBQWUsUUFBa0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXJDLElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDN0QsMEJBQTBCO1lBQzFCLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3BELFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0Ysc0JBQUM7QUFBRCxDQWpFQSxBQWlFQyxDQWpFb0MsdUJBQVUsR0FpRTlDO0FBakVZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi8uLi8uLi91dGlscy9UaW1lVXRpbFwiO1xuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgQmFja1BhY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vQmFja1BhY2tDb21wb25lbnRcIjtcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBGb3JnZUNvbXBvbmVudCB9IGZyb20gXCIuLi9Gb3JnZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XG5cbi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjEyOjMzIFxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTAtMjggMTE6MzY6MDZcbiAqL1xuZXhwb3J0IGNsYXNzIEZvcmdlVG9vbEFjdGlvbiBleHRlbmRzIEdvYXBBY3Rpb24ge1xuXHRwcml2YXRlIGZvcmdlZDogYm9vbGVhbiA9IGZhbHNlO1xuXHRwdWJsaWMgdGFyZ2V0OiBGb3JnZUNvbXBvbmVudDsgLy8gd2hlcmUgd2UgZm9yZ2UgdG9vbHNcblxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBmb3JnZUR1cmF0aW9uOiBudW1iZXIgPSAyOyAvLyBzZWNvbmRzXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNPcmUsIHRydWUpO1xuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNOZXdUb29scywgdHJ1ZSk7XG5cdH1cblxuXHRwdWJsaWMgcmVzZXQoKSB7XG5cdFx0dGhpcy5mb3JnZWQgPSBmYWxzZTtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdH1cblxuXHRwdWJsaWMgaXNEb25lKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmZvcmdlZDtcblx0fVxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuIHtcblx0XHQvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3QgZm9yZ2Vcblx0XHRsZXQgZm9yZ2VzOiBGb3JnZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQuZm9yZ2VDb21wcztcblx0XHRsZXQgY2xvc2VzdDogRm9yZ2VDb21wb25lbnQgPSBudWxsO1xuXHRcdGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcblxuXHRcdGZvciAobGV0IGZvcmdlIG9mIGZvcmdlcykge1xuXHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuXHRcdFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XG5cdFx0XHRcdGNsb3Nlc3QgPSBmb3JnZTtcblx0XHRcdFx0Y2xvc2VzdERpc3QgPSBmb3JnZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cblx0XHRcdFx0bGV0IGRpc3Q6IG51bWJlciA9IGZvcmdlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHRcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xuXHRcdFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG5cdFx0XHRcdFx0Y2xvc2VzdCA9IGZvcmdlO1xuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0dGhpcy50YXJnZXQgPSBjbG9zZXN0O1xuXG5cdFx0cmV0dXJuIGNsb3Nlc3QgIT0gbnVsbDtcblx0fVxuXG5cdHB1YmxpYyBwZXJmb3JtKGxhYm91cmVyOiBMYWJvdXJlcik6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKVxuXHRcdFx0dGhpcy5zdGFydFRpbWUgPSBUaW1lVXRpbC5nZXRUaW1lKCk7XG5cblx0XHRpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLmZvcmdlRHVyYXRpb24pIHtcblx0XHRcdC8vIGZpbmlzaGVkIGZvcmdpbmcgYSB0b29sXG5cdFx0XHRsZXQgYmFja3BhY2s6IEJhY2tQYWNrQ29tcG9uZW50ID0gbGFib3VyZXIuYmFja3BhY2s7XG5cdFx0XHRiYWNrcGFjay5udW1PcmUgPSAwO1xuXHRcdFx0dGhpcy5mb3JnZWQgPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSJdfQ==
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZkZpcmV3b29kQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsdURBQXNEO0FBR3RELDhDQUE2QztBQUk3Qzs7Ozs7O0dBTUc7QUFDSDtJQUEyQyx5Q0FBVTtJQUVwRDtRQUFBLFlBQ0MsaUJBQU8sU0FJUDtRQU5PLHdCQUFrQixHQUFZLEtBQUssQ0FBQztRQUczQyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsd0RBQXdEO1FBQzlHLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7UUFDM0UsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLHdCQUF3Qjs7SUFDN0UsQ0FBQztJQUVNLHFDQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxzQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQztJQUVNLCtDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUMsQ0FBQyx1RUFBdUU7SUFDckYsQ0FBQztJQUNNLDJEQUEyQixHQUFsQyxVQUFtQyxLQUFrQjtRQUNwRCw0REFBNEQ7UUFDNUQsSUFBSSxXQUFXLEdBQTBCLHlCQUFXLENBQUMsZUFBZSxDQUFDO1FBQ3JFLElBQUksT0FBTyxHQUF3QixJQUFJLENBQUM7UUFDeEMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLEtBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQTNCLElBQUksTUFBTSxvQkFBQTtZQUNkLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDcEIsa0NBQWtDO2dCQUNsQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUNqQixXQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTixvQ0FBb0M7Z0JBQ3BDLElBQUksSUFBSSxHQUFXLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hELElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtvQkFDdkIsZ0NBQWdDO29CQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUNqQixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjthQUNEO1NBQ0Q7UUFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1FBRWQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFFdEIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSx1Q0FBTyxHQUFkLFVBQWUsS0FBWTtRQUMxQixJQUFJLFFBQVEsR0FBRyxLQUFpQixDQUFDO1FBQ2pDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDakMsUUFBUSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsUUFBUSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFFekIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YsNEJBQUM7QUFBRCxDQTFEQSxBQTBEQyxDQTFEMEMsdUJBQVUsR0EwRHBEO0FBMURZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvSUdvYXBcIjtcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIjtcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDowOToxNyBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTEwLTI4IDExOjMyOjQ5XG4gKi9cbmV4cG9ydCBjbGFzcyBEcm9wT2ZmRmlyZXdvb2RBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcblx0cHJpdmF0ZSBkcm9wcGVkT2ZmRmlyZXdvb2Q6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc0ZpcmV3b29kLCB0cnVlKTsgLy8gY2FuJ3QgZHJvcCBvZmYgZmlyZXdvb2QgaWYgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIHNvbWVcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuSGFzRmlyZXdvb2QsIGZhbHNlKTsgLy8gd2Ugbm93IGhhdmUgbm8gZmlyZXdvb2Rcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuQ29sbGVjdEZpcmV3b29kLCB0cnVlKTsgLy8gd2UgY29sbGVjdGVkIGZpcmV3b29kXG5cdH1cblxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG5cdFx0dGhpcy5kcm9wcGVkT2ZmRmlyZXdvb2QgPSBmYWxzZTtcblx0fVxuXG5cdHB1YmxpYyBpc0RvbmUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZHJvcHBlZE9mZkZpcmV3b29kO1xuXHR9XG5cblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpIHtcblx0XHRyZXR1cm4gdHJ1ZTsgLy8geWVzIHdlIG5lZWQgdG8gYmUgbmVhciBhIHN1cHBseSBwaWxlIHNvIHdlIGNhbiBkcm9wIG9mZiB0aGUgZmlyZXdvb2Rcblx0fVxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xuXHRcdC8vIFRPRE86ZmluZCB0aGUgbmVhcmVzdCBzdXBwbHkgcGlsZSB0aGF0IGhhcyBzcGFyZSBmaXJld29vZFxuXHRcdGxldCBzdXBwbHlQaWxlczogU3VwcGx5UGlsZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQuc3VwcGx5UGlsZUNvbXBzO1xuXHRcdGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbDtcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cblx0XHRmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcblx0XHRcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcblx0XHRcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuXHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRjbG9zZXN0RGlzdCA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cblx0XHRcdFx0bGV0IGRpc3Q6IG51bWJlciA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcblx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdFx0XHRcdGNsb3Nlc3QgPSBzdXBwbHk7XG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChjbG9zZXN0ID09IG51bGwpXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XG5cblx0XHRyZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuXHR9XG5cblx0cHVibGljIHBlcmZvcm0oaUdvYXA6IElHb2FwKTogYm9vbGVhbiB7XG5cdFx0bGV0IGxhYm91cmVyID0gaUdvYXAgYXMgTGFib3VyZXI7XG5cdFx0bGV0IGJhY2twYWNrID0gbGFib3VyZXIuYmFja3BhY2s7XG5cdFx0YmFja3BhY2subnVtRmlyZXdvb2QgKz0gYmFja3BhY2subnVtRmlyZXdvb2Q7XG5cdFx0dGhpcy5kcm9wcGVkT2ZmRmlyZXdvb2QgPSB0cnVlO1xuXHRcdGJhY2twYWNrLm51bUZpcmV3b29kID0gMDtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59Il19
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZk9yZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFELHVEQUFzRDtBQUd0RCw4Q0FBNkM7QUFJN0M7Ozs7OztHQU1HO0FBQ0g7SUFBc0Msb0NBQVU7SUFHL0M7UUFBQSxZQUNDLGlCQUFPLFNBSVA7UUFQTyxtQkFBYSxHQUFHLEtBQUssQ0FBQztRQUk3QixLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsbURBQW1EO1FBQ3BHLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7UUFDakUsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjs7SUFDbkUsQ0FBQztJQUVNLGdDQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRU0saUNBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBQ00sMENBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQyxDQUFDLGtFQUFrRTtJQUNoRixDQUFDO0lBQ00sc0RBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELHVEQUF1RDtRQUN2RCxJQUFJLFdBQVcsR0FBMEIseUJBQVcsQ0FBQyxlQUFlLENBQUM7UUFDckUsSUFBSSxPQUFPLEdBQXdCLElBQUksQ0FBQztRQUN4QyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUM7UUFFNUIsS0FBbUIsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUU7WUFBM0IsSUFBSSxNQUFNLG9CQUFBO1lBQ2QsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNwQixrQ0FBa0M7Z0JBQ2xDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ2pCLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNDO2lCQUFNO2dCQUNOLG9DQUFvQztnQkFDcEMsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO29CQUN2QixnQ0FBZ0M7b0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQ2pCLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0Q7U0FDRDtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLGtDQUFPLEdBQWQsVUFBZSxRQUFrQjtRQUNoQyxJQUFJLFFBQVEsR0FBc0IsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLHFDQUFxQztRQUVyQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRix1QkFBQztBQUFELENBMURBLEFBMERDLENBMURxQyx1QkFBVSxHQTBEL0M7QUExRFksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgQmFja1BhY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vQmFja1BhY2tDb21wb25lbnRcIjtcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIjtcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDoxMToyNiBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTEwLTI4IDExOjM0OjUxXG4gKi9cbmV4cG9ydCBjbGFzcyBEcm9wT2ZmT3JlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG5cdHByaXZhdGUgZHJvcHBlZE9mZk9yZSA9IGZhbHNlO1xuXHRwdWJsaWMgdGFyZ2V0OiBTdXBwbHlQaWxlQ29tcG9uZW50OyAvLyB3aGVyZSB3ZSBkcm9wIG9mZiB0aGUgb3JlXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNPcmUsIHRydWUpOyAvLyBjYW4ndCBkcm9wIG9mZiBvcmUgaWYgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIHNvbWVcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuSGFzT3JlLCBmYWxzZSk7IC8vIHdlIG5vdyBoYXZlIG5vIG9yZVxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5Db2xsZWN0T3JlLCB0cnVlKTsgLy8gd2UgY29sbGVjdGVkIG9yZVxuXHR9XG5cblx0cHVibGljIHJlc2V0KCkge1xuXHRcdHRoaXMuZHJvcHBlZE9mZk9yZSA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5kcm9wcGVkT2ZmT3JlO1xuXHR9XG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG5cdFx0cmV0dXJuIHRydWU7IC8vIHllcyB3ZSBuZWVkIHRvIGJlIG5lYXIgYSBzdXBwbHkgcGlsZSBzbyB3ZSBjYW4gZHJvcCBvZmYgdGhlIG9yZVxuXHR9XG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IFZHYW1lT2JqZWN0KTogYm9vbGVhbiB7XG5cdFx0Ly9UT0RPOiBmaW5kIHRoZSBuZWFyZXN0IHN1cHBseSBwaWxlIHRoYXQgaGFzIHNwYXJlIG9yZVxuXHRcdGxldCBzdXBwbHlQaWxlczogU3VwcGx5UGlsZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQuc3VwcGx5UGlsZUNvbXBzO1xuXHRcdGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbDtcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cblx0XHRmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcblx0XHRcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcblx0XHRcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuXHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRjbG9zZXN0RGlzdCA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cblx0XHRcdFx0bGV0IGRpc3Q6IG51bWJlciA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcblx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdFx0XHRcdGNsb3Nlc3QgPSBzdXBwbHk7XG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChjbG9zZXN0ID09IG51bGwpXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XG5cblx0XHRyZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuXHR9XG5cblx0cHVibGljIHBlcmZvcm0obGFib3VyZXI6IExhYm91cmVyKTogYm9vbGVhbiB7XG5cdFx0bGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrO1xuXHRcdHRoaXMudGFyZ2V0Lm51bU9yZSArPSBiYWNrcGFjay5udW1PcmU7XG5cdFx0dGhpcy5kcm9wcGVkT2ZmT3JlID0gdHJ1ZTtcblx0XHRiYWNrcGFjay5udW1PcmUgPSAwO1xuXHRcdC8vVE9ETyBwbGF5IGVmZmVjdCwgY2hhbmdlIGFjdG9yIGljb25cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59Il19
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZlRvb2xzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsdURBQXNEO0FBRXRELDhDQUE2QztBQUk3Qzs7Ozs7O0dBTUc7QUFDSDtJQUF3QyxzQ0FBVTtJQUdqRDtRQUFBLFlBQ0MsaUJBQU8sU0FJUDtRQVBPLHFCQUFlLEdBQVksS0FBSyxDQUFDO1FBSXhDLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxxREFBcUQ7UUFDM0csS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtRQUN4RSxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMscUJBQXFCOztJQUN2RSxDQUFDO0lBRU0sa0NBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFTSxtQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzdCLENBQUM7SUFFTSw0Q0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLENBQUMsb0VBQW9FO0lBQ2xGLENBQUM7SUFFTSx3REFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQseURBQXlEO1FBQ3pELElBQUksV0FBVyxHQUEwQix5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQUNyRSxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFDO1FBQ3hDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDZCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDakIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ04sb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3ZCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDakIsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDbkI7YUFDRDtTQUNEO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNsQixPQUFPLEtBQUssQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRXRCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sb0NBQU8sR0FBZCxVQUFlLFFBQWtCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixxQ0FBcUM7UUFFckMsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQTFEQSxBQTBEQyxDQTFEdUMsdUJBQVUsR0EwRGpEO0FBMURZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIjtcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDoxMTozOSBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTEwLTI4IDExOjM1OjI0XG4gKi9cbmV4cG9ydCBjbGFzcyBEcm9wT2ZmVG9vbHNBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcblx0cHJpdmF0ZSBkcm9wcGVkT2ZmVG9vbHM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIHRhcmdldDogU3VwcGx5UGlsZUNvbXBvbmVudDsgLy8gd2hlcmUgd2UgZHJvcCBvZmYgdGhlICB0b29sc1xuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzTmV3VG9vbHMsIHRydWUpOyAvLyBjYW4ndCBkcm9wIG9mZiB0b29scyBpZiB3ZSBkb24ndCBhbHJlYWR5IGhhdmUgc29tZVxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNOZXdUb29scywgZmFsc2UpOyAvLyB3ZSBub3cgaGF2ZSBubyB0b29sc1xuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5Db2xsZWN0VG9vbHMsIHRydWUpOyAvLyB3ZSBjb2xsZWN0ZWQgdG9vbHNcblx0fVxuXG5cdHB1YmxpYyByZXNldCgpOiB2b2lkIHtcblx0XHR0aGlzLmRyb3BwZWRPZmZUb29scyA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5kcm9wcGVkT2ZmVG9vbHM7XG5cdH1cblxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xuXHRcdHJldHVybiB0cnVlOyAvLyB5ZXMgd2UgbmVlZCB0byBiZSBuZWFyIGEgc3VwcGx5IHBpbGUgc28gd2UgY2FuIGRyb3Agb2ZmIHRoZSB0b29sc1xuXHR9XG5cblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuIHtcblx0XHQvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3Qgc3VwcGx5IHBpbGUgdGhhdCBoYXMgc3BhcmUgdG9vbHNcblx0XHRsZXQgc3VwcGx5UGlsZXM6IFN1cHBseVBpbGVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnN1cHBseVBpbGVDb21wcztcblx0XHRsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGw7XG5cdFx0bGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwO1xuXG5cdFx0Zm9yIChsZXQgc3VwcGx5IG9mIHN1cHBseVBpbGVzKSB7XG5cdFx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKSB7XG5cdFx0XHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcblx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcblx0XHRcdFx0Y2xvc2VzdERpc3QgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG5cdFx0XHRcdGxldCBkaXN0OiBudW1iZXIgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuXHRcdFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG5cdFx0XHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcblx0XHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0dGhpcy50YXJnZXQgPSBjbG9zZXN0O1xuXG5cdFx0cmV0dXJuIGNsb3Nlc3QgIT0gbnVsbDtcblx0fVxuXG5cdHB1YmxpYyBwZXJmb3JtKGxhYm91cmVyOiBMYWJvdXJlcik6IGJvb2xlYW4ge1xuXHRcdHRoaXMudGFyZ2V0Lm51bVRvb2xzICs9IDI7XG5cdFx0dGhpcy5kcm9wcGVkT2ZmVG9vbHMgPSB0cnVlO1xuXHRcdC8vVE9ETyBwbGF5IGVmZmVjdCwgY2hhbmdlIGFjdG9yIGljb25cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59Il19
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvUGlja1VwT3JlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsdURBQXNEO0FBR3RELDhDQUE2QztBQUk3Qzs7Ozs7O0dBTUc7QUFDSDtJQUFxQyxtQ0FBVTtJQUc5QztRQUFBLFlBQ0MsaUJBQU8sU0FHUDtRQU5PLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFJL0IsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLHlDQUF5QztRQUMzRixLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsb0JBQW9COztJQUNoRSxDQUFDO0lBRU0sK0JBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFFTSx5Q0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLENBQUMsaUVBQWlFO0lBQy9FLENBQUM7SUFFTSxxREFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQsa0RBQWtEO1FBQ2xELElBQUksV0FBVyxHQUEwQix5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQUNyRSxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFDO1FBQ3hDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDZCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUUsd0JBQXdCO2dCQUNqRCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ3BCLGtDQUFrQztvQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDakIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzNDO3FCQUFNO29CQUNOLG9DQUFvQztvQkFDcEMsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEQsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO3dCQUN2QixnQ0FBZ0M7d0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUM7d0JBQ2pCLFdBQVcsR0FBRyxJQUFJLENBQUM7cUJBQ25CO2lCQUNEO2FBQ0Q7U0FDRDtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLGlDQUFPLEdBQWQsVUFBZSxRQUFrQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIscUNBQXFDO1lBQ3JDLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3BELFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1lBRXJCLE9BQU8sSUFBSSxDQUFDO1NBQ1o7YUFBTTtZQUNOLDhGQUE4RjtZQUM5RixPQUFPLEtBQUssQ0FBQztTQUNiO0lBQ0YsQ0FBQztJQUdGLHNCQUFDO0FBQUQsQ0FwRUEsQUFvRUMsQ0FwRW9DLHVCQUFVLEdBb0U5QztBQXBFWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XG5pbXBvcnQgeyBTdXBwbHlQaWxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL1N1cHBseVBpbGVDb21wb25lbnRcIjtcblxuLypcbiAqIEBEZXNjcmlwdGlvbjogXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MTQ6NTUgXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMC0yOCAxMTozNzo0MVxuICovXG5leHBvcnQgY2xhc3MgUGlja1VwT3JlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG5cdHByaXZhdGUgaGFzT3JlOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyB0YXJnZXQ6IFN1cHBseVBpbGVDb21wb25lbnQ7IC8vIHdoZXJlIHdlIGdldCB0aGUgb3JlIGZyb21cblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc09yZSwgZmFsc2UpOyAvLyBkb24ndCBnZXQgYSBvcmUgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNPcmUsIHRydWUpOyAvLyB3ZSBub3cgaGF2ZSBhIG9yZVxuXHR9XG5cblx0cHVibGljIHJlc2V0KCk6IHZvaWQge1xuXHRcdHRoaXMuaGFzT3JlID0gZmFsc2U7XG5cdH1cblxuXHRwdWJsaWMgaXNEb25lKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhhc09yZTtcblx0fVxuXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7IC8vIHllcyB3ZSBuZWVkIHRvIGJlIG5lYXIgYSBzdXBwbHkgcGlsZSBzbyB3ZSBjYW4gcGljayB1cCB0aGUgb3JlXG5cdH1cblxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xuXHRcdC8vZmluZCB0aGUgbmVhcmVzdCBzdXBwbHkgcGlsZSB0aGF0IGhhcyBzcGFyZSBvcmVzXG5cdFx0bGV0IHN1cHBseVBpbGVzOiBTdXBwbHlQaWxlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC5zdXBwbHlQaWxlQ29tcHM7XG5cdFx0bGV0IGNsb3Nlc3Q6IFN1cHBseVBpbGVDb21wb25lbnQgPSBudWxsO1xuXHRcdGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcblxuXHRcdGZvciAobGV0IHN1cHBseSBvZiBzdXBwbHlQaWxlcykge1xuXHRcdFx0aWYgKHN1cHBseS5udW1PcmUgPj0gMykgeyAvLyB3ZSBuZWVkIHRvIHRha2UgMyBvcmVcblx0XHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcblx0XHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cblx0XHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHRcdFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcblx0XHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbClcblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuXHRcdHJldHVybiBjbG9zZXN0ICE9IG51bGw7XG5cdH1cblxuXHRwdWJsaWMgcGVyZm9ybShsYWJvdXJlcjogTGFib3VyZXIpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy50YXJnZXQubnVtT3JlID49IDMpIHtcblx0XHRcdHRoaXMudGFyZ2V0Lm51bU9yZSAtPSAzO1xuXHRcdFx0dGhpcy5oYXNPcmUgPSB0cnVlO1xuXHRcdFx0Ly9UT0RPIHBsYXkgZWZmZWN0LCBjaGFuZ2UgYWN0b3IgaWNvblxuXHRcdFx0bGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrO1xuXHRcdFx0YmFja3BhY2subnVtT3JlICs9IDM7XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB3ZSBnb3QgdGhlcmUgYnV0IHRoZXJlIHdhcyBubyBvcmUgYXZhaWxhYmxlISBTb21lb25lIGdvdCB0aGVyZSBmaXJzdC4gQ2Fubm90IHBlcmZvcm0gYWN0aW9uXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblxufSJdfQ==
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvTWluZU9yZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQStDO0FBQy9DLDJEQUEwRDtBQUMxRCx1REFBc0Q7QUFHdEQsOENBQTZDO0FBSzdDOzs7Ozs7R0FNRztBQUNIO0lBQW1DLGlDQUFVO0lBTTVDO1FBQUEsWUFDQyxpQkFBTyxTQUlQO1FBVk8sV0FBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVztRQUk5QyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1FBQzlFLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQ0FBb0M7UUFDdEYsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDM0MsQ0FBQztJQUVNLDZCQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRU0sdUNBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQyxDQUFDLGdDQUFnQztJQUM5QyxDQUFDO0lBRU0sbURBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELDhDQUE4QztRQUM5QyxJQUFJLEtBQUssR0FBd0IseUJBQVcsQ0FBQyxTQUFTLENBQUM7UUFDdkQsSUFBSSxPQUFPLEdBQXNCLElBQUksQ0FBQztRQUN0QyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUM7UUFFNUIsS0FBaUIsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssRUFBRTtZQUFuQixJQUFJLElBQUksY0FBQTtZQUNaLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDcEIsa0NBQWtDO2dCQUNsQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNmLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNOLG9DQUFvQztnQkFDcEMsSUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO29CQUN2QixnQ0FBZ0M7b0JBQ2hDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2YsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDbkI7YUFDRDtTQUNEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFFdEIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSwrQkFBTyxHQUFkLFVBQWUsUUFBa0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXJDLElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDOUQsa0JBQWtCO1lBQ2xCLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsUUFBUSxDQUFDO1lBQUEsQ0FBQztZQUNyRCxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLElBQUksR0FBa0IsUUFBUSxDQUFDLElBQUksQ0FBQztZQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQ3JCLGlDQUFpQztnQkFDakMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRixvQkFBQztBQUFELENBdEVBLEFBc0VDLENBdEVrQyx1QkFBVSxHQXNFNUM7QUF0RVksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL1RpbWVVdGlsXCI7XG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIjtcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IElyb25Sb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0lyb25Sb2NrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIjtcbmltcG9ydCB7IFRvb2xDb21wb25lbnQgfSBmcm9tIFwiLi4vVG9vbENvbXBvbmVudFwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDoxMzoyMyBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTEwLTI4IDExOjM2OjM2XG4gKi9cbmV4cG9ydCBjbGFzcyBNaW5lT3JlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG5cdHByaXZhdGUgbWluZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBtaW5pbmdEdXJhdGlvbjogbnVtYmVyID0gMjsgLy8gc2Vjb25kcztcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzVG9vbCwgdHJ1ZSk7IC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzT3JlLCBmYWxzZSk7IC8vIGlmIHdlIGhhdmUgb3JlIHdlIGRvbid0IHdhbnQgbW9yZVxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNPcmUsIHRydWUpO1xuXHR9XG5cblx0cHVibGljIHJlc2V0KCk6IHZvaWQge1xuXHRcdHRoaXMubWluZWQgPSBmYWxzZTtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdH1cblxuXHRwdWJsaWMgaXNEb25lKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm1pbmVkO1xuXHR9XG5cblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTsgLy8geWVzIHdlIG5lZWQgdG8gYmUgbmVhciBhIHJvY2tcblx0fVxuXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IFZHYW1lT2JqZWN0KTogYm9vbGVhbiB7XG5cdFx0Ly9UT0RPOiBmaW5kIHRoZSBuZWFyZXN0IHJvY2sgdGhhdCB3ZSBjYW4gbWluZVxuXHRcdGxldCByb2NrczogSXJvblJvY2tDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnJvY2tDb21wcztcblx0XHRsZXQgY2xvc2VzdDogSXJvblJvY2tDb21wb25lbnQgPSBudWxsO1xuXHRcdGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcblxuXHRcdGZvciAobGV0IHJvY2sgb2Ygcm9ja3MpIHtcblx0XHRcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcblx0XHRcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuXHRcdFx0XHRjbG9zZXN0ID0gcm9jaztcblx0XHRcdFx0Y2xvc2VzdERpc3QgPSByb2NrLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGlzIHRoaXMgb25lIGNsb3NlciB0aGFuIHRoZSBsYXN0P1xuXHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gcm9jay5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcblx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdFx0XHRcdGNsb3Nlc3QgPSByb2NrO1xuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XG5cblx0XHRyZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuXHR9XG5cblx0cHVibGljIHBlcmZvcm0obGFib3VyZXI6IExhYm91cmVyKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuc3RhcnRUaW1lID09IDApXG5cdFx0XHR0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKTtcblxuXHRcdGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMubWluaW5nRHVyYXRpb24pIHtcblx0XHRcdC8vIGZpbmlzaGVkIG1pbmluZ1xuXHRcdFx0bGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrOztcblx0XHRcdGJhY2twYWNrLm51bU9yZSArPSAyO1xuXHRcdFx0dGhpcy5taW5lZCA9IHRydWU7XG5cdFx0XHRsZXQgdG9vbDogVG9vbENvbXBvbmVudCA9IGxhYm91cmVyLnRvb2w7XG5cdFx0XHR0b29sLnVzZSgwLjUpO1xuXHRcdFx0aWYgKHRvb2wuZGVzdHJveWVkKCkpIHtcblx0XHRcdFx0Ly9UT0RPOuWIoOmZpCBEZXN0cm95KGJhY2twYWNrLnRvb2wpO1xuXHRcdFx0XHRsYWJvdXJlci5kZXN0cm95VG9vbCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSJdfQ==
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvQ2hvcEZpcmV3b29kQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsMkRBQTBEO0FBQzFELHVEQUFzRDtBQUt0RCw4Q0FBNkM7QUFHN0M7Ozs7OztHQU1HO0FBQ0g7SUFBd0Msc0NBQVU7SUFLakQ7UUFBQSxZQUNDLGlCQUFPLFNBSVA7UUFUTyxhQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdkIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFHL0IsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtRQUM5RSxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMseUNBQXlDO1FBQ2hHLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQ2hELENBQUM7SUFDTSxrQ0FBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNNLG1DQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVNLDRDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU0sd0RBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELElBQUksUUFBUSxHQUFhLEtBQWlCLENBQUM7UUFDM0MsK0RBQStEO1FBQy9ELElBQUksTUFBTSxHQUE2Qix5QkFBVyxDQUFDLGtCQUFrQixDQUFDO1FBQ3RFLElBQUksT0FBTyxHQUEyQixJQUFJLENBQUM7UUFDM0MsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLEtBQWtCLFVBQU0sRUFBTixpQkFBTSxFQUFOLG9CQUFNLEVBQU4sSUFBTSxFQUFFO1lBQXJCLElBQUksS0FBSyxlQUFBO1lBQ2IsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNwQixPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNoQixXQUFXLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQztpQkFBTTtnQkFDTixvQ0FBb0M7Z0JBQ3BDLElBQUksSUFBSSxHQUFXLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9DLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtvQkFDdkIsZ0NBQWdDO29CQUNoQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjthQUNEO1NBQ0Q7UUFFRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1FBRWQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFFdEIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxvQ0FBTyxHQUFkLFVBQWUsS0FBWTtRQUMxQixJQUFJLFFBQVEsR0FBRyxLQUFpQixDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVyQyxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVELG9CQUFvQjtZQUNwQixJQUFJLFFBQVEsR0FBc0IsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNwRCxRQUFRLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDZixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDckIsa0NBQWtDO2dCQUNsQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdkI7U0FDRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLHlCQUFDO0FBQUQsQ0F4RUEsQUF3RUMsQ0F4RXVDLHVCQUFVLEdBd0VqRDtBQXhFWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL1RpbWVVdGlsXCI7XG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIjtcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0lHb2FwXCI7XG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2hvcHBpbmdCbG9ja0NvbXBvbmVudCB9IGZyb20gXCIuLi9DaG9wcGluZ0Jsb2NrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XG5cbi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjA5OjA5IFxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDQgMTc6MzU6NTdcbiAqL1xuZXhwb3J0IGNsYXNzIENob3BGaXJld29vZEFjdGlvbiBleHRlbmRzIEdvYXBBY3Rpb24ge1xuXHRwcml2YXRlIGNob3BwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcblx0cHVibGljIHdvcmtEdXJhdGlvbjogbnVtYmVyID0gMjtcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc1Rvb2wsIHRydWUpOyAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc0ZpcmV3b29kLCBmYWxzZSk7IC8vIGlmIHdlIGhhdmUgZmlyZXdvb2Qgd2UgZG9uJ3Qgd2FudCBtb3JlXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc0ZpcmV3b29kLCB0cnVlKTtcblx0fVxuXHRwdWJsaWMgcmVzZXQoKSB7XG5cdFx0dGhpcy5jaG9wcGVkID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHR9XG5cdHB1YmxpYyBpc0RvbmUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hvcHBlZDtcblx0fVxuXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xuXHRcdGxldCBsYWJvdXJlcjogTGFib3VyZXIgPSBhZ2VudCBhcyBMYWJvdXJlcjtcblx0XHQvLyBmaW5kIHRoZSBuZWFyZXN0IGNob3BwaW5nIGJsb2NrIHRoYXQgd2UgY2FuIGNob3Agb3VyIHdvb2QgYXRcblx0XHRsZXQgYmxvY2tzOiBDaG9wcGluZ0Jsb2NrQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC5jaG9wcGluZ0Jsb2NrQ29tcHM7XG5cdFx0bGV0IGNsb3Nlc3Q6IENob3BwaW5nQmxvY2tDb21wb25lbnQgPSBudWxsO1xuXHRcdGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcblxuXHRcdGZvciAobGV0IGJsb2NrIG9mIGJsb2Nrcykge1xuXHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuXHRcdFx0XHRjbG9zZXN0ID0gYmxvY2s7XG5cdFx0XHRcdGNsb3Nlc3REaXN0ID0gYmxvY2suZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG5cdFx0XHRcdGxldCBkaXN0OiBudW1iZXIgPSBibG9jay5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcblx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdFx0XHRcdGNsb3Nlc3QgPSBibG9jaztcblx0XHRcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0dGhpcy50YXJnZXQgPSBjbG9zZXN0O1xuXG5cdFx0cmV0dXJuIGNsb3Nlc3QgIT0gbnVsbDtcblx0fVxuXG5cdHB1YmxpYyBwZXJmb3JtKGlHb2FwOiBJR29hcCk6IGJvb2xlYW4ge1xuXHRcdGxldCBsYWJvdXJlciA9IGlHb2FwIGFzIExhYm91cmVyO1xuXHRcdGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKVxuXHRcdFx0dGhpcy5zdGFydFRpbWUgPSBUaW1lVXRpbC5nZXRUaW1lKCk7XG5cblx0XHRpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLndvcmtEdXJhdGlvbikge1xuXHRcdFx0Ly8gZmluaXNoZWQgY2hvcHBpbmdcblx0XHRcdGxldCBiYWNrcGFjazogQmFja1BhY2tDb21wb25lbnQgPSBsYWJvdXJlci5iYWNrcGFjaztcblx0XHRcdGJhY2twYWNrLm51bUZpcmV3b29kICs9IDU7XG5cdFx0XHR0aGlzLmNob3BwZWQgPSB0cnVlO1xuXHRcdFx0bGV0IHRvb2wgPSBsYWJvdXJlci50b29sO1xuXHRcdFx0dG9vbC51c2UoMC4zNCk7XG5cdFx0XHRpZiAodG9vbC5kZXN0cm95ZWQoKSkge1xuXHRcdFx0XHQvLyBUT0RPOuWIoOmZpCBEZXN0cm95KGJhY2twYWNrLnRvb2wpO1xuXHRcdFx0XHRsYWJvdXJlci5kZXN0cm95VG9vbCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSJdfQ==
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvUGlja1VwVG9vbEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFELHVEQUFzRDtBQUV0RCw4Q0FBNkM7QUFJN0M7Ozs7OztHQU1HO0FBQ0g7SUFBc0Msb0NBQVU7SUFHL0M7UUFBQSxZQUNDLGlCQUFPLFNBR1A7UUFOTyxhQUFPLEdBQVksS0FBSyxDQUFDO1FBSWhDLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQywwQ0FBMEM7UUFDN0YsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjs7SUFDbEUsQ0FBQztJQUVNLGdDQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0saUNBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRU0sMENBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTSxzREFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQseURBQXlEO1FBQ3pELElBQUksV0FBVyxHQUEwQix5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQUNyRSxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFDO1FBQ3hDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDZCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ3BCLGtDQUFrQztvQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDakIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzNDO3FCQUFNO29CQUNOLG9DQUFvQztvQkFDcEMsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEQsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO3dCQUN2QixnQ0FBZ0M7d0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUM7d0JBQ2pCLFdBQVcsR0FBRyxJQUFJLENBQUM7cUJBQ25CO2lCQUNEO2FBQ0Q7U0FDRDtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLGtDQUFPLEdBQWQsVUFBZSxRQUFrQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsMENBQTBDO1lBQzFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQztTQUNaO2FBQU07WUFDTiwrRkFBK0Y7WUFDL0YsT0FBTyxLQUFLLENBQUM7U0FDYjtJQUNGLENBQUM7SUFDRix1QkFBQztBQUFELENBaEVBLEFBZ0VDLENBaEVxQyx1QkFBVSxHQWdFL0M7QUFoRVksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiO1xuaW1wb3J0IHsgU3VwcGx5UGlsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9TdXBwbHlQaWxlQ29tcG9uZW50XCI7XG5cbi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjE1OjM4IFxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDQgMTc6NDc6MjdcbiAqL1xuZXhwb3J0IGNsYXNzIFBpY2tVcFRvb2xBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcblx0cHJpdmF0ZSBoYXNUb29sOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyB0YXJnZXQ6IFN1cHBseVBpbGVDb21wb25lbnQ7IC8vIHdoZXJlIHdlIGdldCB0aGUgdG9vbCBmcm9tXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNUb29sLCBmYWxzZSk7IC8vIGRvbid0IGdldCBhIHRvb2wgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNUb29sLCB0cnVlKTsgLy8gd2Ugbm93IGhhdmUgYSB0b29sXG5cdH1cblxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG5cdFx0dGhpcy5oYXNUb29sID0gZmFsc2U7XG5cdH1cblxuXHRwdWJsaWMgaXNEb25lKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhhc1Rvb2w7XG5cdH1cblxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuIHtcblx0XHQvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3Qgc3VwcGx5IHBpbGUgdGhhdCBoYXMgc3BhcmUgdG9vbHNcblx0XHRsZXQgc3VwcGx5UGlsZXM6IFN1cHBseVBpbGVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnN1cHBseVBpbGVDb21wcztcblx0XHRsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGw7XG5cdFx0bGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwO1xuXG5cdFx0Zm9yIChsZXQgc3VwcGx5IG9mIHN1cHBseVBpbGVzKSB7XG5cdFx0XHRpZiAoc3VwcGx5Lm51bVRvb2xzID4gMCkge1xuXHRcdFx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuXHRcdFx0XHRcdGNsb3Nlc3QgPSBzdXBwbHk7XG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIGlzIHRoaXMgb25lIGNsb3NlciB0aGFuIHRoZSBsYXN0P1xuXHRcdFx0XHRcdGxldCBkaXN0OiBudW1iZXIgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuXHRcdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcblx0XHRcdFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG5cdFx0XHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0dGhpcy50YXJnZXQgPSBjbG9zZXN0O1xuXG5cdFx0cmV0dXJuIGNsb3Nlc3QgIT0gbnVsbDtcblx0fVxuXG5cdHB1YmxpYyBwZXJmb3JtKGxhYm91cmVyOiBMYWJvdXJlcik6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLnRhcmdldC5udW1Ub29scyA+IDApIHtcblx0XHRcdHRoaXMudGFyZ2V0Lm51bVRvb2xzIC09IDE7XG5cdFx0XHR0aGlzLmhhc1Rvb2wgPSB0cnVlO1xuXHRcdFx0Ly8gY3JlYXRlIHRoZSB0b29sIGFuZCBhZGQgaXQgdG8gdGhlIGFnZW50XG5cdFx0XHRsYWJvdXJlci5waWNrVXBUb29sKCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gd2UgZ290IHRoZXJlIGJ1dCB0aGVyZSB3YXMgbm8gdG9vbCBhdmFpbGFibGUhIFNvbWVvbmUgZ290IHRoZXJlIGZpcnN0LiBDYW5ub3QgcGVyZm9ybSBhY3Rpb25cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy9NaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFELGdFQUErRDtBQUMvRCwwREFBeUQ7QUFDekQsZ0VBQStEO0FBQy9ELHVDQUFzQztBQUV0Qzs7Ozs7O0dBTUc7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUEyQix5QkFBUTtJQUFuQzs7SUFrQkEsQ0FBQztJQWpCQSwyQ0FBMkM7SUFDakMsb0NBQW9CLEdBQTlCO1FBQ0MsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsNkJBQWEsRUFBRSxtQ0FBZ0IsRUFBRSxtQ0FBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUNEOzs7T0FHRztJQUNJLCtCQUFlLEdBQXRCO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4QyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTSw4QkFBYyxHQUFyQjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQWpCVyxLQUFLO1FBRGpCLE9BQU87T0FDSyxLQUFLLENBa0JqQjtJQUFELFlBQUM7Q0FsQkQsQUFrQkMsQ0FsQjBCLG1CQUFRLEdBa0JsQztBQWxCWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHsgRHJvcE9mZk9yZUFjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL0Ryb3BPZmZPcmVBY3Rpb25cIjtcbmltcG9ydCB7IE1pbmVPcmVBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9NaW5lT3JlQWN0aW9uXCI7XG5pbXBvcnQgeyBQaWNrVXBUb29sQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvUGlja1VwVG9vbEFjdGlvblwiO1xuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi9MYWJvdXJlclwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiDnn7/lt6VcbiAqIEBBdXRob3I6IFJhbm5hci5ZYW5nIFxuICogQERhdGU6IDIwMTgtMDktMDUgMjA6NDA6NDQgXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wNCAxODo0MTozN1xuICovXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBNaW5lciBleHRlbmRzIExhYm91cmVyIHtcblx0Ly9wdWJsaWMgbGFib3VyZXJUeXBlID0gTGFib3VyZXJUeXBlLk1pbmVyO1xuXHRwcm90ZWN0ZWQgaW5pdEF2YWxpYWJsZUFjdGlvbnMoKSB7XG5cdFx0dGhpcy50b0luaXRBdmFsaWFibGVBY3Rpb25zKFtNaW5lT3JlQWN0aW9uLCBQaWNrVXBUb29sQWN0aW9uLCBEcm9wT2ZmT3JlQWN0aW9uXSk7XG5cdH1cblx0LyoqXG5cdCAqIE91ciBvbmx5IGdvYWwgd2lsbCBldmVyIGJlIHRvIG1pbmUgb3JlLlxuXHQgKiBUaGUgTWluZU9yZUFjdGlvbiB3aWxsIGJlIGFibGUgdG8gZnVsZmlsbCB0aGlzIGdvYWwuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuXHRcdGxldCBnb2FsID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcblx0XHRnb2FsLnNldChBY3Rpb25TdGF0dXMuQ29sbGVjdE9yZSwgdHJ1ZSk7XG5cdFx0cmV0dXJuIGdvYWw7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlQmFja1BhY2soKSB7XG5cdFx0Y29uc29sZS5sb2coXCLnn7/nn7PvvJpcIiArIHRoaXMuYmFja3BhY2subnVtT3JlKVxuXHR9XG59Il19
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvUGlja1VwTG9nc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFELHVEQUFzRDtBQUt0RDs7Ozs7O0dBTUc7QUFDSDtJQUFzQyxvQ0FBVTtJQUcvQztRQUFBLFlBQ0MsaUJBQU8sU0FHUDtRQU5PLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFJaEMsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLDBDQUEwQztRQUM3RixLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMscUJBQXFCOztJQUNsRSxDQUFDO0lBRU0sZ0NBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxpQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFTSwwQ0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLHNEQUEyQixHQUFsQyxVQUFtQyxLQUFrQjtRQUNwRCx3REFBd0Q7UUFDeEQsSUFBSSxXQUFXLEdBQTBCLEVBQUUsQ0FBQztRQUM1QyxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFDO1FBQ3hDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDZCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ3BCLGtDQUFrQztvQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDakIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzNDO3FCQUFNO29CQUNOLG9DQUFvQztvQkFDcEMsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEQsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO3dCQUN2QixnQ0FBZ0M7d0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUM7d0JBQ2pCLFdBQVcsR0FBRyxJQUFJLENBQUM7cUJBQ25CO2lCQUNEO2FBQ0Q7U0FDRDtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLGtDQUFPLEdBQWQsVUFBZSxRQUFrQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIscUNBQXFDO1lBQ3JDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDakMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFFckIsT0FBTyxJQUFJLENBQUM7U0FDWjthQUFNO1lBQ04sK0ZBQStGO1lBQy9GLE9BQU8sS0FBSyxDQUFDO1NBQ2I7SUFDRixDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQWxFQSxBQWtFQyxDQWxFcUMsdUJBQVUsR0FrRS9DO0FBbEVZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiO1xuaW1wb3J0IHsgU3VwcGx5UGlsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9TdXBwbHlQaWxlQ29tcG9uZW50XCI7XG5cbi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjE0OjEwIFxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTAtMjggMTE6MzY6NDlcbiAqL1xuZXhwb3J0IGNsYXNzIFBpY2tVcExvZ3NBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcblx0cHJpdmF0ZSBoYXNMb2dzOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyB0YXJnZXQ6IFN1cHBseVBpbGVDb21wb25lbnQ7ICAvLyB3aGVyZSB3ZSBnZXQgdGhlIGxvZ3MgZnJvbVxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzTG9ncywgZmFsc2UpOyAvLyBkb24ndCBnZXQgYSBsb2dzIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmVcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuSGFzTG9ncywgdHJ1ZSk7IC8vIHdlIG5vdyBoYXZlIGEgbG9nc1xuXHR9XG5cblx0cHVibGljIHJlc2V0KCkge1xuXHRcdHRoaXMuaGFzTG9ncyA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5oYXNMb2dzO1xuXHR9XG5cblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IFZHYW1lT2JqZWN0KTogYm9vbGVhbiB7XG5cdFx0Ly9UT0RPOiBmaW5kIHRoZSBuZWFyZXN0IHN1cHBseSBwaWxlIHRoYXQgaGFzIHNwYXJlIGxvZ3Ncblx0XHRsZXQgc3VwcGx5UGlsZXM6IFN1cHBseVBpbGVDb21wb25lbnRbXSA9IFtdO1xuXHRcdGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbDtcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cblx0XHRmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcblx0XHRcdGlmIChzdXBwbHkubnVtTG9ncyA+IDApIHtcblx0XHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcblx0XHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cblx0XHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHRcdFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcblx0XHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbClcblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuXHRcdHJldHVybiBjbG9zZXN0ICE9IG51bGw7XG5cdH1cblxuXHRwdWJsaWMgcGVyZm9ybShsYWJvdXJlcjogTGFib3VyZXIpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy50YXJnZXQubnVtTG9ncyA+IDApIHtcblx0XHRcdHRoaXMudGFyZ2V0Lm51bUxvZ3MgLT0gMTtcblx0XHRcdHRoaXMuaGFzTG9ncyA9IHRydWU7XG5cdFx0XHQvL1RPRE8gcGxheSBlZmZlY3QsIGNoYW5nZSBhY3RvciBpY29uXG5cdFx0XHRsZXQgYmFja3BhY2sgPSBsYWJvdXJlci5iYWNrcGFjaztcblx0XHRcdGJhY2twYWNrLm51bUxvZ3MgPSAxO1xuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gd2UgZ290IHRoZXJlIGJ1dCB0aGVyZSB3YXMgbm8gbG9ncyBhdmFpbGFibGUhIFNvbWVvbmUgZ290IHRoZXJlIGZpcnN0LiBDYW5ub3QgcGVyZm9ybSBhY3Rpb25cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy9CbGFja3NtaXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsb0VBQW1FO0FBQ25FLDhEQUE2RDtBQUM3RCw4REFBNkQ7QUFDN0QsdUNBQXNDO0FBQ2hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWdDLDhCQUFRO0lBQXhDOztJQWlCQSxDQUFDO0lBaEJVLHlDQUFvQixHQUE5QjtRQUNDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLGlDQUFlLEVBQUUsdUNBQWtCLEVBQUUsaUNBQWUsQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUNEOzs7T0FHRztJQUNJLG9DQUFlLEdBQXRCO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTSxtQ0FBYyxHQUFyQjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQWhCVyxVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBaUJ0QjtJQUFELGlCQUFDO0NBakJELEFBaUJDLENBakIrQixtQkFBUSxHQWlCdkM7QUFqQlksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIjtcbmltcG9ydCB7IERyb3BPZmZUb29sc0FjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL0Ryb3BPZmZUb29sc0FjdGlvblwiO1xuaW1wb3J0IHsgRm9yZ2VUb29sQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvRm9yZ2VUb29sQWN0aW9uXCI7XG5pbXBvcnQgeyBQaWNrVXBPcmVBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9QaWNrVXBPcmVBY3Rpb25cIjtcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4vTGFib3VyZXJcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIEJsYWNrc21pdGggZXh0ZW5kcyBMYWJvdXJlciB7XG5cdHByb3RlY3RlZCBpbml0QXZhbGlhYmxlQWN0aW9ucygpIHtcblx0XHR0aGlzLnRvSW5pdEF2YWxpYWJsZUFjdGlvbnMoW0ZvcmdlVG9vbEFjdGlvbiwgRHJvcE9mZlRvb2xzQWN0aW9uLCBQaWNrVXBPcmVBY3Rpb25dKTtcblx0fVxuXHQvKipcblx0ICogT3VyIG9ubHkgZ29hbCB3aWxsIGV2ZXIgYmUgdG8gbWFrZSB0b29scy5cblx0ICogVGhlIEZvcmdlVG9vbGRBY3Rpb24gd2lsbCBiZSBhYmxlIHRvIGZ1bGZpbGwgdGhpcyBnb2FsLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUdvYWxTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+IHtcblx0XHRsZXQgZ29hbCA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KCk7XG5cdFx0Z29hbC5zZXQoQWN0aW9uU3RhdHVzLkNvbGxlY3RUb29scywgdHJ1ZSk7XG5cdFx0cmV0dXJuIGdvYWw7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlQmFja1BhY2soKSB7XG5cdFx0Y29uc29sZS5sb2coXCLnn7/nn7PvvJpcIiArIHRoaXMuYmFja3BhY2subnVtT3JlKVxuXHR9XG59Il19
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy92bGFib3VyZXJzL1ZXb29kQ3V0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBd0M7QUFFeEM7Ozs7OztHQU1HO0FBQ0g7SUFBaUMsK0JBQVM7SUFFekM7ZUFDQyxpQkFBTztJQUNSLENBQUM7SUFDRixrQkFBQztBQUFELENBTEEsQUFLQyxDQUxnQyxxQkFBUyxHQUt6QztBQUxZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV29vZEN1dHRlciB9IGZyb20gXCIuLi9Xb29kQ3V0dGVyXCI7XG5pbXBvcnQgeyBWTGFib3VyZXIgfSBmcm9tIFwiLi9WTGFib3VyZXJcIjtcblxuLypcbiAqIEBEZXNjcmlwdGlvbjog5LyQ5pyo5belXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxuICogQERhdGU6IDIwMTgtMTEtMDMgMTI6MTM6NTEgXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wMyAxMjoxNzozOVxuICovXG5leHBvcnQgY2xhc3MgVldvb2RDdXR0ZXIgZXh0ZW5kcyBWTGFib3VyZXIge1xuXHRwcm90ZWN0ZWQgbGFib3VyZXI6IFdvb2RDdXR0ZXI7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG59Il19
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy92bGFib3VyZXJzL1ZNaW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQXdDO0FBRXhDOzs7Ozs7R0FNRztBQUNIO0lBQTRCLDBCQUFTO0lBRXBDO2VBQ0MsaUJBQU87SUFDUixDQUFDO0lBQ0YsYUFBQztBQUFELENBTEEsQUFLQyxDQUwyQixxQkFBUyxHQUtwQztBQUxZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWluZXIgfSBmcm9tIFwiLi4vTWluZXJcIjtcbmltcG9ydCB7IFZMYWJvdXJlciB9IGZyb20gXCIuL1ZMYWJvdXJlclwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiDnn7/lt6VcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXG4gKiBARGF0ZTogMjAxOC0xMS0wMyAxMjoxNDozMiBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTAzIDEyOjE3OjEzXG4gKi9cbmV4cG9ydCBjbGFzcyBWTWluZXIgZXh0ZW5kcyBWTGFib3VyZXIge1xuXHRwcm90ZWN0ZWQgbGFib3VyZXI6IE1pbmVyO1xuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxufSJdfQ==
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
    /**
     * 状态更新
     * @return
     */
    StateMove.prototype.onUpdate = function (delta) {
        var iGoap = this.owner.getOwner();
        // move the game object
        var action = this.owner.peekCurrentActions();
        if (action.requiresInRange() && action.target == null) {
            console.log("Fatal error: Action requires a target but has none. Planning failed. You did not assign the target in your Action.checkProceduralPrecondition()");
            this.owner.changeState(StateEnum_1.StateEnum.StateIdle);
            return;
        }
        // get the agent to move itself
        if (iGoap.moveAgent(action, delta)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZU1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHlDQUF3QztBQUN4Qyx5Q0FBd0M7QUFFeEM7SUFBK0IsNkJBQVM7SUFBeEM7O0lBdUJBLENBQUM7SUFyQkc7OztPQUdHO0lBQ0ksNEJBQVEsR0FBZixVQUFnQixLQUFhO1FBQ3pCLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFekMsdUJBQXVCO1FBRXZCLElBQUksTUFBTSxHQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN6RCxJQUFJLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlKQUFpSixDQUFDLENBQUM7WUFDL0osSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QyxPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDeEQ7SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQXZCQSxBQXVCQyxDQXZCOEIscUJBQVMsR0F1QnZDO0FBdkJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9nb2FwL0dvYXBBY3Rpb25cIjtcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi8uLi9nb2FwL0dvYXBBZ2VudFwiO1xuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vZ29hcC9JR29hcFwiO1xuaW1wb3J0IHsgU3RhdGVCYXNlIH0gZnJvbSBcIi4vU3RhdGVCYXNlXCI7XG5pbXBvcnQgeyBTdGF0ZUVudW0gfSBmcm9tIFwiLi9TdGF0ZUVudW1cIjtcblxuZXhwb3J0IGNsYXNzIFN0YXRlTW92ZSBleHRlbmRzIFN0YXRlQmFzZSB7XG4gICAgcHJvdGVjdGVkIF9vd25lcjogR29hcEFnZW50XG4gICAgLyoqXG4gICAgICog54q25oCB5pu05pawIFxuICAgICAqIEByZXR1cm4gXG4gICAgICovXG4gICAgcHVibGljIG9uVXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGlHb2FwOiBJR29hcCA9IHRoaXMub3duZXIuZ2V0T3duZXIoKTtcblxuICAgICAgICAvLyBtb3ZlIHRoZSBnYW1lIG9iamVjdFxuXG4gICAgICAgIGxldCBhY3Rpb246IEdvYXBBY3Rpb24gPSB0aGlzLm93bmVyLnBlZWtDdXJyZW50QWN0aW9ucygpO1xuICAgICAgICBpZiAoYWN0aW9uLnJlcXVpcmVzSW5SYW5nZSgpICYmIGFjdGlvbi50YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYXRhbCBlcnJvcjogQWN0aW9uIHJlcXVpcmVzIGEgdGFyZ2V0IGJ1dCBoYXMgbm9uZS4gUGxhbm5pbmcgZmFpbGVkLiBZb3UgZGlkIG5vdCBhc3NpZ24gdGhlIHRhcmdldCBpbiB5b3VyIEFjdGlvbi5jaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oKVwiKTtcbiAgICAgICAgICAgIHRoaXMub3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgdGhlIGFnZW50IHRvIG1vdmUgaXRzZWxmXG4gICAgICAgIGlmIChpR29hcC5tb3ZlQWdlbnQoYWN0aW9uLCBkZWx0YSkpIHtcbiAgICAgICAgICAgIHRoaXMub3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlUGVyZm9ybUFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG59Il19
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy92bGFib3VyZXJzL1ZCbGFja3NtaXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBd0M7QUFFeEM7Ozs7OztHQU1HO0FBQ0g7SUFBaUMsK0JBQVM7SUFFekM7ZUFDQyxpQkFBTztJQUNSLENBQUM7SUFDRixrQkFBQztBQUFELENBTEEsQUFLQyxDQUxnQyxxQkFBUyxHQUt6QztBQUxZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmxhY2tzbWl0aCB9IGZyb20gXCIuLi9CbGFja3NtaXRoXCI7XG5pbXBvcnQgeyBWTGFib3VyZXIgfSBmcm9tIFwiLi9WTGFib3VyZXJcIjtcblxuLypcbiAqIEBEZXNjcmlwdGlvbjog6ZOB5YygXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxuICogQERhdGU6IDIwMTgtMTEtMDMgMTI6MTM6NTkgXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wMyAxMjoxNjozMFxuICovXG5leHBvcnQgY2xhc3MgVkJsYWNrc21pdGggZXh0ZW5kcyBWTGFib3VyZXIge1xuXHRwcm90ZWN0ZWQgbGFib3VyZXI6IEJsYWNrc21pdGg7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG59Il19
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
        var iGoap = this.owner.getOwner();
        var planner = this.owner.getPlanner();
        var avaliableActions = this.owner.getAvaliableActions();
        //console.log("avaliableActions: ", avaliableActions);
        // GOAP planning
        // get the world state and the goal we want to plan for
        var worldState = iGoap.getWorldState();
        var goal = iGoap.createGoalState();
        // plan
        var plan = planner.plan(iGoap, avaliableActions, worldState, goal);
        if (plan != null) {
            // we have a plan, hooray!
            this.owner.setCurrentActions(plan);
            iGoap.planFound(goal, plan);
            // move to PerformAction state
            this.owner.changeState(StateEnum_1.StateEnum.StatePerformAction);
        }
        else {
            //console.log("Failed Plan");
            iGoap.planFailed(goal);
            this.owner.changeState(StateEnum_1.StateEnum.StateIdle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZUlkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLHlDQUF3QztBQUN4Qyx5Q0FBd0M7QUFFeEM7SUFBK0IsNkJBQVM7SUFBeEM7O0lBbUNBLENBQUM7SUFqQ1UsMkJBQU8sR0FBZDtJQUVBLENBQUM7SUFDRDs7O09BR0c7SUFDSSw0QkFBUSxHQUFmLFVBQWdCLFNBQWlCO1FBQzdCLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsSUFBSSxPQUFPLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkQsSUFBSSxnQkFBZ0IsR0FBaUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3RFLHNEQUFzRDtRQUN0RCxnQkFBZ0I7UUFFaEIsdURBQXVEO1FBQ3ZELElBQUksVUFBVSxHQUF3QixLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUQsSUFBSSxJQUFJLEdBQXdCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4RCxPQUFPO1FBQ1AsSUFBSSxJQUFJLEdBQWlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDZCwwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUU1Qiw4QkFBOEI7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3hEO2FBQU07WUFDSCw2QkFBNkI7WUFDN0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsQ0FuQzhCLHFCQUFTLEdBbUN2QztBQW5DWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwQWN0aW9uXCI7XG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwQWdlbnRcIjtcbmltcG9ydCB7IEdvYXBQbGFubmVyIH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcFBsYW5uZXJcIjtcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL2dvYXAvSUdvYXBcIjtcbmltcG9ydCB7IFN0YXRlQmFzZSB9IGZyb20gXCIuL1N0YXRlQmFzZVwiO1xuaW1wb3J0IHsgU3RhdGVFbnVtIH0gZnJvbSBcIi4vU3RhdGVFbnVtXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZUlkbGUgZXh0ZW5kcyBTdGF0ZUJhc2Uge1xuICAgIHByb3RlY3RlZCBfb3duZXI6IEdvYXBBZ2VudFxuICAgIHB1YmxpYyBvbkVudGVyKCkge1xuXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOeKtuaAgeabtOaWsCBcbiAgICAgKiBAcmV0dXJuIFxuICAgICAqL1xuICAgIHB1YmxpYyBvblVwZGF0ZSh0aW1lU3RhbXA6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgaUdvYXA6IElHb2FwID0gdGhpcy5vd25lci5nZXRPd25lcigpO1xuICAgICAgICBsZXQgcGxhbm5lcjogR29hcFBsYW5uZXIgPSB0aGlzLm93bmVyLmdldFBsYW5uZXIoKTtcbiAgICAgICAgbGV0IGF2YWxpYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IHRoaXMub3duZXIuZ2V0QXZhbGlhYmxlQWN0aW9ucygpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYXZhbGlhYmxlQWN0aW9uczogXCIsIGF2YWxpYWJsZUFjdGlvbnMpO1xuICAgICAgICAvLyBHT0FQIHBsYW5uaW5nXG5cbiAgICAgICAgLy8gZ2V0IHRoZSB3b3JsZCBzdGF0ZSBhbmQgdGhlIGdvYWwgd2Ugd2FudCB0byBwbGFuIGZvclxuICAgICAgICBsZXQgd29ybGRTdGF0ZTogTWFwPHN0cmluZywgT2JqZWN0PiA9IGlHb2FwLmdldFdvcmxkU3RhdGUoKTtcbiAgICAgICAgbGV0IGdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4gPSBpR29hcC5jcmVhdGVHb2FsU3RhdGUoKTtcblxuICAgICAgICAvLyBwbGFuXG4gICAgICAgIGxldCBwbGFuOiBHb2FwQWN0aW9uW10gPSBwbGFubmVyLnBsYW4oaUdvYXAsIGF2YWxpYWJsZUFjdGlvbnMsIHdvcmxkU3RhdGUsIGdvYWwpO1xuICAgICAgICBpZiAocGxhbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyB3ZSBoYXZlIGEgcGxhbiwgaG9vcmF5IVxuICAgICAgICAgICAgdGhpcy5vd25lci5zZXRDdXJyZW50QWN0aW9ucyhwbGFuKTtcbiAgICAgICAgICAgIGlHb2FwLnBsYW5Gb3VuZChnb2FsLCBwbGFuKTtcblxuICAgICAgICAgICAgLy8gbW92ZSB0byBQZXJmb3JtQWN0aW9uIHN0YXRlXG4gICAgICAgICAgICB0aGlzLm93bmVyLmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZVBlcmZvcm1BY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkZhaWxlZCBQbGFuXCIpO1xuICAgICAgICAgICAgaUdvYXAucGxhbkZhaWxlZChnb2FsKTtcbiAgICAgICAgICAgIHRoaXMub3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
    /**
     * 状态更新
     * @return
     */
    StatePerformAction.prototype.onUpdate = function (timeStamp) {
        // perform the action
        var iGoap = this.owner.getOwner();
        if (!this.owner.hasActionPlan()) {
            // no actions to perform
            console.log("Done actions");
            this.owner.changeState(StateEnum_1.StateEnum.StateIdle);
            iGoap.actionsFinished();
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
                var success = action.perform(iGoap);
                if (!success) {
                    // action failed, we need to plan again
                    this.owner.changeState(StateEnum_1.StateEnum.StateIdle);
                    iGoap.planAborted(action);
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
            iGoap.actionsFinished();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZVBlcmZvcm1BY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHlDQUF3QztBQUN4Qyx5Q0FBd0M7QUFFeEM7SUFBd0Msc0NBQVM7SUFBakQ7O0lBa0RBLENBQUM7SUEvQ0c7OztPQUdHO0lBQ0kscUNBQVEsR0FBZixVQUFnQixTQUFpQjtRQUM3QixxQkFBcUI7UUFDckIsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUM3Qix3QkFBd0I7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLE1BQU0sR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDekQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDakIsK0RBQStEO1lBQy9ELElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUN0QztRQUdELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUM1QiwwQkFBMEI7WUFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUN6QyxJQUFJLE9BQU8sR0FBWSxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRTVFLElBQUksT0FBTyxFQUFFO2dCQUNULHlDQUF5QztnQkFDekMsSUFBSSxPQUFPLEdBQVksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFN0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDVix1Q0FBdUM7b0JBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzVDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzdCO2FBQ0o7aUJBQU07Z0JBQ0gsOEJBQThCO2dCQUM5Qix5QkFBeUI7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0M7U0FDSjthQUFNO1lBQ0gsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FsREEsQUFrREMsQ0FsRHVDLHFCQUFTLEdBa0RoRDtBQWxEWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcEFnZW50XCI7XG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi8uLi9nb2FwL0lHb2FwXCI7XG5pbXBvcnQgeyBTdGF0ZUJhc2UgfSBmcm9tIFwiLi9TdGF0ZUJhc2VcIjtcbmltcG9ydCB7IFN0YXRlRW51bSB9IGZyb20gXCIuL1N0YXRlRW51bVwiO1xuXG5leHBvcnQgY2xhc3MgU3RhdGVQZXJmb3JtQWN0aW9uIGV4dGVuZHMgU3RhdGVCYXNlIHtcbiAgICBwcm90ZWN0ZWQgX293bmVyOiBHb2FwQWdlbnRcblxuICAgIC8qKlxuICAgICAqIOeKtuaAgeabtOaWsCBcbiAgICAgKiBAcmV0dXJuIFxuICAgICAqL1xuICAgIHB1YmxpYyBvblVwZGF0ZSh0aW1lU3RhbXA6IG51bWJlcik6IHZvaWQge1xuICAgICAgICAvLyBwZXJmb3JtIHRoZSBhY3Rpb25cbiAgICAgICAgbGV0IGlHb2FwOiBJR29hcCA9IHRoaXMub3duZXIuZ2V0T3duZXIoKTtcblxuICAgICAgICBpZiAoIXRoaXMub3duZXIuaGFzQWN0aW9uUGxhbigpKSB7XG4gICAgICAgICAgICAvLyBubyBhY3Rpb25zIHRvIHBlcmZvcm1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZSBhY3Rpb25zXCIpO1xuICAgICAgICAgICAgdGhpcy5vd25lci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVJZGxlKTtcbiAgICAgICAgICAgIGlHb2FwLmFjdGlvbnNGaW5pc2hlZCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhY3Rpb246IEdvYXBBY3Rpb24gPSB0aGlzLm93bmVyLnBlZWtDdXJyZW50QWN0aW9ucygpO1xuICAgICAgICBpZiAoYWN0aW9uLmlzRG9uZSgpKSB7XG4gICAgICAgICAgICAvLyB0aGUgYWN0aW9uIGlzIGRvbmUuIFJlbW92ZSBpdCBzbyB3ZSBjYW4gcGVyZm9ybSB0aGUgbmV4dCBvbmVcbiAgICAgICAgICAgIHRoaXMub3duZXIuZGVxdWV1ZUN1cnJlbnRBY3Rpb25zKCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICh0aGlzLm93bmVyLmhhc0FjdGlvblBsYW4oKSkge1xuICAgICAgICAgICAgLy8gcGVyZm9ybSB0aGUgbmV4dCBhY3Rpb25cbiAgICAgICAgICAgIGFjdGlvbiA9IHRoaXMub3duZXIucGVla0N1cnJlbnRBY3Rpb25zKCk7XG4gICAgICAgICAgICBsZXQgaW5SYW5nZTogYm9vbGVhbiA9IGFjdGlvbi5yZXF1aXJlc0luUmFuZ2UoKSA/IGFjdGlvbi5pc0luUmFuZ2UoKSA6IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChpblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgYXJlIGluIHJhbmdlLCBzbyBwZXJmb3JtIHRoZSBhY3Rpb25cbiAgICAgICAgICAgICAgICBsZXQgc3VjY2VzczogYm9vbGVhbiA9IGFjdGlvbi5wZXJmb3JtKGlHb2FwKTtcblxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBhY3Rpb24gZmFpbGVkLCB3ZSBuZWVkIHRvIHBsYW4gYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vd25lci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVJZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgaUdvYXAucGxhbkFib3J0ZWQoYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gbW92ZSB0aGVyZSBmaXJzdFxuICAgICAgICAgICAgICAgIC8vVE9ETzogcHVzaCBtb3ZlVG8gc3RhdGVcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyLmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZU1vdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm8gYWN0aW9ucyBsZWZ0LCBtb3ZlIHRvIFBsYW4gc3RhdGVcbiAgICAgICAgICAgIHRoaXMub3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XG4gICAgICAgICAgICBpR29hcC5hY3Rpb25zRmluaXNoZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQStDO0FBRS9DOzs7Ozs7R0FNRztBQUNIO0lBT0MsbUJBQVksS0FBVTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBTEQsc0JBQVcsNEJBQUs7YUFBaEI7WUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFJRDs7T0FFRztJQUNJLDJCQUFPLEdBQWQsVUFBZSxHQUFlO1FBQWYsb0JBQUEsRUFBQSxVQUFlO0lBQVUsQ0FBQztJQUV6Qzs7OztPQUlHO0lBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsR0FBZTtRQUFmLG9CQUFBLEVBQUEsVUFBZTtJQUFVLENBQUM7SUFFM0M7OztPQUdHO0lBQ0ksNEJBQVEsR0FBZixVQUFnQixTQUFpQixJQUFVLENBQUM7SUFFNUM7Ozs7O09BS0c7SUFDSSwwQkFBTSxHQUFiLFVBQWMsTUFBMEI7UUFBMUIsdUJBQUEsRUFBQSxrQkFBMEI7SUFBVSxDQUFDO0lBQ25EOzs7O09BSUc7SUFDSSwrQkFBVyxHQUFsQjtRQUNDLE9BQU8sMkJBQVksQ0FBQyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUVGLGdCQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtBQTVDWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlTWFuYWdlciB9IGZyb20gXCIuLi9TdGF0ZU1hbmFnZXJcIjtcblxuLypcbiAqIEBEZXNjcmlwdGlvbjog54q25oCB5Z+657G7IFxuICogQEF1dGhvcjogUmFubmFyLllhbmcgXG4gKiBARGF0ZTogMjAxOC0wNi0yOSAxMDoxNzoxMCBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXIuWWFuZ1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0wNi0yOSAxMDoxNzozMlxuICovXG5leHBvcnQgY2xhc3MgU3RhdGVCYXNlIHtcblxuXHRwcm90ZWN0ZWQgX293bmVyOiBhbnk7XG5cblx0cHVibGljIGdldCBvd25lcigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLl9vd25lcjtcblx0fVxuXHRjb25zdHJ1Y3Rvcihvd25lcjogYW55KSB7XG5cdFx0dGhpcy5fb3duZXIgPSBvd25lcjtcblx0fVxuXHQvKipcblx0ICog6L+b5YWl54q25oCBIFxuXHQgKi9cblx0cHVibGljIG9uRW50ZXIob2JqOiBhbnkgPSBudWxsKTogdm9pZCB7IH1cblxuXHQvKipcblx0ICog5YaN5qyh6L+b5YWl54q25oCBIFxuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEByZXR1cm4gXG5cdCAqL1xuXHRwdWJsaWMgb25SZUVudGVyKG9iajogYW55ID0gbnVsbCk6IHZvaWQgeyB9XG5cblx0LyoqXG5cdCAqIOeKtuaAgeabtOaWsCBcblx0ICogQHJldHVybiBcblx0ICovXG5cdHB1YmxpYyBvblVwZGF0ZSh0aW1lU3RhbXA6IG51bWJlcik6IHZvaWQgeyB9XG5cblx0LyoqXG5cdCAqIOemu+W8gOeKtuaAgee7k+adnyBcblx0ICogQHBhcmFtIHN0cmluZ1xuXHQgKiBAcmV0dXJuIFxuXHQgKiBcblx0ICovXG5cdHB1YmxpYyBvbkV4aXQocHJlS2V5OiBzdHJpbmcgPSB1bmRlZmluZWQpOiB2b2lkIHsgfVxuXHQvKipcblx0ICog6L+U5Zue54q25oCBSUQgXG5cdCAqIEByZXR1cm4gXG5cdCAqIFxuXHQgKi9cblx0cHVibGljIGdldFN0YXRlS2V5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFN0YXRlTWFuYWdlci5JbnZhbGlkU3RhdGU7XG5cdH1cblxufVxuIl19
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy92bGFib3VyZXJzL1ZMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUF3QztBQUV4Qzs7Ozs7O0dBTUc7QUFDSDtJQUE2QiwyQkFBUztJQUNyQyw2QkFBNkI7SUFDN0I7ZUFDQyxpQkFBTztJQUNSLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FMQSxBQUtDLENBTDRCLHFCQUFTLEdBS3JDO0FBTFksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vTG9nZ2VyXCI7XG5pbXBvcnQgeyBWTGFib3VyZXIgfSBmcm9tIFwiLi9WTGFib3VyZXJcIjtcblxuLypcbiAqIEBEZXNjcmlwdGlvbjog5qi15aSrXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxuICogQERhdGU6IDIwMTgtMTEtMDMgMTI6MTQ6MDkgXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wMyAxMjoxNzowNFxuICovXG5leHBvcnQgY2xhc3MgVkxvZ2dlciBleHRlbmRzIFZMYWJvdXJlciB7XG5cdC8vcHJvdGVjdGVkIGxhYm91cmVyOiBMb2dnZXI7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG59Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy9Xb29kQ3V0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsb0VBQW1FO0FBQ25FLDBFQUF5RTtBQUN6RSxnRUFBK0Q7QUFDL0QsdUNBQXNDO0FBRXRDOzs7Ozs7R0FNRztBQUNHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWdDLDhCQUFRO0lBQXhDOztJQWlCQSxDQUFDO0lBaEJVLHlDQUFvQixHQUE5QjtRQUNDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLHVDQUFrQixFQUFFLDZDQUFxQixFQUFFLG1DQUFnQixDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksb0NBQWUsR0FBdEI7UUFDQyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLG1DQUFjLEdBQXJCO1FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBaEJXLFVBQVU7UUFEdEIsT0FBTztPQUNLLFVBQVUsQ0FpQnRCO0lBQUQsaUJBQUM7Q0FqQkQsQUFpQkMsQ0FqQitCLG1CQUFRLEdBaUJ2QztBQWpCWSxnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHsgQ2hvcEZpcmV3b29kQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvQ2hvcEZpcmV3b29kQWN0aW9uXCI7XG5pbXBvcnQgeyBEcm9wT2ZmRmlyZXdvb2RBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9Ecm9wT2ZmRmlyZXdvb2RBY3Rpb25cIjtcbmltcG9ydCB7IFBpY2tVcFRvb2xBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9QaWNrVXBUb29sQWN0aW9uXCI7XG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuL0xhYm91cmVyXCI7XG5cbi8qXG4gKiBARGVzY3JpcHRpb246IOS8kOacqOW3pVxuICogQEF1dGhvcjogUmFubmFyLllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNSAyMDo0MDo0NCBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTA0IDE4OjI4OjMwXG4gKi9cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFdvb2RDdXR0ZXIgZXh0ZW5kcyBMYWJvdXJlciB7XG5cdHByb3RlY3RlZCBpbml0QXZhbGlhYmxlQWN0aW9ucygpIHtcblx0XHR0aGlzLnRvSW5pdEF2YWxpYWJsZUFjdGlvbnMoW0Nob3BGaXJld29vZEFjdGlvbiwgRHJvcE9mZkZpcmV3b29kQWN0aW9uLCBQaWNrVXBUb29sQWN0aW9uXSk7XG5cdH1cblx0LyoqXG5cdCAqIE91ciBvbmx5IGdvYWwgd2lsbCBldmVyIGJlIHRvIGNob3AgbG9ncy5cblx0ICogVGhlIENob3BGaXJld29vZEFjdGlvbiB3aWxsIGJlIGFibGUgdG8gZnVsZmlsbCB0aGlzIGdvYWwuXG5cdCAqL1xuXHRwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuXHRcdGxldCBnb2FsID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcblx0XHRnb2FsLnNldChBY3Rpb25TdGF0dXMuQ29sbGVjdEZpcmV3b29kLCB0cnVlKTtcblx0XHRyZXR1cm4gZ29hbDtcblx0fVxuXG5cdHB1YmxpYyB1cGRhdGVCYWNrUGFjaygpIHtcblx0XHRjb25zb2xlLmxvZyhcIuacqOaftO+8mlwiICsgdGhpcy5iYWNrcGFjay5udW1GaXJld29vZClcblx0fVxufSJdfQ==
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
exports.Labourer = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAgent_1 = require("../../ai/goap/GoapAgent");
var VGameObject_1 = require("../../base/VGameObject");
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
        this.goapAgent = new GoapAgent_1.GoapAgent(this);
    };
    Labourer.prototype.initAvaliableActions = function () { };
    Labourer.prototype.update = function (delta) {
        this.goapAgent.update(delta);
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
}(VGameObject_1.VGameObject));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy9MYWJvdXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsMkRBQTBEO0FBRTFELHFEQUFvRDtBQUVwRCxzREFBcUQ7QUFDckQsOERBQTZEO0FBQzdELHdEQUF1RDtBQUl2RCxrREFBaUQ7QUFFakQ7Ozs7O0dBS0c7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE4Qiw0QkFBVztJQUF6QztRQUFBLHFFQTRJQztRQTFJTyxrQkFBWSxHQUFpQiwyQkFBWSxDQUFDLElBQUksQ0FBQztRQUl0RCxnQkFBZ0I7UUFDUixzQkFBZ0IsR0FBaUIsRUFBRSxDQUFDO1FBa0I1QyxhQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ2YsY0FBUSxHQUFHLEtBQUssQ0FBQTs7SUFrSGpCLENBQUM7SUFwSU8sc0NBQW1CLEdBQTFCO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQztJQUNTLHlDQUFzQixHQUFoQyxVQUFpQyxTQUFnQjtRQUNoRCxJQUFJLE1BQU0sQ0FBQztRQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckQsTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQztJQUNGLENBQUM7SUFVTSx5QkFBTSxHQUFiO1FBQ0MsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsaUNBQWUsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNTLHVDQUFvQixHQUE5QixjQUFtQyxDQUFDO0lBRTdCLHlCQUFNLEdBQWIsVUFBYyxLQUFhO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxnQ0FBYSxHQUFwQjtRQUNDLElBQUksU0FBUyxHQUF3QixJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUMvRCxTQUFTLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUMzRCxTQUFTLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM1RCxTQUFTLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNyRSxTQUFTLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7SUFFTywwQkFBTyxHQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQ0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUNqQixDQUFDO0lBQUEsQ0FBQztJQUVLLDZCQUFVLEdBQWpCLFVBQWtCLFVBQStCO1FBQ2hELGlGQUFpRjtRQUNqRixnRkFBZ0Y7UUFDaEYsa0RBQWtEO0lBQ25ELENBQUM7SUFFTSw0QkFBUyxHQUFoQixVQUFpQixJQUF5QixFQUFFLE9BQXFCO1FBQ2hFLG1DQUFtQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxxQkFBUyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVNLGtDQUFlLEdBQXRCO1FBQ0Msc0VBQXNFO1FBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sOEJBQVcsR0FBbEIsVUFBbUIsT0FBbUI7UUFDckMsd0VBQXdFO1FBQ3hFLDBFQUEwRTtRQUMxRSx1QkFBdUI7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBUyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLDRCQUFTLEdBQWhCLFVBQWlCLFVBQXNCLEVBQUUsS0FBYTtRQUF0RCxpQkE4QkM7UUE3QkEsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7WUFDckIsT0FBTyxJQUFJLENBQUE7U0FDWDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQTtZQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNyRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2dCQUNwQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtnQkFDcEIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7U0FDekM7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDcEIsc0NBQXNDO1FBQ3RDLGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsNkJBQTZCO1FBQzdCLCtCQUErQjtRQUMvQixnQ0FBZ0M7UUFDaEMsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsSUFBSTtJQUNMLENBQUM7SUFDRCxjQUFjO0lBQ1AsOEJBQVcsR0FBbEIsVUFBbUIsUUFBMkI7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsVUFBVTtJQUNILDZCQUFVLEdBQWpCO1FBQ0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzFDLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLDBGQUEwRjtRQUMxRix1QkFBdUI7SUFDeEIsQ0FBQztJQUNELFVBQVU7SUFDSCw4QkFBVyxHQUFsQjtRQUNDLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUN2QixDQUFDO0lBRU0saUNBQWMsR0FBckI7SUFFQSxDQUFDO0lBeklEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztrREFDVDtJQUYxQyxRQUFRO1FBRHBCLE9BQU87T0FDSyxRQUFRLENBNElwQjtJQUFELGVBQUM7Q0E1SUQsQUE0SUMsQ0E1STZCLHlCQUFXLEdBNEl4QztBQTVJWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBARGVzY3JpcHRpb246IHt9IFxuICogQEF1dGhvcjogUmFubmFyLllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNSAyMDo1MjozMCBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTA0IDE4OjMxOjQ5XG4gKi9cblxuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFnZW50XCI7XG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0lHb2FwXCI7XG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBHYW1lRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9HYW1lRGF0YU1hbmFnZXJcIjtcbmltcG9ydCB7IExhYm91cmVyVHlwZSB9IGZyb20gXCIuLi8uLi9kYXRhL0xhYm91cmVyVHlwZVwiO1xuaW1wb3J0IHsgVG9vbFR5cGUgfSBmcm9tIFwiLi4vLi4vZGF0YS9Ub29sVHlwZVwiO1xuaW1wb3J0IHsgVF9MYWJvdXJlckJlYW4gfSBmcm9tIFwiLi4vLi4vZGF0YS9UX0xhYm91cmVyQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgVG9vbENvbXBvbmVudCB9IGZyb20gXCIuLi9Ub29sQ29tcG9uZW50XCI7XG5cbi8qKlxuICogQSBnZW5lcmFsIGxhYm91cmVyIGV4cG9ydCBjbGFzcy5cbiAqIFlvdSBzaG91bGQgc3ViZXhwb3J0IGNsYXNzIHRoaXMgZm9yIHNwZWNpZmljIExhYm91cmVyIGV4cG9ydCBjbGFzc2VzIGFuZCBpbXBsZW1lbnRcbiAqIHRoZSBjcmVhdGVHb2FsU3RhdGUoKSBtZXRob2QgdGhhdCB3aWxsIHBvcHVsYXRlIHRoZSBnb2FsIGZvciB0aGUgR09BUFxuICogcGxhbm5lci5cbiAqL1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgTGFib3VyZXIgZXh0ZW5kcyBWR2FtZU9iamVjdCBpbXBsZW1lbnRzIElHb2FwIHtcblx0QHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShMYWJvdXJlclR5cGUpLCBkaXNwbGF5TmFtZTogXCJ0eXBlXCIgfSlcblx0cHVibGljIGxhYm91cmVyVHlwZTogTGFib3VyZXJUeXBlID0gTGFib3VyZXJUeXBlLk5vbmU7XG5cblx0LyoqZ29hcCBhZ2VudCAqL1xuXHRwcm90ZWN0ZWQgZ29hcEFnZW50OiBHb2FwQWdlbnQ7XG5cdC8qKuaLpeacieeahGFjdGlvbnMgKi9cblx0cHJpdmF0ZSBhdmFsaWFibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10gPSBbXTtcblx0cHVibGljIGdldEF2YWxpYWJsZUFjdGlvbnMoKTogR29hcEFjdGlvbltdIHtcblx0XHRyZXR1cm4gdGhpcy5hdmFsaWFibGVBY3Rpb25zO1xuXHR9XG5cdHByb3RlY3RlZCB0b0luaXRBdmFsaWFibGVBY3Rpb25zKGFjdGlvbkNsczogYW55W10pIHtcblx0XHRsZXQgYWN0aW9uO1xuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSBhY3Rpb25DbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGFjdGlvbiA9IG5ldyBhY3Rpb25DbHNbaV0oKTtcblx0XHRcdHRoaXMuYXZhbGlhYmxlQWN0aW9ucy5wdXNoKGFjdGlvbik7XG5cdFx0fVxuXHR9XG5cdC8qKuiDjOWMhSAqL1xuXHRwdWJsaWMgYmFja3BhY2s6IEJhY2tQYWNrQ29tcG9uZW50O1xuXG5cdHB1YmxpYyBiZWFuOiBUX0xhYm91cmVyQmVhbjtcblxuXHRwdWJsaWMgdG9vbDogVG9vbENvbXBvbmVudDtcblxuXHRiTW92aW5nID0gZmFsc2Vcblx0Yk1vdmVFbmQgPSBmYWxzZVxuXHRwdWJsaWMgb25Mb2FkKCkge1xuXHRcdC8vc3VwZXIuY2hpbGRyZW5DcmVhdGVkKCk7XG5cdFx0dGhpcy5iZWFuID0gR2FtZURhdGFNYW5hZ2VyLkkudF9sYWJvdXJkZXJDb250YWluZXIuZ2V0TGFib3VyZXJCeVR5cGUodGhpcy5sYWJvdXJlclR5cGUpXG5cdFx0aWYgKCF0aGlzLnRvb2wpIHtcblx0XHRcdHRoaXMucGlja1VwVG9vbCgpO1xuXHRcdH1cblx0XHR0aGlzLmluaXRBdmFsaWFibGVBY3Rpb25zKCk7XG5cdFx0dGhpcy5nb2FwQWdlbnQgPSBuZXcgR29hcEFnZW50KHRoaXMpO1xuXHR9XG5cdHByb3RlY3RlZCBpbml0QXZhbGlhYmxlQWN0aW9ucygpIHsgfVxuXG5cdHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcikge1xuXHRcdHRoaXMuZ29hcEFnZW50LnVwZGF0ZShkZWx0YSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0V29ybGRTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+IHtcblx0XHRsZXQgd29ybGREYXRhOiBNYXA8c3RyaW5nLCBPYmplY3Q+ID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcblx0XHR3b3JsZERhdGEuc2V0KEFjdGlvblN0YXR1cy5IYXNPcmUsIHRoaXMuYmFja3BhY2suaGFzT3JlKCkpO1xuXHRcdHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIHRoaXMuYmFja3BhY2suaGFzTG9nKCkpO1xuXHRcdHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc0ZpcmV3b29kLCB0aGlzLmJhY2twYWNrLmhhc0ZpcmV3b29kKCkpO1xuXHRcdHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc1Rvb2wsIHRoaXMuaGFzVG9vbCgpKTtcblx0XHRyZXR1cm4gd29ybGREYXRhO1xuXHR9XG5cblx0cHJpdmF0ZSBoYXNUb29sKCkge1xuXHRcdHJldHVybiB0aGlzLnRvb2wgIT0gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbXBsZW1lbnQgaW4gc3ViZXhwb3J0IGNsYXNzZXNcblx0ICovXG5cdHB1YmxpYyBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XG5cdFx0cmV0dXJuIG5ldyBNYXAoKVxuXHR9O1xuXG5cdHB1YmxpYyBwbGFuRmFpbGVkKGZhaWxlZEdvYWQ6IE1hcDxzdHJpbmcsIE9iamVjdD4pIHtcblx0XHQvLyBOb3QgaGFuZGxpbmcgdGhpcyBoZXJlIHNpbmNlIHdlIGFyZSBtYWtpbmcgc3VyZSBvdXIgZ29hbHMgd2lsbCBhbHdheXMgc3VjY2VlZC5cblx0XHQvLyBCdXQgbm9ybWFsbHkgeW91IHdhbnQgdG8gbWFrZSBzdXJlIHRoZSB3b3JsZCBzdGF0ZSBoYXMgY2hhbmdlZCBiZWZvcmUgcnVubmluZ1xuXHRcdC8vIHRoZSBzYW1lIGdvYWwgYWdhaW4sIG9yIGVsc2UgaXQgd2lsbCBqdXN0IGZhaWwuXG5cdH1cblxuXHRwdWJsaWMgcGxhbkZvdW5kKGdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4sIGFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xuXHRcdC8vIFlheSB3ZSBmb3VuZCBhIHBsYW4gZm9yIG91ciBnb2FsXG5cdFx0Y29uc29sZS5sb2coXCJQbGFuIGZvdW5kOiBcIiwgR29hcEFnZW50LnByZXR0eVByaW50QWN0aW9uc1F1ZXVlKGFjdGlvbnMpKTtcblx0fVxuXG5cdHB1YmxpYyBhY3Rpb25zRmluaXNoZWQoKTogdm9pZCB7XG5cdFx0Ly8gRXZlcnl0aGluZyBpcyBkb25lLCB3ZSBjb21wbGV0ZWQgb3VyIGFjdGlvbnMgZm9yIHRoaXMgZ29vbC4gSG9vcmF5IVxuXHRcdGNvbnNvbGUubG9nKFwiQWN0aW9ucyBjb21wbGV0ZWRcIik7XG5cdH1cblxuXHRwdWJsaWMgcGxhbkFib3J0ZWQoYWJvcnRlcjogR29hcEFjdGlvbikge1xuXHRcdC8vIEFuIGFjdGlvbiBiYWlsZWQgb3V0IG9mIHRoZSBwbGFuLiBTdGF0ZSBoYXMgYmVlbiByZXNldCB0byBwbGFuIGFnYWluLlxuXHRcdC8vIFRha2Ugbm90ZSBvZiB3aGF0IGhhcHBlbmVkIGFuZCBtYWtlIHN1cmUgaWYgeW91IHJ1biB0aGUgc2FtZSBnb2FsIGFnYWluXG5cdFx0Ly8gdGhhdCBpdCBjYW4gc3VjY2VlZC5cblx0XHRjb25zb2xlLmxvZyhcIlBsYW4gQWJvcnRlZDogXCIgKyBHb2FwQWdlbnQucHJldHR5UHJpbnRBY3Rpb24oYWJvcnRlcikpO1xuXHR9XG5cblx0cHVibGljIG1vdmVBZ2VudChuZXh0QWN0aW9uOiBHb2FwQWN0aW9uLCBkZWx0YTogbnVtYmVyKSB7XG5cdFx0bGV0IHRhcmdldCA9IG5leHRBY3Rpb24udGFyZ2V0O1xuXHRcdGlmICh0aGlzLmJNb3ZlRW5kKSB7XG5cdFx0XHR0aGlzLmJNb3ZlRW5kID0gZmFsc2Vcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXHRcdGlmICghdGhpcy5iTW92aW5nKSB7XG5cdFx0XHR0aGlzLmJNb3ZpbmcgPSB0cnVlXG5cdFx0XHRsZXQgYWN0aW9ucyA9IFtdXG5cdFx0XHRhY3Rpb25zLnB1c2goY2MubW92ZVRvKDIsIG5ldyBjYy5WZWMyKHRhcmdldC5ub2RlLngsIHRhcmdldC5ub2RlLnkpKSlcblx0XHRcdGFjdGlvbnMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XG5cdFx0XHRcdHRoaXMuYk1vdmVFbmQgPSB0cnVlXG5cdFx0XHRcdHRoaXMuYk1vdmluZyA9IGZhbHNlXG5cdFx0XHRcdG5leHRBY3Rpb24uc2V0SW5SYW5nZSh0cnVlKTtcblx0XHRcdH0pKVxuXHRcdFx0dGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKClcblx0XHRcdHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9ucykpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuYk1vdmVFbmRcblx0XHQvLyBsZXQgc3RlcCA9IHRoaXMuYmVhbi5zcGVlZCAqIGRlbHRhO1xuXHRcdC8vIGxldCB0YXJnZXQgPSBuZXh0QWN0aW9uLnRhcmdldDtcblx0XHQvLyAvLyDorr7nva7mlrDnmoRwb3NpdGlvblxuXHRcdC8vIHRoaXMubW92ZVRvKHRhcmdldCwgc3RlcCk7XG5cdFx0Ly8gaWYgKHRoaXMucG9zRXF1aXAodGFyZ2V0KSkge1xuXHRcdC8vIFx0bmV4dEFjdGlvbi5zZXRJblJhbmdlKHRydWUpO1xuXHRcdC8vIFx0cmV0dXJuIHRydWU7XG5cdFx0Ly8gfSBlbHNlIHtcblx0XHQvLyBcdHJldHVybiBmYWxzZTtcblx0XHQvLyB9XG5cdH1cblx0Lyoq6K6+572u6IOM5YyF6YeM55qE54mp5ZOBICovXG5cdHB1YmxpYyBzZXRCYWNrUGFjayhiYWNrcGFjazogQmFja1BhY2tDb21wb25lbnQpIHtcblx0XHR0aGlzLmJhY2twYWNrID0gYmFja3BhY2s7XG5cdFx0YmFja3BhY2suc2V0T3duZXIodGhpcyk7XG5cdH1cblx0Lyoq5ou+5Y+W5bel5YW3ICovXG5cdHB1YmxpYyBwaWNrVXBUb29sKCkge1xuXHRcdHRoaXMudG9vbCA9IG5ldyBUb29sQ29tcG9uZW50KCk7XG5cdFx0Y29uc29sZS5sb2coJ+aLvuWPluW3peWFtycsIHRoaXMuY29uc3RydWN0b3IubmFtZSlcblx0XHQvL2xldCB0b29sID0gXG5cdFx0Ly8gdG9vbC5ub2RlLnggPSAxODtcblx0XHQvLyB0b29sLm5vZGUueSA9IDM1O1xuXHRcdC8vXHR0b29sLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBUb29sVHlwZS5nZXRTb3VyY2UodGhpcy5iZWFuLnRvb2xUeXBlKTtcblx0XHQvLyB0aGlzLmFkZENoaWxkKHRvb2wpO1xuXHR9XG5cdC8qKumUgOavgeW3peWFtyAqL1xuXHRwdWJsaWMgZGVzdHJveVRvb2woKSB7XG5cdFx0Ly90aGlzLnJlbW92ZUNoaWxkKHRoaXMudG9vbCk7XG5cdFx0dGhpcy50b29sID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZUJhY2tQYWNrKCkge1xuXG5cdH1cbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9TdGF0ZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRzs7O0FBSUg7SUFRQyxzQkFBWSxLQUFVO1FBSlosa0JBQWEsR0FBYyxJQUFJLENBQUM7UUFDaEMsZUFBVSxHQUFjLElBQUksQ0FBQztRQUl0QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBR00sOEJBQU8sR0FBZCxVQUFlLFFBQWdCO1FBQzlCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLG9DQUFhLEdBQXBCLFVBQXFCLFFBQWdCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxvQ0FBYSxHQUFwQixVQUFxQixHQUFXLEVBQUUsS0FBZ0I7UUFDakQsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzVDLE9BQU87U0FDUDtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksa0NBQVcsR0FBbEIsVUFBbUIsR0FBVztRQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksa0NBQVcsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLEdBQWUsRUFBRSxPQUFlO1FBQWhDLG9CQUFBLEVBQUEsVUFBZTtRQUFFLHdCQUFBLEVBQUEsZUFBZTtRQUMvRCxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxHQUFHLEVBQUU7WUFDOUUsT0FBTztTQUNQO1FBQ0QsSUFBSSxRQUFRLEdBQWMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUM5QyxPQUFPO1NBQ1A7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxtQ0FBWSxHQUFuQixVQUFvQixHQUFlO1FBQWYsb0JBQUEsRUFBQSxVQUFlO1FBQ2xDLElBQUksSUFBSSxDQUFDLGFBQWE7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDZCQUFNLEdBQWIsVUFBYyxTQUFTO1FBQ3RCLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxzQ0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0kseUNBQWtCLEdBQXpCO1FBQ0MsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEM7UUFDRCxPQUFPLFlBQVksQ0FBQyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUVELFlBQVk7SUFDTCxnQ0FBUyxHQUFoQixVQUFpQixRQUFnQjtRQUNoQyxPQUFPLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBQ0Q7O09BRUc7SUFDSSw0QkFBSyxHQUFaO1FBQ0MsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxhQUFhO0lBQ04sOEJBQU8sR0FBZDtRQUNDLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBekhhLHlCQUFZLEdBQVcsU0FBUyxDQUFDO0lBMkhoRCxtQkFBQztDQTVIRCxBQTRIQyxJQUFBO0FBNUhZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBEZXNjcmlwdGlvbjog54q25oCB566h55CG57G7XG4gKiBAQXV0aG9yOiBSYW5uYXIuWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTA2LTI5IDEwOjE2OjU1IFxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hci5ZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTA3LTA1IDE3OjM1OjMxXG4gKi9cblxuaW1wb3J0IHsgU3RhdGVCYXNlIH0gZnJvbSBcIi4vc3RhdGUvU3RhdGVCYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZU1hbmFnZXIge1xuXHRwdWJsaWMgc3RhdGljIEludmFsaWRTdGF0ZTogc3RyaW5nID0gXCJJbnZhbGlkXCI7XG5cblx0cHJvdGVjdGVkIF9zdGF0ZURpYzogeyBba2V5OiBzdHJpbmddOiBTdGF0ZUJhc2UgfTtcblx0cHJvdGVjdGVkIF9jdXJyZW50U3RhdGU6IFN0YXRlQmFzZSA9IG51bGw7XG5cdHByb3RlY3RlZCBfbGFzdFN0YXRlOiBTdGF0ZUJhc2UgPSBudWxsO1xuXHRwcm90ZWN0ZWQgX293bmVyOiBhbnk7XG5cblx0Y29uc3RydWN0b3Iob3duZXI6IGFueSkge1xuXHRcdHRoaXMuX3N0YXRlRGljID0ge307XG5cdFx0dGhpcy5fb3duZXIgPSBvd25lcjtcblx0fVxuXG5cblx0cHVibGljIGlzRXhpc3Qoc3RhdGVLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIXRoaXMuX3N0YXRlRGljW3N0YXRlS2V5XTtcblx0fVxuXG5cdHB1YmxpYyBnZXRTdGF0ZUJ5S2V5KHN0YXRlS2V5OiBzdHJpbmcpOiBTdGF0ZUJhc2Uge1xuXHRcdHJldHVybiB0aGlzLl9zdGF0ZURpY1tzdGF0ZUtleV07XG5cdH1cblxuXHQvKipcblx0ICog5rOo5YaM54q25oCBIFxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBcblx0ICovXG5cdHB1YmxpYyByZWdpc3RlclN0YXRlKGtleTogc3RyaW5nLCBzdGF0ZTogU3RhdGVCYXNlKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuX293bmVyICE9IHN0YXRlLm93bmVyKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJzdGF0ZW1hY2hpbmUg5LiOIHN0YXRlIOaJgOacieiAheS4jeS4gOiHtFwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fc3RhdGVEaWNba2V5XSA9IHN0YXRlO1xuXHR9XG5cblx0LyoqXG5cdCAqIOenu+mZpOeKtuaAgSBcblx0ICogQHBhcmFtIGtleVxuXHQgKiBcblx0ICovXG5cdHB1YmxpYyByZW1vdmVTdGF0ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGRlbGV0ZSB0aGlzLl9zdGF0ZURpY1trZXldO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaUueWPmOeKtuaAgSBcblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEBwYXJhbSBpc0ZvcmNlIOW9k+W9k+WJjeeKtuaAgeWSjOimgeWIh+aNoueahOeKtuaAgeebuOWQjOaXtu+8jOaYr+WQpuW8uuWItuWIh+aNoueKtuaAgVxuXHQgKi9cblx0cHVibGljIGNoYW5nZVN0YXRlKGtleTogc3RyaW5nLCBvYmo6IGFueSA9IG51bGwsIGlzRm9yY2UgPSBmYWxzZSk6IHZvaWQge1xuXHRcdGlmICghaXNGb3JjZSAmJiB0aGlzLl9jdXJyZW50U3RhdGUgJiYgdGhpcy5fY3VycmVudFN0YXRlLmdldFN0YXRlS2V5KCkgPT0ga2V5KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhciBuZXdTdGF0ZTogU3RhdGVCYXNlID0gdGhpcy5fc3RhdGVEaWNba2V5XTtcblx0XHRpZiAobmV3U3RhdGUgPT0gbnVsbCkge1xuXHRcdFx0Y29uc29sZS53YXJuKFwidW5yZWdpc3RlciBzdGF0ZSB0eXBlOiBcIiArIGtleSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25FeGl0KG5ld1N0YXRlLmdldFN0YXRlS2V5KCkpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2xhc3RTdGF0ZSA9IHRoaXMuX2N1cnJlbnRTdGF0ZTtcblx0XHR0aGlzLl9jdXJyZW50U3RhdGUgPSBuZXdTdGF0ZTtcblx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25FbnRlcihvYmopO1xuXHR9XG5cblx0cHVibGljIHJlRW50ZXJTdGF0ZShvYmo6IGFueSA9IG51bGwpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5fY3VycmVudFN0YXRlKVxuXHRcdFx0dGhpcy5fY3VycmVudFN0YXRlLm9uUmVFbnRlcihvYmopO1xuXHR9XG5cblx0LyoqXG5cdCAqIOabtOaWsCBcblx0ICogXG5cdCAqL1xuXHRwdWJsaWMgdXBkYXRlKHRpbWVTdGFtcCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLl9jdXJyZW50U3RhdGUgIT0gbnVsbClcblx0XHRcdHRoaXMuX2N1cnJlbnRTdGF0ZS5vblVwZGF0ZSh0aW1lU3RhbXApO1xuXHR9XG5cblx0LyoqXG5cdCAqIOW9k+WJjeeKtuaAgSAgXG5cdCAqIEByZXR1cm4gXG5cdCAqL1xuXHRwdWJsaWMgZ2V0Q3VycmVudFN0YXRlKCk6IFN0YXRlQmFzZSB7XG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRTdGF0ZTtcblx0fVxuXHQvKipcblx0ICog5b2T5YmN54q25oCB57G75Z6LICBcblx0ICogQHJldHVybiBcblx0ICovXG5cdHB1YmxpYyBnZXRDdXJyZW50U3RhdGVLZXkoKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5fY3VycmVudFN0YXRlICE9IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLl9jdXJyZW50U3RhdGUuZ2V0U3RhdGVLZXkoKTtcblx0XHR9XG5cdFx0cmV0dXJuIFN0YXRlTWFuYWdlci5JbnZhbGlkU3RhdGU7XG5cdH1cblxuXHQvKirlvZPliY3lnKjnmoTnirbmgIEgKi9cblx0cHVibGljIGlzSW5TdGF0ZShzdGF0ZUtleTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHN0YXRlS2V5ID09IHRoaXMuZ2V0Q3VycmVudFN0YXRlS2V5KCk7XG5cdH1cblx0LyoqXG5cdCAqIOa4hemZpCBcblx0ICovXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5fY3VycmVudFN0YXRlICE9IG51bGwpXG5cdFx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25FeGl0KFN0YXRlTWFuYWdlci5JbnZhbGlkU3RhdGUpO1xuXHRcdHRoaXMuX3N0YXRlRGljID0ge307XG5cdFx0dGhpcy5fY3VycmVudFN0YXRlID0gbnVsbDtcblx0XHR0aGlzLl9sYXN0U3RhdGUgPSBudWxsO1xuXHR9XG5cdC8qKua4hemZpOacgOWQjueahOeKtuaAgSAqL1xuXHRwdWJsaWMgZGlzcG9zZSgpIHtcblx0XHRpZiAodGhpcy5fY3VycmVudFN0YXRlICE9IG51bGwpXG5cdFx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25FeGl0KFN0YXRlTWFuYWdlci5JbnZhbGlkU3RhdGUpO1xuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZSA9IG51bGw7XG5cdFx0dGhpcy5fbGFzdFN0YXRlID0gbnVsbDtcblx0fVxuXG59XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvSUdvYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjA5OjM4IFxuICogQExhc3QgTW9kaWZpZWQgYnk6ICAgUmFubmFyWWFuZyBcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDktMDYgMDA6MDk6MzggXG4gKi9cblxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuL0dvYXBBY3Rpb25cIjtcblxuLyoqXG4gKiBBbnkgYWdlbnQgdGhhdCB3YW50cyB0byB1c2UgR09BUCBtdXN0IGltcGxlbWVudFxuICogdGhpcyBpbnRlcmZhY2UuIEl0IHByb3ZpZGVzIGluZm9ybWF0aW9uIHRvIHRoZSBHT0FQXG4gKiBwbGFubmVyIHNvIGl0IGNhbiBwbGFuIHdoYXQgYWN0aW9ucyB0byB1c2UuXG4gKiBcbiAqIEl0IGFsc28gcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciB0aGUgcGxhbm5lciB0byBnaXZlIFxuICogZmVlZGJhY2sgdG8gdGhlIEFnZW50IGFuZCByZXBvcnQgc3VjY2Vzcy9mYWlsdXJlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElHb2FwIHtcblx0LyoqXG5cdCAqIFRoZSBzdGFydGluZyBzdGF0ZSBvZiB0aGUgQWdlbnQgYW5kIHRoZSB3b3JsZC5cblx0ICogU3VwcGx5IHdoYXQgc3RhdGVzIGFyZSBuZWVkZWQgZm9yIGFjdGlvbnMgdG8gcnVuLlxuXHQgKi9cblx0Z2V0V29ybGRTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+O1xuXG5cdGdldEF2YWxpYWJsZUFjdGlvbnMoKTogR29hcEFjdGlvbltdO1xuXG5cdC8qKlxuXHQgKiBHaXZlIHRoZSBwbGFubmVyIGEgbmV3IGdvYWwgc28gaXQgY2FuIGZpZ3VyZSBvdXQgXG5cdCAqIHRoZSBhY3Rpb25zIG5lZWRlZCB0byBmdWxmaWxsIGl0LlxuXHQgKi9cblx0Y3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD47XG5cblx0LyoqXG5cdCAqIE5vIHNlcXVlbmNlIG9mIGFjdGlvbnMgY291bGQgYmUgZm91bmQgZm9yIHRoZSBzdXBwbGllZCBnb2FsLlxuXHQgKiBZb3Ugd2lsbCBuZWVkIHRvIHRyeSBhbm90aGVyIGdvYWxcblx0ICovXG5cdHBsYW5GYWlsZWQoZmFpbGVkR29hbDogTWFwPHN0cmluZywgT2JqZWN0Pik6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIEEgcGxhbiB3YXMgZm91bmQgZm9yIHRoZSBzdXBwbGllZCBnb2FsLlxuXHQgKiBUaGVzZSBhcmUgdGhlIGFjdGlvbnMgdGhlIEFnZW50IHdpbGwgcGVyZm9ybSwgaW4gb3JkZXIuXG5cdCAqL1xuXHRwbGFuRm91bmQoZ29hbDogTWFwPHN0cmluZywgT2JqZWN0PiwgYWN0aW9uczogR29hcEFjdGlvbltdKTogdm9pZDtcblxuXHQvKipcblx0ICogQWxsIGFjdGlvbnMgYXJlIGNvbXBsZXRlIGFuZCB0aGUgZ29hbCB3YXMgcmVhY2hlZC4gSG9vcmF5IVxuXHQgKi9cblx0YWN0aW9uc0ZpbmlzaGVkKCk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIE9uZSBvZiB0aGUgYWN0aW9ucyBjYXVzZWQgdGhlIHBsYW4gdG8gYWJvcnQuXG5cdCAqIFRoYXQgYWN0aW9uIGlzIHJldHVybmVkLlxuXHQgKi9cblx0cGxhbkFib3J0ZWQoYWJvcnRlcjogR29hcEFjdGlvbik6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIENhbGxlZCBkdXJpbmcgVXBkYXRlLiBNb3ZlIHRoZSBhZ2VudCB0b3dhcmRzIHRoZSB0YXJnZXQgaW4gb3JkZXJcblx0ICogZm9yIHRoZSBuZXh0IGFjdGlvbiB0byBiZSBhYmxlIHRvIHBlcmZvcm0uXG5cdCAqIFJldHVybiB0cnVlIGlmIHRoZSBBZ2VudCBpcyBhdCB0aGUgdGFyZ2V0IGFuZCB0aGUgbmV4dCBhY3Rpb24gY2FuIHBlcmZvcm0uXG5cdCAqIEZhbHNlIGlmIGl0IGlzIG5vdCB0aGVyZSB5ZXQuXG5cdCAqL1xuXHRtb3ZlQWdlbnQobmV4dEFjdGlvbjogR29hcEFjdGlvbiwgZGVsdGE6IG51bWJlcik6IGJvb2xlYW47XG59Il19
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
    GoapPlanner.prototype.plan = function (iGoap, availableActions, worldState, goal) {
        var labourer = iGoap;
        // reset the actions so we can start fresh with them
        for (var _i = 0, availableActions_1 = availableActions; _i < availableActions_1.length; _i++) {
            var a = availableActions_1[_i];
            a.doReset();
        }
        // check what actions can run using their checkProceduralPrecondition
        var usableActions = [];
        for (var _a = 0, availableActions_2 = availableActions; _a < availableActions_2.length; _a++) {
            var a = availableActions_2[_a];
            if (a.checkProceduralPrecondition(labourer)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvR29hcFBsYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRzs7O0FBT0g7O0dBRUc7QUFDSDtJQUFBO0lBOElBLENBQUM7SUE3SUE7Ozs7T0FJRztJQUNJLDBCQUFJLEdBQVgsVUFBWSxLQUFZLEVBQUUsZ0JBQThCLEVBQUUsVUFBcUMsRUFBRSxJQUErQjtRQUMvSCxJQUFJLFFBQVEsR0FBYSxLQUFpQixDQUFDO1FBQzNDLG9EQUFvRDtRQUNwRCxLQUFjLFVBQWdCLEVBQWhCLHFDQUFnQixFQUFoQiw4QkFBZ0IsRUFBaEIsSUFBZ0IsRUFBRTtZQUEzQixJQUFJLENBQUMseUJBQUE7WUFDVCxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDWjtRQUVELHFFQUFxRTtRQUNyRSxJQUFJLGFBQWEsR0FBaUIsRUFBRSxDQUFDO1FBQ3JDLEtBQWMsVUFBZ0IsRUFBaEIscUNBQWdCLEVBQWhCLDhCQUFnQixFQUFoQixJQUFnQixFQUFFO1lBQTNCLElBQUksQ0FBQyx5QkFBQTtZQUNULElBQUksQ0FBQyxDQUFDLDJCQUEyQixDQUFDLFFBQW9CLENBQUMsRUFBRTtnQkFDeEQsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QjtTQUNEO1FBRUQsZ0VBQWdFO1FBRWhFLG1GQUFtRjtRQUNuRixJQUFJLE1BQU0sR0FBZSxFQUFFLENBQUM7UUFFNUIsY0FBYztRQUNkLElBQUksS0FBSyxHQUFhLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFM0UsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLDhCQUE4QjtZQUM5Qix5QkFBeUI7WUFDekIsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUVELHdCQUF3QjtRQUN4QixJQUFJLFFBQVEsR0FBYSxJQUFJLENBQUM7UUFDOUIsS0FBaUIsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUU7WUFBcEIsSUFBSSxJQUFJLGVBQUE7WUFDWixJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQ3JCLFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDaEI7aUJBQU07Z0JBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUU7b0JBQzVDLFFBQVEsR0FBRyxJQUFJLENBQUM7aUJBQ2hCO2FBQ0Q7U0FDRDtRQUVELGlEQUFpRDtRQUNqRCxJQUFJLE1BQU0sR0FBaUIsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxHQUFhLFFBQVEsQ0FBQztRQUMzQixPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDakIsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdEI7WUFDRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUNiO1FBQ0QsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWpCLHlCQUF5QjtRQUN6QixPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFDRDs7T0FFRztJQUNLLGtDQUFZLEdBQXBCLFVBQXFCLE9BQXFCLEVBQUUsUUFBb0I7UUFDL0QsSUFBSSxNQUFNLEdBQWlCLEVBQUUsQ0FBQztRQUM5QixLQUFjLFVBQU8sRUFBUCxtQkFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTyxFQUFFO1lBQWxCLElBQUksQ0FBQyxnQkFBQTtZQUNULElBQUksQ0FBQyxJQUFJLFFBQVEsRUFBRTtnQkFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNmO1NBQ0Q7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLGdDQUFVLEdBQWxCLFVBQW1CLE1BQWdCLEVBQUUsTUFBa0IsRUFBRSxhQUEyQixFQUFFLElBQStCO1FBQ3BILElBQUksUUFBUSxHQUFZLEtBQUssQ0FBQztRQUU5Qiw4RUFBOEU7UUFDOUUsS0FBbUIsVUFBYSxFQUFiLCtCQUFhLEVBQWIsMkJBQWEsRUFBYixJQUFhLEVBQUU7WUFBN0IsSUFBSSxNQUFNLHNCQUFBO1lBQ2QsNkZBQTZGO1lBQzdGLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDckQsaURBQWlEO2dCQUNqRCxJQUFJLFlBQVksR0FBOEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDL0YsSUFBSSxJQUFJLEdBQWEsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBRWxHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLEVBQUU7b0JBQ3JDLHVCQUF1QjtvQkFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEIsUUFBUSxHQUFHLElBQUksQ0FBQztpQkFDaEI7cUJBQU07b0JBQ04sbUZBQW1GO29CQUVuRixJQUFJLE1BQU0sR0FBaUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBRXBFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3hELElBQUksS0FBSyxFQUFFO3dCQUNWLFFBQVEsR0FBRyxJQUFJLENBQUM7cUJBQ2hCO2lCQUNEO2FBQ0Q7U0FDRDtRQUVELE9BQU8sUUFBUSxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7O09BR0c7SUFDSyw2QkFBTyxHQUFmLFVBQWdCLElBQStCLEVBQUUsS0FBZ0M7UUFDaEYsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUN6QyxLQUFnQixVQUFVLEVBQVYseUJBQVUsRUFBVix3QkFBVSxFQUFWLElBQVUsRUFBRTtZQUF2QixJQUFJLEdBQUcsbUJBQUE7WUFDWCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDcEMsT0FBTyxLQUFLLENBQUM7YUFDYjtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQ7O09BRUc7SUFDSyxtQ0FBYSxHQUFyQixVQUFzQixZQUF1QyxFQUFFLFdBQXNDO1FBQ3BHLElBQUksS0FBSyxHQUE4QixJQUFJLEdBQUcsRUFBd0IsQ0FBQztRQUN2RSxvQ0FBb0M7UUFDcEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQWEsRUFBRSxHQUFpQjtZQUNyRCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtRQUVGLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFhLEVBQUUsR0FBaUI7WUFDcEQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFDRixrQkFBQztBQUFELENBOUlBLEFBOElDLElBQUE7QUE5SVksa0NBQVc7QUFnSnhCO0lBTUMsa0JBQVksTUFBZ0IsRUFBRSxXQUFtQixFQUFFLEtBQWdDLEVBQUUsTUFBa0I7UUFDdEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBEZXNjcmlwdGlvbjogXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MDk6MzUgXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wNCAxODowNDozNlxuICovXG5cbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uLy4uL2dhbWVkYXRhL2xhYm91cmVycy9MYWJvdXJlclwiO1xuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4vR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi9JR29hcFwiO1xuXG4vKipcbiAqIFBsYW5zIHdoYXQgYWN0aW9ucyBjYW4gYmUgY29tcGxldGVkIGluIG9yZGVyIHRvIGZ1bGZpbGwgYSBnb2FsIHN0YXRlLlxuICovXG5leHBvcnQgY2xhc3MgR29hcFBsYW5uZXIge1xuXHQvKipcblx0ICogUGxhbiB3aGF0IHNlcXVlbmNlIG9mIGFjdGlvbnMgY2FuIGZ1bGZpbGwgdGhlIGdvYWwuXG5cdCAqIFJldHVybnMgbnVsbCBpZiBhIHBsYW4gY291bGQgbm90IGJlIGZvdW5kLCBvciBhIGxpc3Qgb2YgdGhlIGFjdGlvbnNcblx0ICogdGhhdCBtdXN0IGJlIHBlcmZvcm1lZCwgaW4gb3JkZXIsIHRvIGZ1bGZpbGwgdGhlIGdvYWwuXG5cdCAqL1xuXHRwdWJsaWMgcGxhbihpR29hcDogSUdvYXAsIGF2YWlsYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSwgd29ybGRTdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PiwgZ29hbDogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0Pik6IEdvYXBBY3Rpb25bXSB7XG5cdFx0bGV0IGxhYm91cmVyOiBMYWJvdXJlciA9IGlHb2FwIGFzIExhYm91cmVyO1xuXHRcdC8vIHJlc2V0IHRoZSBhY3Rpb25zIHNvIHdlIGNhbiBzdGFydCBmcmVzaCB3aXRoIHRoZW1cblx0XHRmb3IgKGxldCBhIG9mIGF2YWlsYWJsZUFjdGlvbnMpIHtcblx0XHRcdGEuZG9SZXNldCgpO1xuXHRcdH1cblxuXHRcdC8vIGNoZWNrIHdoYXQgYWN0aW9ucyBjYW4gcnVuIHVzaW5nIHRoZWlyIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvblxuXHRcdGxldCB1c2FibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10gPSBbXTtcblx0XHRmb3IgKGxldCBhIG9mIGF2YWlsYWJsZUFjdGlvbnMpIHtcblx0XHRcdGlmIChhLmNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihsYWJvdXJlciBhcyBMYWJvdXJlcikpIHtcblx0XHRcdFx0dXNhYmxlQWN0aW9ucy5wdXNoKGEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIHdlIG5vdyBoYXZlIGFsbCBhY3Rpb25zIHRoYXQgY2FuIHJ1biwgc3RvcmVkIGluIHVzYWJsZUFjdGlvbnNcblxuXHRcdC8vIGJ1aWxkIHVwIHRoZSB0cmVlIGFuZCByZWNvcmQgdGhlIGxlYWYgbm9kZXMgdGhhdCBwcm92aWRlIGEgc29sdXRpb24gdG8gdGhlIGdvYWwuXG5cdFx0bGV0IGxlYXZlczogUGxhbk5vZGVbXSA9IFtdO1xuXG5cdFx0Ly8gYnVpbGQgZ3JhcGhcblx0XHRsZXQgc3RhcnQ6IFBsYW5Ob2RlID0gbmV3IFBsYW5Ob2RlKG51bGwsIDAsIHdvcmxkU3RhdGUsIG51bGwpO1xuXHRcdGxldCBzdWNjZXNzOiBib29sZWFuID0gdGhpcy5idWlsZEdyYXBoKHN0YXJ0LCBsZWF2ZXMsIHVzYWJsZUFjdGlvbnMsIGdvYWwpO1xuXG5cdFx0aWYgKCFzdWNjZXNzKSB7XG5cdFx0XHQvLyBvaCBubywgd2UgZGlkbid0IGdldCBhIHBsYW5cblx0XHRcdC8vY29uc29sZS5sb2coXCJOTyBQTGFuXCIpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gZ2V0IHRoZSBjaGVhcGVzdCBsZWFmXG5cdFx0bGV0IGNoZWFwZXN0OiBQbGFuTm9kZSA9IG51bGw7XG5cdFx0Zm9yIChsZXQgbGVhZiBvZiBsZWF2ZXMpIHtcblx0XHRcdGlmIChjaGVhcGVzdCA9PSBudWxsKSB7XG5cdFx0XHRcdGNoZWFwZXN0ID0gbGVhZjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChsZWFmLnJ1bm5pbmdDb3N0IDwgY2hlYXBlc3QucnVubmluZ0Nvc3QpIHtcblx0XHRcdFx0XHRjaGVhcGVzdCA9IGxlYWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBnZXQgaXRzIG5vZGUgYW5kIHdvcmsgYmFjayB0aHJvdWdoIHRoZSBwYXJlbnRzXG5cdFx0bGV0IHJlc3VsdDogR29hcEFjdGlvbltdID0gW107XG5cdFx0bGV0IG46IFBsYW5Ob2RlID0gY2hlYXBlc3Q7XG5cdFx0d2hpbGUgKG4gIT0gbnVsbCkge1xuXHRcdFx0aWYgKG4uYWN0aW9uICE9IG51bGwpIHtcblx0XHRcdFx0cmVzdWx0LnB1c2gobi5hY3Rpb24pO1xuXHRcdFx0fVxuXHRcdFx0biA9IG4ucGFyZW50O1xuXHRcdH1cblx0XHRyZXN1bHQucmV2ZXJzZSgpO1xuXG5cdFx0Ly8gaG9vcmF5IHdlIGhhdmUgYSBwbGFuIVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0LyoqXG5cdCAqIENyZWF0ZSBhIHN1YnNldCBvZiB0aGUgYWN0aW9ucyBleGNsdWRpbmcgdGhlIHJlbW92ZU1lIG9uZS4gQ3JlYXRlcyBhIG5ldyBzZXQuXG5cdCAqL1xuXHRwcml2YXRlIGFjdGlvblN1YnNldChhY3Rpb25zOiBHb2FwQWN0aW9uW10sIHJlbW92ZU1lOiBHb2FwQWN0aW9uKTogR29hcEFjdGlvbltdIHtcblx0XHRsZXQgc3Vic2V0OiBHb2FwQWN0aW9uW10gPSBbXTtcblx0XHRmb3IgKGxldCBhIG9mIGFjdGlvbnMpIHtcblx0XHRcdGlmIChhICE9IHJlbW92ZU1lKSB7XG5cdFx0XHRcdHN1YnNldC5wdXNoKGEpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3Vic2V0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgc29sdXRpb24gd2FzIGZvdW5kLlxuXHQgKiBUaGUgcG9zc2libGUgcGF0aHMgYXJlIHN0b3JlZCBpbiB0aGUgbGVhdmVzIGxpc3QuIEVhY2ggbGVhZiBoYXMgYVxuXHQgKiAncnVubmluZ0Nvc3QnIHZhbHVlIHdoZXJlIHRoZSBsb3dlc3QgY29zdCB3aWxsIGJlIHRoZSBiZXN0IGFjdGlvblxuXHQgKiBzZXF1ZW5jZS5cblx0ICovXG5cdHByaXZhdGUgYnVpbGRHcmFwaChwYXJlbnQ6IFBsYW5Ob2RlLCBsZWF2ZXM6IFBsYW5Ob2RlW10sIHVzYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSwgZ29hbDogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0Pik6IGJvb2xlYW4ge1xuXHRcdGxldCBmb3VuZE9uZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdFx0Ly8gZ28gdGhyb3VnaCBlYWNoIGFjdGlvbiBhdmFpbGFibGUgYXQgdGhpcyBub2RlIGFuZCBzZWUgaWYgd2UgY2FuIHVzZSBpdCBoZXJlXG5cdFx0Zm9yIChsZXQgYWN0aW9uIG9mIHVzYWJsZUFjdGlvbnMpIHtcblx0XHRcdC8vIGlmIHRoZSBwYXJlbnQgc3RhdGUgaGFzIHRoZSBjb25kaXRpb25zIGZvciB0aGlzIGFjdGlvbidzIHByZWNvbmRpdGlvbnMsIHdlIGNhbiB1c2UgaXQgaGVyZVxuXHRcdFx0aWYgKHRoaXMuaW5TdGF0ZShhY3Rpb24uUHJlY29uZGl0aW9ucywgcGFyZW50LnN0YXRlKSkge1xuXHRcdFx0XHQvLyBhcHBseSB0aGUgYWN0aW9uJ3MgZWZmZWN0cyB0byB0aGUgcGFyZW50IHN0YXRlXG5cdFx0XHRcdGxldCBjdXJyZW50U3RhdGU6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4gPSB0aGlzLnBvcHVsYXRlU3RhdGUocGFyZW50LnN0YXRlLCBhY3Rpb24uRWZmZWN0cyk7XG5cdFx0XHRcdGxldCBub2RlOiBQbGFuTm9kZSA9IG5ldyBQbGFuTm9kZShwYXJlbnQsIHBhcmVudC5ydW5uaW5nQ29zdCArIGFjdGlvbi5jb3N0LCBjdXJyZW50U3RhdGUsIGFjdGlvbik7XG5cblx0XHRcdFx0aWYgKHRoaXMuaW5TdGF0ZShnb2FsLCBjdXJyZW50U3RhdGUpKSB7XG5cdFx0XHRcdFx0Ly8gd2UgZm91bmQgYSBzb2x1dGlvbiFcblx0XHRcdFx0XHRsZWF2ZXMucHVzaChub2RlKTtcblx0XHRcdFx0XHRmb3VuZE9uZSA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gbm90IGF0IGEgc29sdXRpb24geWV0LCBzbyB0ZXN0IGFsbCB0aGUgcmVtYWluaW5nIGFjdGlvbnMgYW5kIGJyYW5jaCBvdXQgdGhlIHRyZWVcblxuXHRcdFx0XHRcdGxldCBzdWJzZXQ6IEdvYXBBY3Rpb25bXSA9IHRoaXMuYWN0aW9uU3Vic2V0KHVzYWJsZUFjdGlvbnMsIGFjdGlvbik7XG5cblx0XHRcdFx0XHRsZXQgZm91bmQgPSB0aGlzLmJ1aWxkR3JhcGgobm9kZSwgbGVhdmVzLCBzdWJzZXQsIGdvYWwpO1xuXHRcdFx0XHRcdGlmIChmb3VuZCkge1xuXHRcdFx0XHRcdFx0Zm91bmRPbmUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmb3VuZE9uZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVjayB0aGF0IGFsbCBpdGVtcyBpbiAndGVzdCcgYXJlIGluICdzdGF0ZScuIElmIGp1c3Qgb25lIGRvZXMgbm90IG1hdGNoIG9yIGlzIG5vdCB0aGVyZVxuXHQgKiB0aGVuIHRoaXMgcmV0dXJucyBmYWxzZS5cblx0ICovXG5cdHByaXZhdGUgaW5TdGF0ZSh0ZXN0OiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+LCBzdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0Pik6IGJvb2xlYW4ge1xuXHRcdGxldCB0ZXN0S2V5QXJyID0gQXJyYXkuZnJvbSh0ZXN0LmtleXMoKSk7XG5cdFx0Zm9yIChsZXQga2V5IG9mIHRlc3RLZXlBcnIpIHtcblx0XHRcdGlmICh0ZXN0LmdldChrZXkpICE9IHN0YXRlLmdldChrZXkpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogQXBwbHkgdGhlIHN0YXRlQ2hhbmdlIHRvIHRoZSBjdXJyZW50U3RhdGVcblx0ICovXG5cdHByaXZhdGUgcG9wdWxhdGVTdGF0ZShjdXJyZW50U3RhdGU6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4sIHN0YXRlQ2hhbmdlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PiB7XG5cdFx0bGV0IHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+ID0gbmV3IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4oKTtcblx0XHQvLyBjb3B5IHRoZSBLVlBzIG92ZXIgYXMgbmV3IG9iamVjdHNcblx0XHRjdXJyZW50U3RhdGUuZm9yRWFjaCgodmFsdWU6IE9iamVjdCwga2V5OiBBY3Rpb25TdGF0dXMpID0+IHtcblx0XHRcdHN0YXRlLnNldChrZXksIHZhbHVlKTtcblx0XHR9KVxuXG5cdFx0c3RhdGVDaGFuZ2UuZm9yRWFjaCgodmFsdWU6IE9iamVjdCwga2V5OiBBY3Rpb25TdGF0dXMpID0+IHtcblx0XHRcdHN0YXRlLnNldChrZXksIHZhbHVlKTtcblx0XHR9KVxuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFuTm9kZSB7XG5cdHB1YmxpYyBwYXJlbnQ6IFBsYW5Ob2RlO1xuXHRwdWJsaWMgcnVubmluZ0Nvc3Q6IG51bWJlcjtcblx0cHVibGljIHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+O1xuXHRwdWJsaWMgYWN0aW9uOiBHb2FwQWN0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGxhbk5vZGUsIHJ1bm5pbmdDb3N0OiBudW1iZXIsIHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+LCBhY3Rpb246IEdvYXBBY3Rpb24pIHtcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLnJ1bm5pbmdDb3N0ID0gcnVubmluZ0Nvc3Q7XG5cdFx0dGhpcy5zdGF0ZSA9IHN0YXRlO1xuXHRcdHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuXHR9XG59Il19
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
var GoapAgent = /** @class */ (function () {
    function GoapAgent(owner) {
        this.owner = owner;
        this.initState();
        this.planner = new GoapPlanner_1.GoapPlanner();
        this.availableActions = [];
        this.currentActions = [];
        this.stateMgr.changeState(StateEnum_1.StateEnum.StateIdle);
        this.loadActions();
    }
    GoapAgent.prototype.getOwner = function () {
        return this.owner;
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
    GoapAgent.prototype.initState = function () {
        var stateMgr = this.stateMgr = new StateManager_1.StateManager(this);
        stateMgr.registerState(StateEnum_1.StateEnum.StateIdle, new StateIdle_1.StateIdle(this));
        stateMgr.registerState(StateEnum_1.StateEnum.StateMove, new StateMove_1.StateMove(this));
        stateMgr.registerState(StateEnum_1.StateEnum.StatePerformAction, new StatePerformAction_1.StatePerformAction(this));
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
    GoapAgent.prototype.loadActions = function () {
        var actions = this.owner.getAvaliableActions();
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
}());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvR29hcEFnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQUNuRCxvREFBbUQ7QUFDbkQsb0RBQW1EO0FBQ25ELHNFQUFxRTtBQUNyRSxvREFBbUQ7QUFHbkQsNkNBQTRDO0FBRzVDOzs7Ozs7R0FNRztBQUNIO0lBaUNDLG1CQUFtQixLQUFZO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQXBDTSw0QkFBUSxHQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFTSw4QkFBVSxHQUFqQjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBR00sdUNBQW1CLEdBQTFCO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQztJQUdNLHFDQUFpQixHQUF4QixVQUF5QixjQUE0QjtRQUNwRCxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN0QyxDQUFDO0lBQ00sc0NBQWtCLEdBQXpCO1FBQ0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTSx5Q0FBcUIsR0FBNUI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVNLHFDQUFpQixHQUF4QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDO0lBV08sNkJBQVMsR0FBakI7UUFDQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksMkJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLElBQUkscUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ2hFLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDaEUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBUyxDQUFDLGtCQUFrQixFQUFFLElBQUksdUNBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUNuRixDQUFDO0lBRU0sK0JBQVcsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLEdBQVMsRUFBRSxPQUFpQjtRQUMzRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSwwQkFBTSxHQUFiLFVBQWMsS0FBYTtRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBQ00sNkJBQVMsR0FBaEIsVUFBaUIsQ0FBYTtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTSw2QkFBUyxHQUFoQixVQUF1QyxHQUFpQjtRQUN2RCxLQUFtQixVQUFxQixFQUFyQixLQUFBLElBQUksQ0FBQyxnQkFBZ0IsRUFBckIsY0FBcUIsRUFBckIsSUFBcUIsRUFBRTtZQUFyQyxJQUFJLE1BQU0sU0FBQTtZQUNkLElBQUksTUFBTSxZQUFZLEdBQUcsRUFBRTtnQkFDMUIsT0FBTyxNQUFNLENBQUM7YUFDZDtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ00sZ0NBQVksR0FBbkIsVUFBb0IsTUFBa0I7UUFDckMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxPQUFPO2FBQ1A7U0FDRDtJQUNGLENBQUM7SUFDTSxpQ0FBYSxHQUFwQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTywrQkFBVyxHQUFuQjtRQUNDLElBQUksT0FBTyxHQUFpQixJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDN0QsS0FBbUIsVUFBTyxFQUFQLG1CQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPLEVBQUU7WUFBdkIsSUFBSSxNQUFNLGdCQUFBO1lBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFeEUsQ0FBQztJQUNELHdEQUF3RDtJQUMxQywwQkFBZ0IsR0FBOUIsVUFBK0IsS0FBZ0M7UUFDOUQsSUFBSSxDQUFDLEdBQVcsRUFBRSxDQUFDO1FBQ25CLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsR0FBRztZQUN4QixDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRWEsaUNBQXVCLEdBQXJDLFVBQXNDLE9BQXFCO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLEdBQVcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFrQjtZQUNsQyxDQUFDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDN0IsQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFBO1FBQ0YsQ0FBQyxJQUFJLE1BQU0sQ0FBQztRQUNaLE9BQU8sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVhLDRCQUFrQixHQUFoQyxVQUFpQyxPQUFxQjtRQUNyRCxJQUFJLENBQUMsR0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQWtCO1lBQ2xDLENBQUMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUM3QixDQUFDLElBQUksSUFBSSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFYSwyQkFBaUIsR0FBL0IsVUFBZ0MsTUFBa0I7UUFDakQsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVGLGdCQUFDO0FBQUQsQ0F6SEEsQUF5SEMsSUFBQTtBQXpIWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlRW51bSB9IGZyb20gXCIuLi9mc20vc3RhdGUvU3RhdGVFbnVtXCI7XG5pbXBvcnQgeyBTdGF0ZUlkbGUgfSBmcm9tIFwiLi4vZnNtL3N0YXRlL1N0YXRlSWRsZVwiO1xuaW1wb3J0IHsgU3RhdGVNb3ZlIH0gZnJvbSBcIi4uL2ZzbS9zdGF0ZS9TdGF0ZU1vdmVcIjtcbmltcG9ydCB7IFN0YXRlUGVyZm9ybUFjdGlvbiB9IGZyb20gXCIuLi9mc20vc3RhdGUvU3RhdGVQZXJmb3JtQWN0aW9uXCI7XG5pbXBvcnQgeyBTdGF0ZU1hbmFnZXIgfSBmcm9tIFwiLi4vZnNtL1N0YXRlTWFuYWdlclwiO1xuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4vR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgR29hcFBsYW5uZXIgfSBmcm9tIFwiLi9Hb2FwUGxhbm5lclwiO1xuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi9JR29hcFwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDowOTozMCBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTA0IDE3OjQxOjMxXG4gKi9cbmV4cG9ydCBjbGFzcyBHb2FwQWdlbnQge1xuXG5cdHByaXZhdGUgc3RhdGVNZ3I6IFN0YXRlTWFuYWdlcjtcblxuXHRwcml2YXRlIG93bmVyOiBJR29hcDtcblx0cHVibGljIGdldE93bmVyKCk6IElHb2FwIHtcblx0XHRyZXR1cm4gdGhpcy5vd25lcjtcblx0fVxuXHRwcml2YXRlIHBsYW5uZXI6IEdvYXBQbGFubmVyO1xuXHRwdWJsaWMgZ2V0UGxhbm5lcigpOiBHb2FwUGxhbm5lciB7XG5cdFx0cmV0dXJuIHRoaXMucGxhbm5lcjtcblx0fVxuXG5cdHByaXZhdGUgYXZhaWxhYmxlQWN0aW9uczogR29hcEFjdGlvbltdO1xuXHRwdWJsaWMgZ2V0QXZhbGlhYmxlQWN0aW9ucygpOiBHb2FwQWN0aW9uW10ge1xuXHRcdHJldHVybiB0aGlzLmF2YWlsYWJsZUFjdGlvbnM7XG5cdH1cblxuXHRwcml2YXRlIGN1cnJlbnRBY3Rpb25zOiBHb2FwQWN0aW9uW107XG5cdHB1YmxpYyBzZXRDdXJyZW50QWN0aW9ucyhjdXJyZW50QWN0aW9uczogR29hcEFjdGlvbltdKSB7XG5cdFx0dGhpcy5jdXJyZW50QWN0aW9ucyA9IGN1cnJlbnRBY3Rpb25zO1xuXHR9XG5cdHB1YmxpYyBwZWVrQ3VycmVudEFjdGlvbnMoKTogR29hcEFjdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudEFjdGlvbnNbMF07XG5cdH1cblx0cHVibGljIGRlcXVldWVDdXJyZW50QWN0aW9ucygpOiBHb2FwQWN0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50QWN0aW9ucy5zaGlmdCgpO1xuXHR9XG5cblx0cHVibGljIGdldEN1cnJlbnRBY3Rpb25zKCk6IEdvYXBBY3Rpb25bXSB7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudEFjdGlvbnM7XG5cdH1cblxuXHRwdWJsaWMgY29uc3RydWN0b3Iob3duZXI6IElHb2FwKSB7XG5cdFx0dGhpcy5vd25lciA9IG93bmVyO1xuXHRcdHRoaXMuaW5pdFN0YXRlKCk7XG5cdFx0dGhpcy5wbGFubmVyID0gbmV3IEdvYXBQbGFubmVyKCk7XG5cdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zID0gW107XG5cdFx0dGhpcy5jdXJyZW50QWN0aW9ucyA9IFtdO1xuXHRcdHRoaXMuc3RhdGVNZ3IuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XG5cdFx0dGhpcy5sb2FkQWN0aW9ucygpO1xuXHR9XG5cdHByaXZhdGUgaW5pdFN0YXRlKCkge1xuXHRcdGxldCBzdGF0ZU1nciA9IHRoaXMuc3RhdGVNZ3IgPSBuZXcgU3RhdGVNYW5hZ2VyKHRoaXMpO1xuXHRcdHN0YXRlTWdyLnJlZ2lzdGVyU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSwgbmV3IFN0YXRlSWRsZSh0aGlzKSlcblx0XHRzdGF0ZU1nci5yZWdpc3RlclN0YXRlKFN0YXRlRW51bS5TdGF0ZU1vdmUsIG5ldyBTdGF0ZU1vdmUodGhpcykpXG5cdFx0c3RhdGVNZ3IucmVnaXN0ZXJTdGF0ZShTdGF0ZUVudW0uU3RhdGVQZXJmb3JtQWN0aW9uLCBuZXcgU3RhdGVQZXJmb3JtQWN0aW9uKHRoaXMpKVxuXHR9XG5cblx0cHVibGljIGNoYW5nZVN0YXRlKGtleTogc3RyaW5nLCBvYmo/OiBhbnksIGlzRm9yY2U/OiBib29sZWFuKSB7XG5cdFx0dGhpcy5zdGF0ZU1nci5jaGFuZ2VTdGF0ZShrZXksIG9iaiwgaXNGb3JjZSk7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpIHtcblx0XHR0aGlzLnN0YXRlTWdyLnVwZGF0ZShkZWx0YSk7XG5cdH1cblx0cHVibGljIGFkZEFjdGlvbihhOiBHb2FwQWN0aW9uKSB7XG5cdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zLnB1c2goYSk7XG5cdH1cblx0cHVibGljIGdldEFjdGlvbjxUIGV4dGVuZHMgR29hcEFjdGlvbj4oY2xzOiB7IG5ldygpOiBUIH0pIHtcblx0XHRmb3IgKGxldCBhY3Rpb24gb2YgdGhpcy5hdmFpbGFibGVBY3Rpb25zKSB7XG5cdFx0XHRpZiAoYWN0aW9uIGluc3RhbmNlb2YgY2xzKSB7XG5cdFx0XHRcdHJldHVybiBhY3Rpb247XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHB1YmxpYyByZW1vdmVBY3Rpb24oYWN0aW9uOiBHb2FwQWN0aW9uKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuYXZhaWxhYmxlQWN0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKHRoaXMuYXZhaWxhYmxlQWN0aW9uc1tpXSA9PSBhY3Rpb24pIHtcblx0XHRcdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zLnNwbGljZShpLCAxKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRwdWJsaWMgaGFzQWN0aW9uUGxhbigpIHtcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50QWN0aW9ucy5sZW5ndGggPiAwO1xuXHR9XG5cblx0cHJpdmF0ZSBsb2FkQWN0aW9ucygpIHtcblx0XHRsZXQgYWN0aW9uczogR29hcEFjdGlvbltdID0gdGhpcy5vd25lci5nZXRBdmFsaWFibGVBY3Rpb25zKCk7XG5cdFx0Zm9yIChsZXQgYWN0aW9uIG9mIGFjdGlvbnMpIHtcblx0XHRcdHRoaXMuYXZhaWxhYmxlQWN0aW9ucy5wdXNoKGFjdGlvbik7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKFwiRm91bmQgYWN0aW9uczogXCIgKyBHb2FwQWdlbnQucHJldHR5UHJpbnRBY3Rpb25zKGFjdGlvbnMpKTtcblxuXHR9XG5cdC8vIOi+k+WHuiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRwdWJsaWMgc3RhdGljIHByZXR0eVByaW50U3RhdGUoc3RhdGU6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4pIHtcblx0XHRsZXQgczogc3RyaW5nID0gXCJcIjtcblx0XHRzdGF0ZS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG5cdFx0XHRzICs9IGtleSArIFwiOlwiICsgdmFsdWU7XG5cdFx0XHRzICs9IFwiLCBcIjtcblx0XHR9KVxuXHRcdHJldHVybiBzO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBwcmV0dHlQcmludEFjdGlvbnNRdWV1ZShhY3Rpb25zOiBHb2FwQWN0aW9uW10pOiBzdHJpbmcge1xuXHRcdGNvbnNvbGUubG9nKFwicHJldHR5UHJpbnRBY3Rpb25zUXVldWU6IFwiLCBhY3Rpb25zKVxuXHRcdGxldCBzOiBzdHJpbmcgPSBcIlwiO1xuXHRcdGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBHb2FwQWN0aW9uKSA9PiB7XG5cdFx0XHRzICs9IGFjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdFx0cyArPSBcIi0+IFwiO1xuXHRcdH0pXG5cdFx0cyArPSBcIkdPQUxcIjtcblx0XHRyZXR1cm4gcztcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRBY3Rpb25zKGFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xuXHRcdGxldCBzOiBzdHJpbmcgPSBcIlwiO1xuXHRcdGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBHb2FwQWN0aW9uKSA9PiB7XG5cdFx0XHRzICs9IGFjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdFx0cyArPSBcIiwgXCI7XG5cdFx0fSlcblx0XHRyZXR1cm4gcztcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRBY3Rpb24oYWN0aW9uOiBHb2FwQWN0aW9uKSB7XG5cdFx0cmV0dXJuIFwiXCIgKyBhY3Rpb24uY29uc3RydWN0b3IubmFtZTtcblx0fVxuXG59Il19
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
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isEatOk, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isEquipOk, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isFireOk, false);
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
        worldData.set(ActionDataStatus_1.ActionDataStatus.isEatOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isEatOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isEquipOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isEquipOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isFireOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isFireOk));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0VudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwwREFBeUQ7QUFFekQsdURBQXNEO0FBQ3RELDJDQUFzQztBQUVoQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE2QywwQkFBWTtJQUF6RDtRQUFBLHFFQW1GQztRQWpGRyxjQUFRLEdBQVksS0FBSyxDQUFBO1FBQ3pCLGFBQU8sR0FBWSxLQUFLLENBQUE7UUFJeEIsZ0JBQWdCO1FBQ1Isc0JBQWdCLEdBQWlCLEVBQUUsQ0FBQzs7SUEyRWhELENBQUM7SUF6RVUscUJBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxvQkFBVSxFQUFFLENBQUE7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxvQ0FBbUIsR0FBMUI7UUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBRU0sdUNBQXNCLEdBQTdCLFVBQThCLFNBQWdCO1FBQzFDLElBQUksTUFBTSxDQUFDO1FBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsRCxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RDO0lBQ0wsQ0FBQztJQUVELDhCQUFhLEdBQWI7UUFDSSxJQUFJLFNBQVMsR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDL0QsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUN6RixTQUFTLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25GLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDdkYsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNyRixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBSUQsMkJBQVUsR0FBVixVQUFXLFVBQStCO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELDBCQUFTLEdBQVQsVUFBVSxJQUF5QixFQUFFLE9BQXFCO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELGdDQUFlLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDRCQUFXLEdBQVgsVUFBWSxPQUFtQjtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFFRCwwQkFBUyxHQUFULFVBQVUsVUFBc0IsRUFBRSxLQUFhO1FBQS9DLGlCQW9CQztRQW5CRyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO1lBQ3JCLE9BQU8sSUFBSSxDQUFBO1NBQ2Q7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQTtZQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNyRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2dCQUNwQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtnQkFDcEIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7U0FDNUM7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDeEIsQ0FBQztJQUVNLDRCQUFXLEdBQWxCLFVBQW1CLEtBQWE7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQWxGeUIsTUFBTTtRQURuQyxPQUFPO09BQ3NCLE1BQU0sQ0FtRm5DO0lBQUQsYUFBQztDQW5GRCxBQW1GQyxDQW5GNEMsRUFBRSxDQUFDLFNBQVMsR0FtRnhEO2tCQW5GNkIsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tICcuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvbic7XG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tICcuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFnZW50JztcbmltcG9ydCB7IElHb2FwIH0gZnJvbSAnLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwJztcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tICcuL0FjdGlvbkRhdGFTdGF0dXMnO1xuaW1wb3J0IERhdGFNZW1vcnkgZnJvbSAnLi9EYXRhTWVtb3J5JztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgYWJzdHJhY3QgZGVmYXVsdCBjbGFzcyBFbnRpdHkgZXh0ZW5kcyBjYy5Db21wb25lbnQgaW1wbGVtZW50cyBJR29hcCB7XG4gICAgbWVtb3J5OiBEYXRhTWVtb3J5XG4gICAgYk1vdmVFbmQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIGJNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgLyoqZ29hcCBhZ2VudCAqL1xuICAgIHByb3RlY3RlZCBnb2FwQWdlbnQ6IEdvYXBBZ2VudDtcbiAgICAvKirmi6XmnInnmoRhY3Rpb25zICovXG4gICAgcHJpdmF0ZSBhdmFsaWFibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10gPSBbXTtcblxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgICB0aGlzLm1lbW9yeSA9IG5ldyBEYXRhTWVtb3J5KClcbiAgICAgICAgdGhpcy5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNUb2xpZXRPaywgZmFsc2UpXG4gICAgICAgIHRoaXMubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRWF0T2ssIGZhbHNlKVxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIGZhbHNlKVxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0ZpcmVPaywgZmFsc2UpXG4gICAgICAgIHRoaXMuZ29hcEFnZW50ID0gbmV3IEdvYXBBZ2VudCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QXZhbGlhYmxlQWN0aW9ucygpOiBHb2FwQWN0aW9uW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5hdmFsaWFibGVBY3Rpb25zO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b0luaXRBdmFsaWFibGVBY3Rpb25zKGFjdGlvbkNsczogYW55W10pIHtcbiAgICAgICAgbGV0IGFjdGlvbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFjdGlvbkNscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgYWN0aW9uID0gbmV3IGFjdGlvbkNsc1tpXSgpO1xuICAgICAgICAgICAgdGhpcy5hdmFsaWFibGVBY3Rpb25zLnB1c2goYWN0aW9uKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFdvcmxkU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XG4gICAgICAgIGxldCB3b3JsZERhdGE6IE1hcDxzdHJpbmcsIE9iamVjdD4gPSBuZXcgTWFwPHN0cmluZywgT2JqZWN0PigpO1xuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNUb2xpZXRPaywgdGhpcy5tZW1vcnkuZ2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNUb2xpZXRPaykpO1xuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNFYXRPaywgdGhpcy5tZW1vcnkuZ2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNFYXRPaykpO1xuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCB0aGlzLm1lbW9yeS5nZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2spKTtcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rLCB0aGlzLm1lbW9yeS5nZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0ZpcmVPaykpO1xuICAgICAgICByZXR1cm4gd29ybGREYXRhO1xuICAgIH1cblxuICAgIGFic3RyYWN0IGNyZWF0ZUdvYWxTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+XG5cbiAgICBwbGFuRmFpbGVkKGZhaWxlZEdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGFuRmFpbGVkXCIpXG4gICAgfVxuXG4gICAgcGxhbkZvdW5kKGdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4sIGFjdGlvbnM6IEdvYXBBY3Rpb25bXSk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBsYW5Gb3VuZFwiKVxuICAgIH1cblxuICAgIGFjdGlvbnNGaW5pc2hlZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBY3Rpb25zIGNvbXBsZXRlZFwiKTtcbiAgICB9XG5cbiAgICBwbGFuQWJvcnRlZChhYm9ydGVyOiBHb2FwQWN0aW9uKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxhbkFib3J0ZWRcIilcbiAgICB9XG5cbiAgICBtb3ZlQWdlbnQobmV4dEFjdGlvbjogR29hcEFjdGlvbiwgZGVsdGE6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gbmV4dEFjdGlvbi50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmJNb3ZlRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmJNb3ZlRW5kID0gZmFsc2VcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmJNb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYk1vdmluZyA9IHRydWVcbiAgICAgICAgICAgIGxldCBhY3Rpb25zID0gW11cbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5tb3ZlVG8oMiwgbmV3IGNjLlZlYzIodGFyZ2V0Lm5vZGUueCwgdGFyZ2V0Lm5vZGUueSkpKVxuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJNb3ZlRW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuYk1vdmluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgbmV4dEFjdGlvbi5zZXRJblJhbmdlKHRydWUpO1xuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY3Rpb25zKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmJNb3ZlRW5kXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRpbWVyKGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5nb2FwQWdlbnQudXBkYXRlKGRlbHRhKTtcbiAgICB9XG59XG4iXX0=
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
    ActionDataStatus.isEatOk = "isEatOk";
    ActionDataStatus.isEquipOk = "isEquipOk";
    ActionDataStatus.isFireOk = "isFireOk";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0FjdGlvbkRhdGFTdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQU1BLENBQUM7SUFMYywyQkFBVSxHQUFHLFlBQVksQ0FBQztJQUMxQix3QkFBTyxHQUFHLFNBQVMsQ0FBQTtJQUNuQiwwQkFBUyxHQUFHLFdBQVcsQ0FBQTtJQUN2Qix5QkFBUSxHQUFHLFVBQVUsQ0FBQTtJQUNyQix3QkFBTyxHQUFHLFNBQVMsQ0FBQTtJQUNsQyx1QkFBQztDQU5ELEFBTUMsSUFBQTtBQU5ZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBY3Rpb25EYXRhU3RhdHVzIHtcblx0cHVibGljIHN0YXRpYyBpc1RvbGlldE9rID0gXCJpc1RvbGlldE9rXCI7XG5cdHB1YmxpYyBzdGF0aWMgaXNFYXRPayA9IFwiaXNFYXRPa1wiXG5cdHB1YmxpYyBzdGF0aWMgaXNFcXVpcE9rID0gXCJpc0VxdWlwT2tcIlxuXHRwdWJsaWMgc3RhdGljIGlzRmlyZU9rID0gXCJpc0ZpcmVPa1wiXG5cdHB1YmxpYyBzdGF0aWMgb3V0RmlyZSA9IFwib3V0RmlyZVwiXG59Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL1RvaWxldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFFcEQsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFFMUM7SUFBc0MsMEJBQVc7SUFBakQ7O0lBRUEsQ0FBQztJQUZzQixNQUFNO1FBRDVCLE9BQU87T0FDZSxNQUFNLENBRTVCO0lBQUQsYUFBQztDQUZELEFBRUMsQ0FGcUMseUJBQVcsR0FFaEQ7a0JBRnNCLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gJy4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdCc7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCAgIGRlZmF1bHQgY2xhc3MgVG9pbGV0IGV4dGVuZHMgVkdhbWVPYmplY3Qge1xuICAgXG59XG4iXX0=
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isTolietOk, false); // we need a tool to do this
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
    GotoToiletAction.prototype.perform = function (iGoap) {
        var entity = iGoap;
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            entity.memory.set(ActionDataStatus_1.ActionDataStatus.isTolietOk, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0dvdG9Ub2lsZXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEyRDtBQUczRCwrREFBOEQ7QUFDOUQsa0RBQTZDO0FBQzdDLHVEQUFzRDtBQUd0RDtJQUFzQyxvQ0FBVTtJQUkvQztRQUFBLFlBQ0MsaUJBQU8sU0FHUDtRQVBPLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFHM0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7UUFDdEYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQ25ELENBQUM7SUFFTSxnQ0FBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLGlDQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVNLDBDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ00sc0RBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcseUJBQVcsQ0FBQyxZQUFZLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQTtRQUMxQixpREFBaUQ7UUFDakQsc0RBQXNEO1FBQ3RELHFDQUFxQztRQUNyQywrQkFBK0I7UUFFL0IsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQix1Q0FBdUM7UUFDdkMsb0JBQW9CO1FBQ3BCLDhDQUE4QztRQUM5QyxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLG1EQUFtRDtRQUNuRCw4QkFBOEI7UUFDOUIsc0NBQXNDO1FBQ3RDLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsTUFBTTtRQUNOLEtBQUs7UUFDTCxJQUFJO1FBQ0osdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUVqQix5QkFBeUI7UUFFekIsMEJBQTBCO0lBQzNCLENBQUM7SUFFTSxrQ0FBTyxHQUFkLFVBQWUsS0FBWTtRQUMxQixJQUFJLE1BQU0sR0FBRyxLQUFlLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXJDLElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDNUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ3BELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1NBQ2pCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQWhFQSxBQWdFQyxDQWhFcUMsdUJBQVUsR0FnRS9DO0FBaEVZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIjtcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcFwiO1xuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uL3NyYy91dGlscy9UaW1lVXRpbFwiO1xuaW1wb3J0IHsgQWN0aW9uRGF0YVN0YXR1cyB9IGZyb20gXCIuL0FjdGlvbkRhdGFTdGF0dXNcIjtcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4vRW50aXR5XCI7XG5cbmV4cG9ydCBjbGFzcyBHb3RvVG9pbGV0QWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG5cdHByaXZhdGUgYkRvbmU6IGJvb2xlYW4gPSBmYWxzZVxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSB3b3JrRHVyYXRpb246IG51bWJlciA9IDI7IC8vIHNlY29uZHNcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uRGF0YVN0YXR1cy5pc1RvbGlldE9rLCBmYWxzZSk7IC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRydWUpO1xuXHR9XG5cblx0cHVibGljIHJlc2V0KCk6IHZvaWQge1xuXHRcdHRoaXMuYkRvbmUgPSBmYWxzZTtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdH1cblxuXHRwdWJsaWMgaXNEb25lKCkge1xuXHRcdHJldHVybiB0aGlzLmJEb25lO1xuXHR9XG5cblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xuXHRcdHRoaXMudGFyZ2V0ID0gRW52aXJvbm1lbnQudG9pbGV0VGFyZ2V0O1xuXHRcdHJldHVybiB0aGlzLnRhcmdldCAhPSBudWxsXG5cdFx0Ly8gLy8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHRyZWUgdGhhdCB3ZSBjYW4gY2hvcFxuXHRcdC8vIGxldCB0cmVlczogVHJlZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQudHJlZUNvbXBzO1xuXHRcdC8vIGxldCBjbG9zZXN0OiBUcmVlQ29tcG9uZW50ID0gbnVsbDtcblx0XHQvLyBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cblx0XHQvLyBmb3IgKGxldCB0cmVlIG9mIHRyZWVzKSB7XG5cdFx0Ly8gXHRpZiAoY2xvc2VzdCA9PSBudWxsKSB7XG5cdFx0Ly8gXHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcblx0XHQvLyBcdFx0Y2xvc2VzdCA9IHRyZWU7XG5cdFx0Ly8gXHRcdGNsb3Nlc3REaXN0ID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cblx0XHQvLyBcdFx0bGV0IGRpc3Q6IG51bWJlciA9IHRyZWUuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuXHRcdC8vIFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG5cdFx0Ly8gXHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcblx0XHQvLyBcdFx0XHRjbG9zZXN0ID0gdHJlZTtcblx0XHQvLyBcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdFx0Ly8gaWYgKGNsb3Nlc3QgPT0gbnVsbClcblx0XHQvLyBcdHJldHVybiBmYWxzZTtcblxuXHRcdC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuXHRcdC8vIHJldHVybiBjbG9zZXN0ICE9IG51bGw7XG5cdH1cblxuXHRwdWJsaWMgcGVyZm9ybShpR29hcDogSUdvYXApOiBib29sZWFuIHtcblx0XHRsZXQgZW50aXR5ID0gaUdvYXAgYXMgRW50aXR5O1xuXHRcdGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKVxuXHRcdFx0dGhpcy5zdGFydFRpbWUgPSBUaW1lVXRpbC5nZXRUaW1lKCk7XG5cblx0XHRpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLndvcmtEdXJhdGlvbikge1xuXHRcdFx0ZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1RvbGlldE9rLCB0cnVlKVxuXHRcdFx0dGhpcy5iRG9uZSA9IHRydWVcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iXX0=
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
var Environment_1 = require("../src/app/gamedata/Environment");
var Eating_1 = require("./Eating");
var Equip_1 = require("./Equip");
var Fire_1 = require("./Fire");
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
        return _this;
    }
    Env.prototype.start = function () {
        Environment_1.Environment.toiletTarget = this.toilet;
        Environment_1.Environment.fireTarget = this.fire;
        Environment_1.Environment.eatingTarget = this.eating;
        Environment_1.Environment.equipTarget = this.equip;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0Vudi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrREFBOEQ7QUFDOUQsbUNBQThCO0FBQzlCLGlDQUE0QjtBQUM1QiwrQkFBMEI7QUFDMUIsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBbUJDO1FBakJHLFlBQU0sR0FBVyxJQUFJLENBQUE7UUFHckIsVUFBSSxHQUFXLElBQUksQ0FBQTtRQUduQixXQUFLLEdBQVcsSUFBSSxDQUFBO1FBR3BCLFlBQU0sR0FBVyxJQUFJLENBQUE7O0lBUXpCLENBQUM7SUFORyxtQkFBSyxHQUFMO1FBQ0kseUJBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUN0Qyx5QkFBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ2xDLHlCQUFXLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDdEMseUJBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUN4QyxDQUFDO0lBaEJEO1FBREMsUUFBUSxDQUFDLGdCQUFNLENBQUM7dUNBQ0k7SUFHckI7UUFEQyxRQUFRLENBQUMsY0FBSSxDQUFDO3FDQUNJO0lBR25CO1FBREMsUUFBUSxDQUFDLGVBQUssQ0FBQztzQ0FDSTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDO3VDQUNJO0lBWEosR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQW1CdkI7SUFBRCxVQUFDO0NBbkJELEFBbUJDLENBbkJnQyxFQUFFLENBQUMsU0FBUyxHQW1CNUM7a0JBbkJvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgRWF0aW5nIGZyb20gXCIuL0VhdGluZ1wiO1xuaW1wb3J0IEVxdWlwIGZyb20gXCIuL0VxdWlwXCI7XG5pbXBvcnQgRmlyZSBmcm9tIFwiLi9GaXJlXCI7XG5pbXBvcnQgVG9pbGV0IGZyb20gXCIuL1RvaWxldFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW52IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoVG9pbGV0KVxuICAgIHRvaWxldDogVG9pbGV0ID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KEZpcmUpXG4gICAgZmlyZTogVG9pbGV0ID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KEVxdWlwKVxuICAgIGVxdWlwOiBUb2lsZXQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoRWF0aW5nKVxuICAgIGVhdGluZzogVG9pbGV0ID0gbnVsbFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIEVudmlyb25tZW50LnRvaWxldFRhcmdldCA9IHRoaXMudG9pbGV0XG4gICAgICAgIEVudmlyb25tZW50LmZpcmVUYXJnZXQgPSB0aGlzLmZpcmVcbiAgICAgICAgRW52aXJvbm1lbnQuZWF0aW5nVGFyZ2V0ID0gdGhpcy5lYXRpbmdcbiAgICAgICAgRW52aXJvbm1lbnQuZXF1aXBUYXJnZXQgPSB0aGlzLmVxdWlwXG4gICAgfVxufVxuIl19
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isTolietOk, true); // we need a tool to do this
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isEatOk, false); // we need a tool to do this
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isEatOk, true);
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isTolietOk, false);
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
    GotoEatAction.prototype.perform = function (iGoap) {
        var entity = iGoap;
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            entity.memory.set(ActionDataStatus_1.ActionDataStatus.isEatOk, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0dvdG9FYXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEyRDtBQUczRCwrREFBOEQ7QUFDOUQsa0RBQTZDO0FBQzdDLHVEQUFzRDtBQUd0RDtJQUFtQyxpQ0FBVTtJQUk1QztRQUFBLFlBQ0MsaUJBQU8sU0FLUDtRQVRPLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFHM0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7UUFDckYsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQ0FBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7UUFDbkYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7O0lBQ3BELENBQUM7SUFFTSw2QkFBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVNLHVDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ00sbURBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcseUJBQVcsQ0FBQyxZQUFZLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQTtRQUMxQixpREFBaUQ7UUFDakQsc0RBQXNEO1FBQ3RELHFDQUFxQztRQUNyQywrQkFBK0I7UUFFL0IsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQix1Q0FBdUM7UUFDdkMsb0JBQW9CO1FBQ3BCLDhDQUE4QztRQUM5QyxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLG1EQUFtRDtRQUNuRCw4QkFBOEI7UUFDOUIsc0NBQXNDO1FBQ3RDLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsTUFBTTtRQUNOLEtBQUs7UUFDTCxJQUFJO1FBQ0osdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUVqQix5QkFBeUI7UUFFekIsMEJBQTBCO0lBQzNCLENBQUM7SUFFTSwrQkFBTyxHQUFkLFVBQWUsS0FBWTtRQUMxQixJQUFJLE1BQU0sR0FBRyxLQUFlLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXJDLElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDNUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1NBQ2pCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0Ysb0JBQUM7QUFBRCxDQWxFQSxBQWtFQyxDQWxFa0MsdUJBQVUsR0FrRTVDO0FBbEVZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCI7XG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL3NyYy9hcHAvZ2FtZWRhdGEvRW52aXJvbm1lbnRcIjtcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCI7XG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uRGF0YVN0YXR1c1wiO1xuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHlcIjtcblxuZXhwb3J0IGNsYXNzIEdvdG9FYXRBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcblx0cHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIHdvcmtEdXJhdGlvbjogbnVtYmVyID0gMjsgLy8gc2Vjb25kc1xuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRydWUpOyAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uRGF0YVN0YXR1cy5pc0VhdE9rLCBmYWxzZSk7IC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzRWF0T2ssIHRydWUpO1xuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMuaXNUb2xpZXRPaywgZmFsc2UpO1xuXHR9XG5cblx0cHVibGljIHJlc2V0KCk6IHZvaWQge1xuXHRcdHRoaXMuYkRvbmUgPSBmYWxzZTtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdH1cblxuXHRwdWJsaWMgaXNEb25lKCkge1xuXHRcdHJldHVybiB0aGlzLmJEb25lO1xuXHR9XG5cblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xuXHRcdHRoaXMudGFyZ2V0ID0gRW52aXJvbm1lbnQuZWF0aW5nVGFyZ2V0O1xuXHRcdHJldHVybiB0aGlzLnRhcmdldCAhPSBudWxsXG5cdFx0Ly8gLy8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHRyZWUgdGhhdCB3ZSBjYW4gY2hvcFxuXHRcdC8vIGxldCB0cmVlczogVHJlZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQudHJlZUNvbXBzO1xuXHRcdC8vIGxldCBjbG9zZXN0OiBUcmVlQ29tcG9uZW50ID0gbnVsbDtcblx0XHQvLyBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cblx0XHQvLyBmb3IgKGxldCB0cmVlIG9mIHRyZWVzKSB7XG5cdFx0Ly8gXHRpZiAoY2xvc2VzdCA9PSBudWxsKSB7XG5cdFx0Ly8gXHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcblx0XHQvLyBcdFx0Y2xvc2VzdCA9IHRyZWU7XG5cdFx0Ly8gXHRcdGNsb3Nlc3REaXN0ID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0Ly8gXHR9IGVsc2Uge1xuXHRcdC8vIFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cblx0XHQvLyBcdFx0bGV0IGRpc3Q6IG51bWJlciA9IHRyZWUuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuXHRcdC8vIFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG5cdFx0Ly8gXHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcblx0XHQvLyBcdFx0XHRjbG9zZXN0ID0gdHJlZTtcblx0XHQvLyBcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdFx0Ly8gaWYgKGNsb3Nlc3QgPT0gbnVsbClcblx0XHQvLyBcdHJldHVybiBmYWxzZTtcblxuXHRcdC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuXHRcdC8vIHJldHVybiBjbG9zZXN0ICE9IG51bGw7XG5cdH1cblxuXHRwdWJsaWMgcGVyZm9ybShpR29hcDogSUdvYXApOiBib29sZWFuIHtcblx0XHRsZXQgZW50aXR5ID0gaUdvYXAgYXMgRW50aXR5O1xuXHRcdGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKVxuXHRcdFx0dGhpcy5zdGFydFRpbWUgPSBUaW1lVXRpbC5nZXRUaW1lKCk7XG5cblx0XHRpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLndvcmtEdXJhdGlvbikge1xuXHRcdFx0ZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VhdE9rLCB0cnVlKVxuXHRcdFx0dGhpcy5iRG9uZSA9IHRydWVcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iXX0=
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
    GotoFireAction.prototype.perform = function (iGoap) {
        var entity = iGoap;
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            entity.memory.set(ActionDataStatus_1.ActionDataStatus.isFireOk, true);
            this.bDone = true;
            entity.memory.set(ActionDataStatus_1.ActionDataStatus.isTolietOk, false);
            entity.memory.set(ActionDataStatus_1.ActionDataStatus.isEatOk, false);
            entity.memory.set(ActionDataStatus_1.ActionDataStatus.isEquipOk, false);
            entity.memory.set(ActionDataStatus_1.ActionDataStatus.isFireOk, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0dvdG9GaXJlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBMkQ7QUFHM0QsK0RBQThEO0FBQzlELGtEQUE2QztBQUM3Qyx1REFBc0Q7QUFHdEQ7SUFBb0Msa0NBQVU7SUFJN0M7UUFBQSxZQUNDLGlCQUFPLFNBS1A7UUFUTyxXQUFLLEdBQVksS0FBSyxDQUFBO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsa0JBQVksR0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVO1FBRzNDLEtBQUksQ0FBQyxlQUFlLENBQUMsbUNBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1FBQ3BGLEtBQUksQ0FBQyxlQUFlLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1FBQ3BGLEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9DLEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBOztJQUNsRCxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFTSx3Q0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNNLG9EQUEyQixHQUFsQyxVQUFtQyxLQUFrQjtRQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLHlCQUFXLENBQUMsVUFBVSxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUE7UUFDMUIsaURBQWlEO1FBQ2pELHNEQUFzRDtRQUN0RCxxQ0FBcUM7UUFDckMsK0JBQStCO1FBRS9CLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsdUNBQXVDO1FBQ3ZDLG9CQUFvQjtRQUNwQiw4Q0FBOEM7UUFDOUMsWUFBWTtRQUNaLHlDQUF5QztRQUN6QyxtREFBbUQ7UUFDbkQsOEJBQThCO1FBQzlCLHNDQUFzQztRQUN0QyxxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLE1BQU07UUFDTixLQUFLO1FBQ0wsSUFBSTtRQUNKLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFFakIseUJBQXlCO1FBRXpCLDBCQUEwQjtJQUMzQixDQUFDO0lBRU0sZ0NBQU8sR0FBZCxVQUFlLEtBQVk7UUFDMUIsSUFBSSxNQUFNLEdBQUcsS0FBZSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVyQyxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVELE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUNsRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtZQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDckQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ2xELE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUNwRCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7U0FDbkQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRixxQkFBQztBQUFELENBdEVBLEFBc0VDLENBdEVtQyx1QkFBVSxHQXNFN0M7QUF0RVksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvSUdvYXBcIjtcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9nYW1lZGF0YS9FbnZpcm9ubWVudFwiO1xuaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi9zcmMvdXRpbHMvVGltZVV0aWxcIjtcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25EYXRhU3RhdHVzXCI7XG5pbXBvcnQgRW50aXR5IGZyb20gXCIuL0VudGl0eVwiO1xuXG5leHBvcnQgY2xhc3MgR290b0ZpcmVBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcblx0cHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIHdvcmtEdXJhdGlvbjogbnVtYmVyID0gMjsgLy8gc2Vjb25kc1xuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rLCBmYWxzZSk7IC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25EYXRhU3RhdHVzLmlzRXF1aXBPaywgdHJ1ZSk7IC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLm91dEZpcmUsIHRydWUpO1xuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCBmYWxzZSlcblx0fVxuXG5cdHB1YmxpYyByZXNldCgpOiB2b2lkIHtcblx0XHR0aGlzLmJEb25lID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5iRG9uZTtcblx0fVxuXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuIHtcblx0XHR0aGlzLnRhcmdldCA9IEVudmlyb25tZW50LmZpcmVUYXJnZXQ7XG5cdFx0cmV0dXJuIHRoaXMudGFyZ2V0ICE9IG51bGxcblx0XHQvLyAvLyBUT0RPOmZpbmQgdGhlIG5lYXJlc3QgdHJlZSB0aGF0IHdlIGNhbiBjaG9wXG5cdFx0Ly8gbGV0IHRyZWVzOiBUcmVlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC50cmVlQ29tcHM7XG5cdFx0Ly8gbGV0IGNsb3Nlc3Q6IFRyZWVDb21wb25lbnQgPSBudWxsO1xuXHRcdC8vIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcblxuXHRcdC8vIGZvciAobGV0IHRyZWUgb2YgdHJlZXMpIHtcblx0XHQvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcblx0XHQvLyBcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuXHRcdC8vIFx0XHRjbG9zZXN0ID0gdHJlZTtcblx0XHQvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHQvLyBcdH0gZWxzZSB7XG5cdFx0Ly8gXHRcdC8vIGlzIHRoaXMgb25lIGNsb3NlciB0aGFuIHRoZSBsYXN0P1xuXHRcdC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0Ly8gXHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcblx0XHQvLyBcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xuXHRcdC8vIFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcblx0XHQvLyBcdFx0fVxuXHRcdC8vIFx0fVxuXHRcdC8vIH1cblx0XHQvLyBpZiAoY2xvc2VzdCA9PSBudWxsKVxuXHRcdC8vIFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0Ly8gdGhpcy50YXJnZXQgPSBjbG9zZXN0O1xuXG5cdFx0Ly8gcmV0dXJuIGNsb3Nlc3QgIT0gbnVsbDtcblx0fVxuXG5cdHB1YmxpYyBwZXJmb3JtKGlHb2FwOiBJR29hcCk6IGJvb2xlYW4ge1xuXHRcdGxldCBlbnRpdHkgPSBpR29hcCBhcyBFbnRpdHk7XG5cdFx0aWYgKHRoaXMuc3RhcnRUaW1lID09IDApXG5cdFx0XHR0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKTtcblxuXHRcdGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XG5cdFx0XHRlbnRpdHkubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rLCB0cnVlKVxuXHRcdFx0dGhpcy5iRG9uZSA9IHRydWVcblx0XHRcdGVudGl0eS5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNUb2xpZXRPaywgZmFsc2UpXG5cdFx0XHRlbnRpdHkubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRWF0T2ssIGZhbHNlKVxuXHRcdFx0ZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIGZhbHNlKVxuXHRcdFx0ZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0ZpcmVPaywgZmFsc2UpXG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59Il19
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isEquipOk, false); // we need a tool to do this
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isEatOk, true); // we need a tool to do this
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isEatOk, false);
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
    GotoEquipmentAction.prototype.perform = function (iGoap) {
        var entity = iGoap;
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            entity.memory.set(ActionDataStatus_1.ActionDataStatus.isEquipOk, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0dvdG9FcXVpcG1lbnRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEyRDtBQUczRCwrREFBOEQ7QUFDOUQsa0RBQTZDO0FBQzdDLHVEQUFzRDtBQUd0RDtJQUF5Qyx1Q0FBVTtJQUlsRDtRQUFBLFlBQ0MsaUJBQU8sU0FLUDtRQVRPLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFHM0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7UUFDckYsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQ0FBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7UUFDbEYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQ2xELENBQUM7SUFFTSxtQ0FBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLG9DQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVNLDZDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ00seURBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcseUJBQVcsQ0FBQyxXQUFXLENBQUM7UUFDdEMsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQTtRQUMxQixpREFBaUQ7UUFDakQsc0RBQXNEO1FBQ3RELHFDQUFxQztRQUNyQywrQkFBK0I7UUFFL0IsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQix1Q0FBdUM7UUFDdkMsb0JBQW9CO1FBQ3BCLDhDQUE4QztRQUM5QyxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLG1EQUFtRDtRQUNuRCw4QkFBOEI7UUFDOUIsc0NBQXNDO1FBQ3RDLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsTUFBTTtRQUNOLEtBQUs7UUFDTCxJQUFJO1FBQ0osdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUVqQix5QkFBeUI7UUFFekIsMEJBQTBCO0lBQzNCLENBQUM7SUFFTSxxQ0FBTyxHQUFkLFVBQWUsS0FBWTtRQUMxQixJQUFJLE1BQU0sR0FBRyxLQUFlLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXJDLElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDNUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1NBQ2pCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YsMEJBQUM7QUFBRCxDQWxFQSxBQWtFQyxDQWxFd0MsdUJBQVUsR0FrRWxEO0FBbEVZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIjtcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcFwiO1xuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uL3NyYy91dGlscy9UaW1lVXRpbFwiO1xuaW1wb3J0IHsgQWN0aW9uRGF0YVN0YXR1cyB9IGZyb20gXCIuL0FjdGlvbkRhdGFTdGF0dXNcIjtcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4vRW50aXR5XCI7XG5cbmV4cG9ydCBjbGFzcyBHb3RvRXF1aXBtZW50QWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG5cdHByaXZhdGUgYkRvbmU6IGJvb2xlYW4gPSBmYWxzZVxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSB3b3JrRHVyYXRpb246IG51bWJlciA9IDI7IC8vIHNlY29uZHNcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIGZhbHNlKTsgLy8gd2UgbmVlZCBhIHRvb2wgdG8gZG8gdGhpc1xuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvbkRhdGFTdGF0dXMuaXNFYXRPaywgdHJ1ZSk7IC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzRWF0T2ssIGZhbHNlKTtcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzRXF1aXBPaywgdHJ1ZSk7XG5cdH1cblxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG5cdFx0dGhpcy5iRG9uZSA9IGZhbHNlO1xuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcblx0fVxuXG5cdHB1YmxpYyBpc0RvbmUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYkRvbmU7XG5cdH1cblxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IFZHYW1lT2JqZWN0KTogYm9vbGVhbiB7XG5cdFx0dGhpcy50YXJnZXQgPSBFbnZpcm9ubWVudC5lcXVpcFRhcmdldDtcblx0XHRyZXR1cm4gdGhpcy50YXJnZXQgIT0gbnVsbFxuXHRcdC8vIC8vIFRPRE86ZmluZCB0aGUgbmVhcmVzdCB0cmVlIHRoYXQgd2UgY2FuIGNob3Bcblx0XHQvLyBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcblx0XHQvLyBsZXQgY2xvc2VzdDogVHJlZUNvbXBvbmVudCA9IG51bGw7XG5cdFx0Ly8gbGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwO1xuXG5cdFx0Ly8gZm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xuXHRcdC8vIFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuXHRcdC8vIFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XG5cdFx0Ly8gXHRcdGNsb3Nlc3QgPSB0cmVlO1xuXHRcdC8vIFx0XHRjbG9zZXN0RGlzdCA9IHRyZWUuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuXHRcdC8vIFx0fSBlbHNlIHtcblx0XHQvLyBcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG5cdFx0Ly8gXHRcdGxldCBkaXN0OiBudW1iZXIgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHQvLyBcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xuXHRcdC8vIFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG5cdFx0Ly8gXHRcdFx0Y2xvc2VzdCA9IHRyZWU7XG5cdFx0Ly8gXHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xuXHRcdC8vIFx0XHR9XG5cdFx0Ly8gXHR9XG5cdFx0Ly8gfVxuXHRcdC8vIGlmIChjbG9zZXN0ID09IG51bGwpXG5cdFx0Ly8gXHRyZXR1cm4gZmFsc2U7XG5cblx0XHQvLyB0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XG5cblx0XHQvLyByZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuXHR9XG5cblx0cHVibGljIHBlcmZvcm0oaUdvYXA6IElHb2FwKTogYm9vbGVhbiB7XG5cdFx0bGV0IGVudGl0eSA9IGlHb2FwIGFzIEVudGl0eTtcblx0XHRpZiAodGhpcy5zdGFydFRpbWUgPT0gMClcblx0XHRcdHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpO1xuXG5cdFx0aWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy53b3JrRHVyYXRpb24pIHtcblx0XHRcdGVudGl0eS5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCB0cnVlKVxuXHRcdFx0dGhpcy5iRG9uZSA9IHRydWVcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0ZpcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBRXBELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQW9DLHdCQUFXO0lBQS9DOztJQUVBLENBQUM7SUFGc0IsSUFBSTtRQUQxQixPQUFPO09BQ2UsSUFBSSxDQUUxQjtJQUFELFdBQUM7Q0FGRCxBQUVDLENBRm1DLHlCQUFXLEdBRTlDO2tCQUZzQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tICcuLi9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3QnO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgICBkZWZhdWx0IGNsYXNzIEZpcmUgZXh0ZW5kcyBWR2FtZU9iamVjdCB7XG4gICBcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
