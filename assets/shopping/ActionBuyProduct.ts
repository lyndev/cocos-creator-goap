import { GoapAction } from "../src/app/ai/goap/GoapAction"
import { Buyer } from "./Buyer"
import ContextShop from "./ContextShop"
import GoodsShelf from "./GoodsShelf"

export default class ActionBuyProduct extends GoapAction {
    protected bDone: boolean = false
    public target: GoodsShelf
    constructor() {
        super()
        this.addPrecondition("hasProduct", false)
        this.addEffect("hasProduct", true)
    }

    reset(): void {
        this.bDone = false
    }

    isDone(): boolean {
        return this.bDone
    }

    checkProceduralPrecondition(go: cc.Node): boolean {
        if (ContextShop.goodsShelf) {
            this.target = ContextShop.goodsShelf
            return true
        }
        return false
    }

    perform(node: cc.Node): boolean {
        if (this.target.has(1)) {
            this.target.cost(1)
            let buyer = node.getComponent(Buyer)
            buyer.addProduct(1, 1)
            if (buyer.hasProductFull(1)) {
                this.bDone = true
                console.log("购物完成")
            }
        }
        return true
    }

    requiresInRange(): boolean {
        return true
    }
}
