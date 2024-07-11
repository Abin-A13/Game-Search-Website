import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";

interface Props {
  onPalformSelector: (selectedPlatform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onPalformSelector, selectedPlatform }: Props) => {
  const { data } = usePlatform();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onPalformSelector(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
