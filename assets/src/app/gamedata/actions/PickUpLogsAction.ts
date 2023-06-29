import { ActionStatus } from "../../ai/goap/ActionStatus";
import { GoapAction } from "../../ai/goap/GoapAction";
import { VGameObject } from "../../base/VGameObject";
import { Labourer } from "../labourers/Labourer";
import { SupplyPileComponent } from "../SupplyPileComponent";

export class PickUpLogsAction extends GoapAction {
	private hasLogs: boolean = false;
	public target: SupplyPileComponent;  // where we get the logs from
	public constructor() {
		super();
		this.addPrecondition(ActionStatus.HasLogs, false); // don't get a logs if we already have one
		this.addEffect(ActionStatus.HasLogs, true); // we now have a logs
	}

	public reset() {
		this.hasLogs = false;
	}

	public isDone(): boolean {
		return this.hasLogs;
	}

	public requiresInRange(): boolean {
		return true;
	}

	public checkProceduralPrecondition(agent:cc.Node): boolean {
		//TODO: find the nearest supply pile that has spare logs
		let supplyPiles: SupplyPileComponent[] = [];
		let closest: SupplyPileComponent = null;
		let closestDist: number = 0;
		let vg = agent.getComponent(VGameObject)
		for (let supply of supplyPiles) {
			if (supply.numLogs > 0) {
				if (closest == null) {
					// first one, so choose it for now
					closest = supply;
					closestDist = supply.distanceSquare(vg);
				} else {
					// is this one closer than the last?
					let dist: number = supply.distanceSquare(vg);
					if (dist < closestDist) {
						// we found a closer one, use it
						closest = supply;
						closestDist = dist;
					}
				}
			}
		}
		if (closest == null)
			return false;

		this.target = closest;

		return closest != null;
	}

	public perform(node: cc.Node): boolean {
		if (this.target.numLogs > 0) {
			this.target.numLogs -= 1;
			this.hasLogs = true;
			let labourer = node.getComponent(Labourer)
			let backpack = labourer.backpack;
			backpack.numLogs = 1;

			return true;
		} else {
			// we got there but there was no logs available! Someone got there first. Cannot perform action
			return false;
		}
	}
}