import React from 'react';
import Charger from './ChargerPin';
import History from './History';
import GoingCharge from './GoingCharge';
import styles from './CSS/sideMenuBar.module.css';

export default function SideMenuBar(props)  {
    return (
      <React.Fragment>
        <div className={styles.SideMenuBar}>
            <Charger data={props.SideMenuBar} />
            <History data={props.SideMenuBar} />
        </div>
            <GoingCharge data={props.profileInfo} />
      </React.Fragment>
    )
}
