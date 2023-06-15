import React, { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import back from "../../public/assets/images/Group 3215.png";

const Multistep = () => {
  const [country, setCountry] = useState("");
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <Navbar />
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
      {step === 2 && <Step2 handleNext={handleNext} setStep={setStep} />}{" "}
      {step === 3 && <Step3 setStep={setStep} />}
    </>
  );
};

export default Multistep;
