import React from 'react';
import Mapbox from './Mapbox';
import SideMenuBar from './SideMenuBar';
import Profile from './Profile';
import Settings from './Settings';
import styles from './CSS/LandingPage.module.css'

export default function LandingPage(props)  {
  console.log(props)
    return (
      <React.Fragment>
        <div>
          <Mapbox popUpper={props.popUpper} />
          <SideMenuBar data={props.sideMenuData} />
        </div>
        <Profile data={props.profileData} />
      </React.Fragment>
    )
}
