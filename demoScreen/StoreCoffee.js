import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Category from '../screens/Category'
import Categories from '../screens/Categories'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import AppNavigator from '../AppNavigater'

const Stack = createNativeStackNavigator()

export default function StoreCoffee() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={AppNavigator} />
                <Stack.Screen name="Categories" component={Categories} />
                <Stack.Screen name="Category" component={Category} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#ffff',
        justifyContent: 'center',
        paddingLeft: 16,
        paddingRight: 16,
    },
})
