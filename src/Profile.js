import React from "react";
import Login from './Login';
import Register from './Register';
import styles from './CSS/profile.module.css';

export default function Profile(props) {
    if (props.login) {
        return(
            <div className={styles.Profile}>
                {props.username}
            </div>
        )
    } else {
        return(
            <div className={styles.Profile}>
                <Register />
                <Login />
            </div>
        )
    }
}