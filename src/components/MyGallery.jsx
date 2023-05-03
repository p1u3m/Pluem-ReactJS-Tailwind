import React from 'react'

function mygallery() {
  return (
    <div className='mx-auto max-w-5xl flex py-10 px-5'>
    <div className='grid grid-cols-3 gap-4'>
  <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./raid.png"></img></div>
  <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./lime.jpg"></img></div>
  <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./vms.png"></img></div>
  <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./vms.png"></img></div>
    <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./raid.png"></img></div>
    <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./lime.jpg"></img></div>
    <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./lime.jpg"></img></div>
    <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./vms.png"></img></div>
    <div>
    <img className='hover:opacity-50 text-3xl rounded-xl shadow-lg transition duration-150' src="./raid.png"></img></div>
</div>
</div>
  )
}

export default mygallery