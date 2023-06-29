
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