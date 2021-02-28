# ProjetcL

**Arquitetura.**

Os códigos desse projeto estão organizados da seguinte forma:

- `module` - Possui o arquivo service.js responsável pelas funções de envio e requisição ao banco de dados NoSQL.
- `controller` - Possui os arquivos responsáveis por pegar os dados para cadastro e mostrar os dados na tela.
- `documentation` - Possui tudo relacionando a documentação gerada via JSDoc.
- `index.html` - Arquivo com tudo da interface web.
- `firebaseConfig.js` - Arquivo com as configurações para o funcionamento do banco de dados Firebase.

## Executando
Para executar os códigos localmente, basta abrir a pagina index.html em qualquer navegador, também e possível utilizar a ferramenta com o link abaixo.
[Ferramenta Web](https://nidhogger.github.io/ProjetcL/)

## Utilização
A ferramenta e dividida em duas sessões a primeira **Area de cadastro** possui os campos para realizar cada cadastro separadamente. A segunda intitulada  **Area de busca** possui apenas um campo com três botões, basta apenas utilizar o botão referente a busca que deseja.

## Documentação
A documentação foi feita em código, pode ser acessada localmente executando em um navegador web o arquivo index.html que esta dentro da pasta documentation, ou pode ser acessada de forma online no link abaixo.
[Documentação online](https://nidhogger.github.io/ProjetcL/documentation/)

**Em código a documentação esta organizada da seguinte maneira:**
```javascript
	/**
 	* Descrição da função ou método.
 	* @param {tipo} nome - Descrição de uso.
 	* @return {tipo} tipo de retorno quando disponível.
 	*/
}
```
