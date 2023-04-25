export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "About",
    href: "about",
  },
  {
    label: "Resume",
    href: "resume",
  },
  {
    label: "Contact",
    href: "contact",
  },
];