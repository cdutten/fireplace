import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const SearchScreen = props => {
    const [currentSearch, setCurrentSearch] = useState('');

    return (
        <View style={styles.container}>
            <Text>Let's look for your next great place</Text>
            <View style={styles.searchContainer}>
                <TextInput style={styles.searchInput} value={currentSearch}/>
                <Button
                    title={"Search"}
                    color={'red'}
                    onPress={() => (props.searchFinished())}/>
            </View>
        </View>
    );
};

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

export default SearchScreen;
