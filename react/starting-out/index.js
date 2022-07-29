/**
 * Plain JavaScript to render a header out to the webpage appending it to the DOM.
 * Imperative way to program
 */
// const rootDiv = document.getElementById("root");
// const ele = document.createElement("h1");
//
// ele.innerText = "Hello World";
// rootDiv.appendChild(ele);

/**
 * Same as above but using React instead.
 * Declarative way to program.
 */

const page = (
	//In order to return multiple HTML elements, must be wrapped inside a parent element.
	<div className="header">
		<h1>Hello React!</h1>
		<p>Welcome</p>
	</div>
)
ReactDOM.render(
	page,
	document.getElementById("root")
);
