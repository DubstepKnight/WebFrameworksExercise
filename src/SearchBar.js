import React from "react";
import Geocoder from 'react-mapbox-gl-geocoder'
import styles from './CSS/sideMenuBar.module.css';

export default function SearchBar(props) {
    return(
         <div className={styles.SearchBar}>
            <Geocoder
                    {...props.mapAccess} 
                    onSelected={props.onSelected} 
                    viewport={props.viewport} 
                    hideOnSelect={true}
                    queryParams={props.queryParams}
                    mapboxApiAccessToken="pk.eyJ1IjoibnVyc3VsdGFuNGlrIiwiYSI6ImNrMXFvNWU0djAzNjgzY2xlaXI2bzExNWIifQ.N6l1DWxb_8JJ2TA09JCKsQ"
                    
                />
        </div>
    )
}