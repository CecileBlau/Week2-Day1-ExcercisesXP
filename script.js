//Week2 Day1 Excercises XP

//Exercise 1: Your Favorite Food

let myFavoriteFood ="Avocado"
let myFavoriteMeal = "breakfast"
console.log(`I eat ${myFavoriteFood} at every ${myFavoriteMeal}`)

//Exercise 2 : Series
//Part I
let watchedSeries = ["black mirror", "money heist", "the big bang theory"];
let watchedSeriesLenght = watchedSeries.length;
let myWatchedSeries = `I watched ${watchedSeriesLenght} series: ${watchedSeries}`;
console.log(myWatchedSeries)

//Part II
watchedSeries.splice(2,1, "friends")
console.log(watchedSeries)

watchedSeries.push("Parks and Recreation")
console.log(watchedSeries)

watchedSeries.splice(0,0, "The office")
console.log(watchedSeries)

watchedSeries.splice(1,1)
console.log(watchedSeries)

let moneyHeist3rdletter = watchedSeries[1]

console.log(moneyHeist3rdletter)
console.log(moneyHeist3rdletter[2])


//Exercise 3 : The Temperature Converter
let tempCelsius= 26
let tempFaren = ((tempCelsius/5) * 9) + 32
console.log(`${tempCelsius} °C is ${tempFaren} °F`)

//Exercise 4 : Guess The Answers #1
let c;
let a = 34;
let b = 21;

    console.log(a+b) //first expression
    // Prediction: a and b are numbers, so the result will be the sum of both of them:55
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    // Prediction: a and b are still both numbers, so the result will be the sum of both of them:23
    // Actual: 23

 // The value of c is undifined
 //console.log(3 + 4 + '5'); /----> the outcome will be: 75 because 3 and 4 are numbers, but 5 is a string

 //Exercise 5 : Guess The Answers #2
 typeof(15)
// Prediction: number
// Actual:

console.log(typeof(5.5))
// Prediction: number
// Actual:

console.log(typeof(NaN))
// Prediction: undefined
// Actual:number

typeof("hello")
// Prediction:string
// Actual:

typeof(true)
// Prediction:boolean
// Actual:

typeof(1 != 2)
// Prediction:boolean
// Actual:

console.log("hamburger" + "s")
// Prediction:hamburgers
// Actual:

console.log("hamburgers" - "s")
// Prediction:error?
// Actual:Nan

"1" + "3"
// Prediction:13
// Actual:

console.log("1" - "3")
// Prediction:error?
// Actual:-2

"johnny" + 5
// Prediction:johnny5
// Actual:

console.log("johnny" - 5)
// Prediction:error
// Actual:NaN

//console.log(* "hello")
// Prediction:???
// Actual:Uncaught SyntaxError: Unexpected identifier

1 != 1
// Prediction:true
// Actual:

console.log(1 == "1")
// Prediction:true
// Actual:

console.log(1 === "1")
// Prediction:false
// Actual:



//Exercise 6 : Guess The Answers #3

5 + "34"
// Prediction:534
// Actual:

5 - "4"
// Prediction:Nan
// Actual:

console.log(10 % 5)
// Prediction:
// Actual:

console.log(5 % 10)
// Prediction:
// Actual:

"Java" + "Script"
// Prediction:JavaScript
// Actual:

console.log(" " + " ")
// Prediction:
// Actual:

console.log(" " + 0)
// Prediction:
// Actual:

console.log(true + true)
// Prediction:
// Actual:

console.log(true + false)
// Prediction:
// Actual:

console.log(false + true)
// Prediction:
// Actual:

console.log(false - true)
// Prediction:
// Actual:

!true
// Prediction:
// Actual:

3 - 4
// Prediction:-1
// Actual:

console.log("Bob" - "bill")
// Prediction:
// Actual: