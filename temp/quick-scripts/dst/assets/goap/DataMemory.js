
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/DataMemory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec12dVAtEJBeIkK2LI6cR2R', 'DataMemory');
// goap/DataMemory.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataMemory = /** @class */ (function () {
    function DataMemory() {
        this.data = new Map();
    }
    DataMemory.prototype.set = function (key, v) {
        this.data.set(key, v);
    };
    DataMemory.prototype.get = function (key) {
        return this.data.get(key);
    };
    DataMemory.prototype.remove = function (key) {
        this.data.delete(key);
    };
    return DataMemory;
}());
exports.default = DataMemory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcRGF0YU1lbW9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBRUk7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFlLENBQUE7SUFDdEMsQ0FBQztJQUNNLHdCQUFHLEdBQVYsVUFBVyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBRU0sd0JBQUcsR0FBVixVQUFXLEdBQUc7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFTSwyQkFBTSxHQUFiLFVBQWMsR0FBRztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFDTCxpQkFBQztBQUFELENBaEJBLEFBZ0JDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWVtb3J5e1xyXG4gICAgcHJpdmF0ZSBkYXRhOk1hcDxzdHJpbmcsIGFueT5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKVxyXG4gICAgfVxyXG4gICAgcHVibGljIHNldChrZXksIHYpe1xyXG4gICAgICAgIHRoaXMuZGF0YS5zZXQoa2V5LCB2KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoa2V5KXtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmdldChrZXkpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZShrZXkpe1xyXG4gICAgICAgIHRoaXMuZGF0YS5kZWxldGUoa2V5KVxyXG4gICAgfVxyXG59Il19