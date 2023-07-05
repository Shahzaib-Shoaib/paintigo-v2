import React from "react";
import Footer from "@components/layout/footer/footer";
import Header from "@components/layout/header/header";
import MobileNavigation from "@components/layout/mobile-navigation/mobile-navigation";

const Layout: React.FC = ({ children, language }: any) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className="relative flex-grow"
        style={{
          minHeight: "-webkit-fill-available",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </main>{" "}
      <Footer />
      <MobileNavigation />
    </div>
  );
};
export default Layout;
