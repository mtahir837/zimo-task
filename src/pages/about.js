import Image from "next/image";
import backlogo from "../../public/assets/images/logo.png";
import Group from "../../public/assets/images/Group 3055.png";
import Group1 from "../../public/assets/images/Group 3385.png";
import Group2 from "../../public/assets/images/Group 3005.png";
import Group3 from "../../public/assets/images/Group 3035.png";
import Group4 from "../../public/assets/images/Path 7582.png";
import Group5 from "../../public/assets/images/Group 2867.png";
import Group6 from "../../public/assets/images/Path 59.png";
import Group7 from "../../public/assets/images/Group 4743.png";
import Group8 from "../../public/assets/images/Path 27315.png";
import Group9 from "../../public/assets/images/Group 4758.png";
import Group10 from "../../public/assets/images/Group 4762.png";
import Group11 from "../../public/assets/images/Rectangle 945.png";
import Group12 from "../../public/assets/images/Rectangle 946.png";
import Group13 from "../../public/assets/images/Rectangle 947.png";
import Group14 from "../../public/assets/images/Rectangle 944.png";
import Group15 from "../../public/assets/images/Path 7815.png";
import Group16 from "../../public/assets/images/Group 3094.png";
import Group17 from "../../public/assets/images/Group 3100.png";
import Group18 from "../../public/assets/images/Group 3215.png";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="main_div ">
        <nav
          id="nav"
          className=" pt-[20px]  inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent"
        >
          <div className="p-4  flex justify-between	  ">
            <div className="font-extrabold tracking-widest text-xl pl-[20px]">
              <Image className="w-[65.96px] h-[50px]" src={Group} alt="" />
            </div>
            <div class="font-extrabold tracking-widest text-xl pl-[30px] ">
              <Image className="w-[184.9px] h-[50px]" src={Group1} alt="" />
            </div>
            <div className="  tracking-widest  pt-[30px] pl-[30px] ">
              <p>ABOUT</p>
            </div>
          </div>
          <div>
            <Image className="w-[204px] h-[50px]" src={Group2} alt="" />
          </div>
          <div className="p-4  flex justify-between	w-[500px] ">
            <div className="  flex  justify-between ">
              <div>
                <p className="text-[14px]">
                  17:23 LONDON UNITED KINGDOM <br />
                  <span className="text-right  text-[#b69853] ">
                    SUNDAY,11 FEBRUARY 2023
                  </span>
                </p>
              </div>
              <div className="pl-[10px] pt-[10px]">
                <Image className="w-[37.31px] h-[25px]" src={Group3} />
              </div>
            </div>
            <div class="font-extrabold tracking-widest text-xl pt-[10px]">
              <Image className="w-[20.89px] h-[25px]" src={Group4} alt="" />
            </div>
            <div class="font-extrabold tracking-widest text-xl pt-[10px]">
              <Image className="w-[20.69px] h-[25px]" src={Group5} alt="" />
            </div>
          </div>
        </nav>
        <div>
          <Image className="ml-8 mt-[20px]" src={Group18} alt="" />
        </div>
        <header
          id="up"
          className="  bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative"
        >
          <div className=" h-[500px] flex items-center ml-10">
            <div className="">
              <p className="text-gray-100 text-[40px] font-lato">Discover</p>
              <p className="text-gray-200 text-[60px]  ">A NEW WORLD</p>
              <p className="text-[#606060]   text-[20px] font-[Lato] font-[Regular]">
                FOR THOSE WHO WISH FOR MORE...
              </p>
            </div>
          </div>

          <h6 className="text-[#5f5f5f] text-center  text-[20px] font-[Lato] font-[Regular]">
            Bringing the world closer together
          </h6>
          <Image
            className=" mx-auto w-[40px] h-[20px] mt-[20px]"
            src={Group6}
          />
        </header>
      </div>

      <p className="text-center mt-[30px] mb-[30px] ">
        A Real estate and property platform that is changing your world{" "}
      </p>
      <div className=" grid lg:grid-cols-2">
        <div>
          <div className="pl-[30px]">
            <p className="text-black  uppercase   text-[35px] ">
              a revolutionary platform
            </p>
            <p className="text-black uppercase text-[60px]">
              entries - sellers
            </p>
            <p className="text-black uppercase text-[90px]">Worldwide</p>
          </div>
          <div className="mt-[100px] ml-[50px]  font-[Lato] font-[Regular]">
            <p className="text-[35px]">THE BEST OF THE BEST</p>
            <p className="mt-[20px] text-[15px]  font-[Lato] font-[Regular] tracking-wides ">
              A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND
              MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET
              FROM ACROSS THE WORLD.
            </p>
          </div>
        </div>
        <div>
          <Image
            className="w-[500px] h-[125px] mx-auto mt-[150px] "
            src={Group7}
          />
          <p className="text-center mt-[40px] font-[Lato] font-[Regular] tracking-wides ">
            connecting users from across the globe <br /> to facilitate life
            most important <br /> personal transactions{" "}
          </p>
        </div>
      </div>
      <Image
        className="mx-auto w-[40px] h-[20px] my-[50px] "
        src={Group8}
        alt=""
      />

      <section className="text-gray-600 ">
        <div className="container  mx-auto">
          <div className="flex justify-between mb-[10px]">
            <p className="tracking-widest text-[20px] font-[Lato] font-[Regular] text-[#0000005]">
              OUR CATEGORIES
            </p>
            <div className="flex mb-[20px] ">
              <Image
                className=" text-white mr-[40px] w-[15px] h-[25px]"
                src={Group17}
                alt=""
              />
              <Image className="w-[15px] h-[25px]" src={Group16} alt="" />
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4">
              <div className=" card-div h-screen flex items-center justify-center">
                <card className="relative h-[30rem] sm:h-96 w-[35rem] rounded-lg">
                  <Image src={Group12} alt="" />

                  <div className="absolute w-full h-full bottom-0  rounded-lg flex flex-col items-bottom justify-center text-bottom">
                    <p className=" flex justify-center text-white mt-[120px] tracking-widest">
                      REAL ESTATE
                    </p>
                  </div>
                </card>
              </div>
            </div>

            <div className="p-4 lg:w-1/4">
              <div className="card-div h-screen flex items-center justify-center">
                <card className="relative h-[30rem]  sm:h-96 w-[35rem] rounded-lg">
                  <Image src={Group11} alt="" />

                  <div className="absolute w-full h-full bottom-0  rounded-lg flex flex-col items-bottom justify-center text-bottom">
                    <p className=" flex justify-center  text-white mt-[120px] tracking-widest">
                      CARS
                    </p>
                  </div>
                </card>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="card-div h-screen flex items-center justify-center">
                <card className="relative h-[30rem] sm:h-96 w-[35rem] rounded-lg">
                  <Image src={Group13} alt="" />

                  <div className="absolute w-full h-full bottom-0  rounded-lg flex flex-col items-bottom justify-center text-bottom">
                    <p className="  flex justify-center text-white mt-[120px] tracking-widest">
                      YACHTS
                    </p>
                  </div>
                </card>
              </div>
            </div>
            <div className="p-4 lg:w-1/4">
              <div className="card-div h-screen flex items-center justify-center">
                <card className="relative h-[30rem] sm:h-96 w-[35rem] rounded-lg">
                  <Image src={Group14} alt="" />

                  <div className="absolute w-full h-full bottom-0  rounded-lg flex flex-col items-bottom justify-center text-bottom">
                    <p className=" flex justify-center   text-white mt-[120px] tracking-widest3">
                      WATCHES
                    </p>
                  </div>
                </card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <p className="uppercase text-center text-[25px] tracking-widest font-[Lato] font-[Regular] text-[black] ">
          one platform for all premium listing{" "}
        </p>
        <p className="uppercase tracking-widest text-black text-center text-[20px] font-[Lato] font-[Regular] mb-5  mt-[20px] ">
          UNLIMITED POTENTIAL
        </p>

        <div className="container flex flex-wrap px-5 py-12 mx-auto items-center">
          <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <Image src={Group9} alt="" />
            <p className="text-[40px] mt-[20px] font-[Lato] font-[Regular] text-black ">
              ONE SOURCE
            </p>
            <p className=" text-[60px] font-[Lato] font-[Regular] text-black">
              ENTRY TICKETS
            </p>
            <p className=" text-[20px] font-[Lato] font-[Regular]">
              FOR ALL PREMIUM LISTINGS
            </p>
          </div>
          <div className="flex flex-col md:w-1/2 md:pl-12">
            <Image src={Group10} alt="" />
            <p className="text-center text-black mt-5  uppercase font-[lato] font-[Regular] text-[15px] tracking-widest">
              LET YOUR DREAMS FIND YOU
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className=" backimage mt-0 h-screen w-full  bg-cover bg-no-repeat">
          <p className=" text-right pt-[100px]   uppercase font-[lato] font-[Regular] text-[25px] text-white mr-[70px]  tracking-widest ">
            Personalised for You
          </p>
          <p className="  text-right text-center  uppercase font-[lato] font-[Regular] text-[15px] text-white mr-10 mt-[40px] tracking-widest">
            Delivering thousands of personalised alerts <br /> everyday, our
            USERS can be first in line when <br /> that opportunity of a
            lifetime is here.
          </p>
          <div className=" mr-10 mt-[60px] flex justify-end  uppercase font-[lato] font-[Regular] text-[15px] tracking-widest">
            <p className="text-white">CREATE USER ID</p>
            <Image
              className="w-[30px] h-[10px] ml-1 mt-2 "
              src={Group15}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}
