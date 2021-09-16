"use strict";
cc._RF.push(module, '5d81aYW+MRMsIoQeqANKXML', 'T_LabourerContainer');
// src/app/data/T_LabourerContainer.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.T_LabourerBean = exports.T_LabourerContainer = void 0;
var LabourerType_1 = require("./LabourerType");
var ToolType_1 = require("./ToolType");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-11-03 18:37:14
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-03 19:03:22
 */
var T_LabourerContainer = /** @class */ (function () {
    function T_LabourerContainer() {
        this._labourerMap = new Map();
        this._labourerMap.set(LabourerType_1.LabourerType.Blacksmith, new T_LabourerBean(LabourerType_1.LabourerType.Blacksmith, 1, ToolType_1.ToolType.Axe));
        this._labourerMap.set(LabourerType_1.LabourerType.Logger, new T_LabourerBean(LabourerType_1.LabourerType.Logger, 2, ToolType_1.ToolType.Axe));
        this._labourerMap.set(LabourerType_1.LabourerType.Miner, new T_LabourerBean(LabourerType_1.LabourerType.Miner, 1, ToolType_1.ToolType.Pick));
        this._labourerMap.set(LabourerType_1.LabourerType.WoodCutter, new T_LabourerBean(LabourerType_1.LabourerType.WoodCutter, 2, ToolType_1.ToolType.Axe));
    }
    Object.defineProperty(T_LabourerContainer.prototype, "labourerMap", {
        get: function () {
            return this._labourerMap;
        },
        enumerable: false,
        configurable: true
    });
    T_LabourerContainer.prototype.getLabourerByType = function (type) {
        if (this._labourerMap.has(type)) {
            return this._labourerMap.get(type);
        }
        else {
            console.warn("can not find labourer by type: ", type);
            return null;
        }
    };
    return T_LabourerContainer;
}());
exports.T_LabourerContainer = T_LabourerContainer;
var T_LabourerBean = /** @class */ (function () {
    function T_LabourerBean(type, speed, toolType) {
        this.type = type;
        this.speed = speed;
        this.toolType = toolType;
    }
    return T_LabourerBean;
}());
exports.T_LabourerBean = T_LabourerBean;

cc._RF.pop();