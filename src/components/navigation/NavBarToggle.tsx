import { Flex, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

type NavBarToggleProps = {
  onToggle: () => void;
  isOpen: boolean;
};

export default function NavBarToggle({ onToggle, isOpen }: NavBarToggleProps) {
  return (
    <Flex
      flex={{ base: 1, md: "auto" }}
      ml={{ base: -2 }}
      display={{ base: "flex", md: "none" }}
      align={"center"}
    >
      <IconButton
        onClick={onToggle}
        icon={
          isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
        }
        variant={"ghost"}
        aria-label={"Toggle Navigation"}
      />
    </Flex>
  );
}
