import { useState } from "react";
import { LatLng } from 'leaflet';

const useLocationPoint = () =>{

    //Esto no me gusta
    const [location, setLocation] = useState<LatLng[]>([
        new LatLng(51.505, -0.10),
        new LatLng(51.510, -0.15),
        new LatLng(51.520, -0.09),
        new LatLng(51.527, -0.13),
        new LatLng(51.531, -0.11),
        new LatLng(51.550, -0.40),
        new LatLng(51.570, -0.23),
        new LatLng(51.503, -0.27),
        new LatLng(51.500, -0.35),
        new LatLng(51.507, -0.00),
        new LatLng(51.509, -0.09),
        new LatLng(51.513, -0.11),
        new LatLng(51.542, -0.15),
        new LatLng(51.533, -0.17),
        new LatLng(51.527, -0.54),
        new LatLng(51.565, -0.35),
        new LatLng(51.528, -0.27),
        new LatLng(51.529, -0.29),
        new LatLng(51.531, -0.07),
        new LatLng(51.533, -0.40),
    ])

    return {location};
}

export default useLocationPoint;