import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";

//Llamando a Tabs que es la bottomNavigationBar
import Tabs from "./components/Tabs";

//Firebase
import { firebase } from "./firebaseConfig";

//LoginScreen
import LoginScreen from "./screen/LoginScreen";

export default function App() {
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <>
      {!user ? (
        <LoginScreen />
      ) : (
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      )}
    </>
  );
}
