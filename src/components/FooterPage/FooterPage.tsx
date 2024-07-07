import { DeepPartial } from "@/src/util/types";
import {
  FlowbiteFooterTheme,
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const customFooterTheme: DeepPartial<FlowbiteFooterTheme> = {
  root: {
    base: "bg-white dark:bg-gray-800 md:flex md:items-center md:justify-between",
  }
};

export default function FooterPage() {
  return (
    <Footer container theme={customFooterTheme}>
      <FooterCopyright
        href="https://flowbite-react.com/"
        by="Flowbite™"
        year={2024}
      />
      <FooterLinkGroup>
        <FooterLink href="#">Published with {"name"}</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
