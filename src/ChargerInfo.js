import React from "react";
import styles from './CSS/sideMenuBar.module.css';

export default function ChargerInfo(props) {

    // console.log(props.ID);
    // console.log(props);
    // console.log(props.info.viewport);

    return(
        <div className={styles.ChargerInformation}>
            <div> Address: {props.AddressLine1} </div> 
            <div className={styles.Code}> Code: {props.Code} </div>  
            <div> Type: {props.Type} </div> 
            { 
                props.Status === "Free" 
                ? <div> Status: <span className={styles.StatusFree}> {props.Status} </span>  </div> 
                : <div> Status: <span className={styles.StatusFree}> {props.Status} </span>  </div>  
            }
        </div>
    )
    
}