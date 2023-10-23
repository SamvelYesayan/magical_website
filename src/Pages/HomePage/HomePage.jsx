import React from 'react'
import './HomePage.css'
import HomeComponent1 from '../../Components/HomeComponent1/HeaderComponent/HomeComponent1'
import HomeComponent2 from '../../Components/HomeComponent2/HomeComponent2'
import HomeComponent3 from '../../Components/HomeComponent3/HomeComponent3'
import HomeComponent4 from '../../Components/HomeComponent4/HomeComponent4'
const HomePage = () => {
  return (
    <div>
      <HomeComponent1 />
      <HomeComponent2 />
      <HomeComponent3 />
      <HomeComponent4 />
    </div>
  )
}

export default HomePage