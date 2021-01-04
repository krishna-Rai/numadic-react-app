import React,{useState,useEffect} from 'react'
import DateForm from './DateForm'
import TableData from './TableData'
import axios from 'axios'
import Paginate from './Paginate';
const BASE_URL = "http://localhost:5000";

export default function PlaceInteraction() {
    const [locationData,setLocationData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [currentPage,setCurrentPage] = useState(1);
    const [dataPerPage,setDataPerPage] = useState(5);
    console.log(locationData)

    const handleSubmit= async (e)=>{
        e.preventDefault()
        setLoading(true)
        const start_tis = document.getElementById('start_tis').value;
        const end_tis = document.getElementById('end_tis').value;
        console.log(start_tis,end_tis)
        const {data} = await axios.get(BASE_URL+'/place_interactions',{
            params:{
                start_tis:encodeURI(start_tis),
                end_tis:encodeURI(end_tis)
            }
        })
        setLoading(false);
        setLocationData(data);
        console.log(data)
    }

    const indexOfLastData = currentPage*dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = locationData.slice(indexOfFirstData, indexOfLastData);


    return (
      <>
        <h2 className="mb-5">Place Interactions</h2>
        <DateForm handleSubmit={handleSubmit}/>
        <TableData tableData={currentData} />
        <Paginate currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={Math.ceil(locationData.length/dataPerPage)}/>
      </>
    );
}
