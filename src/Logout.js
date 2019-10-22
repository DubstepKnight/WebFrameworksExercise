import React from "react";
import styles from './CSS/profile.module.css';
import ExitIcon from './icons/icons8-exit.svg';

export default function Login(props) {
    return(
        <div>
            <img className={styles.exitLogo} src={ExitIcon} width="30px" height="35px" />
        </div>
    )
}