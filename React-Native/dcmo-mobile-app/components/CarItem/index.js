import React from 'react'
import {Text, View, ImageBackground } from 'react-native'
import styles from './style'
import Button from '../Button'

const CarItem = (props) => {
    const { name, tagline, taglineCTA, image } = props

    return (
        <View style={styles.carContainer}>
            <ImageBackground 
            source={image} 
            style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {' '}
                    <Text style={styles.subtitleCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button type="primary" content={"Custom Order"} onPress={() => { console.warn("Primary Button") }}/>
                <Button type="secondary" content={"Existing Inventory"} onPress={() => { console.warn("Secondary Button") }} />
            </View>
      </View>
    )
}

export default CarItem