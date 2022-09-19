import React from 'react'

import Typewriter from 'typewriter-effect'

import Scroll from '../images/scroll-down.png'

const Home = () => {

  return (
    <div className='home'>
      <div className='greeting center'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Jack Robinson').start()
          }}
        />
        <div className='se-wrapper'>
          <h2>Software Engineer</h2>
        </div>
      </div>
      {/* <img scr={Scroll} alt='scroll-down-icon' /> */}
    </div>
  )
}

export default Home

