
(function () {
var scripts = [{"deps":{"./assets/goap/Eating":10,"./assets/goap/Entity":12,"./assets/goap/Env":11,"./assets/goap/Equip":20,"./assets/goap/ExigenceFireAction":69,"./assets/goap/Fire":7,"./assets/goap/FireNpc":15,"./assets/goap/GotSleepAction":13,"./assets/goap/GotoEatAction":24,"./assets/goap/GotoEquipmentAction":21,"./assets/goap/GotoFireAction":18,"./assets/goap/GotoToiletAction":26,"./assets/goap/Sleep":28,"./assets/goap/StoreA":23,"./assets/goap/Toilet":27,"./assets/goap/ActionDataStatus":30,"./assets/goap/actions/ActionPayMoney":1,"./assets/goap/actions/ActionBuyShopItem":17,"./assets/goap/goaps/GoapOutFireExigence":68,"./assets/goap/goaps/GoapOutFire2":8,"./assets/src/NewScript":19,"./assets/src/utils/TimeUtil":2,"./assets/goap/DataMemory":29,"./assets/src/app/data/LabourerType":22,"./assets/src/app/data/T_LabourerContainer":3,"./assets/src/app/data/ToolType":25,"./assets/src/app/data/GameDataManager":32,"./assets/src/app/gamedata/ChoppingBlockComponent":35,"./assets/src/app/gamedata/Environment":31,"./assets/src/app/gamedata/ForgeComponent":38,"./assets/src/app/gamedata/IronRockComponent":36,"./assets/src/app/gamedata/SupplyPileComponent":34,"./assets/src/app/gamedata/ToolComponent":37,"./assets/src/app/gamedata/TreeComponent":39,"./assets/src/app/gamedata/BackPackComponent":41,"./assets/src/app/gamedata/actions/ChopTreeAction":4,"./assets/src/app/gamedata/actions/DropOffFirewoodAction":33,"./assets/src/app/gamedata/actions/DropOffLogsAction":43,"./assets/src/app/gamedata/actions/DropOffOreAction":40,"./assets/src/app/gamedata/actions/DropOffToolsAction":42,"./assets/src/app/gamedata/actions/ForgeToolAction":46,"./assets/src/app/gamedata/actions/MineOreAction":45,"./assets/src/app/gamedata/actions/PickUpLogsAction":47,"./assets/src/app/gamedata/actions/PickUpOreAction":48,"./assets/src/app/gamedata/actions/PickUpToolAction":49,"./assets/src/app/gamedata/actions/ChopFirewoodAction":51,"./assets/src/app/gamedata/labourers/Labourer":44,"./assets/src/app/gamedata/labourers/Logger":50,"./assets/src/app/gamedata/labourers/Miner":55,"./assets/src/app/gamedata/labourers/WoodCutter":56,"./assets/src/app/gamedata/labourers/Blacksmith":54,"./assets/src/app/gamedata/labourers/vlabourers/VLabourer":5,"./assets/src/app/gamedata/labourers/vlabourers/VLogger":53,"./assets/src/app/gamedata/labourers/vlabourers/VMiner":60,"./assets/src/app/gamedata/labourers/vlabourers/VWoodCutter":52,"./assets/src/app/gamedata/labourers/vlabourers/VBlacksmith":57,"./assets/src/app/view/EnvironmentView":9,"./assets/src/app/ai/fsm/state/StateEnum":64,"./assets/src/app/ai/fsm/state/StateIdle":63,"./assets/src/app/ai/fsm/state/StateMove":65,"./assets/src/app/ai/fsm/state/StatePerformAction":67,"./assets/src/app/ai/fsm/state/StateBase":66,"./assets/src/app/ai/goap/GoapAction":59,"./assets/src/app/ai/goap/GoapAgent":6,"./assets/src/app/ai/goap/GoapPlanner":62,"./assets/src/app/ai/goap/IGoap":58,"./assets/src/app/ai/goap/ActionStatus":61,"./assets/src/app/ai/fsm/StateManager":14,"./assets/src/app/base/VGameObject":16},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../src/app/ai/goap/GoapAction":59,"../../src/app/gamedata/Environment":31,"../../src/utils/TimeUtil":2},"path":"preview-scripts/assets/goap/actions/ActionPayMoney.js"},{"deps":{},"path":"preview-scripts/assets/src/utils/TimeUtil.js"},{"deps":{"./LabourerType":22,"./ToolType":25},"path":"preview-scripts/assets/src/app/data/T_LabourerContainer.js"},{"deps":{"../../../utils/TimeUtil":2,"../../ai/goap/ActionStatus":61,"../../ai/goap/GoapAction":59,"../Environment":31},"path":"preview-scripts/assets/src/app/gamedata/actions/ChopTreeAction.js"},{"deps":{"../../../base/VGameObject":16},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VLabourer.js"},{"deps":{"./GoapPlanner":62,"../fsm/state/StateIdle":63,"../fsm/state/StateMove":65,"../fsm/state/StatePerformAction":67,"../fsm/state/StateEnum":64,"../fsm/StateManager":14},"path":"preview-scripts/assets/src/app/ai/goap/GoapAgent.js"},{"deps":{"../src/app/base/VGameObject":16},"path":"preview-scripts/assets/goap/Fire.js"},{"deps":{"../ActionDataStatus":30,"../DataMemory":29,"../GotoEatAction":24,"../GotoEquipmentAction":21,"../GotoFireAction":18,"../GotoToiletAction":26,"../GotSleepAction":13},"path":"preview-scripts/assets/goap/goaps/GoapOutFire2.js"},{"deps":{"../gamedata/BackPackComponent":41,"../gamedata/ChoppingBlockComponent":35,"../gamedata/Environment":31,"../gamedata/ForgeComponent":38,"../gamedata/IronRockComponent":36,"../gamedata/labourers/Blacksmith":54,"../gamedata/labourers/Logger":50,"../gamedata/labourers/Miner":55,"../gamedata/labourers/WoodCutter":56,"../gamedata/SupplyPileComponent":34,"../gamedata/TreeComponent":39},"path":"preview-scripts/assets/src/app/view/EnvironmentView.js"},{"deps":{"../src/app/base/VGameObject":16},"path":"preview-scripts/assets/goap/Eating.js"},{"deps":{"../src/app/gamedata/Environment":31,"./Eating":10,"./Equip":20,"./Fire":7,"./Sleep":28,"./StoreA":23,"./Toilet":27},"path":"preview-scripts/assets/goap/Env.js"},{"deps":{"../src/app/ai/goap/GoapAgent":6},"path":"preview-scripts/assets/goap/Entity.js"},{"deps":{"./ActionDataStatus":30,"../src/app/ai/goap/GoapAction":59,"../src/app/gamedata/Environment":31,"../src/utils/TimeUtil":2},"path":"preview-scripts/assets/goap/GotSleepAction.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/fsm/StateManager.js"},{"deps":{"./ActionDataStatus":30,"./goaps/GoapOutFireExigence":68,"./goaps/GoapOutFire2":8,"../src/app/ai/goap/GoapAgent":6,"../src/app/ai/fsm/state/StateEnum":64},"path":"preview-scripts/assets/goap/FireNpc.js"},{"deps":{},"path":"preview-scripts/assets/src/app/base/VGameObject.js"},{"deps":{"../../src/app/ai/goap/GoapAction":59,"../../src/app/gamedata/Environment":31,"../../src/utils/TimeUtil":2},"path":"preview-scripts/assets/goap/actions/ActionBuyShopItem.js"},{"deps":{"./ActionDataStatus":30,"../src/app/ai/goap/GoapAction":59,"../src/app/gamedata/Environment":31,"../src/utils/TimeUtil":2},"path":"preview-scripts/assets/goap/GotoFireAction.js"},{"deps":{},"path":"preview-scripts/assets/src/NewScript.js"},{"deps":{"../src/app/base/VGameObject":16},"path":"preview-scripts/assets/goap/Equip.js"},{"deps":{"./ActionDataStatus":30,"../src/app/ai/goap/GoapAction":59,"../src/app/gamedata/Environment":31,"../src/utils/TimeUtil":2},"path":"preview-scripts/assets/goap/GotoEquipmentAction.js"},{"deps":{},"path":"preview-scripts/assets/src/app/data/LabourerType.js"},{"deps":{"../src/app/base/VGameObject":16},"path":"preview-scripts/assets/goap/StoreA.js"},{"deps":{"./ActionDataStatus":30,"../src/app/ai/goap/GoapAction":59,"../src/app/gamedata/Environment":31,"../src/utils/TimeUtil":2},"path":"preview-scripts/assets/goap/GotoEatAction.js"},{"deps":{},"path":"preview-scripts/assets/src/app/data/ToolType.js"},{"deps":{"./ActionDataStatus":30,"../src/app/ai/goap/GoapAction":59,"../src/app/gamedata/Environment":31,"../src/utils/TimeUtil":2},"path":"preview-scripts/assets/goap/GotoToiletAction.js"},{"deps":{"../src/app/base/VGameObject":16},"path":"preview-scripts/assets/goap/Toilet.js"},{"deps":{"../src/app/base/VGameObject":16},"path":"preview-scripts/assets/goap/Sleep.js"},{"deps":{},"path":"preview-scripts/assets/goap/DataMemory.js"},{"deps":{},"path":"preview-scripts/assets/goap/ActionDataStatus.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/Environment.js"},{"deps":{"./T_LabourerContainer":3},"path":"preview-scripts/assets/src/app/data/GameDataManager.js"},{"deps":{"../../ai/goap/ActionStatus":61,"../../ai/goap/GoapAction":59,"../Environment":31},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffFirewoodAction.js"},{"deps":{"../base/VGameObject":16},"path":"preview-scripts/assets/src/app/gamedata/SupplyPileComponent.js"},{"deps":{"../base/VGameObject":16},"path":"preview-scripts/assets/src/app/gamedata/ChoppingBlockComponent.js"},{"deps":{"../base/VGameObject":16},"path":"preview-scripts/assets/src/app/gamedata/IronRockComponent.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/ToolComponent.js"},{"deps":{"../base/VGameObject":16},"path":"preview-scripts/assets/src/app/gamedata/ForgeComponent.js"},{"deps":{"../base/VGameObject":16},"path":"preview-scripts/assets/src/app/gamedata/TreeComponent.js"},{"deps":{"../../ai/goap/ActionStatus":61,"../../ai/goap/GoapAction":59,"../Environment":31},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffOreAction.js"},{"deps":{},"path":"preview-scripts/assets/src/app/gamedata/BackPackComponent.js"},{"deps":{"../../ai/goap/ActionStatus":61,"../../ai/goap/GoapAction":59,"../Environment":31},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffToolsAction.js"},{"deps":{"../../ai/goap/ActionStatus":61,"../../ai/goap/GoapAction":59,"../Environment":31},"path":"preview-scripts/assets/src/app/gamedata/actions/DropOffLogsAction.js"},{"deps":{"../../ai/goap/ActionStatus":61,"../../ai/goap/GoapAgent":6,"../../data/GameDataManager":32,"../../data/LabourerType":22,"../ToolComponent":37},"path":"preview-scripts/assets/src/app/gamedata/labourers/Labourer.js"},{"deps":{"../../../utils/TimeUtil":2,"../../ai/goap/ActionStatus":61,"../../ai/goap/GoapAction":59,"../Environment":31},"path":"preview-scripts/assets/src/app/gamedata/actions/MineOreAction.js"},{"deps":{"../../../utils/TimeUtil":2,"../../ai/goap/ActionStatus":61,"../../ai/goap/GoapAction":59,"../Environment":31},"path":"preview-scripts/assets/src/app/gamedata/actions/ForgeToolAction.js"},{"deps":{"../../ai/goap/ActionStatus":61,"../../ai/goap/GoapAction":59},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpLogsAction.js"},{"deps":{"../../ai/goap/ActionStatus":61,"../../ai/goap/GoapAction":59,"../Environment":31},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpOreAction.js"},{"deps":{"../../ai/goap/ActionStatus":61,"../../ai/goap/GoapAction":59,"../Environment":31},"path":"preview-scripts/assets/src/app/gamedata/actions/PickUpToolAction.js"},{"deps":{"../../ai/goap/ActionStatus":61,"../actions/ChopTreeAction":4,"../actions/DropOffLogsAction":43,"../actions/PickUpToolAction":49,"./Labourer":44},"path":"preview-scripts/assets/src/app/gamedata/labourers/Logger.js"},{"deps":{"../../../utils/TimeUtil":2,"../../ai/goap/ActionStatus":61,"../../ai/goap/GoapAction":59,"../Environment":31},"path":"preview-scripts/assets/src/app/gamedata/actions/ChopFirewoodAction.js"},{"deps":{"./VLabourer":5},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VWoodCutter.js"},{"deps":{"./VLabourer":5},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VLogger.js"},{"deps":{"../../ai/goap/ActionStatus":61,"../actions/DropOffToolsAction":42,"../actions/ForgeToolAction":46,"../actions/PickUpOreAction":48,"./Labourer":44},"path":"preview-scripts/assets/src/app/gamedata/labourers/Blacksmith.js"},{"deps":{"../../ai/goap/ActionStatus":61,"../actions/DropOffOreAction":40,"../actions/MineOreAction":45,"../actions/PickUpToolAction":49,"./Labourer":44},"path":"preview-scripts/assets/src/app/gamedata/labourers/Miner.js"},{"deps":{"../../ai/goap/ActionStatus":61,"../actions/ChopFirewoodAction":51,"../actions/DropOffFirewoodAction":33,"../actions/PickUpToolAction":49,"./Labourer":44},"path":"preview-scripts/assets/src/app/gamedata/labourers/WoodCutter.js"},{"deps":{"./VLabourer":5},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VBlacksmith.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/IGoap.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/GoapAction.js"},{"deps":{"./VLabourer":5},"path":"preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VMiner.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/ActionStatus.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/goap/GoapPlanner.js"},{"deps":{"./StateBase":66,"./StateEnum":64},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateIdle.js"},{"deps":{},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateEnum.js"},{"deps":{"./StateBase":66,"./StateEnum":64},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateMove.js"},{"deps":{"../StateManager":14},"path":"preview-scripts/assets/src/app/ai/fsm/state/StateBase.js"},{"deps":{"./StateBase":66,"./StateEnum":64},"path":"preview-scripts/assets/src/app/ai/fsm/state/StatePerformAction.js"},{"deps":{"../ActionDataStatus":30,"../DataMemory":29,"../ExigenceFireAction":69,"../GotoEquipmentAction":21,"../GotoFireAction":18},"path":"preview-scripts/assets/goap/goaps/GoapOutFireExigence.js"},{"deps":{"./ActionDataStatus":30,"../src/app/ai/goap/GoapAction":59},"path":"preview-scripts/assets/goap/ExigenceFireAction.js"}];
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
    