import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Entypo';

const AttendanceCard = ({ item }) => {

    return (

        <View style={[styles.mainContainer, { backgroundColor: `${item.backGrnColor}` }]}>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <View style={[styles.icon, { borderColor: `${item.borderColor}` }]}>
                        {
                            item.iconId == 1 ? <Icon name="calendar" color={item.iconColor} size={18} style={{ marginTop: 6 }} /> :
                                item.iconId == 2 ? <Icon name="rupee" color={item.iconColor} size={18} style={{ marginTop: 6 }} /> :
                                    item.iconId == 3 ? <Icon3 name="done" color={item.iconColor} size={18} style={{ marginTop: 6 }} /> :
                                        item.iconId == 4 ? <Icon name="shopping-bag" color={item.iconColor} size={18} style={{ marginTop: 6 }} /> :
                                            item.iconId == 5 ? <Icon name="calendar-o" color={item.iconColor} size={18} style={{ marginTop: 6 }} /> :
                                                item.iconId == 6 ? <Icon2 name="umbrella-beach" color={item.iconColor} size={18} style={{ marginTop: 6 }} /> :
                                                    item.iconId == 7 ? <Icon name="exclamation" color={item.iconColor} size={18} style={{ marginTop: 6 }} /> :
                                                        item.iconId == 8 ? <Icon2 name="running" color={item.iconColor} size={18} style={{ marginTop: 6 }} /> : <Icon4 name="circle-with-cross" color={item.iconColor} size={18} style={{ marginTop: 6 }} />

                        }
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={{ textAlign: "center", fontWeight: "500" }}>{item.days}</Text>
                    <Text style={{ fontSize: 10, textAlign: "center" }}>{item.typeOfDays}</Text>
                </View>

            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    mainContainer: {
        width: "31%",
        // borderWidth: 1,
        height: 60,
        borderRadius: 7,
        backgroundColor: "#f3fafd",
        marginTop: 8,
        marginLeft: 7
    },
    container: {
        display: "flex",
        flexDirection: "row",
        height: "100%"
    },
    iconContainer: {
        // borderWidth: 1,
        width: "40%",
        height: "auto",
        marginTop: 8,
        marginLeft: 2
    },
    textContainer: {
        // borderWidth: 1,
        borderColor: "red",
        height: "auto",
        width: "56%",
        marginTop: 8
    }, icon: {
        borderWidth: 3,
        borderRadius: 50,
        height: 40,
        width: 40,
        alignItems: "center",
        borderColor: "#88d4e6"

    }

})
export default AttendanceCard
