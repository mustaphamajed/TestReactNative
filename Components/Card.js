import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Button from './Button';
const Card = ({ data }) => {
    return (
        <View style={styles.container}>

            <View style={styles.leftCont}>
                <Image
                    style={{ width: '100%', height: '100%', borderBottomLeftRadius: 10, borderTopLeftRadius: 10, resizeMode: 'contain' }}
                    source={data.image} />
                <Image
                    style={{ width: 25, height: 25, position: 'absolute', bottom: 10, left: 10 }}
                    source={data.flag}
                />
                <View style={{ position: 'absolute', top: 10, left: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <Octicons name='shield-check' size={20} color='#000' />
                    <Text style={[data.badge === 'SILVER' ? styles.silver : data.badge === "GOLD" ? styles.gold : styles.bronze, styles.badge]}>{data.badge}</Text>
                </View>



            </View>
            <View style={styles.rightCont}>
                <Text style={styles.textName}>
                    {data.name}
                </Text>
                <Text style={{ color: '#FFF' }}>
                    {data.title}
                </Text>
                <Text style={{ color: '#FFF', fontSize: 12 }}>
                    {data.company}
                </Text>
                <Text style={{ color: '#FFF', fontSize: 12 }}>
                    Experience: {data.experience}
                </Text>
                <Text style={{ color: '#FFF', fontSize: 12 }}>
                    Language: {data.language}
                </Text>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-evenly', padding: 5 }}>
                    <Entypo name='mail' size={25} color='#FFF' />
                    <Ionicons name='chatbox' size={25} color='#FFF' />
                    <Ionicons name='call' size={25} color='#FFF' />
                    <FontAwesome name='video-camera' size={25} color='#FFF' />
                </View>
                <View>
                    <Button text={'CHECK PROFILE'} />
                </View>
            </View>

        </View>
    )
}
export default Card;

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        margin: 10,
        borderWidth: 3,
        borderColor: '#f8c22e',
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'rgb(5, 31, 77)',
    },
    leftCont: {
        flex: 1,
    },
    rightCont: {
        flex: 2,
        padding: 10,

    },
    textName: {
        color: '#1976d2',
        fontSize: 18,
        fontWeight: '700'
    },
    badge: {
        fontSize: 10, color: '#000', fontWeight: '700', paddingHorizontal: 5, borderTopRightRadius: 5, borderBottomRightRadius: 5
    },
    silver: {
        backgroundColor: '#C0C0C0'
    },
    bronze: {
        backgroundColor: '#CD7F32'
    },
    gold: {
        backgroundColor: '#FFD700'
    }

})