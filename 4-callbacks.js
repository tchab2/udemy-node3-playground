setTimeout(() => {
    console.log('1 second are up')
}, 1000);

const names = ['Albert', 'Bob', 'Camilio']

const shortNames = names.filter((name) => {
    return name.length > 3
})
console.log(shortNames)

const geoCode = (address, callback) => {
    setTimeout(() => {
        const data = {
            longitude: 0,
            Latitude: 0
        }

        callback(data);
    }, 1000);
}

geoCode('Toronto', (data) => {
    console.log(data)
});

const add = (num1, num2, callback) => {
    setTimeout(() => {

        callback(num1 + num2)

    }, 1000);
}

add(1, 4, (sum) => {
    console.log(sum);
})