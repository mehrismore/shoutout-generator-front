import React from 'react'
import WelcomeBackground from '@source/components/welcome-background/welcome-background'
import SheSharpTroopl from '@source/components/shesharp-x-troopl/shesharp-x-troopl'

const Home = () => {
  return (
    <WelcomeBackground>
      <SheSharpTroopl />
      <h1>Welcome to the Hackathon 2021</h1>
      <a href="./introduction">Read more here!</a>
    </WelcomeBackground>
  )
}

export default Home
