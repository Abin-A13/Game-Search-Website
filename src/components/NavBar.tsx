import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image boxSize="30px" src={logo} />
      <Text>Navbar</Text>
      <SearchBar/>
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
