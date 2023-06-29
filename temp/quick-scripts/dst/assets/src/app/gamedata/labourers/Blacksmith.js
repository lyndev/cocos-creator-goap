
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