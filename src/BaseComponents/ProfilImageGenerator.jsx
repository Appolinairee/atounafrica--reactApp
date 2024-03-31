import React from 'react'

const ProfilImageGenerator = ({name}) => {
  return (
    <div className='capitalize w-[30px] h-[30px] cursor-default flex items-center justify-center text-center rounded-full text-[20px] bg-primary text-light align-middle'>
        {name.slice(0, 1)}
    </div>
  )
}

export default ProfilImageGenerator;