import React from "react";
import styles from './CSS/profile.module.css';
import ExitIcon from './icons/icons8-exit.svg';

export default function Login(props) {
    return(
        <div>
            <button className={styles.Button} onClick={props.logOut}>
                Logout
            </button>
        </div>
    )
}