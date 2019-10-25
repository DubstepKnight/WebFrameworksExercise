import React from 'react';
import Mapbox from './Mapbox';
import SideMenuBar from './SideMenuBar';
import Profile from './Profile';
import styles from './CSS/LandingPage.module.css'

export default function LandingPage(props)  {
  console.log(props)
    return (
      <React.Fragment>
        <div>
          <Mapbox popUpper={props.popUpper} />
          <SideMenuBar data={props.sideMenuData}
                       profileInfo={props.profileData} 
                       OngoingCharge={props.OngoingCharge}
                       OnChargeStateChanger={props.OnChargeStateChanger} />
        </div>
        <Profile data={props.profileData} 
                 Loginer={props.Loginer}
                 Logouter={props.Logouter}
                 Registrator={props.Registrator}/>
      </React.Fragment>
    )
}
