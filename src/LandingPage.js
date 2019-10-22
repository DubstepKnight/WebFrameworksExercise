import React from 'react';
import Mapbox from './Mapbox';
import SideMenuBar from './SideMenuBar';
import Profile from './Profile';
import Settings from './Settings';
import styles from './CSS/LandingPage.module.css'

export default function LandingPage(props)  {
  // console.log(props)
    return (
      <React.Fragment>
        <div>
          <Mapbox data={props.mapData} />
          <SideMenuBar data={props.sideMenuData} />
        </div>
        <Profile data={props.profileData} />
        <Settings data={props.settingsData} />
        <div className={styles.iconsCredits}>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
      </React.Fragment>
    )
}
