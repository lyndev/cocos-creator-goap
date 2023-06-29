import { ActionStatus } from "../../ai/goap/ActionStatus"
import { GoapAction } from "../../ai/goap/GoapAction"
import { VGameObject } from "../../base/VGameObject"
import { Environment } from "../Environment"
import { Labourer } from "../labourers/Labourer"
import { SupplyPileComponent } from "../SupplyPileComponent"

export class DropOffFirewoodAction extends GoapAction {
    private droppedOffFirewood: boolean = false
    public target: SupplyPileComponent // where we drop off the ore
    public constructor() {
        super()
        this.addPrecondition(ActionStatus.HasFirewood, true) // can't drop off firewood if we don't already have some
        this.addEffect(ActionStatus.HasFirewood, false) // we now have no firewood
        this.addEffect(ActionStatus.CollectFirewood, true) // we collected firewood
    }

    public reset(): void {
        this.droppedOffFirewood = false
    }

    public isDone() {
        return this.droppedOffFirewood
    }

    public requiresInRange() {
        return true // yes we need to be near a supply pile so we can drop off the firewood
    }
    public checkProceduralPrecondition(go: cc.Node): boolean {
        // TODO:find the nearest supply pile that has spare firewood
        let supplyPiles: SupplyPileComponent[] = Environment.supplyPileComps
        let closest: SupplyPileComponent = null
        let closestDist: number = 0
        let vGameObject = go.getComponent(VGameObject)
        for (let supply of supplyPiles) {
            if (closest == null) {
                // first one, so choose it for now
                closest = supply
                closestDist = supply.distanceSquare(vGameObject)
            } else {
                // is this one closer than the last?
                let dist: number = supply.distanceSquare(vGameObject)
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = supply
                    closestDist = dist
                }
            }
        }
        if (closest == null) return false

        this.target = closest

        return closest != null
    }

    public perform(node: cc.Node): boolean {
        let labourer = node.getComponent(Labourer)
        let backpack = labourer.backpack
        this.target.numFirewood += backpack.numFirewood
		backpack.numFirewood = 0
        this.droppedOffFirewood = true
        return true
    }
}
