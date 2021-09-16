
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy9CbGFja3NtaXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsb0VBQW1FO0FBQ25FLDhEQUE2RDtBQUM3RCw4REFBNkQ7QUFDN0QsdUNBQXNDO0FBQ2hDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWdDLDhCQUFRO0lBQXhDOztJQWlCQSxDQUFDO0lBaEJVLHlDQUFvQixHQUE5QjtRQUNDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLGlDQUFlLEVBQUUsdUNBQWtCLEVBQUUsaUNBQWUsQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUNEOzs7T0FHRztJQUNJLG9DQUFlLEdBQXRCO1FBQ0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyQkFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTSxtQ0FBYyxHQUFyQjtRQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQWhCVyxVQUFVO1FBRHRCLE9BQU87T0FDSyxVQUFVLENBaUJ0QjtJQUFELGlCQUFDO0NBakJELEFBaUJDLENBakIrQixtQkFBUSxHQWlCdkM7QUFqQlksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIjtcbmltcG9ydCB7IERyb3BPZmZUb29sc0FjdGlvbiB9IGZyb20gXCIuLi9hY3Rpb25zL0Ryb3BPZmZUb29sc0FjdGlvblwiO1xuaW1wb3J0IHsgRm9yZ2VUb29sQWN0aW9uIH0gZnJvbSBcIi4uL2FjdGlvbnMvRm9yZ2VUb29sQWN0aW9uXCI7XG5pbXBvcnQgeyBQaWNrVXBPcmVBY3Rpb24gfSBmcm9tIFwiLi4vYWN0aW9ucy9QaWNrVXBPcmVBY3Rpb25cIjtcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4vTGFib3VyZXJcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIEJsYWNrc21pdGggZXh0ZW5kcyBMYWJvdXJlciB7XG5cdHByb3RlY3RlZCBpbml0QXZhbGlhYmxlQWN0aW9ucygpIHtcblx0XHR0aGlzLnRvSW5pdEF2YWxpYWJsZUFjdGlvbnMoW0ZvcmdlVG9vbEFjdGlvbiwgRHJvcE9mZlRvb2xzQWN0aW9uLCBQaWNrVXBPcmVBY3Rpb25dKTtcblx0fVxuXHQvKipcblx0ICogT3VyIG9ubHkgZ29hbCB3aWxsIGV2ZXIgYmUgdG8gbWFrZSB0b29scy5cblx0ICogVGhlIEZvcmdlVG9vbGRBY3Rpb24gd2lsbCBiZSBhYmxlIHRvIGZ1bGZpbGwgdGhpcyBnb2FsLlxuXHQgKi9cblx0cHVibGljIGNyZWF0ZUdvYWxTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+IHtcblx0XHRsZXQgZ29hbCA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KCk7XG5cdFx0Z29hbC5zZXQoQWN0aW9uU3RhdHVzLkNvbGxlY3RUb29scywgdHJ1ZSk7XG5cdFx0cmV0dXJuIGdvYWw7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlQmFja1BhY2soKSB7XG5cdFx0Y29uc29sZS5sb2coXCLnn7/nn7PvvJpcIiArIHRoaXMuYmFja3BhY2subnVtT3JlKVxuXHR9XG59Il19