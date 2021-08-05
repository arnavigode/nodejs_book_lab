const readline = require('readline');

const readline1 = readline.createInterface({
    input: process.stdin, //show msg on terminal
    output: process.stdout, //display result
})
var arr = ["Atomic Habbits", "Rich Dad Poor Dad", "Think and Grow Rich", "Seven Habbit of Highlt effective People"]

console.log("Pres 1: to get reading list")
console.log("Pres 2: to add favourite book to library")
console.log("Pres 3: to quit")
function show() {
    
    readline1.question("Press 1/2/3: ", function (option) {
        if (option == "1") {
            console.log("List of Book is as Follow:");
            for (var i = 0; i < arr.length; i++){
                console.log(arr[i]);
            }
        show()
    }
    else if (option == "2") {
        readline1.question("Name of Your Favourite Book to add in Library: ", function (newbook) {
            if (newbook) {
                
                console.log(`${newbook} is added to your Library!`)
                arr.push(`${newbook}`)
                for (var i = 0; i < arr.length; i++){
                console.log(arr[i]);
            }
                show()
            }
            })
        }
    else if (option == "3") {
        readline1.question("Are you sure you want to quit? - press 'y' to quit: ", function (quit) {
            if (quit = "y") {
                readline1.close();
            }
        })
        
        }
    else {
        if(option != "1" || option != "2" || option != "3") {
        console.log("You have selected an invalid entry so please press 1, 2 or 3");
        show()
            }
    }
    })
}
show()
    
readline1.on("close", function () {
    console.log("Thank you For Reading Books!")
})


