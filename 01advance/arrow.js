// let say_hello = function(name){

//            return 'hey,' +name +'!' +' welcome to modern JS'
// }



let say_hello = (name) => 'hey,' +name+ '  welcome to modern JS'

// console.log(say_hello('johnny'))


// example 

let todos = [
           {
                      title: 'hindu',
                      is_done: true,
           },
           {
                      title: 'big picture',
                      is_done: false,
           },
           {
                      title: 'spectrum',
                      is_done: true,
           },
           {
                      title: 'atlas',
                      is_done: false,
           }
]

let find_done = todos.filter((param) => param.is_done === true)

console.log(find_done);
