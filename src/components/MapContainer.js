import React from "react";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Polyline,
} from "react-google-maps";

function Map({path}) {
    console.log("path",path)
  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 15.6035983, lng: 73.7576216 }}
    >
      <Polyline
        path={path}
        options={{
          geodesic: true,
          strokeColor: "#ff2343",
          strokeOpacity: "1.0",
          strokeWeight: 2,
          mapTypeId: "terrain",
          icons: [
            {
              icon: "hello",
              offset: "0",
              repeat: "10px",
            },
          ],
        }}
      />
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapContainer({path}) {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyARobdxCCGS_675MU5OjR0SNevnykjoN5I`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        path={path}
      />
    </div>
  );
}
