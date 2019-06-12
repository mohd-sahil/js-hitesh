let hello =function(param){
    console.log(`hello ${param} functions`)
}

// hello('lesnar')

let fullname=function(firstname, lastname){
    
 
    // console.log(`hello mr. ${firstname} ${lastname}`)

 console.log('hello mr. '+firstname  +lastname);
    
}

// fullname('john',' cena')

let adder = function(num1,num2){
let sum = num1 + num2
return sum
}



// console.log(adder(4,5));

let course_info = function(name, count){
    return 'hello Mr. ' +name+ ' courseCount : ' +count
}

console.log(course_info('kane' , 1))
