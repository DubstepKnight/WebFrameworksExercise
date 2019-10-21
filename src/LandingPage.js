import React from 'react';
import Mapbox from './Mapbox';
// import styles from './Product.module.css';
// import { Link } from 'react-router-dom';
import SideMenuBar from './SideMenuBar';
import Profile from './Profile';
import Settings from './Settings';

export default function LandingPage(props)  {
  // console.log(props)
    return (
      <React.Fragment>
        <Mapbox data={props.mapData} />
        <SideMenuBar data={props.sideMenuData} />
        <Profile data={props.profileData} />
        <Settings data={props.settingsData} />
      </React.Fragment>
    )
}
