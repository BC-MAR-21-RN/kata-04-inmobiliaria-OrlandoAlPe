import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ListItem = ({ name, adress, rooms, bathrooms, area, rent, imageUrl, isFav, rate }) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.leftItemsContainer}>
                <Image style={styles.itemImage} source={imageUrl} />
                <View style={styles.itemRate}>
                    <Text>{rate} *</Text>
                </View>
            </View>
            <View style={styles.rightItemsContainer}>
                <Text style={styles.itemTitle}>{name}</Text>
                <Text>{adress}</Text>
                <View style={styles.itemServices}>
                    <Text>{rooms}</Text>
                    <Text>{bathrooms}</Text>
                    <Text>{area} ft. ^2</Text>
                </View>
                <View style={styles.itemDets}>
                    <Text>${rent}/m</Text>
                    <Text>{isFav ? 'fav' : 'No fav'}</Text>
                </View>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#F5FDFF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',

    },
    leftItemsContainer: {
        margin: 10
    },
    rightItemsContainer: {
        margin: 10
    },
    itemServices: {
        flexDirection: 'row'
    },
    itemDets: {
        flexDirection: 'row'
    },
    itemImage: {
        height: 100,
        width: 100,
        borderRadius: 5
    },
    itemTitle: {
        fontSize: 15,
    },
    itemRate: {
        position: 'absolute',

    }
})

export default ListItem