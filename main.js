// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

const h1 = document.createElement('h1')

console.groupCollapsed('Kata1')

const isActive = users
    .filter(user => user.isActive === true)
    .map(user => user.name)
console.log(JSON.stringify(isActive))
h1.append('Filter')
main.append(h1)
main.append(JSON.stringify(isActive))

console.groupEnd()

console.groupCollapsed('Kata2')

let maph1 = document.createElement('h1')
const email = users.map(user => user.email)
console.log(JSON.stringify(email))
maph1.append('Map')
main.append(maph1)
main.append(JSON.stringify(email))

console.groupEnd()

console.groupCollapsed('Kata3')

let someh1 = document.createElement('h1')
const property = users.some(user => user.company === 'OVATION')
console.log(JSON.stringify(property))
someh1.append('Some')
main.append(someh1)
main.append(JSON.stringify(property))

console.groupEnd()

console.groupCollapsed('Kata4')

let findh1 = document.createElement('h1')
const overTheHill = users.find(user => user.age > '38')
console.log(JSON.stringify(overTheHill))
findh1.append('Find')
main.append(findh1)
main.append(JSON.stringify(overTheHill))

console.groupEnd()

console.groupCollapsed('Kata5')

let funh1 = document.createElement('h1')
const activeAt38 = users
    .filter(user => user.isActive === true)
    .find(user => user.age > '38')
console.log(JSON.stringify(activeAt38))
funh1.append('Find')
funh1.append('Filter')
main.append(funh1)
main.append(JSON.stringify(activeAt38))

console.groupEnd()

console.groupCollapsed('Kata6')

let omgh1 = document.createElement('h1')
const zencoBalance = users
    .filter(user => user.company === 'ZENCO')
    .map(user => user.balance)
console.log(JSON.stringify(zencoBalance))
omgh1.append('Filter')
omgh1.append('Map')
main.append(omgh1)
main.append(JSON.stringify(zencoBalance))

console.groupEnd()

console.groupCollapsed('Kata7')

let fmlh1 = document.createElement('h1')
const tags = users
    .filter(user => user.tags.includes ('fugiat'))
    .map(user => user.age)
console.log(JSON.stringify(tags))
fmlh1.append('Filter')
fmlh1.append('Map')
fmlh1.append('Include')
main.append(fmlh1)
main.append(JSON.stringify(tags))

console.groupEnd()
