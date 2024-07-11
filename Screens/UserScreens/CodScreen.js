import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BackButton from '../../Components/BackButton'
import DeliveryInfoCard from '../../Components/DeliveryInfoCard'
import CircularProgressBar from '../../Components/CircularProgressBar'

export default function CodScreen() {
  return (
    <View style={styles.container}>
      {/* <BackButton/> */}
      <DeliveryInfoCard />
      <CircularProgressBar/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'#F3F3F3',
    paddingVertical: 60,
    justifyContent: "center",
    alignItems: "center"
  },
})