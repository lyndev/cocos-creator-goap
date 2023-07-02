import { GoapAction } from "../src/app/ai/goap/GoapAction"
import { Buyer } from "./Buyer"
import ContextShop from "./ContextShop"
import GoodsShelf from "./GoodsShelf"

export default class ActionBuyProduct extends GoapAction {
    protected bDone: boolean = false
    public target: GoodsShelf
    private cfgId: number
    constructor(cfgId) {
        super()
        this.cfgId = cfgId
        this.addPrecondition("hasProduct" + cfgId, false)
        this.addEffect("hasProduct" + cfgId, true)
    }

    reset(): void {
        this.bDone = false
    }

    isDone(): boolean {
        return this.bDone
    }

    checkProceduralPrecondition(go: cc.Node): boolean {
        if (this.cfgId == 1) {
            if (ContextShop.goodsShelf) {
                this.target = ContextShop.goodsShelf
                return true
            }
        } else if (this.cfgId == 2) {
            if (ContextShop.goodsShelf2) {
                this.target = ContextShop.goodsShelf2
                return true
            }
        }
        return false
    }

    perform(node: cc.Node): boolean {
        if (this.target.has(this.cfgId)) {
            this.target.cost(this.cfgId)
            let buyer = node.getComponent(Buyer)
            buyer.addProduct(this.cfgId, 1)
            if (buyer.hasProductFull(this.cfgId)) {
                this.bDone = true
                console.log("购物完成", this.target.node.name, this.cfgId)
            }
        }
        return true
    }

    requiresInRange(): boolean {
        return true
    }
}
