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
        <div>
            <h1> Records... </h1>
                <button onClick={()=> {navigate("/new")}}> New Record </button>
            <ul>
                {data.map((item, i)=>(
                    <li key={i}>
                        <a href= {`http://localhost:3000/${item._id}`}> {item.albumTitle} </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}