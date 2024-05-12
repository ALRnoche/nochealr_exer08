Created by: André Luis R. Noche

Section: CMSC 100 UV1L

Code Description: (Exercise 08 & 09)

App.js: 
 * Imports App.css, ./NavBar, & ./ItemsList
 * Abstraction (in OOP)
 * Serves as the backbone of the website. It combines NavBar and ItemsList functions to MenuChoices and Appliances constants.

App.css:
 * Serves as the flesh of App.js. It beautifies the website.
 * It modifies components such as the navigation bar items, appliances items, and cart items
 * It designs the color theme of the website
 * Inherits functions from react, ./NavBar, & ./ItemsList

ItemsList.js:
 * Contains functions that properly reuses the called data (const Appliances)
 * Encapsulation (in OOP)
 * Add to cart & delete buttons
 * Inherits functions from Cart.js
 * Inherits App.css

NavBar.js:
 * inherits App.css
 * Function for navigation panel items
 * Encapsulation (in OOP)
 * Gives function to select tabs (Appliances, Groceries, etc.)

Cart.js
 * inherits 'useState' function from react
 * Encapsulation (in OOP)
 * Gives function to add and delete cart items

index.js:
 * Runs App.js into localhost:3000
