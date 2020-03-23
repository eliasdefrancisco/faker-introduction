const faker = require('faker')

const firstName = faker.name.firstName()
const lastName = faker.name.lastName()

const jobTitle = faker.name.jobTitle()
const jobArea = faker.name.jobArea()

const prefix = faker.name.prefix()
const suffix = faker.name.suffix()

const phone = faker.name.suffix()

console.log(`Employee: ${prefix} ${firstName} ${lastName} ${suffix}`)
console.log(`Job Title: ${jobTitle}`)
console.log(`Job Area: ${jobArea}`)
console.log(`Phone: ${phone}`)