import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import {faLocationPin}  from '@fortawesome/free-solid-svg-icons'

export default function Cards(props) {
  console.log(props)

  return (
    <div>
         <div className="card-layout">
            {/* <img className="card-image"src={require("../images/mount-fuji.png")} /> */}
            <img className="card-image"src={`require("../images/${props.image}")`} />
                <div className="left-side-card">
                    <div className="location-map">
                        <FontAwesomeIcon icon={faLocationPin} />
                        <p className="thin-font country"> {props.location} <span>
                        <a href={props.urlLocation} > View on Google Maps </a></span> </p>
                    </div>
                    <h2>{props.title}</h2>
                    <div>
                      <p>{props.startDate} - {props.endDate}</p>
                        <p className="thin-font card-description">{props.description}</p>
                    </div>
                </div>
         </div>
         
        <hr />
    </div>
  )
}
