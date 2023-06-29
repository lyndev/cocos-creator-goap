"use strict";
cc._RF.push(module, '039b5GmIS9Iu4vB+2I1hx0n', 'Checkstand');
// shopping/Checkstand.ts

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
var VGameObject_1 = require("../src/app/base/VGameObject");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Checkstand = /** @class */ (function (_super) {
    __extends(Checkstand, _super);
    function Checkstand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gold = 0;
        return _this;
    }
    Checkstand.prototype.onLoad = function () { };
    Checkstand.prototype.pay = function (prod) {
        if (!prod) {
            return;
        }
        this.gold += prod.amount * 10;
        prod.amount = 0;
    };
    Checkstand = __decorate([
        ccclass
    ], Checkstand);
    return Checkstand;
}(VGameObject_1.VGameObject));
exports.default = Checkstand;

cc._RF.pop();