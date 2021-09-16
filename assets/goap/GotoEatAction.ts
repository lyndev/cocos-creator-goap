import { GoapAction } from "../src/app/ai/goap/GoapAction";
import { IGoap } from "../src/app/ai/goap/IGoap";
import { VGameObject } from "../src/app/base/VGameObject";
import { Environment } from "../src/app/gamedata/Environment";
import TimeUtil from "../src/utils/TimeUtil";
import { ActionDataStatus } from "./ActionDataStatus";
import Entity from "./Entity";

export class GotoEatAction extends GoapAction {
	private bDone: boolean = false
	private startTime: number = 0;
	private workDuration: number = 2; // seconds
	public constructor() {
		super();
		this.addPrecondition(ActionDataStatus.isTolietOk, true); // we need a tool to do this
		this.addPrecondition(ActionDataStatus.isEatOk, false); // we need a tool to do this
		this.addEffect(ActionDataStatus.isEatOk, true);
		this.addEffect(ActionDataStatus.isTolietOk, false);
	}

	public reset(): void {
		this.bDone = false;
		this.startTime = 0;
	}

	public isDone() {
		return this.bDone;
	}

	public requiresInRange() {
		return true;
	}
	public checkProceduralPrecondition(agent: VGameObject): boolean {
		this.target = Environment.eatingTarget;
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

	public perform(iGoap: IGoap): boolean {
		let entity = iGoap as Entity;
		if (this.startTime == 0)
			this.startTime = TimeUtil.getTime();

		if (TimeUtil.getTime() - this.startTime > this.workDuration) {
			entity.memory.set(ActionDataStatus.isEatOk, true)
			this.bDone = true
		}
		return true;
	}
}