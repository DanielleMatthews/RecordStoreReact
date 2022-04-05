import axios from 'axios' 

//ALL
export function recordsList(){
    const response = axios.get('http://localhost:3001/records')
    return response
}
//ONE
export function oneRecord(id){
    const response = axios.get(`http://localhost:3001/records/${id}`)
    return response
}
//DELETE
export function deleteRecord(id){
    const response = axios.get(`http://localhost:3001/records/${id}`)
    return response
}
//CREATE
export function creatRecord(add){
    const response = axios.get('http://localhost:3001/records', add)
    return response
}
//UPDATE
export function editRecord(id, updatedRecord){
    const response = axios.put(`http://localhost:3001/records/${id}`, updatedRecord)
    return response
}