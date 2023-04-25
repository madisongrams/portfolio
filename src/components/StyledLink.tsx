import { ReactNode } from "react";
import { Link as RouteLink } from "react-router-dom";

import { Link, useColorModeValue } from "@chakra-ui/react";

type StyledLinkProps = { label?: string; href: string; children?: ReactNode };

export default function StyledLink({ label, href, children }: StyledLinkProps) {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <RouteLink to={href}>
      <Link
        p={2}
        href={href ?? "#"}
        fontSize={"sm"}
        fontWeight={500}
        color={linkColor}
        _hover={{
          textDecoration: "none",
          color: linkHoverColor,
        }}
      >
        {children || label}
      </Link>
    </RouteLink>
  );
}

StyledLink.defaultProps = {
  label: "",
  children: null,
};
