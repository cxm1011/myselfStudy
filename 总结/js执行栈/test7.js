console.log(person)

console.log(fun)

var person = "Eric";

console.log(person)

function fun() {
    console.log(person)
    var person = "Tom";
    console.log(person)
}

fun()

console.log(person)

//undefined
// [Function: fun]
// Eric
// undefined
// Tom
// Eric