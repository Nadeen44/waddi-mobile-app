import { View, Text,StyleSheet,ScrollView } from 'react-native'
import React from 'react'
import DriverNavbar from '../../Components/DriverNavbar'
import AllTasksection from '../../Components/AllTasksection'

export default function DriverTask() {
  return (
<View style={styles.navBar}>
            <View style={styles.firstsection}>
            <DriverNavbar/>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <AllTasksection/>
      </ScrollView>
            </View>
        
        </View>
  )
}
const styles = StyleSheet.create({
    navBar: {
        // height: 380,
        flexDirection: "column",
        justifyContent: "center",
    },
    firstsection:{
      backgroundColor: "#415BF6",  
    },

    scrollViewContent:{
       
    }
});