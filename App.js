import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Comp from './components/re';

export default function App() {
  
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>
          STUDENT CARD
        </Text>
      </View>
      <View style={styles.photo}>
      <Image source={require('./assets/me.jpg')} style={{width: 100, height: 100}} />
      </View>
      <View>
        <Comp label="NAMES" value="Teboho Walatsa"/>
        <Comp label="STUDENT #" value="901016668"/>
        <Comp label="FACULTY" value="FICT"/>
      </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignContent: 'center',
    justifyContent: 'center'
   
  },
  heading: {
    paddingTop:20,
    fontSize: 30,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  photo:{
    justifyContent: 'center',
    alignItems: 'center'
  }
});
