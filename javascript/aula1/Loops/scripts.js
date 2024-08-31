
// for(let x = 100; x >= 50; x--){
//     console.log(x);
// }

// for(let y = 0; y <= 50; y++){
//     if(y % 2 == 0){
//         console.log("PAR");
//     }else{
//         console.log("IMPAR");
//     }
// }

// for ( let z = 1; z <=50; z = z + 1){
//     if (z/1 && z/z){
//         console.log("NUMERO PRIMO!");
//     }else{
//         console.log("NUMERO NAO PRIMO");
//     }
// }


// Preencha a variável semPares apenas com números ímpares;

// Utilize uma estrutura de loop para percorrer o array arr;

// Verifique se o número é ímpar e coloque no array semPares;

// No final, exiba o array semPares com console.log;

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares = [1, 3, 5, 7]

for (const semPares of arr) {
    if (semPares % 2 !== 0) {
        semPares.push(semPares);
    }
}

console.log(semPares);