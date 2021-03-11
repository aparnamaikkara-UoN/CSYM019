## Week 5 Exercises

### Exercise 1
Write a function called print5 that has 5 alerts, the numbers 1 – 5 in their own alert box
1. Download Topic5-Exercise1.zip and extract it
2. Add a `<script>` tag to the page so you can run some javascript
3. Add an event listener for DOMContentLoaded and a function that it runs when the page loads
4. In the load function you created, add a click event to the element with the ID `circle` so that when the circle is clicked an alert box appears and says “The button was pressed”  
_Note: You will need this for the rest of today's exercises_

### Exercise 2
1. Building on exercise 1, amend the code so that when the button is clicked its background colour is set to blue

### Exercise 3
1. Amend exercise 2 so that in the load event, the circle's opacity is set to 0.5

### Exercise 4
1. Amend the page so that when the button is clicked, the opacity is set to 1
		* When the page loads the opacity should be set to 0.5
		* When the button is clicked the button should be completely visible as its opacity is set to 1

### Exercise 5
1. Change the code for the click event to this 
		```javascript
		var element = document.getElementById('circle');
		var circleOpacity = parseFloat(element.style.opacity);
		element.style.opacity = circleOpacity + 0.1;
		```
	Each time you click on the circle it should get slightly less transparent until it becomes completely opaque
2. Change the code so that clicking on the circle makes it become more and more transparent. If you click enough times it should become invisible.

### Exercise 6
1. Change the load event so that the button starts with an opacity of 1 (completely visible).
	_Hint: you will need to set the initial value when the page loads or it won’t work._
2. Change the click event so that when the button is clicked, it starts a timer using setInterval with an interval of 1 second
3. Each time the timer is called, reduce the opacity of the button by 0.1 (It should take 10 seconds for the button to disappear completely)
	_Hint: The timer function will contain the exact same code as you used in the click event in Exercise 5, you get the timer to call the function!_
4. Adjust the timer from every second (1000) to every hundredth of a second (10)
5. Adjust the timer function so that it only removes 0.01 from the opacity each time. This will add more 'steps' to the transition and the animation will look smoother

### Exercise 7
1. Make it so when the button is clicked on, it moves 10 px to the left
2. Change the event listener from click to keydown on the document - document.addEventListener('keydown', functionName)
3. When a key is pressed, move the button 10px to the left
4. Each time you press a key it should move further and further left, moving 10px each time

### Exercise 8
1. Add the the following code to your javascript file
		```javascript
		function myKeyDown(event) {
		console.log(event.keyCode);
		}
		document.addEventListener('keydown', myKeyDown);
		```
2. Make sure you have the console open and press some keys on the keyboard. You should see different numbers appearing
3. Try the same key multiple times. Each key on the keyboard will produce a different number!

### Exercise 9
1. Add the if statement so that the button moves left when the left arrow key is pressed
2. Add an if statement and relevant code to allow the up arrow to move the button up 10px, the down arrow to move the button down 10px and the right arrow to move the button right 10px
	_Hint: You can get the keyCodes for each key in the same way you did for the left arrow using the code from exercise 8 and printing the number in the console_
	_Hint: One if statement can directly follow another_
3. Instead of moving the button 10px, use an interval when the relevant key is pressed and have the button slide off the screen in the direction of the arrow pressed
	* Pressing up should start a timeout that moves the button upwards 1px at a time
	* The animation should look smooth
	_Note: Do not use a loop for this, use a timeout!_
	_Hint: Each arrow should trigger a different timer and each timer will need its own function, you’ll end up with at least 5 functions! One for the keyPress event and one for each fo the four direction timers_

### Exercise 10
1. Test the code from slide 65 to see how the variable retains its value
2. Amend your code from exercise 9 to store the timer in a variable
3. When keyDown() is pressed clear the last timer
4. Now, when you press a key more than once it should not affect the speed (and pressing a different key will change the direction!)
5. Add another key press, when space is pressed stop the circle from moving by clearing the timer
	_Hint: You should only have one timer variable_


