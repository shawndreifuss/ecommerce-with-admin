import React from "react";
import { useUser } from '../../../context/UserContext'


const ProfileCard = () => {

  const { state } = useUser();
  const  user  = state.user
  
  
  return (
    <div className=" items-center w-full h-full p-[16px] bg-cover relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg')" }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src={user?.avatar ? `${user.avatar}` : 'https://villagesonmacarthur.com/wp-content/uploads/2020/12/Blank-Avatar.png'}/>
           </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {user? user.username : ""}
        </h4>
        <p className="text-base font-normal text-gray-600">CEO</p>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">{user ? user.posts.length : "47"}</p>
          <p className="text-sm font-normal text-gray-600">Posts</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
          {user? user.followers.length : "47"}
          </p>
          <p className="text-sm font-normal text-gray-600">Followers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
          {user? user.following?.length : "47"}
          </p>
          <p className="text-sm font-normal text-gray-600">Following</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
