import { useState, useEffect } from 'react';
import LayoutCard from '../components/Cards/LayoutCard';
import CardMenu from "../components/Cards/CardMenu";
import Switch from "../components/Switch/Switch";
import React from "react";


const TAGS = [
    {
        id: 1,
        name: 'Lifestyle',
    },
    {
        id: 2,
        name: 'Fitness',
    },
    { 
        id: 3,
        name: 'Money',
    }, 
    {
        id: 4,
        name: 'Health',
    },
    {
        id: 5,
        name: 'Travel',
    },
    {
        id: 6,
        name: 'New launches',
    },
    {
        id: 7,
        name: 'Monthly product changes',
    },
    {
        id: 8,
        name: 'Newsletter',
    },
    {
        id: 9,
        name: 'Software',
    },
    {
        id: 10,
        name: 'Hardware',
    },
    {
        id: 11,
        name: 'Jobs',
    },
    {
        id: 12,
        name: 'Activity',
    },
    {
        id: 13,
        name: 'Music',
    },
    {
        id: 14,
        name: 'Movies',
    },
    {
        id: 15,
        name: 'Shows',
    },
    {
        id: 16,
        name: 'Books',
    }
  ];
    



function Notification({tags, setTags}) {

const [ filterTags, setFilterTags ] = useState([])
const [tagSearch, setTagSearch] = useState('')  

  const handleClick = (tag) => {
    setTags(currentTags =>{
      if(currentTags.length === 3 &  !currentTags.includes(tag) ){
        return (
          {alert: "You can only select 3 tags"}
        )
      }
      else if(currentTags.includes(tag)){
        return currentTags.filter((item) => item !== tag)
    }  return (  
    [...currentTags, tag]
    )
    });
  };

  
  useEffect(() => {
    if(tagSearch ==='') {
        setFilterTags(TAGS)
    }
    else {
        setFilterTags(TAGS.filter(tag => tag.name.toLowerCase().includes(tagSearch.toLowerCase())))
        const results = TAGS.filter(tag => tag.name.toLowerCase().includes(tagSearch.toLowerCase()))
        setFilterTags(results)
    }
}
, [tagSearch])


  

  return (
    <div className='!z-5 w-96 h-full relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none'>
      <div className="relative mb-3 flex items-center justify-between pt-1">
        <h4 className="text-xl ml-5 font-bold text-navy-700 dark:text-white">
          Add Tags: 
        </h4>
        <h6></h6>
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
                    onChange={(e) => setTagSearch(e.target.value)}
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for 3 tags..."
                    />
                  </div>
                </div>
                
                </div>
                <br />
                {!tags && "Select 3 tags" }
           {tags[0] ? `${tags[0]}` : ''} 
           {tags[1] ? `, ${tags[1]}` : ''}
           {tags[2] ? `, ${tags[2]}` : ''}
      <div className="flex flex-col w-full  mr-auto h-96 overflow-y-scroll p-5">
        {/* the custom checkbox desing added in src/index.js */}
        {filterTags.map((tag) => (
        <div className="mt-3 flex items-center gap-3 block" onClick={() => handleClick(tag.name)}>
          <Switch id="switch1" tags={tags}   />
          <label
            htmlFor="checkbox1"
            className="text-base font-medium text-navy-700 dark:text-white"
          >
            {tag.name}
          </label>
        </div>
        ))}
      </div>
    </div>

  );
}

export default Notification;
