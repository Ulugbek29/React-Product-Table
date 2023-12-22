import React from 'react'
import { Oval } from 'react-loader-spinner'

export default function Loader({visible}) {
  return (
    <div className='w-full min-h-screen h-full flex justify-center items-center'>
        <Oval 
                visible={visible}
                height="80"
                width="80"
                color="#fff"
                secondaryColor="#000"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""

        />
    </div>
  )
}
