import React from 'react';
import SearchBar from './SearchBar';
import Charger from './Charger';
import History from './History';
import styles from './CSS/sideMenuBar.module.css';

export default function SideMenuBar(props)  {
    return (
      <React.Fragment>
        <div className={styles.SideMenuBar}>
            <SearchBar data={props.SideMenuBar} />
            <Charger data={props.SideMenuBar} />
            <History data={props.SideMenuBar} />
        </div>
      </React.Fragment>
    )
}
