import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
      <View>
          <Text style={styles.text}>Hi There</Text>
           <Button 
              onPress={() => props.navigation.navigate('Components')}
              title="Go to Components Demo" 
            />
            <TouchableOpacity onPress={() =>  props.navigation.navigate('ListScreen')}> 
             <Text>Go to List Demo </Text>
            
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>  props.navigation.navigate('Image')}> 
             <Text>Go to Image Screen </Text>
            
            </TouchableOpacity>
            <Button 
              onPress={() => props.navigation.navigate('Counter')}
              title="Go to Counter Demo" 
            />
            <Button 
              onPress={() => props.navigation.navigate('Color')}
              title="Go to Color Demo" 
            />
            <Button 
              onPress={() => props.navigation.navigate('Square')}
              title="Go to Square Demo" 
            />

      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
