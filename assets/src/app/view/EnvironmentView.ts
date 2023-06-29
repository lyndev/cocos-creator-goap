import { BackPackComponent } from "../gamedata/BackPackComponent"
import { ChoppingBlockComponent } from "../gamedata/ChoppingBlockComponent"
import { Environment } from "../gamedata/Environment"
import { ForgeComponent } from "../gamedata/ForgeComponent"
import { IronRockComponent } from "../gamedata/IronRockComponent"
import { Blacksmith } from "../gamedata/labourers/Blacksmith"
import { Logger } from "../gamedata/labourers/Logger"
import { Miner } from "../gamedata/labourers/Miner"
import { WoodCutter } from "../gamedata/labourers/WoodCutter"
import { SupplyPileComponent } from "../gamedata/SupplyPileComponent"
import { TreeComponent } from "../gamedata/TreeComponent"

const { ccclass, property } = cc._decorator
@ccclass
export class EnvironmentView extends cc.Component {
    @property(SupplyPileComponent)
    public supplyPileComp1: SupplyPileComponent = null

    @property(SupplyPileComponent)
    public supplyPileComp2: SupplyPileComponent = null

    @property(IronRockComponent)
    private ironRockComp1: IronRockComponent = null

    @property(IronRockComponent)
    private ironRockComp2: IronRockComponent = null

    @property(IronRockComponent)
    private ironRockComp3: IronRockComponent = null

    @property(TreeComponent)
    public treeComp1: TreeComponent = null

    @property(TreeComponent)
    public treeComp2: TreeComponent = null

    @property(TreeComponent)
    public treeComp3: TreeComponent = null

    @property(TreeComponent)
    public treeComp4: TreeComponent = null

    @property(ChoppingBlockComponent)
    public choppingBlockComp: ChoppingBlockComponent = null

    @property(ForgeComponent)
    public forgeComp: ForgeComponent = null

    @property(Blacksmith)
    public blackSmith: Blacksmith = null

    @property(Logger)
    public logger: Logger = null

    @property(Miner)
    public miner: Miner = null

    @property(WoodCutter)
    public woodCutter: WoodCutter = null

    curTime = 0
    start() {
        this.initEnvironment()
    }

    private initEnvironment() {
        Environment.supplyPileComps = [this.supplyPileComp1, this.supplyPileComp2]
        Environment.rockComps = [this.ironRockComp1, this.ironRockComp2, this.ironRockComp3]
        Environment.treeComps = [this.treeComp1, this.treeComp2, this.treeComp3, this.treeComp4]

        Environment.forgeComps = [this.forgeComp]
        Environment.choppingBlockComps = [this.choppingBlockComp]

        // 设置backpack
        let smithBP = new BackPackComponent(0, 0, 0)
        this.blackSmith.setBackPack(smithBP)

        let loggerBP = new BackPackComponent(0, 0, 0)
        this.logger.setBackPack(loggerBP)

        let minerBP = new BackPackComponent(0, 0, 0)
        this.miner.setBackPack(minerBP)

        let woodCutterBP = new BackPackComponent(0, 0, 0)
        this.woodCutter.setBackPack(woodCutterBP)
    }

    public update(dt) {
        this.miner.update(dt)
        this.blackSmith.update(dt)
        this.logger.update(dt)
        this.woodCutter.update(dt)
    }
}
