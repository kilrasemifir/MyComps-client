import React from 'react'
import { Panel } from '../components/Panel'
import "./profile.css"
import { Column, Row } from './Row'
interface Props {

}

export const ProfilePanel = (props: Props) => {
    return <Panel>
        <Row>
            <img src="https://img.le-dictionnaire.com/chaton-tigre.jpg" className='center-cropped' />
            <Column>
                <h2>Killian Raoux</h2>
                <h3>Niveau 4</h3>

            </Column>
        </Row>
    </Panel>
}