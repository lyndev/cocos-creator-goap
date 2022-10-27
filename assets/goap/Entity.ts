import { GoapAction } from '../src/app/ai/goap/GoapAction';
import { GoapAgent } from '../src/app/ai/goap/GoapAgent';
import { IGoap } from '../src/app/ai/goap/IGoap';
import { ActionDataStatus } from './ActionDataStatus';
import DataMemory from './DataMemory';

const { ccclass, property } = cc._decorator;
@ccclass
export abstract default class Entity extends GoapAgent  {
    public updateTimer(delta: number) {
        this.update(delta);
    }
}
