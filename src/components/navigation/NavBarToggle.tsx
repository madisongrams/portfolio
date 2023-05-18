import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

type NavBarToggleProps = {
  onToggle: () => void;
  isOpen: boolean;
};

export default function NavBarToggle({ onToggle, isOpen }: NavBarToggleProps) {
  return (
    <IconButton
      colorScheme="purple"
      onClick={onToggle}
      icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
      variant={"ghost"}
      size="md"
      marginLeft="-2"
      display={{ md: "none" }}
      justifySelf={"flex-start"}
      aria-label={"Toggle Navigation"}
    />
  );
}
