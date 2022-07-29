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

// const page = (
	//In order to return multiple HTML elements, must be wrapped inside a parent element.
// 	<div className="header">
// 		<h1>Hello React!</h1>
// 		<p>Welcome</p>
// 	</div>
// )

	//Navbar challenge: https://youtu.be/bMknfKXIFA8?t=2292
const navbar = (
		<nav>
			<h1>My Website</h1>
			<ul>
				<li>Pricing</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);

ReactDOM.render(
	navbar,
	document.getElementById("root")
);
