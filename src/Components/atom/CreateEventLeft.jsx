import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeTitle,
  changeStartDateTime,
  changeEndDateTime,
  changeLocation,
  changeTicket,
  changeApproval,
  changeVisibility,
  changeCapacity,
} from "../../features/createEventSlice";

import DropDown from "./DropDown";

import { IoTicketSharp, IoLocationOutline } from "react-icons/io5";
import { BsPersonCheckFill } from "react-icons/bs";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { MdVisibility } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { CgCalendarTwo } from "react-icons/cg";
import { AiOutlineGlobal } from "react-icons/ai";


const getOffset = () => {
  const d = new Date().toString();
  const offset = d.split(' ')[5];
  const res = offset.slice(0,6) + ':' + offset.slice(6);
  return res;
}

const CreateEventLeft = () => {
  const dispatch = useDispatch();
  const { DarkMode } = useSelector((store) => store.siteTheme);
  return(
    // First Section
    <div className="flex flex-col min-w-max bg-white px-4 rounded-md">
          {/* Title */}
          <input
            onChange={(e) => dispatch(changeTitle(e.target.value))}
            className="min-h-[4rem] whitespace-nowrap bg-neutral-100 font-medium text-neutral-500 text-2xl focus:outline-none rounded-md pl-2 capitalize mt-4 mb-8"
            type="text"
            id="title"
            placeholder="Event Name"
          />

          {/* Date and Time */}
          <div className="flex  w-full flex-nowrap mb-8">
            <div className="border-2 self-start mt-4 bg-white border-gray-100 rounded-lg p-2 mr-2">
              <CgCalendarTwo size={"1.5rem"} className="text-gray-500" />
            </div>
            <div className="w-full p-2 bg-neutral-100 rounded-md flex gap-y-2 flex-col flex-nowrap">
              <div className="w-full grid grid-cols-5 gap-x-2">
                <p className="col-start-1 col-end-2">Start</p>
                <input
                  className="px-2 py-1 bg-neutral-200 rounded-md col-start-2 col-end-4"
                  type="date"
                />
                <input
                  className="px-2 py-1 bg-neutral-200 rounded-md col-start-4 col-end-6"
                  type="time"
                />
              </div>
              <div className="w-full mb-1 grid grid-cols-5 gap-x-2">
                <p className="col-start-1 col-end-2">End</p>
                <input
                  className="px-2 py-1 bg-neutral-200 rounded-md col-start-2 col-end-4"
                  type="date"
                />
                <input
                  className="px-2 py-1 bg-neutral-200 rounded-md col-start-4 col-end-6"
                  type="time"
                />
              </div>
              <div className="w-full pt-1 border-t-2 flex items-center flex-nowrap">
                <AiOutlineGlobal className="text-neutral-500" />
                <p className="ml-1 mt-1 text-sm text-neutral-500">{getOffset()}</p>
              </div>
            </div>
          </div>

          {/* location */}
          <div className="flex items-center  w-full flex-nowrap mb-8">
            <div className="border-2 bg-white border-gray-100 rounded-lg p-2 mr-2">
              <IoLocationOutline size={"1.5rem"} className="text-gray-500" />
            </div>
            <textarea
              onChange={(e) => dispatch(changeLocation(e.target.value))}
              className="pl-2 rounded-md py-1 w-full text-neutral-500 focus:outline-none bg-neutral-100"
              cols={2}
              placeholder="Add Event Location (Address or Link)"
            ></textarea>
          </div>

          {/* Event Options */}
          <div>
            <p className="mb-2 font-medium text-sm text-neutral-600 tracking-wide">
              Event Options
            </p>
            <div className="flex flex-col gap-y-1 px-4 py-2 bg-neutral-100 rounded-md">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <IoTicketSharp className="text-neutral-400 text-lg" />
                  <p className="ml-2">Tickets</p>
                </div>
                <div className="relative w-[30%]">
                  <input
                    onChange={(e) => dispatch(changeTicket(e.target.value))}
                    className="w-full pl-2 bg-transparent focus:outline-blue-500 rounded-sm"
                    type="text"
                    placeholder="Free"
                  />
                  <GoPencil className="absolute top-0 right-0 mt-1 mr-1" />
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center">
                  <BsPersonCheckFill className="text-neutral-400 text-lg" />
                  <p className="ml-2">Approval</p>
                </div>
                <input
                  onChange={(e) => dispatch(changeApproval(e.target.value))}
                  className="w-5 h-5 focus-within:outline-none"
                  type="checkbox"
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center">
                  <RiArrowDownDoubleFill className="text-neutral-400 text-lg" />
                  <p className="ml-2">Capacity</p>
                </div>
                <div className="relative w-[40%]">
                  <input
                    onChange={(e) => dispatch(changeCapacity(e.target.value))}
                    className="w-full overflow-hidden pl-2 bg-transparent focus:outline-blue-500 rounded-sm"
                    type="text"
                    placeholder="Unlimited"
                  />
                  <GoPencil className="absolute top-0 right-0 mt-1 mr-2" />
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center">
                  <MdVisibility className="text-neutral-400 text-lg" />
                  <p className="ml-2">Visibility</p>
                </div>
                <DropDown
                  reducer={changeVisibility}
                  defaultValue="Choose"
                  optionValues={["Global", "Private"]}
                />
              </div>
            </div>
            <button className="bg-neutral-800 w-full rounded-md py-2 my-4 font-semibold tracking-wide text-neutral-100">
              {" "}
              Create Event
            </button>
          </div>
        </div>
  )
}

export default CreateEventLeft;

