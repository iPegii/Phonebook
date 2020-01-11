import React from 'react'
import Person from './Person'



const Persons = (list) => {
const filteredPersons = list.personsList.filter(person => person.name.toUpperCase().includes(list.filter.toUpperCase()) === true)

const rows = () => filteredPersons.map(person => 

      <Person 
      key={person.id}
      name={person.name} 
      number={person.number} 
      button={<button onClick={list.handleRemove} value={[person.id, person.name]}> delete </button>}
      />
  )
  return(
      <div>
        {rows()}
    </div>
  )
}

export default Persons