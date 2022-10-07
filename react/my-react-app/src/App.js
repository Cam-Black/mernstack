import {useEffect, useState} from "react";
import axios from "axios";

const getData = async () => {
    return axios.get("https://randomuser.me/api")
        .then(({data}) => {
            console.log(data);
            return data;
        })
        .catch(err => console.error(err));
}

const getFullName = (userInfo) => {
    const {name: {first, last}} = userInfo;
    return `${first} ${last}`;
}

const getImgSrc = (userInfo) => {
    const {picture: {large}} = userInfo;
    return `${large}`;
}

function App() {
    const [displayData, setDisplayData] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        getData().then(data => {
            setDisplayData(data.results);
        })
    }, []);
    return (<div className="App">
            <h1>Hello CodeSandbox</h1>
            <button onClick={() => setCounter(prevState => prevState + 1)}>Clicks: {counter}</button>
            <>
                {displayData.map((userInfo, id) => (
                        <div key={id}>
                            <p>{getFullName(userInfo)}</p>
                            <img alt="Profile pic" src={getImgSrc(userInfo)}/>
                        </div>
                    )
                )}
            </>
        </div>
    )
}

export default App;