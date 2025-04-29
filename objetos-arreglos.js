
// objetos

const user = {
    name: "Lizbeth",
    lastname: "Aguilar",
    age: 28,
    email: "lizz_andes@gmai.com",
    addres: {
        city: "Otavalo",
        telephone: "0999104655"
    }
}

const {name, lastname, age, email, addres} = user
console.log(name, lastname, age, addres, email)

const users = [
    {
    name: "Eddy Morales",
    age: 24,
    mail: "eddy@gmail.com"
},
{
    name: "Jessica Gonzales",
    age: 26,
    mail: "jessi@gmail.com"
}
]

const usersAll = users.map((u) => {
    return{
        name:u.name.toUpperCase(),
        age:u.age,
        mail:u.mail.toUpperCase()
    }

})
console.log(usersAll)

const userLong = users.map((u) => {
    return{
        name:u.name.length,
        mail:u.mail.length
    }

})

console.log(userLong)