import React from 'react'
import ProfileInfo from '../components/ProfileInfo'
import History from '../components/History'


const ProfilePage = () => {
  return (
    <div className='bg-black h-full border border-black ' >

      <div className='grid grid-cols-3 '>

          <div className='col-span-2'>
          <ProfileInfo />
          </div>

          <div className='col-span-1'>
            <History />
          </div>
      </div>
    </div>
  )
}

export default ProfilePage