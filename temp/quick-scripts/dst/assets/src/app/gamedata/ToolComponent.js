
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
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxUb29sQ29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFtQyxpQ0FBWTtJQUc5QztRQUFBLFlBQ0MsaUJBQU8sU0FFUDtRQURBLEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCOztJQUNwQyxDQUFDO0lBRU0sMkJBQUcsR0FBVixVQUFXLE1BQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVNLGlDQUFTLEdBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUYsb0JBQUM7QUFBRCxDQWhCQSxBQWdCQyxDQWhCa0MsRUFBRSxDQUFDLFNBQVMsR0FnQjlDO0FBaEJZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRvb2xDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdC8qKlswLi4xXSBvciAwJSB0byAxMDAlICovXHJcblx0cHVibGljIHN0cmVuZ3RoOiBudW1iZXI7XHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuc3RyZW5ndGggPSAxOyAvLyBmdWxsIHN0cmVuZ3RoXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXNlKGRhbWFnZTogbnVtYmVyKTogdm9pZCB7XHJcblx0XHR0aGlzLnN0cmVuZ3RoIC09IGRhbWFnZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkZXN0cm95ZWQoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdHJlbmd0aCA8PSAwO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbiJdfQ==