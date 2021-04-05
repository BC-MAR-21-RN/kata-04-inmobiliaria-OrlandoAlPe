import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBath, faBed, faHeart, faMapMarkerAlt, faRuler} from '@fortawesome/free-solid-svg-icons'
const ListItem = ({ name, adress, rooms, bathrooms, area, rent, imageUrl, isFav, rate }) => {

    const [fav, setFav]= useState(isFav)

    return (
        <View style={styles.itemContainer}>
            <View style={styles.leftItemsContainer}>
                <Image style={styles.itemImage} source={imageUrl} />
                <View style={styles.itemRate}>
                    <Text style={styles.itemRateText}>⭐{rate}</Text>
                </View>
            </View>
            <View style={styles.rightItemsContainer}>
                <Text style={styles.itemTitle} >{name}</Text>
                <Text><FontAwesomeIcon icon={faMapMarkerAlt}  style={{color:'grey'}} /> {adress}</Text>
                <View style={styles.itemServices}>
                    <Text style={{fontWeight:'bold'}}><FontAwesomeIcon icon={faBed}  style={{color:'grey'}}  /> {rooms}</Text>
                    <Text style={{fontWeight:'bold'}}><FontAwesomeIcon icon={faBath} style={{color:'grey'}}/> {bathrooms}</Text>
                    <Text style={{fontWeight:'bold'}}><FontAwesomeIcon icon={faRuler} style={{color:'grey'}}/> {area} ft ²</Text>
                </View>
                <View style={styles.itemDets}>
                    <Text style={{fontWeight:'bold'}}>${rent}/m</Text>
                    <TouchableOpacity onPress={()=>{setFav(!fav)}} >{fav == true ? <FontAwesomeIcon icon={faHeart} style={{color:'green'}} /> : <FontAwesomeIcon icon={faHeart} style={{color:'grey'}}/>}</TouchableOpacity>
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
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    itemDets: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    itemImage: {
        height: 100,
        width: 100,
        borderRadius: 5
    },
    itemTitle: {
        fontSize: 15,
        fontWeight: "bold",
    },
    itemRate: {
        backgroundColor: '#FBEDB7',
        borderRadius: 10,
        width: 45,
        left: 30,
        bottom: 25
    },
    itemRateText: {
        color: '#7A6229'
    },
    boldText: {
        fontWeight: 'bold'
    },
})

export default ListItem