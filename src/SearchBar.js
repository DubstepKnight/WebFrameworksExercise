// import React from "react";
// import Geocoder from 'react-mapbox-gl-geocoder'
// // import Geocoder from 'react-map-gl-geocoder';
// import styles from './CSS/sideMenuBar.module.css';
// import './CSS/react-geocoder.css';
// import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

// export default function SearchBar(props) {

//     return(
//          <div className={styles.SearchBar}>
//             <Geocoder
//                     {...props.mapAccess} 
//                     mapboxApiAccessToken="pk.eyJ1IjoibnVyc3VsdGFuNGlrIiwiYSI6ImNrMXFvNWU0djAzNjgzY2xlaXI2bzExNWIifQ.N6l1DWxb_8JJ2TA09JCKsQ"
//                     onSelected={props.onSelected} 
//                     hideOnSelect={true}
//                     queryParams={props.queryParams}
//                     initialInputValue="Oulu"
//                     localGeocoder={}
//                 />
//         </div>
//     )
// }