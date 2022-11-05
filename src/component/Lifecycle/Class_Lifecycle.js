import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

class ClassComponent extends React.Component { 
    componentDidMount() { 
        Alert.alert("Hello")
      }

    render() {
        return (
            <View>
                 <Text>Hello, World!</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 20,
        alignItems: 'center'
    }
})

export default ClassComponent;