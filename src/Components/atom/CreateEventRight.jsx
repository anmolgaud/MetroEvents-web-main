import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    changeThemeText,
    changeThemeLayout,
    changeTextColor,
    changeTypeFace,
  } from "../../features/createEventSlice";

import DropDown from "./DropDown";

import { BsType } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";

const Themes = new Map([
    ['Minimal', 'bg-Minimal'],
    ['Holiday', 'bg-Holiday'],
    ['Abstract', 'bg-Abstract'],
    ['Quantum', 'bg-Quantum']
]);

const Color = new Map([
    ['white', ['bg-white', 'text-white placeholder:text-white']],
    ['black', ['bg-black', 'text-black placeholder:text-black']],
    ['red', ['bg-red-400', 'text-red-400 placeholder:text-red-400']],
    ['indigo', ['bg-indigo-400', 'text-indigo-400 placeholder:text-indigo-400']]
])

const fontFamily = new Map([
    ['Poppins', 'font-Poppins'],
    ['Roboto', 'font-Roboto'],
    ['Decorative', 'font-Decorative']
])

const CreateEventRight = () => {
    const dispatch = useDispatch();
    const { DarkMode } = useSelector((store) => store.siteTheme);
    const {ThemeText, ThemeLayout, TextColor, TypeFace} = useSelector((store) => store.createEvent.themeOptions);

    console.log(fontFamily.get(TypeFace));

    return(
        <div className="bg-white rounded-md p-4">
          {/* Canvas */}
          <div className={`flex justify-center items-center rounded-md p-6 ${Themes.get(ThemeLayout)} bg-cover bg-center bg-no-repeat w-full h-[400px]`}>
            <div className="w-full">
              <textarea
               onChange={(e)=>dispatch(changeThemeText(e.target.value))}
               className={`w-full bg-transparent ${Color.get(TextColor)[1]} ${fontFamily.get(TypeFace)} text-3xl text-center p-4 focus:outline-white`}
               placeholder="You are invited!" cols={3} type="text" />
            </div>

          </div>
          {/* ThemeOptions */}
            <div className="w-full mt-8 p-4 rounded-lg bg-neutral-100 flex flex-col gap-y-2 flex-nowrap">
              <div className="w-full flex justify-between items-center border-b-2 pb-2">
                <div className="flex items-center">
                <IoIosColorPalette className="text-gray-600 text-2xl"/>
                <p className="ml-2 text-neutral-400">Theme</p>
                </div>
                <DropDown
                  reducer={changeThemeLayout}
                  defaultValue={"Minimal"}
                  optionValues={["Minimal", "Holiday", "Abstract", "Quantum"]}
                />
              </div>
              <div className="w-full flex justify-between items-center border-b-2 pb-2">
                <div className="flex items-center">
                  <div className={`w-6 h-6 ${Color.get(TextColor)[0]} rounded-full`}></div>
                  <p className="ml-2 text-neutral-400 ">Color</p>
                </div>
                  <DropDown
                    reducer={changeTextColor}
                    defaultValue={"white"}
                    optionValues={[
                      "white",
                      "black",
                      "red",
                      "indigo",
                    ]}
                  />
              </div>
              <div className="w-full flex justify-between items-center">
                  <div className="flex flex-nowrap items-center">
                  <BsType className="text-neutral-600 text-2xl"/>
                  <p className="ml-2 text-neutral-400 ">TypeFace</p>
                  </div>
                  <DropDown
                    reducer={changeTypeFace}
                    defaultValue={"Decorative"}
                    optionValues={[
                      "Poppins",
                      "Roboto",
                      "Decorative",
                    ]}
                  />
              </div>
            </div>
        </div>
    )
}

export default CreateEventRight;