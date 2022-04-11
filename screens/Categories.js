import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Button, FlatList } from 'react-native'
import CategoryList from '../components/CategoryList'
import { getAllCategories } from '../actions/ApiCall'

export default function Categories({ navigation }) {
    const [categorys, setCategorys] = useState([])

    useEffect(() => {
        getAllCategories().then(data => {
            setCategorys(data)
        })
    }, [])

    return (
        <View>
            <FlatList
                data={categorys}
                renderItem={({ item }) => (
                    <CategoryList
                        key={item.id}
                        category={item}
                        handleNextScreen={() => {
                            navigation.navigate('Category', {
                                title: item.name,
                                id: item.id,
                            })
                        }}
                    />
                )}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
            />
        </View>
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
