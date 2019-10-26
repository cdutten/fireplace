import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {AppLoading} from "expo";
import SearchScreen from "./screens/SearchScreen";
import LocationsListScreen from "./screens/LocationsListScreen";


export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [isSearching, setIsSearching] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = () => {
        return fetch("http://www.mocky.io/v2/5dab70613100007d00becef7")
            .then(response => response.json())
            .then((responseJson) => {
                responseJson.stations.sort((a, b) => {
                    let scoreA = a.score,
                        scoreB = b.score;
                    // Compare the 2 dates
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

    if (isSearching) {
        return (<SearchScreen
            searchFinished={() => setIsSearching(false)}
        />);
    }

    console.log(data);

    return (<LocationsListScreen locations={data}/>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchInput: {
        borderBottomColor: 'red',
        borderBottomWidth: 2,
        width: 115
    },
    searchContainer: {
        flexDirection: 'row',
        width: '50%',
        height: 75,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
