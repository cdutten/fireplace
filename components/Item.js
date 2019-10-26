import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const statuses = {
    1: "Best match",
    2: "Good match",
    3: "Not bad",
    4: "Not recommended",
    5: "Not recommended at all"
};


const Item = props => {
    return (
        <View style={styles[props.data.score]}>
            <Text style={styles.title}>{props.data.name}</Text>
            <Text style={styles.title}>{props.data.icon}</Text>
            <Text style={styles.title}>{statuses[props.data.score]}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#ff7733',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 16,
    },
    1: {
        backgroundColor: '#b65b23',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    2: {
        backgroundColor: '#7b3d18',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    3: {
        backgroundColor: '#653012',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    4: {
        backgroundColor: '#ff7733',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    5: {
        backgroundColor: '#e1e1e1',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    }
});

export default Item;
