import React from "react";
import {
  Card,
  CardBody
} from "@material-tailwind/react";
import { Categories } from "../../components/Forms/Categories";
import { Tags } from "../../components/Forms/Tags";

const addPost = () => {
  return (
    <Card className="mx-5 bg-white mt-10 mb-6 lg:mx-4 border border-blue-gray-100 overscroll-none top-10">
 <CardBody className="p-4">
           
 <form action="#">
        <div className="p-6.5">
      <div className="flex  w-full ">
     



          <div className="mb-4.5 flex w-full flex-col gap-6">
            <div className="w-full">
              <Categories />
              <Tags />
              <div className="w-full ">
                <label className="mb-2.5 block text-black dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
                </div>
              </div>
            </div>



<div className="bg-black w-full"></div>
          </div>
          



          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Description
            </label>
            <textarea
              rows={3}
              placeholder="Type your message"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

      

          <Categories />

          <div className="mb-6">
            <label className="mb-2.5 block text-black dark:text-white">
              Message
            </label>
            <textarea
              rows={25}
              placeholder="Type your message"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

          <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
            Post
          </button>
        </div>
      </form>

  



      <div className=" h-fit overflow-y-hidden  right-12 rounded-xl 2xl:col-span-1 sm:hidden md:hidden lg:hidden xl:block xxl:hidden">
        <div className="flex flex-col fixed w-[27%]">
          <div className="mb-4"></div>
          <div></div>
        </div>
      </div>



            </CardBody>
      </Card>
    
  );
};

export default addPost;




{/* 
      <form action="#">
        <div className="p-6.5">
      <div className="flex  w-full ">
     



          <div className="mb-4.5 flex w-full flex-col gap-6">
            <div className="w-full">
              <Categories />
              <Tags />
              <div className="w-full ">
                <label className="mb-2.5 block text-black dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
                </div>
              </div>
            </div>



<div className="bg-black w-full"></div>
          </div>
          



          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Description
            </label>
            <textarea
              rows={3}
              placeholder="Type your message"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

      

          <Categories />

          <div className="mb-6">
            <label className="mb-2.5 block text-black dark:text-white">
              Message
            </label>
            <textarea
              rows={25}
              placeholder="Type your message"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>

          <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
            Post
          </button>
        </div>
      </form>

  



      <div className=" h-fit overflow-y-hidden  right-12 rounded-xl 2xl:col-span-1 sm:hidden md:hidden lg:hidden xl:block xxl:hidden">
        <div className="flex flex-col fixed w-[27%]">
          <div className="mb-4"></div>
          <div></div>
        </div>
      </div>
    </> */}