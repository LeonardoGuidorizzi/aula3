console.log('Calculadora Simples');

var readLine = require('readline')

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o numero1:\n', function(valor1){
    //declarando a variavel e convertendo o valor digitado pelo usuario em float
    let numero1 = parseFloat(valor1);

    //typeof= mostra qual e o tipo da variavel ou um objeto
    //cosole.log(typeof(numero1));

    entradaDados.question('Digite o numero2:\n', function(valor2){
        let numero2 = parseFloat(valor2);

        //verificacao de string ou number
        //isNaN: quando nao e numero 

        if( isNaN(numero1)||isNaN(numero2))  {
            resultado = 'Erro: somente numeros para a executar o programa'
        }else{

        
        
            entradaDados.question('Escolha a operacao a ser calculada: somar [+], subtrair [-], multiplicar[*], dividir[/]', function(opcao){
                //Decalrando a variavel que vai rebeber o tipo de operacao natematica e convertendo o texo diditado em MAIUSCULO
                // toUpperCase() - converte em MAIUSCULO
                // toLowerCase() - converter em minusculo 
                /**let operacao = opcao.toUpperCase();
                let resultado;
                if(operacao == 'SOMAR' || operacao == '+')
                {
                    resultado = numero1 + numero2;
                }else if (operacao == 'SUBTRAIR' || operacao == '-') 
                {
                    resultado = numero1 - numero2;
                }else if (operacao ==   'MULTPLICAR'|| operacao == '*'){
                    resultado = numero1 * numero2
                }else if(operacao == 'DIVIDIR' || operacao == '/' ){
                    resultado = numero1 / numero2
                }
                else
                {
                    resultado = 'ERRO: Nao foi escolhido uma operacao valida'
                    erro = true
                }*/
                switch (operacao)
                {
                    case 'SOMAR': case '+':
                        resultado = numero1 + numero2
                        break
                    case 'SUBTRAIR': case '-':
                        resultado = numero1 - numero2
                        break
                    case 'MULTIPLICAR': case '*':
                        resultado = numero1 * numero2
                    case 'DIVIDIR': case '/':
                        resultado = numero1  / numero2
                        if (numero2 == 0)
                        {
                            resultado = 'ERRO: Nao e possivel realizar a realizar a divisao por 0'
                            erro = true
                        }
                        else
                            resultado = numero1 / numero2;
                    default:
                        resultado = 'ERRO: Nao foi escolhido uma operacao valida'
                        erro = true;
                    
                }
                
            });
        }
        console.log(resultado);
    });
});