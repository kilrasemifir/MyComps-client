import React from 'react'

interface Props {
    onClick:()=>void,
    width:string,
    height:string
}

export const MinimizeButton = (props:Props) => {
    return <svg width={props.width} height={props.height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.onClick}>
        <rect x="2.5" y="2.5" width="95" height="95" rx="2.5" fill="#353535" stroke="#777777" stroke-width="5" stroke-linejoin="round"/>
        <path d="M50 90L10 50L50 10" stroke="#777777" stroke-width="5"/>
        <path d="M92 90L52 50L92 10" stroke="#777777" stroke-width="5"/>
    </svg>
    
}