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
ReactDOM.render(
	<div className="header">
		<h1>Hello React!</h1>
		<p>Welcome</p>
	</div>,
	document.getElementById("root")
);
