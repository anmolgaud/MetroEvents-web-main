import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EventCard from '../Components/EventCard';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';

const Home = () => {
    const { DarkMode , Events:events} = useSelector((store) => store.siteTheme);
    let upcomingEvents = events.filter((event) => event.timestamp >= Date.now());
    let pastEvents = events.filter((event) => event.timestamp < Date.now())

  return (
    <main className='mx-32'>
        <Navbar />
        <Hero/>
        <Footer />
    </main>
  )
}

export default Home