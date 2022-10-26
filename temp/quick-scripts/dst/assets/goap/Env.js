
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
        return _this;
    }
    Env.prototype.start = function () {
        Environment_1.Environment.toiletTarget = this.toilet;
        Environment_1.Environment.fireTarget = this.fire;
        Environment_1.Environment.eatingTarget = this.eating;
        Environment_1.Environment.equipTarget = this.equip;
        Environment_1.Environment.sleepTarget = this.sleep;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcRW52LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtEQUE4RDtBQUM5RCxtQ0FBOEI7QUFDOUIsaUNBQTRCO0FBQzVCLCtCQUEwQjtBQUMxQixpQ0FBNEI7QUFDNUIsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBdUJDO1FBckJHLFlBQU0sR0FBVyxJQUFJLENBQUE7UUFHckIsVUFBSSxHQUFXLElBQUksQ0FBQTtRQUduQixXQUFLLEdBQVcsSUFBSSxDQUFBO1FBR3BCLFlBQU0sR0FBVyxJQUFJLENBQUE7UUFHckIsV0FBSyxHQUFXLElBQUksQ0FBQTs7SUFTeEIsQ0FBQztJQVBHLG1CQUFLLEdBQUw7UUFDSSx5QkFBVyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQ3RDLHlCQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7UUFDbEMseUJBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUN0Qyx5QkFBVyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3BDLHlCQUFXLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDeEMsQ0FBQztJQXBCRDtRQURDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDO3VDQUNJO0lBR3JCO1FBREMsUUFBUSxDQUFDLGNBQUksQ0FBQztxQ0FDSTtJQUduQjtRQURDLFFBQVEsQ0FBQyxlQUFLLENBQUM7c0NBQ0k7SUFHcEI7UUFEQyxRQUFRLENBQUMsZ0JBQU0sQ0FBQzt1Q0FDSTtJQUdyQjtRQURDLFFBQVEsQ0FBQyxlQUFLLENBQUM7c0NBQ0k7SUFkSCxHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBdUJ2QjtJQUFELFVBQUM7Q0F2QkQsQUF1QkMsQ0F2QmdDLEVBQUUsQ0FBQyxTQUFTLEdBdUI1QztrQkF2Qm9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9nYW1lZGF0YS9FbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgRWF0aW5nIGZyb20gXCIuL0VhdGluZ1wiO1xyXG5pbXBvcnQgRXF1aXAgZnJvbSBcIi4vRXF1aXBcIjtcclxuaW1wb3J0IEZpcmUgZnJvbSBcIi4vRmlyZVwiO1xyXG5pbXBvcnQgU2xlZXAgZnJvbSBcIi4vU2xlZXBcIjtcclxuaW1wb3J0IFRvaWxldCBmcm9tIFwiLi9Ub2lsZXRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnYgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KFRvaWxldClcclxuICAgIHRvaWxldDogVG9pbGV0ID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShGaXJlKVxyXG4gICAgZmlyZTogVG9pbGV0ID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShFcXVpcClcclxuICAgIGVxdWlwOiBUb2lsZXQgPSBudWxsXHJcblxyXG4gICAgQHByb3BlcnR5KEVhdGluZylcclxuICAgIGVhdGluZzogVG9pbGV0ID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShTbGVlcClcclxuICAgIHNsZWVwOiBUb2lsZXQgPSBudWxsXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgRW52aXJvbm1lbnQudG9pbGV0VGFyZ2V0ID0gdGhpcy50b2lsZXRcclxuICAgICAgICBFbnZpcm9ubWVudC5maXJlVGFyZ2V0ID0gdGhpcy5maXJlXHJcbiAgICAgICAgRW52aXJvbm1lbnQuZWF0aW5nVGFyZ2V0ID0gdGhpcy5lYXRpbmdcclxuICAgICAgICBFbnZpcm9ubWVudC5lcXVpcFRhcmdldCA9IHRoaXMuZXF1aXBcclxuICAgICAgICBFbnZpcm9ubWVudC5zbGVlcFRhcmdldCA9IHRoaXMuc2xlZXBcclxuICAgIH1cclxufVxyXG4iXX0=