import React from 'react'


const Filter = (filter) => {

return(
<form>
        <div>
          Filter shown with: <input
          value={filter.new}
          onChange={filter.handle}
          />
        </div>
</form>
)
}

export default Filter
