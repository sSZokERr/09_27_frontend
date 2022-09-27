class Allat{
    #labak;
    constructor(nev, labak){
        this.nev = nev;
        this.labak = labak;
    }

    get labak(){
        return this.#labak;
    }
    set labak(sz){
        if(sz >= 0){
            this.#labak = sz;
        }else{
            throw new Error('Labak szama nem lehet negativ');
        }
    }
}

class Kutya extends Allat{
    constructor(nev){
        super(nev, 4);
    }
    hangotkiad(){
        console.log('vau');
    }
}
class Aranyhal extends Allat{
    constructor(nev){
        super(nev, 0);
    }
    hangotkiad(){
        console.log('blub');
    }
}
let kutya = new Kutya('Bodri');
let hal = new Aranyhal('Nemo');