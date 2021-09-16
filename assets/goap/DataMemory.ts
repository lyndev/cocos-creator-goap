export default class DataMemory{
    private data:Map<string, any>
    constructor(){
        this.data = new Map<string, any>()
    }
    public set(key, v){
        this.data.set(key, v)
    }

    public get(key){
        return this.data.get(key)
    }

    public remove(key){
        this.data.delete(key)
    }
}