import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import StudyTabs from "./Abas";

const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.screen name="Landing" component={SignIn} />
        <Stack.Screen name="GiveClasses" component={SignUp} />
        <Stack.Screen name="Study" component={StudyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
