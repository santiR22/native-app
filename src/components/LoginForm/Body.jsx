import {
  Button,
  FormControl,
  Input,
  Link,
  Text,
  View,
  WarningOutlineIcon,
} from "native-base";
import { useState } from "react";

export const Body = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState(null);
  const [passError, setPassError] = useState(null);
  const data = [];
  

  const validate = () => {
    let userErrorMsg = null;
    let passErrorMsg = null;

    if (user.length === 0) {
      userErrorMsg = "el usuario es requerido";
    } else if (user.length < 4) {
      userErrorMsg = "el usuario es muy corto";
    }
    if (password.length === 0) {
      passErrorMsg = "la contraseña es requerida";
    } else if (password.length < 4) {
      passErrorMsg = "la contraseña es demasiado corta";
    }

    if (!userErrorMsg && !passErrorMsg) {
      data.unshift({
        user: user,
        password: password,
      });
    }
    console.log(data);
    setUserError(userErrorMsg);
    setPassError(passErrorMsg);
  };

  return (
    <>
      <FormControl>
        <FormControl.Label
          _text={{ color: "black", bold: "true", fontSize: "md" }}
        >
          Username
        </FormControl.Label>
        <Input
          isRequired="true"
          type="text"
          borderColor="black"
          borderWidth={4}
          bgColor="white"
          variant="rounded"
          _focus={{ borderColor: "blue.700" }}
          onChangeText={setUser}
        />
        <FormControl.ErrorMessage
          isInvalid
          leftIcon={<WarningOutlineIcon size="xs" />}
        >
          {userError}
        </FormControl.ErrorMessage>
        <FormControl.Label
          _text={{ color: "black", bold: "true", fontSize: "md" }}
        >
          Password
        </FormControl.Label>
        <Input
          isRequired="true"
          variant="rounded"
          borderColor="black"
          bgColor="white"
          type="password"
          borderWidth={4}
          _focus={{
            borderColor: "blue.700",
          }}
          onChangeText={setPassword}
        />
        <FormControl.ErrorMessage
          isInvalid
          leftIcon={<WarningOutlineIcon size="xs" />}
        >
          {passError}
        </FormControl.ErrorMessage>
        <Link
          _text={{
            fontSize: "md",
            fontWeight: "500",
            color: "blue.800",
            bold: "true",
          }}
          alignSelf="flex-end"
          mt="1"
        >
          Forget Password?
        </Link>
        <Button
          mt="2"
          colorScheme="success"
          borderRadius={50}
          _text={{
            bold: "true",
            fontSize: "md",
          }}
          onPress={validate}
        >
          Iniciar sesion
        </Button>
      </FormControl>
    </>
  );
};
