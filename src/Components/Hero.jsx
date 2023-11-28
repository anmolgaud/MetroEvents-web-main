import React from "react";
import { useSelector, useDispatch } from "react-redux";
import EventCard from "./atom/EventCard";
const Hero = () => {
  const { DarkMode, Events: events } = useSelector((store) => store.siteTheme);
  let upcomingEvents = events.filter((event) => event.timestamp >= Date.now());
  let pastEvents = events.filter((event) => event.timestamp < Date.now());

  return (
    <>
      <section className="w-full mt-8 ">
        <div className="flex items-center">
          <div className="inline-block w-full h-[1px] bg-gray-700"></div>
          <p
            className={`inline-block mx-4 font-medium ${
              DarkMode ? "text-gray-300" : "text-gray-900"
            }`}
          >
            Upcoming
          </p>
          <div className="inline-block w-full h-[1px] bg-gray-700"></div>
        </div>

        {upcomingEvents.length === 0 && (
          <p
            className={`text-center my-4 text-2xl font-semibold ${
              DarkMode ? "text-neutral-100" : "text-neutral-900"
            }`}
          >
            No upcoming Events...
          </p>
        )}

        <div className="grid grid-cols-2 gap-4 place-items-center">
          {upcomingEvents.map((event, index) => {
            return <EventCard key={event.eventId} {...event} />;
          })}
        </div>
      </section>

      <section className="w-full mt-8 ">
        <div className="flex items-center">
          <div className="inline-block w-full h-[1px] bg-gray-700"></div>
          <p
            className={`inline-block mx-4 font-medium ${
              DarkMode ? "text-gray-300" : "text-gray-900"
            }`}
          >
            Past
          </p>
          <div className="inline-block w-full h-[1px] bg-gray-700"></div>
        </div>

        <div className="grid grid-cols-2 gap-4 place-items-center grayscale">
          {pastEvents.length === 0 && (
            <p
              className={`text-center my-4 text-2xl font-semibold ${
                DarkMode ? "text-neutral-100" : "text-neutral-900"
              }`}
            >
              No upcoming Events...
            </p>
          )}
          {pastEvents.map((event, index) => {
            return <EventCard key={event.eventId} {...event} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Hero;
