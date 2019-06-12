let username = 'abc@rediff.com'

let password= '@#$'

let username_checker = function(para_username){
        
           if ((para_username.includes('@gmail.com')) || (para_username.includes('@rediff.com')))
           {
               return true       
           } else {
                return false      
           }
}

console.log(username_checker(username))