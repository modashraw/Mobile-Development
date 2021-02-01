import React, { Component } from 'react'
import { Text, View, FlatList, Dimensions } from 'react-native'
import CarItem from '../CarItem'
import cars from './cars'
import styles from './style'

const CarList = (props) => {
    return (
        <View style={styles}>
            <FlatList 
                data={cars} 
                renderItem={({item}) => <CarItem car={item} />}
                keyExtractor={(item, index) => index.toString()}
                snapToAlignment={'start'}
                snapToInterval={Dimensions.get('window').height}
                decelerationRate={'fast'}
                
            />
        </View>
    )
}

export default CarList
