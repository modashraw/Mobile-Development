import React from 'react'
import {View, Text, Pressable } from 'react-native'
import styles from './style'

const Button = (props) => {
    // Button props
    const {type, content, onPress } = props
    // Button Style
    const backgroundColor = type == "primary" ? '#434343' : '#f2f2f2'
    const textColor = type == "primary" ? '#fff' : '#000'

    return (
        <View style={styles.container}>
            <Pressable 
                style={[ styles.button, {backgroundColor: backgroundColor} ]} 
                onPress={onPress}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}

export default Button
