(function(){
    "use strict";

    /**
     * :
     * Create person object, store it in a variable named person
     */

    var person = {};

    /**
     * :
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */

    person.firstName = "Edward";
    person.lastName = "Delgado";

    /**
     * :
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */

    person.sayHello = function(){
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    }

    console.log(person.sayHello());

    /** : Remember this problem from before?
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];

    for (var i = 0; i < shoppers.length; i++) {
    var shopper = shoppers[i];
    console.log(buildReceipt(shopper));
    }

    shoppers.forEach(function (shopper) {
        console.log(buildReceipt(shopper));
    });

    function buildReceipt(shopper) {
        var discount = 0;
        var totalAfterDiscount = shopper.amount;


        // 2. Conditionals
        if (shopper.amount > 200) {
            discount = .1;
            totalAfterDiscount = shopper.amount - shopper.amount * discount;
        }
        return shopper.name
            + " has to pay $" + shopper.amount
            + ", it has a discount of $" + discount
            + ", the total to pay after the discount is $" + totalAfterDiscount;
    }


    "use strict";

// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author property.
// The author property should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
    var books = [
        {
            title: "97 Things Every Programmer Should Know",
            author: {firstName: "Kevlin", lastName: "Henney"}
        },
        {
            title: "Growing Object-Oriented Software Guided by Tests",
            author: {firstName: "Steve", lastName: "Freeman"}
        },
        {
            title: " Working Effectively with Legacy Code",
            author: {firstName: "Michael", lastName:  "Feathers"}
        },
        {
            title: "Refactoring",
            author: {firstName: "Martin", lastName: "Fowler"}
        },
        {
            title: "The Pragmatic Programmer",
            author: { firstName: "Andy", lastName: "Hunt"}
        }
    ];

// log out the books array
    console.log(books);

// todo:
// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here
    books.forEach(function (book, i) {

        console.log("Book #" + (i + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    });
// end loop here
})();