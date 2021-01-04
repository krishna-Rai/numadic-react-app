import React from 'react'
import { Pagination } from 'react-bootstrap'

export default function Paginate({currentPage,setCurrentPage,totalPages}) {
    if(totalPages==0){
        return (
            <Pagination></Pagination>
        )
    }
    return (
      <Pagination>
        {currentPage > 1 && <Pagination.Prev onClick={()=>setCurrentPage(currentPage-1)} />}
        {currentPage > 2 && <Pagination.Item onClick={()=>{setCurrentPage(1)}}>1</Pagination.Item>}
        {currentPage > 5 && <Pagination.Ellipsis />}
        {currentPage > 3 && currentPage - 3 !== 1 && (
          <Pagination.Item onClick={()=>{setCurrentPage(currentPage-3)}}>{currentPage - 3}</Pagination.Item>
        )}
        {currentPage > 2 && currentPage - 2 !== 1 && (
          <Pagination.Item onClick={()=>{setCurrentPage(currentPage-2)}}>{currentPage - 2}</Pagination.Item>
        )}
        {currentPage > 1 && currentPage - 1 !== 1 && (
          <Pagination.Item onClick={()=>{setCurrentPage(currentPage-1)}}>{currentPage - 1}</Pagination.Item>
        )}
        <Pagination.Item active>{currentPage}</Pagination.Item>
        {currentPage + 1 < totalPages && (
          <Pagination.Item onClick={()=>{setCurrentPage(currentPage+1)}}>{currentPage + 1}</Pagination.Item>
        )}
        {currentPage + 2 < totalPages && (
          <Pagination.Item onClick={()=>{setCurrentPage(currentPage+2)}}>{currentPage + 2}</Pagination.Item>
        )}
        {currentPage + 3 < totalPages && (
          <Pagination.Item onClick={()=>{setCurrentPage(currentPage+3)}}>{currentPage + 3}</Pagination.Item>
        )}
        {currentPage + 4 <= totalPages && <Pagination.Ellipsis />}
        {currentPage !== totalPages &&<Pagination.Item onClick={()=>{setCurrentPage(totalPages)}}>{totalPages}</Pagination.Item>}
        {currentPage !== totalPages && <Pagination.Next onClick={()=>{setCurrentPage(currentPage+1)}}>{}</Pagination.Next>}
      </Pagination>
    );
}
