import { useState, useNavigate } from "react";
function Search ({newsListData, setQueryString}){
    
    const navQuery= ()=>{
        setQueryString(`http://hn.algolia.com/api/v1/search?query=${handler}`)
    
    }
    const [handler, setHandler] = useState("")
    const inputHandler = (event)=>{
  setHandler(event.target.value)
  console.log(handler)
  
    }
    return(
        <div className="newlistData">
        <h2 className="title">Hacker News</h2>
        <div className="searchflex">
          <input className="searchBar" type="text" onChange={inputHandler} />
          <button to="/search" className="searchButton" onClick={navQuery}>Search</button>
        </div>
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
        
      </div>   
       )
}
export default Search