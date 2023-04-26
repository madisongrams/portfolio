import { GiBlackCat } from "react-icons/gi";
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
        as={GiBlackCat}
        boxSize={10}
        color={color}
        _hover={{
          color: hoverColor,
        }}
      />
    </RouteLink>
  );
}
