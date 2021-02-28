class Service{
    constructor(){};

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

    async registerRoom(name, capacity){
        db.ref('Rooms/').push().set({
            name,
            capacity,
            people: ""
          });
    };


    async registerCoffee(name){
        db.ref('Coffee/').push().set({
            name,
            people: ""
          });
    };


    getAll(path){
        return new Promise( function(resolve, reject) {
            let listaObjetos = [];
            db.ref(path).once('value').then((data) => {
                data.forEach(function(object) {
                    listaObjetos.push({id: object.key,
                        data: object.val()});
                })
                resolve(listaObjetos);
            });
        });
    };

    async getbyName(name,path){
        const all = await this.getAll(path);
        let listOfObjetcs = [];
        all.forEach(function(object) {
            
            if(object.data.name == name){
                listOfObjetcs.push(object);
            };
        })
        return listOfObjetcs
    };

    // usado
    async addPersontoRoom(person,room){
        let listPeople;
        if(room.data.people.length == 0){
            listPeople = [person];
        }else{
            listPeople = room.data.people;
            listPeople.push(person);
        }

        db.ref('Rooms/').child(room.id).update({
            name: room.data.name,
            capacity:room.data.capacity,
            people: listPeople
        })
    };

    //usado
    async addPersonCoffee(person,coffee){
        let listPeople;

        if(coffee.data.people.length == 0){
            listPeople = [person];
        }else{
            listPeople = coffee.data.people;
            listPeople.push(person);
        }

        db.ref('Coffee/').child(coffee.id).update({
            name: coffee.data.name,
            people: listPeople
        })
    };
};

const service = new Service();