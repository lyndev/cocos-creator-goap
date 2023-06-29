import { ActionStatus } from "../../ai/goap/ActionStatus"
import { VGameObject } from "../../base/VGameObject"
import { DropOffOreAction } from "../actions/DropOffOreAction"
import { MineOreAction } from "../actions/MineOreAction"
import { PickUpToolAction } from "../actions/PickUpToolAction"
import { Labourer } from "./Labourer"

/**
 *  矿工
 */
const { ccclass, property, requireComponent } = cc._decorator
@ccclass
@requireComponent(VGameObject)
export class Miner extends Labourer {
    public onLoad(): void {
        super.onLoad()
        this.initAvaliableActions([MineOreAction, PickUpToolAction, DropOffOreAction])
    }
    /**
     * Our only goal will ever be to mine ore.
     * The MineOreAction will be able to fulfill this goal.
     */
    public createGoalState(): Map<string, Object> {
        let goal = new Map<string, Object>()
        goal.set(ActionStatus.CollectOre, true)
        return goal
    }

    public updateBackPack() {
        console.log("矿石：" + this.backpack.numOre)
    }
}
