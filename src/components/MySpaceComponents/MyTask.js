import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react'

const MyTask = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <View style={styles.topLeftContainer}>
                    <Text style={{ fontWeight: "500" }}>My Task</Text>
                </View>
                <TouchableOpacity>
                    <View style={{ marginRight: 20 }}>
                        <Icon name="arrowright" color="#2c499f" size={22} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <Image source={require('../../../images/image2.png')}
                    style={{ width: 150, height: 120 }}
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
        backgroundColor: "#ebf6f9",
        borderRadius: 7,
        marginBottom: 50
    },
    bottom: {
        alignItems: "center",
        marginTop: -10,
        marginBottom: 10
    }
})
export default MyTask
