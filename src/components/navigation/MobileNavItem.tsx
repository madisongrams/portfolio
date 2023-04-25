import { Link as RouteLink } from "react-router-dom";

import { Flex, Text, Stack, Link } from "@chakra-ui/react";

import { NavItem } from "./nav-items";

export default function MobileNavItem({ label, href }: NavItem) {
  return (
    <Stack spacing={4}>
      <RouteLink to={href}>
        <Flex
          py={2}
          as={Link}
          href={href ?? "#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text fontWeight={600}>{label}</Text>
        </Flex>
      </RouteLink>
    </Stack>
  );
}
