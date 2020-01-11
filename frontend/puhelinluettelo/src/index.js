import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import PersonService from './Services/personsServer'
import './index.css'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const baseUrl = '/api/persons'

  const hook = () => {
    axios
      .get(baseUrl)
      .then(response => {
        setPersons(response.data)
      })
  }
  useEffect(hook, [])
  const Notification = ({ message }) => {
    if (message == null) {
      return null
    }
  
    return (
      <div className="error">
        {message}
      </div>
    )
  }

  const removePerson = id => {
    const index = id.indexOf(',')
    const name = id.slice(index + 1)
    const placeOfId = id.slice(0, index)


    if(window.confirm(`Delete ${name}`)) {
          PersonService
            .deletePerson(placeOfId)
            .then(resp => {
              PersonService
                .getAll()
                .then(personsList => {
                  setPersons(personsList.data)
                })
              setErrorMessage(
                `Removed ${name}`
              )
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
      })
      
      .catch(error => {
        console.log(`fail ${error}`)
        setErrorMessage(
          `${name} has already been removed`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    }
  }
      
  const addPerson = (event) => {
    event.preventDefault()
    var check = 0
    var id = 0
    persons.map(person => {
      if (person.name.valueOf() === newName.valueOf()) {
        check = 1
        id = person.id
      }}) 

    console.log(check)
    if (check === 1) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)) {
      const personObject = {
        name: newName,
        number: newNumber
      }

  
      PersonService
      .update(id, personObject)
      .then(resp => {
        PersonService
              .getAll()
              .then(response => {
                setPersons(response.data)
        })
      })
      setErrorMessage(
        `Changed number of ${newName}`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setNewName('')
      setNewNumber('')
    }
    } else {
    const personObject = {
      name: newName,
      number: newNumber
    }
    PersonService
    .create(personObject)
    .then(response => {
      PersonService
            .getAll()
            .then(response2 => {
              setPersons(response2.data)
      })
      setErrorMessage(
        `Added ${newName}`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    })
    .catch(error => {
      setErrorMessage(
        `Error: ${error.response.data.error}`
      )
      setTimeout(() => {
        setErrorMessage(null)
      }, 10000)
    })
    setNewName('')
    setNewNumber('')
  }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  
  const handleRemove = (event) => {
    removePerson(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter new={newFilter} handle={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm add={addPerson} name={newName} handleName={handlePersonChange} number={newNumber} handleNumber={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons key={persons} personsList={persons} filter={newFilter} handleRemove={handleRemove} />
    </div>
  )
  

}

export default App

ReactDOM.render(<App/>, document.getElementById('root'))