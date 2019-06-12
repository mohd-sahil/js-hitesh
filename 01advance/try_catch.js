let convertor = (dollar) => {
           if (typeof dollar === 'number' ) {
            return dollar * 70
            
                      
           
           } else {
                  throw Error('amount in numb')    
           }
}

console.log(convertor('nahi'));


// try {
// console.log(convertor('app'));

           
// } catch (e) {
//          console.log(e);
           
// }

console.log('still runs');

let adder = (a,b) => a + b

console.log(adder(5,2));



