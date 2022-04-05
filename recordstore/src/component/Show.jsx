import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { oneRecord, deleteRecord } from "../services/getRequests"


export default function Show(){
    const nav = useNavigate()
    const { id } = useParams()
    const [record, setRecord] = useState({})

    useEffect(()=>{
        oneRecord(id)
        .then(res=> setRecord(res.data))
    }, [])

    const deleteTheRecord = () => {
        deleteRecord(id)
        nav('/')
    }

    return(
        <div id='showdiv'>
            <h1> {record.albumTitle} </h1>
            <img src={`${record.coverArt}`} width="450px" height="450px"></img>
            <div id='showinfo'>
            <h3> Cover Art By: {record.coverArtist} </h3>
            <h3> Artist: {record.artist}</h3>
            <h3> Genre: {record.genre} </h3>
            <h3> Released: {record.year} </h3>
            </div> <br/>
            <button onClick={()=> {nav(`/${id}/update`)}}> Edit </button>
            <button onClick={deleteTheRecord}> Delete Record</button>
        </div>
    )
}