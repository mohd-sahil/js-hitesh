let tides = {
 
freq: 45,
wavelength: 30,
due_to: 'sun & moon',
change_every: function(param){
      return     this.freq = param
}

}

console.log(tides.change_every(11));


console.log(tides);


