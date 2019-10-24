import React from "react";
// import Popup from 'react-map-gl';
import styles from './CSS/sideMenuBar.module.css';
import logoFast from './icons/charge-station-fast.svg';
import logoSlow from './icons/charge-station-slow.svg';


export default function Charger(props) {

    // console.log(props.oneCharger);
    // console.log(Object.keys(props.oneCharger));
    function popUpClicker(event) {
        props.function(props.oneCharger)
    }

    return(
        <div className={styles.chargerMarkers}> 
            <img src={logoSlow} width="30px" height="30px" onClick={popUpClicker} />
        </div>
    )     
    

    
}