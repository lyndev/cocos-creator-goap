
(function () {
var scripts = [{"deps":{"./assets/goap/Eating":13,"./assets/goap/Entity":19,"./assets/goap/Env":21,"./assets/goap/Equip":7,"./assets/goap/ExigenceFireAction":34,"./assets/goap/Fire":37,"./assets/goap/FireNpc":14,"./assets/goap/GotSleepAction":22,"./assets/goap/GotoEatAction":25,"./assets/goap/GotoEquipmentAction":15,"./assets/goap/GotoFireAction":17,"./assets/goap/GotoToiletAction":16,"./assets/goap/Sleep":18,"./assets/goap/StoreA":20,"./assets/goap/Toilet":23,"./assets/goap/ActionDataStatus":24,"./assets/goap/actions/ActionPayMoney":1,"./assets/goap/actions/ActionBuyShopItem":26,"./assets/goap/goaps/GoapOutFireExigence":28,"./assets/goap/goaps/GoapOutFire2":9,"./assets/shopping/ActionBuyerLeave":76,"./assets/shopping/ActionBuyerPay":75,"./assets/shopping/Buyer":8,"./assets/shopping/Checkstand":78,"./assets/shopping/ContextShop":74,"./assets/shopping/EBuyerStatus":49,"./assets/shopping/GoodsShelf":27,"./assets/shopping/LeavePoint":77,"./assets/shopping/ActionBuyProduct":29,"./assets/src/NewScript":35,"./assets/src/utils/TimeUtil":3,"./assets/goap/DataMemory":47,"./assets/src/app/data/LabourerType":2,"./assets/src/app/data/T_LabourerContainer":66,"./assets/src/app/data/ToolType":30,"./assets/src/app/data/GameDataManager":31,"./assets/src/app/gamedata/ChoppingBlockComponent":33,"./assets/src/app/gamedata/Environment":32,"./assets/src/app/gamedata/ForgeComponent":38,"./assets/src/app/gamedata/IronRockComponent":43,"./assets/src/app/gamedata/SupplyPileComponent":50,"./assets/src/app/gamedata/ToolComponent":36,"./assets/src/app/gamedata/TreeComponent":39,"./assets/src/app/gamedata/BackPackComponent":40,"./assets/src/app/gamedata/actions/ChopTreeAction":4,"./assets/src/app/gamedata/actions/DropOffFirewoodAction":48,"./assets/src/app/gamedata/actions/DropOffLogsAction":46,"./assets/src/app/gamedata/actions/DropOffOreAction":41,"./assets/src/app/gamedata/actions/DropOffToolsAction":42,"./assets/src/app/gamedata/actions/ForgeToolAction":45,"./assets/src/app/gamedata/actions/MineOreAction":44,"./assets/src/app/gamedata/actions/PickUpLogsAction":59,"./assets/src/app/gamedata/actions/PickUpOreAction":51,"./assets/src/app/gamedata/actions/PickUpToolAction":68,"./assets/src/app/gamedata/actions/ChopFirewoodAction":52,"./assets/src/app/gamedata/labourers/Labourer":53,"./assets/src/app/gamedata/labourers/Logger":67,"./assets/src/app/gamedata/labourers/Miner":54,"./assets/src/app/gamedata/labourers/WoodCutter":55,"./assets/src/app/gamedata/labourers/Blacksmith":56,"./assets/src/app/gamedata/labourers/vlabourers/VLabourer":6,"./assets/src/app/gamedata/labourers/vlabourers/VLogger":64,"./assets/src/app/gamedata/labourers/vlabourers/VMiner":60,"./assets/src/app/gamedata/labourers/vlabourers/VWoodCutter":57,"./assets/src/app/gamedata/labourers/vlabourers/VBlacksmith":58,"./assets/src/app/view/EnvironmentView":10,"./assets/src/app/ai/fsm/state/StateEnum":70,"./assets/src/app/ai/fsm/state/StateIdle":69,"./assets/src/app/ai/fsm/state/StateMove":73,"./assets/src/app/ai/fsm/state/StatePerformAction":72,"./assets/src/app/ai/fsm/state/StateBase":71,"./assets/src/app/ai/goap/GoapAction":5,"./assets/src/app/ai/goap/GoapAgent":61,"./assets/src/app/ai/goap/GoapPlanner":63,"./assets/src/app/ai/goap/IGoap":65,"./assets/src/app/ai/goap/ActionStatus":62,"./assets/src/app/ai/fsm/StateManager":12,"./assets/src/app/base/VGameObject":11},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../src/app/ai/goap/GoapAction":5,"../../src/app/gamedata/Environment":32,"../../src/utils/TimeUtil":3},"path":"preview-scripts/assets/goap/actions/ActionPayMoney.js"},{"deps":{},"path":"preview-scripts/assets/src/app/data/LabourerType.js"},{"deps":{},"path":"preview-scripts/assets/src/utils/TimeUtil.js"},{"deps":{"../../../utils/TimeUtil":3,"../../ai/goap/ActionStatus":62,"../../ai/goap/GoapAction":5,"../../base/VGameObject":11,"../Environment":32,"../labourers/Labourer":53},"path":"preview-scripts/assets/src/app/gamedata/actions/ChopTreeAction.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/GoapAction.js"},{"deps":{"../../../base/VGameObject":11},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VLabourer.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/goap/Equip.js"},{"deps":{"./ActionBuyerLeave":76,"./ActionBuyerPay":75,"./ActionBuyProduct":29,"./GoodsShelf":27,"../src/app/ai/goap/GoapAgent":61},"path":"preview-scripts/assets/shopping/Buyer.js"},{"deps":{"../ActionDataStatus":24,"../DataMemory":47,"../GotoEatAction":25,"../GotoEquipmentAction":15,"../GotoFireAction":17,"../GotoToiletAction":16,"../GotSleepAction":22},"path":"preview-scripts/assets/goap/goaps/GoapOutFire2.js"},{"deps":{"../gamedata/ChoppingBlockComponent":33,"../gamedata/Environment":32,"../gamedata/ForgeComponent":38,"../gamedata/IronRockComponent":43,"../gamedata/SupplyPileComponent":50,"../gamedata/TreeComponent":39,"../gamedata/BackPackComponent":40,"../gamedata/labourers/Logger":67,"../gamedata/labourers/Miner":54,"../gamedata/labourers/WoodCutter":55,"../gamedata/labourers/Blacksmith":56},"path":"preview-scripts/assets/src/app/view/EnvironmentView.js"},{"deps":{},"path":"preview-scripts/assets/src/app/base/VGameObject.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/fsm/StateManager.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/goap/Eating.js"},{"deps":{"./ActionDataStatus":24,"../src/app/ai/goap/GoapAgent":61,"./goaps/GoapOutFire2":9,"./goaps/GoapOutFireExigence":28,"../src/app/ai/fsm/state/StateEnum":70},"path":"preview-scripts/assets/goap/FireNpc.js"},{"deps":{"../src/app/ai/goap/GoapAction":5,"../src/app/gamedata/Environment":32,"../src/utils/TimeUtil":3,"./ActionDataStatus":24},"path":"preview-scripts/assets/goap/GotoEquipmentAction.js"},{"deps":{"../src/app/ai/goap/GoapAction":5,"../src/app/gamedata/Environment":32,"../src/utils/TimeUtil":3,"./ActionDataStatus":24},"path":"preview-scripts/assets/goap/GotoToiletAction.js"},{"deps":{"../src/app/ai/goap/GoapAction":5,"../src/app/gamedata/Environment":32,"../src/utils/TimeUtil":3,"./ActionDataStatus":24},"path":"preview-scripts/assets/goap/GotoFireAction.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/goap/Sleep.js"},{"deps":{"../src/app/ai/goap/GoapAgent":61},"path":"preview-scripts/assets/goap/Entity.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/goap/StoreA.js"},{"deps":{"../src/app/gamedata/Environment":32,"./Eating":13,"./Equip":7,"./Fire":37,"./Sleep":18,"./StoreA":20,"./Toilet":23},"path":"preview-scripts/assets/goap/Env.js"},{"deps":{"../src/app/ai/goap/GoapAction":5,"../src/app/gamedata/Environment":32,"../src/utils/TimeUtil":3,"./ActionDataStatus":24},"path":"preview-scripts/assets/goap/GotSleepAction.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/goap/Toilet.js"},{"deps":{},"path":"preview-scripts/assets/goap/ActionDataStatus.js"},{"deps":{"../src/app/ai/goap/GoapAction":5,"../src/app/gamedata/Environment":32,"../src/utils/TimeUtil":3,"./ActionDataStatus":24},"path":"preview-scripts/assets/goap/GotoEatAction.js"},{"deps":{"../../src/app/ai/goap/GoapAction":5,"../../src/app/gamedata/Environment":32,"../../src/utils/TimeUtil":3},"path":"preview-scripts/assets/goap/actions/ActionBuyShopItem.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/shopping/GoodsShelf.js"},{"deps":{"../ActionDataStatus":24,"../DataMemory":47,"../ExigenceFireAction":34,"../GotoEquipmentAction":15,"../GotoFireAction":17},"path":"preview-scripts/assets/goap/goaps/GoapOutFireExigence.js"},{"deps":{"./Buyer":8,"./ContextShop":74,"../src/app/ai/goap/GoapAction":5},"path":"preview-scripts/assets/shopping/ActionBuyProduct.js"},{"deps":{},"path":"preview-scripts/assets/src/app/data/ToolType.js"},{"deps":{"./T_LabourerContainer":66},"path":"preview-scripts/assets/src/app/data/GameDataManager.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/Environment.js"},{"deps":{"../base/VGameObject":11},"path":"preview-scripts/assets/src/app/gamedata/ChoppingBlockComponent.js"},{"deps":{"../src/app/ai/goap/GoapAction":5,"./ActionDataStatus":24},"path":"preview-scripts/assets/goap/ExigenceFireAction.js"},{"deps":{},"path":"preview-scripts/assets/src/NewScript.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/ToolComponent.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/goap/Fire.js"},{"deps":{"../base/VGameObject":11},"path":"preview-scripts/assets/src/app/gamedata/ForgeComponent.js"},{"deps":{"../base/VGameObject":11},"path":"preview-scripts/assets/src/app/gamedata/TreeComponent.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/BackPackComponent.js"},{"deps":{"../../ai/goap/ActionStatus":62,"../../ai/goap/GoapAction":5,"../../base/VGameObject":11,"../Environment":32,"../labourers/Labourer":53},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffOreAction.js"},{"deps":{"../../ai/goap/ActionStatus":62,"../../ai/goap/GoapAction":5,"../../base/VGameObject":11,"../Environment":32},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffToolsAction.js"},{"deps":{"../base/VGameObject":11},"path":"preview-scripts/assets/src/app/gamedata/IronRockComponent.js"},{"deps":{"../../../utils/TimeUtil":3,"../../ai/goap/ActionStatus":62,"../../ai/goap/GoapAction":5,"../../base/VGameObject":11,"../Environment":32,"../labourers/Labourer":53},"path":"preview-scripts/assets/src/app/gamedata/actions/MineOreAction.js"},{"deps":{"../../../utils/TimeUtil":3,"../../ai/goap/ActionStatus":62,"../../ai/goap/GoapAction":5,"../../base/VGameObject":11,"../Environment":32,"../labourers/Labourer":53},"path":"preview-scripts/assets/src/app/gamedata/actions/ForgeToolAction.js"},{"deps":{"../../ai/goap/ActionStatus":62,"../../ai/goap/GoapAction":5,"../../base/VGameObject":11,"../Environment":32,"../labourers/Labourer":53},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffLogsAction.js"},{"deps":{},"path":"preview-scripts/assets/goap/DataMemory.js"},{"deps":{"../Environment":32,"../../base/VGameObject":11,"../labourers/Labourer":53,"../../ai/goap/ActionStatus":62,"../../ai/goap/GoapAction":5},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffFirewoodAction.js"},{"deps":{},"path":"preview-scripts/assets/shopping/EBuyerStatus.js"},{"deps":{"../base/VGameObject":11},"path":"preview-scripts/assets/src/app/gamedata/SupplyPileComponent.js"},{"deps":{"../../ai/goap/ActionStatus":62,"../../ai/goap/GoapAction":5,"../../base/VGameObject":11,"../Environment":32,"../labourers/Labourer":53},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpOreAction.js"},{"deps":{"../Environment":32,"../../../utils/TimeUtil":3,"../../base/VGameObject":11,"../labourers/Labourer":53,"../../ai/goap/ActionStatus":62,"../../ai/goap/GoapAction":5},"path":"preview-scripts/assets/src/app/gamedata/actions/ChopFirewoodAction.js"},{"deps":{"../ToolComponent":36,"../../data/LabourerType":2,"../../data/GameDataManager":31,"../../ai/goap/ActionStatus":62,"../../ai/goap/GoapAgent":61},"path":"preview-scripts/assets/src/app/gamedata/labourers/Labourer.js"},{"deps":{"./Labourer":53,"../../base/VGameObject":11,"../actions/MineOreAction":44,"../actions/PickUpToolAction":68,"../actions/DropOffOreAction":41,"../../ai/goap/ActionStatus":62},"path":"preview-scripts/assets/src/app/gamedata/labourers/Miner.js"},{"deps":{"./Labourer":53,"../../base/VGameObject":11,"../actions/DropOffFirewoodAction":48,"../actions/PickUpToolAction":68,"../actions/ChopFirewoodAction":52,"../../ai/goap/ActionStatus":62},"path":"preview-scripts/assets/src/app/gamedata/labourers/WoodCutter.js"},{"deps":{"./Labourer":53,"../../base/VGameObject":11,"../actions/ForgeToolAction":45,"../actions/PickUpOreAction":51,"../actions/DropOffToolsAction":42,"../../ai/goap/ActionStatus":62},"path":"preview-scripts/assets/src/app/gamedata/labourers/Blacksmith.js"},{"deps":{"./VLabourer":6},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VWoodCutter.js"},{"deps":{"./VLabourer":6},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VBlacksmith.js"},{"deps":{"../../ai/goap/ActionStatus":62,"../../ai/goap/GoapAction":5,"../../base/VGameObject":11,"../labourers/Labourer":53},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpLogsAction.js"},{"deps":{"./VLabourer":6},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VMiner.js"},{"deps":{"./GoapPlanner":63,"../fsm/state/StateIdle":69,"../fsm/state/StateMove":73,"../fsm/state/StatePerformAction":72,"../fsm/state/StateEnum":70,"../fsm/StateManager":12},"path":"preview-scripts/assets/src/app/ai/goap/GoapAgent.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/ActionStatus.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/GoapPlanner.js"},{"deps":{"./VLabourer":6},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VLogger.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/IGoap.js"},{"deps":{"./LabourerType":2,"./ToolType":30},"path":"preview-scripts/assets/src/app/data/T_LabourerContainer.js"},{"deps":{"./Labourer":53,"../../base/VGameObject":11,"../actions/DropOffLogsAction":46,"../actions/PickUpToolAction":68,"../actions/ChopTreeAction":4,"../../ai/goap/ActionStatus":62},"path":"preview-scripts/assets/src/app/gamedata/labourers/Logger.js"},{"deps":{"../../ai/goap/ActionStatus":62,"../../ai/goap/GoapAction":5,"../../base/VGameObject":11,"../Environment":32,"../labourers/Labourer":53},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpToolAction.js"},{"deps":{"../../goap/GoapAgent":61,"./StateBase":71,"./StateEnum":70},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateIdle.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateEnum.js"},{"deps":{"../StateManager":12},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateBase.js"},{"deps":{"../../goap/GoapAgent":61,"./StateBase":71,"./StateEnum":70},"path":"preview-scripts/assets/src/app/ai/fsm/state/StatePerformAction.js"},{"deps":{"../../goap/GoapAgent":61,"./StateBase":71,"./StateEnum":70},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateMove.js"},{"deps":{"./Checkstand":78,"./GoodsShelf":27,"./LeavePoint":77},"path":"preview-scripts/assets/shopping/ContextShop.js"},{"deps":{"./Buyer":8,"./ContextShop":74,"../src/app/ai/goap/GoapAction":5},"path":"preview-scripts/assets/shopping/ActionBuyerPay.js"},{"deps":{"./ContextShop":74,"../src/app/ai/goap/GoapAction":5},"path":"preview-scripts/assets/shopping/ActionBuyerLeave.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/shopping/LeavePoint.js"},{"deps":{"../src/app/base/VGameObject":11},"path":"preview-scripts/assets/shopping/Checkstand.js"}];
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
    