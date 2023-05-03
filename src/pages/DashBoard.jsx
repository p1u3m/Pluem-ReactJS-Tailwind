export { default as HeaderDashboard } from '../components/HeaderDashboard';
export { default as BorderDash } from '../components/BorderDash';

import React from 'react'
import { HeaderDashboard } from '../components/HeaderDashboard'
import { BorderDash } from '../components/BorderDash'

function Dashboard() {
  return (
    <>
    <HeaderDashboard/>
    <BorderDash/>
    </> 
  )
}

export default Dashboard