import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import LeaveCard from '../../cards/LeaveCard';
import { ScrollView } from 'react-native';

const Leaves = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <View style={styles.topLeftContainer}>
                    <Text style={{ fontWeight: "500" }}>My Leaves</Text>
                </View>
                <View style={{}}>
                    <Icon name="arrowright" color="#f37324" size={22} />
                </View>
            </View>
            <View style={styles.bottom}>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <LeaveCard color1="#f37324" color2="#f6f1e1" type="Earned Leave" />
                    <LeaveCard color1="#12b8d9" color2="#e0f2f8" type="Casual Leave" />
                    <LeaveCard color1="#f37324" color2="#f6f1e1" type="Earned Leave" />
                    <LeaveCard color1="#12b8d9" color2="#e0f2f8" type="Casual Leave" />
                    <LeaveCard color1="#f37324" color2="#f6f1e1" type="Earned Leave" />
                    <LeaveCard color1="#12b8d9" color2="#e0f2f8" type="Casual Leave" />
                    <LeaveCard color1="#f37324" color2="#f6f1e1" type="Earned Leave" />
                    <LeaveCard color1="#12b8d9" color2="#e0f2f8" type="Casual Leave" />



                </ScrollView>
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
        marginBottom: 15

    },
    mainContainer: {

    },
    bottom: {
        marginLeft: 5
    }
})
export default Leaves
