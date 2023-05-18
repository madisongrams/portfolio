import { Link as RouteLink } from "react-router-dom";

import { Flex, Stack, Heading } from "@chakra-ui/react";

import { NavItem } from "./nav-items";

export default function MobileNavItem({ label, href }: NavItem) {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={RouteLink}
        to={href}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Heading size="s">{label}</Heading>
      </Flex>
    </Stack>
  );
}
