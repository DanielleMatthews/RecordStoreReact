import { recordsList } from '../services/getRequests'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Index(){
    const navigate = useNavigate()
    const[data, setData] = useState([])
    
    useEffect(()=>{
        recordsList()
        .then(res=> setData(res.data))
    }, [])
    console.log(data)
    
    return(
        <div id='app'>
            <h1> Records... </h1>
                <button onClick={()=> {navigate("/new")}}> New Record </button>
            <ul>
                {data.map((item, i)=>(
                    <li key={i}>
                        <h3> {item.albumTitle} </h3>
                        <a href= {`http://localhost:3000/${item._id}`} id='ahref'> <img src={`${item.coverArt}`} width='250px' height='250px'></img> </a> <br/>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}