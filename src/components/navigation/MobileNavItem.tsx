import { Link as RouteLink } from "react-router-dom";

import { Flex, Text, Stack, Link, useColorModeValue } from "@chakra-ui/react";

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
          <Text
            fontWeight={600}
            color={useColorModeValue("gray.600", "gray.200")}
          >
            {label}
          </Text>
        </Flex>
      </RouteLink>
    </Stack>
  );
}
