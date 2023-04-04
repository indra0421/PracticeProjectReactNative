import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';

const Header = () => {
    return (
        <View style={{ marginTop: 20, marginBottom: 15 }}>
            <View style={styles.container}>
                <View style={styles.backContainer}>

                    <Icon2 name="arrow-back" color="#627381" size={22} />
                    <Text style={{ color: "#f37324", fontWeight: "600", fontSize: 18 }}>My Space</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <TouchableOpacity><Icon name="search1" color="#627381" size={22} /></TouchableOpacity>
                    <TouchableOpacity><Icon2 name="notifications" color="#627381" size={22} /></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    backContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 15,
        marginLeft: 15,
    }, iconsContainer: {
        display: "flex",
        flexDirection: 'row',
        marginRight: 50,
        gap: 20,
        marginTop: 10
    }
}
)
export default Header

