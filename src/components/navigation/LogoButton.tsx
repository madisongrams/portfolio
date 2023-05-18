import LogoIcon from "../../static/LogoIcon";
import { Link as RouteLink } from "react-router-dom";

import { Icon } from "@chakra-ui/react";

type LogoButtonProps = {
  color: string;
  hoverColor: string;
};

export default function LogoButton({ color, hoverColor }: LogoButtonProps) {
  return (
    <RouteLink to="/">
      <Icon
        as={LogoIcon}
        boxSize={10}
        color={color}
        _hover={{
          color: hoverColor,
        }}
      />
    </RouteLink>
  );
}
