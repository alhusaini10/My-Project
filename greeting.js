// 1
function greeting(nama, bahasa) {
    if (bahasa === "English") {
        console.log(`Good Morning ${nama}! `);
    } else if (bahasa === "French") {
        console.log(`Bonjour ${nama}! `);
    } else {
        console.log(`Selamat Pagi ${nama}! `)
    }
}
greeting("Selamat Pagi undefined!");


// 2
function multiply(nashir, Al) {
    return nashir * Al;
}
let result = multiply(10, 2)
console.log(result)


// 3
function greeting(nama, bahasa) {
    if (bahasa === "English") {
        console.log(`Good Morning ${nama}! `);
    } else if (bahasa === "French") {
        console.log(`Bonjour ${nama}! `);
    } else {
        console.log(`Selamat Pagi ${nama}! `)
    }
}

let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);


// 4
greeting = function (nama, bahasa) {
    if (bahasa === "English") {
        return "Good Morning " + nama + "!";
    } else if (bahasa === "French") {
        return "Bojour " + nama + "!";
    } else {
        return "Selamat Pagi " + nama + "!";
    }
}

console.log(greeting('Ron', 'English')); 