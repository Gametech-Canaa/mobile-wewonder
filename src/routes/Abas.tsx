import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MainApp from "../pages/MainApp";
import CreateGroups from "../pages/CreateGroups";

const { Navigator, Screen } = createBottomTabNavigator();

function Abas() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#EBEBF5",
        inactiveTintColor: "#C1BCCC",
        activeTintColor: "#32264D",
      }}
    >
      <Screen
        name="TeacherList"
        component={MainApp}
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-easel"
                size={size}
                color={focused ? "#8257E5" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Favorites"
        component={CreateGroups}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-heart"
                size={size}
                color={focused ? "#8257E5" : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default Abas;
