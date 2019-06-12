let new_arr = [{
           exam: 'jee',
           subj: 'phy,chem & maths',
           eligb: 'intermediate',
},{
           exam: 'cse',
           subj: 'gs & optional',
           eligb: 'graduate',
},{
           exam: 'ssc cgl',
           subj: 'var',
           eligb: 'graduate',
}]

let func = new_arr.findIndex(function(param){
           return param.subj === 'var'
}
)

console.log(func);
