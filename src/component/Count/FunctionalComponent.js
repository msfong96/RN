import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const FunctionalComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex:1 }}>
                <Text>count: {count} times</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setCount(count + 1)
                    }}>
                    <Text>Click</Text>
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
        alignItems: 'center'
    }
})

export default FunctionalComponent;