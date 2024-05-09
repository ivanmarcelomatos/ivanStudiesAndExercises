https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events
<https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#events>


We’re going to create three buttons that all alert “Hello World” when clicked. Try them all out using your own HTML file or using something like CodePen.
Method 1

<code><button onclick="alert('Hello World')">Click Me</button></code>

This solution is less than ideal because we’re cluttering our HTML with JavaScript. Also, we can only set one “onclick” property per DOM element, so we’re unable to run multiple separate functions in response to a click event using this method.