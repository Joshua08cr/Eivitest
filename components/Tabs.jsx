import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    Alert,
    _View,
    ImageBackground,
} from 'react-native'
import React from 'react'
import { StatusBar } from "expo-status-bar";

//Iconos si quiere otros vaya a la pagina de expo icons
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Firebase get
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebaseConfig";

//No se que hace
import ButtonGradient from "../components/ButtonGradient";
import Register from "../components/Register";

//SVg and styles properties 
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const { width } = Dimensions.get("window");

const Tab = createBottomTabNavigator(); // <--Crea el stackbottomNavigation

const HomeScreen = () => { // <--Le cambie la funcion a una flecha por que es mas bonito ;)
    const handlePress = () => {
        // Lógica para manejar el evento de presionar la imagen
        console.log('La imagen ha sido presionada');
      };   
    return (
        <ImageBackground source={require('../assets/R.jpg')} style={styles.backgroundImage}>
                <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                    <Image source={require('../assets/ciencias.jpg')} style={styles.buttonImage} />
                    <Text style={styles.buttonText}>Ciencias</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} activeOpacity={0.7}>
                    <Image source={require('../assets/biolo.jpg')} style={styles.buttonImage1} />
                    <Text style={styles.buttonText1}>Biología</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} activeOpacity={0.7}>
                    <Image source={require('../assets/mate.jpg')} style={styles.buttonImage2} />
                    <Text style={styles.buttonText2}>Matemáticas</Text>
                </TouchableOpacity>
        </ImageBackground>
    );
}

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const auth = getAuth(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Email:", email);
                console.log("Password:", password);
                console.log("Account created");
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
                Alert.alert(error.message);
            });
    };
    const handleSingIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Signed in");
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            });
        navigation.navigate("Home");
    };

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
                        <Stop stopColor="#03bb85" />
                        <Stop offset={1} stopColor="#B7E4C7" />
                    </LinearGradient>
                </Defs>
            </Svg>
        );
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.mainContainer}>
                <View style={styles.containerSVG}>
                    <SvgTop />
                </View>
                <View style={styles.container}>
                    <Text style={styles.titulo}>Hola</Text>
                    <Text style={styles.subTitle}>Inicia sesión en tu cuenta</Text>
                    <TextInput
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Email"
                        style={styles.textInput}
                    />
                    <TextInput
                        onChangeText={(text) => setPassword(text)}
                        placeholder="Contraseña"
                        style={styles.textInput}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}> Olvidaste tu contraseña?</Text>
                    </TouchableOpacity>
                    <ButtonGradient onPress={handleSingIn} />
                    <Register onPress={handleCreateAccount} />
                    <StatusBar style="auto" />
                </View>
            </View>
        </ScrollView>
    );
}

const SettingsScreen = () => {
    return (
        <View>
            <Text>SettingsScreen</Text>
        </View>
    );
}

const Tabs = () => {
    return (
        <Tab.Navigator  // <--Contenedor de la barra de abajo 
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "#B7E4C7",
                showLabel: false,
                tabBarStyle: { // ? <--Si quiere estilizar la barra de navegacion aqui es
                    flex: 1,
                    position: "absolute",
                    left: 10,
                    right: 10,
                    margin: 0,
                    bottom: 15,
                    elevation: 0,
                    borderRadius: 15,
                    height: 80,
                },
            }}
        >
            <Tab.Screen // <--Encargado de llevar a cada screen 
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => ( // <-- Estos son los iconos de la barra de navegacion aqui es donde se cambian
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: 60, marginTop: 15, }}>
                            {focused ? <Ionicons name="ios-settings" size={35} color="#03bb85" /> : <Ionicons name="ios-settings-outline" size={35} color="#435B71" />}
                        </View>
                    )
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', height: 60, marginTop: 15, }}>
                                {focused ? <Ionicons name="book-outline" size={35} color="#03bb85" /> : <Ionicons name="book-outline" size={35} color="#435B71" />}
                            </View>
                        )
                    },
                    toBarBadge: 18,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={LoginScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', height: 60, marginTop: 15, }}>
                                {focused ? <Octicons name="person-fill" size={35} color="#03bb85" /> : <Octicons name="person" size={35} color="#435B71" />}
                            </View>
                        )
                    },
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#f1f1f1",
        flex: 1,
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    containerSVG: {
        width: width,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    titulo: {
        fontSize: 80,
        color: "#34434D",
        fontWeight: "bold",
    },
    subTitle: {
        fontSize: 20,
        color: "gray",
    },
    textInput: {
        padding: 10,
        paddingStart: 30,
        width: "80%",
        height: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: "#fff",
    },
    forgotPassword: {
        fontSize: 14,
        color: "gray",
        marginTop: 11,
    },
    backgroundImage:{
        flex: 1,
        resizeMode: 'cover',
        alignItems:'flex-start',
        justifyContent:'center',
    },
    button: {
        width:350,
        height:160,
        marginTop:-100,
        left:-10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#ccc', // Color de fondo del botón
        shadowColor: '#000', // Color de la sombra
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
      },
      buttonImage: {
        width: '100%',
        height: '100%',
        opacity: 1,
        borderRadius:15,
      },
      buttonText: {
        position: 'absolute',
        color: '#fff', // Color del texto
        fontSize: 36,
        fontWeight: 'bold',
      },    
      button1: {
        width:330,
        height:160,
        marginTop:-30,
        left:-10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#ccc', // Color de fondo del botón
        shadowColor: '#000', // Color de la sombra
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
      },
      buttonImage1: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
        borderRadius:15,
        opacity: 1,
      },
      buttonText1: {
        position: 'absolute',
        color: '#fff', // Color del texto
        fontSize: 36,
        fontWeight: 'bold',
      },
      button2: {
        width:300,
        height:160,
        marginTop:-20,
        left:-10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#ccc', // Color de fondo del botón
        shadowColor: '#000', // Color de la sombra
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.7,
        shadowRadius: 3,
        elevation: 8,
      },
      buttonImage2: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
        borderRadius:15,
        opacity: 1,
      },
      buttonText2: {
        position: 'absolute',
        color: '#f1f1f1', // Color del texto
        fontSize: 36,
        fontWeight: 'bold',
        textAlign:'right',
      },
});