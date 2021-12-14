import React from 'react'
import { Panel } from '../components/Panel'
import { DiamantLogo, MaterielLogo, StarLogo } from '../libs/Logos'
import { MaterialType } from '../types/materiel'
import { Column, Row } from './Row'

interface Props {

}

export const StarPanel = (props: Props) => {
    return <Row>
        <StarPanelSection materiel='bronze' nombre={64} />
        <StarPanelSection materiel='argent' nombre={50} />
        <StarPanelSection materiel='or' nombre={20} />
        <StarPanelSection materiel='diamant' nombre={5} />
    </Row>
}

interface SectionProps {
    materiel: MaterialType,
    nombre: number
}

const StarPanelSection = (props: SectionProps) => {
    return <Panel>
        <Column>
            <MaterielLogo material={props.materiel} />
            <h2>{props.nombre}</h2>
        </Column>
    </Panel>
}