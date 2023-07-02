import BagPoint from "./BagPoint"
import Checkstand from "./Checkstand"
import GoodsShelf from "./GoodsShelf"
import LeavePoint from "./LeavePoint"

const { ccclass, property } = cc._decorator

@ccclass
export default class ContextShop extends cc.Component {
    @property(GoodsShelf)
    goodsShelf: GoodsShelf = null

    @property(GoodsShelf)
    goodsShelf2: GoodsShelf = null

    @property(Checkstand)
    checkstand: Checkstand = null

    @property(LeavePoint)
    leavePoint: LeavePoint = null

    @property(BagPoint)
    bagPoint: BagPoint = null

    public static goodsShelf: GoodsShelf
    public static goodsShelf2: GoodsShelf
    public static checkstand: Checkstand
    public static leavePoint: LeavePoint
    public static bagPoint: BagPoint

    protected onLoad(): void {
        ContextShop.goodsShelf = this.goodsShelf
        ContextShop.goodsShelf2 = this.goodsShelf2
        ContextShop.checkstand = this.checkstand
        ContextShop.leavePoint = this.leavePoint
        ContextShop.bagPoint = this.bagPoint
    }
}
