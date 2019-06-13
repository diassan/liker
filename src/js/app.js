import {Mem} from "./lib.js";
import {MemManager} from "./lib.js";

class LikerWidget {
    constructor(parentEl,manager){
        this.parentEl = parentEl;
        this.manager = manager;
        this.init();
    }
    init(){
        this.parentEl.innerHTML =`
        <div data-id="list"></div>
        `;


        this.listEl = this.parentEl.querySelector('[data-id=list]');
        console.log(this.listEl)

        //const items =this.manager.getAll();
        this.items =this.manager.getAll();
        this.likerItems(this.items);
        //this.likerItems(items);
    }
    likerItems(items){
        this.listEl.innerHTML='';
        for (const item of this.items) {
            const el = document.createElement('div');
            el.innerHTML = `
            <p>${item.id}</p>
            <p>${item.textMem}</p>
            <p>${item.like}</p>
            <button data-action="plusLiker">☝</button>
            <button data-action="minusLiker">☟</button>
`;
            const liker = 0;
            const likerPlus = el.querySelector('[data-action=plusLiker]');
            likerPlus.addEventListener('click', () =>{
                console.log(this,item )

                item.like = item.like+1;
                this.onFilter()
                this.likerItems(this.items);

            });
            const likerMinus = el.querySelector('[data-action=minusLiker]');
            likerMinus.addEventListener('click',()=>{

                item.like = item.like-1
                this.onFilter();
                this.likerItems(this.items);
                this.bumMassiv()
            });

            this.listEl.appendChild(el);
        }
    }
    onFilter(){
        this.items = this.items.sort((a,b) => {
            console.log('filter',a,b )
            return b.like-a.like
       });

    }
    // bumMassiv(){
    //     this.items = this.items.splice(o => o.like <= -10)
    //     return this.items
    // };

};


const manager = new MemManager();
manager.add(
    new Mem(1,'Сегодня ты курица',0)
);
manager.add(
    new Mem(2,'Сегодня ты козел',0)
);
const liker = new LikerWidget(document.querySelector('#root'),manager);