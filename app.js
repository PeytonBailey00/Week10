function askname() {
    var name = prompt("Hey buddy! How's it going! Whats ya name?")
    return name
}

function greeting(a) { // parameter
    alert(`Well, welcome ${a}`)
}

greeting(askname()) // argument

function conversion() {
    var temp = prompt("Go ahead and type 'f' to convert from Fahrenheit to Celsius, and type 'c' to convert from Celsius to Fahrenheit.")
    return temp
}

function math() {

}