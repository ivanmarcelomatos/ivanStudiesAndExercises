https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events
<https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#method-3>


<code><!-- the HTML file -->
<button id="btn">Click Me Too</button>
</code>


<code>// the JavaScript file
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});
</code>

Now, we maintain separation of concerns, and we also allow multiple event listeners if the need arises. Method 3 is much more flexible and powerful, though it is a bit more complex to set up.