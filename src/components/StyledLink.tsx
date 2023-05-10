import { Link as RouteLink } from "react-router-dom";

import { Heading, Link } from "@chakra-ui/react";

type StyledLinkProps = {
  label?: string;
  href: string;
  color?: string;
  hoverColor?: string;
};

export default function StyledLink({
  label,
  href,
  color,
  hoverColor,
}: StyledLinkProps) {
  return (
    <Link
      as={RouteLink}
      to={href}
      href={href ?? "#"}
      fontSize={"lg"}
      fontWeight={500}
      color={color}
      _hover={{
        textDecoration: "none",
        color: hoverColor,
      }}
    >
      <Heading size="s">{label}</Heading>
    </Link>
  );
}

StyledLink.defaultProps = {
  label: "",
  color: "black",
  hoverColor: "grey.500",
};
