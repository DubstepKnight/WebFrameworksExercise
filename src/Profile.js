import React from "react";
import Login from './Login';
import Logout from './Logout';
import Register from './Register';
import styles from './CSS/profile.module.css';

export default function Profile(props) {
    console.log(props.data.username);
    if (props.login) {
        return(
            <div className={styles.Profile}>
                {props.data.username}
                <Logout />
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