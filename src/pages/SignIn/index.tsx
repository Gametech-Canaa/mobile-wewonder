import React, { useState } from "react";
import { SafeAreaView, Text, Button, TextInput } from "react-native";

import { Container } from "./styles";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
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
    </Container>
  );
};

export default SignIn;
