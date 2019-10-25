import React from "react";
import Popup from "reactjs-popup";
import styles from './CSS/profile.module.css';

export default function Profile(props) {
    
    console.log(props);

    // console.log(registrationShower);

    if (props.data.username) {
        return(
            <React.Fragment>
                <div className={styles.Profile}>
                    {props.data.username}
                    <button className={styles.Button} onClick={props.Logouter}> Logout </button>
                </div>
            </React.Fragment>
        )
    } else {
        return(
            <div className={styles.Profile}>
                <Popup trigger={<button className={styles.Button}> Register </button>} position="bottom center" offsetX={-20}>
                    <div className={styles.SignUpForm}> 
                        <form onSubmit={ props.Registrator }>
                            <div className={styles.Form}>
                                Email:
                                <input type="text"
                                        placeholder="Enter your email"
                                        name="email" />
                                Password:
                                <input type="text"
                                        placeholder="Enter your password"
                                        name="password" />
                                {/* <button className={styles.Button} onClick={ cancel }>Cancel</button> */}
                                <button className={styles.Button} type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </Popup>
                <Popup trigger={<button className={styles.Button}> Login </button>} position="bottom center" offsetX={-30}>
                    <div className={styles.SignUpForm}>
                        <form onSubmit={ props.Loginer }>
                            <div className={styles.Form}>
                                Email:
                                <input type="text"
                                        placeholder="Enter your email"
                                        name="email" />
                                Password:
                                <input type="text"
                                        placeholder="Enter your password"
                                        name="password" />
                                {/* <button className={styles.Button} onClick={ cancel }>Cancel</button> */}
                                <button className={styles.Button} type="submit"> Login </button>
                            </div>
                        </form>
                    </div>
                </Popup>
            </div>
        )
    }
}