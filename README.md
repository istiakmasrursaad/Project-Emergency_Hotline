**1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**
•	getElementById("id") -Finds one element with the given id.
•	getElementsByClassName("class")- Finds all elements with that class, returns an HTMLCollection (like an array but not exactly).
•	querySelector("css-selector")- Finds the first element that matches a CSS selector (like .class, #id, div p).
•	querySelectorAll("css-selector")- Finds all matching elements, returns a NodeList (can use forEach).


**2.	 How to create and insert a new element into the DOM ?**
 let newDiv = document.createElement("div");  
 newDiv.innerText = "Hello World"; 
document.body.appendChild(newDiv); 

 
**3.	What is Event Bubbling? How does it work?**
Event bubbling means: when you click an element, the event starts from the target element and then bubbles up (goes upward) to its parent, then grandparent, up to document.
Example: Clicking a <button> inside a <div> -first button’s event runs, then the <div>’s, then <body>, etc.

**4.	What is Event Delegation? Why is it useful?**
Event delegation means: instead of adding an event listener to many child elements,
you add one listener to a parent, and let events bubble up.
Inside the handler, you check which child was clicked.

**Useful because:**
Less memory (only one listener instead of many).
Works for dynamically added elements too.


**5.	What is the difference between preventDefault() and stopPropagation() methods?**
preventDefault()- Stops the browser’s default behavior.(e.g., prevent a link <a> from opening or a form from submitting).
stopPropagation()- Stops the event from bubbling up to parent elements.(e.g., click inside a child but don’t trigger the parent’s click).

