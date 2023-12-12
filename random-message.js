let random = ['house', 'car', 'watch'];

const generateMessage = arr => {
    return arr[Math.floor(Math.random() * 3)];
}

console.log('You should buy a ' + generateMessage(random));