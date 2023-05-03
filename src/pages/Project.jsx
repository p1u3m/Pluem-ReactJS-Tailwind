export { default as HeaderProjects } from '../components/HeaderProjects';
export { default as BorderDash } from '../components/BorderDash';
import { BorderDash } from '../components/BorderDash'

import React from 'react'
import { HeaderProjects } from '../components/HeaderProjects'
import { BorderDash } from '../components/BorderDash'

function Project() {
  return (
    <>
    <HeaderProjects/>
    <BorderDash/>
    </>
  )
}

export default Project