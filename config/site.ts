import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const baseSiteConfig = {
  name: "紫微斗数 | 免费生成命盘",
  description:
    "The hottest divination methods of 2024: Chinese Astrology 2024, Destiny Studies 2024, Tarot 2024, Palmistry 2024. Here is Chinese Astrology 2024, free to generate a life chart, build a complex destiny chart system to reveal one's personality, destiny, and future trends.",
  url: "https://fate.maomaoyu.coffee",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: "/",
  keywords: [
    "different methods of divination",
    "Zi Wei Dou Shu",
    "Zi Wei Dou Shu 2024",
    "Zi Wei Dou Shu Free 2024",
  ],
  authors: [
    {
      name: "maomaoyu",
      url: "",
      twitter: "",
    },
  ],
  creator: "maomaoyu",
  openSourceURL: "",
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "dark", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    {
      name: "twitter",
      href: "https://twitter.com/maomaoyu_coffee",
      icon: BsTwitterX,
    },
    // {
    //   name: "buyMeCoffee",
    //   href: "https://www.buymeacoffee.com/weijunext",
    //   icon: SiBuymeacoffee,
    // },
  ],
  footerLinks: [
    { name: "email", href: "mailto:support@top4ai.com", icon: MdEmail },
    {
      name: "twitter",
      href: "https://twitter.com/maomaoyu_coffee",
      icon: BsTwitterX,
    },
    // { name: "github", href: "https://github.com/weijunext/", icon: BsGithub },
    // {
    //   name: "buyMeCoffee",
    //   href: "https://www.buymeacoffee.com/weijunext",
    //   icon: SiBuymeacoffee,
    // },
  ],
  footerProducts: [{ url: "https://top4ai.com/", name: "猫猫鱼 Top4AI Tools" }],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};
