import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { MainScreen } from '../screens/MainScreen';
import { ScoreScreen } from '../screens/ScoreScreen';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export function Navigation() {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Main'>
                <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Tenzies' }} />
                <Stack.Screen name="Score" component={ScoreScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
