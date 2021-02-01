import React from 'react'
import { View, Image } from 'react-native'
import styles from "./style"
import logo from "../../assets/images/logo.png"
import menu from "../../assets/images/menu.png"

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <Image style={styles.menu} source={menu} />
        </View>
    )
}

export default Header