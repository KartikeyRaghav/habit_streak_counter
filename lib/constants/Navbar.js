import {
  IconPlus,
  IconHome,
  IconLogin,
} from "@tabler/icons-react";

export const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Add",
    icon: (
      <IconPlus className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/add",
  },
  {
    title: "Login",
    icon: (
      <IconLogin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/auth",
  },
];
