let todos = [{
           morn:'LoA',
           after_brk:'hindu', 
           books:'spectrum',
},
{
           trivial: 'word_mean',
           chores: 'college',
           imp: 'Medit',

}]

let result = todos.findIndex(function (param, index) {
           // console.log(param);
           
           return param.trivial === 'word_mean' 
           
})

console.log(result);
