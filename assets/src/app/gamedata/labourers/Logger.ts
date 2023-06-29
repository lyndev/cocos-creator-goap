import { ActionStatus } from "../../ai/goap/ActionStatus"
import { VGameObject } from "../../base/VGameObject"
import { ChopTreeAction } from "../actions/ChopTreeAction"
import { DropOffLogsAction } from "../actions/DropOffLogsAction"
import { PickUpToolAction } from "../actions/PickUpToolAction"
import { Labourer } from "./Labourer"

/**
 * 樵夫
 */
const { ccclass, property, requireComponent } = cc._decorator
@ccclass
@requireComponent(VGameObject)
export class Logger extends Labourer {
    public onLoad(): void {
        super.onLoad()
        this.initAvaliableActions([ChopTreeAction, DropOffLogsAction, PickUpToolAction])
    }
    /**
     * Our only goal will ever be to chop trees.
     * The ChopTreeAction will be able to fulfill this goal.
     */
    public createGoalState(): Map<string, Object> {
        let goal = new Map<string, Object>()
        goal.set(ActionStatus.CollectLogs, true)
        return goal
    }

    public updateBackPack() {
        console.log("原木：" + this.backpack.numLogs)
    }
}
