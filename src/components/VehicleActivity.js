import React,{useState} from 'react'
import DateForm from './DateForm2'
import MapContainer from './MapContainer'
import axios from 'axios'


const BASE_URL = "http://localhost:5000";
export default function VehicleActivity() {
    const [path,setPath] = useState([])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const license = document.getElementById('license').value;
        const start_tis = document.getElementById("start_tis").value;
        const end_tis = document.getElementById("end_tis").value;
        console.log(license,start_tis,end_tis)
        const {data} = await axios.get(BASE_URL+'/vehicle_activity',{
            params:{
                start_tis:encodeURI(start_tis),
                end_tis:encodeURI(end_tis),
                license
            }
        })
        console.log(data)
        setPath(data)
    }

    return (
      <>
        <h2 className="mb-5">Vehicle Activity</h2>
        <DateForm handleSubmit={handleSubmit}/>
        <MapContainer path={path}/>
      </>
    );
}
