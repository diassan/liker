export class Mem {
    constructor( id,textMem, like = 0){
        this.id = id;
        this.textMem = textMem;
        this.like = like;
    }
}

export class MemManager {
    constructor(){
        this.items = [];

    }
    add(item){
        this.items.push(item);
    }
    getAll(){
        return this.items;
    }
    getLike(){
        return this.items.reduce((acc,val) => acc + val.like,0)
    }
    onFilter

}