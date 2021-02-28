class Util{
    constructor(){};

    getlessFull(list){
        let Ordenedlist = list.sort(function(obj1, obj2){
            return obj1.dados.people.length < obj2.dados.people.length ? -1 : (obj1.dados.people.length > obj2.dados.people.length ? 1 : 0); 
        });

        return {room1:Ordenedlist[0],room2:Ordenedlist[1]};
    };

}

const utils = new Util();
