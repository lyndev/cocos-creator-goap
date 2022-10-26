
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/base/VGameObject.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7f50eR/VF5OVayzFiMdd3ze', 'VGameObject');
// src/app/base/VGameObject.ts

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
exports.VGameObject = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VGameObject = /** @class */ (function (_super) {
    __extends(VGameObject, _super);
    function VGameObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VGameObject.prototype.moveTo = function (target, step) {
        var curDis = this.distanceSquare(target);
        var minDis = step * step;
        if (curDis <= minDis) {
            this.node.x = target.node.x;
            this.node.y = target.node.y;
        }
        else {
            var percent = 6 / this.distance(target);
            this.node.x = this.node.x + percent * (target.node.x - this.node.x);
            this.node.y = this.node.y + percent * (target.node.y - this.node.y);
        }
    };
    VGameObject.prototype.posEquip = function (gameObj) {
        return this.node.x == gameObj.node.x && this.node.y == gameObj.node.y;
    };
    /**距离的平方 */
    VGameObject.prototype.distanceSquare = function (object) {
        return (object.node.x - this.node.x) * (object.node.x - this.node.x) + (object.node.y - this.node.y) * (object.node.y - this.node.y);
    };
    /**距离 */
    VGameObject.prototype.distance = function (object) {
        return Math.sqrt(this.distanceSquare(object));
    };
    VGameObject = __decorate([
        ccclass
    ], VGameObject);
    return VGameObject;
}(cc.Component));
exports.VGameObject = VGameObject;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGJhc2VcXFZHYW1lT2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFpQywrQkFBWTtJQUE3Qzs7SUF3QkEsQ0FBQztJQXZCTyw0QkFBTSxHQUFiLFVBQWMsTUFBbUIsRUFBRSxJQUFZO1FBQzlDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUN4QixJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDNUI7YUFBTTtZQUNOLElBQUksT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRTtJQUNGLENBQUM7SUFDTSw4QkFBUSxHQUFmLFVBQWdCLE9BQW9CO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNELFdBQVc7SUFDSixvQ0FBYyxHQUFyQixVQUFzQixNQUFtQjtRQUN4QyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0SSxDQUFDO0lBQ0QsUUFBUTtJQUNELDhCQUFRLEdBQWYsVUFBZ0IsTUFBTTtRQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBQzlDLENBQUM7SUF2QlcsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQXdCdkI7SUFBRCxrQkFBQztDQXhCRCxBQXdCQyxDQXhCZ0MsRUFBRSxDQUFDLFNBQVMsR0F3QjVDO0FBeEJZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFZHYW1lT2JqZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHRwdWJsaWMgbW92ZVRvKHRhcmdldDogVkdhbWVPYmplY3QsIHN0ZXA6IG51bWJlcikge1xyXG5cdFx0bGV0IGN1ckRpcyA9IHRoaXMuZGlzdGFuY2VTcXVhcmUodGFyZ2V0KVxyXG5cdFx0bGV0IG1pbkRpcyA9IHN0ZXAgKiBzdGVwXHJcblx0XHRpZiAoY3VyRGlzIDw9IG1pbkRpcykge1xyXG5cdFx0XHR0aGlzLm5vZGUueCA9IHRhcmdldC5ub2RlLng7XHJcblx0XHRcdHRoaXMubm9kZS55ID0gdGFyZ2V0Lm5vZGUueTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCBwZXJjZW50ID0gNiAvIHRoaXMuZGlzdGFuY2UodGFyZ2V0KVxyXG5cdFx0XHR0aGlzLm5vZGUueCA9IHRoaXMubm9kZS54ICsgcGVyY2VudCAqICh0YXJnZXQubm9kZS54IC0gdGhpcy5ub2RlLngpXHJcblx0XHRcdHRoaXMubm9kZS55ID0gdGhpcy5ub2RlLnkgKyBwZXJjZW50ICogKHRhcmdldC5ub2RlLnkgLSB0aGlzLm5vZGUueSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBwb3NFcXVpcChnYW1lT2JqOiBWR2FtZU9iamVjdCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubm9kZS54ID09IGdhbWVPYmoubm9kZS54ICYmIHRoaXMubm9kZS55ID09IGdhbWVPYmoubm9kZS55O1xyXG5cdH1cclxuXHQvKirot53nprvnmoTlubPmlrkgKi9cclxuXHRwdWJsaWMgZGlzdGFuY2VTcXVhcmUob2JqZWN0OiBWR2FtZU9iamVjdCkge1xyXG5cdFx0cmV0dXJuIChvYmplY3Qubm9kZS54IC0gdGhpcy5ub2RlLngpICogKG9iamVjdC5ub2RlLnggLSB0aGlzLm5vZGUueCkgKyAob2JqZWN0Lm5vZGUueSAtIHRoaXMubm9kZS55KSAqIChvYmplY3Qubm9kZS55IC0gdGhpcy5ub2RlLnkpO1xyXG5cdH1cclxuXHQvKirot53nprsgKi9cclxuXHRwdWJsaWMgZGlzdGFuY2Uob2JqZWN0KSB7XHJcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VTcXVhcmUob2JqZWN0KSlcclxuXHR9XHJcbn0iXX0=