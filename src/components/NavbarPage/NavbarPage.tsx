import { DeepPartial } from "@/src/util/types";
import {
  FlowbiteNavbarTheme,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const customNavbarTheme: DeepPartial<FlowbiteNavbarTheme> = {
  root: {
    base: "p-4 dark:bg-gray-800 md:flex md:items-center md:justify-between",
  },
};

export default function NavbarPage() {
  return (
    <Navbar theme={customNavbarTheme} rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <Image
          src="/assets/next.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
          width={80}
          height={80}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} href="/">
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/sandbox">
          Sandbox
        </NavbarLink>
        <NavbarLink as={Link} href="/about">
          About
        </NavbarLink>
        <NavbarLink href="/#services">Services</NavbarLink>
        <NavbarLink href="/#pricing">Pricing</NavbarLink>
        <NavbarLink href="/#contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}