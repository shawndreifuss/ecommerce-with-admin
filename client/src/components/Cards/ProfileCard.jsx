import React from "react";


const ProfileCard = () => {
  return (
    <div className=" items-center w-full h-full p-[16px] bg-cover relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
      {/* Background and profile */}
      <div
        className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
        style={{ backgroundImage: "url('https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg')" }}
      >
        <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img className="h-full w-full rounded-full" src='data:image/jpeg;base64,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'alt="" />
        </div>
      </div>

      {/* Name and position */}
      <div className="mt-16 flex flex-col items-center">
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          Shawn Dreifuss
        </h4>
        <p className="text-base font-normal text-gray-600">CEO</p>
      </div>

      {/* Post followers */}
      <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">17</p>
          <p className="text-sm font-normal text-gray-600">Posts</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            9.7K
          </p>
          <p className="text-sm font-normal text-gray-600">Followers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold text-navy-700 dark:text-white">
            434
          </p>
          <p className="text-sm font-normal text-gray-600">Following</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;