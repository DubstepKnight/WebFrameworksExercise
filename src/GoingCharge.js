import React from "react";
import styles from './CSS/sideMenuBar.module.css';

export default function GoingCharge(props) {

    // console.log(props.ID);
    console.log(props.data);
    // console.log(props.info.viewport);

    
    if (props.data.username !== null) {
        return(
            <div className={styles.CodeInputAndCharging}>
                { 
                    <div className={styles.GoingCharge}>
                        <div>  </div>
                    </div>
                }
                <input className={styles.Input} placeholder={"Type code in here"} ></input>
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