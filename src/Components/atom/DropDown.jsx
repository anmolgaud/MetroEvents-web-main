import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// Initialization htmlFor ES Users
import {
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";


const DropDown = ({reducer, defaultValue, optionValues}) => {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(defaultValue);
  useEffect(()=>{
    initTE({ Dropdown, });
  }, [selected,])
  return (
    <div className="relative" data-te-dropdown-ref>
      <button
        className="flex items-center whitespace-nowrap rounded bg-neutral-100 px-2 py-1 text-sm font-medium capitalize leading-normal text-gray-700  transition duration-150 ease-in-out hover:bg-neutral-200  focus:bg-neutral-200 focus:outline-none focus:ring-0 motion-reduce:transition-none "
        type="button"
        id="visibility"
        data-te-dropdown-toggle-ref
        aria-expanded="false"
        
      >
        {selected}
        <span className="ml-2 mr-1 w-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>
      <ul
        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
        aria-labelledby="visibility"
        data-te-dropdown-menu-ref
      >
        {optionValues.map((value, index) => 
          <li key={index}
          className="block w-full whitespace-nowrap capitalize bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
          data-te-dropdown-item-ref
          onClick={()=> {setSelected(value), dispatch(reducer(value))}}
        >
          {value}
      </li>
        )}
      </ul>
    </div>
  );
};

export default DropDown;
