import React from 'react'
import {Text, View, ImageBackground } from 'react-native'
import styles from './style'
import Button from '../Button'

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground 
            source={require('../../assets/images/ModelX.jpeg')} 
            style={styles.image}
            />
            <View style={styles.titles}>
            <Text style={styles.title}>Model S</Text>
            <Text style={styles.subtitle} >Starting at $65,000</Text>
            </View>
            <Button type="primary" content="Custom Order" onPress={() => { console.warn("Primary Button") }}/>
            <Button type="secondary" content="Check Our Inventory" onPress={() => { console.warn("Secondary Button") }} />
      </View>
    )
}

export default CarItem