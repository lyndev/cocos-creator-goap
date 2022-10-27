import { ActionDataStatus } from './ActionDataStatus';
import { GotoToiletAction } from './GotoToiletAction';
import { GotoEatAction } from './GotoEatAction';
import { GotoEquipmentAction } from './GotoEquipmentAction';
import { GotoFireAction } from './GotoFireAction';
import { GotSleepAction } from './GotSleepAction';
import { GoapAgent } from '../src/app/ai/goap/GoapAgent';
import GoapOutFire2 from './goaps/GoapOutFire2';

const { ccclass, property } = cc._decorator;
@ccclass
export default class FireNpc extends GoapAgent {
    onLoad(): void {
        let goap = new GoapOutFire2()
        goap.initAvaliableActions([
            GotoToiletAction
            , GotSleepAction
            , GotoEatAction
            , GotoEquipmentAction
            , GotoFireAction
        ])
        this.setGoap(goap)
        this.setCurrentActions(goap.getAvaliableActions())
        super.onLoad()
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
