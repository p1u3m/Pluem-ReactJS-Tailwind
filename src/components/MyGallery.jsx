import React from 'react'

function MyGallery() {
  return (
    <div className='mx-auto max-w-5xl flex py-10 px-5'>
    <div className='grid grid-cols-3 gap-4'>
  <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./src/assets/1.png"></img></div>
  <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./src/assets/2.png"></img></div>
  <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./src/assets/3.png"></img></div>
  <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./src/assets/4.png"></img></div>
    <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./src/assets/5.png"></img></div>
    <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./src/assets/6.png"></img></div>
    <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./src/assets/7.png"></img></div>
    <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./src/assets/8.png"></img></div>
    <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./src/assets/9.png"></img></div>
</div>
</div>
  )
}

export default MyGallery