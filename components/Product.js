import { StyleSheet, Text, View, Image } from 'react-native'

const Product = props => {
    let { item } = props
 

    return (
        <View style={styles.container}>
            <Image style={styles.categoryImage} source={{ uri: item.img }} />
            <Text style={styles.title}> {item.name} </Text>
            <View style={styles.priceRow}>
                <Text style={styles.price}> {`${item.price} đ`} </Text>
                <Text> Mua + </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#DDDDDD',
        marginBottom: 16,
        overflow: 'hidden',
        alignItems: 'center',
    },
    title: {
        marginBottom: 8,
        fontWeight: '700',
        color: '#000',
        fontSize: 16,
        alignItems: 'flex-start',
    },
    categoryImage: {
        height: 125,
        width: 125,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 5
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 16,
        flex: 1,
    },
})

export default Product
