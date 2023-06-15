import React, { useState } from "react";
import Step2 from "./Step2";
import Step1 from "./Step1";
import Step3 from "./Step3";

const Multistep = () => {
  const [country, setCountry] = useState("");
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <p className=" text-[20px] font-[Lato] font-[light] ml-10 ">APPLY</p>
      <div className="flex gap-x-[2px] justify-center mt-10 ">
        <div className="bg-black w-[100px] h-[5px]"></div>
        <div
          className={`${
            step === 2 || step === 3 ? "bg-black" : "bg-gray-300"
          } w-[100px] h-[5px]`}
        ></div>
        <div
          className={`${
            step === 3 ? "bg-black" : "bg-gray-300"
          } w-[100px] h-[5px]`}
        ></div>
      </div>
      {step === 1 && (
        <Step1
          handleNext={handleNext}
          setCountry={setCountry}
          country={country}
        />
      )}{" "}
      {step === 2 && <Step2 handleNext={handleNext} />}
      {step === 3 && <Step3 />}
    </>
  );
};

export default Multistep;
