## Week 4 Exercises

### Exercise 1
Write a function called print5 that has 5 alerts, the numbers 1 – 5 in their own alert box
* Call the function twice
* When the page loads you should get 10 alert popups in total.

### Exercise 2
* Replace alert() with console.log
* Open the console and refresh the page
* Make sure you can see where the numbers have been printed to!

### Exercise 3
1. If you don't have one already add a `<h1>` element to your page
2. Give your `<h1>` element an ID
3. Using addEventListener update the content of the `<h1>` element on the page when it loads
4. Verify this works by testing it in your browser
5. Add another element to the page such as `<p>` and update the contents on page load the same way you did with the <h1>
6. Verify this works by testing it in your browser
_Hint: You should only need one function and one line with addEventListener!_

### Exercise 4
1. Change DOMContentLoaded to click
2. Refresh the page – the `<h1>` and `<p>` elements should start with one value and change when you click somewhere on the page!

### Exercise 5
1. Make it so that when the h1 is clicked, the contents of the h1 element is update (and not the contents of the paragraph)
2. Make it so that when the p element is clicked, the contents of the p element is update (and not the contents of the h1)
3. Test out other event types to see how they work:
	* mouseenter
	* mouseleave
4. Multiple event listeners can be applied to the same element, amend the program so that the text is changed when you mouse over the element and it reverts to the original text when the mouse exits the element

## Exercise 6
1. Create a new HTML page with the following elements:
	* 1 text box ( `<input type=”text” />` )
	* 1 button ( `<input type=”button” />` )
2. When the button is pressed display the value in the text box in an alert
3. Add a `<div>` element to the page
4. When the button is pressed, instead of displaying the contents of the input in the alert, display it in the created `<div>`
5. Remove the button from the page. There is a `keyup` event which can be assigned to input elements, use this to update the div each time the contents of the input box changes