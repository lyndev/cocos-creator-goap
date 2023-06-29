
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0Vudi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrREFBOEQ7QUFDOUQsbUNBQThCO0FBQzlCLGlDQUE0QjtBQUM1QiwrQkFBMEI7QUFDMUIsaUNBQTRCO0FBQzVCLG1DQUE4QjtBQUM5QixtQ0FBOEI7QUFFeEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBaUMsdUJBQVk7SUFBN0M7UUFBQSxxRUEyQkM7UUF6QkcsWUFBTSxHQUFXLElBQUksQ0FBQTtRQUdyQixVQUFJLEdBQVcsSUFBSSxDQUFBO1FBR25CLFdBQUssR0FBVyxJQUFJLENBQUE7UUFHcEIsWUFBTSxHQUFXLElBQUksQ0FBQTtRQUdyQixXQUFLLEdBQVcsSUFBSSxDQUFBO1FBR3BCLFlBQU0sR0FBVyxJQUFJLENBQUE7O0lBVXpCLENBQUM7SUFSRyxtQkFBSyxHQUFMO1FBQ0kseUJBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUN0Qyx5QkFBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ2xDLHlCQUFXLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDdEMseUJBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNwQyx5QkFBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3BDLHlCQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDcEMsQ0FBQztJQXhCRDtRQURDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDO3VDQUNJO0lBR3JCO1FBREMsUUFBUSxDQUFDLGNBQUksQ0FBQztxQ0FDSTtJQUduQjtRQURDLFFBQVEsQ0FBQyxlQUFLLENBQUM7c0NBQ0k7SUFHcEI7UUFEQyxRQUFRLENBQUMsZ0JBQU0sQ0FBQzt1Q0FDSTtJQUdyQjtRQURDLFFBQVEsQ0FBQyxlQUFLLENBQUM7c0NBQ0k7SUFHcEI7UUFEQyxRQUFRLENBQUMsZ0JBQU0sQ0FBQzt1Q0FDSTtJQWpCSixHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBMkJ2QjtJQUFELFVBQUM7Q0EzQkQsQUEyQkMsQ0EzQmdDLEVBQUUsQ0FBQyxTQUFTLEdBMkI1QztrQkEzQm9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL3NyYy9hcHAvZ2FtZWRhdGEvRW52aXJvbm1lbnRcIjtcbmltcG9ydCBFYXRpbmcgZnJvbSBcIi4vRWF0aW5nXCI7XG5pbXBvcnQgRXF1aXAgZnJvbSBcIi4vRXF1aXBcIjtcbmltcG9ydCBGaXJlIGZyb20gXCIuL0ZpcmVcIjtcbmltcG9ydCBTbGVlcCBmcm9tIFwiLi9TbGVlcFwiO1xuaW1wb3J0IFN0b3JlQSBmcm9tIFwiLi9TdG9yZUFcIjtcbmltcG9ydCBUb2lsZXQgZnJvbSBcIi4vVG9pbGV0XCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnYgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShUb2lsZXQpXG4gICAgdG9pbGV0OiBUb2lsZXQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoRmlyZSlcbiAgICBmaXJlOiBUb2lsZXQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoRXF1aXApXG4gICAgZXF1aXA6IFRvaWxldCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShFYXRpbmcpXG4gICAgZWF0aW5nOiBUb2lsZXQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoU2xlZXApXG4gICAgc2xlZXA6IFRvaWxldCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShTdG9yZUEpXG4gICAgc3RvcmVBOiBTdG9yZUEgPSBudWxsXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgRW52aXJvbm1lbnQudG9pbGV0VGFyZ2V0ID0gdGhpcy50b2lsZXRcbiAgICAgICAgRW52aXJvbm1lbnQuZmlyZVRhcmdldCA9IHRoaXMuZmlyZVxuICAgICAgICBFbnZpcm9ubWVudC5lYXRpbmdUYXJnZXQgPSB0aGlzLmVhdGluZ1xuICAgICAgICBFbnZpcm9ubWVudC5lcXVpcFRhcmdldCA9IHRoaXMuZXF1aXBcbiAgICAgICAgRW52aXJvbm1lbnQuc2xlZXBUYXJnZXQgPSB0aGlzLnNsZWVwXG4gICAgICAgIEVudmlyb25tZW50LnN0b3JlQSA9IHRoaXMuc3RvcmVBXG4gICAgfVxufVxuIl19