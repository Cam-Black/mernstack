import react from "react";
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <button onClick={() => setCounter(prevState => prevState + 1)}>Clicks: {counter}</button>
        </div>
    );
}

export default App;