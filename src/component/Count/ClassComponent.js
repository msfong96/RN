import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class ClassComponent extends React.Component { 
    constructor(){
        super();
        this.state={
            count :0
        };
        
        this.increase=this.increase.bind(this);
    }
     
   increase(){
       this.setState({count : this.state.count +1});
   }

    render() {
        return (
            <View>
                <Text>count: {this.state.count} times</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.increase}>
                    <Text>Click</Text>
                </TouchableOpacity>
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