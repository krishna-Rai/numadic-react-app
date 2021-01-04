import React from 'react'
import {Table} from 'react-bootstrap'

export default function TableData({tableData}) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>License no.</th>
            <th>Time</th>
            <th>Coordinates</th>
          </tr>
        </thead>
        <tbody>

         {tableData.map((data,index)=>{
           return <tr key={index}>
            <td>{data.license}</td>
            <td>{data.time}</td>
            <td>{data.latitude}, {data.longitude}</td>
          </tr>
         })}
          
        </tbody>
      </Table>
    );
}
