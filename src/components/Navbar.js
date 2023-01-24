import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon, solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// import  * as icons  from '@fortawesome/free-solid-svg-icons'
import {faPlane, faLocationPin}  from '@fortawesome/free-solid-svg-icons'



export default function Navbar() {
  return (
    <nav className='navbar'>
        <FontAwesomeIcon icon={faPlane} />
        <h3>my travel blog</h3>
        </nav>
  )
}

