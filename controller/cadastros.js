let error = document.getElementById("error");
let success = document.getElementById("success");

    /**
     * Função do banco que cadastra uma pessoa.
     * @constructor
     */
function personRegister(){
        success.style.display = "none";
        error.style.display = "none";

        let name = document.getElementById("f_name");
        let lastName = document.getElementById("l_name");
        if(name.value.length != 0 && lastName.value.length != 0){
            service.getAll('Rooms/').then(function(room){
                if(room.length <= 1){
                    error.innerText = "E preciso ter ao menos duas salas cadastradas !"
                    error.style.display = "block";
                } else{
                    return room;
                }
            }).then(function(room){
                service.getAll('Coffee/').then(function(coffees){
                    if(coffees.length <= 1){
                        error.innerText = "E preciso ter ao menos dois pontos de  café cadastrados !"
                        error.style.display = "block";
                    } else{
                        let person = {name : name.value, lastname : lastName.value }
                        let roomOfregister = utils.getlessFull(room);
    
                        service.addPersontoRoom(person,roomOfregister.room1);
                        service.addPersontoRoom(person,roomOfregister.room2);

                        let coffeeOfregister = utils.getlessFull(coffees);
                        service.addPersonCoffee(person,coffeeOfregister.room1);
                        service.addPersonCoffee(person,coffeeOfregister.room2);
                        
                        service.personRegister(name.value,
                                                lastName.value,
                                                roomOfregister.room1.data.name,
                                                roomOfregister.room2.data.name,
                                                coffeeOfregister.room1.data.name,
                                                coffeeOfregister.room2.data.name)
    
                    name.value = "";
                    lastName.value = "";
                    success.style.display = "block";
                    }
                })
            })
            
        } else{
            error.innerText = "Pessoa deve ter nome e sobrenome !"
            error.style.display = "block";
        };
};

    /**
     * Função do banco que cadastra uma Sala.
     * @constructor
     */
function registerRoom(){
        success.style.display = "none";
        error.style.display = "none";

        let name = document.getElementById("room");
        let locationName = document.getElementById("l_room");

        if(name.value.length != 0 && locationName.value.length != 0){

            service.registerRoom(name.value,locationName.value).then(function(res){
                name.value = ""; 
                locationName.value = ""; 
                success.style.display = "block";
            });
            
        } else{
            error.innerText = "Sala precisa ter um nome e uma locação!"
            error.style.display = "block";
        };
};

    /**
     * Função do banco que cadastra um Café.
     * @constructor
     */
function registerCoffee(){
        success.style.display = "none";
        error.style.display = "none";

        let cname = document.getElementById("Coffee");

        if(cname.value.length != 0){

            service.registerCoffee(cname.value).then(function(res){
                cname.value = ""; 
                success.style.display = "block";
            });
            
        } else{
            error.innerText = "Cafe precisa de um nome !"
            error.style.display = "block";
        };
};