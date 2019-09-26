const name = 'John'
const userAge = 25

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// object destructuring

const product = {
    label: 'Red notebook',
    price: 2,
    salePrice: undefined,
    stock: 1222
}

// const label  = product.label;
// const stock = product.stock;

// const {
//     label: productLabel,
//     stock,
//     rating = 5
// } = product;

// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {
    label,
    stock = 0
} = {}) => {
    console.log(type, label, stock);
}

transaction('order', product);