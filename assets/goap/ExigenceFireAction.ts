import { GoapAction } from "../src/app/ai/goap/GoapAction";
import { GoapAgent } from "../src/app/ai/goap/GoapAgent";
import { IGoap } from "../src/app/ai/goap/IGoap";
import { VGameObject } from "../src/app/base/VGameObject";
import { Environment } from "../src/app/gamedata/Environment";
import TimeUtil from "../src/utils/TimeUtil";
import { ActionDataStatus } from "./ActionDataStatus";
import Entity from "./Entity";

export class ExigenceFireAction extends GoapAction {
	private bDone: boolean = false
	private startTime: number = 0;
	private workDuration: number = 1; // seconds
	public cost: number = 0
	public constructor() {
		super();
		this.addEffect(ActionDataStatus.isCanOutfire, true);
	}

	public reset(): void {
		this.bDone = false;
		this.startTime = 0;
	}

	public isDone() {
		return this.bDone;
	}

	public requiresInRange() {
		return false;
	}

	public checkProceduralPrecondition(agent: GoapAgent): boolean {
		return true
	}

	public perform(agent: GoapAgent): boolean {
		this.bDone = true
		return true;
	}
}