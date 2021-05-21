import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

// import { Container } from './styles';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>SignIn</Text>
      <TextInput onChangeText={setEmail} value={email} placeholder="Email" />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Senha"
      />
      <Button title="" onPress={() => {}}>
        ENTRAR
      </Button>
    </View>
  );
};

export default SignUp;
