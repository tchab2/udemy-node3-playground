// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([7, 4, 1])

//     }, 1000);
// })

// doWorkPromise.then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log('Error!', err)
// })

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000);
    })
}

// add(1, 2).then(som => {
//     console.log(som)

//     add(som, 5).then(sum2 => {
//         console.log(sum2)
//     }).catch(err => {
//         console.log(err)
//     })
// }).catch(err => {
//     console.log(err)
// })

add(1, 1).then((sum) => {
    console.log(sum)

    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
}).catch((err) => {
    console.log(err)
})