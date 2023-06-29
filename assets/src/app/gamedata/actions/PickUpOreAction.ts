import { ActionStatus } from "../../ai/goap/ActionStatus"
import { GoapAction } from "../../ai/goap/GoapAction"
import { VGameObject } from "../../base/VGameObject"
import { BackPackComponent } from "../BackPackComponent"
import { Environment } from "../Environment"
import { Labourer } from "../labourers/Labourer"
import { SupplyPileComponent } from "../SupplyPileComponent"

export class PickUpOreAction extends GoapAction {
    private hasOre: boolean = false
    public target: SupplyPileComponent // where we get the ore from
    public constructor() {
        super()
        this.addPrecondition(ActionStatus.HasOre, false) // don't get a ore if we already have one
        this.addEffect(ActionStatus.HasOre, true) // we now have a ore
    }

    public reset(): void {
        this.hasOre = false
    }

    public isDone(): boolean {
        return this.hasOre
    }

    public requiresInRange(): boolean {
        return true // yes we need to be near a supply pile so we can pick up the ore
    }

    public checkProceduralPrecondition(agent: cc.Node): boolean {
        //find the nearest supply pile that has spare ores
        let supplyPiles: SupplyPileComponent[] = Environment.supplyPileComps
        let closest: SupplyPileComponent = null
        let closestDist: number = 0
        let vg = agent.getComponent(VGameObject)
        for (let supply of supplyPiles) {
            if (supply.numOre >= 3) {
                // we need to take 3 ore
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
        }
        if (closest == null) return false

        this.target = closest

        return closest != null
    }

    public perform(node: cc.Node): boolean {
        if (this.target.numOre >= 3) {
            this.target.numOre -= 3
            this.hasOre = true
            let labourer = node.getComponent(Labourer)
            //TODO play effect, change actor icon
            let backpack: BackPackComponent = labourer.backpack
            backpack.numOre += 3

            return true
        } else {
            // we got there but there was no ore available! Someone got there first. Cannot perform action
            return false
        }
    }
}
