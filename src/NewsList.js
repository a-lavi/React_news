import { useState} from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Components/Search";

function NewsList({newsListData, setQueryString}) {
  const navigate = useNavigate()
  const navQuery= ()=>{
      setQueryString(`http://hn.algolia.com/api/v1/search?query=${handler}`)
  navigate('/search')
  }
  const [handler, setHandler] = useState("")
  const inputHandler = (event)=>{
setHandler(event.target.value)
console.log(handler)

  }

  return (
    <div className="newlistData">
      <h2 className="title">Hacker News</h2>
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
        <button to="/search" className="searchButton" onClick={navQuery}>Search</button>
      </div>
      
    </div>

  )
}
export default NewsList;
