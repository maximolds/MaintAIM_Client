import React from 'react'

const Hero = () => {
    return (
        <div className='bg-white dark:text-gray-200
        dark:bg-secondary-dark-bg h-44 rounded-xl
        w-full  p-8 pt-9 m-3 bg-hero-pattern
        bg-no-repeat bg-cover bg-center'>
            <div className='flex justify-between 
          items-center'>
                <div>
                    <p className='font-bold
              text-gray-400'>Maint
                        <span style={{ color: currentColor }}> AIM</span>
                    </p>
                    <p className='text-sm'>A Computerized Management System of Asia
                        Integrated Machine Inc.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero