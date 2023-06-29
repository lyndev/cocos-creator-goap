import { GoapAction } from "../src/app/ai/goap/GoapAction"
import ContextShop from "./ContextShop"
import LeavePoint from "./LeavePoint"

export default class ActionBuyerLeave extends GoapAction {
    protected bDone: boolean = false
    public target: LeavePoint
    constructor() {
        super()
        this.addPrecondition("payed", true)
        this.addEffect("leaved", true)
    }

    reset(): void {
        this.bDone = false
    }

    isDone(): boolean {
        return this.bDone
    }

    checkProceduralPrecondition(go: cc.Node): boolean {
        if (ContextShop.leavePoint) {
            this.target = ContextShop.leavePoint
            return true
        }
        return false
    }

    perform(node: cc.Node): boolean {
        this.bDone = true
        console.log("离开")
        node.destroy()
        return true
    }

    requiresInRange(): boolean {
        return true
    }
}
