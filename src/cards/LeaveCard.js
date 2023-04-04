import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LeaveCard = (props) => {
    return (
        <TouchableOpacity>
            <View style={[styles.mainContainer, { backgroundColor: `${props.color2}` }]}>
                <View style={[styles.topConatiner, { backgroundColor: `${props.color1}` }]}>
                    <Text style={{ color: "#fff" }}>{props.type}</Text>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                        <Text style={{ fontSize: 25, fontWeight: "bold" }}>12</Text>
                        <Text style={{ marginTop: 7, color: "#707e8a", fontSize: 13 }}>Left</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>

                    <View style={styles.childs}>
                        <Text style={{ color: "#707e8a" }}>Currently Year</Text>
                        <Text style={{ fontSize: 15 }}>00</Text>
                    </View>
                    <View style={styles.childs}>
                        <Text style={{ color: "#707e8a" }}>Availed</Text>
                        <Text>00</Text>
                    </View>
                    <View style={[styles.childs, { marginTop: 15, borderTopColor: "#707e8a", borderTopWidth: 1 }]}>
                        <Text style={{ color: "#707e8a" }}>Balance</Text>
                        <Text>00</Text>
                    </View>

                </View>

            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    mainContainer: {
        // borderWidth: 1,
        width: 150,
        height: 170,
        borderRadius: 7,
        backgroundColor: "#f6f1e1",
        marginLeft: 10
    },
    childs: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bottomContainer: {
        padding: 10,
        // backgroundColor: "#f6f1e1"
    },
    topConatiner: {
        alignItems: "center",
        // borderWidth: 1,
        height: 35,
        paddingTop: 5,
        backgroundColor: "#f37324",
        borderTopEndRadius: 7,
        borderTopLeftRadius: 7,

    }
})

export default LeaveCard
