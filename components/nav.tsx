import React, { useContext } from "react";
import LightMode from "./lightMode";
import Link from "next/link";
import Logo from "./logo";
import { BsGithub } from "react-icons/bs";
import LinkBtn from "./linkButton";
import { UseContext } from "@/context/context";

function Nav({ path }: any) {
  const { lightMode } = UseContext();
  return (
    <div
      className={`w-full min-h-[70px] bg-primaryLight dark:bg-slate-900 dark:text-secondLight flex sm:px-10`}
    >
      <div className="mx-auto flex items-center px-5 justify-between sm:justify-center gap-5 sm:py-5 w-full sm:max-w-[1000px] ">
        <div className="logo">
          <Logo />
        </div>
        <div className="menu hidden sm:flex font-light gap-5">
          <LinkBtn href={"/techs"} name="Techs"></LinkBtn>
          <LinkBtn href={"/chat"} name="Chat"></LinkBtn>
          <LinkBtn href={"/contact"} name="Contact"></LinkBtn>
          <LinkBtn
            href="/abc"
            name="Sources"
            logo={<BsGithub className="inline mr-2" />}
          />
        </div>
        <div>
          <div className="lightMode ">
            <LightMode />
          </div>
          <div className="side-menu hidden sm:show"></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
