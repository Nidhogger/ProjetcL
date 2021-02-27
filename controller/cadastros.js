//Colocar os dom aqui em let se for global 
let erro = document.getElementById("erro");
let sucesso = document.getElementById("sucesso");

function cadastrarPessoa(){
        sucesso.style.display = "none";
        erro.style.display = "none";

        let name = document.getElementById("f_name");
        let lastName = document.getElementById("l_name");
        if(name.value.length != 0 && lastName.value.length != 0){
            service.obterTodas('Salas/').then(function(salas){
                if(salas.length <= 1){
                    erro.innerText = "E preciso ter ao menos duas salas cadastradas !"
                    erro.style.display = "block";
                } else{
                    return salas;
                }
            }).then(function(salas){
                service.obterTodas('Cafe/').then(function(cafes){
                    if(cafes.length <= 1){
                        erro.innerText = "E preciso ter ao menos dois pontos de  café cadastrados !"
                        erro.style.display = "block";
                    } else{
                        let pessoa = {nome : name.value, sobrenome : lastName.value }
                        let salaDecadastro = utils.ObterMenosOcupada(salas);
    
                        service.adcionarPessoaASala(pessoa,salaDecadastro.sala1);
                        service.adcionarPessoaASala(pessoa,salaDecadastro.sala2);

                        let cafeDecadastro = utils.ObterMenosOcupada(cafes);
                        service.adcionarPessoaACafe(pessoa,cafeDecadastro.sala1);
                        service.adcionarPessoaACafe(pessoa,cafeDecadastro.sala2);
                        
                        service.cadastrarPessoa(name.value,
                                                lastName.value,
                                                salaDecadastro.sala1.dados.nome,
                                                salaDecadastro.sala2.dados.nome,
                                                cafeDecadastro.sala1.dados.nome,
                                                cafeDecadastro.sala2.dados.nome)
    
                    name.value = "";
                    lastName.value = "";
                    sucesso.style.display = "block";
                    }
                })
            })
            
        } else{
            erro.innerText = "Pessoa deve ter nome e sobrenome !"
            erro.style.display = "block";
        };
};

function cadastrarSalas(){
        sucesso.style.display = "none";
        erro.style.display = "none";

        let name = document.getElementById("room");
        let locationName = document.getElementById("l_room");

        if(name.value.length != 0 && locationName.value.length != 0){

            service.cadastrarSalas(name.value,locationName.value).then(function(res){
                name.value = ""; 
                locationName.value = ""; 
                sucesso.style.display = "block";
            });
            
        } else{
            erro.innerText = "Sala precisa ter um nome e uma locação!"
            erro.style.display = "block";
        };
};

function cadastrarCafe(){
        sucesso.style.display = "none";
        erro.style.display = "none";

        let cname = document.getElementById("Coffee");

        if(cname.value.length != 0){

            service.cadastrarCafe(cname.value).then(function(res){
                cname.value = ""; 
                sucesso.style.display = "block";
            });
            
        } else{
            erro.innerText = "Cafe precisa de um nome !"
            erro.style.display = "block";
        };
};