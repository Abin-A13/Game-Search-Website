import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons";

interface Props {
  paltform: Platform[];
}

const IconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  xbox: FaXbox,
  playstation: FaPlaystation,
  mac: FaApple,
  linux: FaLinux,
  nintendo: SiNintendo,
  andriod: FaAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe,
};

const PlatformIconList = ({ paltform }: Props) => {
  return (
    <HStack marginY={1}>
      {paltform.map((p) => (
        <Icon key={p.id} as={IconMap[p.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
