let obj = {
    nev: "User1",
    eletkor: 19
};

class User {
    #nev;
    #eletkor;
    
    constructor(nev, eletkor){
        this.#nev = nev;
        this.#eletkor = eletkor;
    }

    kiir(){
        console.log(this.nev, this.eletkor);
    }

    get eletkor(){
        return this.#eletkor;
    }
    get nev(){
        return this.#nev;
    }
    set eletkor(ujEletkor){
        if(typeof ujEletkor == 'number' && ujEletkor >= 0){
            this.#eletkor = ujEletkor;
        }else{
            console.error('Nem negativ egesz szam legyen')
        }
    }
    set nev(ujNev){
        this.#nev = ujNev;
    }
}

new user = new User('User2', 12);
user.kiir();
console.log(user instanceof User);

user.eletkor = 5;
user.kiir();
user.eletkor = "kutya";
user.kiir();

