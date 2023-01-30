import React from "react";

function Footer() {
  return (
    <div
      className="bg-primaryLight pt-4 font-light font-md sm:font-lg min-h-[100px] dark:text-primaryLight text-center
   dark:bg-dark"
    >
      © {new Date().getFullYear()} Phuoc Minh. All Rights Reserved.
    </div>
  );
}

export default Footer;
