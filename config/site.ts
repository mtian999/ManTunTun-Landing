import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const baseSiteConfig = {
  name: "Snail Timer: Boost Focus with This Lightweight & Automated Google Chrome Extension",
  description:
    "The most popular efficiency tool in 2025: Snail Timer 2025, time management 2025, Chrome extension 2025, productivity tool 2025. Snail Timer 2025 is a free Chrome extension that helps you improve work efficiency and develop good online habits. It's very Convenient and Ready to use.",
  url: "https://snailtimer.top4ai.com",
  ogImage: "/logo.png",
  metadataBase: "/",
  keywords: [
    "Snail Timer extension, Snail Timer 2025, focus enhancement tool, Chrome extension online, time management tool, Snail Timer free, efficiency tool, Ready to use, Lightweight, Automated",
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
