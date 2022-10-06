import {useState, useEffect} from "react";
import axios from "axios";

const getData = async () => {
    return axios.get("https://randomuser.me/api")
        .then(({data}) => {
            console.log(data);
            return JSON.stringify(data, null, 2);
            // let i = 1;
            // const resultBlock = document.getElementById("resultBlock")
            // document.querySelector("#root").appendChild(resultBlock);
            //
            // for (let info of res.data.data) {
            //     const fact = document.createElement("p");
            //     fact.innerText = `Fact ${i}: ${info.fact}`;
            //     resultBlock.appendChild(fact);
            //     i++;
            // }
        })
        .catch(err => console.error(err));
}

function App() {
    const [jsonString, setJsonString] = useState("");
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        getData().then(data => {
            setJsonString(data ?? "");
        })
    }, []);

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <button onClick={() => setCounter(prevState => prevState + 1)}>Clicks: {counter}</button>
            <pre>{jsonString}</pre>
            <div id="resultBlock"></div>
        </div>
    );
}

export default App;