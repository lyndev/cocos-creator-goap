import { GoapAction } from '../src/app/ai/goap/GoapAction';
import { ActionDataStatus } from './ActionDataStatus';
import Entity from './Entity';
import { GotoToiletAction } from './GotoToiletAction';
import { GotoEatAction } from './GotoEatAction';
import { GotoEquipmentAction } from './GotoEquipmentAction';
import { GotoFireAction } from './GotoFireAction';
import { GotSleepAction } from './GotSleepAction';

const { ccclass, property } = cc._decorator;
@ccclass
export default class FireNpc extends Entity {
    constructor() {
        super()
        this.toInitAvaliableActions([
            GotoToiletAction
            , GotSleepAction
            , GotoEatAction
            , GotoEquipmentAction
            , GotoFireAction
        ])
        this.init()
    }

    public createGoalState(): Map<string, Object> {
        let goal = new Map<string, Object>();
        goal.set(ActionDataStatus.outFire, true);
        return goal;
    }

    update(dt) {
        this.updateTimer(dt)
    }
}
