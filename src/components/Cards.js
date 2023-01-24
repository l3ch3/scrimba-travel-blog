import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import {faLocationPin}  from '@fortawesome/free-solid-svg-icons'

export default function Cards() {

  return (
    <div>
         <div className="card-layout">
            <img className="card-image"src={require("../images/mount-fuji.png")} />
                <div className="left-side-card">
                    <div className="location-map">
                        <FontAwesomeIcon icon={faLocationPin} />
                        <p className="thin-font country"> JAPAN <span>
                        <a href="" > View on Google Maps </a></span> </p>
                    </div>
                    <h2>Mount Fuji</h2>
                    <div>
                        <p >12 Jan, 2021 - 24 Jan, 2021</p>
                        <p className="thin-font card-description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                    </div>
                </div>
         </div>
         
        <hr />
    </div>
  )
}
