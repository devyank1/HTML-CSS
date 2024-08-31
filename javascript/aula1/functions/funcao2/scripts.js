function multiplicarDoisNumeros(x,y){
    return x * y;
}

console.log(multiplicarDoisNumeros(3,8));

const mult = multiplicarDoisNumeros(7,9);

console.log("O valor é " + mult);

function aulaDirecao(idade, cnh){
    if (idade >= 18 && cnh == true){
        console.log("Pode Dirigir!");
    }else{
        console.log("Nao Dirija!");
    }
}

console.log(aulaDirecao(19, true));
console.log(aulaDirecao(14, false));
console.log(aulaDirecao(25, false));