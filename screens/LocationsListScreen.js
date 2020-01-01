import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import Item from "../components/Item";
import {useSelector} from "react-redux";


const LocationsListScreen = props => {
    const locations = useSelector(state => state.locations);
    console.log(locations.data.length);
    if (locations.data.length === undefined) {
        return (
        <View style={styles.screen}>
            <Text> Best Matches </Text>
            <Text> Empty result </Text>
        </View>);
    }

    return (
        <View style={styles.screen}>
            <Text> Best Matches </Text>
            <FlatList
                data={locations.data}
                renderItem={({item}) => <Item data={item}/>}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 45
    }
});

export default LocationsListScreen;
