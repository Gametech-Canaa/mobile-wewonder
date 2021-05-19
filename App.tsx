import * as React from "react";
import { Button, View, SafeAreaView } from "react-native";
import SignIn from "./src/pages/SignIn";
import SignUp from "./src/pages/SignUp";
import MyGroups from "./src/pages/MyGroups";
import Profile from "./src/pages/Profile";
import CreateGroups from "./src/pages/CreateGroups";
import Achivements from "./src/pages/Achivements";
import MainApp from "./src/pages/MainApp";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const App: React.FC = () => {
  const Drawer = createDrawerNavigator();

  const Stack = createBottomTabNavigator();
  const [isSigned, setIsSigned] = React.useState(false);

  return (
    <SafeAreaView>
      {isSigned ? (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={MainApp} />
            <Drawer.Screen name="Meus Grupos" component={MyGroups} />
            <Drawer.Screen name="Criar Grupos" component={CreateGroups} />
            <Drawer.Screen name="Meu Perfil" component={Profile} />
            <Drawer.Screen name="Conquistas" component={Achivements} />
          </Drawer.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" headerMode="none">
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="Register" component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
};
export default App;
