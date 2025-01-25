// Task 1 - Store Inventory

let products = ["bed", "vanity", "mirror", 
    "desk", "chair"] ;                      // Creation of the array
    products.push("wall decor") ;           // Adding a new element to the array

    products.pop ;                          // Deleting the new element from the array
 console.log("Products:", products) ;   // Output: Products: (5) ['bed', 'vanity', 'mirror', 'desk', 'chair']


// Task 2 - Student Scores

let scores = [99, 95, 90, 89, 87, 86] ;     // Creation of an array
    scores.splice(1,1,96) ;                 // Changing the 2nd score

    let scoresTotal = scores.reduce((sum, score) => sum + score, 0) ;  // Calculating the sum of the scores to find the average
    let scoresAverage = scoresTotal / scores.length ;   // Calcultion of the scores' average

console.log("Scores:", scores) ;            // Output: Scores: (6) [99, 96, 90, 89, 87, 86]
console.log("Scores' average:", scoresAverage) ;  // Output: Scores' average 91.16666666666667


// Task 3 - Employee Records

let employee = { name: "Rose Cabrera", age: 24, 
    department: "HR", isActive: true } ;     // Creation of an employee profile

employee.department = "Marketing" ;          // Modifing an existing property in the object
employee.position = "Technical Manager" ;    // Adding a new property to the object

console.log("Employee record:", employee) ;  // Output: Employee record: {name: 'Rose Cabrera', age: 24, department: 'Marketing', isActive: true, position: 'Technical Manager'}


// Task 4 - Customer Database

customers = [
{
    name: "Lincoln Alford", 
    email: "alford@gmail.com", 
    purchaseAmount: 1234.5
}, 
{
    name: "Brody Andrews",
    email: "bigandrews@hotmail.com",
    purchaseAmount: 987.6
},
{
    name: "Kenneth Almond",
    email: "almondkenneth@outlook.com",
    purchaseAmount: 1928
}] ;                                      // Creation of the array known as customer database

customers[3] = {
    name: "LeighAnn Apricot",
    email: "leighaapricot345@gmail.com",
    purchaseAmount: 100.99
} ;                                      // Adding a new object to the array

console.log("Customer Database:", customers) ;   // Output: Customer Database: (4) [{…}, {…}, {…}, {…}]


// Task 5 - Order Processing System

let order = [orderID = 1234,  
            customerName = "Martina Batt", 
            amount = 1820] ;              //Order account's creation

let calculatedTax = order.map(amount => amount * 0.10) ;

console.log("Order Details |", 
    "Order ID:", orderID, 
    "Customer Name:", customerName, 
    "Amount:", `$${amount}`) ;   // Output: Order Details | Order ID: 1234 Customer Name: Martina Batt Amount: $1820

console.log("Order calculated taxes:", calculatedTax) ;     // Output: Order calculated taxes: (3) [123.4, NaN, 182]