import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Home = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("MySpace")}
        >
            <Text>Click me to go MySpace page</Text>
        </TouchableOpacity>
    )
}

export default Home

const styles = StyleSheet.create({})