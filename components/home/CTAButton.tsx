"use client";

import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

import toast, { Toaster } from "react-hot-toast";

const CTAButton = ({ locale, langName }: { locale: any; langName: string }) => {
  const clickHandler = () => {
    // toast.success("Coming soon to Google Chrome Web Store!");
  };
  return (
    <div className="flex flex-col items-center gap-2 mt-4 sm:mt-8">
      <Link
        href="https://chromewebstore.google.com/detail/%E6%85%A2%E5%90%9E%E5%90%9E-snail-timer/pielpldocfdkhhmmjokmadnbjcchfcol"
        rel="noopener noreferrer nofollow"
      >
        <Button
          variant="default"
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
          aria-label={locale.title_2}
          onClick={clickHandler}
        >
          <RocketIcon />
          {locale.title_2}
        </Button>
      </Link>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 2000 }}
      />
    </div>
  );
};

export default CTAButton;
