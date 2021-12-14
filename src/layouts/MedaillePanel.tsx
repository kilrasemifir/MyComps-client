import React from 'react'
import { Panel } from '../components/Panel'
import { Medaille } from '../libs/medailles'
import { Row } from './Row'

interface Props {

}

export const MedaillePanel = (props: Props) => {
    return <Row>
        <MedailleSection materiel="or" nombre={10} />
        <MedailleSection materiel="argent" nombre={20} />
        <MedailleSection materiel="bronze" nombre={5} />
    </Row>

}

interface SectionProps {
    materiel: "or" | "argent" | "bronze",
    nombre: number
}

const MedailleSection = (props: SectionProps) => {
    return <Panel style={{ width: "100%", paddingLeft: "10px", paddingRight: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <Medaille materiel={props.materiel} />
        <h2>{props.nombre}</h2>
    </Panel>
}