import { useEffect, useState } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Product from '../components/Product'
import { getAllProducts } from '../actions/ApiCall'

export default function Category({ route, navigation }) {
    const { title, id } = route.params

    const [products, setProducts] = useState([])

    useEffect(() => {
        navigation.setOptions({ title: title })

        getAllProducts(id).then(data => {
            setProducts(data)
        })
    }, [])

    return (
        <FlatList
            numColumns={2}
            data={products}
            renderItem={({ item }) => (
                <View style={styles.wrapper}>
                    <Product item={item} />
                </View>
            )}
            keyExtractor={item => `${item.id}`}
            contentContainerStyle={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingTop: 16,
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8,
    },
})
