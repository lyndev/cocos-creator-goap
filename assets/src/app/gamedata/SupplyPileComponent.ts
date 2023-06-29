import { VGameObject } from "../base/VGameObject";
const { ccclass, property } = cc._decorator;
@ccclass
export class SupplyPileComponent extends VGameObject {
	@property(cc.Label)
	public txtToolNum: cc.Label = null;
	@property(cc.Label)
	public txtOreNum: cc.Label = null;
	@property(cc.Label)
	public txtLogNum: cc.Label = null;
	@property(cc.Label)
	public txtFirewoodNum: cc.Label = null;

	start() {
		this.txtToolNum.string = "工具：" + this.numTools;
		this.txtOreNum.string = "矿石：" + this.numOre;
		this.txtLogNum.string = "原木：" + this.numLogs;
		this.txtFirewoodNum.string = "木柴：" + this.numFirewood;
	}

	private _numTools: number = 0; // for mining ore and chopping logs
	public get numTools() {
		return this._numTools;
	}
	public set numTools(val: number) {
		val = Number(val);
		this._numTools = val;
		this.txtToolNum && (this.txtToolNum.string = "工具：" + val);
	}

	private _numLogs: number = 0; // makes firewood
	public get numLogs(): number {
		return this._numLogs;
	}
	public set numLogs(val: number) {
		val = Number(val);
		this._numLogs = val;
		this.txtLogNum && (this.txtLogNum.string = "原木：" + val);
	}

	private _numFirewood: number = 0; // what we want to make
	public get numFirewood(): number {
		return this._numFirewood;
	}
	public set numFirewood(val: number) {
		val = Number(val);
		this._numFirewood = val;
		this.txtFirewoodNum && (this.txtFirewoodNum.string = "木柴：" + val);
	}

	private _numOre: number = 0; // makes tools
	public get numOre(): number {
		return this._numOre;
	}
	public set numOre(val: number) {
		val = Number(val);
		this._numOre = val;
		this.txtOreNum && (this.txtOreNum.string = "矿石：" + val);
	}

}