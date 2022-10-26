
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