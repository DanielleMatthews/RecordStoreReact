import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { oneRecord, updateRecord } from "../services/getRequests"

export default function Update(){
    const { id } = useParams()
    const nav = useNavigate()
    const [record, setRecord] = useState({})

    useEffect(()=>{
        oneRecord(id)
        .then(res => setRecord(res.data))
    }, [])

    const updateTheRecord = e => {
        e.preventDefault()
        const updatedRecord = {
            artist: e.target.artist.value, 
            albumtitle: e.target.albumTitle.value, 
            coverArt: e.target.coverArt.value, 
            coverArtist: e.target.coverArtist.value, 
            year: e.target.year.value, 
            genre: e.target.genre.value}
        updateRecord(id, updatedRecord)
        nav(`/${id}`)
    }

    return(
        <div> 
            <form onSubmit={updateTheRecord} id='updateform'>
                Artist: <input type='text' name='artist' defaultValue={record.artist}/> <br/>
                Album Title: <input type='text' name='albumTitle' defaultValue={record.albumTitle}/> <br/>
                Cover Art: <input type='text' name='coverArt' defaultValue={record.coverArt} /> <br/>
                Cover Art By: <input type='text' name='coverArtist' defaultValue={record.coverArtist} /> <br/>
                Released: <input type='text' name='year' defaultValue={record.year} /> <br/>
                Genre: <input type='text' name='genre' defaultValue={record.genre}/> <br/>
                <input type='submit' value='Create a New Record'/>
            
            </form>
        </div>
    )
}