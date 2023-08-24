import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { useNavigation } from "@react-navigation/native";


//pantallas de clases

const { width } = Dimensions.get("window");


const StripedBackground = ({ children }) => {
  return (
    <View style={styles.stripedBackground}>
      {children}
      <View style={styles.stripe} />
      <View style={[styles.stripe, styles.greenStripe]} />
    </View>
  );
};



const HomeScreen = () => {
  // <--Le cambie la funcion a una flecha por que es mas bonito ;)
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CienciasScreen");
          }}
          style={styles.button}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Ciencias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} activeOpacity={0.7}>
          <Text style={styles.buttonText1}>Biología</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} activeOpacity={0.7}>
          <Text style={styles.buttonText2}>Matemáticas</Text>
        </TouchableOpacity>
      </View>
      <View/>
      <LinearGradient
          colors={["#B7E4C7", "#A5D6A7"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBackground}
    />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    alignItems: "flex-start",
    justifyContent: "center",
    flex:1,
    zIndex:2,
  },
  gradientBackground: {
    ...StyleSheet.absoluteFillObject, 
    zindex:1,
  },
  button: {
    width: 350,
    height: 160,
    marginTop: -100,
    left: -10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderColor:'white',
    backgroundColor: "#B7E4C7", // Color de fondo del botón
    shadowColor: "black", // Color de la sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    position: "absolute",
    color: "#fff", // Color del texto
    fontSize: 36,
    fontWeight: "bold",
  },
  button1: {
    width: 330,
    height: 160,
    marginTop: -30,
    left: -10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#B7E4C7", // Color de fondo del botón
    shadowColor: "#000", // Color de la sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText1: {
    position: "absolute",
    color: "#fff", // Color del texto
    fontSize: 36,
    fontWeight: "bold",
  },
  button2: {
    width: 300,
    height: 160,
    marginTop: -20,
    left: -10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#B7E4C7", // Color de fondo del botón
    shadowColor: "#000", // Color de la sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3,
    elevation: 8,
  },

  buttonText2: {
    position: "absolute",
    color: "#f1f1f1", // Color del texto
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "right",
  },
});
