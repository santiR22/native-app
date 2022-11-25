import { Center, Heading } from "native-base";

export const Header = () => {
  return (
    <Center>
      <Heading
        size="lg"
        fontWeight="600"
        color="black"
        bold
        /* _dark={{ color: "white" }} */
      >
        Bienvenido
      </Heading>
      <Heading
        mt="1"
        /* _dark={{
          color: "white",
        }} */
        color="black"
        fontWeight="medium"
        size="sm"
        bold
      >
        Inicia sesion para continuar
      </Heading>
    </Center>
  );
};
