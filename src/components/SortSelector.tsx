import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        sort by relavent
      </MenuButton>
      <MenuList>
        <MenuItem>Date</MenuItem>
        <MenuItem>time</MenuItem>
        <MenuItem>cart</MenuItem>
        <MenuItem>FF</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
