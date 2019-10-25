import React from "react";
import styles from './CSS/sideMenuBar.module.css';

export default function GoingCharge(props) {

    // console.log(props.ID);
    console.log(props);
    // console.log(props.info.viewport);

    
    if (props.data.username !== null) {
        return(
            <div className={styles.CodeInputAndCharging}>
                <input className={styles.Input} placeholder={"Type code in here"} ></input>
                <button className={styles.submitButton} onClick={props}>Charge!</button>
            </div>
        )
    } else {
        return (
            <div className={styles.GoingCharge}>
                You need to sign in in order to charge your car.
            </div>
        )
    }
    
}