
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL1N1cHBseVBpbGVDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUM1QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF5Qyx1Q0FBVztJQUFwRDtRQUFBLHFFQTJEQztRQXpETyxnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBRTNCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0Isb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFTL0IsZUFBUyxHQUFXLENBQUMsQ0FBQyxDQUFDLG1DQUFtQztRQVUxRCxjQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCO1FBWXZDLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1FBVWpELGFBQU8sR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjOztJQVU1QyxDQUFDO0lBakRBLG1DQUFLLEdBQUw7UUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2RCxDQUFDO0lBR0Qsc0JBQVcseUNBQVE7YUFBbkI7WUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkIsQ0FBQzthQUNELFVBQW9CLEdBQVc7WUFDOUIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzNELENBQUM7OztPQUxBO0lBUUQsc0JBQVcsd0NBQU87YUFBbEI7WUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdEIsQ0FBQzthQUNELFVBQW1CLEdBQVc7WUFDN0IsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRXpELENBQUM7OztPQU5BO0lBVUQsc0JBQVcsNENBQVc7YUFBdEI7WUFDQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDMUIsQ0FBQzthQUNELFVBQXVCLEdBQVc7WUFDakMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN4QixJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ25FLENBQUM7OztPQUxBO0lBUUQsc0JBQVcsdUNBQU07YUFBakI7WUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDckIsQ0FBQzthQUNELFVBQWtCLEdBQVc7WUFDNUIsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3pELENBQUM7OztPQUxBO0lBbEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkRBQ2dCO0lBRW5DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MERBQ2U7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswREFDZTtJQUVsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytEQUNvQjtJQVIzQixtQkFBbUI7UUFEL0IsT0FBTztPQUNLLG1CQUFtQixDQTJEL0I7SUFBRCwwQkFBQztDQTNERCxBQTJEQyxDQTNEd0MseUJBQVcsR0EyRG5EO0FBM0RZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFN1cHBseVBpbGVDb21wb25lbnQgZXh0ZW5kcyBWR2FtZU9iamVjdCB7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHVibGljIHR4dFRvb2xOdW06IGNjLkxhYmVsID0gbnVsbDtcblx0QHByb3BlcnR5KGNjLkxhYmVsKVxuXHRwdWJsaWMgdHh0T3JlTnVtOiBjYy5MYWJlbCA9IG51bGw7XG5cdEBwcm9wZXJ0eShjYy5MYWJlbClcblx0cHVibGljIHR4dExvZ051bTogY2MuTGFiZWwgPSBudWxsO1xuXHRAcHJvcGVydHkoY2MuTGFiZWwpXG5cdHB1YmxpYyB0eHRGaXJld29vZE51bTogY2MuTGFiZWwgPSBudWxsO1xuXG5cdHN0YXJ0KCkge1xuXHRcdHRoaXMudHh0VG9vbE51bS5zdHJpbmcgPSBcIuW3peWFt++8mlwiICsgdGhpcy5udW1Ub29scztcblx0XHR0aGlzLnR4dE9yZU51bS5zdHJpbmcgPSBcIuefv+efs++8mlwiICsgdGhpcy5udW1PcmU7XG5cdFx0dGhpcy50eHRMb2dOdW0uc3RyaW5nID0gXCLljp/mnKjvvJpcIiArIHRoaXMubnVtTG9ncztcblx0XHR0aGlzLnR4dEZpcmV3b29kTnVtLnN0cmluZyA9IFwi5pyo5p+077yaXCIgKyB0aGlzLm51bUZpcmV3b29kO1xuXHR9XG5cblx0cHJpdmF0ZSBfbnVtVG9vbHM6IG51bWJlciA9IDA7IC8vIGZvciBtaW5pbmcgb3JlIGFuZCBjaG9wcGluZyBsb2dzXG5cdHB1YmxpYyBnZXQgbnVtVG9vbHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX251bVRvb2xzO1xuXHR9XG5cdHB1YmxpYyBzZXQgbnVtVG9vbHModmFsOiBudW1iZXIpIHtcblx0XHR2YWwgPSBOdW1iZXIodmFsKTtcblx0XHR0aGlzLl9udW1Ub29scyA9IHZhbDtcblx0XHR0aGlzLnR4dFRvb2xOdW0gJiYgKHRoaXMudHh0VG9vbE51bS5zdHJpbmcgPSBcIuW3peWFt++8mlwiICsgdmFsKTtcblx0fVxuXG5cdHByaXZhdGUgX251bUxvZ3M6IG51bWJlciA9IDA7IC8vIG1ha2VzIGZpcmV3b29kXG5cdHB1YmxpYyBnZXQgbnVtTG9ncygpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl9udW1Mb2dzO1xuXHR9XG5cdHB1YmxpYyBzZXQgbnVtTG9ncyh2YWw6IG51bWJlcikge1xuXHRcdHZhbCA9IE51bWJlcih2YWwpO1xuXHRcdHRoaXMuX251bUxvZ3MgPSB2YWw7XG5cdFx0dGhpcy50eHRMb2dOdW0gJiYgKHRoaXMudHh0TG9nTnVtLnN0cmluZyA9IFwi5Y6f5pyo77yaXCIgKyB2YWwpO1xuXG5cdH1cblxuXG5cdHByaXZhdGUgX251bUZpcmV3b29kOiBudW1iZXIgPSAwOyAvLyB3aGF0IHdlIHdhbnQgdG8gbWFrZVxuXHRwdWJsaWMgZ2V0IG51bUZpcmV3b29kKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMuX251bUZpcmV3b29kO1xuXHR9XG5cdHB1YmxpYyBzZXQgbnVtRmlyZXdvb2QodmFsOiBudW1iZXIpIHtcblx0XHR2YWwgPSBOdW1iZXIodmFsKTtcblx0XHR0aGlzLl9udW1GaXJld29vZCA9IHZhbDtcblx0XHR0aGlzLnR4dEZpcmV3b29kTnVtICYmICh0aGlzLnR4dEZpcmV3b29kTnVtLnN0cmluZyA9IFwi5pyo5p+077yaXCIgKyB2YWwpO1xuXHR9XG5cblx0cHJpdmF0ZSBfbnVtT3JlOiBudW1iZXIgPSAwOyAvLyBtYWtlcyB0b29sc1xuXHRwdWJsaWMgZ2V0IG51bU9yZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLl9udW1PcmU7XG5cdH1cblx0cHVibGljIHNldCBudW1PcmUodmFsOiBudW1iZXIpIHtcblx0XHR2YWwgPSBOdW1iZXIodmFsKTtcblx0XHR0aGlzLl9udW1PcmUgPSB2YWw7XG5cdFx0dGhpcy50eHRPcmVOdW0gJiYgKHRoaXMudHh0T3JlTnVtLnN0cmluZyA9IFwi55+/55+z77yaXCIgKyB2YWwpO1xuXHR9XG5cbn0iXX0=