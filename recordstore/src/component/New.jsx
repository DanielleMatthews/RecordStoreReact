import { useNavigate } from "react-router-dom"
import { createRecord } from '../services/getRequests'


export default function New(){
    const nav = useNavigate()

    const createTheRecord = e => {
        e.preventDefault()
        let add = {
            artist: e.target.artist.value, 
            albumTitle: e.target.albumTitle.value, 
            coverArt: e.target.coverArt.value, 
            coverArtist: e.target.coverArtist.value, 
            year: e.target.year.value, 
            genre: e.target.genre.value}
        createRecord(add)
        nav('/')
    }
    return(
        <div> 
            <h1> Create a New Record </h1>
            <form onSubmit={createTheRecord} id='newform'>
                Artist: <input type='text' name='artist' /> <br/>
                Album Title: <input type='text' name='albumTitle'/> <br/>
                Cover Art: <input type='text' name='coverArt' /> <br/>
                Cover Art By: <input type='text' name='coverArtist' /> <br/>
                Released: <input type='text' name='year' /> <br/>
                Genre: <input type='text' name='genre' /> <br/>
                <input type='submit' value='Create a New Record'/>
            </form>
        </div>
    )
}