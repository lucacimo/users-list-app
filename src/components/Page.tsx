import React from "react";
import LanguageSelector from "./LanguageSelector.tsx";

interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto mt-8">
      <LanguageSelector />
      {children}
    </div>
  );
};

export default Page;
