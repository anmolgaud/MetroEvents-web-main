import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EventCard from '../Components/EventCard';

import events from '../events';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Home = () => {
    const { DarkMode } = useSelector((store) => store.siteTheme);
    let upcomingEvents = events.filter((event) => event.timestamp >= Date.now());
    let pastEvents = events.filter((event) => event.timestamp < Date.now())

  return (
    <main className='mx-32'>
        <Navbar />

        <section className='w-full mt-8 '>
            <div className='flex items-center'>
                <div className='inline-block w-full h-[1px] bg-gray-700'></div>
                <p className={`inline-block mx-4 font-medium ${DarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Upcoming</p>
                <div className='inline-block w-full h-[1px] bg-gray-700'></div>
            </div>

            <div className='grid grid-cols-2 gap-4 place-items-center'>
                {upcomingEvents.map((event, index) => {
                    return(
                        <EventCard key={event.eventId} {...event} />
                    )
                })}
            </div>
        </section>

        <section className='w-full mt-8 '>
            <div className='flex items-center'>
                <div className='inline-block w-full h-[1px] bg-gray-700'></div>
                <p className={`inline-block mx-4 font-medium ${DarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Past</p>
                <div className='inline-block w-full h-[1px] bg-gray-700'></div>
            </div>

            <div className='grid grid-cols-2 gap-4 place-items-center grayscale'>
            {pastEvents.map((event, index) => {
                    return(
                        <EventCard key={event.eventId} {...event} />
                    )
                })}
            </div>
        </section>

        <Footer />
    </main>
  )
}

export default Home