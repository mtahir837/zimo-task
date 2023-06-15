import React from "react";
import Image from "next/image";
import team from "../../public/assets/images/zimo-team-black.png";
import intership from "../../public/assets/images/zimointernship.png";
import back from "../../public/assets/images/Group 3215.png";

const Step3 = ({ setStep }) => {
  return (
    <>
      <h1
        className="ml-[50px] mt-5 font-bold text-2xl cursor-pointer"
        onClick={() => setStep(2)}
      >
        BACK
      </h1>
      <div className="relative w-[600px] mx-auto mt-[100px]">
        <div className="relative mb-6">
          <input
            type="text"
            id="input-group-1"
            className="tracking-widest py-4 placeholder:text-black placeholder:text-center placeholder:text-[20px] border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="EMAIL ADDRESS"
          />
          <input
            type="text"
            id="input-group-1"
            className="tracking-widest mt-2 py-4 placeholder:text-black placeholder:text-center placeholder:text-[20px] border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="CONFIRM  EMAIL ADDRESS"
          />
          <input
            type="text"
            id="input-group-1"
            className="tracking-widest  mt-2 py-4 placeholder:text-black placeholder:text-center placeholder:text-[20px] border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="FIRST NAME"
          />
          <p className=" text-center text-[#777573]">
            use your legal name as it appears on your official documents
          </p>
          <input
            type="text"
            id="input-group-1"
            className=" mt-2 tracking-widest py-4 placeholder:text-black placeholder:text-center placeholder:text-[20px] border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="LAST NAME(INCLUDING MIDDLE NAME)"
          />
          <input
            type="text"
            id="input-group-1"
            className="tracking-widest mt-2 py-4 placeholder:text-black placeholder:text-center placeholder:text-[20px] border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="MM/DD/YYYY"
          />
          <input
            type="text"
            id="input-group-1"
            className="tracking-widest mt-2 py-4 placeholder:text-black placeholder:text-center placeholder:text-[20px] border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="PAKISTAN"
          />
        </div>
      </div>
      <div className="absolute right-[100px] bottom-5">
        <button className="bg-black text-white rounded-lg p-10 uppercase">
          continue
        </button>
      </div>
      <div className="flex justify-between pt-5 ml-10 mr-10">
        <Image className="w-[300px] h-[40px]" src={team} alt="" />
        <Image className="w-[100px]" src={intership} alt="" />
      </div>
    </>
  );
};

export default Step3;
