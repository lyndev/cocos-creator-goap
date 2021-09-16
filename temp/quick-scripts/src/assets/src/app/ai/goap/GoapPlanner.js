"use strict";
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