import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const CategoryList = props => {
    let { category, handleNextScreen } = props 

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={handleNextScreen}>
            <View style={styles.container}>
                <Image
                    style={styles.categoryImage}
                    source={{ uri: category.img }}
                />
                <Text style={styles.title}> {category.name} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#DDDDDD',
        shadowColor: 'red',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        marginTop: 16,
    },
    title: {
        textTransform: 'uppercase',
        marginTop: 8,
        fontWeight: '700',
        color: '#000',
    },
    categoryImage: {
        width: 125,
        height: 125,
        borderRadius: 5,
    },
})

export default CategoryList
