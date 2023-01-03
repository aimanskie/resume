import { React, useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '100%',
}

export default function Map() {
  let [lat, setLat] = useState('')
  let [lng, setLng] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getPosition)
  }, [])

  const getPosition = (data) => {
    setLat(data.coords.latitude)
    setLng(data.coords.longitude)
  }
  const center = {
    lat: lat,
    lng: lng,
  }
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyADoWRWSMHfLNZHvSX406kXVEk8_MFx2pQ',
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={3}
      options={{ disableDefaultUI: true, mapId: '6e1e6e3760128692' }}
    >
      <Marker visible={true} position={center} label='That is Me!' />
    </GoogleMap>
  ) : (
    <></>
  )
}
