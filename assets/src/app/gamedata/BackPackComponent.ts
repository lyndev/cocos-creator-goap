import { Labourer } from "./labourers/Labourer";

/*
 * @Description: Holds resources for the Agent
 * @Author: Rannar.Yang 
 * @Date: 2018-09-05 20:44:56 
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 18:33:07
 */
export class BackPackComponent {
	private owner: Labourer;
	private _numLogs: number = 0;
	public get numLogs(): number {
		return this._numLogs;
	}
	public set numLogs(val: number) {
		this._numLogs = val;
		this.owner.updateBackPack();
	}


	private _numFirewood: number = 0;
	public get numFirewood(): number {
		return this._numFirewood;
	}
	public set numFirewood(val: number) {
		this._numFirewood = val;
		this.owner.updateBackPack();
	}

	private _numOre: number = 0;
	public get numOre(): number {
		return this._numOre;
	}
	public set numOre(val: number) {
		this._numOre = val;
		this.owner.updateBackPack();
	}

	constructor(numLogs: number, numFirewood: number, numOre: number) {
		this._numLogs = numLogs;
		this._numFirewood = numFirewood;
		this._numOre = numOre;
	}
	public setOwner(owner: Labourer) {
		this.owner = owner;
	}

	public hasOre() {
		return this.numOre > 0;
	}

	public hasLog() {
		return this.numLogs > 0;
	}

	public hasFirewood() {
		return this.numFirewood > 0;
	}

}