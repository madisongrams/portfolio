import { Box, Stack } from "@chakra-ui/react";

import StyledLink from "../StyledLink";

import { NAV_ITEMS } from "./nav-items";

type DesktopNavProps = {
  color?: string;
  hoverColor?: string;
};

export default function DesktopNav({ color, hoverColor }: DesktopNavProps) {
  return (
    <Stack direction={"row"} spacing={10}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <StyledLink
            label={navItem.label}
            href={navItem.href ?? "#"}
            color={color}
            hoverColor={hoverColor}
          />
        </Box>
      ))}
    </Stack>
  );
}

DesktopNav.defaultProps = {
  color: "black",
  hoverColor: "grey.500",
};
