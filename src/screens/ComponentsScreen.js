import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const firstName = 'Rushane Barnes';

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            <Text style={styles.otherName}>My name is {firstName}</Text>
       </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    otherName: {
        fontSize: 20,
    }
});

export default ComponentsScreen;