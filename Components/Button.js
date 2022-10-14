import React from "react";
import { View, Text, TouchableOpacity } from 'react-native'


const Button = ({ text }) => {
    return (
        <TouchableOpacity style={{ backgroundColor: '#f8c22e', alignItems: 'center', marginHorizontal: 20, borderRadius: 5, padding: 5 }}>
            <Text style={{ fontWeight: 'bold', color: '#000' }}> {text}</Text>
        </TouchableOpacity>
    )
}

export default Button