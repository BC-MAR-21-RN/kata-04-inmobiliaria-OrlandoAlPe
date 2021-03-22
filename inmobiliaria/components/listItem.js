import React, { Component } from 'react'
import { View ,Text, Image} from 'react-native'

const listItem = ({name,adress,rooms,bathrooms,area,rent, imageUrl, isFav, rate}) => {
    <View>
        <Text >{name}</Text>
        <Text>{adress}</Text>
        <Text>{rooms}</Text>
        <Text>{bathrooms}</Text>
        <Text>{area} ft. ^2</Text>
        <Text>${rent}/m</Text>
        <Image source={{uri:{imageUrl}}}/>
        <Text>{rate} *</Text>
        <Text>{isFav ? 'fav' : 'No fav'}</Text>
    </View>
}
export default listItem