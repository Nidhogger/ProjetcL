class Util{
    constructor(){};

    ObterMenosOcupada(lista){
        let menor1 = lista[0];
        let menor2 = lista[1];
        let indexMenor1 = 0;
        let indexMenor2 = 0;
    
        for(let index = 1; index < lista.length; index++){
            if( menor1.dados.pessoas.length > lista[index].dados.pessoas.length){
                menor1 = lista[index];
                indexMenor1 = index;
            }
        }

        for(let index = 0; index < lista.length; index++){
            if (lista[index].id != menor1.id){
                if( menor2.dados.pessoas.length > lista[index].dados.pessoas.length){
                    menor2 = lista[index];
                    indexMenor2 = index;
                }
            };
        };
        return {sala1:menor1,sala2:menor2};
    };

}

const utils = new Util();
