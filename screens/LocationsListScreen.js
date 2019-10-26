import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, SafeAreaView} from 'react-native';
import Item from "../components/Item";


const LocationsListScreen = props => {
    return (

        <View style={styles.screen}>
            <Text> Best Matches </Text>
            <FlatList
                data={props.locations.stations}
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
