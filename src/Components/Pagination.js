import React from 'react'
const Pagination = ({pageIndex,url, setPageIndex, queryString,setQueryString,nbPages}) => {
  
    const paginateback =()=>{
        console.log("hey")
        /* setPageIndex(pageIndex +1) */
        setQueryString(`${url}&&page=${pageIndex - 1} `)
      }
      const paginatefor =()=>{

        
        setQueryString(`${url}&&page=${pageIndex + 1} `)
      }
 
  
    return (
    <div className="buttonflex">
        <div>
          {pageIndex === 0 ? (<button className="pagbutton" disabled={true} >Back</button>):<button className="pagbutton" onClick={paginateback}>Back</button> }
          </div>
      <div>
    <div>{pageIndex === nbPages ? (<button className="pagbutton" disabled={true} onClick={paginatefor}>Next</button>):<button className="pagbutton" onClick={paginatefor}>Next</button> }
    </div>
    </div>
        
        
    </div>
  )
}

export default Pagination