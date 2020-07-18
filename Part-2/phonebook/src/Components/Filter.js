import React from 'react'

const Filter = ({filterPeople}) =>{
    return( 
        <div>
            Filter shown with: <input onChange = {filterPeople}/>
        </div>
    )
}

export default Filter