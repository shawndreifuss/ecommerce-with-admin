import LayoutCard from '../components/Cards/LayoutCard';
import CardMenu from "../components/Cards/CardMenu";
import Switch from "../components/Switch/Switch";
import React from "react";

function Notification() {
  return (
    <div className='!z-5 w-96 h-full relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none'>
      <div className="relative mb-3 flex items-center justify-between pt-1">
        <h4 className="text-xl ml-5 font-bold text-navy-700 dark:text-white">
          Notifications
        </h4>
        <CardMenu />
      </div>
      <div className="flex justify-center w-[90%] mx-auto mb-10">
                <div className="flex items-center w-full mx-auto ">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search branch name..."
                    />
                  </div>
                </div>
                </div>
      <div className="flex flex-col mx-auto h-96 overflow-y-scroll p-5">
        {/* the custom checkbox desing added in src/index.js */}
        <div className="mt-3 flex items-center gap-3">
          <Switch id="switch1" />
          <label
            htmlFor="checkbox1"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Item comment notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch2" />
          <label
            htmlFor="checkbox2"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Buyer review notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch3" />
          <label
            htmlFor="checkbox3"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Rating reminders notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch4" />
          <label
            htmlFor="checkbox4"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Meetups near you notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch5" />
          <label
            htmlFor="checkbox5"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Company news notifications
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch6" />
          <label
            htmlFor="checkbox6"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            New launches and projects
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch7" />
          <label
            htmlFor="checkbox7"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Monthly product changes
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            htmlFor="checkbox8"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Subscribe to newsletter
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            htmlFor="checkbox8"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Email me when someone follows me
          </label>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            htmlFor="checkbox8"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Email me when someone follows me
          </label>
        </div><div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            htmlFor="checkbox8"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Email me when someone follows me
          </label>
        </div><div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            htmlFor="checkbox8"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Email me when someone follows me
          </label>
        </div><div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            htmlFor="checkbox8"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Email me when someone follows me
          </label>
        </div><div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            htmlFor="checkbox8"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Email me when someone follows me
          </label>
        </div><div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            htmlFor="checkbox8"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Email me when someone follows me
          </label>
        </div><div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            htmlFor="checkbox8"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Email me when someone follows me
          </label>
        </div><div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            htmlFor="checkbox8"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Email me when someone follows me
          </label>
        </div><div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            htmlFor="checkbox8"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Email me when someone follows me
          </label>
        </div><div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            htmlFor="checkbox8"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Email me when someone follows me
          </label>
        </div><div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            htmlFor="checkbox8"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Email me when someone follows me
          </label>
        </div><div className="mt-4 flex items-center gap-3">
          <Switch id="switch8" />
          <label
            htmlFor="checkbox8"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            Email me when someone follows me
          </label>
        </div>
      </div>
    </div>
  );
}

export default Notification;
