import React from "react";
import Popup from "reactjs-popup";
import styles from './CSS/profile.module.css';

export default function Profile(props) {
    
    console.log(props.profileInfo);

    function register(event){
        event.preventDefault();
        props.Registrator(
            event.target['email'].value,
            event.target['password'].value
        )
    }

    function login(event){
        event.preventDefault();
        props.Loginer(
          event.target['email'].value,
          event.target['password'].value
        )
    }

    // console.log(registrationShower);

    if (props.profileInfo.email) {
        return(
            <React.Fragment>
                <div className={styles.Profile}>
                    {props.data.email}
                    <button className={styles.Button} onClick={props.Logouter}> Logout </button>
                </div>
            </React.Fragment>
        )
    } else {
        return(
            <div className={styles.Profile}>
                <Popup trigger={<button className={styles.Button}> Register </button>} position="bottom center" offsetX={-20}>
                    <div className={styles.SignUpForm}> 
                        <form onSubmit={ register }>
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
                        <form onSubmit={ login }>
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