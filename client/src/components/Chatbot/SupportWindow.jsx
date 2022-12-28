import React, { useState } from 'react'
import { styles } from './styles.js'
import EmailForm from './OTPVerification/EmailForm.jsx'
// import ChatRoom from './ChatRoom.jsx'
import SearchBot from './SearchBot.jsx'

const SupportWindow = props => {
    // const [user, setUser] = useState(false)
    // const [chat, setChat] = useState(false)
    const [isverified, setIsverified] = useState(true)
  return (
      <div
          className='transition-5'
          style={{
            ...styles.supportWindow,
            ...{opacity: props.visible ? '1':'0'}
          }}
    >
    { !isverified ? 
      <EmailForm  
      visible={!isverified}
      setIsverified={ () => setIsverified(true)}
      /> :
      <SearchBot visible={isverified} />
    }
    </div>
  )
}

export default SupportWindow


// setUser={user => setUser(user)}
// setChat={chat => setChat(chat)}
// visible={chat === false}
// visible={user === false || chat === false}

// visible={user !== false && chat !== false}
// visible={chat !== false}
// chat={chat}
// user={user}

// {/* <ChatRoom
//           visible={user !==false && chat!==false}
//           chat={chat}
//           user={user}
//       /> */}