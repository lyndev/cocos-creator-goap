
(function () {
var scripts = [{"deps":{"./assets/goap/Eating":13,"./assets/goap/Entity":7,"./assets/goap/Env":15,"./assets/goap/Equip":14,"./assets/goap/ExigenceFireAction":25,"./assets/goap/Fire":16,"./assets/goap/FireNpc":27,"./assets/goap/GotSleepAction":17,"./assets/goap/GotoEatAction":19,"./assets/goap/GotoEquipmentAction":18,"./assets/goap/GotoFireAction":28,"./assets/goap/GotoToiletAction":20,"./assets/goap/Sleep":22,"./assets/goap/StoreA":30,"./assets/goap/Toilet":21,"./assets/goap/ActionDataStatus":23,"./assets/goap/actions/ActionPayMoney":1,"./assets/goap/actions/ActionBuyShopItem":24,"./assets/goap/goaps/GoapOutFireExigence":8,"./assets/goap/goaps/GoapOutFire2":31,"./assets/shopping/ActionBuyerLeave":9,"./assets/shopping/ActionBuyerPay":26,"./assets/shopping/ActionGetBag":29,"./assets/shopping/BagPoint":33,"./assets/shopping/Buyer":32,"./assets/shopping/Checkstand":34,"./assets/shopping/ContextShop":35,"./assets/shopping/EBuyerStatus":42,"./assets/shopping/GoodsShelf":44,"./assets/shopping/LeavePoint":40,"./assets/shopping/ActionBuyProduct":37,"./assets/src/NewScript":36,"./assets/src/utils/TimeUtil":2,"./assets/goap/DataMemory":38,"./assets/src/app/data/LabourerType":3,"./assets/src/app/data/T_LabourerContainer":39,"./assets/src/app/data/ToolType":41,"./assets/src/app/data/GameDataManager":43,"./assets/src/app/gamedata/ChoppingBlockComponent":46,"./assets/src/app/gamedata/Environment":45,"./assets/src/app/gamedata/ForgeComponent":47,"./assets/src/app/gamedata/IronRockComponent":51,"./assets/src/app/gamedata/SupplyPileComponent":48,"./assets/src/app/gamedata/ToolComponent":49,"./assets/src/app/gamedata/TreeComponent":50,"./assets/src/app/gamedata/BackPackComponent":54,"./assets/src/app/gamedata/actions/ChopTreeAction":4,"./assets/src/app/gamedata/actions/DropOffFirewoodAction":56,"./assets/src/app/gamedata/actions/DropOffLogsAction":52,"./assets/src/app/gamedata/actions/DropOffOreAction":53,"./assets/src/app/gamedata/actions/DropOffToolsAction":55,"./assets/src/app/gamedata/actions/ForgeToolAction":58,"./assets/src/app/gamedata/actions/MineOreAction":60,"./assets/src/app/gamedata/actions/PickUpLogsAction":57,"./assets/src/app/gamedata/actions/PickUpOreAction":59,"./assets/src/app/gamedata/actions/PickUpToolAction":70,"./assets/src/app/gamedata/actions/ChopFirewoodAction":71,"./assets/src/app/gamedata/labourers/Labourer":61,"./assets/src/app/gamedata/labourers/Logger":69,"./assets/src/app/gamedata/labourers/Miner":62,"./assets/src/app/gamedata/labourers/WoodCutter":64,"./assets/src/app/gamedata/labourers/Blacksmith":68,"./assets/src/app/gamedata/labourers/vlabourers/VLabourer":63,"./assets/src/app/gamedata/labourers/vlabourers/VLogger":5,"./assets/src/app/gamedata/labourers/vlabourers/VMiner":65,"./assets/src/app/gamedata/labourers/vlabourers/VWoodCutter":66,"./assets/src/app/gamedata/labourers/vlabourers/VBlacksmith":67,"./assets/src/app/view/EnvironmentView":10,"./assets/src/app/ai/fsm/state/StateEnum":76,"./assets/src/app/ai/fsm/state/StateIdle":77,"./assets/src/app/ai/fsm/state/StateMove":78,"./assets/src/app/ai/fsm/state/StatePerformAction":79,"./assets/src/app/ai/fsm/state/StateBase":80,"./assets/src/app/ai/goap/GoapAction":6,"./assets/src/app/ai/goap/GoapAgent":72,"./assets/src/app/ai/goap/GoapPlanner":73,"./assets/src/app/ai/goap/IGoap":75,"./assets/src/app/ai/goap/ActionStatus":74,"./assets/src/app/ai/fsm/StateManager":12,"./assets/src/app/base/VGameObject":11},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../src/app/ai/goap/GoapAction":6,"../../src/app/gamedata/Environment":45,"../../src/utils/TimeUtil":2},"path":"preview-scripts/assets/goap/actions/ActionPayMoney.js"},{"deps":{},"path":"preview-scripts/assets/src/utils/TimeUtil.js"},{"deps":{},"path":"preview-scripts/assets/src/app/data/LabourerType.js"},{"deps":{"../../../utils/TimeUtil":2,"../../ai/goap/ActionStatus":74,"../../ai/goap/GoapAction":6,"../../base/VGameObject":11,"../Environment":45,"../labourers/Labourer":61},"path":"preview-scripts/assets/src/app/gamedata/actions/ChopTreeAction.js"},{"deps":{"./VLabourer":63},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VLogger.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/GoapAction.js"},{"deps":{"../src/app/ai/goap/GoapAgent":72},"path":"preview-scripts/assets/goap/Entity.js"},{"deps":{"../ActionDataStatus":23,"../DataMemory":38,"../ExigenceFireAction":25,"../GotoEquipmentAction":18,"../GotoFireAction":28},"path":"preview-scripts/assets/goap/goaps/GoapOutFireExigence.js"},{"deps":{"./ContextShop":35,"../src/app/ai/goap/GoapAction":6},"path":"preview-scripts/assets/shopping/ActionBuyerLeave.js"},{"deps":{"../gamedata/BackPackComponent":54,"../gamedata/ChoppingBlockComponent":46,"../gamedata/Environment":45,"../gamedata/ForgeComponent":47,"../gamedata/IronRockComponent":51,"../gamedata/labourers/Blacksmith":68,"../gamedata/labourers/Logger":69,"../gamedata/labourers/Miner":62,"../gamedata/labourers/WoodCutter":64,"../gamedata/SupplyPileComponent":48,"../gamedata/TreeComponent":50},"path":"preview-scripts/assets/src/app/view/EnvironmentView.js"},{"deps":{},"path":"preview-scripts/assets/src/app/base/VGameObject.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/fsm/StateManager.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/goap/Eating.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/goap/Equip.js"},{"deps":{"../src/app/gamedata/Environment":45,"./Eating":13,"./Equip":14,"./Fire":16,"./Sleep":22,"./StoreA":30,"./Toilet":21},"path":"preview-scripts/assets/goap/Env.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/goap/Fire.js"},{"deps":{"../src/app/ai/goap/GoapAction":6,"../src/app/gamedata/Environment":45,"../src/utils/TimeUtil":2,"./ActionDataStatus":23},"path":"preview-scripts/assets/goap/GotSleepAction.js"},{"deps":{"../src/app/ai/goap/GoapAction":6,"../src/app/gamedata/Environment":45,"../src/utils/TimeUtil":2,"./ActionDataStatus":23},"path":"preview-scripts/assets/goap/GotoEquipmentAction.js"},{"deps":{"../src/app/ai/goap/GoapAction":6,"../src/app/gamedata/Environment":45,"../src/utils/TimeUtil":2,"./ActionDataStatus":23},"path":"preview-scripts/assets/goap/GotoEatAction.js"},{"deps":{"../src/app/ai/goap/GoapAction":6,"../src/app/gamedata/Environment":45,"../src/utils/TimeUtil":2,"./ActionDataStatus":23},"path":"preview-scripts/assets/goap/GotoToiletAction.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/goap/Toilet.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/goap/Sleep.js"},{"deps":{},"path":"preview-scripts/assets/goap/ActionDataStatus.js"},{"deps":{"../../src/app/ai/goap/GoapAction":6,"../../src/app/gamedata/Environment":45,"../../src/utils/TimeUtil":2},"path":"preview-scripts/assets/goap/actions/ActionBuyShopItem.js"},{"deps":{"../src/app/ai/goap/GoapAction":6,"./ActionDataStatus":23},"path":"preview-scripts/assets/goap/ExigenceFireAction.js"},{"deps":{"./Buyer":32,"./ContextShop":35,"../src/app/ai/goap/GoapAction":6},"path":"preview-scripts/assets/shopping/ActionBuyerPay.js"},{"deps":{"./ActionDataStatus":23,"../src/app/ai/goap/GoapAgent":72,"./goaps/GoapOutFire2":31,"./goaps/GoapOutFireExigence":8,"../src/app/ai/fsm/state/StateEnum":76},"path":"preview-scripts/assets/goap/FireNpc.js"},{"deps":{"../src/app/ai/goap/GoapAction":6,"../src/app/gamedata/Environment":45,"../src/utils/TimeUtil":2,"./ActionDataStatus":23},"path":"preview-scripts/assets/goap/GotoFireAction.js"},{"deps":{"./ContextShop":35,"../src/app/ai/goap/GoapAction":6},"path":"preview-scripts/assets/shopping/ActionGetBag.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/goap/StoreA.js"},{"deps":{"../ActionDataStatus":23,"../DataMemory":38,"../GotoEatAction":19,"../GotoEquipmentAction":18,"../GotoFireAction":28,"../GotoToiletAction":20,"../GotSleepAction":17},"path":"preview-scripts/assets/goap/goaps/GoapOutFire2.js"},{"deps":{"./ActionBuyerLeave":9,"./ActionBuyerPay":26,"./ActionBuyProduct":37,"./ActionGetBag":29,"./GoodsShelf":44,"../src/app/ai/goap/GoapAgent":72},"path":"preview-scripts/assets/shopping/Buyer.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/shopping/BagPoint.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/shopping/Checkstand.js"},{"deps":{"./BagPoint":33,"./Checkstand":34,"./GoodsShelf":44,"./LeavePoint":40},"path":"preview-scripts/assets/shopping/ContextShop.js"},{"deps":{},"path":"preview-scripts/assets/src/NewScript.js"},{"deps":{"./Buyer":32,"./ContextShop":35,"../src/app/ai/goap/GoapAction":6},"path":"preview-scripts/assets/shopping/ActionBuyProduct.js"},{"deps":{},"path":"preview-scripts/assets/goap/DataMemory.js"},{"deps":{"./LabourerType":3,"./ToolType":41},"path":"preview-scripts/assets/src/app/data/T_LabourerContainer.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/shopping/LeavePoint.js"},{"deps":{},"path":"preview-scripts/assets/src/app/data/ToolType.js"},{"deps":{},"path":"preview-scripts/assets/shopping/EBuyerStatus.js"},{"deps":{"./T_LabourerContainer":39},"path":"preview-scripts/assets/src/app/data/GameDataManager.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/shopping/GoodsShelf.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/Environment.js"},{"deps":{"../base/VGameObject":11},"path":"preview-scripts/assets/src/app/gamedata/ChoppingBlockComponent.js"},{"deps":{"../base/VGameObject":11},"path":"preview-scripts/assets/src/app/gamedata/ForgeComponent.js"},{"deps":{"../base/VGameObject":11},"path":"preview-scripts/assets/src/app/gamedata/SupplyPileComponent.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/ToolComponent.js"},{"deps":{"../base/VGameObject":11},"path":"preview-scripts/assets/src/app/gamedata/TreeComponent.js"},{"deps":{"../base/VGameObject":11},"path":"preview-scripts/assets/src/app/gamedata/IronRockComponent.js"},{"deps":{"../../ai/goap/ActionStatus":74,"../../ai/goap/GoapAction":6,"../../base/VGameObject":11,"../Environment":45,"../labourers/Labourer":61},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffLogsAction.js"},{"deps":{"../../ai/goap/ActionStatus":74,"../../ai/goap/GoapAction":6,"../../base/VGameObject":11,"../Environment":45,"../labourers/Labourer":61},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffOreAction.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/BackPackComponent.js"},{"deps":{"../../ai/goap/ActionStatus":74,"../../ai/goap/GoapAction":6,"../../base/VGameObject":11,"../Environment":45},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffToolsAction.js"},{"deps":{"../../ai/goap/ActionStatus":74,"../../ai/goap/GoapAction":6,"../../base/VGameObject":11,"../Environment":45,"../labourers/Labourer":61},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffFirewoodAction.js"},{"deps":{"../../ai/goap/ActionStatus":74,"../../ai/goap/GoapAction":6,"../../base/VGameObject":11,"../labourers/Labourer":61},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpLogsAction.js"},{"deps":{"../../../utils/TimeUtil":2,"../../ai/goap/ActionStatus":74,"../../ai/goap/GoapAction":6,"../../base/VGameObject":11,"../Environment":45,"../labourers/Labourer":61},"path":"preview-scripts/assets/src/app/gamedata/actions/ForgeToolAction.js"},{"deps":{"../../ai/goap/ActionStatus":74,"../../ai/goap/GoapAction":6,"../../base/VGameObject":11,"../Environment":45,"../labourers/Labourer":61},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpOreAction.js"},{"deps":{"../../../utils/TimeUtil":2,"../../ai/goap/ActionStatus":74,"../../ai/goap/GoapAction":6,"../../base/VGameObject":11,"../Environment":45,"../labourers/Labourer":61},"path":"preview-scripts/assets/src/app/gamedata/actions/MineOreAction.js"},{"deps":{"../../ai/goap/ActionStatus":74,"../../ai/goap/GoapAgent":72,"../../data/GameDataManager":43,"../../data/LabourerType":3,"../ToolComponent":49},"path":"preview-scripts/assets/src/app/gamedata/labourers/Labourer.js"},{"deps":{"../../ai/goap/ActionStatus":74,"../../base/VGameObject":11,"../actions/DropOffOreAction":53,"../actions/MineOreAction":60,"../actions/PickUpToolAction":70,"./Labourer":61},"path":"preview-scripts/assets/src/app/gamedata/labourers/Miner.js"},{"deps":{"../../../base/VGameObject":11},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VLabourer.js"},{"deps":{"../../ai/goap/ActionStatus":74,"../../base/VGameObject":11,"../actions/ChopFirewoodAction":71,"../actions/DropOffFirewoodAction":56,"../actions/PickUpToolAction":70,"./Labourer":61},"path":"preview-scripts/assets/src/app/gamedata/labourers/WoodCutter.js"},{"deps":{"./VLabourer":63},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VMiner.js"},{"deps":{"./VLabourer":63},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VWoodCutter.js"},{"deps":{"./VLabourer":63},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VBlacksmith.js"},{"deps":{"../../ai/goap/ActionStatus":74,"../../base/VGameObject":11,"../actions/DropOffToolsAction":55,"../actions/ForgeToolAction":58,"../actions/PickUpOreAction":59,"./Labourer":61},"path":"preview-scripts/assets/src/app/gamedata/labourers/Blacksmith.js"},{"deps":{"../../ai/goap/ActionStatus":74,"../../base/VGameObject":11,"../actions/ChopTreeAction":4,"../actions/DropOffLogsAction":52,"../actions/PickUpToolAction":70,"./Labourer":61},"path":"preview-scripts/assets/src/app/gamedata/labourers/Logger.js"},{"deps":{"../../ai/goap/ActionStatus":74,"../../ai/goap/GoapAction":6,"../../base/VGameObject":11,"../Environment":45,"../labourers/Labourer":61},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpToolAction.js"},{"deps":{"../../../utils/TimeUtil":2,"../../ai/goap/ActionStatus":74,"../../ai/goap/GoapAction":6,"../../base/VGameObject":11,"../Environment":45,"../labourers/Labourer":61},"path":"preview-scripts/assets/src/app/gamedata/actions/ChopFirewoodAction.js"},{"deps":{"../fsm/state/StateEnum":76,"../fsm/state/StateIdle":77,"../fsm/state/StateMove":78,"../fsm/state/StatePerformAction":79,"../fsm/StateManager":12,"./GoapPlanner":73},"path":"preview-scripts/assets/src/app/ai/goap/GoapAgent.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/GoapPlanner.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/ActionStatus.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/IGoap.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateEnum.js"},{"deps":{"../../goap/GoapAgent":72,"./StateBase":80,"./StateEnum":76},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateIdle.js"},{"deps":{"../../goap/GoapAgent":72,"./StateBase":80,"./StateEnum":76},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateMove.js"},{"deps":{"../../goap/GoapAgent":72,"./StateBase":80,"./StateEnum":76},"path":"preview-scripts/assets/src/app/ai/fsm/state/StatePerformAction.js"},{"deps":{"../StateManager":12},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateBase.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    