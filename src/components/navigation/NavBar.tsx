import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { GiBlackCat } from "react-icons/gi";
import { Link as RouteLink } from "react-router-dom";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import ColorModeSwitcher from "../ColorModeSwitcher";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const color = useColorModeValue("purple.600", "purple.100");
  const hoverColor = useColorModeValue("purple.800", "purple.300");

  return (
    <Box position="sticky" top="0px" w="100%" zIndex="200">
      <Flex
        color={color}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={color}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          align={"center"}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <RouteLink to="/">
            <Icon
              as={GiBlackCat}
              boxSize={10}
              color={color}
              _hover={{
                color: hoverColor,
              }}
            />
          </RouteLink>

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
