import { useState, useEffect } from "react";

function NewsList({newsListData, setQueryString}) {
  const [handler, setHandler] = useState("")
  const inputHandler = (event)=>{
setHandler(event.target.value)
console.log(handler)

  }

  return (
    <div className="newlistData">
      <ul>
        {newsListData.map((news,index) => {
          
          return(
          
              <li key={index}>
                <a href={news.url}>{news.title}</a>
                <span><a className="user" href="">{news.author}</a>
                <a></a></span>
                </li>
          )})    
      }
     
      
      </ul>
      <div className="searchflex">
        <input className="searchBar" type="text" onChange={inputHandler} />
        <button className="searchButton" onClick={()=>{setQueryString(`http://hn.algolia.com/api/v1/search?query=${handler}`)}}>Search</button>
      </div>
    </div>

  )
}
export default NewsList;
