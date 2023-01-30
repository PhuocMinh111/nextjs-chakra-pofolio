import React, { ReactComponentElement, ReactNode } from 'react'
import Link from 'next/link'


function LinkBtn({href,name,logo}:{href:any;name:string;logo?:ReactNode}) {
  return (
    <Link className='py-2 px-4  hover:bg-cyan-200' href={href} 
     as="button">{logo}{name}</Link>
  )
}

export default LinkBtn;