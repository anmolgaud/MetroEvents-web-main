import React from "react";
import { useSelector } from "react-redux";
const Footer = () => {
  const { DarkMode } = useSelector((store) => store.siteTheme);
  return (
    <div className="w-full flex justify-center items-center p-8">
      <p
        className={`${
          DarkMode ? "text-gray-100" : "text-gray-900"
        } text-sm font-light`}
      >
        {" "}
        Created by{" "}
        <a
          href="https://github.com/anmolgaud"
          className="text-blue-500 italic underline font-light"
        >
          Anmol Gaud
        </a>
      </p>
    </div>
  );
};

export default Footer;
