import {
  Box,
  Stack,
  Popover,
  PopoverTrigger,
  useColorModeValue,
} from "@chakra-ui/react";
import { NAV_ITEMS } from "./nav-items";
import StyledLink from '../StyledLink';

export default function DesktopNav() {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <StyledLink label={navItem.label} href={navItem.href ?? "#"} />
            </PopoverTrigger>

            {/* {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )} */}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};