import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/MySpaceComponents/Header'
import Description from '../components/MySpaceComponents/Description'
import Attendance from '../components/MySpaceComponents/Attendance'
import Leaves from '../components/MySpaceComponents/Leaves'
import Holidays from '../components/MySpaceComponents/Holidays'
import MyTask from '../components/MySpaceComponents/MyTask'

const MySpace = () => {
    return (
        <ScrollView nestedScrollEnabled={true} style={{ backgroundColor: "#f6f7f8", height: "100%", marginTop: 30 }} >
            <Header />
            <Description />
            <Attendance />
            <Leaves />
            <Holidays />
            <MyTask />
        </ScrollView>
    )
}

export default MySpace

const styles = StyleSheet.create({})