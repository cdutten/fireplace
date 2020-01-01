import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import Item from "../components/Item";
import {useSelector} from "react-redux";
import MapView from "react-native-maps";
import {Dimensions} from "react-native-web";


const MapScreen = props => {
    console.log('Soy el MAPA!!!')
    return (
        <View style={styles.screen}>
            <MapView style={styles.map}/>
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
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
});

export default MapScreen;
