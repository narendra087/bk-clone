import React, { useMemo, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

import { LocationType } from '../types/global';

import marker from '../images/marker.png'

interface ComponentProps {
  onChange?: (location: LocationType) => void
}

const L = require('leaflet')
const center:LocationType = {
  lat: -7.257472,
  lng: 112.752090,
}

const MapComponent = ({ onChange }:ComponentProps) => {
  const [position, setPosition] = useState(center)
  const myMarker = new L.icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor:  [-0, -0],
    iconSize: [90,90], 
  })
  const markerRef = useRef<any>(null)
  
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker !== null) {
          setPosition(marker.getLatLng())
          if (onChange !== undefined) {
            onChange(marker.getLatLng())
          }
        }
      },
    }),
    [],
  )
  
  return (
    <MapContainer style={{height:'300px'}} center={position} zoom={11} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        icon={myMarker}
        eventHandlers={eventHandlers}
        ref={markerRef}
        draggable
      >
      </Marker>
    </MapContainer>
  )
}

export default MapComponent