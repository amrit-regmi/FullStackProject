import React, { useState, useEffect } from 'react'
import Filter from './Components/Filter'
import NewPersonForm from './Components/NewPersonForm'
import Persons from './Components/Persons'
import phonebookService from './Services/phonebookService'
import './index.css'
import Notification from './Components/Notification'


const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filterText,setFilterText] = useState('')
  const [notifications,setNotifications] = useState([])

  useEffect(()=>{
    phonebookService.getPersons().then(personData=>setPersons(personData) )
  },[])

  const filtered = persons.filter(person=>person.name.toLowerCase().includes(filterText))

  
  const addName = (event) => {
    event.preventDefault()

    if(newName==="" || newNumber ===""){
      window.alert("Name and number must not be empty")
      return
    }
    
    let duplicate = persons.find(person => person.name.toLowerCase() === newName.toLowerCase() || person.number === newNumber)
    
    if (duplicate){
      if (duplicate.number === newNumber && duplicate.name.toLowerCase() === newName.toLowerCase()){
        window.alert(`${newName}: ${newNumber} already exists on phonebook`)
        return
      }
        
      if (duplicate.name.toLowerCase()=== newName.toLowerCase()){
        if(window.confirm(`${newName} is already added to phonebook, replace old number with new one? ` )){
            const updatedPerson = { ...duplicate, number: newNumber}
            phonebookService.updatePerson(updatedPerson).then(r => {
              setPersons(persons.map(p => p.id !== updatedPerson.id ? p : r))
              
            }).then(()=>{
              setNewName('') 
              setNewNumber('')
              setNotifications([{id: 1, type:'success',message:`Replaced old number for ${newName} with ${newNumber}`}])
              setTimeout(() => {
                setNotifications(null)
              }, 5000)
            })
          }
        return
      } 
        
      if(duplicate.number === newNumber){
        if(window.confirm(`${newNumber} already exists on phonebook for ${newName} , replace old name with new one? ` )){
          const updatedPerson = { ...duplicate, name: newName}
          phonebookService.updatePerson(updatedPerson).then(r => {
            setPersons(persons.map(p => p.id !== updatedPerson.id ? p : r))
            
          }).then(()=>{
            setNewName('') 
            setNewNumber('')
            setNotifications([{id: 1 ,type:'success',message:`Replaced contact name for ${newNumber} with ${newName}`}])})
            setTimeout(() => {
              setNotifications(null)
            }, 5000)
        }
      return
      }

    } 
    else{
      const newPerson = {name: newName,number: newNumber}
      phonebookService.createPerson(newPerson).then(p=>setPersons(persons.concat(p))).then(p=>{
        setNewName('') 
        setNewNumber('') 
        }).then(()=>{
            setNotifications([{id: 1,type:'success',message:`Added contact ${newName}`}])
            setTimeout(() => {
            setNotifications(null)
          }, 5000)
        }
          
          )
    }
  }


  const deletePerson = (person) =>{
    if (window.confirm(`Delete ${person.name}?`)){
      phonebookService.deletePerson(person.id).then(p=>{
        setPersons(persons.filter(per=> per.id !== person.id))
      }).catch(error =>{
        setNotifications([{id: 1,type:'error',message:`Information on ${person.name} has already been removed from server`}])
        setPersons(persons.filter(per=> per.id !== person.id))
        setTimeout(() => {
          setNotifications(null)
        }, 5000)
      })
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
      <Notification notificatons ={notifications}></Notification>
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
      <Persons persons={filtered} onDelete={deletePerson}></Persons> 
    </div>
  )
}

export default App