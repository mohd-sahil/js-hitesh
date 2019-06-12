const mytodo = []

mytodo.push('drink water')
mytodo.push('LoA')
mytodo.push('qraa')

mytodo.forEach(function(element, index){
    // console.log(`good morn your task no. ${index + 1} is ${element}`);
    
})

for (let index = 0; index < mytodo.length; index++) {
    const element = mytodo[index];
    console.log(`your task no ${index+1} is ${element}`);
    
    
}