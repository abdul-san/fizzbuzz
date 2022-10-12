const fizzbuzz = (i) => {
    // for (let i = 1; i <= num; i++) {
        if(i % 3 == 0 && i % 5 == 0){
            return 'FizzBuzz'
        } else if(i % 3 == 0 ){
            return 'Fizz'
        } else if(i % 5 == 0 ){
            return 'Buzz'
        } else if( i % 3 !== 0 && i % 5 !== 0 ){
            return i
        }
    // }
}

module.exports = {fizzbuzz}