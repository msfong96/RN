import React from 'react';
import { View } from 'react-native';

const Flex = () => {
    return (
        <View style={
            {
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
            }
        } >
            {/* //changed justifyContent value to the flex-start,flex-end,space-between,space-around */}
            <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
        </View>
    )
}

export default Flex;