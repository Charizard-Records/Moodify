import React from 'react'
import MoodChoice from '../components/MoodChoice'
import MusicList from '../components/MusicList'



const MainPage = () => {
  return (
    <div className='bg-black h-full border border-black ' >
      <div className='grid grid-cols-3 '>
      <div className='col-span-2'>
      <MoodChoice />
      </div>
      <div className='col-span-1'>
      <MusicList />
      </div>
    </div>
    </div>

  )
}

export default MainPage
