import React from 'react'

interface Props {
    children: JSX.Element[] | JSX.Element
}

export const Row =(props:Props) => {
    return <div style={{display:"flex", flexDirection:"row", width:"100%"}}>
        {props.children}
    </div>
}

export const Column = (props:Props) => {
    return <div style={{display:"flex", flexDirection:"column", width:"100%"}}>
        {props.children}
    </div>
}