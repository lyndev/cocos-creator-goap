
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWlDLCtCQUFZO0lBQTdDOztJQXdCQSxDQUFDO0lBdkJPLDRCQUFNLEdBQWIsVUFBYyxNQUFtQixFQUFFLElBQVk7UUFDOUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QyxJQUFJLE1BQU0sR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFBO1FBQ3hCLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM1QjthQUFNO1lBQ04sSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0YsQ0FBQztJQUNNLDhCQUFRLEdBQWYsVUFBZ0IsT0FBb0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBQ0QsV0FBVztJQUNKLG9DQUFjLEdBQXJCLFVBQXNCLE1BQW1CO1FBQ3hDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RJLENBQUM7SUFDRCxRQUFRO0lBQ0QsOEJBQVEsR0FBZixVQUFnQixNQUFNO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQXZCVyxXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBd0J2QjtJQUFELGtCQUFDO0NBeEJELEFBd0JDLENBeEJnQyxFQUFFLENBQUMsU0FBUyxHQXdCNUM7QUF4Qlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBWR2FtZU9iamVjdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cdHB1YmxpYyBtb3ZlVG8odGFyZ2V0OiBWR2FtZU9iamVjdCwgc3RlcDogbnVtYmVyKSB7XG5cdFx0bGV0IGN1ckRpcyA9IHRoaXMuZGlzdGFuY2VTcXVhcmUodGFyZ2V0KVxuXHRcdGxldCBtaW5EaXMgPSBzdGVwICogc3RlcFxuXHRcdGlmIChjdXJEaXMgPD0gbWluRGlzKSB7XG5cdFx0XHR0aGlzLm5vZGUueCA9IHRhcmdldC5ub2RlLng7XG5cdFx0XHR0aGlzLm5vZGUueSA9IHRhcmdldC5ub2RlLnk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBwZXJjZW50ID0gNiAvIHRoaXMuZGlzdGFuY2UodGFyZ2V0KVxuXHRcdFx0dGhpcy5ub2RlLnggPSB0aGlzLm5vZGUueCArIHBlcmNlbnQgKiAodGFyZ2V0Lm5vZGUueCAtIHRoaXMubm9kZS54KVxuXHRcdFx0dGhpcy5ub2RlLnkgPSB0aGlzLm5vZGUueSArIHBlcmNlbnQgKiAodGFyZ2V0Lm5vZGUueSAtIHRoaXMubm9kZS55KTtcblx0XHR9XG5cdH1cblx0cHVibGljIHBvc0VxdWlwKGdhbWVPYmo6IFZHYW1lT2JqZWN0KSB7XG5cdFx0cmV0dXJuIHRoaXMubm9kZS54ID09IGdhbWVPYmoubm9kZS54ICYmIHRoaXMubm9kZS55ID09IGdhbWVPYmoubm9kZS55O1xuXHR9XG5cdC8qKui3neemu+eahOW5s+aWuSAqL1xuXHRwdWJsaWMgZGlzdGFuY2VTcXVhcmUob2JqZWN0OiBWR2FtZU9iamVjdCkge1xuXHRcdHJldHVybiAob2JqZWN0Lm5vZGUueCAtIHRoaXMubm9kZS54KSAqIChvYmplY3Qubm9kZS54IC0gdGhpcy5ub2RlLngpICsgKG9iamVjdC5ub2RlLnkgLSB0aGlzLm5vZGUueSkgKiAob2JqZWN0Lm5vZGUueSAtIHRoaXMubm9kZS55KTtcblx0fVxuXHQvKirot53nprsgKi9cblx0cHVibGljIGRpc3RhbmNlKG9iamVjdCkge1xuXHRcdHJldHVybiBNYXRoLnNxcnQodGhpcy5kaXN0YW5jZVNxdWFyZShvYmplY3QpKVxuXHR9XG59Il19