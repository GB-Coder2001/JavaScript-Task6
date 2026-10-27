// Array Higher-Order Methods

// 1

let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

numbers.forEach(function(num) {
    console.log(num);
});

// 2

let number = [1, 2, 3, 4, 5];

let result = number.map(numb => numb * 5);

console.log(result);

// 3

let number1 = [10, 25, 15, 30, 45, 5];

let result1 = number1.filter(num1 => num1 > 20);

console.log(result1);

// 4

let employees = [
    { name: "Arun", salary: 250000 },
    { name: "Bala", salary: 400000 },
    { name: "Gowtham", salary: 300000 },
    { name: "Ravi", salary: 200000 }
];

let result2 = employees.filter(emp => emp.salary <= 300000);

console.log(result2);

// 5

let result3 = employees.find(emp => emp.salary > 200000);

console.log(result3);

// 6

let number2 = [10, 20, 30, 40, 50];

let total = number2.reduce((sum, num) => sum + num, 0);

console.log("Total:", total);

// 7

let number3 = [1, 3, 5, 8, 9];

let result4 = number3.some(num => num % 2 === 0);

console.log(result4);

// 8

let number4 = [10, 20, 30, 40, 50];

let result5 = number4.every(num => num > 0);

console.log(result5);

// 9

let number5 = [50, 10, 40, 20, 30];

number5.sort((a, b) => a - b);

console.log(number5);

// 10

let number6 = [50, 10, 40, 20, 30];

number6.sort((c, d) => c - d);

console.log(number6);


// String Methods

// 11

let str = "javascript";

console.log(str.charAt(4));

// 12

let str1 = "javascript";

console.log(str1.charCodeAt(2));

// 13

let str2 = "   Hello JavaScript   ";

console.log(str2.trim());

// 14

let str3 = "JavaScript";

console.log(str3.toUpperCase());

console.log(str3.toLowerCase());

// 15

let str4 = "javascript";

console.log(str4.includes("script"));

// 16

let str5 = "JavaScript";

console.log(str5.startsWith("Java"));

console.log(str5.endsWith("Script"));

// 17

let str6 = "java is easy, java is powerful";

let result6 = str6.replaceAll("java", "python");

console.log(result6);

// 18

let str7 = "html-css-javascript-react";

let result7 = str7.split("-");

console.log(result7);

// 19

let names = ["Arun", "Bala", "Kumar", "Ravi"];

let result8 = names.join(", ");

console.log(result8);

// 20

let str8 = "JavaScript Programming";

let result9 = str8.slice(0, 10);

console.log(result9);



// Date Methods

// 21

let today = new Date();

console.log("Year:", today.getFullYear());
console.log("Month:", today.getMonth() + 1);
console.log("Date:", today.getDate());
console.log("Day:", today.getDay());

// 22

let months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

let today1 = new Date();

console.log("Current month:", months[today1.getMonth()]);

// 23

let today2 = new Date();

console.log("Hours:", today2.getHours());
console.log("Minutes:", today2.getMinutes());
console.log("Seconds:", today2.getSeconds());

// 24

let date = new Date();

date.setFullYear(2002);
date.setMonth(1);
date.setDate(1);

console.log(date);
console.log(date.toDateString());


// Asynchronus JavaScript

// 25

setTimeout(function() {
    console.log("Welcome to JavaScript");
}, 3000);

// 26

let interval = setInterval(function() {
    console.log("Learning JavaScript");
}, 2000);

// 27

let interval1 = setInterval(function() {
    console.log("Learning JavaScript");
}, 2000);

setTimeout(function() {
    clearInterval(interval1);
    console.log("Interval stopped");
}, 8000);

// 28

function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

function three() {
    console.log("Three");
}

one();

setTimeout(two, 0);

three();


// Promises and API Fetching

// 29

let login = new Promise(function(resolve, reject) {
    resolve("Login successful");
});

login.then(function(message) {
    console.log(message);
});

// 30

let login1 = new Promise(function(resolve, reject) {
    reject("Invalid password");
});

login1.catch(function(error) {
    console.log(error);
});

// 31

let process = new Promise(function(resolve, reject) {
    resolve("Data received successfully");
});

process
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Process completed"));

// 32

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            console.log(product.title);
        });
    })
    .catch(error => console.warn(error))
    .finally(() => console.log("API call completed"));

// 33

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
            console.log("Category:", product.category);
            console.log("-------------------");
        });
    });

// 34

fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    })
    .then(products => {
        console.log(products);
    })
    .catch(error => {
        console.warn("Error:", error.message);
    });

// 35

fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("API request failed");
        }

        return response.json();
    })
    .then(products => {
        console.log(products);
    })
    .catch(error => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("API call completed");
    });


// Real Time mini task

// 36

let employee = [
    { name: "Arun", salary: 250000 },
    { name: "Bala", salary: 400000 },
    { name: "Kumar", salary: 180000 },
    { name: "Gowtham", salary: 320000 },
    { name: "Priya", salary: 280000 }
];

let result10 = employee.filter(emp => emp.salary < 300000);

result10.forEach(emp => {
    console.log("Name:", emp.name);
    console.log("Salary: ₹" + emp.salary);
    console.log("----------------");
});

// 37

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        let result = products.map(product => ({
            title: product.title,
            price: product.price
        }));

        console.log(result);
    })
    .catch(error => console.warn(error))
    .finally(() => console.log("Price calculation completed"));


// 38

fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {
        let result11 = products.filter(
            product => product.category === "electronics"
        );

        console.log(result11);
    })
    .catch(error => console.warn(error))
    .finally(() => console.log("Product search completed"));

 // 39
 
 let number12 = [10, 15, 20, 25, 30];

// 1. map() - Multiply every number by 2
let doubled = number12.map(num => num * 2);
console.log("Doubled:", doubled);

// 2. filter() - Get numbers greater than 20
let filtered = number12.filter(num => num > 20);
console.log("Greater than 20:", filtered);

// 3. reduce() - Calculate the total
let total12 = number12.reduce((sum, num) => sum + num, 0);
console.log("Total:", total12);

// 4. some() - Check if any number is even
let hasEven = number12.some(num => num % 2 === 0);
console.log("Has even number:", hasEven);

// 5. every() - Check if all numbers are positive
let allPositive = number12.every(num => num > 0);
console.log("All positive:", allPositive);

// 40

fetch("https://fakestoreapi.com/products")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }

        return response.json();
    })
    .then(products => {
        products.forEach(product => {
            console.log("Title:", product.title);
            console.log("Price: $" + product.price);
            console.log("Category:", product.category);
            console.log("--------------------------");
        });
    })
    .catch(error => {
        console.warn("Error:", error.message);
    })
    .finally(() => {
        console.log("Product listing completed");
    });