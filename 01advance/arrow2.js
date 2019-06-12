// where arrow func cannot be used

let devices = {
       title: 'smartphone',
       brand: 'lenovo',
       specs: 'mdtk helio p10', 
       find:  () => `my ${this.title} brand is ${this.brand}`

}

console.log(devices.find());

let find2 = () => `my ${devices.title} brand is ${devices.brand}`

console.log(find2());

