function helloMundo(){
    console.log("Hello World!");
}

helloMundo();

// function qualIdade(idade){
//     console.log(`Você tem ${idade} anos!`)
// }

// qualIdade(12);

function somaNumeros(a, b){
    return a + b;
}

console.log(somaNumeros(3,2))

function numeroAleatorio(num){
    return Math.floor(Math.random() * num) + 1;
}

console.log(numeroAleatorio(60));

function autoEscola(idade){
    if (idade >= 18){
        console.log("Pode fazer auto escola.");
    }else{
        console.log("Não permitida as aulas por falta de idade.")
    }
}

autoEscola(23);
autoEscola(13);

function qualDado(dado){
    if (typeof dado === "string" ){
        console.log("Esse tipo de dado é String");
    }else if (typeof dado === 'boolean'){
        console.log("Esse tipo de dado é boolean");
    }else if (typeof dado === 'number'){
        console.log("Esse tipo de dado é number")
    }
}

qualDado("Yan");
qualDado(23);
qualDado(true);