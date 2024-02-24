import LayoutCard from "../components/Cards/LayoutCard";
import React from "react";
import { useState } from "react";

const General = ({ title, description}) => {
  const [body, setBody] = useState("");
  
    
  return (
    <LayoutCard extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          {title ? title : "Title of Blog Post"}
        </h4>
        <p  className="mt-2 px-2 text-base text-gray-600">
          {description ? description : "Write a short description for Blog Post" }
        </p>
      </div>
      {/* Cards */}
      <div className="grid ">
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                 <textarea
                  rows={14}
                  type="text"
                  onChange={(e) => setBody(e.target.value)}
                  value={body}
                  placeholder="Write a short description for Blog Post"
                  className="h-full w-full p-5 rounded-4 bg-[#F4F7FE] text-lg font-lg text-[#1B254B] outline-none border-none placeholder:!text-gray-400 placeholder:!text-center placeholder:!align-center dark:bg-navy-900 dark:text-white dark:placeholder:!text-white "
                ></textarea>
        </div>
      </div>
    </LayoutCard>
  );
};

export default General;
