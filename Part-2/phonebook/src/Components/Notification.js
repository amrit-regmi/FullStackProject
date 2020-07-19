import React from 'react'
const Notification = ({notificatons}) =>{
    if(notificatons ===null){
      return null
    }
    return(
      <div>
        {notificatons.map(notification => <div key={notification.id} className={notification.type}>{notification.message}</div>)}
      </div>
    )
  }

  export default Notification