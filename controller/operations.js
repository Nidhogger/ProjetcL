let nome = document.getElementById("buscar");
let conteudo = document.getElementById("conteudoBusca");

function buscarPessoa(){
    let tabela = "";
    service.obterPorNome(nome.value,"Pessoa/").then(function(pessoas){
        pessoas.forEach(function(pessoa){
            tabela += `<ul class="list-group">
            <li class="list-group-item active" aria-current="true">${pessoa.dados.nome} ${pessoa.dados.sobrenome}</li>
            <li class="list-group-item"><strong> Sala Etapa 1:</strong> ${pessoa.dados.sala1}</li>
            <li class="list-group-item"><strong> Sala Etapa 2:</strong> ${pessoa.dados.sala2}</li>
            <li class="list-group-item"><strong> Cafe Etapa 1:</strong> ${pessoa.dados.cafe1}</li>
            <li class="list-group-item"><strong> Cafe Etapa 1:</strong> ${pessoa.dados.cafe2}</li>
          </ul> <br>`
        })

        conteudo.innerHTML = tabela;
    })
};

function buscarSala(){
    let tabela = "";
    service.obterPorNome(nome.value,"Salas/").then(function(salas){
        salas.forEach(function(sala){
            
            tabela += `<ul class="list-group">
            <li class="list-group-item active" aria-current="true">${sala.dados.nome} </li>
            `
            for(let pessoa of sala.dados.pessoas){
                tabela +=  `<li class="list-group-item"><strong>Nome:</strong> ${pessoa.nome} ${pessoa.sobrenome}</li>`
            };
            tabela +=  `</ul> <br>`

        })

        conteudo.innerHTML = tabela;
    })
};

function buscarCafe(){
    let tabela = "";
    service.obterPorNome(nome.value,"Cafe/").then(function(cafes){
        cafes.forEach(function(cafe){
            
            tabela += `<ul class="list-group">
            <li class="list-group-item active" aria-current="true">${cafe.dados.nome} </li>
            `
            for(let pessoa of cafe.dados.pessoas){
                tabela +=  `<li class="list-group-item"><strong>Nome:</strong> ${pessoa.nome} ${pessoa.sobrenome}</li>`
            };
            tabela +=  `</ul> <br>`

        })

        conteudo.innerHTML = tabela;
    })
};