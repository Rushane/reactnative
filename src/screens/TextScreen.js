import React, {useState} from 'react';
import {Text, StyleSheet, View, Button, TextInput} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');

    return <View>
        <Text>Enter password:</Text>
        <TextInput 
           style={styles.input}
           autoCapitalize="none"
           autoCorrect={false}
           value={name}
           onChangeText={(newValue) => setName(newValue)}
        />
        {/* <Text>{name}</Text> */}
        {name.length < 4 ? <Text>Password no longer than 5 characters</Text>: null }
    </View>
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
    }
});

export default TextScreen;