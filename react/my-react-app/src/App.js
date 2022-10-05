// import react, {useEffect} from "react";
import {useState, useEffect} from "react";
import axios from "axios";

const getData = () => {
    return axios.get("https://catfact.ninja/facts")
        .then(res => {
            console.log(res.data.data);
            let i = 1;
            const resultBlock = document.createElement("div");
            document.querySelector("#root").appendChild(resultBlock);

            for (let info of res.data.data) {
                const fact = document.createElement("p");
                fact.innerText = `Fact ${i}: ${info.fact}`;
                resultBlock.appendChild(fact);
                i++;
            }
        })
        .catch(err => console.error(err));
}

function IncreaseCounter() {
    const [counter, setCounter] = useState(0);

    return (
        <button onClick={() => setCounter(prevState => prevState + 1)}>Clicks: {counter}</button>
    )
}

function App() {
    const [jsonString, setJsonString] = useState("");

    useEffect(() => {
        getData().then(data => {
            setJsonString(() => data || "Data not found!");
        })
    }, []);

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <IncreaseCounter/>
            <p>{jsonString}</p>
        </div>
    );
}

export default App;