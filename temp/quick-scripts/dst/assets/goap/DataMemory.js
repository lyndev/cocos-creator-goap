
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0RhdGFNZW1vcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUVJO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBZSxDQUFBO0lBQ3RDLENBQUM7SUFDTSx3QkFBRyxHQUFWLFVBQVcsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDekIsQ0FBQztJQUVNLHdCQUFHLEdBQVYsVUFBVyxHQUFHO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRU0sMkJBQU0sR0FBYixVQUFjLEdBQUc7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWhCQSxBQWdCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1lbW9yeXtcbiAgICBwcml2YXRlIGRhdGE6TWFwPHN0cmluZywgYW55PlxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KClcbiAgICB9XG4gICAgcHVibGljIHNldChrZXksIHYpe1xuICAgICAgICB0aGlzLmRhdGEuc2V0KGtleSwgdilcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGtleSl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZ2V0KGtleSlcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlKGtleSl7XG4gICAgICAgIHRoaXMuZGF0YS5kZWxldGUoa2V5KVxuICAgIH1cbn0iXX0=