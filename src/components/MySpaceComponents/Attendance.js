import { FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import AttendanceCard from '../../cards/AttendanceCard';
import { AttendanceData } from '../../Api/AttendanceData';

const Attendance = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <View style={styles.topLeftContainer}>
                    <Text style={{ fontWeight: "500" }}>My Attendance</Text>
                    <Text style={{ fontSize: 11, marginTop: 4, color: "#687886" }}>March (31Days)</Text>
                </View>
                <TouchableOpacity>
                    <Icon name="arrowright" color="#f37324" size={22} />
                </TouchableOpacity>

            </View>
            <ScrollView style={styles.bottomContainer}>
                <FlatList
                    data={AttendanceData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={AttendanceCard}
                    numColumns={3}
                    horizontal={false}
                />
            </ScrollView>

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

    },
    mainContainer: {
        backgroundColor: "#fff",
        height: "auto",
        marginTop: 10
    }, bottomContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "row",
        marginRight: 5,
        marginBottom: 10,
        width: "100%"
    }
})
export default Attendance
