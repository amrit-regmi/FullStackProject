import axios from 'axios'

const baseUrl ='http://localhost:3001/persons'

const getPersons = () =>{
    
    return( axios.get(baseUrl).then(response => response.data))
} 

const createPerson = person =>{
    return (axios.post(baseUrl,person).then(response=>response.data))
}

const deletePerson = id =>{
    return (axios.delete(`${baseUrl}/${id}`).then(response=>response.data))
}

const updatePerson = person =>{
    return (axios.put(`${baseUrl}/${person.id}`,person).then(response=>{
        return response.data}))
}
export default {getPersons,createPerson,deletePerson,updatePerson}