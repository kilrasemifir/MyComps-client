import React from 'react'
import { HeaderBar } from '../layouts/HeaderBar'
import { SideBar } from '../commons/side-bar/SideBar'
import { Panel } from '../components/Panel'
import { ProfilePanel } from '../layouts/ProfilePanel'
import { Column, Row } from '../layouts/Row'
import { MedaillePanel } from '../layouts/MedaillePanel'
import { StarPanel } from '../layouts/Starpanel'

interface Props {

}

export const ProfilePage = (props: Props) => {
    return <div style={{margin:"8px"}}>
        <Column>
            <Row>
                <ProfilePanel />
                <MedaillePanel />
                <StarPanel />
                <Panel>
                    <h2>Classement</h2>
                </Panel>
            </Row>
            <Row>
                <Panel>
                    <h2>Liste des compétences</h2>
                </Panel>
            </Row>
            <Row>
                <Panel>
                    <h2>Liste des Objectifs</h2>
                </Panel>
            </Row>
            <Row>
                <Panel>
                    <h2>Liste des Classes</h2>
                </Panel>
            </Row>
            <Row>
                <Panel>
                    <h2>Liste des Joueurs mentorés</h2>
                </Panel>
            </Row>
            <Row>
                <Panel>
                    <h2>Liste des demandes de validation</h2>
                </Panel>
            </Row>
        </Column>
    </div>
}