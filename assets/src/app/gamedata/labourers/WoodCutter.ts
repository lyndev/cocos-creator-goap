import { ActionStatus } from "../../ai/goap/ActionStatus"
import { VGameObject } from "../../base/VGameObject"
import { ChopFirewoodAction } from "../actions/ChopFirewoodAction"
import { DropOffFirewoodAction } from "../actions/DropOffFirewoodAction"
import { PickUpToolAction } from "../actions/PickUpToolAction"
import { Labourer } from "./Labourer"

/**
 * 砍柴工
 */
const { ccclass, property, requireComponent } = cc._decorator
@ccclass
@requireComponent(VGameObject)
export class WoodCutter extends Labourer {
    public onLoad(): void {
        super.onLoad()
        this.initAvaliableActions([ChopFirewoodAction, DropOffFirewoodAction, PickUpToolAction])
    }
    /**
     * Our only goal will ever be to chop logs.
     * The ChopFirewoodAction will be able to fulfill this goal.
     */
    public createGoalState(): Map<string, Object> {
        let goal = new Map<string, Object>()
        goal.set(ActionStatus.CollectFirewood, true)
        return goal
    }

    public updateBackPack() {
        console.log("木柴：" + this.backpack.numFirewood)
    }
}
