import React from "react";
import LogoWhite from "@components/ui/logo-white";
export default function Loader() {
  return (
    <>
      {" "}
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-100 flex-col">
        <LogoWhite />
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#262626]"></div>
      </div>
    </>
  );
}
