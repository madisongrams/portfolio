import { ReactNode } from "react";
import { Link as RouteLink } from "react-router-dom";

import { Link } from "@chakra-ui/react";

type StyledLinkProps = {
  label?: string;
  href: string;
  children?: ReactNode;
  color?: string;
  hoverColor?: string;
};

export default function StyledLink({
  label,
  href,
  children,
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
        {children || label}
      </Link>
    </RouteLink>
  );
}

StyledLink.defaultProps = {
  label: "",
  children: null,
  color: "black",
  hoverColor: "grey.500",
};
