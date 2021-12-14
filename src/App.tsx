import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProfilePage } from './pages/ProfilePage';
import { Panel } from './components/Panel';
import { HeaderBar } from './layouts/HeaderBar';
import { SideBar } from './commons/side-bar/SideBar';
import { Row } from './layouts/Row';

function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <div className='main-container'>
        <Row>
          <SideBar/>
          <ProfilePage/>
        </Row>
      </div>
    </div>
  );
}

export default App;
