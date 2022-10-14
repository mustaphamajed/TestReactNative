import React from "react";
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
const Search = () => {
    return (
        <View style={styles.searchSection}>
            <Feather style={styles.searchIcon} name="search" size={20} color="#000" />
            <TextInput
                style={styles.input}
                placeholder="Professional, country, asset"

                underlineColorAndroid="transparent"
            />
        </View>
    )
}
export default Search

const styles = StyleSheet.create({
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3D3D3',
        margin: 10,
        borderRadius: 10
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#D3D3D3',
        color: '#424242',
        borderRadius: 10
    },
})