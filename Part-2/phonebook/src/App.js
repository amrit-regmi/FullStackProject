import React, { useState } from 'react'
import Filter from './Components/Filter'
import NewPersonForm from './Components/NewPersonForm'
import Persons from './Components/Persons'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filterText,setFilterText] = useState('')

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