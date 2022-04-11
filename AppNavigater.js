import React from 'react'
import Categories from './screens/Categories'
import Cart from './screens/Cart' 
import Orders from './screens/Orders'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()

export default function AppNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home 2"
            activeColor="red"
            inactiveColor="blue"
            barStyle={{ backgroundColor: '#694fad', paddingBottom: 10 }}
        >
            <Tab.Screen name="Categories" component={Categories} />
            <Tab.Screen name="CartStack" component={Cart} />
            <Tab.Screen name="OrderStack" component={Orders} />
        </Tab.Navigator>
    )
}
