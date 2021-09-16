import { ActionStatus } from "../../ai/goap/ActionStatus";
import { ChopTreeAction } from "../actions/ChopTreeAction";
import { DropOffLogsAction } from "../actions/DropOffLogsAction";
import { PickUpToolAction } from "../actions/PickUpToolAction";
import { Labourer } from "./Labourer";

/*
 * @Description: 樵夫
 * @Author: Rannar.Yang 
 * @Date: 2018-09-05 20:40:44 
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 18:22:04
 */
const { ccclass, property } = cc._decorator;
@ccclass
export class Logger extends Labourer {
	protected initAvaliableActions() {
		this.toInitAvaliableActions([ChopTreeAction, DropOffLogsAction, PickUpToolAction]);
	}
	/**
	 * Our only goal will ever be to chop trees.
	 * The ChopTreeAction will be able to fulfill this goal.
	 */
	public createGoalState(): Map<string, Object> {
		let goal = new Map<string, Object>();
		goal.set(ActionStatus.CollectLogs, true);
		return goal;
	}

	public updateBackPack() {
		console.log("原木：" + this.backpack.numLogs);
	}
}