
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvR29hcFBsYW5uZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRzs7O0FBT0g7O0dBRUc7QUFDSDtJQUFBO0lBOElBLENBQUM7SUE3SUE7Ozs7T0FJRztJQUNJLDBCQUFJLEdBQVgsVUFBWSxLQUFZLEVBQUUsZ0JBQThCLEVBQUUsVUFBcUMsRUFBRSxJQUErQjtRQUMvSCxJQUFJLFFBQVEsR0FBYSxLQUFpQixDQUFDO1FBQzNDLG9EQUFvRDtRQUNwRCxLQUFjLFVBQWdCLEVBQWhCLHFDQUFnQixFQUFoQiw4QkFBZ0IsRUFBaEIsSUFBZ0IsRUFBRTtZQUEzQixJQUFJLENBQUMseUJBQUE7WUFDVCxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDWjtRQUVELHFFQUFxRTtRQUNyRSxJQUFJLGFBQWEsR0FBaUIsRUFBRSxDQUFDO1FBQ3JDLEtBQWMsVUFBZ0IsRUFBaEIscUNBQWdCLEVBQWhCLDhCQUFnQixFQUFoQixJQUFnQixFQUFFO1lBQTNCLElBQUksQ0FBQyx5QkFBQTtZQUNULElBQUksQ0FBQyxDQUFDLDJCQUEyQixDQUFDLFFBQW9CLENBQUMsRUFBRTtnQkFDeEQsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN0QjtTQUNEO1FBRUQsZ0VBQWdFO1FBRWhFLG1GQUFtRjtRQUNuRixJQUFJLE1BQU0sR0FBZSxFQUFFLENBQUM7UUFFNUIsY0FBYztRQUNkLElBQUksS0FBSyxHQUFhLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFM0UsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLDhCQUE4QjtZQUM5Qix5QkFBeUI7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LENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQVpBLEFBWUMsSUFBQTtBQVpZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBEZXNjcmlwdGlvbjogXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MDk6MzUgXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wNCAxODowNDozNlxuICovXG5cbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uLy4uL2dhbWVkYXRhL2xhYm91cmVycy9MYWJvdXJlclwiO1xuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4vR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi9JR29hcFwiO1xuXG4vKipcbiAqIFBsYW5zIHdoYXQgYWN0aW9ucyBjYW4gYmUgY29tcGxldGVkIGluIG9yZGVyIHRvIGZ1bGZpbGwgYSBnb2FsIHN0YXRlLlxuICovXG5leHBvcnQgY2xhc3MgR29hcFBsYW5uZXIge1xuXHQvKipcblx0ICogUGxhbiB3aGF0IHNlcXVlbmNlIG9mIGFjdGlvbnMgY2FuIGZ1bGZpbGwgdGhlIGdvYWwuXG5cdCAqIFJldHVybnMgbnVsbCBpZiBhIHBsYW4gY291bGQgbm90IGJlIGZvdW5kLCBvciBhIGxpc3Qgb2YgdGhlIGFjdGlvbnNcblx0ICogdGhhdCBtdXN0IGJlIHBlcmZvcm1lZCwgaW4gb3JkZXIsIHRvIGZ1bGZpbGwgdGhlIGdvYWwuXG5cdCAqL1xuXHRwdWJsaWMgcGxhbihpR29hcDogSUdvYXAsIGF2YWlsYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSwgd29ybGRTdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PiwgZ29hbDogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0Pik6IEdvYXBBY3Rpb25bXSB7XG5cdFx0bGV0IGxhYm91cmVyOiBMYWJvdXJlciA9IGlHb2FwIGFzIExhYm91cmVyO1xuXHRcdC8vIHJlc2V0IHRoZSBhY3Rpb25zIHNvIHdlIGNhbiBzdGFydCBmcmVzaCB3aXRoIHRoZW1cblx0XHRmb3IgKGxldCBhIG9mIGF2YWlsYWJsZUFjdGlvbnMpIHtcblx0XHRcdGEuZG9SZXNldCgpO1xuXHRcdH1cblxuXHRcdC8vIGNoZWNrIHdoYXQgYWN0aW9ucyBjYW4gcnVuIHVzaW5nIHRoZWlyIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvblxuXHRcdGxldCB1c2FibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10gPSBbXTtcblx0XHRmb3IgKGxldCBhIG9mIGF2YWlsYWJsZUFjdGlvbnMpIHtcblx0XHRcdGlmIChhLmNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihsYWJvdXJlciBhcyBMYWJvdXJlcikpIHtcblx0XHRcdFx0dXNhYmxlQWN0aW9ucy5wdXNoKGEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIHdlIG5vdyBoYXZlIGFsbCBhY3Rpb25zIHRoYXQgY2FuIHJ1biwgc3RvcmVkIGluIHVzYWJsZUFjdGlvbnNcblxuXHRcdC8vIGJ1aWxkIHVwIHRoZSB0cmVlIGFuZCByZWNvcmQgdGhlIGxlYWYgbm9kZXMgdGhhdCBwcm92aWRlIGEgc29sdXRpb24gdG8gdGhlIGdvYWwuXG5cdFx0bGV0IGxlYXZlczogUGxhbk5vZGVbXSA9IFtdO1xuXG5cdFx0Ly8gYnVpbGQgZ3JhcGhcblx0XHRsZXQgc3RhcnQ6IFBsYW5Ob2RlID0gbmV3IFBsYW5Ob2RlKG51bGwsIDAsIHdvcmxkU3RhdGUsIG51bGwpO1xuXHRcdGxldCBzdWNjZXNzOiBib29sZWFuID0gdGhpcy5idWlsZEdyYXBoKHN0YXJ0LCBsZWF2ZXMsIHVzYWJsZUFjdGlvbnMsIGdvYWwpO1xuXG5cdFx0aWYgKCFzdWNjZXNzKSB7XG5cdFx0XHQvLyBvaCBubywgd2UgZGlkbid0IGdldCBhIHBsYW5cblx0XHRcdC8vY29uc29sZS5sb2coXCJOTyBQTGFuXCIpO1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gZ2V0IHRoZSBjaGVhcGVzdCBsZWFmXG5cdFx0bGV0IGNoZWFwZXN0OiBQbGFuTm9kZSA9IG51bGw7XG5cdFx0Zm9yIChsZXQgbGVhZiBvZiBsZWF2ZXMpIHtcblx0XHRcdGlmIChjaGVhcGVzdCA9PSBudWxsKSB7XG5cdFx0XHRcdGNoZWFwZXN0ID0gbGVhZjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChsZWFmLnJ1bm5pbmdDb3N0IDwgY2hlYXBlc3QucnVubmluZ0Nvc3QpIHtcblx0XHRcdFx0XHRjaGVhcGVzdCA9IGxlYWY7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBnZXQgaXRzIG5vZGUgYW5kIHdvcmsgYmFjayB0aHJvdWdoIHRoZSBwYXJlbnRzXG5cdFx0bGV0IHJlc3VsdDogR29hcEFjdGlvbltdID0gW107XG5cdFx0bGV0IG46IFBsYW5Ob2RlID0gY2hlYXBlc3Q7XG5cdFx0d2hpbGUgKG4gIT0gbnVsbCkge1xuXHRcdFx0aWYgKG4uYWN0aW9uICE9IG51bGwpIHtcblx0XHRcdFx0cmVzdWx0LnB1c2gobi5hY3Rpb24pO1xuXHRcdFx0fVxuXHRcdFx0biA9IG4ucGFyZW50O1xuXHRcdH1cblx0XHRyZXN1bHQucmV2ZXJzZSgpO1xuXG5cdFx0Ly8gaG9vcmF5IHdlIGhhdmUgYSBwbGFuIVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0LyoqXG5cdCAqIENyZWF0ZSBhIHN1YnNldCBvZiB0aGUgYWN0aW9ucyBleGNsdWRpbmcgdGhlIHJlbW92ZU1lIG9uZS4gQ3JlYXRlcyBhIG5ldyBzZXQuXG5cdCAqL1xuXHRwcml2YXRlIGFjdGlvblN1YnNldChhY3Rpb25zOiBHb2FwQWN0aW9uW10sIHJlbW92ZU1lOiBHb2FwQWN0aW9uKTogR29hcEFjdGlvbltdIHtcblx0XHRsZXQgc3Vic2V0OiBHb2FwQWN0aW9uW10gPSBbXTtcblx0XHRmb3IgKGxldCBhIG9mIGFjdGlvbnMpIHtcblx0XHRcdGlmIChhICE9IHJlbW92ZU1lKSB7XG5cdFx0XHRcdHN1YnNldC5wdXNoKGEpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc3Vic2V0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgc29sdXRpb24gd2FzIGZvdW5kLlxuXHQgKiBUaGUgcG9zc2libGUgcGF0aHMgYXJlIHN0b3JlZCBpbiB0aGUgbGVhdmVzIGxpc3QuIEVhY2ggbGVhZiBoYXMgYVxuXHQgKiAncnVubmluZ0Nvc3QnIHZhbHVlIHdoZXJlIHRoZSBsb3dlc3QgY29zdCB3aWxsIGJlIHRoZSBiZXN0IGFjdGlvblxuXHQgKiBzZXF1ZW5jZS5cblx0ICovXG5cdHByaXZhdGUgYnVpbGRHcmFwaChwYXJlbnQ6IFBsYW5Ob2RlLCBsZWF2ZXM6IFBsYW5Ob2RlW10sIHVzYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSwgZ29hbDogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0Pik6IGJvb2xlYW4ge1xuXHRcdGxldCBmb3VuZE9uZTogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdFx0Ly8gZ28gdGhyb3VnaCBlYWNoIGFjdGlvbiBhdmFpbGFibGUgYXQgdGhpcyBub2RlIGFuZCBzZWUgaWYgd2UgY2FuIHVzZSBpdCBoZXJlXG5cdFx0Zm9yIChsZXQgYWN0aW9uIG9mIHVzYWJsZUFjdGlvbnMpIHtcblx0XHRcdC8vIGlmIHRoZSBwYXJlbnQgc3RhdGUgaGFzIHRoZSBjb25kaXRpb25zIGZvciB0aGlzIGFjdGlvbidzIHByZWNvbmRpdGlvbnMsIHdlIGNhbiB1c2UgaXQgaGVyZVxuXHRcdFx0aWYgKHRoaXMuaW5TdGF0ZShhY3Rpb24uUHJlY29uZGl0aW9ucywgcGFyZW50LnN0YXRlKSkge1xuXHRcdFx0XHQvLyBhcHBseSB0aGUgYWN0aW9uJ3MgZWZmZWN0cyB0byB0aGUgcGFyZW50IHN0YXRlXG5cdFx0XHRcdGxldCBjdXJyZW50U3RhdGU6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4gPSB0aGlzLnBvcHVsYXRlU3RhdGUocGFyZW50LnN0YXRlLCBhY3Rpb24uRWZmZWN0cyk7XG5cdFx0XHRcdGxldCBub2RlOiBQbGFuTm9kZSA9IG5ldyBQbGFuTm9kZShwYXJlbnQsIHBhcmVudC5ydW5uaW5nQ29zdCArIGFjdGlvbi5jb3N0LCBjdXJyZW50U3RhdGUsIGFjdGlvbik7XG5cblx0XHRcdFx0aWYgKHRoaXMuaW5TdGF0ZShnb2FsLCBjdXJyZW50U3RhdGUpKSB7XG5cdFx0XHRcdFx0Ly8gd2UgZm91bmQgYSBzb2x1dGlvbiFcblx0XHRcdFx0XHRsZWF2ZXMucHVzaChub2RlKTtcblx0XHRcdFx0XHRmb3VuZE9uZSA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gbm90IGF0IGEgc29sdXRpb24geWV0LCBzbyB0ZXN0IGFsbCB0aGUgcmVtYWluaW5nIGFjdGlvbnMgYW5kIGJyYW5jaCBvdXQgdGhlIHRyZWVcblxuXHRcdFx0XHRcdGxldCBzdWJzZXQ6IEdvYXBBY3Rpb25bXSA9IHRoaXMuYWN0aW9uU3Vic2V0KHVzYWJsZUFjdGlvbnMsIGFjdGlvbik7XG5cblx0XHRcdFx0XHRsZXQgZm91bmQgPSB0aGlzLmJ1aWxkR3JhcGgobm9kZSwgbGVhdmVzLCBzdWJzZXQsIGdvYWwpO1xuXHRcdFx0XHRcdGlmIChmb3VuZCkge1xuXHRcdFx0XHRcdFx0Zm91bmRPbmUgPSB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmb3VuZE9uZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVjayB0aGF0IGFsbCBpdGVtcyBpbiAndGVzdCcgYXJlIGluICdzdGF0ZScuIElmIGp1c3Qgb25lIGRvZXMgbm90IG1hdGNoIG9yIGlzIG5vdCB0aGVyZVxuXHQgKiB0aGVuIHRoaXMgcmV0dXJucyBmYWxzZS5cblx0ICovXG5cdHByaXZhdGUgaW5TdGF0ZSh0ZXN0OiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+LCBzdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0Pik6IGJvb2xlYW4ge1xuXHRcdGxldCB0ZXN0S2V5QXJyID0gQXJyYXkuZnJvbSh0ZXN0LmtleXMoKSk7XG5cdFx0Zm9yIChsZXQga2V5IG9mIHRlc3RLZXlBcnIpIHtcblx0XHRcdGlmICh0ZXN0LmdldChrZXkpICE9IHN0YXRlLmdldChrZXkpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogQXBwbHkgdGhlIHN0YXRlQ2hhbmdlIHRvIHRoZSBjdXJyZW50U3RhdGVcblx0ICovXG5cdHByaXZhdGUgcG9wdWxhdGVTdGF0ZShjdXJyZW50U3RhdGU6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4sIHN0YXRlQ2hhbmdlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PiB7XG5cdFx0bGV0IHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+ID0gbmV3IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4oKTtcblx0XHQvLyBjb3B5IHRoZSBLVlBzIG92ZXIgYXMgbmV3IG9iamVjdHNcblx0XHRjdXJyZW50U3RhdGUuZm9yRWFjaCgodmFsdWU6IE9iamVjdCwga2V5OiBBY3Rpb25TdGF0dXMpID0+IHtcblx0XHRcdHN0YXRlLnNldChrZXksIHZhbHVlKTtcblx0XHR9KVxuXG5cdFx0c3RhdGVDaGFuZ2UuZm9yRWFjaCgodmFsdWU6IE9iamVjdCwga2V5OiBBY3Rpb25TdGF0dXMpID0+IHtcblx0XHRcdHN0YXRlLnNldChrZXksIHZhbHVlKTtcblx0XHR9KVxuXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGFuTm9kZSB7XG5cdHB1YmxpYyBwYXJlbnQ6IFBsYW5Ob2RlO1xuXHRwdWJsaWMgcnVubmluZ0Nvc3Q6IG51bWJlcjtcblx0cHVibGljIHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+O1xuXHRwdWJsaWMgYWN0aW9uOiBHb2FwQWN0aW9uO1xuXG5cdGNvbnN0cnVjdG9yKHBhcmVudDogUGxhbk5vZGUsIHJ1bm5pbmdDb3N0OiBudW1iZXIsIHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+LCBhY3Rpb246IEdvYXBBY3Rpb24pIHtcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHR0aGlzLnJ1bm5pbmdDb3N0ID0gcnVubmluZ0Nvc3Q7XG5cdFx0dGhpcy5zdGF0ZSA9IHN0YXRlO1xuXHRcdHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuXHR9XG59Il19