export { default as HeaderProjects } from './HeaderProjects';
import { BorderDash } from '../components/BorderDash'

import React from 'react'
import { HeaderProjects } from '../components/headerprojects'
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