/*
 * @Description: {} 
 * @Author: Rannar.Yang 
 * @Date: 2018-09-05 20:52:30 
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 18:31:49
 */

import { ActionStatus } from "../../ai/goap/ActionStatus";
import { GoapAction } from "../../ai/goap/GoapAction";
import { GoapAgent } from "../../ai/goap/GoapAgent";
import { IGoap } from "../../ai/goap/IGoap";
import { VGameObject } from "../../base/VGameObject";
import { GameDataManager } from "../../data/GameDataManager";
import { LabourerType } from "../../data/LabourerType";
import { ToolType } from "../../data/ToolType";
import { T_LabourerBean } from "../../data/T_LabourerContainer";
import { BackPackComponent } from "../BackPackComponent";
import { ToolComponent } from "../ToolComponent";

/**
 * A general labourer export class.
 * You should subexport class this for specific Labourer export classes and implement
 * the createGoalState() method that will populate the goal for the GOAP
 * planner.
 */
const { ccclass, property } = cc._decorator;
@ccclass
export class Labourer extends VGameObject implements IGoap {
	@property({ type: cc.Enum(LabourerType), displayName: "type" })
	public labourerType: LabourerType = LabourerType.None;

	/**goap agent */
	protected goapAgent: GoapAgent;
	/**拥有的actions */
	private avaliableActions: GoapAction[] = [];
	public getAvaliableActions(): GoapAction[] {
		return this.avaliableActions;
	}
	protected toInitAvaliableActions(actionCls: any[]) {
		let action;
		for (let i = 0, len = actionCls.length; i < len; i++) {
			action = new actionCls[i]();
			this.avaliableActions.push(action);
		}
	}
	/**背包 */
	public backpack: BackPackComponent;

	public bean: T_LabourerBean;

	public tool: ToolComponent;

	bMoving = false
	bMoveEnd = false
	public onLoad() {
		//super.childrenCreated();
		this.bean = GameDataManager.I.t_labourderContainer.getLabourerByType(this.labourerType)
		if (!this.tool) {
			this.pickUpTool();
		}
		this.initAvaliableActions();
		this.goapAgent = new GoapAgent(this);
	}
	protected initAvaliableActions() { }

	public update(delta: number) {
		this.goapAgent.update(delta);
	}

	public getWorldState(): Map<string, Object> {
		let worldData: Map<string, Object> = new Map<string, Object>();
		worldData.set(ActionStatus.HasOre, this.backpack.hasOre());
		worldData.set(ActionStatus.HasLogs, this.backpack.hasLog());
		worldData.set(ActionStatus.HasFirewood, this.backpack.hasFirewood());
		worldData.set(ActionStatus.HasTool, this.hasTool());
		return worldData;
	}

	private hasTool() {
		return this.tool != null;
	}

	/**
	 * Implement in subexport classes
	 */
	public createGoalState(): Map<string, Object> {
		return new Map()
	};

	public planFailed(failedGoad: Map<string, Object>) {
		// Not handling this here since we are making sure our goals will always succeed.
		// But normally you want to make sure the world state has changed before running
		// the same goal again, or else it will just fail.
	}

	public planFound(goal: Map<string, Object>, actions: GoapAction[]) {
		// Yay we found a plan for our goal
		console.log("Plan found: ", GoapAgent.prettyPrintActionsQueue(actions));
	}

	public actionsFinished(): void {
		// Everything is done, we completed our actions for this gool. Hooray!
		console.log("Actions completed");
	}

	public planAborted(aborter: GoapAction) {
		// An action bailed out of the plan. State has been reset to plan again.
		// Take note of what happened and make sure if you run the same goal again
		// that it can succeed.
		console.log("Plan Aborted: " + GoapAgent.prettyPrintAction(aborter));
	}

	public moveAgent(nextAction: GoapAction, delta: number) {
		let target = nextAction.target;
		if (this.bMoveEnd) {
			this.bMoveEnd = false
			return true
		}
		if (!this.bMoving) {
			this.bMoving = true
			let actions = []
			actions.push(cc.moveTo(2, new cc.Vec2(target.node.x, target.node.y)))
			actions.push(cc.callFunc(() => {
				this.bMoveEnd = true
				this.bMoving = false
				nextAction.setInRange(true);
			}))
			this.node.stopAllActions()
			this.node.runAction(cc.sequence(actions))
		}

		return this.bMoveEnd
		// let step = this.bean.speed * delta;
		// let target = nextAction.target;
		// // 设置新的position
		// this.moveTo(target, step);
		// if (this.posEquip(target)) {
		// 	nextAction.setInRange(true);
		// 	return true;
		// } else {
		// 	return false;
		// }
	}
	/**设置背包里的物品 */
	public setBackPack(backpack: BackPackComponent) {
		this.backpack = backpack;
		backpack.setOwner(this);
	}
	/**拾取工具 */
	public pickUpTool() {
		this.tool = new ToolComponent();
		console.log('拾取工具', this.constructor.name)
		//let tool = 
		// tool.node.x = 18;
		// tool.node.y = 35;
		//	tool.node.getComponent(cc.Sprite).spriteFrame = ToolType.getSource(this.bean.toolType);
		// this.addChild(tool);
	}
	/**销毁工具 */
	public destroyTool() {
		//this.removeChild(this.tool);
		this.tool = undefined;
	}

	public updateBackPack() {

	}
}