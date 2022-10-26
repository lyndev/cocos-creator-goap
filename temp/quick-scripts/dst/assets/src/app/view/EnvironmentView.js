
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXHZpZXdcXEVudmlyb25tZW50Vmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQWtFO0FBQ2xFLDZFQUE0RTtBQUM1RSx1REFBc0Q7QUFDdEQsNkRBQTREO0FBQzVELG1FQUFrRTtBQUNsRSwrREFBOEQ7QUFDOUQsdURBQXNEO0FBQ3RELHFEQUFvRDtBQUNwRCwrREFBOEQ7QUFDOUQsdUVBQXNFO0FBQ3RFLDJEQUEwRDtBQUNwRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFxQyxtQ0FBWTtJQUFqRDtRQUFBLHFFQXdGQztRQXRGTyxxQkFBZSxHQUF3QixJQUFJLENBQUM7UUFFNUMscUJBQWUsR0FBd0IsSUFBSSxDQUFDO1FBRzNDLG1CQUFhLEdBQXNCLElBQUksQ0FBQTtRQUV2QyxtQkFBYSxHQUFzQixJQUFJLENBQUE7UUFFdkMsbUJBQWEsR0FBc0IsSUFBSSxDQUFBO1FBR3hDLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBR2hDLHVCQUFpQixHQUEyQixJQUFJLENBQUM7UUFFakQsZUFBUyxHQUFtQixJQUFJLENBQUM7UUFHakMsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIsWUFBTSxHQUFXLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBRXBCLGdCQUFVLEdBQWUsSUFBSSxDQUFDO1FBRXJDLGFBQU8sR0FBRyxDQUFDLENBQUE7O0lBb0RaLENBQUM7SUFuREEsK0JBQUssR0FBTDtRQUNDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8seUNBQWUsR0FBdkI7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QyxRQUFRLENBQUMsNkJBQWEsQ0FBQztzREFDZTtJQUd2QztRQURDLFFBQVEsQ0FBQywrQ0FBc0IsQ0FBQzs4REFDdUI7SUFFeEQ7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQztzREFDZTtJQUd4QztRQURDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDO3VEQUNnQjtJQUVyQztRQURDLFFBQVEsQ0FBQyxlQUFNLENBQUM7bURBQ1k7SUFFN0I7UUFEQyxRQUFRLENBQUMsYUFBSyxDQUFDO2tEQUNXO0lBRTNCO1FBREMsUUFBUSxDQUFDLHVCQUFVLENBQUM7dURBQ2dCO0lBbEN6QixlQUFlO1FBRDNCLE9BQU87T0FDSyxlQUFlLENBd0YzQjtJQUFELHNCQUFDO0NBeEZELEFBd0ZDLENBeEZvQyxFQUFFLENBQUMsU0FBUyxHQXdGaEQ7QUF4RlksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9nYW1lZGF0YS9CYWNrUGFja0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaG9wcGluZ0Jsb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dhbWVkYXRhL0Nob3BwaW5nQmxvY2tDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IHsgRm9yZ2VDb21wb25lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvRm9yZ2VDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSXJvblJvY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvSXJvblJvY2tDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQmxhY2tzbWl0aCB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvQmxhY2tzbWl0aFwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvbGFib3VyZXJzL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBNaW5lciB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvTWluZXJcIjtcclxuaW1wb3J0IHsgV29vZEN1dHRlciB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvV29vZEN1dHRlclwiO1xyXG5pbXBvcnQgeyBTdXBwbHlQaWxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dhbWVkYXRhL1N1cHBseVBpbGVDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVHJlZUNvbXBvbmVudCB9IGZyb20gXCIuLi9nYW1lZGF0YS9UcmVlQ29tcG9uZW50XCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudFZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdEBwcm9wZXJ0eShTdXBwbHlQaWxlQ29tcG9uZW50KVxyXG5cdHB1YmxpYyBzdXBwbHlQaWxlQ29tcDE6IFN1cHBseVBpbGVDb21wb25lbnQgPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShTdXBwbHlQaWxlQ29tcG9uZW50KVxyXG5cdHB1YmxpYyBzdXBwbHlQaWxlQ29tcDI6IFN1cHBseVBpbGVDb21wb25lbnQgPSBudWxsO1xyXG5cclxuXHRAcHJvcGVydHkoSXJvblJvY2tDb21wb25lbnQpXHJcblx0cHJpdmF0ZSBpcm9uUm9ja0NvbXAxOiBJcm9uUm9ja0NvbXBvbmVudCA9IG51bGxcclxuXHRAcHJvcGVydHkoSXJvblJvY2tDb21wb25lbnQpXHJcblx0cHJpdmF0ZSBpcm9uUm9ja0NvbXAyOiBJcm9uUm9ja0NvbXBvbmVudCA9IG51bGxcclxuXHRAcHJvcGVydHkoSXJvblJvY2tDb21wb25lbnQpXHJcblx0cHJpdmF0ZSBpcm9uUm9ja0NvbXAzOiBJcm9uUm9ja0NvbXBvbmVudCA9IG51bGxcclxuXHJcblx0QHByb3BlcnR5KFRyZWVDb21wb25lbnQpXHJcblx0cHVibGljIHRyZWVDb21wMTogVHJlZUNvbXBvbmVudCA9IG51bGw7XHJcblx0QHByb3BlcnR5KFRyZWVDb21wb25lbnQpXHJcblx0cHVibGljIHRyZWVDb21wMjogVHJlZUNvbXBvbmVudCA9IG51bGw7XHJcblx0QHByb3BlcnR5KFRyZWVDb21wb25lbnQpXHJcblx0cHVibGljIHRyZWVDb21wMzogVHJlZUNvbXBvbmVudCA9IG51bGw7XHJcblx0QHByb3BlcnR5KFRyZWVDb21wb25lbnQpXHJcblx0cHVibGljIHRyZWVDb21wNDogVHJlZUNvbXBvbmVudCA9IG51bGw7XHJcblxyXG5cdEBwcm9wZXJ0eShDaG9wcGluZ0Jsb2NrQ29tcG9uZW50KVxyXG5cdHB1YmxpYyBjaG9wcGluZ0Jsb2NrQ29tcDogQ2hvcHBpbmdCbG9ja0NvbXBvbmVudCA9IG51bGw7XHJcblx0QHByb3BlcnR5KEZvcmdlQ29tcG9uZW50KVxyXG5cdHB1YmxpYyBmb3JnZUNvbXA6IEZvcmdlQ29tcG9uZW50ID0gbnVsbDtcclxuXHJcblx0QHByb3BlcnR5KEJsYWNrc21pdGgpXHJcblx0cHVibGljIGJsYWNrU21pdGg6IEJsYWNrc21pdGggPSBudWxsO1xyXG5cdEBwcm9wZXJ0eShMb2dnZXIpXHJcblx0cHVibGljIGxvZ2dlcjogTG9nZ2VyID0gbnVsbDtcclxuXHRAcHJvcGVydHkoTWluZXIpXHJcblx0cHVibGljIG1pbmVyOiBNaW5lciA9IG51bGw7XHJcblx0QHByb3BlcnR5KFdvb2RDdXR0ZXIpXHJcblx0cHVibGljIHdvb2RDdXR0ZXI6IFdvb2RDdXR0ZXIgPSBudWxsO1xyXG5cclxuXHRjdXJUaW1lID0gMFxyXG5cdHN0YXJ0KCkge1xyXG5cdFx0dGhpcy5pbml0RW52aXJvbm1lbnQoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdEVudmlyb25tZW50KCkge1xyXG5cdFx0RW52aXJvbm1lbnQuc3VwcGx5UGlsZUNvbXBzID0gW3RoaXMuc3VwcGx5UGlsZUNvbXAxLCB0aGlzLnN1cHBseVBpbGVDb21wMl07XHJcblx0XHRFbnZpcm9ubWVudC5yb2NrQ29tcHMgPSBbdGhpcy5pcm9uUm9ja0NvbXAxLCB0aGlzLmlyb25Sb2NrQ29tcDIsIHRoaXMuaXJvblJvY2tDb21wM107XHJcblx0XHRFbnZpcm9ubWVudC50cmVlQ29tcHMgPSBbdGhpcy50cmVlQ29tcDEsIHRoaXMudHJlZUNvbXAyLCB0aGlzLnRyZWVDb21wMywgdGhpcy50cmVlQ29tcDRdO1xyXG5cclxuXHRcdEVudmlyb25tZW50LmZvcmdlQ29tcHMgPSBbdGhpcy5mb3JnZUNvbXBdO1xyXG5cdFx0RW52aXJvbm1lbnQuY2hvcHBpbmdCbG9ja0NvbXBzID0gW3RoaXMuY2hvcHBpbmdCbG9ja0NvbXBdO1xyXG5cclxuXHJcblx0XHQvLyDorr7nva5iYWNrcGFja1xyXG5cdFx0bGV0IHNtaXRoQlAgPSBuZXcgQmFja1BhY2tDb21wb25lbnQoMCwgMCwgMCk7XHJcblx0XHR0aGlzLmJsYWNrU21pdGguc2V0QmFja1BhY2soc21pdGhCUCk7XHJcblxyXG5cdFx0bGV0IGxvZ2dlckJQID0gbmV3IEJhY2tQYWNrQ29tcG9uZW50KDAsIDAsIDApO1xyXG5cdFx0dGhpcy5sb2dnZXIuc2V0QmFja1BhY2sobG9nZ2VyQlApO1xyXG5cclxuXHRcdGxldCBtaW5lckJQID0gbmV3IEJhY2tQYWNrQ29tcG9uZW50KDAsIDAsIDApO1xyXG5cdFx0dGhpcy5taW5lci5zZXRCYWNrUGFjayhtaW5lckJQKTtcclxuXHJcblx0XHRsZXQgd29vZEN1dHRlckJQID0gbmV3IEJhY2tQYWNrQ29tcG9uZW50KDAsIDAsIDApO1xyXG5cdFx0dGhpcy53b29kQ3V0dGVyLnNldEJhY2tQYWNrKHdvb2RDdXR0ZXJCUCk7XHJcblxyXG5cdFx0dGhpcy5zdGFydFRpY2soKTtcclxuXHRcdC8vIHRoaXMudXBkYXRlKDMpO1xyXG5cdH1cclxuXHQvKirlvIDlp4vmuLjmiI9zdGljayAqL1xyXG5cdHB1YmxpYyBzdGFydFRpY2soKSB7XHJcblx0XHQvL3RoaXMubGFzdFRpbWVTdGFtcCA9IFRpbWVVdGlsLmdldFRpbWUoKTtcclxuXHRcdC8vXHRlZ3JldC5zdGFydFRpY2sodGhpcy51cGRhdGVUaW1lU3RhbXAsIHRoaXMpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBsYXN0VGltZVN0YW1wOiBudW1iZXI7XHJcblx0cHJpdmF0ZSB1cGRhdGVUaW1lU3RhbXAodGltZVN0YW1wKTogYm9vbGVhbiB7XHJcblx0XHR0aGlzLnVwZGF0ZSh0aW1lU3RhbXAgLSB0aGlzLmxhc3RUaW1lU3RhbXApO1xyXG5cdFx0dGhpcy5sYXN0VGltZVN0YW1wID0gdGltZVN0YW1wO1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHB1YmxpYyB1cGRhdGUoZHQpIHtcclxuXHRcdC8vdGhpcy5jdXJUaW1lIC09IGR0XHJcblx0XHQvL2lmICh0aGlzLmN1clRpbWUgPD0gMCkge1xyXG5cdFx0Ly90aGlzLmN1clRpbWUgPSAxXHJcblx0XHR0aGlzLm1pbmVyLnVwZGF0ZShkdCk7XHJcblx0XHR0aGlzLmJsYWNrU21pdGgudXBkYXRlKGR0KTtcclxuXHRcdHRoaXMubG9nZ2VyLnVwZGF0ZShkdCk7XHJcblx0XHR0aGlzLndvb2RDdXR0ZXIudXBkYXRlKGR0KTtcclxuXHRcdC8vfVxyXG5cdH1cclxufSJdfQ==