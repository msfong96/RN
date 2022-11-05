import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from 'react-native';

const FunctionalComponent = ({navigation}) => {
    useEffect(() => {
        Alert.alert("Hello")
    }, [])

    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>Hello, World!</Text>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("Flex")}}>
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 20,
        alignItems: 'center',
        width: 180
    }
})

export default FunctionalComponent;