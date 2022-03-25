function askname() {
    var name = prompt("Hey buddy! How's it going! Whats ya name?")
    return name
} //10

function greeting(a) { // parameter
    alert(`Well, welcome to my Temperature Converter ${a}!`)
}

greeting(askname()) // argument

function conversion() {
    var convert = prompt("Go ahead and type 'f' to convert from Fahrenheit to Celsius, and type 'c' to convert from Celsius to Fahrenheit.")
    return convert
} 

console.log(conversion())

function temperature() {
    var temp = prompt("Coolio. Enter your temperature.")
    return temp
}

console.log(temperature())

function fMath(x) {
    var temp = ((x - 32) * 5) / 9
    return temp
} // 20

console.log(fMath())

function cMath(y) {
    var temp = ((y / 5) * 9 ) + 32
    return temp
} //20

console.log(cMath())

function final() {
    alert(`Alrighty. It's ${temp}. You have a good day buddy.`)
}


//85