// const square = function(x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// };

// const square = (x) => x * x;

// console.log(square(10));

const event = {
    name: "Birthday party!",
    guestList: ['Jonn', 'Jane', 'Harry'],
    printGusetList() {
        console.log('Guest list for ' + this.name);

        this.guestList.forEach(guest => {
            console.log(guest + ' is attending ' + this.name);
        });
    }
}

event.printGusetList();