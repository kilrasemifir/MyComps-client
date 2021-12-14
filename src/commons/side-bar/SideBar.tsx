import React, { useState } from 'react'
import { MinimizeButton } from '../../libs/buttons/MinimizeButton';
import "./Sidebar.css"
interface Props {

}

export const SideBar = (props:Props) => {

    const [visible, setVisible] = useState(true)

    const size = visible ? "15vw" : "50px";

    return <div className='panel-bg side-bar' style={{width:size, display:"flex", justifyContent:"center"}}>
        <MinimizeButton onClick={()=>setVisible(!visible)} width='50px' height='50px'></MinimizeButton>
    </div>
}