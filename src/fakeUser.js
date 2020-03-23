const faker = require('faker')

const firstName = faker.name.firstName()
const lastName = faker.name.lastName()

console.log(`Employee: ${firstName} ${lastName}`)