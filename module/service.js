class Service{
    constructor(){};
    // usado
   async cadastrarPessoa(nome,sobrenome,sala1,sala2,cafe1,cafe2){
        db.ref('Pessoa/').push().set({
            nome,
            sobrenome,
            sala1,
            sala2,
            cafe1,
            cafe2
          })
    };
    // usado
    async cadastrarSalas(nome, lotacao){
        db.ref('Salas/').push().set({
            nome,
            lotacao,
            pessoas: ""
          });
    };

    //usado
    async cadastrarCafe(nome){
        db.ref('Cafe/').push().set({
            nome,
            pessoas: ""
          });
    };

    //usado
    obterTodas(path){
        return new Promise( function(resolve, reject) {
            let listaObjetos = [];
            db.ref(path).once('value').then((dados) => {
                dados.forEach(function(objeto) {
                    listaObjetos.push({id: objeto.key,
                                      dados: objeto.val()});
                })
                resolve(listaObjetos);
            });
        });
    };

    async obterPorNome(nome,path){
        const todas = await this.obterTodas(path);
        let listaDeObjetos = [];
        todas.forEach(function(objeto) {
            
            if(objeto.dados.nome == nome){
                listaDeObjetos.push(objeto);
            };
        })
        return listaDeObjetos
    };

    // usado
    async adcionarPessoaASala(pessoa,sala){
        let listaPessoas;
        if(sala.dados.pessoas.length == 0){
            listaPessoas = [pessoa];
        }else{
            listaPessoas = sala.dados.pessoas;
            listaPessoas.push(pessoa);
        }

        db.ref('Salas/').child(sala.id).update({
            nome: sala.dados.nome,
            lotacao:sala.dados.lotacao,
            pessoas: listaPessoas
        })
    };

    //usado
    async adcionarPessoaACafe(pessoa,cafe){
        let listaPessoas;

        if(cafe.dados.pessoas.length == 0){
            listaPessoas = [pessoa];
        }else{
            listaPessoas = cafe.dados.pessoas;
            listaPessoas.push(pessoa);
        }

        db.ref('Cafe/').child(cafe.id).update({
            nome: cafe.dados.nome,
            pessoas: listaPessoas
        })
    };
};

const service = new Service();