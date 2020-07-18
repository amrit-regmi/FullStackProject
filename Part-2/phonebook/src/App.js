import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Components/Filter'
import NewPersonForm from './Components/NewPersonForm'
import Persons from './Components/Persons'
const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filterText,setFilterText] = useState('')

  useEffect(()=>{
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data) 
    })
  },[])

  const filtered = persons.filter(person=>person.name.toLowerCase().includes(filterText))

  
  const addName = (event) => {
    event.preventDefault()
    if (persons.filter(person => person.name === newName).length > 0){
      alert(`${newName} is already added to phonebook`)
    }
    else{
      const newPerson = {name: newName,number: newNumber}
      setPersons(persons.concat(newPerson))
      setNewName('') 
      setNewNumber('') 
    }

  }

  const nameInputChange = (event) => {
    setNewName(event.target.value)
  }

  const numberInputChange = (event) => {
    setNewNumber(event.target.value)
  }

  const filterPeople=(event)=>{
    setFilterText(event.target.value.toLowerCase())
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterPeople={filterPeople}></Filter>
      <NewPersonForm
          nameInputChange ={nameInputChange}
          newName={newName}
          numberInputChange={numberInputChange}
          newNumber={newNumber}
          addName={addName}
          > 
      </NewPersonForm>
      <h2>Numbers</h2>
      <Persons persons={filtered}></Persons> 
    </div>
  )
}

export default App