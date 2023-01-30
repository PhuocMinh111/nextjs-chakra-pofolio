import React from "react";
import Image from "next/image";
import dog from "../public/dog-paw.png";
import FootprintIcon from "./icons/footPrint";
function Logo() {
  return (
    <div className="text-md cursor-pointer font-bold sm:text-lg">
      <FootprintIcon />
      Phuoc Minh
    </div>
  );
}

export default Logo;
