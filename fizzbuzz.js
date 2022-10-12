const fizzbuzz = num => {
    for (let index = 0; index < num; index++) {
        if(num % 3 == 0 && num % 5 == 0){
            return('FizzBuzz')
        } else if(num % 3 == 0 ){
            return('Fizz')
        } else if(num % 5 == 0 ){
            return('Buzz')
        } else if( num % 3 !== 0 && num % 5 !== 0 ){
            return(num)
        }
    }
}

module.exports = {fizzbuzz}