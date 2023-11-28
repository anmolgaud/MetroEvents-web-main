import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { GoDeviceCameraVideo } from "react-icons/go";
import { ImLocation } from "react-icons/im";
import { FaCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const formatDate = (ts) => {
  const dateObj = new Date(ts).toLocaleDateString("en-US", {
    year: "2-digit",
    month: "short",
    day: "numeric",
  });
  return dateObj;
};

const formatTime = (ts) => {
  const dateObj = new Date(ts);
  let hh = dateObj.getHours();
  let mm = dateObj.getMinutes();
  if (hh < 10) hh = "0" + hh;
  if (mm < 10) mm = "0" + mm;

  let res = hh + ":" + mm;
  return res;
};

const EventCard = (props) => {
  const { DarkMode } = useSelector((store) => store.siteTheme);
  const {
    eventId,
    timestamp,
    title,
    eventBy,
    location,
    invitationType,
    imgLocation,
  } = props;
  return (
    <div className={`p-2 rounded-lg cursor-pointer`}>
      <div
        className={`grid grid-cols-3 ${
          DarkMode ? "bg-gray-600" : "bg-gray-50"
        } rounded-lg px-4 py-2`}
      >
        <div className="col-span-2 flex flex-col justify-evenly">
          <div
            className={`flex items-center ${
              DarkMode ? "text-gray-100" : "text-gray-400"
            }`}
          >
            <p className="mr-1">{formatTime(timestamp)}</p>
            <FaCircle size={"0.4rem"} />
            <p className="ml-1">{formatDate(timestamp)}</p>
          </div>
          <p
            className={`font-medium text-2xl ${
              DarkMode ? "text-gray-50" : "text-gray-900"
            }`}
          >
            {title}
          </p>
          <div className="flex items-center">
            <BsArrowUpRightCircleFill color="#6366f1" size={"1.2rem"} />
            <p
              className={`ml-2 font-light ${
                DarkMode ? "text-gray-100" : "text-gray-400"
              }`}
            >
              By {eventBy}
            </p>
          </div>
          {location === "virtual" && (
            <div className=" flex items-center">
              <GoDeviceCameraVideo
                color={`${DarkMode ? "#f3f4f6" : "#3b82f6"}`}
                size={"1.2rem"}
              />
              <p
                className={`ml-2 font-light ${
                  DarkMode ? "text-gray-100" : "text-gray-400"
                }`}
              >
                Virtual
              </p>
            </div>
          )}

          {location === "offline" && (
            <div className=" flex items-center">
              <ImLocation color="#2563eb" size={"1.2rem"} />
              <p
                className={`ml-2 font-light ${
                  DarkMode ? "text-gray-100" : "text-gray-400"
                }`}
              >
                Offline
              </p>
            </div>
          )}

          <div
            className={`bg-indigo-500 text-gray-100 px-2 py-1 rounded-md w-fit capitalize`}
          >
            {invitationType}
          </div>
        </div>
        <div>
          <img alt="logo" src={imgLocation} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
