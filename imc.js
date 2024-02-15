const calcular = document.getElementById('calcular'); //só deixei de fora a variavel referente ao botão


//precisamos acessor uma propriedade do elemento, fazemos com:

function imc(){
// somente quando eu clicar que eu vou precisar da altura, peso e nome, então quer dizer que essas 4 variaveis só precisams er criadas dentro da minha função.
const nome = document.getElementById('nome').value; // o get elemente vai procurar essa id no doc.
const altura = document.getElementById('altura').value; //eu posso colocar o .value direto aqui, ja que ambos eu só quero o elemento que vai ser dgitado, em nome poderia colocar maas vou deixar como exemplo
const peso = document.getElementById('peso').value; //DO PESO, ALTURA E NOME eu só quero o valor que está dentro da caixinha
const resultado = document.getElementById('resultado'); // quando eu clicar em resultado ele precisa calcular e dar o resultado na box. no resultado nao colocamos.value pq eu quero atribuir um valor a ele, aqui realmente queremos o elemento HTML


//antes de tudo precisamos validar se a caixinha está preenchida:
if (nome !== '' && altura !== '' && peso !='' ){ // eu nao quero acessar o nome todo, pq o nome é todo html, eu quero somente o valor e para isso usamos.value
    //alert('valor preenchido!!'); ao invés desse alerta, vamos fazer o calculo
    const valorIMC = (peso / (altura * altura)).toFixed(2);// o calculo do imc é o peso divido pela altura ao quadrado.

    //queremos um textinho e nao só o resultado, e por isso cramos:
    let classificacao = " "; //let pq precisa ser alterada

    if (valorIMC < 18.5 ){ // Lê-se: se valor imc for menor que 18.5 faça {
        classificacao = 'abaixo do peso ideal.';
    } else if (valorIMC < 25) { // menor que 25, ou seja, entre 18 e 25
        classificacao = 'com peso ideal.';

    } else if(valorIMC < 30) {
        classificacao = ' levemente acima peso acima do ideal.';

    } else if (valorIMC < 35 ){
        classificacao = 'com obesidade grau 1';
    }else if (valorIMC < 40 ){
        classificacao = 'obesidade grau 2';
    }else {
        classificacao = 'obesidade grau 3' ;

    }


//aqui o valor havia ficado com dizima, então fixamos ele com o ".toFixed(2)" lá no valor imc
    
    // resultado.textContent = valorIMC; como eu quero que tenha um textinho bonitinho eu faço:
    resultado.textContent = `${nome} Seu IMC é ${valorIMC} e você está  ${classificacao}`;
    // dentro desse ascento grave, da pra gente incluir variaveis

}else {
   resultado.textContent = 'Preencha todos os campos!!' ; //nesse caso nao queremos só o value, value é só pra input do tipo texto e alguns outros elementos, mas para a caixa de resultado nós queremos o conteudo dentro da div, então vamos usar o textContent e lá colocamos o texto
    //alert('preencha todos os campos!!'); // ano vamos usar o alert pq vamos utilizar a caixa de resultado para falar com o usuario
}





}
calcular.addEventListener('click',imc) // aqui criamos um evento alerta, quando algém clicar ele vai executar uma função chamada imc(que vamos criar), quando ele clicar ele vaie xecutar essa função imc
