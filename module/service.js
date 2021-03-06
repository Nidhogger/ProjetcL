/** Classe com métodos de manipulação de banco de dados. */
class Service{
    constructor(){};

    /**
     * Função do banco para cadastrar uma nova pessoa, necessita, que exista 2 salas e 2 cafes.
     * @param {string} name - Nome da pessoa 
     * @param {string} lastname - Sobrenome da pessoa
     * @param {string} room1 - Sala que a pessoa vai ficar na etapa 1
     * @param {string} room2 - Sala que a pessoa vai ficar na etapa 2
     * @param {string} coffee1 - Cafe que a pessoa vai ficar na etapa1 
     * @param {string} coffee2 - Cafe que a pessoa vai ficar na etapa2
     */
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

    /**
     * Função do banco para cadastrar uma nova Sala.
     * @param {string} name - Nome da sala 
     * @param {string} capacity - Capacidade de pessoas na sala
     */
    async registerRoom(name, capacity){
        db.ref('Rooms/').push().set({
            name,
            capacity,
            people: ""
          });
    };


    /**
     * Função do banco para cadastrar uma nova localidade de Café.
     * @param {string} name - Nome do Café. 
     */
    async registerCoffee(name){
        db.ref('Coffee/').push().set({
            name,
            people: ""
          });
    };


    /**
     * Função do banco que chama o conteudo de um determinado caminho(Person,Rooms,Coffee).
     * @param {string} path - Caminho do banco de dados. 
     * @return {list} Uma lista com todos os objetos presentes no caminho.
     */
    getAll(path){
        return new Promise( function(resolve, reject) {
            let listOfObjetcs = [];
            db.ref(path).once('value').then((data) => {
                data.forEach(function(object) {
                    listOfObjetcs.push({id: object.key,
                        data: object.val()});
                })
                resolve(listOfObjetcs);
            });
        });
    };

    /**
     * Função do banco que chama o nome de determinada pessoa, e Salas e Cafés associados com o mesmo..
     * @param {string} name - Nome da pessoa sendo pesquisado.
     * @param {string} path - Caminho do banco de dados. 
     * @return {list} uma lista com todos os objetos com o mesmo name no caminho.
     */
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

    /**
     * Função do banco que adiciona uma pessoa(Nome e Sobrenome) a uma Sala.
     * @param {string} person - Nome e Sobrenome da pessoa sendo adicionada a Sala
     * @param {object} room - Objeto com as informações da Sala a qual a pessoa esta sendo adicionada.  
     */
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

    /**
     * Função do banco que adiciona uma pessoa(nome e sobrenome) a um Café.
     * @param {string} person - Nome e Sobrenome da pessoa sendo adicionada ao Café
     * @param {object} coffee - Objeto com as informações do Café ao qual a pessoa esta sendo adicionada. 
     */
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