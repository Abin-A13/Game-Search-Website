import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";
import SearchBar from "./SearchInput";


interface Props{
  onSearch:(searchText:string)=>void
}

const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding="10px">
      <Image boxSize="30px" src={logo} />
      <SearchBar onSearch={onSearch}/>
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
