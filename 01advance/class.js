class user {
    constructor(para1,para2,para3){
               this.first_name = para1
               this.last_name = para2
               this.credit = para3
    }  
    
    getfullname(){
               return 'full name ' +this.first_name + ' '+this.last_name
    }

    editname(newname){
                this.first_name = newname
               
    }
}

const obj = new user('light', 'yagami', 22)


obj.editname('kira the killer')

console.log(obj.getfullname());

