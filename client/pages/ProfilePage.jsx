import React, { useEffect, useState } from 'react'
import ProfileInfo from '../components/ProfileInfo'
import History from '../components/History'
import Analysis from '../components/Analysis'


const ProfilePage = () => {

  return (
    <div className='bg-black h-full border border-black ' >

      <div className='grid grid-cols-3 '>

          <div className='col-span-2'>
          <ProfileInfo />

          <Analysis />
          </div>

          <div className='col-span-1'>
            <History/>
          </div>
      </div>
    </div>
  )
}

export default ProfilePage