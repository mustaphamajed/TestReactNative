import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
const Header = () => {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.largeText}>
                    Planet of finance
                </Text>
                <Text style={styles.smallText}>
                    The financial social network
                </Text>
            </View>

            <View >
                <Feather
                    name="menu"
                    size={28}
                    color={'#fff'}

                />
            </View>
        </View>
    )
}
export default Header

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: 'rgb(5, 31, 77)',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 15


    },
    largeText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '900'
    },
    smallText: {
        color: '#FFF',
        fontSize: 12
    }

})