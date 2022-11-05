import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
//Count
import FunctionalComponent from '../component/Count/FunctionalComponent';
import ClassComponent from '../component/Count/ClassComponent';

//Lifecycle
import ClassLife from '../component/Lifecycle/Class_Lifecycle';
import FunctionalLife from '../component/Lifecycle/Functional_Lifecycle';

// Flex
import Flex from '../component/Style/Flex';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="FunctionalLife" 
          component={FunctionalLife} 
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
          name="Flex" 
          component={Flex} 
          options={{ title: 'Flex' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;