import React, {useState} from 'react';
import {AppLoading} from "expo";
import MainNavigator from "./navigation/MainNavigator";
import {createStore, combineReducers} from "redux";
import locationsReducer from "./store/reducers/locations";
import { Provider } from 'react-redux'

const rootReducer = combineReducers({
    locations: locationsReducer
});

const store = createStore(rootReducer);

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [data, setData] = useState([]);

    const fetchData = () => {
        return fetch("http://www.mocky.io/v2/5dab70613100007d00becef7")
            .then(response => response.json())
            .then((responseJson) => {
                responseJson.stations.sort((a, b) => {
                    let scoreA = a.score,
                        scoreB = b.score;
                    if(scoreA < scoreB) return -1;
                    if(scoreA > scoreB) return 1;
                    return 0;
                });
                setData(responseJson)
            })
            .catch(error => console.log(error)); //to catch the errors if any
    };

    if (!dataLoaded) {
        return <AppLoading startAsync={fetchData}
                           onFinish={() => setDataLoaded(true)}
                           onError={(err) => console.log(err)}
        />;
    }
    return (
    <Provider store={store}>
        <MainNavigator/>
    </Provider>);
}
