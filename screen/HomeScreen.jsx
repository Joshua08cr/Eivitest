import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  // <--Le cambie la funcion a una flecha por que es mas bonito ;)
  const handlePress = () => {
    // Lógica para manejar el evento de presionar la imagen
    console.log("La imagen ha sido presionada");
  };

  return (
    <ImageBackground
      source={require("../assets/R.jpg")}
      style={styles.backgroundImage}
    >
      <TouchableOpacity style={styles.button} activeOpacity={0.7}>
        <Image
          source={require("../assets/ciencias.jpg")}
          style={styles.buttonImage}
        />
        <Text style={styles.buttonText}>Ciencias</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} activeOpacity={0.7}>
        <Image
          source={require("../assets/biolo.jpg")}
          style={styles.buttonImage1}
        />
        <Text style={styles.buttonText1}>Biología</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} activeOpacity={0.7}>
        <Image
          source={require("../assets/mate.jpg")}
          style={styles.buttonImage2}
        />
        <Text style={styles.buttonText2}>Matemáticas</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default HomeScreen;

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
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  button: {
    width: 350,
    height: 160,
    marginTop: -100,
    left: -10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    backgroundColor: "#ccc", // Color de fondo del botón
    shadowColor: "#000", // Color de la sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonImage: {
    width: "100%",
    height: "100%",
    opacity: 1,
    borderRadius: 15,
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
    borderRadius: 15,
    backgroundColor: "#ccc", // Color de fondo del botón
    shadowColor: "#000", // Color de la sombra
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
    width: "100%",
    height: "100%",
    borderRadius: 15,
    opacity: 1,
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
    borderRadius: 15,
    backgroundColor: "#ccc", // Color de fondo del botón
    shadowColor: "#000", // Color de la sombra
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
    width: "100%",
    height: "100%",
    borderRadius: 15,
    opacity: 1,
  },
  buttonText2: {
    position: "absolute",
    color: "#f1f1f1", // Color del texto
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "right",
  },
});
