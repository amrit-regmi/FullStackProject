import React from 'react'
const NewPersonForm = ({nameInputChange,numberInputChange,newName,newNumber,addName}) =>{
    return(
    <form>
        <div>
        name: <input onChange={nameInputChange} value = {newName}/>
        </div>
        <div>
        number: <input onChange={numberInputChange} value = {newNumber}/>
        </div>

        <div>
          <button type="submit" onClick={addName}  >add</button>
        </div>
    </form>
    )
}
export default NewPersonForm