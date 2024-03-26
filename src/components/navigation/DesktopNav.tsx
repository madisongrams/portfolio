import { Box, Stack } from "@chakra-ui/react";

import { NAV_ITEMS } from "./nav-items";
import StyledLink from "../StyledLink";

type DesktopNavProps = {
  color?: string;
  hoverColor?: string;
  bgHoverColor?: string;
};

export default function DesktopNav({ color, bgHoverColor }: DesktopNavProps) {
  return (
    <Stack direction={"row"} spacing={10}>
      {NAV_ITEMS.map((navItem) => (
        <Box
          key={navItem.label}
          _hover={{ background: bgHoverColor, borderRadius: "4px" }}
          transition="all .5s ease-in-out"
          padding="5px"
        >
          <StyledLink
            label={navItem.label}
            href={navItem.href ?? "#"}
            color={color}
            hoverColor={color}
          />
        </Box>
      ))}
    </Stack>
  );
}

DesktopNav.defaultProps = {
  color: "black",
  hoverColor: "grey.500",
  bgHoverColor: "grey.500",
};
