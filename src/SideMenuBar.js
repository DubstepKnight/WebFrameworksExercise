import React from 'react';
import Charger from './ChargerPin';
import History from './History';
import OngoingCharge from './OngoingCharge';
import styles from './CSS/sideMenuBar.module.css';

export default function SideMenuBar(props)  {
    return (
      <React.Fragment>
        <div className={styles.SideMenuBar}>
            <Charger data={props.SideMenuBar} />
            <History data={props.SideMenuBar} />
        </div>
            <OngoingCharge data={props.profileInfo} 
                           OnChargeStateChanger={props.OnChargeStateChanger} />
      </React.Fragment>
    )
}
