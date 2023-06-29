
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL3ZpZXcvRW52aXJvbm1lbnRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBaUU7QUFDakUsNkVBQTJFO0FBQzNFLHVEQUFxRDtBQUNyRCw2REFBMkQ7QUFDM0QsbUVBQWlFO0FBQ2pFLCtEQUE2RDtBQUM3RCx1REFBcUQ7QUFDckQscURBQW1EO0FBQ25ELCtEQUE2RDtBQUM3RCx1RUFBcUU7QUFDckUsMkRBQXlEO0FBRW5ELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0FBRTNDO0lBQXFDLG1DQUFZO0lBQWpEO1FBQUEscUVBK0VDO1FBN0VVLHFCQUFlLEdBQXdCLElBQUksQ0FBQTtRQUczQyxxQkFBZSxHQUF3QixJQUFJLENBQUE7UUFHMUMsbUJBQWEsR0FBc0IsSUFBSSxDQUFBO1FBR3ZDLG1CQUFhLEdBQXNCLElBQUksQ0FBQTtRQUd2QyxtQkFBYSxHQUFzQixJQUFJLENBQUE7UUFHeEMsZUFBUyxHQUFrQixJQUFJLENBQUE7UUFHL0IsZUFBUyxHQUFrQixJQUFJLENBQUE7UUFHL0IsZUFBUyxHQUFrQixJQUFJLENBQUE7UUFHL0IsZUFBUyxHQUFrQixJQUFJLENBQUE7UUFHL0IsdUJBQWlCLEdBQTJCLElBQUksQ0FBQTtRQUdoRCxlQUFTLEdBQW1CLElBQUksQ0FBQTtRQUdoQyxnQkFBVSxHQUFlLElBQUksQ0FBQTtRQUc3QixZQUFNLEdBQVcsSUFBSSxDQUFBO1FBR3JCLFdBQUssR0FBVSxJQUFJLENBQUE7UUFHbkIsZ0JBQVUsR0FBZSxJQUFJLENBQUE7UUFFcEMsYUFBTyxHQUFHLENBQUMsQ0FBQTs7SUFpQ2YsQ0FBQztJQWhDRywrQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO0lBQzFCLENBQUM7SUFFTyx5Q0FBZSxHQUF2QjtRQUNJ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K0VDLENBL0VvQyxFQUFFLENBQUMsU0FBUyxHQStFaEQ7QUEvRVksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9nYW1lZGF0YS9CYWNrUGFja0NvbXBvbmVudFwiXG5pbXBvcnQgeyBDaG9wcGluZ0Jsb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dhbWVkYXRhL0Nob3BwaW5nQmxvY2tDb21wb25lbnRcIlxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvRW52aXJvbm1lbnRcIlxuaW1wb3J0IHsgRm9yZ2VDb21wb25lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvRm9yZ2VDb21wb25lbnRcIlxuaW1wb3J0IHsgSXJvblJvY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvSXJvblJvY2tDb21wb25lbnRcIlxuaW1wb3J0IHsgQmxhY2tzbWl0aCB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvQmxhY2tzbWl0aFwiXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vZ2FtZWRhdGEvbGFib3VyZXJzL0xvZ2dlclwiXG5pbXBvcnQgeyBNaW5lciB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvTWluZXJcIlxuaW1wb3J0IHsgV29vZEN1dHRlciB9IGZyb20gXCIuLi9nYW1lZGF0YS9sYWJvdXJlcnMvV29vZEN1dHRlclwiXG5pbXBvcnQgeyBTdXBwbHlQaWxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL2dhbWVkYXRhL1N1cHBseVBpbGVDb21wb25lbnRcIlxuaW1wb3J0IHsgVHJlZUNvbXBvbmVudCB9IGZyb20gXCIuLi9nYW1lZGF0YS9UcmVlQ29tcG9uZW50XCJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudFZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShTdXBwbHlQaWxlQ29tcG9uZW50KVxuICAgIHB1YmxpYyBzdXBwbHlQaWxlQ29tcDE6IFN1cHBseVBpbGVDb21wb25lbnQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoU3VwcGx5UGlsZUNvbXBvbmVudClcbiAgICBwdWJsaWMgc3VwcGx5UGlsZUNvbXAyOiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KElyb25Sb2NrQ29tcG9uZW50KVxuICAgIHByaXZhdGUgaXJvblJvY2tDb21wMTogSXJvblJvY2tDb21wb25lbnQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoSXJvblJvY2tDb21wb25lbnQpXG4gICAgcHJpdmF0ZSBpcm9uUm9ja0NvbXAyOiBJcm9uUm9ja0NvbXBvbmVudCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShJcm9uUm9ja0NvbXBvbmVudClcbiAgICBwcml2YXRlIGlyb25Sb2NrQ29tcDM6IElyb25Sb2NrQ29tcG9uZW50ID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KFRyZWVDb21wb25lbnQpXG4gICAgcHVibGljIHRyZWVDb21wMTogVHJlZUNvbXBvbmVudCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShUcmVlQ29tcG9uZW50KVxuICAgIHB1YmxpYyB0cmVlQ29tcDI6IFRyZWVDb21wb25lbnQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoVHJlZUNvbXBvbmVudClcbiAgICBwdWJsaWMgdHJlZUNvbXAzOiBUcmVlQ29tcG9uZW50ID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KFRyZWVDb21wb25lbnQpXG4gICAgcHVibGljIHRyZWVDb21wNDogVHJlZUNvbXBvbmVudCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShDaG9wcGluZ0Jsb2NrQ29tcG9uZW50KVxuICAgIHB1YmxpYyBjaG9wcGluZ0Jsb2NrQ29tcDogQ2hvcHBpbmdCbG9ja0NvbXBvbmVudCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShGb3JnZUNvbXBvbmVudClcbiAgICBwdWJsaWMgZm9yZ2VDb21wOiBGb3JnZUNvbXBvbmVudCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShCbGFja3NtaXRoKVxuICAgIHB1YmxpYyBibGFja1NtaXRoOiBCbGFja3NtaXRoID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KExvZ2dlcilcbiAgICBwdWJsaWMgbG9nZ2VyOiBMb2dnZXIgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoTWluZXIpXG4gICAgcHVibGljIG1pbmVyOiBNaW5lciA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShXb29kQ3V0dGVyKVxuICAgIHB1YmxpYyB3b29kQ3V0dGVyOiBXb29kQ3V0dGVyID0gbnVsbFxuXG4gICAgY3VyVGltZSA9IDBcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pbml0RW52aXJvbm1lbnQoKVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEVudmlyb25tZW50KCkge1xuICAgICAgICBFbnZpcm9ubWVudC5zdXBwbHlQaWxlQ29tcHMgPSBbdGhpcy5zdXBwbHlQaWxlQ29tcDEsIHRoaXMuc3VwcGx5UGlsZUNvbXAyXVxuICAgICAgICBFbnZpcm9ubWVudC5yb2NrQ29tcHMgPSBbdGhpcy5pcm9uUm9ja0NvbXAxLCB0aGlzLmlyb25Sb2NrQ29tcDIsIHRoaXMuaXJvblJvY2tDb21wM11cbiAgICAgICAgRW52aXJvbm1lbnQudHJlZUNvbXBzID0gW3RoaXMudHJlZUNvbXAxLCB0aGlzLnRyZWVDb21wMiwgdGhpcy50cmVlQ29tcDMsIHRoaXMudHJlZUNvbXA0XVxuXG4gICAgICAgIEVudmlyb25tZW50LmZvcmdlQ29tcHMgPSBbdGhpcy5mb3JnZUNvbXBdXG4gICAgICAgIEVudmlyb25tZW50LmNob3BwaW5nQmxvY2tDb21wcyA9IFt0aGlzLmNob3BwaW5nQmxvY2tDb21wXVxuXG4gICAgICAgIC8vIOiuvue9rmJhY2twYWNrXG4gICAgICAgIGxldCBzbWl0aEJQID0gbmV3IEJhY2tQYWNrQ29tcG9uZW50KDAsIDAsIDApXG4gICAgICAgIHRoaXMuYmxhY2tTbWl0aC5zZXRCYWNrUGFjayhzbWl0aEJQKVxuXG4gICAgICAgIGxldCBsb2dnZXJCUCA9IG5ldyBCYWNrUGFja0NvbXBvbmVudCgwLCAwLCAwKVxuICAgICAgICB0aGlzLmxvZ2dlci5zZXRCYWNrUGFjayhsb2dnZXJCUClcblxuICAgICAgICBsZXQgbWluZXJCUCA9IG5ldyBCYWNrUGFja0NvbXBvbmVudCgwLCAwLCAwKVxuICAgICAgICB0aGlzLm1pbmVyLnNldEJhY2tQYWNrKG1pbmVyQlApXG5cbiAgICAgICAgbGV0IHdvb2RDdXR0ZXJCUCA9IG5ldyBCYWNrUGFja0NvbXBvbmVudCgwLCAwLCAwKVxuICAgICAgICB0aGlzLndvb2RDdXR0ZXIuc2V0QmFja1BhY2sod29vZEN1dHRlckJQKVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5taW5lci51cGRhdGUoZHQpXG4gICAgICAgIHRoaXMuYmxhY2tTbWl0aC51cGRhdGUoZHQpXG4gICAgICAgIHRoaXMubG9nZ2VyLnVwZGF0ZShkdClcbiAgICAgICAgdGhpcy53b29kQ3V0dGVyLnVwZGF0ZShkdClcbiAgICB9XG59XG4iXX0=