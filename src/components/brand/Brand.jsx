import React from 'react'
import './brand.css'
import { dropbox,google,slack,atlassian,shopify } from './import'

const brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div >
        <img src={google} alt='google'/>
      </div>
      <div >
        <img src={slack} alt='google'/>
      </div>
      <div >
        <img src={atlassian} alt='google'/>
      </div>
      <div >
        <img src={shopify} alt='google'/>
      </div>
      <div >
        <img src={dropbox} alt='google'/>
      </div>
    </div>
  )
}

export default brand