
import { Stack } from "@chakra-ui/react";

import MobileNavItem from "./MobileNavItem";

import { NAV_ITEMS } from "./nav-items";

export default function MobileNav() {
  return (
    <Stack p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}
