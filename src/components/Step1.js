import React from "react";
import Image from "next/image";
import career from "../../public/assets/images/career.png";
import team from "../../public/assets/images/zimo-team-black.png";
import intership from "../../public/assets/images/zimointernship.png";

const Step1 = ({ handleNext, country, setCountry }) => {
  return (
    <>
      <div className="relative border border-gray-800 w-[700px] h-[450px] mt-20 mx-auto rounded-lg">
        <p className="uppercase text-center mt-20 text-lg">
          Start your application
        </p>
        <Image
          className="w-[250px] h-[130px] mx-auto mt-[40px] mb-[50px]"
          src={career}
          alt=""
        />
        <div className="w-[400px] mx-auto">
          <select
            required
            id="countries"
            onChange={(e) => setCountry(e.target.value)}
            className="p-4 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="default">Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="absolute right-[-60px] bottom-20">
          <button
            disabled={!country}
            className="bg-black text-white rounded-lg p-10"
            onClick={handleNext}
          >
            START
          </button>
        </div>
      </div>
      <div className="flex justify-between pt-5 ml-10 mr-10">
        <Image className="w-[300px] h-[40px]" src={team} alt="" />
        <Image className="w-[100px]" src={intership} alt="" />
      </div>
    </>
  );
};

export default Step1;
