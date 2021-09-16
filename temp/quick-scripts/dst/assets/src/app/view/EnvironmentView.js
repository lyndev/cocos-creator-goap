
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL3ZpZXcvRW52aXJvbm1lbnRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBa0U7QUFDbEUsNkVBQTRFO0FBQzVFLHVEQUFzRDtBQUN0RCw2REFBNEQ7QUFDNUQsbUVBQWtFO0FBQ2xFLCtEQUE4RDtBQUM5RCx1REFBc0Q7QUFDdEQscURBQW9EO0FBQ3BELCtEQUE4RDtBQUM5RCx1RUFBc0U7QUFDdEUsMkRBQTBEO0FBQ3BELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXFDLG1DQUFZO0lBQWpEO1FBQUEscUVBd0ZDO1FBdEZPLHFCQUFlLEdBQXdCLElBQUksQ0FBQztRQUU1QyxxQkFBZSxHQUF3QixJQUFJLENBQUM7UUFHM0MsbUJBQWEsR0FBc0IsSUFBSSxDQUFBO1FBRXZDLG1CQUFhLEdBQXNCLElBQUksQ0FBQTtRQUV2QyxtQkFBYSxHQUFzQixJQUFJLENBQUE7UUFHeEMsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFrQixJQUFJLENBQUM7UUFHaEMsdUJBQWlCLEdBQTJCLElBQUksQ0FBQztRQUVqRCxlQUFTLEdBQW1CLElBQUksQ0FBQztRQUdqQyxnQkFBVSxHQUFlLElBQUksQ0FBQztRQUU5QixZQUFNLEdBQVcsSUFBSSxDQUFDO1FBRXRCLFdBQUssR0FBVSxJQUFJLENBQUM7UUFFcEIsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFckMsYUFBTyxHQUFHLENBQUMsQ0FBQTs7SUFvRFosQ0FBQztJQW5EQSwrQkFBSyxHQUFMO1FBQ0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyx5Q0FBZSxHQUF2QjtRQUND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QVEsQ0FBQyw2QkFBYSxDQUFDO3NEQUNlO0lBR3ZDO1FBREMsUUFBUSxDQUFDLCtDQUFzQixDQUFDOzhEQUN1QjtJQUV4RDtRQURDLFFBQVEsQ0FBQywrQkFBYyxDQUFDO3NEQUNlO0lBR3hDO1FBREMsUUFBUSxDQUFDLHVCQUFVLENBQUM7dURBQ2dCO0lBRXJDO1FBREMsUUFBUSxDQUFDLGVBQU0sQ0FBQzttREFDWTtJQUU3QjtRQURDLFFBQVEsQ0FBQyxhQUFLLENBQUM7a0RBQ1c7SUFFM0I7UUFEQyxRQUFRLENBQUMsdUJBQVUsQ0FBQzt1REFDZ0I7SUFsQ3pCLGVBQWU7UUFEM0IsT0FBTztPQUNLLGVBQWUsQ0F3RjNCO0lBQUQsc0JBQUM7Q0F4RkQsQUF3RkMsQ0F4Rm9DLEVBQUUsQ0FBQyxTQUFTLEdBd0ZoRDtBQXhGWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dhbWVkYXRhL0JhY2tQYWNrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBDaG9wcGluZ0Jsb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dhbWVkYXRhL0Nob3BwaW5nQmxvY2tDb21wb25lbnRcIjtcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL2dhbWVkYXRhL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBGb3JnZUNvbXBvbmVudCB9IGZyb20gXCIuLi9nYW1lZGF0YS9Gb3JnZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXJvblJvY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvSXJvblJvY2tDb21wb25lbnRcIjtcbmltcG9ydCB7IEJsYWNrc21pdGggfSBmcm9tIFwiLi4vZ2FtZWRhdGEvbGFib3VyZXJzL0JsYWNrc21pdGhcIjtcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvTG9nZ2VyXCI7XG5pbXBvcnQgeyBNaW5lciB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvTWluZXJcIjtcbmltcG9ydCB7IFdvb2RDdXR0ZXIgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvbGFib3VyZXJzL1dvb2RDdXR0ZXJcIjtcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvU3VwcGx5UGlsZUNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVHJlZUNvbXBvbmVudCB9IGZyb20gXCIuLi9nYW1lZGF0YS9UcmVlQ29tcG9uZW50XCI7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudFZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXHRAcHJvcGVydHkoU3VwcGx5UGlsZUNvbXBvbmVudClcblx0cHVibGljIHN1cHBseVBpbGVDb21wMTogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGw7XG5cdEBwcm9wZXJ0eShTdXBwbHlQaWxlQ29tcG9uZW50KVxuXHRwdWJsaWMgc3VwcGx5UGlsZUNvbXAyOiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbDtcblxuXHRAcHJvcGVydHkoSXJvblJvY2tDb21wb25lbnQpXG5cdHByaXZhdGUgaXJvblJvY2tDb21wMTogSXJvblJvY2tDb21wb25lbnQgPSBudWxsXG5cdEBwcm9wZXJ0eShJcm9uUm9ja0NvbXBvbmVudClcblx0cHJpdmF0ZSBpcm9uUm9ja0NvbXAyOiBJcm9uUm9ja0NvbXBvbmVudCA9IG51bGxcblx0QHByb3BlcnR5KElyb25Sb2NrQ29tcG9uZW50KVxuXHRwcml2YXRlIGlyb25Sb2NrQ29tcDM6IElyb25Sb2NrQ29tcG9uZW50ID0gbnVsbFxuXG5cdEBwcm9wZXJ0eShUcmVlQ29tcG9uZW50KVxuXHRwdWJsaWMgdHJlZUNvbXAxOiBUcmVlQ29tcG9uZW50ID0gbnVsbDtcblx0QHByb3BlcnR5KFRyZWVDb21wb25lbnQpXG5cdHB1YmxpYyB0cmVlQ29tcDI6IFRyZWVDb21wb25lbnQgPSBudWxsO1xuXHRAcHJvcGVydHkoVHJlZUNvbXBvbmVudClcblx0cHVibGljIHRyZWVDb21wMzogVHJlZUNvbXBvbmVudCA9IG51bGw7XG5cdEBwcm9wZXJ0eShUcmVlQ29tcG9uZW50KVxuXHRwdWJsaWMgdHJlZUNvbXA0OiBUcmVlQ29tcG9uZW50ID0gbnVsbDtcblxuXHRAcHJvcGVydHkoQ2hvcHBpbmdCbG9ja0NvbXBvbmVudClcblx0cHVibGljIGNob3BwaW5nQmxvY2tDb21wOiBDaG9wcGluZ0Jsb2NrQ29tcG9uZW50ID0gbnVsbDtcblx0QHByb3BlcnR5KEZvcmdlQ29tcG9uZW50KVxuXHRwdWJsaWMgZm9yZ2VDb21wOiBGb3JnZUNvbXBvbmVudCA9IG51bGw7XG5cblx0QHByb3BlcnR5KEJsYWNrc21pdGgpXG5cdHB1YmxpYyBibGFja1NtaXRoOiBCbGFja3NtaXRoID0gbnVsbDtcblx0QHByb3BlcnR5KExvZ2dlcilcblx0cHVibGljIGxvZ2dlcjogTG9nZ2VyID0gbnVsbDtcblx0QHByb3BlcnR5KE1pbmVyKVxuXHRwdWJsaWMgbWluZXI6IE1pbmVyID0gbnVsbDtcblx0QHByb3BlcnR5KFdvb2RDdXR0ZXIpXG5cdHB1YmxpYyB3b29kQ3V0dGVyOiBXb29kQ3V0dGVyID0gbnVsbDtcblxuXHRjdXJUaW1lID0gMFxuXHRzdGFydCgpIHtcblx0XHR0aGlzLmluaXRFbnZpcm9ubWVudCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0RW52aXJvbm1lbnQoKSB7XG5cdFx0RW52aXJvbm1lbnQuc3VwcGx5UGlsZUNvbXBzID0gW3RoaXMuc3VwcGx5UGlsZUNvbXAxLCB0aGlzLnN1cHBseVBpbGVDb21wMl07XG5cdFx0RW52aXJvbm1lbnQucm9ja0NvbXBzID0gW3RoaXMuaXJvblJvY2tDb21wMSwgdGhpcy5pcm9uUm9ja0NvbXAyLCB0aGlzLmlyb25Sb2NrQ29tcDNdO1xuXHRcdEVudmlyb25tZW50LnRyZWVDb21wcyA9IFt0aGlzLnRyZWVDb21wMSwgdGhpcy50cmVlQ29tcDIsIHRoaXMudHJlZUNvbXAzLCB0aGlzLnRyZWVDb21wNF07XG5cblx0XHRFbnZpcm9ubWVudC5mb3JnZUNvbXBzID0gW3RoaXMuZm9yZ2VDb21wXTtcblx0XHRFbnZpcm9ubWVudC5jaG9wcGluZ0Jsb2NrQ29tcHMgPSBbdGhpcy5jaG9wcGluZ0Jsb2NrQ29tcF07XG5cblxuXHRcdC8vIOiuvue9rmJhY2twYWNrXG5cdFx0bGV0IHNtaXRoQlAgPSBuZXcgQmFja1BhY2tDb21wb25lbnQoMCwgMCwgMCk7XG5cdFx0dGhpcy5ibGFja1NtaXRoLnNldEJhY2tQYWNrKHNtaXRoQlApO1xuXG5cdFx0bGV0IGxvZ2dlckJQID0gbmV3IEJhY2tQYWNrQ29tcG9uZW50KDAsIDAsIDApO1xuXHRcdHRoaXMubG9nZ2VyLnNldEJhY2tQYWNrKGxvZ2dlckJQKTtcblxuXHRcdGxldCBtaW5lckJQID0gbmV3IEJhY2tQYWNrQ29tcG9uZW50KDAsIDAsIDApO1xuXHRcdHRoaXMubWluZXIuc2V0QmFja1BhY2sobWluZXJCUCk7XG5cblx0XHRsZXQgd29vZEN1dHRlckJQID0gbmV3IEJhY2tQYWNrQ29tcG9uZW50KDAsIDAsIDApO1xuXHRcdHRoaXMud29vZEN1dHRlci5zZXRCYWNrUGFjayh3b29kQ3V0dGVyQlApO1xuXG5cdFx0dGhpcy5zdGFydFRpY2soKTtcblx0XHQvLyB0aGlzLnVwZGF0ZSgzKTtcblx0fVxuXHQvKirlvIDlp4vmuLjmiI9zdGljayAqL1xuXHRwdWJsaWMgc3RhcnRUaWNrKCkge1xuXHRcdC8vdGhpcy5sYXN0VGltZVN0YW1wID0gVGltZVV0aWwuZ2V0VGltZSgpO1xuXHRcdC8vXHRlZ3JldC5zdGFydFRpY2sodGhpcy51cGRhdGVUaW1lU3RhbXAsIHRoaXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBsYXN0VGltZVN0YW1wOiBudW1iZXI7XG5cdHByaXZhdGUgdXBkYXRlVGltZVN0YW1wKHRpbWVTdGFtcCk6IGJvb2xlYW4ge1xuXHRcdHRoaXMudXBkYXRlKHRpbWVTdGFtcCAtIHRoaXMubGFzdFRpbWVTdGFtcCk7XG5cdFx0dGhpcy5sYXN0VGltZVN0YW1wID0gdGltZVN0YW1wO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cdHB1YmxpYyB1cGRhdGUoZHQpIHtcblx0XHQvL3RoaXMuY3VyVGltZSAtPSBkdFxuXHRcdC8vaWYgKHRoaXMuY3VyVGltZSA8PSAwKSB7XG5cdFx0Ly90aGlzLmN1clRpbWUgPSAxXG5cdFx0dGhpcy5taW5lci51cGRhdGUoZHQpO1xuXHRcdHRoaXMuYmxhY2tTbWl0aC51cGRhdGUoZHQpO1xuXHRcdHRoaXMubG9nZ2VyLnVwZGF0ZShkdCk7XG5cdFx0dGhpcy53b29kQ3V0dGVyLnVwZGF0ZShkdCk7XG5cdFx0Ly99XG5cdH1cbn0iXX0=