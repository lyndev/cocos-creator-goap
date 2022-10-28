import { ActionDataStatus } from './ActionDataStatus';
import { GoapAgent } from '../src/app/ai/goap/GoapAgent';
import GoapOutFire2 from './goaps/GoapOutFire2';
import { IGoap } from '../src/app/ai/goap/IGoap';
import GoapOutFireExigence from './goaps/GoapOutFireExigence';
import { StateEnum } from '../src/app/ai/fsm/state/StateEnum';

const { ccclass, property } = cc._decorator;
@ccclass
export default class FireNpc extends GoapAgent {
    goaps: Map<string, IGoap> = new Map<string, IGoap>()

    onLoad(): void {
        let goap = new GoapOutFire2()
        goap.initAvaliableActions(this)


        let goap2 = new GoapOutFireExigence()
        goap2.initAvaliableActions(this)

        this.goaps.set("normal_out_fire", goap)
        this.goaps.set("normal_out_fire_exigence", goap2)
        this.init()
        this.changeGoap("normal_out_fire")
        cc.tween(this).delay(1).call(() => {
            this.changeGoap("normal_out_fire_exigence")
        }).start()
    }

    public changeGoap(goapName) {
        let goap = this.goaps.get(goapName)
        console.log("切换行动", goapName)
        if (goap) {
            this.setGoap(goap)
            this.cleanAvalableActions()
            this.cleanCurActions()
            let actions = goap.getAvaliableActions()
            for (let index = 0; index < actions.length; index++) {
                const element = actions[index];
                this.addAction(element)
            }
            this.changeState(StateEnum.StateIdle);
        }
    }

    public createGoalState(): Map<string, Object> {
        let goal = new Map<string, Object>();
        goal.set(ActionDataStatus.outFire, true);
        return goal;
    }

    update(dt) {
        super.update(dt)
    }
}
