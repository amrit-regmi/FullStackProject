import React from 'react'
const Filter = ({searchText,onChange}) =>{
    return(
        <div>
        Find Countries <input onChange={onChange} value={searchText} placeholder="Please Enter Country Name"/>
        </div>
    )
}
export default Filter