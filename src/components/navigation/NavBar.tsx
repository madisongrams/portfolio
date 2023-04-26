import {
  Box,
  Flex,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ColorModeSwitcher from "./ColorModeSwitcher";
import NavBarToggle from "./NavBarToggle";
import LogoButton from "./LogoButton";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const color = useColorModeValue("purple.600", "purple.100");
  const hoverColor = useColorModeValue("purple.800", "purple.300");
  const bgColor = useColorModeValue("purple.100", "purple.900");

  return (
    <Box position="sticky" top="0px" w="100%" zIndex="999" bg={bgColor}>
      <Flex
        color={color}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={color}
        align={"center"}
      >
        <NavBarToggle isOpen={isOpen} onToggle={onToggle} />
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <LogoButton color={color} hoverColor={hoverColor} />

          <Flex display={{ base: "none", md: "flex" }} ml={10} align={"center"}>
            <DesktopNav color={color} hoverColor={hoverColor} />
          </Flex>
        </Flex>
        <ColorModeSwitcher />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
