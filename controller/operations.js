var search = document.getElementById("search");
var content = document.getElementById("searchContent");

    /**
     * Função que pesquisa e retorna uma pessoa(Nome e Sobrenome) com todas as informações associadas.
     */
function searchPerson(){
    let table = "";
    service.getbyName(search.value,"Person/").then(function(people){
        people.forEach(function(person){
            table += `<ul class="list-group">
            <li class="list-group-item active" aria-current="true">${person.data.name} ${person.data.lastname}</li>
            <li class="list-group-item"><strong> Sala Etapa 1:</strong> ${person.data.room1}</li>
            <li class="list-group-item"><strong> Sala Etapa 2:</strong> ${person.data.room2}</li>
            <li class="list-group-item"><strong> Cafe Etapa 1:</strong> ${person.data.coffee1}</li>
            <li class="list-group-item"><strong> Cafe Etapa 1:</strong> ${person.data.coffee2}</li>
          </ul> <br>`
        })

        content.innerHTML = table;
    })
};

    /**
     * Função que pesquisa no banco de dados uma Sala e retorna todos seus ocupantes.
     */
function searchRoom(){
    let table = "";
    service.getbyName(search.value,"Rooms/").then(function(room){
        room.forEach(function(room){
            
            table += `<ul class="list-group">
            <li class="list-group-item active" aria-current="true">${room.data.name} </li>
            `
            for(let person of room.data.people){
                table +=  `<li class="list-group-item"><strong>Nome:</strong> ${person.name} ${person.lastname}</li>`
            };
            table +=  `</ul> <br>`

        })

        content.innerHTML = table;
    })
};

    /**
     * Função que pesquisa no banco de dados um Café e retorna todos seus ocupantes.
     */
function searchCoffee(){
    let table = "";
    service.getbyName(search.value,"Coffee/").then(function(coffees){
        coffees.forEach(function(coffee){
            
            table += `<ul class="list-group">
            <li class="list-group-item active" aria-current="true">${coffee.data.name} </li>
            `
            for(let person of coffee.data.people){
                table +=  `<li class="list-group-item"><strong>Nome:</strong> ${person.name} ${person.lastname}</li>`
            };
            table +=  `</ul> <br>`

        })

        content.innerHTML = table;
    })
};