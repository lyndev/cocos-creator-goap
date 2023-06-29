import Checkstand from "./Checkstand"
import GoodsShelf from "./GoodsShelf"
import LeavePoint from "./LeavePoint"

const { ccclass, property } = cc._decorator

@ccclass
export default class ContextShop extends cc.Component {
    @property(GoodsShelf)
    goodsShelf: GoodsShelf = null

    @property(Checkstand)
    checkstand: Checkstand = null

    @property(LeavePoint)
    leavePoint: LeavePoint = null

    public static goodsShelf: GoodsShelf
    public static checkstand: Checkstand
    public static leavePoint: LeavePoint

    protected onLoad(): void {
        ContextShop.goodsShelf = this.goodsShelf
        ContextShop.checkstand = this.checkstand
        ContextShop.leavePoint = this.leavePoint
    }
}
