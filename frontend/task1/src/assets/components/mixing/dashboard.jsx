import React from 'react'
import Nav2 from '../navbarpages/nav2'
import Footer from '../footer/footer'
import Student_dash from '../student_dashboard/main'
import { Statistics1 } from '../proj/Graphspage1'

function dashboard() {
  return (
    <>
    <Nav2/>
    <Statistics1/>
    <Student_dash/>
    <Footer/>
    </>
  )
}

export default dashboard