import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" ml={4} />
      <Text>Gamehub</Text>
    </HStack>
  );
};

export default NavBar;
