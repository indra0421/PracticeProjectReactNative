import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react'

const Holidays = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <View style={styles.topLeftContainer}>
                    <Text style={{ fontWeight: "500" }}>My Holidays</Text>
                </View>

                <TouchableOpacity>
                    <Icon name="arrowright" color="#f37324" size={22} />
                </TouchableOpacity>

            </View>
            <View style={styles.bottom}>
                <Image source={require('../../../images/image1.png')}
                    style={{ width: "100%", height: 120 }}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    topLeftContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 15
    }, topContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
        marginBottom: 0

    },
    mainContainer: {
        // borderWidth: 1,
        margin: 12,
        height: 150,
        backgroundColor: "#faf3ee",
        borderRadius: 7
    },
    bottom: {
        alignItems: "center"
    }
})
export default Holidays
