import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchResult } from '../redux/action'
import { store } from '../store'
import "../../src/App.css";
import "./navbar.css"

export const NavBar=()=>{
    const {data}=useSelector((store)=>store.result)
    const dispatch=useDispatch()

useEffect(()=>{
    getData()
},[])

const getData=()=>{
    axios.get("https://fast-reef-22226.herokuapp.com/data/").then(({data})=>{
        console.log(data)
        dispatch(getSearchResult(data))
    })
}


    return(
        <>
         <div id="navbar">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" />
             <input type="text" />
             <button className="search">search</button>
        </div>
        <div>
            <button id="sort-alphabetically" onClick={()=>{
                var b=data.sort((a,b)=>{
                    if (a.title < b.title) {
                        return -1;
                    }
                    if (b.title > a.title) {
                        return 1;
                    }
                    return 0;
                })
                dispatch(getSearchResult(b))
                console.log(b,"im b")
            }}>Sort A-Z</button>
            <button id="sort-alphabetically-desc"
            onClick={()=>{
                var b=data.sort((a,b)=>{
                    if (a.title > b.title) {
                        return -1;
                    }
                    if (b.title < a.title) {
                        return 1;
                    }
                    return 0;
                })
                dispatch(getSearchResult(b))
                
            }}>Sort Z-A</button>
            <button id="sort-by-date "
            onClick={()=>{
                var b=data.sort((a,b)=>{
                    if (a.creation_date < b.creation_date) {
                        return -1;
                    }
                    if (b.creation_date > a.creation_date) {
                        return 1;
                    }
                    return 0;
                })
                dispatch(getSearchResult(b))
                
            }}>Sort by Date (Asc)</button>
            <button id="sort-by-quality"
            onClick={()=>{
                var b=data.sort((a,b)=>{
                    if (a.creation_date > b.creation_date) {
                        return -1;
                    }
                    if (b.creation_date < a.creation_date) {
                        return 1;
                    }
                    return 0;
                })
                dispatch(getSearchResult(b))
                
            }}>Sort by Date (Desc)</button>
            <button id="sort-by-quality"
             onClick={()=>{
                var b=data.sort((a,b)=>{
                    if (a.quality > b.quality) {
                        return -1;
                    }
                    if (b.quality < a.quality) {
                        return 1;
                    }
                    return 0;
                })
                dispatch(getSearchResult(b))
                
            }}>Sort by quality (Asc)</button>
            <button id="sort-by-quality-desc"
             onClick={()=>{
                var b=data.sort((a,b)=>{
                    if (a.quality < b.quality) {
                        return -1;
                    }
                    if (b.quality > a.quality) {
                        return 1;
                    }
                    return 0;
                })
                dispatch(getSearchResult(b))
                
            }}>Sort by quality (Desc)</button>
            <button id="filter-explicit"
             onClick={()=>{
                var x=[]
                data.map((e)=>{
                    if(e.explicit===true)
                    {
                        x=[...x,e]
                        console.log(x,"explit")
                    }
                })
                dispatch(getSearchResult(x))
                
            }}>Filter Explicit</button>
        </div>
        <div id='search-result '>
            {data.map((e)=>(
             <div  className='result' key={e.id}>
              <p id='url'>{e.url}</p>
              <div id='title'><p><a href="">{e.title} </a></p><p>|</p><p>{e.author}</p></div>
              <p>{e.description}</p>
              <p><b>Creation_date: </b>{e.creation_date}</p>
              <div><p><b>Explicit:</b>{e.explicit}</p> <p><b>Quality %:</b>{e.quality}</p></div>
             </div>
            ))}
        </div>
        </>
       
    )
}