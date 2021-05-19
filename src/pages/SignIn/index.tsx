import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";

// import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <SafeAreaView>
      <Text>SignIn</Text>
      <Button title="Teste" onPress={() => {}}>
        {" "}
        Registrar
      </Button>
    </SafeAreaView>
  );
};

export default SignIn;
