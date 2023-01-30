import React, { ReactComponentElement, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function LinkBtn({
  href,
  name,
  logo,
}: {
  href: any;
  name: string;
  logo?: ReactNode;
}) {
  const router = useRouter();
  const active: boolean = router.asPath === href;

  function handleClick(e: any) {
    e.preventDefault();
    router.push(href);
  }
  return (
    <div
      className={`py-2 px-4 hover:cursor-pointer hover:text-dark hover:bg-cyan-200 ${
        active && "bg-cyan-200"
      }`}
      onClick={handleClick}
    >
      {logo}
      {name}
    </div>
  );
}

export default LinkBtn;
