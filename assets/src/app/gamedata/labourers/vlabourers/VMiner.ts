import { Miner } from "../Miner";
import { VLabourer } from "./VLabourer";
/**
 * 矿工
 */
export class VMiner extends VLabourer {
	protected labourer: Miner;
	public constructor() {
		super();
	}
}