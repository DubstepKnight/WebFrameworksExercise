import React from "react";
import styles from './CSS/sideMenuBar.module.css';
import logoFast from './icons/charge-station-fast.svg';
import logoSlow from './icons/charge-station-slow.svg';


export default function Charger(props) {
    console.log(props);

    if (props.Type === "Slow") {
        return(
            <div className={styles.chargerMarkers}>
                <img src={logoSlow} width="30px" height="30px" />
            </div>
        )     
    } else {
        return(
            <div className={styles.chargerMarkers}> 
                <img src={logoFast} width="30px" height="30px" />
            </div>
        )     
    }
    

    
}