let obj = {
           day : 'tuesday',
           meetings: 9,
           meet_done: 0,
           addmeetings: function(param){
                     this.meetings = this.meetings + param
                      
           },      
           
           summary: function(){
                      console.log(`no of meetings ${this.meetings}`);
           }

}

obj.addmeetings(4)

obj.summary()

console.log(obj);
