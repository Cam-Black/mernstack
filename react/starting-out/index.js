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
// const navbar = (
// 		<nav>
// 			<h1>My Website</h1>
// 			<ul>
// 				<li>Pricing</li>
// 				<li>About</li>
// 				<li>Contact</li>
// 			</ul>
// 		</nav>
// 	);

/**
 * Static page challenge: https://youtu.be/bMknfKXIFA8?t=2744
 */
const body = (
		<main>
			<nav>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
			<h1>Welcome to Cam's Hub</h1>
			<p>We got everything you need:</p>
			<ul>
				<li>Games</li>
				<li>Food</li>
				<li>Beer</li>
			</ul>
		</main>
	);

/**
 * Cannot appendChild to root:
 * index.js:55 Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
 */
// document.getElementById("root").appendChild(body);

/**
 * ReactDOM.render is no longer supported in React 18.
 * Using createRoot as per new version docs.
 *
 * ReactDOM.render(
 * 	body,
 * 	document.getElementById("root")
 * );
 */


ReactDOM.createRoot(document.getElementById('root')).render(
	body
);

//Current timestamp in react tutorial: https://youtu.be/bMknfKXIFA8?t=2778