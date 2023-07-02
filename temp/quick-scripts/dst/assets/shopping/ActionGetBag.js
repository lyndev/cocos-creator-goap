
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/ActionGetBag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e5750Vsf2BFpZuOqhMaaWXT', 'ActionGetBag');
// shopping/ActionGetBag.ts

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
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var ContextShop_1 = require("./ContextShop");
var ActionGetBag = /** @class */ (function (_super) {
    __extends(ActionGetBag, _super);
    function ActionGetBag() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.addPrecondition("hasBag", false);
        _this.addEffect("hasBag", true);
        return _this;
    }
    ActionGetBag.prototype.reset = function () {
        this.bDone = false;
    };
    ActionGetBag.prototype.isDone = function () {
        return this.bDone;
    };
    ActionGetBag.prototype.checkProceduralPrecondition = function (go) {
        if (ContextShop_1.default.bagPoint) {
            this.target = ContextShop_1.default.bagPoint;
            return true;
        }
        return false;
    };
    ActionGetBag.prototype.perform = function (node) {
        this.bDone = true;
        console.log("拿到购物篮");
        return true;
    };
    ActionGetBag.prototype.requiresInRange = function () {
        return true;
    };
    return ActionGetBag;
}(GoapAction_1.GoapAction));
exports.default = ActionGetBag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9BY3Rpb25HZXRCYWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQTBEO0FBRTFELDZDQUF1QztBQUV2QztJQUEwQyxnQ0FBVTtJQUdoRDtRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQU5TLFdBQUssR0FBWSxLQUFLLENBQUE7UUFJNUIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDckMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7O0lBQ2xDLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVELGtEQUEyQixHQUEzQixVQUE0QixFQUFXO1FBQ25DLElBQUkscUJBQVcsQ0FBQyxRQUFRLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBVyxDQUFDLFFBQVEsQ0FBQTtZQUNsQyxPQUFPLElBQUksQ0FBQTtTQUNkO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUVELDhCQUFPLEdBQVAsVUFBUSxJQUFhO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FsQ0EsQUFrQ0MsQ0FsQ3lDLHVCQUFVLEdBa0NuRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IEJhZ1BvaW50IGZyb20gXCIuL0JhZ1BvaW50XCJcbmltcG9ydCBDb250ZXh0U2hvcCBmcm9tIFwiLi9Db250ZXh0U2hvcFwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbkdldEJhZyBleHRlbmRzIEdvYXBBY3Rpb24ge1xuICAgIHByb3RlY3RlZCBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHVibGljIHRhcmdldDogQmFnUG9pbnRcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihcImhhc0JhZ1wiLCBmYWxzZSlcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoXCJoYXNCYWdcIiwgdHJ1ZSlcbiAgICB9XG5cbiAgICByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iRG9uZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgaXNEb25lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5iRG9uZVxuICAgIH1cblxuICAgIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihnbzogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoQ29udGV4dFNob3AuYmFnUG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gQ29udGV4dFNob3AuYmFnUG9pbnRcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGVyZm9ybShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMuYkRvbmUgPSB0cnVlXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5ou/5Yiw6LSt54mp56+uXCIpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmVxdWlyZXNJblJhbmdlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==