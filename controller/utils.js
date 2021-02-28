/** Classe com utilitarios a ser usados no controlador. */
class Util{
    constructor(){};

    /**
     * Função do banco que a Sala ou Café com menor ocupação.
     * @param {list} list - Uma lista contendo objetos do tipo Sala e Café.
     */
    getlessFull(list){
        let Ordenedlist = list.sort(function(obj1, obj2){
            return obj1.data.people.length < obj2.data.people.length ? -1 : (obj1.data.people.length > obj2.data.people.length ? 1 : 0); 
        });

        return {room1:Ordenedlist[0],room2:Ordenedlist[1]};
    };

}

const utils = new Util();
