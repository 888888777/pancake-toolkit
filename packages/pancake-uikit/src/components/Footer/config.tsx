import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Website",
        href: "https://ecoball.org/"
      },
      {
        label: "Intro",
        href: "https://docs.exabc.xyz/",
      },
      {
        label: "Contact Us",
        href: "https://docs.exabc.xyz/help-and-contact/contact-us",
      },
      {
        label: "Connect Your Wallet",
        href: "https://docs.exabc.xyz/guide-to-exabc/connect-your-wallet",
      },
      {
        label: "Help and Contact",
        href: "https://docs.exabc.xyz/help-and-contact",
        // isHighlighted: true,
      }
    ],
  },
  {
    label: "Products",
    items: [
      {
        label: "Exchange",
        href: "https://docs.exabc.xyz/products/exchange",
      },
      {
        label: "Yield Farming",
        href: "https://docs.exabc.xyz/products/yield-farming",
      },
      {
        label: "luckyball",
        href: "https://docs.exabc.xyz/products/luckyball",
      },
    ],
  },
  {
    label: "DEVELOPERS",
    items: [
      {
        label: "Github",
        href: "https://github.com/ecoballchain",
      },
      {
        label: "Documentation",
        href: "https://docs.exabc.xyz/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/EcoBallChain",
  },
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/EcoBallChain",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/EcoBallChain",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/87NSKWSZZx",
  },
  {
    label: "Medium",
    icon: "Medium",
    href: "https://medium.com/@EcoBallChain",
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://www.reddit.com/r/EcoBallChain/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
