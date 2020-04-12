import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    /* using useState to initialize a new piece of data that we're going to track
       counter has initial value of zero
      
       Anytime we call these set counter function.
       React is going to automatically rerun this entire function component we have created.
       So the entire counter screen component like everything inside of here is going to be executed again.
       But the second time it gets executed a value of counter right here will now be whatever we passed into
       set counter.
    */

    return <View>
      <Button 
              onPress={() => setCounter(counter + 1)}
              title="Increase" 
            />
       <Button 
              onPress={() => setCounter(counter - 1)}
              title="Decrease" 
        />
        <Text>Current Counter: {counter}</Text>
    </View>
};

export default CounterScreen;