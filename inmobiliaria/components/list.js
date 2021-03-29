import React from 'react'
import { FlatList, View, ScrollView } from 'react-native'
import ListItem from './listItem'


const DATA = require('../data/data.json')


const List = () => {
    const renderItem = ({ item }) => (
        <ListItem name={item.Name} imageUrl={{ uri: item.imgUrl }} adress={item.Adress} rooms={item.Rooms} bathrooms={item.Bathrooms} area={item.area} rent={item.rent} isFav={item.favorite} rate={item.evaluation} />
    )
    return (
        <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}

export default List