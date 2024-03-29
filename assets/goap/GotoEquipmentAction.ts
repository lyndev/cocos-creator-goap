import { GoapAction } from "../src/app/ai/goap/GoapAction"
import { GoapAgent } from "../src/app/ai/goap/GoapAgent"
import { IGoap } from "../src/app/ai/goap/IGoap"
import { VGameObject } from "../src/app/base/VGameObject"
import { Environment } from "../src/app/gamedata/Environment"
import TimeUtil from "../src/utils/TimeUtil"
import { ActionDataStatus } from "./ActionDataStatus"
import Entity from "./Entity"

export class GotoEquipmentAction extends GoapAction {
    private bDone: boolean = false
    private startTime: number = 0
    private workDuration: number = 2 // seconds
    public constructor() {
        super()
        this.addPrecondition(ActionDataStatus.isCanOutfire, true) // we need a tool to do this
        this.addEffect(ActionDataStatus.isEquipOk, true)
    }

    public reset(): void {
        this.bDone = false
        this.startTime = 0
    }

    public isDone() {
        return this.bDone
    }

    public requiresInRange() {
        return true
    }
    public checkProceduralPrecondition(go: cc.Node): boolean {
        this.target = Environment.equipTarget
        return this.target != null
        // // TODO:find the nearest tree that we can chop
        // let trees: TreeComponent[] = Environment.treeComps;
        // let closest: TreeComponent = null;
        // let closestDist: number = 0;

        // for (let tree of trees) {
        // 	if (closest == null) {
        // 		// first one, so choose it for now
        // 		closest = tree;
        // 		closestDist = tree.distanceSquare(agent);
        // 	} else {
        // 		// is this one closer than the last?
        // 		let dist: number = tree.distanceSquare(agent);
        // 		if (dist < closestDist) {
        // 			// we found a closer one, use it
        // 			closest = tree;
        // 			closestDist = dist;
        // 		}
        // 	}
        // }
        // if (closest == null)
        // 	return false;

        // this.target = closest;

        // return closest != null;
    }

    public perform(node: cc.Node): boolean {
        if (this.startTime == 0) this.startTime = TimeUtil.getTime()

        if (TimeUtil.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isEquipOk, true)
            this.bDone = true
        }
        return true
    }
}
