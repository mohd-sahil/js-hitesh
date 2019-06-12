class teachers {

           constructor(param){
this.name = param

           }

           print_name(){
                      return `name of the teacher ${this.name} `
           }
}

class low_teacher extends teachers {

           constructor(){
                     // super 
           }
           print_name(){
                      return `greatest explainer ${this.name}`
           }
}

const obj = new low_teacher('feynman')

console.log(obj.print_name('great explainer'));
