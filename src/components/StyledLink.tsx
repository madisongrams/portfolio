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
    <RouteLink to={href}>
      <Link
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
    </RouteLink>
  );
}

StyledLink.defaultProps = {
  label: "",
  color: "black",
  hoverColor: "grey.500",
};
