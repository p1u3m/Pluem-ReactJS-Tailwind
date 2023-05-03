export { default as HeaderHome } from '../components/HeaderHome';
export { default as MyGallery } from '../components/MyGallery';

import React from 'react'
import { MyGallery } from '../components/MyGallery'
import { HeaderHome } from '../components/HeaderHome'

function HomePage() {
  return (
    <>
    <HeaderHome/>
    <MyGallery/>
    </>
  )
}

export default HomePage