
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
        return _this;
    }
    Env.prototype.start = function () {
        Environment_1.Environment.toiletTarget = this.toilet;
        Environment_1.Environment.fireTarget = this.fire;
        Environment_1.Environment.eatingTarget = this.eating;
        Environment_1.Environment.equipTarget = this.equip;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0Vudi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwrREFBOEQ7QUFDOUQsbUNBQThCO0FBQzlCLGlDQUE0QjtBQUM1QiwrQkFBMEI7QUFDMUIsbUNBQThCO0FBRXhCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBbUJDO1FBakJHLFlBQU0sR0FBVyxJQUFJLENBQUE7UUFHckIsVUFBSSxHQUFXLElBQUksQ0FBQTtRQUduQixXQUFLLEdBQVcsSUFBSSxDQUFBO1FBR3BCLFlBQU0sR0FBVyxJQUFJLENBQUE7O0lBUXpCLENBQUM7SUFORyxtQkFBSyxHQUFMO1FBQ0kseUJBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUN0Qyx5QkFBVyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ2xDLHlCQUFXLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDdEMseUJBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUN4QyxDQUFDO0lBaEJEO1FBREMsUUFBUSxDQUFDLGdCQUFNLENBQUM7dUNBQ0k7SUFHckI7UUFEQyxRQUFRLENBQUMsY0FBSSxDQUFDO3FDQUNJO0lBR25CO1FBREMsUUFBUSxDQUFDLGVBQUssQ0FBQztzQ0FDSTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxnQkFBTSxDQUFDO3VDQUNJO0lBWEosR0FBRztRQUR2QixPQUFPO09BQ2EsR0FBRyxDQW1CdkI7SUFBRCxVQUFDO0NBbkJELEFBbUJDLENBbkJnQyxFQUFFLENBQUMsU0FBUyxHQW1CNUM7a0JBbkJvQixHQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgRWF0aW5nIGZyb20gXCIuL0VhdGluZ1wiO1xuaW1wb3J0IEVxdWlwIGZyb20gXCIuL0VxdWlwXCI7XG5pbXBvcnQgRmlyZSBmcm9tIFwiLi9GaXJlXCI7XG5pbXBvcnQgVG9pbGV0IGZyb20gXCIuL1RvaWxldFwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW52IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoVG9pbGV0KVxuICAgIHRvaWxldDogVG9pbGV0ID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KEZpcmUpXG4gICAgZmlyZTogVG9pbGV0ID0gbnVsbFxuXG4gICAgQHByb3BlcnR5KEVxdWlwKVxuICAgIGVxdWlwOiBUb2lsZXQgPSBudWxsXG5cbiAgICBAcHJvcGVydHkoRWF0aW5nKVxuICAgIGVhdGluZzogVG9pbGV0ID0gbnVsbFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIEVudmlyb25tZW50LnRvaWxldFRhcmdldCA9IHRoaXMudG9pbGV0XG4gICAgICAgIEVudmlyb25tZW50LmZpcmVUYXJnZXQgPSB0aGlzLmZpcmVcbiAgICAgICAgRW52aXJvbm1lbnQuZWF0aW5nVGFyZ2V0ID0gdGhpcy5lYXRpbmdcbiAgICAgICAgRW52aXJvbm1lbnQuZXF1aXBUYXJnZXQgPSB0aGlzLmVxdWlwXG4gICAgfVxufVxuIl19