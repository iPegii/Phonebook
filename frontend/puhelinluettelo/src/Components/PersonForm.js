import React from 'react'


const PersonForm = (person) => {
return(
<form onSubmit={person.add}>
        <div>
          name: <input 
          value={person.name}
          onChange={person.handleName} 
          />
          <p></p>
          number: <input 
          value={person.number}
          onChange={person.handleNumber} 
          />
          <p></p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
)
}

export default PersonForm