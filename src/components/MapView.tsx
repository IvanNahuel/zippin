import {  MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import useTruckDriver, { driverProps } from "../hook/useTruckDriver";
import useLocationPoint from "../hook/useLocationsPoint";
import { useEffect, useState } from "react";

type assignedLocationProps = {
    id: number,
    driver?: driverProps,
    location: LatLng
}


export const MapView = () =>{
    const position = new LatLng(51.505, -0.09);
    const {driver} = useTruckDriver();
    const {location} = useLocationPoint();
    const [assignedLocations, setAssignedLocations] = useState<assignedLocationProps[]>();
    const [selectedPoint, setSelectedPoint] = useState<number>(0);
    const [showPanel, setShowPanel] = useState<boolean>(true);
   
    const onHandleMarker = (element: assignedLocationProps) =>{
        setSelectedPoint(element.id);
    }

    const onHandleDriver = (d: driverProps) =>{
        let modifiedLoc = assignedLocations?.map((assignedLoc: assignedLocationProps)=>{
            if(assignedLoc.id == selectedPoint){
                return {
                    ...assignedLoc,
                    driver: d
                }
            }
            return assignedLoc
        })
        setAssignedLocations(modifiedLoc);
    }

    useEffect(()=>{
        if(location){
            let aux = location.map((element: LatLng, index: number)=>{
                return{
                    id: index,
                    driver: {
                        color: 'grey'
                    },
                    location: element
                } as assignedLocationProps;
            })
            setAssignedLocations(aux);
        }
    },[])

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>           
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                showPanel && 
                <div className="nav-panel">
                    {
                       driver.map((d: driverProps)=>{
                        return <div className="" onClick={ () => onHandleDriver(d)}>
                            <h1 style={{color: d.color}}>
                                {d.name} 
                            </h1>                          
                        </div>
                       }) 
                    }
                </div>
            }
            {
                assignedLocations && assignedLocations.map((element: assignedLocationProps)=>{
                    const markerIcon = L.icon({
                        iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${element.driver?.color}.png`,
                        iconSize: [35,35]
                    }) 
                    return <Marker 
                        position={ element.location} 
                        icon={markerIcon}
                        eventHandlers={{
                            click: () => onHandleMarker(element)
                        }}
                        >         
                    </Marker>
                })
            }  
      </MapContainer>
    )
}
