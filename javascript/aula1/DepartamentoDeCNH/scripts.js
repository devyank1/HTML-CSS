let idade = 12;
let cnh = false;

if( idade >= 18 && cnh == true ) {
    console.log("VOCÊ ESTÁ APTO A DIRIGIR");
}else if( idade >= 18 && cnh == false){
    console.log("VOCÊ NÃO POSSUI CNH, SEM PERMISSÃO PARA DIRIGIR");
}else if( idade < 18 && cnh == false){
    console.log("SEM CARTEIRA E SEM CNH, VOLTE PARA CASA ANDANDO");
}