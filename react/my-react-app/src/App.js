import {useEffect, useState} from "react";
import axios from "axios";

const getData = (pageNumber) => {
    return axios.get(`https://randomuser.me/api?page=${pageNumber}`)
        .then(({data}) => {
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
    const [nextPageNumber, setNextPageNumber] = useState(1);

    useEffect(() => {
        getData(nextPageNumber).then(data => {
            let newData;
            for (let i = 0; i < data.results.length; i++) {
                 newData = [...displayData, data.results[i]];
            }
            console.log(newData);
            setDisplayData(newData);

        })
    }, [nextPageNumber]);

    const reversed = displayData.slice().reverse();

    return (<div className="App">
        <h1>Hello CodeSandbox</h1>
        <span>
            <button onClick={() => setCounter(prevState => prevState + 1)}>Increase Count</button>
            <button onClick={() => setCounter(prevState => prevState - 1)}>Decrease Count</button>
        </span>
        <p>{counter}</p>
        <button onClick={() => setNextPageNumber(prevState => prevState + 1)}>Add User Profile</button>
        <div>
            {   reversed.map((userInfo, id) => (<div key={id}>
                <p>{getFullName(userInfo)}</p>
                <img alt="Profile pic" src={getImgSrc(userInfo)}/>
            </div>))}
        </div>
    </div>)
}

export default App;