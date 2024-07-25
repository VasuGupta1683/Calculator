import React from 'react'
import { View,StyleSheet, Image, Text } from 'react-native'
import logo from '../assets/calculatorlogo.png'

const IntroScreen = () => {
  return (
    <View style= {styles.container}>
        <View style= {styles.inner}>
            <Image source={logo} style={styles.innerimg} />
            <Text>  My Calculator</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'column',
    height:'100%',
    backgroundColor:'#008BFF',
    alignItems:'center',
    justifyContent:'center',
    width:'100%'
  },
  innerimg: {
    width:100,
    height:100
  }
})

export default IntroScreen