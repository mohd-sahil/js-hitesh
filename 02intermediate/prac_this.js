let object = {
    
           name: 'cena' ,
           height: 6,
           weight: '70 kg' ,
           title: 'wwe champ',
           change_title: function(param){
                     this.title = param
                  return `the title has changed to ${this.title} champion`   
           }

}


console.log (object.change_title('world heavy weight'))


