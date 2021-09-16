import { ActionStatus } from "../../ai/goap/ActionStatus";
import { DropOffToolsAction } from "../actions/DropOffToolsAction";
import { ForgeToolAction } from "../actions/ForgeToolAction";
import { PickUpOreAction } from "../actions/PickUpOreAction";
import { Labourer } from "./Labourer";
const { ccclass, property } = cc._decorator;
@ccclass
export class Blacksmith extends Labourer {
	protected initAvaliableActions() {
		this.toInitAvaliableActions([ForgeToolAction, DropOffToolsAction, PickUpOreAction]);
	}
	/**
	 * Our only goal will ever be to make tools.
	 * The ForgeTooldAction will be able to fulfill this goal.
	 */
	public createGoalState(): Map<string, Object> {
		let goal = new Map<string, Object>();
		goal.set(ActionStatus.CollectTools, true);
		return goal;
	}

	public updateBackPack() {
		console.log("矿石：" + this.backpack.numOre)
	}
}