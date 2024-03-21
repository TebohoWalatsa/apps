import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Comp from './components/re';

export default function App() {
  
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>
          TRANSCRIPT
        </Text>
      </View>
      <View style={styles.photo}>
      <Image source={require('./assets/me.jpg')} style={{width: 100, height: 100}} />
      </View>
      <View style={styles.content}>
      <View style={styles.content}>
        <Comp label="NAMES" value="Teboho Walatsa"/>
        <Comp label="STUDENT #" value="901016668"/>
        <Comp label="FACULTY" value="FICT"/>
      </View>
      <View style={styles.content}>
        <Comp label="SEMESTER" value="1"/>
        <Comp label="Calculus" value="A*"/>
        <Comp label="DISCRETE" value="D"/>
      </View>
      <View style={styles.content}>
        <Comp label="SEMESTER" value="1"/>
        <Comp label="C++" value="A"/>
        <Comp label="ALGEBRA" value="A"/>
      </View>
      <View style={styles.content}>
        <Comp label="SEMESTER" value="1"/>
        <Comp label="JAVA" value="B"/>
        <Comp label="STATS" value="A"/>
      </View>
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
    justifyContent: 'center',
    margin: '10px',
    
  },
  content: {

    margin: 5
  },
  heading: {
    paddingTop:20,
    fontSize: 30,
    backgroundColor: 'white',
    alignContent: 'center'
  },
  photo:{
    justifyContent: 'center',
    alignItems: 'center'
  }
});
