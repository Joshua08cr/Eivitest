import React from "react";

import { NavigationContainer } from "@react-navigation/native";

//Llamando a Tabs que es la bottomNavigationBar
import Tabs from './components/Tabs';

export default function App() {
  return (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>
  );
}

