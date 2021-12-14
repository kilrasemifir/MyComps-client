import React from 'react'
import { MaterialType } from '../types/materiel'

export const DiamantLogo = () => {
    return <svg width="100%" height="100%" viewBox="0 0 160 123" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M130 0H80L118.5 40L130 0Z" fill="#AFF8F3" />
        <path d="M30 0H80L41.5 40L30 0Z" fill="#AFF8F3" />
        <path d="M118.5 40H41.5L80 0L118.5 40Z" fill="#D6F4F3" />
        <path d="M130 0L118.5 40H160L130 0Z" fill="#D6F4F2" />
        <path d="M30 0L41.5 40H0L30 0Z" fill="#87EBE5" />
        <path d="M80 123L41.5 40H118.5L80 123Z" fill="#87EBE5" />
        <path d="M160 40L80 123L118.5 40H160Z" fill="#AFF8F3" />
        <path d="M41.5 40L80 123L0 40H41.5Z" fill="#80D9D3" />
    </svg>

}

const colors:any = {
    or:    ["#FFD700", "#FFE13D", "#DDBB02", "#FFD700"],
    argent:["#D5F0F6", "#B8E7F2", "#A4CED8", "#D5F0F6"],
    bronze:["#E68328", "#FF7A00", "#C36813", "#E58328"]
}

interface Props {
    material: MaterialType
}
export const StarLogo = (props:Props) => {
    return <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 25.0055V0.00738525L63.5 32.005L50 50.0037V25.0055Z" fill={colors[props.material][0]} />
        <path d="M73.5 42.5042L50 50.0037L63.5 32.005L97.5 34.5048L73.5 42.5042Z" fill={colors[props.material][1]} />
        <path d="M50 0.0074002V25.0056V50.0037L36.5 32.005C41 21.5058 50 0.407371 50 0.0074002Z" fill={colors[props.material][2]} />
        <path d="M26.5 42.5042C26.5 42.9042 10.5 37.3379 2.5 34.5048L36.5 32.005L50 50.0037L26.5 42.5042Z" fill={colors[props.material][1]} />
        <path d="M26.5 42.5042L2.5 34.5048L28.5 57.0032C29.1667 57.0032 50 50.0037 50 50.0037C50.4 50.0037 26.5 42.5042 26.5 42.5042Z" fill={colors[props.material][2]} />
        <path d="M50 50.0037L71.5 57.0032L97.5 34.5048L50 50.0037Z" fill={colors[props.material][2]} />
        <path d="M64.5 70.0022L79.5 90.5007L71.5 57.0032L50 50.0037L64.5 70.0022Z" fill={colors[props.material][1]} />
        <path d="M50 70.0022V72.5021L79.5 90.5007L50 50.0037V70.0022Z" fill={colors[props.material][2]} />
        <path d="M35.5 70.0022L20.5 90.5007L50 72.5021V50.0037L35.5 70.0022Z" fill={colors[props.material][3]} />
        <path d="M50 50.0037L28.5 57.0032C25.8333 68.0024 20.5 90.1008 20.5 90.5007C20.5 91.0007 35.5 70.0022 35.5 70.0022L50 50.0037Z" fill={colors[props.material][2]} />
    </svg>

}

export const MaterielLogo = (props:Props) =>{
    return props.material === "diamant"? <DiamantLogo/>:<StarLogo material={props.material}/>
}