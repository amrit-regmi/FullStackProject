import React from 'react'
import Person from './Person'

const Persons =({persons,onDelete})=> {
    return(    
    <ul>  
        {persons.map(p => 
        <Person key={p.id} person={p} deletePerson ={onDelete} ></Person>)
         }         
    </ul>
    )
}

export default Persons