
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcRW52LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtEQUE4RDtBQUM5RCxtQ0FBOEI7QUFDOUIsaUNBQTRCO0FBQzVCLCtCQUEwQjtBQUMxQixpQ0FBNEI7QUFDNUIsbUNBQThCO0FBQzlCLG1DQUE4QjtBQUV4QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFpQyx1QkFBWTtJQUE3QztRQUFBLHFFQTJCQztRQXpCRyxZQUFNLEdBQVcsSUFBSSxDQUFBO1FBR3JCLFVBQUksR0FBVyxJQUFJLENBQUE7UUFHbkIsV0FBSyxHQUFXLElBQUksQ0FBQTtRQUdwQixZQUFNLEdBQVcsSUFBSSxDQUFBO1FBR3JCLFdBQUssR0FBVyxJQUFJLENBQUE7UUFHcEIsWUFBTSxHQUFXLElBQUksQ0FBQTs7SUFVekIsQ0FBQztJQVJHLG1CQUFLLEdBQUw7UUFDSSx5QkFBVyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQ3RDLHlCQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7UUFDbEMseUJBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUN0Qyx5QkFBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3BDLHlCQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDcEMseUJBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUNwQyxDQUFDO0lBeEJEO1FBREMsUUFBUSxDQUFDLGdCQUFNLENBQUM7dUNBQ0k7SUFHckI7UUFEQyxRQUFRLENBQUMsY0FBSSxDQUFDO3FDQUNJO0lBR25CO1FBREMsUUFBUSxDQUFDLGVBQUssQ0FBQztzQ0FDSTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDO3VDQUNJO0lBR3JCO1FBREMsUUFBUSxDQUFDLGVBQUssQ0FBQztzQ0FDSTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDO3VDQUNJO0lBakJKLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0EyQnZCO0lBQUQsVUFBQztDQTNCRCxBQTJCQyxDQTNCZ0MsRUFBRSxDQUFDLFNBQVMsR0EyQjVDO2tCQTNCb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCI7XHJcbmltcG9ydCBFYXRpbmcgZnJvbSBcIi4vRWF0aW5nXCI7XHJcbmltcG9ydCBFcXVpcCBmcm9tIFwiLi9FcXVpcFwiO1xyXG5pbXBvcnQgRmlyZSBmcm9tIFwiLi9GaXJlXCI7XHJcbmltcG9ydCBTbGVlcCBmcm9tIFwiLi9TbGVlcFwiO1xyXG5pbXBvcnQgU3RvcmVBIGZyb20gXCIuL1N0b3JlQVwiO1xyXG5pbXBvcnQgVG9pbGV0IGZyb20gXCIuL1RvaWxldFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoVG9pbGV0KVxyXG4gICAgdG9pbGV0OiBUb2lsZXQgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KEZpcmUpXHJcbiAgICBmaXJlOiBUb2lsZXQgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KEVxdWlwKVxyXG4gICAgZXF1aXA6IFRvaWxldCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoRWF0aW5nKVxyXG4gICAgZWF0aW5nOiBUb2lsZXQgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KFNsZWVwKVxyXG4gICAgc2xlZXA6IFRvaWxldCA9IG51bGxcclxuXHJcbiAgICBAcHJvcGVydHkoU3RvcmVBKVxyXG4gICAgc3RvcmVBOiBTdG9yZUEgPSBudWxsXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgRW52aXJvbm1lbnQudG9pbGV0VGFyZ2V0ID0gdGhpcy50b2lsZXRcclxuICAgICAgICBFbnZpcm9ubWVudC5maXJlVGFyZ2V0ID0gdGhpcy5maXJlXHJcbiAgICAgICAgRW52aXJvbm1lbnQuZWF0aW5nVGFyZ2V0ID0gdGhpcy5lYXRpbmdcclxuICAgICAgICBFbnZpcm9ubWVudC5lcXVpcFRhcmdldCA9IHRoaXMuZXF1aXBcclxuICAgICAgICBFbnZpcm9ubWVudC5zbGVlcFRhcmdldCA9IHRoaXMuc2xlZXBcclxuICAgICAgICBFbnZpcm9ubWVudC5zdG9yZUEgPSB0aGlzLnN0b3JlQVxyXG4gICAgfVxyXG59XHJcbiJdfQ==