import React from 'react'
import LightMode from './lightMode';
import Link from 'next/link';
import Logo from './logo';
import {BsGithub} from "react-icons/bs"
import LinkBtn from './button';
function Nav() {
  return (
    <div className='w-full min-h-[70px] bg-primaryLight flex sm:px-10'>
        <div className="mx-auto flex items-center px-5 justify-between sm:justify-center gap-5 sm:py-5 w-full sm:max-w-[1000px] ">
            <div className="logo">
                <Logo/>
            </div>
            <div className="menu hidden sm:flex font-light gap-5">
                <LinkBtn href={"/"} name="Techs"></LinkBtn>
                <LinkBtn href={"/"} name="Chat"></LinkBtn>
                <LinkBtn href={"/"} name="Contact"></LinkBtn>
                <LinkBtn href="/" name="Sources" logo={<BsGithub className='inline mr-2'/>}/>
            </div>
            <div>

            <div className="lightMode ">
                <LightMode/>
            </div>
            <div className="side-menu hi "></div>
            </div>
        </div>
    </div>
  )
}

export default Nav;