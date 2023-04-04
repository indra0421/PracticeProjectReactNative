import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

const Description = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.Container}>
                <View style={styles.imageContainer}>
                    <View style={styles.imageBackground}>
                        <Image
                            source={require('../../../images/image.png')}
                            style={{ width: 55, height: 55, marginTop: 10, marginLeft: 12 }}

                        />
                    </View>
                </View>
                <View>
                    <View style={styles.detailsContainer}>
                        <View><Text style={[styles.nameStyle, { fontSize: 17 }]}>Ananya Singh</Text></View>
                        <View><Text style={{ fontSize: 15 }}>UX Designer</Text></View>
                        <View><Text style={{ fontSize: 15 }}> 127927</Text></View>
                    </View>
                </View>
                <View style={styles.eyeStyle} >

                    <Icon name="eye" size={25} color='#f37324' />

                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainContainer: {
        height: 115,
        backgroundColor: "#fef8eb",
    },
    Container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // borderWidth: 1,
        height: "100%",
        backgroundColor: "#fef8eb",
        marginLeft: 30,
        marginRight: 20
    }, eyeStyle: {
        // marginLeft: 10,
        // borderWidth: 1,
        marginTop: 3

    }, detailsContainer: {
        // borderWidth: 1,
        marginTop: 30
    }, imageContainer: {
        // borderWidth: 1
    },
    nameStyle: {
        color: "#f37324",
        fontWeight: '500'
    }, imageBackground: {
        width: 80,
        height: 80,
        backgroundColor: "#d9d8d9",
        borderRadius: 50,
        display: "flex",
        marginTop: 20

    }

})
export default Description

