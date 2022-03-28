function simpleNumber (number){
    let counter = 0;
    if (number > 1000){
       return('Данные неверны')
    }
    for (let i = 1; i <= number; i++){
       let result = number%i;
        if (result === 0) counter++;  
    }
    if (counter === 2){
        return('Простое число'); 
    } else {
        return('Число не  простое');
    }
}

console.log(simpleNumber(5))