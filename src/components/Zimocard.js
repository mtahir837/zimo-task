import React from "react";
import Image from "next/image";
import Group1 from "../../public/assets/images/Path 7663.png";
import Group2 from "../../public/assets/images/Path 7664.png";
import Group12 from "../../public/assets/images/Rectangle 946.png";
import Group4 from "../../public/assets/images/Path 7682.png";
import Group5 from "../../public/assets/images/Path 7667.png";
import Group6 from "../../public/assets/images/Group 3236.png";
import Group8 from "../../public/assets/images/Group 3141.png";
import Group7 from "../../public/assets/images/g12.png";
const Zimocard = () => {
  return (
    <>
      <section className="text-gray-600 justify-center pt-4 md:pt-8 lg:pt-12 xl:pt-16 w-full">
        <div className="card-div h-screen flex items-center justify-center">
          <div className="relative rounded-lg">
            <Image src={Group12} alt="" />

            <div className="absolute w-full h-full bottom-0 rounded-lg flex flex-col">
              <div className="days  flex justify-between bg-black bg-opacity-10  rounded-lg ">
                <p className="text-center">
                  <strong>78</strong>
                  <br />
                  DAYS
                </p>
                <p className="text-center">
                  <strong>78</strong>
                  <br />
                  HOURS
                </p>
                <p className="text-center">
                  <strong>78</strong>
                  <br />
                  MINUTES
                </p>
                <p className="text-center">
                  <strong>78</strong>
                  <br />
                  SECONDS
                </p>
              </div>
              <div className=" flex justify-end mt-[20px] ">
                <Image className="fimage" src={Group2} alt="" />
                <Image className="simage" src={Group1} alt="" />
              </div>
              <div className=" mt-[70px]  flex justify-between  ">
                <Image className="ml-[20px]" src={Group4} alt="" />
                <Image className="mr-[20px]" src={Group5} alt="" />
              </div>
              <div className="slide-image flex justify-center">
                <Image src={Group8} alt="" />
              </div>
              <div className="flex text-white justify-around uppercase text-[13px] font-[Lato] font-[light] ">
                <p>Shelton Street</p>
                <p>Covent Garden</p>
                <p>LONDON</p>
                <p>WC2H</p>
              </div>

              <p className=" text-white uppercase text-center text-[13px] font-[Lato] font-[light]">
                United Kingdom
              </p>

              <div className="text-white flex justify-around v">
                <Image className="w-16 h-6" src={Group6} alt="" />
                <p className="para text-sm">
                  <strong className="text-[14px] font-[Lato] font-[Regular]">
                    £5,000,000 GBP
                  </strong>
                  <br />
                  <p className="text-[9px] font-[Lato] font-[light] text-center">
                    #ZM7861234567
                  </p>
                </p>

                <Image className="w-16 h-6 mt-2" src={Group7} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black mt-4 w-[420px] mx-auto border rounded-[15px] ">
          <div className="flex text-white justify-around pt-3 text-[15px] font-[Lato] font-[light]">
            <p>£25.00 GBP</p>
            <p>BUY ENTRY NOW</p>
          </div>
          <p className="text-white text-[9px] font-[Lato] font-[light] flex justify-end mr-3 mb-1 ">
            #ZM7861234567
          </p>
        </div>
      </section>
    </>
  );
};

export default Zimocard;
