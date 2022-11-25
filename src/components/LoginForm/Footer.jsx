import { Button, HStack, Link, Text } from "native-base";
import { Register } from "../../screens/Register";

export const Footer = () => {
  return (
    <>
      <HStack mt="6" justifyContent="center">
        <Text
          fontSize="md"
          color="black"
          bold
        >
          I'm a new user.{" "}
        </Text>
        <Link
          _text={{
            color: "blue.800",
            fontWeight: "medium",
            fontSize: "md",
            bold: "true"
          }}
          href={`${Register}`}
        >
          Sign Up
        </Link>
      </HStack>
    </>
  );
};
