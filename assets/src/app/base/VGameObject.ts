
const { ccclass, property } = cc._decorator;
@ccclass
export class VGameObject extends cc.Component {
	createGoalState(): Map<string, Object> {
		throw new Error("Method not implemented.");
	}
	public moveTo(target: VGameObject, step: number) {
		let curDis = this.distanceSquare(target)
		let minDis = step * step
		if (curDis <= minDis) {
			this.node.x = target.node.x;
			this.node.y = target.node.y;
		} else {
			let percent = 6 / this.distance(target)
			this.node.x = this.node.x + percent * (target.node.x - this.node.x)
			this.node.y = this.node.y + percent * (target.node.y - this.node.y);
		}
	}
	public posEquip(gameObj: VGameObject) {
		return this.node.x == gameObj.node.x && this.node.y == gameObj.node.y;
	}
	/**距离的平方 */
	public distanceSquare(object: VGameObject) {
		return (object.node.x - this.node.x) * (object.node.x - this.node.x) + (object.node.y - this.node.y) * (object.node.y - this.node.y);
	}
	/**距离 */
	public distance(object) {
		return Math.sqrt(this.distanceSquare(object))
	}
}