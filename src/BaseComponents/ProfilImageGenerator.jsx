import React from 'react'

const ProfilImageGenerator = ({name}) => {
  return (
    <div className='relative capitalize w-[30px] h-[30px] cursor-default flex items-center justify-center text-center rounded-full text-[20px] bg-primary text-light align-middle'>
        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>{name.slice(0, 1)}</p>
    </div>
  )
}

export default ProfilImageGenerator;