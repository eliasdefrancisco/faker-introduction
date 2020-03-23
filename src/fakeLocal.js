const fakerEs = require('faker/locale/es')
const fakerRu = require('faker/locale/ru')

const firstNameEs = fakerEs.name.firstName()
const lastNameEs = fakerEs.name.lastName()

const firstNameRu = fakerRu.name.firstName()
const lastNameRu = fakerRu.name.lastName()

console.log({ firstNameEs, lastNameEs })
console.log({ firstNameRu, lastNameRu })