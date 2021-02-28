class Service{
    constructor(){};
    // usado
   async personRegister(name,lastname,room1,room2,coffee1,coffee2){
        db.ref('Person/').push().set({
            name,
            lastname,
            room1,
            room2,
            coffee1,
            coffee2
          })
    };
    // usado
    async registerRoom(name, capacity){
        db.ref('Rooms/').push().set({
            name,
            capacity,
            people: ""
          });
    };

    //usado
    async registerCoffee(name){
        db.ref('Coffee/').push().set({
            name,
            people: ""
          });
    };

    //usado
    getAll(path){
        return new Promise( function(resolve, reject) {
            let listaObjetos = [];
            db.ref(path).once('value').then((dados) => {
                dados.forEach(function(object) {
                    listaObjetos.push({id: object.key,
                                      dados: object.val()});
                })
                resolve(listaObjetos);
            });
        });
    };

    async getbyName(name,path){
        const all = await this.getAll(path);
        let listOfObjetcs = [];
        all.forEach(function(object) {
            
            if(object.dados.name == name){
                listOfObjetcs.push(object);
            };
        })
        return listOfObjetcs
    };

    // usado
    async addPersontoRoom(person,room){
        let listPeople;
        if(room.dados.people.length == 0){
            listPeople = [person];
        }else{
            listPeople = room.dados.people;
            listPeople.push(person);
        }

        db.ref('Rooms/').child(room.id).update({
            name: room.dados.name,
            capacity:room.dados.capacity,
            people: listPeople
        })
    };

    //usado
    async addPersonCoffee(person,coffee){
        let listPeople;

        if(coffee.dados.people.length == 0){
            listPeople = [person];
        }else{
            listPeople = coffee.dados.people;
            listPeople.push(person);
        }

        db.ref('Coffee/').child(coffee.id).update({
            name: coffee.dados.name,
            people: listPeople
        })
    };
};

const service = new Service();