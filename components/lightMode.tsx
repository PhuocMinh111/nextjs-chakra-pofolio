import React ,{ useState} from 'react'
import { UseContext } from '@/context/context';


function LightMode() {

  const {lightMode,setDarkMode,setLightMode} = UseContext();
  
    return (
    <div>
        <button onClick={setDarkMode}>dark</button>
    </div>
  )
}

export default LightMode