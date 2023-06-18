import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, Image,  View, TextInput, Dimensions, TouchableOpacity, ScrollView, Alert} from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const { width} = Dimensions.get('window')
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import app from './firebaseConfig';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import ButtonGradient from './components/ButtonGradient';
import Register from './components/Register';

const Stack = createStackNavigator();


function HomeScreen (){
  return(
    <View style={{fontSize:30, flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{fontSize:25,fontWeight:'bold'}}>Home Screen</Text>
    </View>
  )
}

function LoginScreen({navigation}){

  const[email, setEmail]=React.useState('')
  const[password, setPassword]=React.useState('')

  const auth = getAuth(app) 

  const handleCreateAccount =()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
      console.log('Email:', email);
      console.log('Password:', password);
      console.log ('Account created')
      const user= userCredential.user;
      console.log(user)
    })
    .catch(error =>{
      console.log(error)
      Alert.alert(error.message)
    })
  }
  const handleSingIn = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
      console.log ('Signed in')
      const user= userCredential.user;
      console.log(user)
    })
    .catch(error =>{
      console.log(error)
    })
    navigation.navigate('Home');
  }


  function SvgTop() {
    return (
      <Svg
      width={500}
      height={324}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
        fill="url(#prefix__paint0_linear_103:6)"
        fillOpacity={0.5}
      />
      <Path
        d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
        fill="url(#prefix__paint1_linear_103:6)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear_103:6"
          x1={492.715}
          y1={231.205}
          x2={480.057}
          y2={364.215}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#5dc1b9" />
          <Stop offset={1} stopColor="#B7E4C7" />
        </LinearGradient>
        <LinearGradient
          id="prefix__paint1_linear_103:6"
          x1={7.304}
          y1={4.155}
          x2={144.016}
          y2={422.041}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor='#03bb85'/>
          <Stop offset={1} stopColor='#B7E4C7'  />
        </LinearGradient>
      </Defs>
    </Svg>
    )
  }


  return(
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgTop/>
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Hola</Text>
        <Text style={styles.subTitle}>Inicia sesión en tu cuenta</Text>
        <TextInput onChangeText={(text) => setEmail(text)}
         placeholder="Email" 
         style={styles.textInput}/>
        <TextInput 
          onChangeText={(text) => setPassword(text)}
          placeholder="Contraseña"
          style={styles.textInput}
          secureTextEntry={true}
        />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>                                                              Olvidaste tu contraseña?   
        </Text> 
      </TouchableOpacity>
        <ButtonGradient onPress={handleSingIn}/>
        <Register onPress={handleCreateAccount}/>
        <StatusBar style="auto" />
      </View>
    </View>
  </ScrollView> 
  )
 }



 export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
 }

const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: '#f1f1f1',
      flex: 1,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerSVG: {
      width: width,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    titulo: {
      fontSize: 80,
      color: '#34434D',
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: 20,
      color: 'gray',
    },
    textInput: {
      padding: 10,
      paddingStart: 30,
      width: '80%',
      height: 50,
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: '#fff',
    },
    forgotPassword: {
      fontSize: 14,
      color: 'gray',
      marginTop: 11
    },
    button: {
  
    },

    
    
  });