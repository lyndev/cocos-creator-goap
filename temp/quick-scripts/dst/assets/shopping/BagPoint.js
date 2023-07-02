
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/BagPoint.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '355fe32qSRMCoRBYg6FFndn', 'BagPoint');
// shopping/BagPoint.ts

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
var BagPoint = /** @class */ (function (_super) {
    __extends(BagPoint, _super);
    function BagPoint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gold = 0;
        return _this;
    }
    BagPoint.prototype.onLoad = function () { };
    BagPoint = __decorate([
        ccclass
    ], BagPoint);
    return BagPoint;
}(VGameObject_1.VGameObject));
exports.default = BagPoint;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9CYWdQb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBeUQ7QUFDbkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUE7QUFFM0M7SUFBc0MsNEJBQVc7SUFBakQ7UUFBQSxxRUFHQztRQUZHLFVBQUksR0FBVyxDQUFDLENBQUE7O0lBRXBCLENBQUM7SUFEYSx5QkFBTSxHQUFoQixjQUEwQixDQUFDO0lBRlYsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQUc1QjtJQUFELGVBQUM7Q0FIRCxBQUdDLENBSHFDLHlCQUFXLEdBR2hEO2tCQUhvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0XCJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3JcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWdQb2ludCBleHRlbmRzIFZHYW1lT2JqZWN0IHtcbiAgICBnb2xkOiBudW1iZXIgPSAwXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHt9XG59XG4iXX0=