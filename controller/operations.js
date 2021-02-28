let name = document.getElementById("search");
let conteudo = document.getElementById("searchContent");

function searchPerson(){
    let table = "";
    service.getbyName(name.value,"Person/").then(function(people){
        people.forEach(function(person){
            table += `<ul class="list-group">
            <li class="list-group-item active" aria-current="true">${person.dados.name} ${person.dados.lastname}</li>
            <li class="list-group-item"><strong> Sala Etapa 1:</strong> ${person.dados.room1}</li>
            <li class="list-group-item"><strong> Sala Etapa 2:</strong> ${person.dados.room2}</li>
            <li class="list-group-item"><strong> Cafe Etapa 1:</strong> ${person.dados.coffee1}</li>
            <li class="list-group-item"><strong> Cafe Etapa 1:</strong> ${person.dados.coffee2}</li>
          </ul> <br>`
        })

        conteudo.innerHTML = table;
    })
};

function searchRoom(){
    let table = "";
    service.getbyName(name.value,"Rooms/").then(function(room){
        room.forEach(function(room){
            
            table += `<ul class="list-group">
            <li class="list-group-item active" aria-current="true">${room.dados.name} </li>
            `
            for(let person of room.dados.people){
                table +=  `<li class="list-group-item"><strong>Nome:</strong> ${person.name} ${person.lastname}</li>`
            };
            table +=  `</ul> <br>`

        })

        conteudo.innerHTML = table;
    })
};

function searchCoffee(){
    let table = "";
    service.getbyName(name.value,"Coffee/").then(function(coffees){
        coffees.forEach(function(coffee){
            
            table += `<ul class="list-group">
            <li class="list-group-item active" aria-current="true">${coffee.dados.name} </li>
            `
            for(let person of coffee.dados.people){
                table +=  `<li class="list-group-item"><strong>Nome:</strong> ${person.name} ${person.lastname}</li>`
            };
            table +=  `</ul> <br>`

        })

        conteudo.innerHTML = table;
    })
};