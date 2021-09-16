
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/ToolComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a70bfmR/JFOALM7ltmhuP+w', 'ToolComponent');
// src/app/gamedata/ToolComponent.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolComponent = void 0;
var ToolComponent = /** @class */ (function (_super) {
    __extends(ToolComponent, _super);
    function ToolComponent() {
        var _this = _super.call(this) || this;
        _this.strength = 1; // full strength
        return _this;
    }
    ToolComponent.prototype.use = function (damage) {
        this.strength -= damage;
    };
    ToolComponent.prototype.destroyed = function () {
        return this.strength <= 0;
    };
    return ToolComponent;
}(cc.Component));
exports.ToolComponent = ToolComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL1Rvb2xDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQW1DLGlDQUFZO0lBRzlDO1FBQUEsWUFDQyxpQkFBTyxTQUVQO1FBREEsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7O0lBQ3BDLENBQUM7SUFFTSwyQkFBRyxHQUFWLFVBQVcsTUFBYztRQUN4QixJQUFJLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRU0saUNBQVMsR0FBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRixvQkFBQztBQUFELENBaEJBLEFBZ0JDLENBaEJrQyxFQUFFLENBQUMsU0FBUyxHQWdCOUM7QUFoQlksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVG9vbENvbXBvbmVudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cdC8qKlswLi4xXSBvciAwJSB0byAxMDAlICovXG5cdHB1YmxpYyBzdHJlbmd0aDogbnVtYmVyO1xuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN0cmVuZ3RoID0gMTsgLy8gZnVsbCBzdHJlbmd0aFxuXHR9XG5cblx0cHVibGljIHVzZShkYW1hZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMuc3RyZW5ndGggLT0gZGFtYWdlO1xuXHR9XG5cblx0cHVibGljIGRlc3Ryb3llZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJlbmd0aCA8PSAwO1xuXHR9XG5cbn1cblxuIl19