// const foo = function () {
//     return "hello world"
// }

// const foo1 = () => "hello world"

// const foo2 = () => {
//     return "hello world"
// }

// function foo3() {
//     return "hello world"
// }

//const ba = (age, name) => {
// if (age > 16) {
//     console.log(name + " you can enter")
// } else {
//     console.log(name + " you can not enter")
// }
//   console.log(age > 16 ? name + " you can enter" : name + " you can not enter")

// if (age == 16) {
//     console.log(name + " you can enter")
// } else {
//     console.log(name + " you can not enter")
// }

// if (age != 16) {
//     console.log(name + " you can enter")
// } else {
//     console.log(name + " you can not enter")
// }

// if (age >= 16 && name == "Abdulla") {
//     console.log(name + " you can enter")
// } else {
//     console.log(name + " you can not enter")
// }

// if (age >= 16 || name == "Abdulla") {
//     console.log(name + " you can enter")
// } else {
//     console.log(name + " you can not enter")
// }


// if (age >= 16 || name == "Abdulla" && age != name) {
//     console.log(name + " you can enter")
// } else {
//     console.log(name + " you can not enter")
// }



// }

// ba(17, "Azam")
// ba(15, "Abdulla")
// ba(16, "Said")

const ba = (name, promotionKod, cost) => {
    const ourKod = "123xxpp"
    if (ourKod == promotionKod || name == "Okhun") {
        cost = cost - 20
        console.log(name + " we have promotion for you 20zl to pay " + cost + " zl")
    } else {
        console.log(name + " your promotion kod " + promotionKod + " not valid")
    }
}

ba("Azam", "123xxpp", 100)
ba("Okhun", "123xxaa", 120)
ba("Said", "123xxpp", 1000)
