
import { Stack, useColorModeValue } from "@chakra-ui/react";

import MobileNavItem from "./MobileNavItem";

import { NAV_ITEMS } from "./nav-items";

export default function MobileNav() {
  const bgColor = useColorModeValue("purple.300", "purple.800");

  return (
    <Stack p={4} display={{ md: "none" }} bgColor={bgColor}>
      {NAV_ITEMS.map((navItem) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}
