import { GoapAction } from "../src/app/ai/goap/GoapAction"
import { IGoap } from "../src/app/ai/goap/IGoap"
import { VGameObject } from "../src/app/base/VGameObject"
import { Environment } from "../src/app/gamedata/Environment"
import TimeUtil from "../src/utils/TimeUtil"
import { ActionDataStatus } from "./ActionDataStatus"

export class GotoFireAction extends GoapAction {
    private bDone: boolean = false
    private startTime: number = 0
    private workDuration: number = 2 // seconds
    public constructor() {
        super()
        this.addPrecondition(ActionDataStatus.isFireOk, false) // we need a tool to do this
        this.addPrecondition(ActionDataStatus.isEquipOk, true) // we need a tool to do this
        this.addEffect(ActionDataStatus.outFire, true)
        this.addEffect(ActionDataStatus.isEquipOk, false)
        this.addEffect(ActionDataStatus.isTolietOk, false)
        this.addEffect(ActionDataStatus.isEquipOk, false)
        this.addEffect(ActionDataStatus.isFireOk, false)
        this.addEffect(ActionDataStatus.isCanOutfire, false)
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
        this.target = Environment.fireTarget
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

    perform(node: cc.Node): boolean {
        if (this.startTime == 0) this.startTime = TimeUtil.getTime()
        if (TimeUtil.getTime() - this.startTime > this.workDuration) {
            this.bDone = true
            // entity.memory.set(ActionDataStatus.isTolietOk, false)
            // entity.memory.set(ActionDataStatus.isEatOk, false)
            // entity.memory.set(ActionDataStatus.isEquipOk, false)
            // entity.memory.set(ActionDataStatus.isFireOk, false)
        }
        return true
    }
}
