import React from "react";




const RecentViewed = ({recents, bidders, likes }) => {

  0

  return (
    <div className=" p-4  h-full w-full !z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
      <div className="mb-8 w-full">
        <h4 className="text-xl font-bold text-center text-navy-700 dark:text-white">
          Recent Favorites
        </h4>
      </div>
      {/* Map recent favorites  */}

 {recents.map((recent) => {
  return (
      <div key={recent._id} className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex items-center">
          <div className="">
            <img className="h-[83px] w-[83px] rounded-lg" src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' alt="" />
          </div>
          <div className="ml-4">
            <p className="text-base font-medium text-navy-700 dark:text-white">
              {recent.title}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              By:{recent.author}
              <br />
              {recent.description}
              <a
                className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                href=" "
              >
                
              </a>
            </p>
          </div>
        </div>
        
        {recent.tags ? (
          <div className="flex flex-col items-center mt-[-2rem] gap-4 justify-center">
          <div className="flex  text-sm  gap-2  text-[green] dark:text-white">
            <button className="bg-slate-100 p-1 rounded-full">
              {recent.tags[0]}
            </button>
            <button className="bg-slate-100 p-1 rounded-full">
              {recent.tags[1]}
            </button>
            <button className="bg-slate-100 p-1 rounded-full">
              {recent.tags[2]}
            </button>
           
          </div>
{recent.category ? recent.category : "No category"} 
          </div>
        ) : (
          <div className="flex items-center justify-center text-gray-600 dark:text-white">
            No tags
          </div>
        )}
        <div className="mr-4 flex flex-col items-center justify-center text-gray-600 dark:text-white">
         {/* Category */}
         <div className="flex flex-row-reverse md:mt-2 lg:mt-0">
            <span className="z-0 ml-px inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#E0E5F2] text-xs text-navy-700 dark:!border-navy-800 dark:bg-gray-800 dark:text-white">
              +{recent.likes?.length || 0}
            </span>
            {bidders.map((avt, key) => (
              <span
                key={key}
                className="z-10 -mr-3 h-8 w-8 rounded-full border-2 border-white dark:!border-navy-800"
              >
                <img
                  className="h-full w-full rounded-full object-cover"
                  src={avt}
                  alt=""
                />
              </span>
            ))}
          </div>
        </div>
      </div>
 )})}
      </div>
   
  );
};

export default RecentViewed
