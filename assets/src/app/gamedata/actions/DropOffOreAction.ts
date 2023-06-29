import { ActionStatus } from "../../ai/goap/ActionStatus"
import { GoapAction } from "../../ai/goap/GoapAction"
import { VGameObject } from "../../base/VGameObject"
import { BackPackComponent } from "../BackPackComponent"
import { Environment } from "../Environment"
import { Labourer } from "../labourers/Labourer"
import { SupplyPileComponent } from "../SupplyPileComponent"

export class DropOffOreAction extends GoapAction {
    private droppedOffOre = false
    public target: SupplyPileComponent // where we drop off the ore
    public constructor() {
        super()
        this.addPrecondition(ActionStatus.HasOre, true) // can't drop off ore if we don't already have some
        this.addEffect(ActionStatus.HasOre, false) // we now have no ore
        this.addEffect(ActionStatus.CollectOre, true) // we collected ore
    }

    public reset() {
        this.droppedOffOre = false
    }

    public isDone(): boolean {
        return this.droppedOffOre
    }
    public requiresInRange() {
        return true // yes we need to be near a supply pile so we can drop off the ore
    }
    public checkProceduralPrecondition(agent: cc.Node): boolean {
        //TODO: find the nearest supply pile that has spare ore
        let supplyPiles: SupplyPileComponent[] = Environment.supplyPileComps
        let closest: SupplyPileComponent = null
        let closestDist: number = 0
        let vg = agent.getComponent(VGameObject)
        for (let supply of supplyPiles) {
            if (closest == null) {
                // first one, so choose it for now
                closest = supply
                closestDist = supply.distanceSquare(vg)
            } else {
                // is this one closer than the last?
                let dist: number = supply.distanceSquare(vg)
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
        let backpack: BackPackComponent = labourer.backpack
        this.target.numOre += backpack.numOre
        this.droppedOffOre = true
        backpack.numOre = 0
        //TODO play effect, change actor icon

        return true
    }
}
