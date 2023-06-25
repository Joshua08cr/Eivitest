import { View } from "react-native";
import React from "react";

//Iconos si quiere otros vaya a la pagina de expo icons
import { Octicons, Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator(); // <--Crea el stackbottomNavigation

//Tabs Components
import SettingsScreen from "../screen/SettingsScreen";
import HomeScreen from "../screen/HomeScreen";

const Tabs = () => {
  return (
    <Tab.Navigator // <--Contenedor de la barra de abajo
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#B7E4C7",
        showLabel: false,
        tabBarStyle: {
          // ? <--Si quiere estilizar la barra de navegacion aqui es
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
          tabBarIcon: (
            { focused } // <-- Estos son los iconos de la barra de navegacion aqui es donde se cambian
          ) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 60,
                marginTop: 15,
              }}
            >
              {focused ? (
                <Ionicons name="ios-settings" size={35} color="#03bb85" />
              ) : (
                <Ionicons
                  name="ios-settings-outline"
                  size={35}
                  color="#435B71"
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 60,
                  marginTop: 15,
                }}
              >
                {focused ? (
                  <Ionicons name="book-outline" size={35} color="#03bb85" />
                ) : (
                  <Ionicons name="book-outline" size={35} color="#435B71" />
                )}
              </View>
            );
          },
          toBarBadge: 18,
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={LoginScreen}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 60,
                  marginTop: 15,
                }}
              >
                {focused ? (
                  <Octicons name="person-fill" size={35} color="#03bb85" />
                ) : (
                  <Octicons name="person" size={35} color="#435B71" />
                )}
              </View>
            );
          },
          headerShown: false,
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default Tabs;
