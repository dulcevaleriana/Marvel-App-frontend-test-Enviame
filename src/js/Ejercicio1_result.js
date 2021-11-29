export const Ejercicio1_result = (number1,number2) =>{
    let result = [];
    for(let i = number1; i <= number2 ; i++){
        if(!(i % 2 === 0)){
            result.push(i);
        }
    }
    return alert("prime numbers: "+result);
}