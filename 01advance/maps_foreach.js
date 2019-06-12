let obj_1 = {
           name: 'taker',
           height: '6ft 10in',
           aka: 'phenom',
}

let obj_2 = {
           name: 'lesnar',
           height: '6ft 3in',
           aka: 'beast',
}

let obj_3 = {
           name: 'hhh',
           height: '6ft 5in',
           aka: 'game',
}

let wrestlers = new Map


wrestlers.set('1',obj_1)
wrestlers.set('2',obj_2)
wrestlers.set('3',obj_3)

// console.log(wrestlers);

// console.log(wrestlers.size)

// console.log(wrestlers.keys());

// console.log(wrestlers.values());

// console.log(typeof wrestlers);


// for of loop

for (const values of wrestlers.values()) {
           console.log(values);
           
}