
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/goap/GoapPlanner.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e207LkB2BGBbOyFkEIyz4d', 'GoapPlanner');
// src/app/ai/goap/GoapPlanner.ts

"use strict";
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:35
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 18:04:36
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanNode = exports.GoapPlanner = void 0;
/**
 * Plans what actions can be completed in order to fulfill a goal state.
 */
var GoapPlanner = /** @class */ (function () {
    function GoapPlanner() {
    }
    /**
     * Plan what sequence of actions can fulfill the goal.
     * Returns null if a plan could not be found, or a list of the actions
     * that must be performed, in order, to fulfill the goal.
     */
    GoapPlanner.prototype.plan = function (iGoap, availableActions, worldState, goal) {
        var labourer = iGoap;
        // reset the actions so we can start fresh with them
        for (var _i = 0, availableActions_1 = availableActions; _i < availableActions_1.length; _i++) {
            var a = availableActions_1[_i];
            a.doReset();
        }
        // check what actions can run using their checkProceduralPrecondition
        var usableActions = [];
        for (var _a = 0, availableActions_2 = availableActions; _a < availableActions_2.length; _a++) {
            var a = availableActions_2[_a];
            if (a.checkProceduralPrecondition(labourer)) {
                usableActions.push(a);
            }
        }
        // we now have all actions that can run, stored in usableActions
        // build up the tree and record the leaf nodes that provide a solution to the goal.
        var leaves = [];
        // build graph
        var start = new PlanNode(null, 0, worldState, null);
        var success = this.buildGraph(start, leaves, usableActions, goal);
        if (!success) {
            // oh no, we didn't get a plan
            //console.log("NO PLan");
            return null;
        }
        // get the cheapest leaf
        var cheapest = null;
        for (var _b = 0, leaves_1 = leaves; _b < leaves_1.length; _b++) {
            var leaf = leaves_1[_b];
            if (cheapest == null) {
                cheapest = leaf;
            }
            else {
                if (leaf.runningCost < cheapest.runningCost) {
                    cheapest = leaf;
                }
            }
        }
        // get its node and work back through the parents
        var result = [];
        var n = cheapest;
        while (n != null) {
            if (n.action != null) {
                result.push(n.action);
            }
            n = n.parent;
        }
        result.reverse();
        // hooray we have a plan!
        return result;
    };
    /**
     * Create a subset of the actions excluding the removeMe one. Creates a new set.
     */
    GoapPlanner.prototype.actionSubset = function (actions, removeMe) {
        var subset = [];
        for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
            var a = actions_1[_i];
            if (a != removeMe) {
                subset.push(a);
            }
        }
        return subset;
    };
    /**
     * Returns true if at least one solution was found.
     * The possible paths are stored in the leaves list. Each leaf has a
     * 'runningCost' value where the lowest cost will be the best action
     * sequence.
     */
    GoapPlanner.prototype.buildGraph = function (parent, leaves, usableActions, goal) {
        var foundOne = false;
        // go through each action available at this node and see if we can use it here
        for (var _i = 0, usableActions_1 = usableActions; _i < usableActions_1.length; _i++) {
            var action = usableActions_1[_i];
            // if the parent state has the conditions for this action's preconditions, we can use it here
            if (this.inState(action.Preconditions, parent.state)) {
                // apply the action's effects to the parent state
                var currentState = this.populateState(parent.state, action.Effects);
                var node = new PlanNode(parent, parent.runningCost + action.cost, currentState, action);
                if (this.inState(goal, currentState)) {
                    // we found a solution!
                    leaves.push(node);
                    foundOne = true;
                }
                else {
                    // not at a solution yet, so test all the remaining actions and branch out the tree
                    var subset = this.actionSubset(usableActions, action);
                    var found = this.buildGraph(node, leaves, subset, goal);
                    if (found) {
                        foundOne = true;
                    }
                }
            }
        }
        return foundOne;
    };
    /**
     * Check that all items in 'test' are in 'state'. If just one does not match or is not there
     * then this returns false.
     */
    GoapPlanner.prototype.inState = function (test, state) {
        var testKeyArr = Array.from(test.keys());
        for (var _i = 0, testKeyArr_1 = testKeyArr; _i < testKeyArr_1.length; _i++) {
            var key = testKeyArr_1[_i];
            if (test.get(key) != state.get(key)) {
                return false;
            }
        }
        return true;
    };
    /**
     * Apply the stateChange to the currentState
     */
    GoapPlanner.prototype.populateState = function (currentState, stateChange) {
        var state = new Map();
        // copy the KVPs over as new objects
        currentState.forEach(function (value, key) {
            state.set(key, value);
        });
        stateChange.forEach(function (value, key) {
            state.set(key, value);
        });
        return state;
    };
    return GoapPlanner;
}());
exports.GoapPlanner = GoapPlanner;
var PlanNode = /** @class */ (function () {
    function PlanNode(parent, runningCost, state, action) {
        this.parent = parent;
        this.runningCost = runningCost;
        this.state = state;
        this.action = action;
    }
    return PlanNode;
}());
exports.PlanNode = PlanNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxnb2FwXFxHb2FwUGxhbm5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztHQU1HOzs7QUFPSDs7R0FFRztBQUNIO0lBQUE7SUE4SUEsQ0FBQztJQTdJQTs7OztPQUlHO0lBQ0ksMEJBQUksR0FBWCxVQUFZLEtBQVksRUFBRSxnQkFBOEIsRUFBRSxVQUFxQyxFQUFFLElBQStCO1FBQy9ILElBQUksUUFBUSxHQUFhLEtBQWlCLENBQUM7UUFDM0Msb0RBQW9EO1FBQ3BELEtBQWMsVUFBZ0IsRUFBaEIscUNBQWdCLEVBQWhCLDhCQUFnQixFQUFoQixJQUFnQixFQUFFO1lBQTNCLElBQUksQ0FBQyx5QkFBQTtZQUNULENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNaO1FBRUQscUVBQXFFO1FBQ3JFLElBQUksYUFBYSxHQUFpQixFQUFFLENBQUM7UUFDckMsS0FBYyxVQUFnQixFQUFoQixxQ0FBZ0IsRUFBaEIsOEJBQWdCLEVBQWhCLElBQWdCLEVBQUU7WUFBM0IsSUFBSSxDQUFDLHlCQUFBO1lBQ1QsSUFBSSxDQUFDLENBQUMsMkJBQTJCLENBQUMsUUFBb0IsQ0FBQyxFQUFFO2dCQUN4RCxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Q7UUFFRCxnRUFBZ0U7UUFFaEUsbUZBQW1GO1FBQ25GLElBQUksTUFBTSxHQUFlLEVBQUUsQ0FBQztRQUU1QixjQUFjO1FBQ2QsSUFBSSxLQUFLLEdBQWEsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUzRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2IsOEJBQThCO1lBQzlCLHlC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LFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN0QixDQUFDO0lBQ0YsZUFBQztBQUFELENBWkEsQUFZQyxJQUFBO0FBWlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDowOTozNSBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wNCAxODowNDozNlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uLy4uL2dhbWVkYXRhL2xhYm91cmVycy9MYWJvdXJlclwiO1xyXG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25TdGF0dXNcIjtcclxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi9JR29hcFwiO1xyXG5cclxuLyoqXHJcbiAqIFBsYW5zIHdoYXQgYWN0aW9ucyBjYW4gYmUgY29tcGxldGVkIGluIG9yZGVyIHRvIGZ1bGZpbGwgYSBnb2FsIHN0YXRlLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdvYXBQbGFubmVyIHtcclxuXHQvKipcclxuXHQgKiBQbGFuIHdoYXQgc2VxdWVuY2Ugb2YgYWN0aW9ucyBjYW4gZnVsZmlsbCB0aGUgZ29hbC5cclxuXHQgKiBSZXR1cm5zIG51bGwgaWYgYSBwbGFuIGNvdWxkIG5vdCBiZSBmb3VuZCwgb3IgYSBsaXN0IG9mIHRoZSBhY3Rpb25zXHJcblx0ICogdGhhdCBtdXN0IGJlIHBlcmZvcm1lZCwgaW4gb3JkZXIsIHRvIGZ1bGZpbGwgdGhlIGdvYWwuXHJcblx0ICovXHJcblx0cHVibGljIHBsYW4oaUdvYXA6IElHb2FwLCBhdmFpbGFibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10sIHdvcmxkU3RhdGU6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4sIGdvYWw6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4pOiBHb2FwQWN0aW9uW10ge1xyXG5cdFx0bGV0IGxhYm91cmVyOiBMYWJvdXJlciA9IGlHb2FwIGFzIExhYm91cmVyO1xyXG5cdFx0Ly8gcmVzZXQgdGhlIGFjdGlvbnMgc28gd2UgY2FuIHN0YXJ0IGZyZXNoIHdpdGggdGhlbVxyXG5cdFx0Zm9yIChsZXQgYSBvZiBhdmFpbGFibGVBY3Rpb25zKSB7XHJcblx0XHRcdGEuZG9SZXNldCgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGNoZWNrIHdoYXQgYWN0aW9ucyBjYW4gcnVuIHVzaW5nIHRoZWlyIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvblxyXG5cdFx0bGV0IHVzYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgYSBvZiBhdmFpbGFibGVBY3Rpb25zKSB7XHJcblx0XHRcdGlmIChhLmNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihsYWJvdXJlciBhcyBMYWJvdXJlcikpIHtcclxuXHRcdFx0XHR1c2FibGVBY3Rpb25zLnB1c2goYSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyB3ZSBub3cgaGF2ZSBhbGwgYWN0aW9ucyB0aGF0IGNhbiBydW4sIHN0b3JlZCBpbiB1c2FibGVBY3Rpb25zXHJcblxyXG5cdFx0Ly8gYnVpbGQgdXAgdGhlIHRyZWUgYW5kIHJlY29yZCB0aGUgbGVhZiBub2RlcyB0aGF0IHByb3ZpZGUgYSBzb2x1dGlvbiB0byB0aGUgZ29hbC5cclxuXHRcdGxldCBsZWF2ZXM6IFBsYW5Ob2RlW10gPSBbXTtcclxuXHJcblx0XHQvLyBidWlsZCBncmFwaFxyXG5cdFx0bGV0IHN0YXJ0OiBQbGFuTm9kZSA9IG5ldyBQbGFuTm9kZShudWxsLCAwLCB3b3JsZFN0YXRlLCBudWxsKTtcclxuXHRcdGxldCBzdWNjZXNzOiBib29sZWFuID0gdGhpcy5idWlsZEdyYXBoKHN0YXJ0LCBsZWF2ZXMsIHVzYWJsZUFjdGlvbnMsIGdvYWwpO1xyXG5cclxuXHRcdGlmICghc3VjY2Vzcykge1xyXG5cdFx0XHQvLyBvaCBubywgd2UgZGlkbid0IGdldCBhIHBsYW5cclxuXHRcdFx0Ly9jb25zb2xlLmxvZyhcIk5PIFBMYW5cIik7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIGdldCB0aGUgY2hlYXBlc3QgbGVhZlxyXG5cdFx0bGV0IGNoZWFwZXN0OiBQbGFuTm9kZSA9IG51bGw7XHJcblx0XHRmb3IgKGxldCBsZWFmIG9mIGxlYXZlcykge1xyXG5cdFx0XHRpZiAoY2hlYXBlc3QgPT0gbnVsbCkge1xyXG5cdFx0XHRcdGNoZWFwZXN0ID0gbGVhZjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAobGVhZi5ydW5uaW5nQ29zdCA8IGNoZWFwZXN0LnJ1bm5pbmdDb3N0KSB7XHJcblx0XHRcdFx0XHRjaGVhcGVzdCA9IGxlYWY7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZ2V0IGl0cyBub2RlIGFuZCB3b3JrIGJhY2sgdGhyb3VnaCB0aGUgcGFyZW50c1xyXG5cdFx0bGV0IHJlc3VsdDogR29hcEFjdGlvbltdID0gW107XHJcblx0XHRsZXQgbjogUGxhbk5vZGUgPSBjaGVhcGVzdDtcclxuXHRcdHdoaWxlIChuICE9IG51bGwpIHtcclxuXHRcdFx0aWYgKG4uYWN0aW9uICE9IG51bGwpIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChuLmFjdGlvbik7XHJcblx0XHRcdH1cclxuXHRcdFx0biA9IG4ucGFyZW50O1xyXG5cdFx0fVxyXG5cdFx0cmVzdWx0LnJldmVyc2UoKTtcclxuXHJcblx0XHQvLyBob29yYXkgd2UgaGF2ZSBhIHBsYW4hXHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSBzdWJzZXQgb2YgdGhlIGFjdGlvbnMgZXhjbHVkaW5nIHRoZSByZW1vdmVNZSBvbmUuIENyZWF0ZXMgYSBuZXcgc2V0LlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgYWN0aW9uU3Vic2V0KGFjdGlvbnM6IEdvYXBBY3Rpb25bXSwgcmVtb3ZlTWU6IEdvYXBBY3Rpb24pOiBHb2FwQWN0aW9uW10ge1xyXG5cdFx0bGV0IHN1YnNldDogR29hcEFjdGlvbltdID0gW107XHJcblx0XHRmb3IgKGxldCBhIG9mIGFjdGlvbnMpIHtcclxuXHRcdFx0aWYgKGEgIT0gcmVtb3ZlTWUpIHtcclxuXHRcdFx0XHRzdWJzZXQucHVzaChhKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN1YnNldDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgc29sdXRpb24gd2FzIGZvdW5kLlxyXG5cdCAqIFRoZSBwb3NzaWJsZSBwYXRocyBhcmUgc3RvcmVkIGluIHRoZSBsZWF2ZXMgbGlzdC4gRWFjaCBsZWFmIGhhcyBhXHJcblx0ICogJ3J1bm5pbmdDb3N0JyB2YWx1ZSB3aGVyZSB0aGUgbG93ZXN0IGNvc3Qgd2lsbCBiZSB0aGUgYmVzdCBhY3Rpb25cclxuXHQgKiBzZXF1ZW5jZS5cclxuXHQgKi9cclxuXHRwcml2YXRlIGJ1aWxkR3JhcGgocGFyZW50OiBQbGFuTm9kZSwgbGVhdmVzOiBQbGFuTm9kZVtdLCB1c2FibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10sIGdvYWw6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4pOiBib29sZWFuIHtcclxuXHRcdGxldCBmb3VuZE9uZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRcdC8vIGdvIHRocm91Z2ggZWFjaCBhY3Rpb24gYXZhaWxhYmxlIGF0IHRoaXMgbm9kZSBhbmQgc2VlIGlmIHdlIGNhbiB1c2UgaXQgaGVyZVxyXG5cdFx0Zm9yIChsZXQgYWN0aW9uIG9mIHVzYWJsZUFjdGlvbnMpIHtcclxuXHRcdFx0Ly8gaWYgdGhlIHBhcmVudCBzdGF0ZSBoYXMgdGhlIGNvbmRpdGlvbnMgZm9yIHRoaXMgYWN0aW9uJ3MgcHJlY29uZGl0aW9ucywgd2UgY2FuIHVzZSBpdCBoZXJlXHJcblx0XHRcdGlmICh0aGlzLmluU3RhdGUoYWN0aW9uLlByZWNvbmRpdGlvbnMsIHBhcmVudC5zdGF0ZSkpIHtcclxuXHRcdFx0XHQvLyBhcHBseSB0aGUgYWN0aW9uJ3MgZWZmZWN0cyB0byB0aGUgcGFyZW50IHN0YXRlXHJcblx0XHRcdFx0bGV0IGN1cnJlbnRTdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PiA9IHRoaXMucG9wdWxhdGVTdGF0ZShwYXJlbnQuc3RhdGUsIGFjdGlvbi5FZmZlY3RzKTtcclxuXHRcdFx0XHRsZXQgbm9kZTogUGxhbk5vZGUgPSBuZXcgUGxhbk5vZGUocGFyZW50LCBwYXJlbnQucnVubmluZ0Nvc3QgKyBhY3Rpb24uY29zdCwgY3VycmVudFN0YXRlLCBhY3Rpb24pO1xyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5pblN0YXRlKGdvYWwsIGN1cnJlbnRTdGF0ZSkpIHtcclxuXHRcdFx0XHRcdC8vIHdlIGZvdW5kIGEgc29sdXRpb24hXHJcblx0XHRcdFx0XHRsZWF2ZXMucHVzaChub2RlKTtcclxuXHRcdFx0XHRcdGZvdW5kT25lID0gdHJ1ZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gbm90IGF0IGEgc29sdXRpb24geWV0LCBzbyB0ZXN0IGFsbCB0aGUgcmVtYWluaW5nIGFjdGlvbnMgYW5kIGJyYW5jaCBvdXQgdGhlIHRyZWVcclxuXHJcblx0XHRcdFx0XHRsZXQgc3Vic2V0OiBHb2FwQWN0aW9uW10gPSB0aGlzLmFjdGlvblN1YnNldCh1c2FibGVBY3Rpb25zLCBhY3Rpb24pO1xyXG5cclxuXHRcdFx0XHRcdGxldCBmb3VuZCA9IHRoaXMuYnVpbGRHcmFwaChub2RlLCBsZWF2ZXMsIHN1YnNldCwgZ29hbCk7XHJcblx0XHRcdFx0XHRpZiAoZm91bmQpIHtcclxuXHRcdFx0XHRcdFx0Zm91bmRPbmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmb3VuZE9uZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrIHRoYXQgYWxsIGl0ZW1zIGluICd0ZXN0JyBhcmUgaW4gJ3N0YXRlJy4gSWYganVzdCBvbmUgZG9lcyBub3QgbWF0Y2ggb3IgaXMgbm90IHRoZXJlXHJcblx0ICogdGhlbiB0aGlzIHJldHVybnMgZmFsc2UuXHJcblx0ICovXHJcblx0cHJpdmF0ZSBpblN0YXRlKHRlc3Q6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4sIHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KTogYm9vbGVhbiB7XHJcblx0XHRsZXQgdGVzdEtleUFyciA9IEFycmF5LmZyb20odGVzdC5rZXlzKCkpO1xyXG5cdFx0Zm9yIChsZXQga2V5IG9mIHRlc3RLZXlBcnIpIHtcclxuXHRcdFx0aWYgKHRlc3QuZ2V0KGtleSkgIT0gc3RhdGUuZ2V0KGtleSkpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQXBwbHkgdGhlIHN0YXRlQ2hhbmdlIHRvIHRoZSBjdXJyZW50U3RhdGVcclxuXHQgKi9cclxuXHRwcml2YXRlIHBvcHVsYXRlU3RhdGUoY3VycmVudFN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+LCBzdGF0ZUNoYW5nZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0Pik6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4ge1xyXG5cdFx0bGV0IHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+ID0gbmV3IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4oKTtcclxuXHRcdC8vIGNvcHkgdGhlIEtWUHMgb3ZlciBhcyBuZXcgb2JqZWN0c1xyXG5cdFx0Y3VycmVudFN0YXRlLmZvckVhY2goKHZhbHVlOiBPYmplY3QsIGtleTogQWN0aW9uU3RhdHVzKSA9PiB7XHJcblx0XHRcdHN0YXRlLnNldChrZXksIHZhbHVlKTtcclxuXHRcdH0pXHJcblxyXG5cdFx0c3RhdGVDaGFuZ2UuZm9yRWFjaCgodmFsdWU6IE9iamVjdCwga2V5OiBBY3Rpb25TdGF0dXMpID0+IHtcclxuXHRcdFx0c3RhdGUuc2V0KGtleSwgdmFsdWUpO1xyXG5cdFx0fSlcclxuXHJcblx0XHRyZXR1cm4gc3RhdGU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGxhbk5vZGUge1xyXG5cdHB1YmxpYyBwYXJlbnQ6IFBsYW5Ob2RlO1xyXG5cdHB1YmxpYyBydW5uaW5nQ29zdDogbnVtYmVyO1xyXG5cdHB1YmxpYyBzdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PjtcclxuXHRwdWJsaWMgYWN0aW9uOiBHb2FwQWN0aW9uO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwYXJlbnQ6IFBsYW5Ob2RlLCBydW5uaW5nQ29zdDogbnVtYmVyLCBzdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PiwgYWN0aW9uOiBHb2FwQWN0aW9uKSB7XHJcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHRcdHRoaXMucnVubmluZ0Nvc3QgPSBydW5uaW5nQ29zdDtcclxuXHRcdHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuXHRcdHRoaXMuYWN0aW9uID0gYWN0aW9uO1xyXG5cdH1cclxufSJdfQ==