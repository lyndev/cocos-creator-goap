import { ActionStatus } from "../../ai/goap/ActionStatus";
import { DropOffOreAction } from "../actions/DropOffOreAction";
import { MineOreAction } from "../actions/MineOreAction";
import { PickUpToolAction } from "../actions/PickUpToolAction";
import { Labourer } from "./Labourer";

/*
 * @Description: 矿工
 * @Author: Rannar.Yang 
 * @Date: 2018-09-05 20:40:44 
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 18:41:37
 */
const { ccclass, property } = cc._decorator;
@ccclass
export class Miner extends Labourer {
	//public labourerType = LabourerType.Miner;
	protected initAvaliableActions() {
		this.toInitAvaliableActions([MineOreAction, PickUpToolAction, DropOffOreAction]);
	}
	/**
	 * Our only goal will ever be to mine ore.
	 * The MineOreAction will be able to fulfill this goal.
	 */
	public createGoalState(): Map<string, Object> {
		let goal = new Map<string, Object>();
		goal.set(ActionStatus.CollectOre, true);
		return goal;
	}

	public updateBackPack() {
		console.log("矿石：" + this.backpack.numOre)
	}
}