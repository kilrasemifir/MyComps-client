import React, { CSSProperties } from 'react'

interface Props {
    children: JSX.Element | JSX.Element[],
    style?:CSSProperties
}

export const Panel = (props:Props) => {

    return <div className='panel-bg' style={{width:"100%", margin:"1px", ...props.style}}>
        {props.children}
    </div>
}