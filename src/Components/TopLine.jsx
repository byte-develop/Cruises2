import React from 'react'

const TopLine = () => {
  return (
    <div className='w-[100vw] bg-[#0C214D] h-[25px] flex items-center justify-center text-white z-10 relative '>
      <div className="w-[1300px] flex items-center justify-end text-[13px] font-[PR] gap-[19px]">
        <p className='flex items-center gap-2'>UNITED STATES <img className='h-[10px]' src="../public/Flag.svg" alt="" /></p>
        <p>866-562-7625</p>
      </div>
    </div>
  )
}

export default TopLine