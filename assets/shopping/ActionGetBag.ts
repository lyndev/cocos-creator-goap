import { GoapAction } from "../src/app/ai/goap/GoapAction"
import BagPoint from "./BagPoint"
import ContextShop from "./ContextShop"

export default class ActionGetBag extends GoapAction {
    protected bDone: boolean = false
    public target: BagPoint
    constructor() {
        super()
        this.addPrecondition("hasBag", false)
        this.addEffect("hasBag", true)
    }

    reset(): void {
        this.bDone = false
    }

    isDone(): boolean {
        return this.bDone
    }

    checkProceduralPrecondition(go: cc.Node): boolean {
        if (ContextShop.bagPoint) {
            this.target = ContextShop.bagPoint
            return true
        }
        return false
    }

    perform(node: cc.Node): boolean {
        this.bDone = true
        console.log("拿到购物篮")
        return true
    }

    requiresInRange(): boolean {
        return true
    }
}
