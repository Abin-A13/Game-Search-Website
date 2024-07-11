import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image boxSize="30px" src={logo} />
      <Text>Navbar</Text>
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
